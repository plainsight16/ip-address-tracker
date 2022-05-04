let mapLocation = {
    apikey: 'at_6LDGx376YFUU95TGL54y3ftV7SRae',

    getLocation: function(ipAddress) {
        fetch('https://geo.ipify.org/api/v2/country,city?apiKey='
        +this.apikey
        +'&ipAddress='
        +ipAddress
        )
        .then(response => response.json())
        .then(data => console.log(data))
    }
}
console.log(mapLocation.getLocation("129.205.124.230"));


const map = L.map('map').setView([51.05, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicGxhaW5zaWdodDE2IiwiYSI6ImNsMm5lMmNhejE4ejkzZWwxaGxlNDRtbHIifQ.CBh2MlIjdPqe-Sx-gfBU0A'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map);
console.log(map);
//console.log(map);