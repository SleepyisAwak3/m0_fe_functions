// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// // EX 1:

function askName() {
  console.log("Hello, what is your name?")
}

nameQuestion()

// I changed the function name to askName instead of nameQuestion.
// Conventional JS function names start with a verb, and the function name "askName"
// more specifically refers to the action the function is designed to do.
// nameQuestion could be a lot of different things, whereas askName is pretty
// self-explanatory.


// EX 2:

function addThreeNums(num1, num2, num3) {
var sum = num1 + num2 + num3
return sum;
      }

var cupsOfFlour = 1
var cupsOfSugar = 2
var cupsOfMilk = 3

var totalCups = addThreeNums(cupsOfFlour, cupsOfSugar, cupsOfMilk)

console.log(`This recipe has ${totalCups} cups of ingredients total.`)

// First, I changed the parameters from "first, second, third" to "num1, num2, num3"
// I'm not sure if this is necessary, but for me it made much more sense to label them this way because the order
// is not significant for a function that is adding values, and the values are numbers, not strings.

// I also changed this example by using the "return sum" command to store the return value
// of the function. Before, the function was just logging the sum to the console,
// but in this version the return value of the function can be stored so that we can 
// use the return value of the function for another variable.

// Here, because I added the "return sum" command" I can store the return value of the 
// 'addThreeNums' function to the 'totalCups' variable, and interpolate that value into a string.


// // EX 3:
function listRecipe(_first, _second, _third, _fourth, _fifth){
  var recipie = [_first, _second, _third, _fourth, _fifth]
  return recipie
}

  var step1 = "Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper"
  var step2 = "Pulse basil and pine nuts"
  var step3 = "Add garlic and cheeses"
  var step4 = "Slowly pour in oil"
  var step5 = "Season"

  var pestoRecipe = listRecipe(step1, step2, step3, step4, step5)

  console.log(pestoRecipe)

// When I first ran this code there was an error because the "function" command was abbreviated to "func"
// I found that this term cannot be abbreviated and needs to be typed out in full for my computer
// to recognize the command. 

// I also played around with a bit to see if there was a way for me to keep the recipe separate from the function,
// so that the user could edit the recipe without changing the function. I'm not sure if I did this the most efficient way
// or if it was even necessary, but I found a way to re organize the code so that the functions only operation was to 
// list the steps in order, and established a variable for each step below. I then changed the name of the function to more accurately
// describe what it does.


// //  EX 4:

function avgOfTwoNums(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;
    return avg
  }

  var ageOne = 27
  var ageTwo = 15
  var avgAge = avgOfTwoNums(ageOne, ageTwo)

  console.log(`The average age is ${avgAge}`)


// First, I changed the function name from "average" to "avgOfTwoNums." 
// The original name could be misleading to a reader, because you may think that you can type in as many numbers as you want and the function will 
// return the average, but if you entered more than 2 arguments for this function you not receive an accurate output. 

// When I first ran the original code, I received an error because the "." was not within the backticks for the interpolated string. 

// Once this was fixed, I still was not getting the expected output in my console. When I used the node command in my terminal, I received no printed output.
// I realized that the console.log command did not invoke the function or define the proper arguments, so there was no value to be printed for
// the interpolation, and found that interpolated console.log statements will not print any text to the console if the interpolated value is not defined.

// To fix this, I added the return avg command in line 67 so that the return value of the function could be stored in a variable.

// I tested this out by defining 3 variables. 'ageOne', 'ageTwo', and 'avgAge'.
// This allowed me to invoke the 'avgOfTwoNums' argument with 2 example arguments, and store it in a variable, 'avgAge'.

// Then, I could edit the console.log statement to interpolate the 'avgAge' variable that would invoke the function 
// and interpolate the printed value within a string.
