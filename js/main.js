//1- Write a program that allow to user enter number then print it
document.getElementById("prtoutput").onclick = function() { printEnteredInput() };

function printEnteredInput() {
    var userInput = prompt("Please Enter your Input");
    document.getElementById("QoneOutput").innerHTML = userInput
}

//2-  Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
document.getElementById("checkdivisonbtn").onclick = function() { checkDivisonInput() };

function checkDivisonInput() {
    var divisionInput = prompt("Please Enter your Input");
    var checkifnumber = checkIfNumberNotEmpty(divisionInput)
    if (Number(divisionInput) % 3 == 0 && Number(divisionInput) % 4 == 0 && checkifnumber == true) {
        document.getElementById("QtwoOutput").innerHTML = 'Yes'

    } else {
        document.getElementById("QtwoOutput").innerHTML = 'No'

    }


}
// 3- Write a program that allows the user to insert 2 integers then print the max
document.getElementById("checkmaximumbtn").onclick = function() { checkMaximum() };

function checkMaximum() {
    var firstNumber = prompt("Please Enter your Input");
    var checkIfNumberFirst = checkIfNumberNotEmpty(firstNumber)
    var secNumber = prompt("Please Enter your 2nd Input");
    var checkIfNumberSec = checkIfNumberNotEmpty(secNumber)
    if (Number(firstNumber) > Number(secNumber) && checkIfNumberFirst && checkIfNumberSec) {
        document.getElementById("QthreeOutput").innerHTML = firstNumber

    } else if (Number(firstNumber) < Number(secNumber) && checkIfNumberFirst && checkIfNumberSec) {
        document.getElementById("QthreeOutput").innerHTML = secNumber

    } else if (Number(firstNumber) == Number(secNumber) && checkIfNumberFirst && checkIfNumberSec) {
        document.getElementById("QthreeOutput").innerHTML = 'Equal'

    } else {
        document.getElementById("QthreeOutput").innerHTML = ' '
        alert('Both inputs should be numbers and not empty')
    }
}

// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
document.getElementById("checknegativebtn").onclick = function() { checkNegative() };

function checkNegative() {
    var posNegNo = prompt("Please Enter your Input");
    var checkifposNegNo = checkIfNumberNotEmpty(posNegNo)
    if (Number(posNegNo) > 0 && checkifposNegNo) {
        document.getElementById("QfourOutput").innerHTML = 'Positive'

    } else if (Number(posNegNo) < 0 && checkifposNegNo) {
        document.getElementById("QfourOutput").innerHTML = 'Negative'

    } else {
        document.getElementById("QfourOutput").innerHTML = ''
    }

}

// 5 - Write a program that take 3 integers from user then print the max element and the min element
document.getElementById("checkmaximumthreenobtn").onclick = function() { checkmaximumthreeno() };

function checkmaximumthreeno() {
    var firstNumber = prompt("Please Enter your Input");
    var checkIfNumberFirst = checkIfNumberNotEmpty(firstNumber)
    var secNumber = prompt("Please Enter your 2nd Input");
    var checkIfNumberSec = checkIfNumberNotEmpty(secNumber)
    var thirdNumber = prompt("Please Enter your 3rd Input");
    var checkIfNumberThird = checkIfNumberNotEmpty(thirdNumber)
        // Adding = in the three conditions so if the user enters two or three samilar values
    if (Number(firstNumber) >= Number(secNumber) && Number(firstNumber) >= Number(thirdNumber) && checkIfNumberFirst && checkIfNumberSec && checkIfNumberThird) {
        document.getElementById("QfiveOutput").innerHTML = firstNumber

    } else if (Number(secNumber) >= Number(firstNumber) && Number(secNumber) >= Number(thirdNumber) && checkIfNumberFirst && checkIfNumberSec && checkIfNumberThird) {

        document.getElementById("QfiveOutput").innerHTML = secNumber

    } else if (Number(thirdNumber) >= Number(firstNumber) && Number(thirdNumber) >= Number(secNumber) && checkIfNumberFirst && checkIfNumberSec && checkIfNumberThird) {

        document.getElementById("QfiveOutput").innerHTML = thirdNumber

    } else {
        document.getElementById("QfiveOutput").innerHTML = ' '
        alert('Both inputs should be numbers and not empty')
    }
}


