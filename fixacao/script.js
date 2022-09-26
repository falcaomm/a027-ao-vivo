let paragrafoVar = document.getElementById("paragrafo")

let imput = document.getElementById("texto")


function imprimeValor(){
console.log(imput.value);
}

function adicionaNome(){
    paragrafoVar.innerHTML += ` ${imput.value}.`
    imput.value =""
}
