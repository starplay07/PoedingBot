require('dotenv').config()
const { Client, Collection } = require('discord.js')
const fs = require('fs')


const client = new Client({intents: []})
client.commands = new Collection()

const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))


commandFiles.forEach(commandfile => {
    const command = require(`./commands/${commandfile}`)
    client.commands.set(command.data.name, command)
})


client.once('ready', (c) => {
    console.log(`Ready! Logged in as ${client.user.tag}! I am on ${client.guilds.cache.size} guild(s)!`);
    client.user.setActivity({name: 'on poeding', type: 'PLAYING'});
})


client.on("interaction", async (interaction) => {
    if(!interaction.isCommand()) return
    
    const command = client.commands.get(interaction.commandName)

    if(command) {
        try {
            await command.execute(interaction)
        } catch (error) {
            console.error(error)

            if(interaction.deferred || interaction.replied) {
                interaction.editReply("ERROR!!! Something went wrong!")
            }else {
                interaction.reply("ERROR!!! Something went wrong!")
            }
        }
    }
})

client.login(process.env.DISCORD_BOT_TOKEN)