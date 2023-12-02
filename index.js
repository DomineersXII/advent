const fs = require("fs")
var firstNumber = 0
var lastNumber = 0
var finalResponse = 0
const numberArray = []

fs.readFile("sample.txt", (err, data) => {
    if (err) throw err
    
    const sampleText = data.toString()
    var lines = sampleText.split('\n')


   for (var line = 0; line < lines.length; line++) {
        
        for (let i = 0; i < (lines[line].length)-1; i++) {
            
            if ((lines[line])[i] >= 0 && (lines[line])[i] <= 9) {

                if(firstNumber == 0) {
                    firstNumber = (lines[line])[i]
                    lastNumber = (lines[line])[i]
                    //console.log("first " + firstNumber)
                    //console.log("last " + lastNumber)
                } else {
                    lastNumber = (lines[line])[i]
                    //console.log("real last" + lastNumber)
                }
            }
        }
        //console.log(lines[line].length)
        finalResponse = firstNumber + lastNumber
        numberArray[line] = finalResponse
        //console.log(finalResponse)
        firstNumber = 0
        lastNumber = 0
        finalResponse = 0
     

    } 
    
    var totalNumber = 0
    for (let j = 0; j < numberArray.length; j++) {
       totalNumber = Number(totalNumber)  + Number(numberArray[j])
    }
    console.log(totalNumber)
})









