let mapLocation = {

    getLocation: function(domainName) {
        const apikey = 'at_6LDGx376YFUU95TGL54y3ftV7SRae';

        fetch('https://geo.ipify.org/api/v2/country,city?apiKey='
        +apikey
        +'&ipAddress=&domain='
        +domainName
        )
        .then(response => response.json())
        .then(data => {
            this.displayInfo(data);
            this.generateMap(data);
        })
    },

    generateMap: function(data){
        const {lat, lng} = data.location;
        const map = L.map('map').setView([lat, lng], 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoicGxhaW5zaWdodDE2IiwiYSI6ImNsMm5lMmNhejE4ejkzZWwxaGxlNDRtbHIifQ.CBh2MlIjdPqe-Sx-gfBU0A'
        }).addTo(map);

        L.marker([51.5, -0.09]).addTo(map);
    },

    search: function(){
        const input = document.querySelector("#input");
        this.getLocation(input.value);
    },

    displayInfo: function(data){
        console.log(data);
        const {ip, isp} = data;
        const {region, city, postalCode, timezone} = data.location;

        document.getElementById("IP").textContent = ip;
        document.getElementById("location").textContent = `${region}, ${city} ${postalCode}`;
        document.getElementById("Timezone").textContent = "UTC " + timezone;
        document.getElementById("ISP").textContent = isp;
        
    }
}
//mapLocation.getLocation("129.205.124.230");

const submitBtn = document.querySelector("#submitBtn");


submitBtn.addEventListener("click", () =>{
    mapLocation.search();

})