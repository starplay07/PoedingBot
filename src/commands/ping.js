const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
                .setName("ping")
                .setDescription("return something cool"),
    async execute(interaction) {
        await interaction.reply("pong")
    }
}