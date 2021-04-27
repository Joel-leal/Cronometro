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
    const timer = document.getElementById("ret-cronometro");
    timer.innerText = "faltam " + contador + " segundos";

    alpha -= 0.15;
    const root = document.getElementById("body");
    root.style.backgroundColor = `rgb(${red},${green},${blue},${alpha})`;

    const backDivOne = document.getElementById("div-two");
    backDivOne.style.background =
      "url('https://thumbs.gfycat.com/SelfreliantClutteredBlackpanther-max-1mb.gif')";
    document.getElementById("div-one").style.display = "none"; // ocultando a div-one quanto o contador
    if (contador == 0) {
      // backDivOne.remove(); //remover a div divTow quando o contador acabar de contar.
      timer.remove(); //remover a div retCronometro quando o contador acabar de contar

      const backDivTwo = document.getElementById("div-two");
      backDivTwo.style.background =
        "url('https://thumbs.gfycat.com/DifferentDimpledHamster-max-1mb.gif')";

      var buttonReset = document.getElementById("reset");
      buttonReset.insertAdjacentHTML(
        "afterend",
        '<div id="reset"> <input type="button" value="Resetar" onClick="window.location.reload()"></div>'
      );
    }
  }
}
