function contar() {
    let ini = document.getElementById('txti')
    let fim=document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.Value.length ==0 || final.Valuealue.length || passo.Value.length)
        { window.alert('erro')} 
    else {
        res.innerHTML='contado:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for ( let c=i;c<=f;c+=p){
            res.innerHTML+=`${c}`
        }

    }
    }
