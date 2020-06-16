const smartGuy = 'Rick Sanchez';
const rickSaying = 'wubba lubba dub dub';
const grandson = 'Morty Antoine Smith';
const enemies =
  'Tammy Gueterman, Evil Morty, Zeep Xanflorp, Galactic Federation, Council of Ricks, Phoenixperson, Scary Terry, Abradolf Lincler, Supernova';
const alternateRicks =
  'Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Insurance Rick, Sales Rick, Supervisor Rick, Cool Rick, Cowboy Rick, Tiny Rick, Cronenberg Rick, Teacher Rick, Farmer Rick, Future Rick, Rick J22, Evil Rick, Toxic Rick, Crunk Rick, Pickle Rick, The Scientist Formerly Known as Rick, Rick C-137';
const secret =
  "summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!";
const notCode = [
  'summer',
  'bacon',
  'scary',
  'intergalactic',
  'jerry',
  'morty',
  'beth',
  'family',
];

// Q1.1
// How many names does Morty have? (use grandson)
const mortyNamesArray = grandson.split(' ');
const numberOfNames = mortyNamesArray.length;
console.log(`Morty has ${numberOfNames} names`);

// Q1.2
// Convert the alternateRicks string to an array. Console that array.
const altRick = alternateRicks.split(" ,")
console.log(altRick)

// Q1.3
// How many Ricks have been named in alternateRicks?


let numRicks = 0;
for (let x = 0; x < alternateRicks.length; x++) {
  if (alternateRicks[x].includes('Ricks')) {
    numRicks += 1;
  }
}
console.log(`${numRicks} Ricks have been named`);

// Q1.4
// How many characters are there in rickSaying (without spaces)?

let ricksayingArray = rickSaying.split('');
let characters = 0;
for (let x = 0; x < ricksayingArray.length; x++) {
  if (ricksayingArray[x] !== ' ') {
    characters += 1;
  }
}
console.log(`rickSaying has ${characters} characters`);

// Q1.4
// Morty doesn't actually have a middle name. Console Morty's name without "Antoine".

const newMorty = grandson.replace(' Antoine','');
console.log(newMorty);

// Q1.5
// Decode and console. the secret!
// To do so, you will need to remove all of the notCode words.

let reveal = secret;
for (let x = 0; x < notCode.length; x++) {
  decodedMsg = decodedMsg.replace(notCode[x], '');
}
console.log(reveal);

// Q1.6 (Stretch Goal)
// Scary Terry is actually not an enemy. Remove him from the list and console only Rick's true enemies.

let Villains = enemies.replace('Scary Terry, ', '');
console.log(Villains);