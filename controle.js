//estrutura de controle ( IF, ELSE e ELSE IF )

// const idade = prompt("Digite sua idade:");
// if (idade >= 18) {
//     console.log("Você é maior de idade.");
// }
// else {
//     console.log("Você é menor de idade.");
// }   

// console.log("Fim do programa.");

//usando identico
// const nome = prompt("Digite seu nome:");

// if (nome === "Luiz") {
//     console.log("O nome é Luiz.");
//}
// else {
//     console.log("O nome não é Luiz.");
// }   
// console.log("Fim do programa.");

//usando o else if
const idade = prompt("Digite sua idade:");
if (idade < 18) {
    console.log("Você é menor de idade.");
}
else if (idade >= 18 && idade < 60) {
    console.log("Você é maior de idade.");
}
else {
    console.log("Você é idoso.");
}
console.log("Fim do programa.");
