let num = document.getElementById('fnum')
var list = document.getElementById('list')
let res = document.getElementById('res')
let n1 = Number(1)
let valores = []


function seNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {return false }
}

function naoLista(n,n1) {
    if(n1.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
} 


function adicionar() {
    // to criando a variavel seNumero(NUM.VALUE) tem valor? eee !nãoconsta na lisata criada var naolista o valor
    if (seNumero(num.value)&& !naoLista(num.value, valores))   
{

} 
    else {
    window.alert('Valor digitado inválido u já consta na lista')
}
}