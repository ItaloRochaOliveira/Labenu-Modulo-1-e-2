const mensagem = document.getElementById("mensagem");

const checaCaps = (banana) => {
  console.log(banana);
  /*
  ou
  if(event.shifyKey){
    ...
  }
  */
  if (banana.key === "Shift") {
    mensagem.innerHTML = "ATENÇÃO: SEGURANDO SHIFT";
  }
};

const checaCapsOff = (e) => {
  if (e.key === "Shift") {
    mensagem.innerHTML = "";
  }
};
