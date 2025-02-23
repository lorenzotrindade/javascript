function parimp(n)
// aqui recebeceu o valor da chamada qiue é 11
 {
    if(n%2==0)
        // se a divisão de n por 2  for 0, executa isso aqui
      {
        return'é par'
    } else {
        return 'é impar'
    }
} 
var res = parimp(11)
// esse 11 foi jogando dentro de N, pois aqui é a chamada
console.log(res)
