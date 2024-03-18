///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!
function calculadora(numero1,numero2,operador)
{
    let resultado
    let num1= parseInt(numero1)
    let num2= parseInt(numero2)
    
    switch(operador)
    {
        case "+":
            resultado = ('A soma dos dois números é igual a ' + (num1+num2))
            break;
        case "-":
            resultado = ('A subtração dos dois números é igual a ' + (num1 - num2))
            break;
        case "*":
            resultado = ('A multiplicação dos dois números é igual a ' + (num1 * num2))
            break;
        case "/":
            resultado = ('A divisão dos dois números é igual a ' + (num1 / num2))
            break;
        case "e":
            resultado = (' A exponenciação dos números é igual a ' + (num1 ** num2))
            break;
    }

    if ((resultado == undefined) || (resultado > 1000000))
    {
        resultado= 'ERRO'
    }

    return resultado 
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}
