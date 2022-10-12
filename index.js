/*
1. How do we assign a value to a variable? A. With the assignment operator
    declare the variable and assigning a value to the variable
    let chicken = 5
2. How do we change the value of a variable
    reassign the variable to a new value
    chicken= 6
    console.log(chicken)
3.How do we assign an existing variable to a new variable?
    rooster = chicken
    console.log(rooster)
    declare the new variable and use assignment operator to set it equal to existing
4.Remind me, what are declare, assign, and define?
    declare - declaration states the type of a variable, along with its name.
    assign- create a value for variable-- assign value
   ** define- what data type it is
5.What is pseudocoding and why should you do it?
    planning out code first and develop a algorithm
6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    30% to 40% thinking how to solve the problem
    60% to 70% actually coding
*/

//=========================STRINGS=================
// Create a variable called firstVariable
let firstVariable
// Assign it the value of the string "Hello World"
firstVariable = "Hello World"
// Change the value of this variable to some number
firstVariable = 6
//console.log(firstVariable)
// Store the value of firstVariablein a new variable called secondVariable
secondVariable = firstVariable
// Change the value of secondVariableto any string.
secondVariable = "whats up"
//console.log(secondVariable)
// What is the value of firstVariable?
//the number 6
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
myName = "Rifat"
greet = "Hello my name is"
//console.log(`${greet} ${myName}`)

//=============================BOOLEANS=================
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

//console.log(a < b);
//console.log(c > d);
//console.log('Name'==='Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
//console.log(true || false);
//console.log(false || false || false || false || false || true);
//console.log(false === false)
//console.log(e === 'Kevin');
//console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
//console.log(48 == '48');

//=========The farm===========
//   Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit
// let animal = "cow"
// if (animal === "cow") {
//     console.log("mooooo")
// }else {
//     console.log("Hey! You're not a cow")
// }

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", 
//if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
// let age = 20
// if (age>=16) {
//     console.log("Here are the keys!")
// } else if (age<16) {
//     console.log("Sorry, you're too young")
// }

//==================LOOPS================================
// Remember: USE letwhen you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++) {
    //console.log(i)
}
// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 0; i <= 400; i++) {
    //console.log(i)
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 0; i < 400; i += 3) {
    //console.log(i)
}
// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to
// even numbers only that says: "<-- is an even number"
for (i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
        //console.log(`${i} <-- is an even number`)
    } else {
        //console.log(`${i} <-- is an odd number`)
    }
}
//C. Give me five. Numbers divisible by 3 and 5 prints both
for (i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // console.log(`I found a ${i}. Three is a crowd and High Five!`)
    }
    if (i % 5 === 0) {
        //console.log(`I found a ${i}. High five`)
    }
    if (i % 3 == 0) {
        //console.log(`I found a ${i}. Three is a crowd`)
    }
}
// D. Savings account
// Write code that will save the sum of all 
//the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
// bank_account= 0 
//     for(i=0;i<=10;i++) {
//         bank_account +=i 
//     }
// console.log(bank_account)

// You got a bonus! Your pay is now doubled each week. 
//Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
// bank_account = 0
// for (i = 0; i <= 100; i++) {
//     bank_account += i * 2
// }
// console.log(bank_account)

//===============III. Arrays & Control flow=============================
// A. Talk about it:
// What are the things in an array called?
//elements at index 0 and so forth
// Do Arrays guarantee those things will be in order?
//by index number and changes can be made to an array
// What real-life thing could you model with an array?
//tray of eggs

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
const quotes = ["No pain, no gain", "Worker harder than yesterday", "Hardwork trumphs talent"]
// C. Accessing elements
// Given the following array 
const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
// console.log(randomThings[0])
// Change the value of "Hello"to "World"
randomThings[2] = "World"
//console.log(randomThings[2])

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(`Hello? Why, yes! ${randomThings}`)

// D. Change values
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//What would you write to access the 3rd element of the array?
ourClass[2]
// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"
//Add a new element, "Cloud City" to the array
ourClass.push("Cloud City")
//console.log(ourClass)
//E. Mix It Up
//Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

