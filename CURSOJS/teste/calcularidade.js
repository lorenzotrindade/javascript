calcularidade() {
    let ano = document.getfullyear()
    let nascimento = document.getElementById('nascimento')
    let residade = document.getElementeById('residade')

    if(ano.value.length == 0 || nascimento.value.length == 0 
        && ano.value <= 0 && nascimento.value >= ano)  {
            alert('valores incorretos')
        }  else {
            n = Number(nascimento)
            a = Number(ano)

            if(n < a){
                return residade;
            }
        }
    
}