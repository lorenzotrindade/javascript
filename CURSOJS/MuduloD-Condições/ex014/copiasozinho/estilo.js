function periodo() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var hora = getHours()
    msg.innerHTML = `Agora são ${hora}.`
}