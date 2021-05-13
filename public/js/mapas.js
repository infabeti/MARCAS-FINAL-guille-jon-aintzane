

let map;
let latitude=0;
let longitude=0;

//Restaurante1
let restLat=latitude+0.01;
let restLon=longitude+0.02;
let rest1={lat: restLat, lng:restLon};   

//Restaurante2
let rest2Lat=latitude;
let rest2Lon=longitude-0.008;
let rest2={lat: rest2Lat, lng:rest2Lon};   

// 
function getPosition(position) {
  latitude = position.coords.latitude ;
  longitude = position.coords.longitude; 
//Restaurante1
   restLat=latitude+0.01;
restLon=longitude+0.02;
rest1={lat: restLat, lng:restLon};  
//Restaurante2
 rest2Lat=latitude;
 rest2Lon=longitude-0.008;
 rest2={lat: rest2Lat, lng:rest2Lon};   
}


navigator.geolocation.getCurrentPosition(getPosition);





function initMap() {

  
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude},
    zoom: 12,
  });

  const markerUser = new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
  });
  const markerR1 = new google.maps.Marker({
    position: rest1,
    map: map,
  });
  const markerR2 = new google.maps.Marker({
    position: rest2,
    map: map,
  });
}


let distanciaRest1=calcDist(latitude,longitude,rest1.lat,rest1.lng).toFixed(1);
let distanciaRest2=calcDist(latitude,longitude,rest2.lat,rest2.lng).toFixed(1);



function calcDist(lat1, lon1, lat2, lon2) 
{
var R = 6371; // km
var dLat = toRad(lat2-lat1);
var dLon = toRad(lon2-lon1);
var lat1 = toRad(lat1);
var lat2 = toRad(lat2);

var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
var d = R * c;
return d;
}

// Converts numeric degrees to radians
function toRad(Value) 
{
return Value * Math.PI / 180;
}

function escribirDistancia(){
document.getElementById("distancia1").innerHTML = distanciaRest1;
}

function escribirDistancia2(){
    document.getElementById("distancia2").innerHTML = distanciaRest2;
    }
  

module.exports = {
    getPosition : getPosition,
    initMap : initMap,
    calcDist :calcDist,
    toRad : toRad,
    escribirDistancia : escribirDistancia,
    escribirDistancia2 : escribirDistancia2
}