function cityDDD(ddd){
    switch (ddd){
        case 61:
            return "Brasília"
        case 71:
            return "Salvador"
        case 11:
            return "São Paulo"
        case 21:
            return "Rio de Janeiro"
        case 32:
            return "Juiz de Fora"
        case 19:
            return "Campinas"
        default:
            return "DDD não cadastrado"
    }

}

let ddd = parseInt(prompt("Digite o código DDD: "))
let city = cityDDD(ddd)
alert(city)