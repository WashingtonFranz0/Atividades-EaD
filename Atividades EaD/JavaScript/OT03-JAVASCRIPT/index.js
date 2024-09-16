for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log("-------------------------------")
//Numeros impares até 20
for (let i = 0; i < 20; i++) {
    if(i % 2 == 1) {
        console.log(i)
    }
    
}

console.log("-------------------------------")
//loop com while que imprima do 0 até mo 10
let i = 0; while(i <= 10) {
    console.log(i);
    i = i+1
}

console.log("-------------------------------")
//Interrompendo um loop: Crie um loop for que imprima números de 0 a
//100, mas interrompa a execução quando chegar ao número 50.
let a = 0;
do{
    console.log(a);
    a = a + 1;
}while(a < 50);

console.log("-------------------------------")
//Pulando uma iteração: Crie um loop for que imprima números de 0 a
//20, mas pule a impressão do número 13

for(let b = 0; b < 20; b++) {
    if(b == 13){
        continue;
    }
    console.log(b);
}

console.log("-------------------------------")
//Iterando um Array: Crie um array de nomes e use um loop for...of
//para imprimir cada nome do array.

let array = ["item1", "item2", "item3"];

for (let nome of array){
    console.log(nome)
}