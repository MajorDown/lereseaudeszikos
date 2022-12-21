//ANCRAGE DU FORMULAIRE
const nouveauProfil = document.querySelector('#nouveauProfil');
nouveauProfil.addEventListener('submit', creationprofil);
console.log("formulaire 'nouveauprofil' détecté");

//TRANSFORMATION DES DONNEES DU FORMULAIRE
function creationprofil(e) {
    //EMPECHER LE RECHARGEMENT DE LA PAGE
    e.preventDefault();
    console.log("formulaire envoyé");
    console.log("fonction 'creationProfil' lancée");
    //INTEGRER LES DONNEES DANS DES CONSTANTES
    const profilData = new FormData(nouveauProfil);
    console.log("-->le Form.data 'profilData' est créé à partir de 'nouveauProfil'"); 
    const pseudoData = profilData.get('pseudo');
    console.log("  -->'pseudoData' = " + pseudoData);
    const birthData = profilData.get('birth');
    console.log("  -->'birthData' = " + birthData);
    const genreData = profilData.get('genre');
    console.log("  -->'genreData' = " + genreData);
    const latData = profilData.get('lat');
    console.log("  -->'latData' = " + latData);
    const lonData = profilData.get('lon');
    console.log("  -->'lonData' = " + lonData);
    const descriptionData = profilData.get('description');
    console.log("  -->'descriptionData' = " + descriptionData);
    const instrumentsData = profilData.getAll('instruments'); //getAll pour récupérer toute les checkbox
    console.log("  -->'instrumentsData' = " + instrumentsData);
    const styleData = profilData.getAll('style');
    console.log("  -->'styleData' = " + styleData);
    const compoOrCoverData = profilData.get('compoOrCover');
    console.log("  -->'compoOrCoverData' = " + compoOrCoverData);
    const intermittentData = profilData.get('intermittent');
    console.log("  -->'intermittentData' = " +intermittentData);
    const haveABandData = profilData.get('haveABand');
    console.log("  -->'haveABandData' = " + haveABandData);
    const needABandData = profilData.get('needABand');
    console.log("  -->'needABandData' = " + needABandData);
    const publicationData = profilData.get('publication');
    console.log("  -->'publicationData' = " + publicationData);
    const mailData = profilData.get('mail');
    console.log("  -->'mailData' = " + mailData);
        const mdpData = profilData.get('mdp');
    console.log("  -->'mdpData' = " + mdpData);
    const mdp2Data = profilData.get('mdp2');
    console.log("  -->'mdp2Data' = " + mdp2Data);

    //INTEGRER LES CONSTANTES DANS UN OBJET    
    const profilObject = {
        pseudo : pseudoData,
        birth : birthData,
        genre : genreData,
        lat: latData,
        lon: lonData,
        description: descriptionData,
        instruments: instrumentsData,
        style: styleData,
        compoOrCover: compoOrCoverData,
        intermittent: intermittentData,
        haveABand: haveABandData,
        needABand: needABandData,
        publication: publicationData,
        mail: mailData,
        mdp: mdpData,
        mdp2: mdp2Data
    }
    console.log("-->l'objet 'profilObject' est créé. il contient : ");
    console.log(profilObject);
    console.log("fonction 'creationProfil' terminée");
}

