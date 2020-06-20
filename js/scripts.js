var pokemonList = [
{
  creatureName : 'Carnivine',
  creatureHeight : 4.07,
  creatureAbilities : ['Levitate'],
  creatureTypes : ['Grass'],
},
{
  creatureName : 'Metapod',
  creatureHeight : 2.04,
  creatureAbilities : ['Shed-skin'],
  creatureTypes : ['Bug'],
},
{
  creatureName : 'Charmander',
  creatureHeight : 2.00,
  creatureAbilities : ['Blaze', 'Solar-power'],
  creatureTypes : ['Fire'],
},
{
  creatureName : 'Squirtle',
  creatureHeight : 0.5,
  creatureAbilities : ['Rain-dish', 'Torrent'],
  creatureTypes : ['Monster', 'Water  1'],
}
]
for ( let i = 0; i < pokemonList.length; i++) {
  document.write('<h2>' + pokemonList[i].creatureName + '</h2>' + ' Height: ' + pokemonList[i].creatureHeight)
if (pokemonList[i].creatureHeight >= 4.07) {
  document.write(' (Wow that\'s big!)' )
  }
}
