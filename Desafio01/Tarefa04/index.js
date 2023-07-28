let birthday = prompt("Digite a sua data de nascimento (no formato dd/mm/aaaa): ")
let noSpace = birthday.replace(/\//g, '')
let bday = noSpace.split("")

let total = 0
for (let i = 0; i < bday.length; i ++){
    total += parseInt(bday[i])
}
alert("O somatório dos números da sua data de nascimento é " + total)