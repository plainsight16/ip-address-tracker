const getLocation = (domainName) => {
    const apikey = 'at_6LDGx376YFUU95TGL54y3ftV7SRae';

    fetch('https://geo.ipify.org/api/v2/country,city?apiKey='
    +apikey
    +'&ipAddress=&domain='
    +domainName
    )
    .then(response => response.json())
    .then(data => {
        displayInfo(data);
        generateMap(data);
    })
    .catch(err =>{
        alert("Input valid domain or IP");
    })
};

const generateMap = (data) =>{
    resetMap();

    const {lat, lng} = data.location;
    const map = L.map('map', {
        center: [lat, lng]
    }).setView([lat, lng], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicGxhaW5zaWdodDE2IiwiYSI6ImNsMm5lMmNhejE4ejkzZWwxaGxlNDRtbHIifQ.CBh2MlIjdPqe-Sx-gfBU0A'
    }).addTo(map);

    const locationIcon = L.icon({
        iconUrl: './images/icon-location.svg',
        iconSize: [46, 56],
        iconAnchor: [lat, lng]
    });
    
    L.marker([51.5, -0.09], {icon: locationIcon}).addTo(map);
};

const search = () =>{
    const input = document.querySelector("#input").value;
    getLocation(input);
};

const displayInfo = (data) =>{
    console.log(data);
    const {ip, isp} = data;
    const {region, city, postalCode, timezone} = data.location;

    document.getElementById("IP").textContent = ip;
    document.getElementById("location").textContent = `${region}, ${city} ${postalCode}`;
    document.getElementById("Timezone").textContent = "UTC " + timezone;
    document.getElementById("ISP").textContent = isp;
};

const resetMap = () =>{
    const container = L.DomUtil.get('map');

    if(container != null){
    container._leaflet_id = null;
    }
}

const defaultdisplay = () =>{
    getLocation('');
}

defaultdisplay();

const submitBtn = document.querySelector("#submitBtn");
const input = document.querySelector("#input");

submitBtn.addEventListener("click", () =>{
    search();
})

input.addEventListener("keyup", (event) =>{
    if(event.key == "Enter")
        search();
}) 