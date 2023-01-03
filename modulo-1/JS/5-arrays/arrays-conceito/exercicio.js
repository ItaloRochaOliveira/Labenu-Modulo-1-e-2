// 1. Crie um novo array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.
let array = [3, 2, 54, 2, 95, 32];
// 2. Depois disso, crie uma cópia deste array utilizando o método slice().
let novaArray = array.slice();
// 3. No array copiado:

// Remova o último item
novaArray.pop();
// Em seguida adicione o número 6 no fim do   array.
novaArray.push(6);
// Depois, remova o número que está no índice 2 array.
novaArray.splice(2, 1);
// Por fim, imprima os dois arrays.
console.table(array);
console.table(novaArray);
