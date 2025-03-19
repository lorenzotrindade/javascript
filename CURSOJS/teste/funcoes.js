var ini = document.getElementById('numI')
var fim = document.getElementById('numF')
var pass= document.getElementById('passo') 
var res= document.getElementById('res')
 
 function calcular() {
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0 || 
        ini.value <= 0 || ini.value > 100 || 
        fim.value <= 0 || fim.value > 100 || 
        pass.value <= 0 || pass.value > 100)  
        { 
            window.alert("Valores incorretos")
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value) 
        res.innerHTML+= `Os numeros são:`
        

        if(p < f) // prograssiva 
         {
            for(var pulo = i;pulo<f;pulo+=p) {
                res.innerHTML+= ` ${pulo} 👉🏼`
                
            }  
        } 
    }
}

 