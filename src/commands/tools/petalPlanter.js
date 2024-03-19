const { SlashCommandBuilder } = require('@discordjs/builders');
const Recipe = require('recipes');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('petal-planter')
    .setDescription('Petal Planter Recipe'),

  async execute(interaction) {
    const recipe = Recipe;

    await interaction.reply({
      content: `the val is ${recipe.Caustic.enzymes}`
    })


  }
};
