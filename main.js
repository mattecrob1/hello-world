let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = " seja muito Bem-Vindo.";
}else{
    elemento.textContent = nomeUsuário;
}

