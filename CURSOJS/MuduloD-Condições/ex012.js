// pegando hora que o sistemaa ta executando o software

var agora = new Date()
var hora = agora.getHours()
// a variavel agora pega a hora de agora e manda para a varriavel hora que depende da agora pegando de agora.get(pegar)

console.log(`Agora são ${hora} horas`)

// isso tudo se chama estrura condicional alinhada

if(hora < 12 ) {console.log('bom dia')}

else if(hora <= 18){console.log('boa tarde')}

else {console.log('boa noite')}
// messmo não parecendo necessario, se não colocar o ultimo else, ele imprime automatica