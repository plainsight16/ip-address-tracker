async function getLocation (){
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_6LDGx376YFUU95TGL54y3ftV7SRae&ipAddress=129.205.124.230`)
    const data = await response.json();
    console.log(data.location);
}
getLocation();