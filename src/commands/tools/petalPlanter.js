const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');
const Recipes = require('recipes')

module.exports = {
  data: new SlashCommandBuilder()
          .setName('petal-planter')
          .setDescription('Return Petal Planter Recipe'),
  async execute(interaction, client) {  
    const embed = new EmbedBuilder()
        .setTitle('Petal Planter<:petalplanter:1220387490746339388>')
        .setURL(`https://youtube.com`)
        .setColor(0xffffe4)
        .setDescription('Original Petal Planter Recipes.')
        .addFields([
          {
            name: `Honey`,
            value: `5T`,
            inline: true
          },
          {
            name: `Magic Beans`,
            value: `${Recipes.PetalPlanter.magicBeans}`,
            inline: true
          },
          {
            name: `Glitters`,
            value: `${Recipes.PetalPlanter.glitters}`,
            inline: true
          },
          {
            name: `Soft Wax`,
            value: `${Recipes.PetalPlanter.softWax}`,
            inline: true
          },
          {
            name: `Swirled Wax`,
            value: `${Recipes.PetalPlanter.swirled}`,
            inline: true
          },
          {
            name: `Super Smoothies`,
            value: `${Recipes.PetalPlanter.superSmoothies}`,
            inline: true
          },
        ])
        .setTimestamp(Date.now())
        .setAuthor({
          iconURL: interaction.user.displayAvatarURL(),
          name: interaction.user.tag
        })
        .setFooter({
          iconURL: client.user.displayAvatarURL(),
          text: client.user.tag
        });

        await interaction.reply({
          embeds: [embed]
        })
  }
}