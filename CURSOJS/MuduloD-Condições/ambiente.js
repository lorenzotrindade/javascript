var num = [5 , 8, 2,]
// adionando variavel num posição
num[3] = 6

// adionando um valor a ultima posição, sem saber qual é ela
num.push(7)

//tamanho do array
num.length()

Number.SORT()
//pegar os elementos da variavel e ordem de forma crescente 

console.log(`Nosso vetor é o ${num}`)

num.sort()
//colocando em ordem
num.push(1)
//acrescendo um valor ao final do array
console.log(`O vetor tem ${num.length()}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
// na posição zero temos um valor, é isso que queremos saber

//agora digamos que queremos mostra as posições e os valores dos vetores
console.log(num[0])
console.log(num[4])
//sucessivamente, mas tem outra forma com estrutruras de reptição, mas como fazemos isso? BOM SABEMOS QUE O QUE MUDA É A POSIÇÃO TAMBÉM PELO SINAL DE []

//isso aqui ta errado
// var c = Number('')
// if (c < 6) {
//    for(c = '';num + c;c++)
// } else{
//     window.alert('terminou')
// }

// isso aqui ta certo
// estrutra de rep - declarar variavel - condição - regra de reptição

for(var pos=0;pos<num.length;pos++) {
    console.log(num[pos])
}

