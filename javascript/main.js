// Aula01

// Variaveis
//var nome = "Guilherme Aquino";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo!";
//alert(nome + " tem "+ idade + " anos");
//alert(idade + idade2);

/*console.log(nome);
console.log(idade + idade2);
console.log(n1 * n2);
console.log(n1 - n2);
console.log(n1 / n2);
console.log(n1 ^ n2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());*/

// Aula02

//Array
//var lista = ["maça", "pera","laranja"];

//Dicionário
//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]

/*console.log(frutas);
console.log(frutas[1].nome);

console.log(lista);
console.log(lista[1]);

lista.push("uva");
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" | "));*/

// Aula 03

//var idade = prompt("Qual sua idade ?");

/* Condicional
if(idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};

var count = 0;

 //Laços de Repetição
while(count <= 5) {
    //console.log(count);
    /*count = count + 1;
    count++;   
    count += 1;
 };  */ 

/* Laços de Repetição
for (count = 0; count <=5; count++) {
    console.log(count);
};*/

// Date
/*var d = new Date();
console.log(d);
console.log(d.getMonth()+1);
console.log(d.getUTCDay());
console.log(d.getHours());*/


// Aula04

function soma(n1 , n2) {
    return n1 + n2;
}

//console.log(soma(5,10));

/*var validar = 0;

function validaIdade(idade) {
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade ? ");
validaIdade(idade)
console.log(validar);*/

// Aula05

function clicou() {
    document.getElementById("tankyou").innerHTML = "Obrigado por clicar";
    console.log(document.getElementById("tankyou"));
    // alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://google.com.br/");
    //na mesma pagina
    window.location.href = "https://google.com.br/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Pagina carregada");
}

function change(elemento) {
    console.log(elemento.value)
}