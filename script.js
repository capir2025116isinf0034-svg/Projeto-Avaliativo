let mostrando = false;

function mostrarCuriosidade(){

    let texto = document.getElementById("textoCuriosidade");

    if(mostrando){

        texto.innerHTML = "";

        mostrando = false;

    }

    else{

        texto.innerHTML = "A planta Comigo-ninguém-pode é uma das plantas ornamentais mais tóxicas do Brasil.";

        mostrando = true;

    }

}
