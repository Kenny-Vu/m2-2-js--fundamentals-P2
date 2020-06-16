// -------------------------------------------------------------
// String Methods Exercises
// ----------
// note: need to have covered string methods for these exercises
// -------------------------------------------------------------

// Write to the console, the desired length of each of the following strings.
// When this exercise is complete, it should write all of the answers to the console one after the other.

// Given the following data to answer the questions.
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
  console.log(grandson);
// Q1.2
// Convert the alternateRicks string to an array. Console that array.
const alternateRicksArray = alternateRicks.split(',');
  console.log(alternateRicksArray);
// Q1.3
// How many Ricks have been named in alternateRicks?
const alternateRicksNum = console.log(alternateRicksArray.length);
// Q1.4
// How many characters are there in rickSaying (without spaces)?
const rickSaying = 'wubba lubba dub dub';
let newRickSaying = rickSaying.split(" ").join("").length;
console.log(newRickSaying);

// Q1.4
// Morty doesn't actually have a middle name. Console Morty's name without "Antoine".
const realGrandson = grandson.replace('Antoine ','');
console.log(realGrandson);

// Q1.5
// Decode and console. the secret!
// To do so, you will need to remove all of the notCode words.
const decode = secret.replace('summer','').replace('bacon','').replace('scary','').replace('intergalactic','').replace('jerry','').replace('morty','').replace('beth','').replace('family','');
console.log(decode);
// Q1.6 (Stretch Goal)
// Scary Terry is actually not an enemy. Remove him from the list and console only Rick's true enemies.
const trueEnemies = enemies.replace(' Scary Terry,', '');
console.log(trueEnemies);