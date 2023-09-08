require('dotenv').config()
const { Client, Collection, IntentsBitField, Events } = require('discord.js')
const fs = require('fs')

console.log("Ich liebe nette feger! - DevOfDeath 6/9/2023") // <3

const client = new Client({intents: [IntentsBitField.Flags.Guilds]})
client.commands = new Collection()

const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))


commandFiles.forEach(commandfile => {
    const command = require(`./commands/${commandfile}`)
    client.commands.set(command.data.name, command)
})


client.once(Events.ClientReady, (c) => {
    console.log(`Ready! Logged in as ${client.user.tag}! I am on ${client.guilds.cache.size} guild(s)!`);
    client.user.setActivity({name: 'on poeding', type: 'PLAYING'});
})

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});


client.login(process.env.DISCORD_BOT_TOKEN)