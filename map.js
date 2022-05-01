const map = L.map('map').setView([51.05, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{maxZoom}/{tileSize}/{tileSize}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicGxhaW5zaWdodDE2IiwiYSI6ImNsMm5lMmNhejE4ejkzZWwxaGxlNDRtbHIifQ.CBh2MlIjdPqe-Sx-gfBU0A'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map);

L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

console.log(map);