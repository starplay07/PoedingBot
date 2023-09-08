const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder().setName('uncle-roger')
    .setDescription('sound of disappointment'),
    async execute(interaction) {
        await interaction.reply('HAAIIIYYYAAAAAAA')
    }
}