// 6 - Write a program that allows the user to insert integer number then check If a number is oven or odd
document.getElementById("checkevenbtn").onclick = function() { checkEven() };

function checkEven() {
    var posNegNo = prompt("Please Enter your Input");
    var checkifEvenNo = checkIfNumberNotEmpty(posNegNo)
    if (Number(posNegNo) % 2 == 0 && checkifEvenNo) {
        document.getElementById("QsixOutput").innerHTML = 'Even'

    } else if (Number(posNegNo) % 2 != 0 && checkifEvenNo) {
        document.getElementById("QsixOutput").innerHTML = 'Odd'

    } else {
        document.getElementById("QsixOutput").innerHTML = ''
    }

}

// 7 - Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

document.getElementById("checkvowelbtn").onclick = function() { checkvowel() };

function checkvowel() {
    var checkvowelchar = prompt("Please Enter your Input");
    var checkifno = checkIfNumberorEmpty(checkvowelchar)
        // To make the letter small so I can check both capital and small letters 
    var checkvowelcharsmall = checkvowelchar.toLowerCase()
    if (!checkifno) {
        document.getElementById("QsevenOutput").innerHTML = 'Its a Number or Empty  '

    } else if (checkvowelcharsmall == 'a' || checkvowelcharsmall == 'e' || checkvowelcharsmall == 'i' || checkvowelcharsmall == 'o' || checkvowelcharsmall == 'u') {
        document.getElementById("QsevenOutput").innerHTML = 'vowel'

    } else {
        document.getElementById("QsevenOutput").innerHTML = 'Consonant'
    }
}

// 8- Write a program that allows user to insert integer then print all numbers between 1 to that’s number
document.getElementById("getnumbersbetweenbtn").onclick = function() { getNumbersBetweenTwoIntegers() };

function getNumbersBetweenTwoIntegers() {
    var lastNo = prompt("Please Enter your Input");
    var concatenatedValue = ''
        // From one to lastNo
    for (var i = 1; i <= lastNo; i++) {

        concatenatedValue = concatenatedValue + i
            // if condition to add comma or to print 
        if (i < lastNo) {
            concatenatedValue = concatenatedValue + ','
        } else if (i == lastNo) {
            document.getElementById("QeightOutput").innerHTML = concatenatedValue
        }

    }
}

//9 - Write a program that allows user to insert integer then print a multiplication table up to 12
document.getElementById("getmultiplybyseqnobtn").onclick = function() { getMultiplyBySeqNo() };

function getMultiplyBySeqNo() {
    var myNum = prompt("Please Enter your Input");
    var concatenatedValue = ''
        // From one to lastNo
    for (var i = 1; i <= 12; i++) {
        x = myNum * i

        concatenatedValue = concatenatedValue + x
        if (i < 12) {
            concatenatedValue = concatenatedValue + ','
        } else if (i == 12) {
            document.getElementById("QnineOutput").innerHTML = concatenatedValue
        }

    }
}


//10 - Write a program that allows to user to insert number then print all even numbers
document.getElementById("getallevennobtn").onclick = function() { printAllevenNumber() };

function printAllevenNumber() {
    var myNum = prompt("Please Enter your Input");
    var concatenatedValue = ''
        // From one to lastNo
    for (var i = 1; i <= myNum; i++) {
        if (i % 2 == 0) {
            concatenatedValue = concatenatedValue + i + ','

        } else {
            concatenatedValue = concatenatedValue
        }


        if (i == myNum) {
            document.getElementById("QtenOutput").innerHTML = concatenatedValue
        }



    }
}

//11- Write a program that take two integers then print the power
document.getElementById("printpowerbtn").onclick = function() { printPower() };

function printPower() {
    var myfirstNum = prompt("Please Enter your Input");
    var power = prompt("Please Enter the power");
    var myno = 1
    for (var i = 1; i <= power; i++) {
        myno = myfirstNum * myno


        if (i == power) {
            document.getElementById("QelevenOutput").innerHTML = myno
        }
    }

}


