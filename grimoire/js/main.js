// Define the Spell class (properties listed underneath)
class Spell {
  constructor(name, isEvil, energyRequired) {
    this.name = name
    this.isEvil = isEvil
    this.energyRequired = energyRequired
  }
}

// Define the SpellBook class (properties listed underneath)
class SpellBook {
  constructor(title) {
    this.title = title
    this.spells = [] //empty array of spells
  }
}

// Function to fetch/get all spells in array
const GetAllSpells = () => [
  new Spell
  (
    "Turn enemy into a newt",
     true, 
     5.1
    ),

  new Spell
  (
    "Conjure some gold for a local charity", 
    false, 
    2.99
  ),

  new Spell
  (
    "Give a deaf person the ability to hear", 
    false, 
    12.2
  ),

  new Spell
  (
    "Make yourself emperor of the universe",
     true, 
     100.0)
     ,

  new Spell
  (
    "Convince your relatives your political views are correct",
     false, 
     2921.5
    )
]

// Filters through all evil spells
const MakeEvilSpellBook = (allSpells) => {
  let evilBook = new SpellBook("Evil Book") //Title
  evilBook.spells = allSpells.filter(spell => spell.isEvil)
  return evilBook
}

// Filters through all good spells
const MakeGoodSpellBook = (allSpells) => {
  let goodBook = new SpellBook("Good Book") //Title
  goodBook.spells = allSpells.filter(spell => !spell.isEvil)
  return goodBook
}

// Logs title of each book and the name os the spells
const DisplaySpellBook = (book) => {
  console.log(book.title)
  for (let spell of book.spells) {
    console.log(`  ${spell.name}`)
  }
}

console.log("Do you believe in magic?")
console.log("------------------------")

const allSpells = GetAllSpells();
let goodBook = MakeGoodSpellBook(allSpells)
let evilBook = MakeEvilSpellBook(allSpells)

DisplaySpellBook(goodBook) //Displays goodBook in console
console.log()
DisplaySpellBook(evilBook) //Displays evilBook in console
