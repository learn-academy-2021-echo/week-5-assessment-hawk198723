// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("crypt", () => {
    let secretCodeWord1 = "Lackadaisical"
    let secretCodeWord2 = "Gobbledygook"
    let secretCodeWord3 = "Eccentric"
    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it(" takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {

        //an expect method, nested within the test block, calling on the crypt() function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(crypt(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(crypt(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(crypt(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
// got red

// b) Create the function that makes the test pass.
//decalare a funtion, and take in the string as param
function crypt(string){
  // split the string to and single letters and store in the array
      let newArr = string.split('')
      // call for loop to search this array, if requirement meets, then take action
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === 'a' || newArr[i] === 'A'){
           newArr[i] = '4'
        }else if (newArr[i] === 'e' || newArr[i] === 'E'){
           newArr[i] = '3'
        }else if (newArr[i] === 'i' || newArr[i] === 'I'){
           newArr[i] = '1'
        }else if (newArr[i] === 'o' || newArr[i] === 'O'){
           newArr[i] = '0'
        }else{
           // console.log('Please input a string or string variable.');
        }
      }
      //console.log(newArr);
      //join all the chars, and put them back to a string, then return
      return newString = newArr.join('')
}
// console.log(crypt(secretCodeWord1));

// --- first two test got green , last one got red, add || newArr[i] === 'E' into the satement , all got green, alreay refactored



// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// a describe method that lists the name of the function OR naming of the particular test.
describe("findThatWord", () => {
    let arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    let letterA = "a"
    let arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    let letterE = "e"
    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {

        //an expect method, nested within the test block, calling on the findThatWord() function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(findThatWord(arrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(findThatWord(arrayOfWords2,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
// -- Got the red --

// b) Create the function that makes the test pass.
//decalare the function and tales the array as param
function findThatWord(array, string){
    //decalare an empty temporary array
    let tempArr = []
    //use for loop to search the array param
    for (let i = 0; i < array.length; i++) {
      //slipt the array param save in the splitArr
        let splitArr = array[i].split('')
        //use for loop to search the splitArr
        for (let j = 0; j < splitArr.length; j++) {
          //if the letter's LowerCase equals string param
          if (splitArr[j].toLowerCase()=== string){
            //then push the array param's element in to the temporary array
            tempArr.push(array[i])
          }
        }
    }
    //return the value, the array has no duplicate values
    return [...new Set(tempArr)]
}



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouse", () => {
    let hand1 = [5, 5, 5, 3, 3]
    let hand2 = [5, 5, 3, 3, 4]
    let hand3 = [5, 5, 5, 5, 4]

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {

        //an expect method, nested within the test block, calling on the fullHouse() function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})
// -- Got the red --

// b) Create the function that makes the test pass.
//decalare the function and tales the array as param
function fullHouse(array){
    //decalare a counter
    let counter = 0
    // use spread operator and Set(array param) filter out the array has no duplicate values, check the length equal 2 or not, if not equals 2, means there are more kinds of values other than 2
    if ([...new Set(array)].length === 2) {
      // let the first value equals a number variable
      let number = array[0]
      //search the array param
      for (var i = 0; i < array.length; i++) {
        //if the number equals the array's element, counter plus 1
        if (number === array[i]){
          counter += 1
        }
        // if not equals, just get the counter value
        else{
          counter
        }
      }
      //check the counter either 2 or 3, since the array should alreay contain two kinds of values, either 2 or 3 or ture, then return ture, otherwise return false, which wont happen here, we can refactor this out
      if (counter === 2 || counter === 3){
        return true
      }
      else {
        return false
      }
      //means there are more kinds of values other than 2, return false
    }else {
      return false;
    }
}
