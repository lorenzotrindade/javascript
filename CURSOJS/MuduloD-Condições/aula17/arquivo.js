function Tabuada() {
    var num = document.getElementById('txtn')
    var tab= document.getElementById('seltab')

    if(num.value.length == 0 ) {
    let n = Number(num.value)
    window.alert('Por favor digite um valor!')
    } else {
        let n = Number(num.value)
        let c = 1 
        tab.innerHTML =''
        // isso serve para que antes de vir a volta, ele limpa, ou seja pega a tab e substitui por nada e ai começa
        while (c <= 10) {
            let item = document.createElement('option')
            // item.text = `${num} x ${c} = ${num*5}`
            // aqui não vai dar certo por num, é o texto
            // n que recebeu num e assim converteu a numero

            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++

        }
       

    }

}