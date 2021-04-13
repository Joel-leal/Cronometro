let red = 0;
let green = 255;
let blue = 0;
let alpha = 1;
let contador = document.getElementById("time").value;

function timeTranslator() {
  let pegaElemento = parseInt(document.getElementById("time").value) + 1;
  contador = pegaElemento;
  setInterval(myFunction, 1000);
}

function myFunction() {
  if (contador > 0) {
    contador -= 1;
    const element = document.getElementById("retCronometro");
    element.innerText = "faltam " + contador + " segundos";

    alpha -= 0.15;
    const root = document.getElementById("corpo");
    root.style.backgroundColor = `rgb(${red},${green},${blue},${alpha})`;

    const backDivOne = document.getElementById("divTwo");
    backDivOne.style.background = "url('https://thumbs.gfycat.com/SelfreliantClutteredBlackpanther-max-1mb.gif')";
    document.getElementById("divOne").style.display = "none"; // ocultando a divOne quanto o contador
     
      
      if(contador == 0){
      document.getElementById("divTwo").remove(); //remover a div divTow quando o contador acabar de contar. 
      document.getElementById("retCronometro").remove(); //remover a div retCronometro quando o contador acabar de contar
      
    
      const backDivTwo = document.getElementById("divThree");
      backDivTwo.style.background = "url('https://thumbs.gfycat.com/DifferentDimpledHamster-max-1mb.gif')";

      var buttonReset = document.getElementById('reset');
      buttonReset.insertAdjacentHTML('afterend', '<div id="reset"> <input type="button" value="Resetar" onClick="window.location.reload()"></div>');
      }
  }
  
}
