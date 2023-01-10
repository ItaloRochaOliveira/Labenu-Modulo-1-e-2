const mensagem = document.getElementById("mensagem");

const checaCaps = (e) => {
  console.log(e);
  /*
  ou
  if(event.shifyKey){
    ...
  }
  */
  if (e.key === "Shift") {
    mensagem.innerHTML = "ATENÇÃO: SEGURANDO SHIFT";
  }
};

const checaCapsOff = (e) => {
  if (e.key === "Shift") {
    mensagem.innerHTML = "";
  }
};
