const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
                .setName("HowToMakeABot")
                .setDescription("here is the link <3"),
    async execute(interaction) {
        await interaction.reply("https://discord.com/developers/applications")
    }
}