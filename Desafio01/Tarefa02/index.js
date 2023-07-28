let userString = prompt("Digite uma string: ")
let i = userString.length - 1
let reverseString = ""

for(i; i >= 0; i--){
    reverseString += userString[i]
}

alert("A string " + userString + " na ordem inversa é " + reverseString)