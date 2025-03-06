var ini = document.getElementById('numI')
var final = document.getElementById('numF')
var pass = document.getElementById('passo')
var resultado = document.getElementById('res')
var lista =  documento.getElementById('lista')
// mesmo tudo aqui pegando o valor de lá e mandando aoutra variavel, ainda não mudaram seu tipo que é HTML

function Calcular () {
    if( ini.value.length == 0 && Number(ini.value) <= 100
    || final.value.length == 0 && Number(final.value) <= 100 || 
    pass.value.length == 0 && Number(pass.value) <= 100) 
    {
        var p = Number(pass.value)
        var i = Number(ini.value)
        var f = Number(final.value)

        resultado.innerHTML =`O valor ficará:`
        
        if( p < f) {
            for(var pulo = i; pulo < f; pulo+=p) {
                resultado.innerHTML += `${pulo}`
                // ou sej aqui a cima estou dizendo que recebe mais ele mesmo
            } 
        }  else {
            for(var pulo = i; pulo > f; pulo-=p) {
                resultado.innerHTML +=`${pulo}`
            }
}    
     } 
        // else {window.alert('tudo errado')}
        }

    
    
    


