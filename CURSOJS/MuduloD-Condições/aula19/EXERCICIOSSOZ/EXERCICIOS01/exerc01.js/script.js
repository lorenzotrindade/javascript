let num = document.getElementById('fnum')
var list = document.getElementById('list')
let res = document.getElementById('res')
let n1 = 1
let valores = []


function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {return false }
}

// da para fazer com um for isso aqui
function inLista(n,valores)
    if(valores.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
} 


function Adicionar() {
    // to criando a variavel seNumero(NUM.VALUE) tem valor? eee !nãoconsta na lisata criada var naolista o valor
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text =`Valor ${num.value} adicionado`
        list.appendChild(item)
    }

    else {
    window.alert('Valor digitado inválido u já consta na lista')
}
}