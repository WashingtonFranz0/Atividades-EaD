let animais = [];
let frutas = ["banana", "maça", "uva" ];

//Adicionando elementos no array com push
animais.push("Dinossauro", "papagaio", "elefante");

console.log(animais);

//Removendo primeiro elemento do array com shift

animais.shift();
console.log(animais);

//Adicionando dois animais no inicio da lista
animais.unshift("macaco", "boi");

console.log(animais);

//Alterando um elemento especifico
animais[1] = "girafa";
console.log(animais);

//Usando length para contar elementos
let qtdFrutas = frutas.length;
console.log("O arrayList tem " + qtdFrutas + " frutas");

//Percorrer o arraylist com loop
for(let i = 0;i < frutas.length; i++){
    console.log(frutas[i]);
}