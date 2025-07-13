//prompt   : Funções auxiliares para o projeto
//alert    : Funções auxiliares para o projeto
//confirm  : Funções auxiliares para o projeto  

// const nome = prompt("Digite seu nome:");
// const idade = prompt("Digite sua idade:");
// alert(`Olá, ${nome}! Bem-vindo ao nosso site.`);

//console.log(`Seu nome é ${nome} e você tem ${idade} anos.`);

//Funções do Math
// console.log(Math.PI); //Valor de PI
// console.log(Math.E); //Valor de E
// console.log(Math.sqrt(16)); //Raiz quadrada de 16
// console.log(Math.pow(2, 3)); //2 elevado a 3
// console.log(Math.max(1, 2, 3, 4, 5)); //Maior valor entre os números
// console.log(Math.min(1, 2, 3, 4, 5)); //Menor valor entre os números
// console.log(Math.random()); //Número aleatório entre 0 e 1
// console.log(Math.floor(4.7)); //Arredonda para baixo
// console.log(Math.ceil(4.1)); //Arredonda para cima
//console.log(Math.round(4.5)); //Arredonda para o inteiro mais

//Funções console
console.log("Mensagem de log"); //Exibe uma mensagem no console
console.error("Mensagem de erro"); //Exibe uma mensagem de erro no console
console.warn("Mensagem de aviso"); //Exibe uma mensagem de aviso no console
console.table([{ nome: "João", idade: 30 }, { nome: "Maria", idade: 25 }]); //Exibe uma tabela no console
console.group("Grupo de mensagens"); //Inicia um grupo de mensagens no console
console.log("Mensagem dentro do grupo");
console.groupEnd(); //Encerra o grupo de mensagens no console
console.time("Tempo de execução"); //Inicia o cronômetro
console.log("Executando código...");
console.timeEnd("Tempo de execução"); //Encerra o cronômetro e exibe o tempo de execução
console.assert(1 === 1, "Essa mensagem não será exibida"); //Exibe uma mensagem se a condição for falsa
console.assert(1 === 2, "Essa mensagem será exibida"); //Exibe uma mensagem se a condição for falsa 