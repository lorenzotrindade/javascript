var idade = 10
console.log(`você tem ${idade} anos`)

if (idade < 16) {console.log('não vota')}
// se a pessoa é menor de 16, ela não vota

else if(idade < 18||idade>65){'voto opciional'}
// se a pessoa tem menos de 18 ou mais de 65, voto opcional

else{console.log('voto obrigatorio')}
// agoora se a idade dela não se encaixa em nem um dos acima, ela é obrigada a votar