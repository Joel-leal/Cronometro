
    let contador = document.getElementById("time").value
    function timeTranslator(){
    let pegaElemento = parseInt(document.getElementById("time").value) + 1
    contador = pegaElemento;
    setInterval(myFunction, 1000)
    }
    function myFunction(){
        if(contador > 0){
        contador -= 1;
        const element = document.getElementById("retCronometro")
        element.innerText = contador 
        }
    }
    
  