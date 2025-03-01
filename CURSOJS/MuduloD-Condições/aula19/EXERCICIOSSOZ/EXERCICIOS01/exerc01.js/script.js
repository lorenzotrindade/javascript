let num = document.getElementById('fnum')
var list = document.getElementById('list')
let res = document.getElementById('res')
let n1 = 1
let valores = [n1]


function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {return false }
}

// da para fazer com um for isso aqui
function inLista(n,n1) {
    if(n1.indexOf(Number(n)) != -1) {
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
num.value=''
//num.value, é o nume da variavel e value, e o valor que definimos, que agora é vazio ('')
num.focus() //essa é uma ação que faz vc voltar o cursor para a variavel ali definida
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('adicione algo')
    } else {
        let tot = valores.length 
        let maior =  valores[0]
        let menor = valores[0]
        let soma = 0 
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor= valores[pos]
            }
        }
        res.innerHTML =''
        res.innerHTML += `<p>Ao todo, temos ${tot} tantos numeros cadastrados</p>`

        // apresentando em tela 

        res.innerHTML= `<p>O maior valor informado é ${maior} </p>`
        res.innerHTML = `<p> o menor valor informado é ${menor}</p´>`
        res.innerHTML = `<p> A soma de todos os valores é ${soma} temos.</p>`
    }
}