//12- Write a program to enter marks of five subjects and calculate total, average and percentage.
document.getElementById("subjectdatabtn").onclick = function() { subjectData() };

function subjectData() {
    var totalno = 0;
    for (var i = 0; i < 5; i++) {
        var enteredNum = Number(prompt("Please Enter your Input no" + "(" + (i + 1) + ")"));
        totalno = totalno + enteredNum
        if (i == 4) {
            document.getElementById("QetwelveOutput").innerHTML = 'Total=' + totalno + ', ' + 'Avg=' + totalno / 5 + ', ' + 'Perc=' + totalno / 5 + '%'
        }
    }
}

// 13 - Write a program to input month number and print number of days in that month.
document.getElementById("daysinmonthbtn").onclick = function() { daysinmonth() };

function daysinmonth() {
    var enteredMonth = prompt("Please Enter your Input no");
    // Year is 2022 and Month is entered by the user
    var daysInCurrentMonth = getDaysInMonth(2022, enteredMonth);
    document.getElementById("QthreteenOutput").innerHTML = " Days in Month " + daysInCurrentMonth

}

// 14 - Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
document.getElementById("fivesubjectavg").onclick = function() { fivesubjectavg() };

function fivesubjectavg() {
    var concatenatedValue = ' ';
    for (var i = 0; i < 5; i++) {
        var subjectmark = Number(prompt("Please Enter your Subject no" + "(" + (i + 1) + ") mark"));
        var grade;
        if (subjectmark >= 90) {
            grade = 'A'
        } else if (subjectmark >= 80) {
            grade = 'B'
        } else if (subjectmark >= 70) {
            grade = 'C'
        } else if (subjectmark >= 60) {
            grade = 'D'
        } else if (subjectmark >= 50) {
            grade = 'E'
        } else if (subjectmark < 50) {
            grade = 'F'
        }
        concatenatedValue = concatenatedValue + ' Percentage = ' + subjectmark + '% ' + 'Grade = ' + grade + '<br>'

        document.getElementById("QfourteenOutput").innerHTML = concatenatedValue

    }
}

// ***************  Switch Cases *************** 

// 15 - Write a program to input month number and print number of days in that month.
document.getElementById("daysinmonthswitchbtn").onclick = function() { daysinmonthswitch() };

function daysinmonthswitch() {
    var month = Number(prompt("Please Enter your month no"));
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("QfifteenOutput").innerHTML = " Days in Month " + 31
            break;
        case 2:
            document.getElementById("QfifteenOutput").innerHTML = " Days in Month " + 28
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("QfifteenOutput").innerHTML = " Days in Month " + 30
            break;
        default:
            // code block
            document.getElementById("QfifteenOutput").innerHTML = 'You did not enter number between 1 to 12'

    }

}

// 16 - Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

document.getElementById("checkvowelswitchbtn").onclick = function() { checkvowelswitch() };

function checkvowelswitch() {
    var checkvowelchar = prompt("Please Enter your Input");
    var checkifno = checkIfNumberorEmpty(checkvowelchar)
    if (!checkifno) {
        document.getElementById("QsixteenOutput").innerHTML = 'Its a Number or Empty  '
        return false
    }
    // To make the letter small so I can check both capital and small letters 
    var checkvowelcharsmall = checkvowelchar.toLowerCase()
    switch (checkvowelcharsmall) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            document.getElementById("QsixteenOutput").innerHTML = 'vowel'
            break;
        default:
            // code block
            document.getElementById("QsixteenOutput").innerHTML = 'Consonant'

    }
}



// 17- Write a program that allows the user to insert 2 integers then print the max
document.getElementById("checkmaximumswitchbtn").onclick = function() { checkmaximumswitch() };

