function contar() {
    var ini  = document.getElementById('textoI')
    var fim = document.getElementById('textoF')
    var passo = document.getElementById('textoP')
    var res = document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)  {
        window.alert('[ERRO]')
            } else {
                res.innerHTML = 'Contando'
                // por padrão esse caara irrá no lugar de aonde está o res[0]
                var i = Number(ini.value)
                var f = Number(fim.value)
                var p = Number(passo.value)
                if(p <= 0) {window.alert('passo invalido')}

                if( i < p)  //Decrescente

                    for(var c = i; c >= f ;c-=p ) {
                        //enquanto c é igual a i, e c menor ou igual a f; c acrescera a c + valor de p
    
                        res.innerHTML += `${c} \u{1F603} `
                        // ERA U+1F603, mas se adap no JS
                } else { //Crescente
                    for(var c = i; c <= f ; c+= p ) {
                        //enquanto c é igual a i, e c menor ou igual a f; c acrescera a c + valor de p
    
                        res.innerHTML += `${c} \u{1F603} `
                        // ERA U+1F603, mas se adap no JS
                    }  
                } 
                res.innerHTML += `\u{1F3C1} `
                
            }
}