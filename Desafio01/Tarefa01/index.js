let userName = prompt("Digite o seu nome: ")
let noSpace = userName.replace(/\s/g, '')
let nameLength = noSpace.length
alert("Nome: " + userName + "\nComprimento: " + nameLength + " caracteres")
