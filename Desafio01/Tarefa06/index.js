function countdown(number){
    if(number >= -1){
        if(number === -1){
            setTimeout(function(){
                console.log('KABUM')
            },1000)
        }else{
            setTimeout(function(){
                console.log(number)
                countdown(number - 1)
            }, 1000)
        }
    }
}


let timeNumber = prompt("Digite um número inteiro positivo para a contagem regressiva:")
timeNumber = parseFloat(timeNumber)


if(timeNumber % 1 === 0){
    timeNumber = parseInt(timeNumber)
    countdown(timeNumber)
}else{
    console.log('Número inválido' + '\nDigite um número inteiro posistivo.')
}