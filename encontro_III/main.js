// questão 01
var hello_world = document.getElementById('question_1');
hello_world.textContent = 'Hello world!';

// questão 02
var q2 = document.getElementById('question_2');
q2.textContent = 'Frase elaborada para a questão 02!';

// questão 03
var question_3 = document.getElementById('question_3');
question_3.onclick = function(){
  alert(2 + 2);
}

// questão 04
document.getElementById("btn-exibir-nome").addEventListener("click", function () {
  const nomeCompleto = document.getElementById('nome-completo').value;
  alert('O nome completo é: ' + nomeCompleto);
});

// questão 05
document.getElementById("btn-letras").addEventListener("click", function () {
  var qtdLetras = document.getElementById('qtd-letras').value.length;
  alert('O nome possui ' + qtdLetras + ' letras');
});

// questão 06
function changeImage() {
  
  var imgClickAndChange = document.getElementById("imgClickAndChange");
  if (imgClickAndChange.src.indexOf("https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true") !== -1) {
    imgClickAndChange.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true"
  } else {
    imgClickAndChange.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true"
  }
}

// questão 07
function hoverImage() {
  var imgHoverAndChange = document.getElementById("imgHoverAndChange");
  if (imgHoverAndChange.src.indexOf("https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true") !== -1) {
    imgHoverAndChange.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true"
  } else {
    imgHoverAndChange.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true"
  }
}
document.getElementById("btn-alert").addEventListener("click", function () {
  var name = document.getElementById('name').value;
  var lastname = document.getElementById('last-name').value;
  alert('Olá ' + name + " " + lastname + '!');
});

// questão 08
function contarCpf(valor) {
  var cont = valor.length;
  document.getElementById("quantidade").value = cont;
}

// questão 09
function contarCpfPoint(valor) {
  var cont = valor.replace(/[\.-]/g, "");
  document.getElementById("quantidade_point").value = cont;
}

// questão 10


// questão 11


// questão 12


// questão 13


// questão 14


// questão 15


// questão 16


// questão 17


// questão 18


// questão 19


// questão 20


// questão 21


// questão 22


// questão 23


// questão 24


// questão 25


// questão 26


// questão 27


// questão 28


// questão 29


// questão 30


// questão 31


// questão 32


// questão 33


// questão 34


// questão 35


// questão 36


// questão 37


// questão 38


// questão 39


// questão 40


// questão 41


// questão 42
