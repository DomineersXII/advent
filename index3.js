const fs = require("fs")
const valueText = "61twoninebbsbqsbhtxmxkffspd"
var firstNumber = ""
var lastNumber = ""
var firstNumberIndex = 1000
var lastNumberIndex = ""
var numberCounter = 0
var finalResponse = 0
const numberArray = []

function findNumber (string, substrings) {

    for (let i = 0; i != substrings.length; i++) {
        var numberSubstring = substrings[i]
        numberCounter++

        //check for lowest/highest number
        if(string.indexOf(numberCounter) != -1 && string.indexOf(numberCounter) < firstNumberIndex) {
            firstNumber = numberCounter
            if (lastNumber == 0) {
                lastNumber = numberCounter
            }
            firstNumberIndex = string.indexOf(numberCounter)
        }

        if (string.lastIndexOf(numberCounter) != -1 && string.lastIndexOf(numberCounter) > lastNumberIndex) {
            lastNumber = numberCounter
            if (firstNumber == 0) {
                firstNumber = numberCounter
            }
            lastNumberIndex =  string.lastIndexOf(numberCounter)
        }

        //check for lowest/highest string number
        if (string.indexOf(numberSubstring) != -1 && string.indexOf(numberSubstring) < firstNumberIndex) {
            firstNumber = numberCounter
            firstNumberIndex = string.indexOf(numberSubstring)
        }

        if (string.lastIndexOf(numberSubstring) != -1 && string.lastIndexOf(numberSubstring) > lastNumberIndex) {
            lastNumber = numberCounter
            lastNumberIndex =  string.lastIndexOf(numberSubstring)
        }
       
    }
}

fs.readFile("sample.txt", (err, data) => {
    if (err) throw err

    const sampleText = data.toString()
    var lines = sampleText.split('\n')

    for (var line = 0; line < lines.length; line++) {
        findNumber(lines[line], ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"])
       
        finalResponse = String(firstNumber)  + String(lastNumber)
        numberArray[line] = finalResponse
       

        //reset values
        firstNumber = ""
        lastNumber = ""
        firstNumberIndex = 1000
        lastNumberIndex = ""
        numberCounter = 0  
        finalResponse = 0
    }
    var totalNumber = 0
    for (let j = 0; j < numberArray.length; j++) {
       totalNumber = Number(totalNumber)  + Number(numberArray[j])
    }
    console.log(totalNumber)
})
























//below this is old (ignore) vvvvvv

/*

const location = valueText.indexOf("nine");

var firstNumber = 0
var lastNumber = 0

for (let i = 0; i < valueText.length; i++) {
            
    if (valueText[i] >= 0 && valueText[i]<= 9) {

        if(firstNumber == 0) {
            firstNumber = valueText[i]
            lastNumber = valueText[i]
          
            if (i > location) {
                firstNumber = 9
            }
        } else {
            lastNumber = valueText[i]
        
        }
    }
}
console.log(firstNumber)
*/


//const valueText = "jdsacjcidninefodsov4seven2vjthreef1"


/* const allSubstrings = []
const substringPositions = []
// finds the last number in the text that is a string
function findString(str, substrings) {
    var substringCounter = 0
    for (var i = 0; i != substrings.length; i++) {
        var substring = substrings[i]
        if (str.indexOf(substring) != -1) {
            allSubstrings[substringCounter] = substring
            substringPositions[substringCounter] = valueText.indexOf(allSubstrings[substringCounter])
            substringCounter++
          
          //  return substring;
        }
    }
    return allSubstrings;
}


findString(valueText, ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"])
console.log("String numbers: " + allSubstrings)
console.log("String positions: " + substringPositions) */



