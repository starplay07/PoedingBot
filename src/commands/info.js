const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("information stuff")
    .addStringOption(option => option.setName("gonna").setDescription("gonna change later").setRequired(true)),
    async execute(interaction) {
        interaction.reply("info")
    }
}