const p = document.getElementById("paragrafo");
console.log(p.innerHTML);

const captureInputValue = (e) => {
  console.log(e);
  console.log(document.getElementById("texto").value);
};

const text = document.getElementById("texto");
const insert = () => {
  p.innerHTML += document.getElementById("texto").value;
};
