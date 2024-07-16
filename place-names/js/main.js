//Translating c# to JS

const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

console.log("All names")

for (let name of names) {
  console.log(`This Place is known as ${name}`)
}

const TheNames = names.filter((name) => name.startsWith("The")) //can also use name.includes("The")
// console.log(`${TheNames}`)

for (let TheName of TheNames ) {
  console.log(TheName)
}