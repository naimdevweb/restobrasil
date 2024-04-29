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
      plat += `<li>${p.nom} ${p.description} <img src="${p.image}"/> </li>`;
    });

    let service = "";
    data.entreprise.services.forEach((s) => {
      service += `<li>${s.nom} ${s.description}</li>`;
    });

    let temoignage = "";
    data.entreprise.temoignages.forEach((t) => {
      temoignage += `<li> ${t.typeExperience} ${t.commentaire} ${t.note} ${t.prenom} </li>`;
    });
    


      document.querySelector("#content").innerHTML += 
      `${data.entreprise.phraseAccroche} ${data.entreprise.nomCommercial}  ${data.entreprise.avantagesClients}
       ${data.entreprise.texteAppelAction} ${plat} ${service} ${temoignage} `
}

