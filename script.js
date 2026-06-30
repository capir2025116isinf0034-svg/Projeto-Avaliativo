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

function mostrarPlanta1(){

    document.getElementById("info1").style.display="block";

}

function fecharPlanta1(){

    document.getElementById("info1").style.display="none";

}

function mostrarPlanta2(){

    document.getElementById("info2").style.display="block";

}

function fecharPlanta2(){

    document.getElementById("info2").style.display="none";

}

function mostrarPlanta3(){

    document.getElementById("info3").style.display="none";
    document.getElementById("info3").style.display="block";

}

function fecharPlanta3(){

    document.getElementById("info3").style.display="none";

}
