adicionar (); {
    var numE = document.getElementById("numE")

    let num = Number(numE.value)
    if( num >= 100 || num <= 1) {
        window.alert('digite outro numero')
    } else { Window.alert(`O numero é ${num}`)}
}