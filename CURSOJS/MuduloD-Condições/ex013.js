var agora=  new Date()
var diaSem = agora.getDay()
/* no js tem os 7 dias da semana, e o primeiro dia da semana é DOMINGO e ele equivale a 6, então a semana tem 6 dias*/

console.log(diaSem) 
// mas agora ele ta me imprimiindo o numero, gostaria de saber o nome do dia

// então usamos switch
// usamos o switch só para numeros inteiros e strings
switch (diaSem) {
    case 0: console.log('domingo')
    break

    case 1: console.log('segunda')
    break

    case 2: console.log('terça')
    break

    case 3: console.log('quarta')
    break

    case 4: console.log('quinta')
    break

    case 5: console.log('sexta')
    break

    case 6: console.log('sabado') 
    break

    deafault: console.log('[ERRO] Dia Inválido')
    break
}