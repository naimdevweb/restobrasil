AOS.init();
/*Envoie une requête GET à l'URL de l'api pour récupérer des données*/
fetch("restaurantBresilien.json")
  // Une fois que la réponse est reçue
  .then(rep => {
    // transforme la reponse obtenu en JSON
    return rep.json();
  })
  // Une fois que les données JSON sont extraites avec succès, jeles transmet à une fonction pour l'utiliser plus tard
  .then(data => {
    addProducts(data)
  });
    // Appelle la fonction addProducts() avec les données JSON en entrée
   
      
    function addProducts(data){
  // Affiche les données dans la console du navigateur
  let plat = "";
    data.entreprise.plats.forEach((p) => {
      plat += `<section class="flexplat" 

      
      
      
      
<div class="texteplat" data-aos="zoom-out-right">


      
      <div class="flextout" >  <h3 >${p.nom}</h3> <div class="descrip"> <p> ${p.description}</p>  </div> <div class="imgdes">  <img class="flexlimage" src="${p.image}"/> </div>  </div>  </div>  </section>

      `;
    });

    let service = "";
    data.entreprise.services.forEach((s) => {
      service += ` ${s.nom} ${s.description}  `;
    });

    let temoignage = "";
    data.entreprise.temoignages.forEach((t) => {
      temoignage += `
      
       <div class="temoin" >  ${t.typeExperience}  <div class="prenom">  ${t.prenom} ${t.note}  </div>  ${t.commentaire} </div>  `;
    });
    


      document.querySelector(".content").innerHTML +=
      `
      <div class="hero"  > <p class="texte" data-aos="flip-down" > ${data.entreprise.nomCommercial} ${data.entreprise.avantagesClients} ${data.entreprise.texteAppelAction}</p> </div>
      
      <div class="naim">  <p class="texte" data-aos="flip-down">   ${data.entreprise.phraseAccroche} </p>

      </div>   
      
      <strong class="decouvre"><h2>Decouvrez nos specialités:</h2></strong>
        ${plat} <h1> Les avis:</h1> 
       

      
       
       <div class="serv"> <div class="service" >${service}  ${temoignage} </div>   </div>  `
      
  }
  

