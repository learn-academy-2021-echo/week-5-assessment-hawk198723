const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

function crypt(string){
      let newArr = string.split('')
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === 'a'){
           newArr[i] = '4'
        }else if (newArr[i] === 'e'){
           newArr[i] = '3'
        }else if (newArr[i] === 'i'){
           newArr[i] = '1'
        }else if (newArr[i] === 'o'){
           newArr[i] = '0'
        }else{
           console.log('Please input a string or string variable.');
        }
      }
      console.log(newArr);
      return newString = newArr.join('')
}
console.log(crypt(secretCodeWord2));




const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Cherry","Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"

// b) Create the function that makes the test pass.
function findThatWord(array, string){
    let tempArr = []
    for (let i = 0; i < array.length; i++) {
        let splitArr = array[i].split('')
        for (let j = 0; j < splitArr.length; j++) {
          if (splitArr[j].toLowerCase()=== string){
            tempArr.push(array[i])

          }

        }

    }

return [...new Set(tempArr)]
// console.log(uni);
}

console.log(findThatWord(arrayOfWords1,letterA));
console.log(findThatWord(arrayOfWords2,letterE));

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
function fullHouse(array){
    let counter = 0
    if ([...new Set(array)].length === 2) {
      let number = array[0]
      for (var i = 0; i < array.length; i++) {
        if (number === array[i]){
          number = array[i]
          counter += 1
        }else{
          counter
        }
      }
      if (counter === 3 || counter === 2){
        return true
      }else {
        return false
      }
    }else {
      return false;
    }
}


console.log(fullHouse(hand2));
