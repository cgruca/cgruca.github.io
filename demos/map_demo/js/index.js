//******************Drag and Drop + File Reading**********

var holder = document.getElementById('holder'),
    state = document.getElementById('status');

var source_long, source_lat, dest_long, dest_lat = 0;

if (typeof window.FileReader === 'undefined') {
    state.className = 'fail';
} else {
    state.className = 'success';
}

holder.ondragover = function() {
    this.className = 'hover';
    return false;
};

holder.ondragend = function() {
    this.className = '';
    return false;
};

holder.ondrop = function(e) {
    this.className = '';
    e.preventDefault();


    var file = e.dataTransfer.files[0],
        reader = new FileReader();
        reader.onload = function(event) {
        console.log(event.target);
        holder.innerText = event.target.result;
        var res = event.target.result.split(",");

        dest_lat = res[0];
        dest_long = res[1];

        console.log("dest lat is " + dest_lat);
        console.log("dest long is " + dest_long);

    };
    console.log(file);
    reader.readAsText(file);

    return false;
};

//********************Mobile browse option********************

if (window.File && window.FileReader && window.FileList && window.Blob) {
      function showFile() {
         var holder = document.getElementById('holder');
         var file = document.querySelector('input[type=file]').files[0];
         var reader = new FileReader()

         var textFile = /text.*/;

         if (file.type.match(textFile)) {
            reader.onload = function (event) {
               holder.innerHTML = event.target.result;
               var res = event.target.result.split(",");

               dest_lat = res[0];
               dest_long = res[1];
            }
         } else {
            holder.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
         }
         reader.readAsText(file);
      }
   } else {
      alert("Your browser is too old to support HTML5 File API");
   }

//***************Geo Location**************************

var results=document.getElementById("geoLocation");

var allowed = false;
var returned = false;
window.onload= function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( geolocationSuccess, geolocationFailure);
  } else {
    results.innerHTML= "This browser doesn't support geolocation.";
  }
};

function geolocationSuccess(position) {
  results.innerHTML= "Your device coordinate is: " + position.coords.latitude+ " , " + position.coords.longitude;
  allowed = true;
  source_lat = position.coords.latitude;
  source_long = position.coords.longitude;
  updateMap(source_lat,source_long);
  console.log("Your device coordinate is: " + position.coords.latitude+ " , " + position.coords.longitude);
}

function geolocationFailure(error) {
  results.innerHTML= "Geolocation failed: "+ error.message;
  allowed = false;
}


//***************Map API************************************



var map = L.map('map').setView([40.725, -73.985], 13);
var new_event_marker = L.marker([0,0]);  // replace marker
var dest_event_marker;
var polyline;
console.log(new_event_marker);
var popup;

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var searchControl = L.esri.Geocoding.geosearch().addTo(map);

var results = L.layerGroup().addTo(map);

searchControl.on('results', function(data){
  results.clearLayers();
  for (var i = data.results.length - 1; i >= 0; i--) {
    results.addLayer(new_event_marker.setLatLng(data.results[i].latlng));
  }
});

var geocodeService = L.esri.Geocoding.geocodeService();

map.on('click', function(e) {
  console.log("lat long");
  console.log(e.latlng);

  if(returned){
    map.removeLayer(polyline);
    map.removeLayer(dest_event_marker);
    map.panTo(new L.LatLng(source_lat, source_long));
  }

  if(!allowed)
 {
   new_event_marker = new L.marker(e.latlng,{ draggable: true});
   new_event_marker.addTo(map);
   allowed = true;

   geocodeService.reverse().latlng(e.latlng,{ draggable: true}).run(function(error, result) {
     new_event_marker.bindPopup(result.address.Match_addr).openPopup();
     console.log(new_event_marker);
   });
 }
 else
 {
   new_event_marker.setLatLng(e.latlng);
   geocodeService.reverse().latlng(e.latlng,{ draggable: true}).run(function(error, result) {
     new_event_marker.bindPopup(result.address.Match_addr).openPopup();
     console.log(new_event_marker);
   });
}
});

function updateMap(lat,long) {
  map.panTo(new L.LatLng(lat, long));

  new_event_marker.setLatLng([lat,long]).addTo(map).bindPopup("Source Location").openPopup();
}


//***************************Web Worker *****************************************

function calcDistance() {
  d_input_lat = document.getElementById("d-lat").value;
  d_input_long = document.getElementById("d-long").value;

  if(returned){
    map.removeLayer(polyline);
    map.removeLayer(dest_event_marker);
    map.panTo(new L.LatLng(source_lat, source_long));
  }

  if (isNaN(dest_lat) || isNaN(dest_long)){

      dest_lat = parseInt(d_input_lat);
      if(isNaN(dest_lat)){
        document.getElementById("d-lat").style.border = "5px solid #dc0000";
        return 0;
      }

      dest_long = parseInt(d_input_long);
      if(isNaN(dest_long)){
        document.getElementById("d-long").style.border = "5px solid #dc0000";
        return 0;
      }
  }

  if(allowed && !isNaN(dest_lat) && !isNaN(dest_lat)){

    returned = true;
    var curPos = new_event_marker.getLatLng();
    source_lat = curPos.lat;
    source_long = curPos.lng;

    console.log("Source point lat is " + source_lat);
    console.log("Source point lng is " + source_long);

    console.log("Dest point lat is " + dest_lat);
    console.log("Dest point lng is " + dest_long);


    document.getElementById("d-lat").style.border = "5px solid #18588e";
    document.getElementById("d-long").style.border = "5px solid #18588e";

    dest_event_marker = new L.marker([dest_lat,dest_long]);
    dest_event_marker.addTo(map).bindPopup("Destination Location").openPopup();

    var latlngs = Array();

    latlngs.push(new_event_marker.getLatLng());
    latlngs.push(dest_event_marker.getLatLng());

    polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

    map.fitBounds(polyline.getBounds());

    try{
    geocodeService.reverse().latlng([dest_lat, dest_long]).run(function(error, result) {
      document.getElementById("location").innerHTML = "The destination coordinates entered correspond to this location: <br />" + result.address.Match_addr + "<br />";
      console.log(result.address.Match_addr);
    });
  }
    catch(e) {
        document.getElementById("location").innerHTML = "The destination coordinates are unavailable";
      }

    startWorker();
  }
  else {
    alert("Please make sure that source and destination inputs are filled out and valid");

  }

}

function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(nworker) == "undefined") {
            nworker = new Worker("js/haversine.js");
            console.log("TEST");
            console.log(source_long);
            console.log(source_lat);
			         nworker.postMessage({slat: source_lat, slong: source_long, dlat: dest_lat, dlong: dest_long});

        }
        nworker.onmessage = function(event) {
            document.getElementById("calculation").innerHTML = "<br />" + "The distance between these two points is: <br />" + event.data.toFixed(2) + " km";
            nworker.terminate();
            nworker = undefined;
            dest_lat = "reset";
            dest_long = "reset";
        };
    }
	else {
        document.getElementById("calculation").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}
