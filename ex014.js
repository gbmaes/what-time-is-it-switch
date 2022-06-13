var agora = new Date()
var diaSem = agora.getDay()
/*
   0 = domingo
   1 = segunda
   2 = terça
    quarta
    quinta
    sexta
    sábado
*/

//console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
        break
    default:
        console.log('dia invalido')
        break
}