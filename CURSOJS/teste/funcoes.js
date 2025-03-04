var ini = document.getElementById('numI')
var final = document.getElementById('numF')
var pas = document.getElementById('passo')
var resultado = document.getElementById('res')

function Calcular () {
    if( Number(ini.value.length) == 0 || Number(final.value.length) == 0 || Number(pas.value.length)) {
        window.alert('digite um valor') }
        else {window.alert('tudo ok')}

}