function checkmaximumswitch() {
    var firstNumber = prompt("Please Enter your Input");
    var checkIfNumberFirst = checkIfNumberNotEmpty(firstNumber)
    var secNumber = prompt("Please Enter your 2nd Input");
    var checkIfNumberSec = checkIfNumberNotEmpty(secNumber)

    switch (true) {
        case (Number(firstNumber) > Number(secNumber) && checkIfNumberFirst && checkIfNumberSec):
            document.getElementById("QseventeenOutput").innerHTML = firstNumber
            break;
        case (Number(firstNumber) < Number(secNumber) && checkIfNumberFirst && checkIfNumberSec):
            document.getElementById("QseventeenOutput").innerHTML = secNumber
            break;
        case (Number(firstNumber) == Number(secNumber) && checkIfNumberFirst && checkIfNumberSec):
            document.getElementById("QseventeenOutput").innerHTML = 'Equal'
            break;
        default:
            // code block
            document.getElementById("QseventeenOutput").innerHTML = 'Both inputs should be numbers and not empty'

    }


}

// 18- Write a program that allows the user to insert 2 integers then print the max

document.getElementById("checkevenswitchbtn").onclick = function() { checkevenswitch() };

function checkevenswitch() {
    var posNegNo = prompt("Please Enter your Input");

    switch (true) {
        case (Number(posNegNo) % 2 == 0):
            document.getElementById("QeighteenOutput").innerHTML = 'even'
            break;
        case (Number(posNegNo) % 2 != 0):
            document.getElementById("QeighteenOutput").innerHTML = 'odd'
            break;

        default:
            // code block
            document.getElementById("QeighteenOutput").innerHTML = 'Its not a number'

    }

}

// 19 - Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

document.getElementById("checknegativeswitchbtn").onclick = function() { checknegativeswitch() };

function checknegativeswitch() {
    var posNegNo = prompt("Please Enter your Input");

    switch (true) {
        case (Number(posNegNo) == 0):
            document.getElementById("QnineteenOutput").innerHTML = '0'
            break;
        case (Number(posNegNo) > 0):
            document.getElementById("QnineteenOutput").innerHTML = '+ve'
            break;
        case (Number(posNegNo) < 0):
            document.getElementById("QnineteenOutput").innerHTML = '-ve'
            break;

        default:
            // code block
            document.getElementById("QnineteenOutput").innerHTML = 'Its not a number'

    }

}

//20 - Write a program to create Simple Calculator

document.getElementById("makeacalcbtn").onclick = function() { makeacalc() };

function makeacalc() {
    var firstno = prompt("Please Enter your 1st Input");
    var operation = prompt("Please Enter your operation Ex:: +,-,*,/");
    var secno = prompt("Please Enter your 2nd Input");

    switch (operation) {
        case '+':
            var finalNo = Number(firstno) + Number(secno)
            document.getElementById("qtwentyanswer").innerHTML = firstno + " " + operation + " " + secno + " = " + (finalNo)
            break;
        case '-':
            var finalNo = Number(firstno) - Number(secno)
            document.getElementById("qtwentyanswer").innerHTML = firstno + " " + operation + " " + secno + " = " + (finalNo)
            break;
        case '*':
            var finalNo = Number(firstno) * Number(secno)
            document.getElementById("qtwentyanswer").innerHTML = firstno + " " + operation + " " + secno + " = " + (finalNo)
            break;
        case '/':
            var finalNo = Number(firstno) / Number(secno)
            document.getElementById("qtwentyanswer").innerHTML = firstno + " " + operation + " " + secno + " = " + (finalNo)
            break;
        default:
            // code block
            document.getElementById("qtwentyanswer").innerHTML = 'Error, Please check it again'

    }

}




// General 
// Check if number 
function checkIfNumberNotEmpty(inputNo) {
    if (Number(inputNo) || (Number(inputNo) == 0 && inputNo == '0')) {
        return true
    } else if (inputNo === null || inputNo === '') {
        alert(" You Entered Empty value")
        return false
    } else {
        alert('The value you Entered is not a number, please double check')
        return false
    }
}
// Check if number without alert messages
function checkIfNumberorEmpty(inputNo) {
    console.log(Number(inputNo))
    if (Number(inputNo) || (Number(inputNo) == 0 && inputNo == '0')) {
        console.log(1)
        return false

    } else if (inputNo === null || inputNo === '') {
        console.log(2)
        return false
    } else {
        // Most probably its a word
        return true
    }
}

// Get Days in month
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}


let index = 0;
for (index = 0; index < 3; index++) {
    console.log("dina", index)
}