function encurtarUrl(){

  //validar se exite url
  let url = document.getElementById("input-url").value;
  if(!url){
    alert('Insira uma URL válida para encurtar');
    return;
  }

  //apiKey = 91741d6443274c5090f2de885b7dce3a

  //encurtar o link

  //primeiro o headers (cabecalhos da requisição)
  let headers = {
    "Content-Type": "application/json",
    "apiKey": "91741d6443274c5090f2de885b7dce3a"
  }

  //dados da requisição (aqui mando o link que será encurdado)
  let linkRequest = {
    destination: url, //valor do URL
    domain: {fullName: "rebrand.ly"}
  }  

  fetch("https://api.rebrandly.com/v1/links", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(linkRequest)
  })
    .then(response => response.json())
    .then(json =>{
      console.log(json)
      //recebe o link digitado e devolve ela encurtada
      let inputURL = document.getElementById("input-url");
      inputURL.value = json.shortUrl;

    })

}


function copiarUrl(){
  let inputURL = document.getElementById("input-url");

  inputURL.select(); //selecionar texto
  inputURL.setSelectionRange(0,99999); //copiar texto em mobile

  navigator.clipboard.writeText(inputURL.value);

  alert(`Url Copiada: ${inputURL.value}`);
}

