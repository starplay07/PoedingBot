const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder().setName("ping").setDescription("return something cool"),
    async execute(interaction) {
        interaction.reply("pong")
    }
}