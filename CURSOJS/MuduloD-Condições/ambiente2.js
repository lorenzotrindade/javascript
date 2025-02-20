num = [0,9,2,4,5]

for(var pos=0;pos<num.length;pos++)
    //declarado pos=0, e pos for <menor que que o tamanho do meu vetor num, ou seja não chegar ao final; pos++1 a cada rep
{
    console.log(`A posição ${pos} tem os valor ${num[pos]}`)
}
 /*simplificando mais ainda usando o IN */
 
num.sort()
//para cada pos em num 
 for(let pos in num)
    // declarada variavel pos cada um em pos
 {
    console.log(`a posição ${pos} recebe o valor de ${num[pos]}`)
 }