function veriricar() {

    var date= new date()
    var ano= data.GetFullYear()
    var fano =document.getElementById('txtano')
    /*ISSO AQUI ' FANO', É UMA VARIAVEL*/ 
    var res=document.querySelector('div#res')
    if (fano.value.length == 0 || fano > ano ) {
         window.alert('ERRO, insira os dados novamente') 
    } else {
            window.alert('tudo ok')
        }
}