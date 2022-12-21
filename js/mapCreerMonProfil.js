//FONCTION INITIALISANT LA MAP
const initMap = () => {
    //constante gardant les coordonnées de départ de la map
    const initLoc = [46.64, -0.75];
    //créé l'objet map dans la balise contenant l'id 'map'
    const map = L.map('mapCreerMonProfil').setView(initLoc, 9);
    //établi la layer principale
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    //établi un premier marker (draggable)
    const newPosition = new L.marker(initLoc, {draggable:'true'}).addTo(map)
        .bindPopup('votre position');
    
    //récupérer les coordonnées du point cliqué
    const lattitude = document.getElementById('lattitude');
    const longitude = document.getElementById('longitude');
    const lat = document.getElementById('lat');
    const lon = document.getElementById('lon');
    map.on('click', function(e) {
        lattitude.textContent = e.latlng.lat;
        longitude.textContent = e.latlng.lng;
        lat.value = e.latlng.lat;
        lon.value = e.latlng.lng;
        newPosition.setLatLng([e.latlng.lat, e.latlng.lng]);
    });

};

const addMarker = ({pseudo, lat, lon}, map) => {
    L.marker([lat, lon]).addTo(map)
        .bindPopup(pseudo)
        .openPopup();
};


initMap();

