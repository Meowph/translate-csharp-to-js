
class Enemy {
  constructor(firstName, lastName, isReallyHated, offenses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isReallyHated = isReallyHated;
    this.offenses = offenses;
  }
} 

console.log("My Enemies List!");
console.log("----------------");

let GetEnemies = () => [
  new Enemy(
    "Joshua",
    "Flowers",
    true,
    [
      "Being a jerk to me in elementary school",
      "Not being nice to me in elementary school"
    ]
  ),
  new Enemy(
    "Darth",
    "Vader",
    false,
    [
      "Cut off Luke's hand",
      "Murdered all those kids",
      "Unkind management practices"
    ]
  ),
  new Enemy(
    "Betty",
    "Rudelady",
    true,
    [
      "Phone calls in the theater",
      "Phone calls on the bus",
      "Phone calls in line at the grocery store",
      "Poor conversationalist"
    ]
  ),
  new Enemy(
    "Leon",
    "Peck",
    false,
    ["Keeps giving me a hotplate"]
  )
];

const enemies = GetEnemies();

// Log the list of enemies
for (let myEnemy of enemies) {
  if (myEnemy.isReallyHated) {
    console.log(`${myEnemy.firstName} ${myEnemy.lastName}, (Really, really dislike!)`)
  } else {
    console.log(`${myEnemy.firstName} ${myEnemy.lastName}`)
  }
}

// Create a new enemy instance and add it to the list
const newEnemy = new Enemy(
  "Angel",
  "Spear",
  true,
  [
    "Throws up wherever", 
    "Knocks everyone's food onto the floor for fun", 
    "Makes loud noises at 3am"
  ]
);

// Add the new enemy to the enemies list
enemies.push(newEnemy)

console.log("----------------")
console.log("Updated Enemies List!")

// Log the updated list of enemies
for (let myEnemy of enemies) {
  if (myEnemy.isReallyHated) {
    console.log(`${myEnemy.firstName} ${myEnemy.lastName}, (Really, really dislike!)`)
  } else {
    console.log(`${myEnemy.firstName} ${myEnemy.lastName}`)
  }
}