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

        res.innerHTML = `idade calculada: ${idade}`;
    }
}