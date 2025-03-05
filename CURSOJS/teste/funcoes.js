var ini = document.getElementById('numI')
var final = document.getElementById('numF')
var pass = document.getElementById('passo')
var resultado = document.getElementById('res')
var lista =  documento.getElementById('lista')

function Calcular () {
    if( ini.value.length == 0 && Number(ini.value) <= 100
    || final.value.length == 0 && Number(final.value) <= 100 || 
    pass.value.length == 0 && Number(pass.value) <= 100) 
    {
        lista.innerHTML=('O resultado está valido')
     }
        else {resultado.innerHTML=('O resultado é INvalido')}
    }


