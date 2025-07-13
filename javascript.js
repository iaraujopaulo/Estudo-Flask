//iniciando em Js
//numeros
console.log(typeof 83);
console.log(83);
console.log(2 + 3);
console.log(3 * 2);
console.log(3 - 3);
console.log(6 / 2);

//special numbers,que são numeros mais não fucionam como numeros
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "abc");
console.log(typeof NaN);

//strings,deve sempre começar e terminar pelo mesmo caractere
console.log("Luiz");
console.log('Cleone');

// simbolo de quebra linha(\n) ou espaçamento(\t)
console.log("Testando a \n quebando a linha ");
console.log("usabdo o \tab de tab")

//concatenação
console.log("Luiz" + " " + "Cleone");


//template string, que é uma forma de concatenar mais fácil
console.log(`Meu nome é ${"Luiz Cleone"} e meu sobrenome é ${"Paz"}`);
console.log(`A soma de 2 + 3 é igual a ${2 + 3}`);

//booleanos
console.log(typeof true);
console.log(typeof false);
console.log(true); //exe. console.log(3<20);
console.log(false); //exe. console.log(30>10);

//comparações
console.log(2 == 2); //true
console.log(2 == 3); //false
console.log(2 != 3); //true
console.log(2 != 2); //false
console.log(2 === 2); //true
console.log(2 === "2"); //false, pois o tipo é diferente
console.log(2 !== "2"); //true, pois o tipo é diferente
console.log(2 > 3); //false
console.log(2 < 3); //true
console.log(2 >= 2); //true
console.log(2 <= 2); //true 

//operadores lógicos
console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false
console.log(true || true); //true
console.log(true || false); //true
console.log(false || false); //false
console.log(!true); //false
console.log(!false); //true 

//tabela de verdade
// && (E)  || (OU)  ! (NÃO) 

//operadores lógicos
console.log(2 > 3 && 3 < 4); //false
console.log(2 > 3 || 3 < 4); //true
console.log(!(2 > 3)); //true

