//DATA

var d = new Date();
console.log(d.getDate());
console.log(d.getMonth()+1);
console.log(d.getHours());
console.log(d.getMinutes());
//alert(d.getMonth()+1);
//alert(d.getDay())
//alert(d.getTime());


//ESTRUTURA DE REPETIÇÃO -- for e while
/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    //count = count + 1;
    count++
};
*/

// CONDICIONAIS -- if - else
/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

//DICIONARIO
/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//ARRAY
/*
var lista = ["maça","pêra","laranja"];
lista.push("uva");
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" | "));
*/

//** length - quantidade de itens
//** reverse() - inverte a posição dos elementos da lista
//** push inclui item, pop() exclui ultimo item
//console.log(lista[1]); -- (lista[1]) mostra 1o item da lista
//alert(lista[1])

// JAVA
/*
var nome = "Rubens Collaço";
var n1 = 59;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
*/

// toUpperCase - Transforma a frase em maicusculo
// toLowerCase - Transforma a frase em minusculo
//alert(frase.replace("Japão", "Brasil"));