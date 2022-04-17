const url = "https://blockchain.info/ticker";

function recupererPrix(){
  


//créer une requette
let request = new XMLHttpRequest(); // créer un objet
request.open('GET',url); // premier parametre GET / POST deuxieme parametre URL
request.responseType ='json'; //nous attendons de JSON
request.send(); //nous envoyons notre requette

//dé qu'on reçoit une réponse cette fonction est exécuté

request.onload = function(){
  if(request.readyState === XMLHttpRequest.DONE) {
    
    if(request.status === 200){
      
      let response = (parseFloat(request.response.EUR.last.toFixed(2))*200).toFixed(2);
      //console.log(response);
      document.querySelector('#price_label').textContent = response;
      
    } else {
      alert("un probleme est intervenue , veillez réessayer plus tard..")
    }
    
  }
}
  }
  
  //refrsh the price after 5 seconds
setInterval(recupererPrix, 5000);
