const map = L.map('map-template').setView([9.5152892, -69.2207461], 13);

const socket = io();

const urlTileLayer = 'https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png';
 L.tileLayer(urlTileLayer).addTo(map);

 map.locate({enableHighAccuracy: true});

 const coordenadas = map.on('locationfound', e => {
    const coord = [e.latitude, e.longitude];

    const marker = L.marker(coord).bindPopup('Hola Alexis tu estás aquí');
 
    marker.addTo(map);

    socket.emit('userCoordinates', coord);
 });

socket.on('newUserCoordinates', coords => {

    console.log('nuevo usuario conectado');
    const marker = L.marker(coords).bindPopup('Hola Alexis tu estás aquí');
 
    marker.addTo(map);
});

//  const marker = L.marker([9.5152273, -69.2229623,15]).bindPopup('Hola Alexis tu estás aquí');
 
//  marker.addTo(map);