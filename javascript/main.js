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
var lista = ["maça", "pera","laranja"];

//Dicionário
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]

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

var idade = prompt("Qual sua idade ?");

// Condicional
if(idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};

var count = 0;

// Laços de Repetição
while(count <= 5) {
    console.log(count);
    /*count = count + 1;
    count++;   */
    count += 1;
};

// Laços de Repetição
for (count = 0; count <=5; count++) {
    console.log(count);
};

// Date
var d = new Date();
console.log(d);
console.log(d.getMonth()+1);
console.log(d.getUTCDay());
console.log(d.getHours());
