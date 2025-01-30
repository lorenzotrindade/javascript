function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    // esse var img, está pegando o ID imagem que pode ser qualquer coisa no HTTML
    var data = new Date()
    // var hora = 11
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src ='manhã.png'
        window.document.body.style.background = '#e6b35b'
    }  
    else if(hora >= 12 && hora < 18){
        img.src ='tarde.png'
        window.document.body.style.background = '#8d3f17'
    }

    else{
        img.src ='noite1.png'
        window.document.body.style.background = '#212c2f'
        // traduzindo: windows nesse documento, no corpo dele, tem estilo de fundo = "esse codigo"
    }

    // esse img.src, não é o nome do ID nem o nome da Imagem o 'img ' se refere a variavel que criamos IMG e src. dizendo a fonte dela
}


