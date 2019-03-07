//credits: https://www.htmlgoodies.com/beyond/javascript/calculate-the-distance-between-two-points-in-your-web-apps.html

self.onmessage = function(event){

  console.log("im in haversine");
  console.log("Source point lat is " + event.data.slat);
  console.log("Source point lng is " + event.data.slong);

  console.log("Dest point lat is " + event.data.dlat);
  console.log("Dest point lng is " + event.data.dlong);
  var radlat1 = Math.PI * event.data.slat/180;
  var radlat2 = Math.PI * event.data.dlat/180;

  var radlon1 = Math.PI * event.data.slong/180;
  var radlon2 = Math.PI * event.data.dlong/180;

  var theta = event.data.slong-event.data.dlong;
  var radtheta = Math.PI * theta/180;
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = dist * 180/Math.PI;
  dist = dist * 60 * 1.1515;
  dist = dist * 1.609344;

  console.log(dist);
  this.postMessage(dist);
}
