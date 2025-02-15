function verificar() {
    var data = new Date();
    var ano =  data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector("div#res");

    if(fano.value.length <= 0 || Number(fano.value)>ano)
    {window.alert('Digite outra data');

    }
    else 
    {

        var fsex= document.getElementByName('[name = "radsex"]: cheked')
        var idade = ano - Number(fano.value);
        // para teste
        // res.innerHTML = `idade calculada: ${idade}`;
        if (fsex[0].cheked) {
            genero = 'homem' 
        }

        else if (fsex[1].checked) {
            genero = 'Mulher'
        }

        res.Style.textAlign = 'Center' 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        
    }
}