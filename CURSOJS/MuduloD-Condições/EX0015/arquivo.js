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
        var genero = ''
        var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            // isso aqui acima é a mesma coisa que: <img id='foto'></img>

        
        if (fsex[0].cheked) {
            genero = 'homem' 
            if (idade >= 0 && idade <10 ) {
                //CRIANÇA
                img.setAttribute('src','BEBEMENINO.png')

            } else if (idade >= 11 && idade <=21) {
                //jovem
                img.setAttribute('src','ADOLESCENTEHOMEM.png')

            } 
            else if (idade >=22 && idade < 50) {
                //adulto
                img.setAttribute('src','HOMEM.png')
            } else { 
                //idoso
                img.setAttribute('src','IDOSO')
                 }
        }

        else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','BEBEMENINA.png')
                 }
            } 
            else if (idade <  21){
                //jovem
                img.setAttribute('src','ADOLESCENTEMULHER.png')
                 }
            
            else if (idade < 50) {
                //adulto
                img.setAttribute('src','MULHER.png')
                 }
            
            else {
                //idoso
                img.setAttribute('src','IDOSA.png')
                 }

                 res.Style.textAlign = 'Center' 
                 res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

                 //metodo de adicinar elementos a variavel
                 res.appendChild(img)
            } 
        }

        
        
