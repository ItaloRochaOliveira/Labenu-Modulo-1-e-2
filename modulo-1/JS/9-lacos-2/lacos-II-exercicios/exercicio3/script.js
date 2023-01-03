const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

console.log("Os maiores países do mundo:");
for (let i of maioresPaises) {
  console.log(`${maioresPaises.indexOf(i) + 1}º - ${i}`);
}

// for ([index, value] of maioresPaises.entries()) {
//   console.log(`${index + 1}º - ${value}`);
// }
