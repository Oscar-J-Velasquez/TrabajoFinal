
let numero1 = parseFloat(document.getElementById("num1").value);
let numero2 = parseFloat(document.getElementById("num2").value);
let resultado = document.getElementById("boton");

resultado.onclick = function(){
    let operacion = numero1 + numero2;
    let titulo = document.getElementById("h2");
    titulo.innerText = "El resultado es: " + operacion;
}

document.getElementById("cambiar").addEventListener("click", function(){
    document.body.style.backgroundColor = "purple";
});

document.getElementById("volver").addEventListener("click", function(){
    document.body.style.backgroundColor = "#fff";
})