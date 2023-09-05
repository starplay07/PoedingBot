const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder().setName('uncle-roger ambient').setDescription('sound of disappointment'),
    async execute(interaction) {
        interaction.reply('HAAIIIYYYAAAAAAA')
    }
}