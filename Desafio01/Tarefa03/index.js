let userString = prompt("Digite uma string: ")
let size = userString.length
let half = parseInt(size / 2)
if(size % 2 !== 0){
    half ++
}
let stringHalf = userString.slice(0, half)
alert("A metade da string " + userString + " é " + stringHalf)