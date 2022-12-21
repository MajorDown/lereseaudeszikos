//DECLARATION D'UNE VARIABLE PAR MARKER
const Dudule = [{
    pseudo: 'Dudule',
    lat: 46,
    lon: -0.7,
}]

//DECLARATION D'UNE VARIABLE POUR PLUSIEUR MARKER
const locations = [{
    pseudo: 'Majordown',
    lat: 46.611604,
    lon: -0.762173,
    genre: 'homme',
    birth: '11 juin 1988',
    description: 'un Connard de zikos qui se prend pour un codeur',
    instruments: ['guitare acoustique', 'basse'],
    style: ['rock', 'metal', 'folk'],
},{    
    pseudo: 'Alex',
    lat : 46.636488, 
    lon: -1.162353
}, {
    pseudo: 'Emile',
    lat : 46.413128, 
    lon: -0.897020
}, {
    pseudo: 'Charline',
    lat: 46.761949210544415, 
    lon: -1.2010023208624727
}, {
    pseudo: 'Adrien',
    lat : 46.59170454668478,
    lon : -0.645024400101788
},{
    pseudo: 'Sabrina',
    lat : 46.569368170347,
    lon : -0.8834424560990685
}]

//FONCTION INITIALISANT LA MAP
const initMap = () => {
    //constante gardant les coordonnées de départ de la map
    const initLoc = [46.64, -0.75];
    //créé l'objet map dans la balise contenant l'id 'map'
    const map = L.map('mapSearch').setView(initLoc, 9);
    //établi la layer principale
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  
    //placer un marker à partir d'une variable    
    addMarker(Dudule[0], map); 

    //placer plusieurs marker à partir d'une variable
    locations.forEach((infos) => {
        addMarker(infos, map);
    });


};

const addMarker = ({pseudo, lat, lon, genre, birth, description, instruments, style}, map) => {
    L.marker([lat, lon]).addTo(map)
        .bindPopup(
            "pseudo : "+pseudo+
            "<br>"+genre+" né(e) le "+birth+
            "<br>voici son auto-description:"+
            "<br>'"+description+"'."+
            "<br>instrument(s) : "+instruments+
            "<br>style(s) : "+style
        )
        .openPopup();
};


initMap();

//pseudo + '<br> <a href="#">Afficher ce profil</a>'