
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//  Constructs a new Die object with the random number as it's value
class Die {
  constructor(value) {
    this.value = value;

  }

//toString() method is defined to return a string representation of the die value
ToString()
  {
     let dieString = "Unknown";

      
      switch (this.value)
      {
          
          case 1:
              dieString = "one";
              break;
          case 2:
              dieString = "two";
              break;
          case 3:
              dieString = "three";
              break;
          case 4:
              dieString = "four";
              break;
          case 5:
              dieString = "five";
              break;
          case 6:
              dieString = "six";
              break;
      }

      return dieString;
  }
}

//The roll function generates a random number between 1 and 6 using Math.random() 
//Math.floor(), then creates and returns a new Die object with that value
  function roll() {
    const dieValue = Math.floor(Math.random() * 6) + 1;
    return new Die(dieValue)
  }

console.log("Let's roll some dice, baby!");
console.log("---------------------------");

//The for loop runs 10 times, rolling two dice each time
// results are stored in die1 and die2
// message string is created using template literals to include the string representations of the dice and their sum
for (let i = 0; i < 20; i++)
    {
        const die1 = roll();
        const die2 = roll();
    
        let message = `${die1.ToString()} + ${die2.ToString()} == ${die1.value + die2.value}`
        if (die1.value == die2.value)
        {
            message += " DOUBLES!";
        }
    
        console.log(message);
    }