//    Given the following array: 
const myArray = [5, 10, 500, 20]

//    Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Chicken")
//console.log(myArray)
//    Remove the 5from the beginning of the array.
myArray.shift()
//console.log(myArray)
//    Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
//console.log(myArray)

//    Remove the string of your choice from the end of the array.
myArray.pop()
//console.log(myArray)
//    Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse()
//console.log(myArray) this changes the array itself -mutating the og array

// F. Biggie Smalls
// Create a variable that contains an integer.
// let num = 100
// // Write an if ... elsestatement that:
// if (num < 100) {
//     console.log("Little number")
// } else if (num >= 100) {
//     console.log("Big number")
// }

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
num1=10
if(num1<5) {
    //console.log("little number")
} else if (num1>10) {
    //console.log("big number")
}else {
   // console.log("monkey")
}

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
    //console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
    kristynsCloset.splice(6,0,"Raybans")
    //console.log(kristynsCloset)
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
    kristynsCloset[5]= "stained knit hat"
    //console.log(kristynsCloset[5])
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
    //console.log(thomsCloset[0][0])
// In the same way, access one item from Thom's pants array.
    //console.log(thomsCloset[1][2])
// Access one item from Thom's accessories array.
    //console.log(thomsCloset[2][1])
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
    //console.log(`Thom is looking fierce in a ${thomsCloset[0][1]}, ${thomsCloset[1][0]},${thomsCloset[2][2]}`)
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
    thomsCloset[1][2]="Footie Pajamas"
    //console.log(thomsCloset[1][2])
//===============================FUNCTIONS================================
//B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. 
//The function should print the name and a message saying that that person is cool.
 function printCool(name) {
    console.log(`${name} is cool`)
}
//printCool("Rifat")
// C. calculateCube
// Write a function calculateCubethat takes a single number 
//and prints the volume of a cube made from that number.
function calculateCube(num1) {
    num1= Math.pow(num1,3)
    console.log(num1)
}
//calculateCube(4)

// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns
// true if it is a vowel, false otherwise. The vowel could be upper or lower case. 
//Test your function on every vowel and make sure it's working. In general, when 
//you write functions, take a minute to test them with different
// values to make sure they behave the way you want.
function isVowel (letter) {
    if (letter.toLowerCase()==="a" ||letter.toLowerCase()==="e"|| letter.toLowerCase()==="i"||letter.toLowerCase()==="o"|| letter.toLowerCase()==="u") {
        return true
    }else {
        return false
    }

}
//console.log(isVowel("d"))

function isVowel2(letter2) {
    switch(letter2.toLowerCase()) {
        case "a":
          return true
        case "e":
          return true
        case "i":
            return true
        case "o":
            return true
        case "u":
            return true
        default: 
          return false
          // code block
      }
}
//console.log(isVowel2("A"))

// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). 
//The function should return an array of numbers where each number 
//is the length of the corresponding string.
function getTwoLengths (string1, string2) {
    const wordLength = []
    wordLength.push(string1.length,string2.length)
    console.log(wordLength)
}
//getTwoLengths("chicken","rifat")

// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: 
//an array of strings. The function should return an array of numbers 
//where each number is the length of the corresponding string.
function getMultipleLengths (arrayOne) {
    const wordLong = []
    for(i=0;i<arrayOne.length;i++) {
        wordLong.push(arrayOne[i].length)
    }
    console.log(wordLong)
}

//getMultipleLengths(["hi","hey","hell","hello"])


// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the
// largest of them. If all numbers are the same, it doesn't matter which one is returned. 
//If the two largest numbers are the same, one of them should be returned. 
//Be sure to test it with larger values in each of the three locations.
    function maxOfThree (num1,num2,num3) {
        if(num1>=num2 && num1>=num3) {
            console.log(`Largest number is ${num1}`)
        } else if(num2>=num1 && num2>=num3){
            console.log(`Largest number is ${num2}`)
        }else if (num3>=num1 && num3>=num2) {
            console.log(`Largest number is ${num3}`)
        }
    }
    //maxOfThree(5,5,3)
// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. 
//The method should return the longest word in the array. 
//In case of a tie, the method should return the word that appears first in the array.

function printLongestWord (stringArray) {
    longestWordLength = 0
    longestWord = ""
    for(let i=0;i<stringArray.length;i++) {
        if(stringArray[i].length>longestWordLength) {
            //console.log(longestWordLength)
           // console.log(longestWord)
            longestWordLength = stringArray[i].length
            longestWord= stringArray[i]
        }
    }
    return longestWord
}

//console.log(printLongestWord(["hi","hel","hell","hello","travs"]))

//====================================OBJECTS==================================
// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, 
//and we have a user of our website, and we want to store that user's data. 
//The object data structure is a good way to organize the data from our user.


// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. 
//Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
 const user = {
    name: "rifat",
    email: "tafirnahk@gmail.com",
    age : 30,
    purchased: [],
    updateUser: function () {
        //console.log("Update User")
        this.age++
        this.name = this.name.toUpperCase()
       },
    oldAndLoud : function (user) {
        user.age++
        user.name = user.name.toUpperCase()
    }
}


// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, 
//update the emailvalue to a new email address.
    user.email = "chicken@gmail.com"
    //console.log(user.email)
// Our user has had a birthday! Without changing the original userobject, 
//increment the agevalue using the postfix operator. Hint: age++
    //user.age++ 
    //console.log(user.age)
// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key locationto the object, 
//and give it a value or some-or-other location (a string).
    user.location = "New York"
    //console.log(user.location)


// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.
    user.purchased.push("carbohydrates","peace of mind","Merino jodhpurs")
//console.log(user.purchased[2])
// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

user.friend = {
    name: "Margot Robbie",
    age: 24, 
    location : "Miami",
    purchased : []
}
// When we console.log user, we would see the friendobject added to our user object.
// console.log(user)

// Write a friend object into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
    //console.log(user.friend.name)
// Console.log just the friend's location
    //console.log(user.friend.location)
// CHANGE the friend's age to 55
    user.friend.age =34
    //console.log(user.friend.age)
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
    user.friend.purchased.push("The One Ring", "A latte")
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.
    //console.log(user.friend.purchased[1])

//     F. Loops
// Write a for loop that iterates over the User's purchasedarray
for(let i=0;i<user.purchased.length;i++) {
    //console.log(user.purchased[i])
}
// (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchasedarray, 
//and prints each element to the console.
for (let i =0;i<user.friend.purchased.length;i++) {
    //console.log(user.friend.purchased[i])
}
// G. Functions can operate on objects
// Write a single function updateUserthat takes no parameters. 
// When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement,
// it will merely modify the user object.
user.updateUser()
//console.log(user)
    
// Write a function oldAndLoudthat performs the
// exact same tasks as updateUser, but instead of hard-coding it to only work
// on our userobject, make it take a parameter person, and
// have it modify the object that is passed in as an argument when the 
//function is called. Call your oldAndLoudfunction with useras the argument.


user.oldAndLoud(user.friend)
//console.log(user.friend)

//==========CAT Combinator

//Mama cat
const mama = {
    name : "fluffy",
    breed: "maine coon",
    age : 3
}
//console.log(cat1.age)
//console.log(cat1.breed)

//papa cat
const papa = {
    name: "Lion",
    breed: "siamese",
    age: 5
}
// const resultCat = {
//     name : cat1.name+cat2.name, 
//     breed: cat1.breed + "-" + cat2.breed,
//     age:1
// }
function combineCats(cat1,cat2) {
    return {
        name : cat1.name + cat2.name, 
        breed: cat1.breed + "-" + cat2.breed,
        age:1
    }

}
    console.log(combineCats(mama,papa))
//catCombinator
    console.log(combineCats(combineCats(combineCats(mama, papa), combineCats(combineCats(mama, papa), combineCats(mama, papa))),combineCats(mama, papa)))