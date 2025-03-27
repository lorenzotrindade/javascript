calcularidade();{
    let ano = new Date().getFullYear()
    let nascimento = document.getElementById('nascimento')
    let residade = document.getElementById('residade')

    if (nascimento.value=='' || Number(nascimento.value) <= 0 || Number(nascimento.value) >= ano  )  {
            alert('valores incorretos')
        }  else {
            n = Number(nascimento.value)
            a = ano
            residade.innerHTML= 'Sua idade é'

            if(n < a){
                var idade = a-n
                residade.innerHTML+= `${idade}`
            } else {return true;}
        }
    
}