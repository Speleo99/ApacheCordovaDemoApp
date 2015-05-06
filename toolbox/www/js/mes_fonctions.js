document.addEventListener('backbutton', backPressed, false);
// Un appuie physique sur le bouton back du tél ramène à la page précédente.
function backPressed(){
        window.history.back();
}

function getNiveauBatterie() {
    var batterie = $("#niveauBatterie");
    window.plugins.battery.getLevel(function(level) {
        batterie.attr("data-text", level.batteryPercent+"%");
        batterie.attr("data-part", level.batteryPercent);
        batterie.attr("data-percent", level.batteryPercent);
        batterie.circliful();
        console.log('Niveau de batterie: ' + level.batteryPercent + ' %.');
    });
}

function test_connexion() {
    var networkState = navigator.connection.type;
    var reseau = $("#reseau");

    var states = {};
    states[Connection.UNKNOWN] = 'Connexion Inconnue';
    states[Connection.ETHERNET] = 'Connecté en Ethernet';
    states[Connection.WIFI] = 'Connecté en WiFi';
    states[Connection.CELL_2G] = 'Connecté au réseau 2G';
    states[Connection.CELL_3G] = 'Connecté au réseau 3G';
    states[Connection.CELL_4G] = 'Connecté au réseau 4G';
    states[Connection.CELL] = 'Connecté au réseau cellulaire générique';
    states[Connection.NONE] = 'Pas de connexion';

    switch(states[networkState]){
      case "Connexion Inconnue":
        reseau.html("<b>Réseau</b><br/><hr><br/><i class='fa fa-wifi'></i><span id='alignement'> Wi-Fi: OFF</span><br/><br/><i class='fa fa-globe'></i><span id='alignement'> Données mobiles: OFF</span><br/><br/><b> Batterie </b><hr><br/>");
        break;
      case "Connecté en Ethernet":
        reseau.html("<b>Réseau</b><br/><hr><br/><i class='fa fa-wifi'></i><span id='alignement'> Wi-Fi: OFF</span><br/><br/><i class='fa fa-globe'></i><span id='alignement'> Données mobiles: OFF</span><br/><br/><b> Batterie </b><hr><br/>");
        break;
      case "Connecté en WiFi":
        reseau.html("<b>Réseau</b><br/><hr><br/><i class='fa fa-wifi'></i><span id='alignement'> Wi-Fi: ON</span><br/><br/><i class='fa fa-globe'></i><span id='alignement'> Données mobiles: OFF</span><br/><br/><b> Batterie </b><hr><br/>");
        break;
      case "Connecté au réseau 2G":
        reseau.html("<b>Réseau</b><br/><hr><br/><br/><i class='fa fa-wifi'></i><span id='alignement'> Wi-Fi: OFF</span></span><br/><br/><i class='fa fa-globe'></i><span id='alignement'> Données mobiles: ON</span><br/><span style='margin-left: 48px; color:black;font-size: 14px;'>Type de réseau: 2G</span><br/><br/><b> Batterie </b><hr><br/>");
        break;
      case "Connecté au réseau 3G":
        reseau.html("<b>Réseau</b><br/><hr><br/><i class='fa fa-wifi'></i><span id='alignement'> Wi-Fi: OFF</span><br/><br/><i class='fa fa-globe'></i><span id='alignement'> Données mobiles: ON</span><br/><span style='margin-left: 48px; color:black;font-size: 14px;'>Type de réseau: 3G</span><br/><br/><b> Batterie </b><hr><br/>");
        break;
      case "Connecté au réseau 4G":
        reseau.html("<b>Réseau</b><br/><hr><br/><i class='fa fa-wifi'></i><span id='alignement'> Wi-Fi: OFF</span><br/><br/><i class='fa fa-globe'></i> <span id='alignement'>Données mobiles: ON</span><br/><span style='margin-left: 48px; color:black;font-size: 14px;'>Type de réseau: 4G</span><br/><br/><b> Batterie </b><hr><br/>");
        break;
      case "Connecté au réseau cellulaire générique":
        reseau.html("<b>Réseau</b><br/><hr><br/><i class='fa fa-wifi'></i><span id='alignement'> Wi-Fi: OFF</span><br/><br/><i class='fa fa-globe'></i><span id='alignement'> Données mobiles: ON</span><br/><span style='margin-left: 48px; color:black;font-size: 14px;'>Type de réseau: LTE</span><br/><br/><b> Batterie </b><hr><br/>");
        break;
      case "Pas de connexion":
        reseau.html("<b>Réseau</b><br/><hr><br/><i class='fa fa-wifi'></i><span id='alignement'> Wi-Fi: OFF</span><br/><br/><i class='fa fa-globe'></i><span id='alignement'> Données mobiles: OFF</span><br/><br/><b> Batterie </b><hr><br/>");
        break;
    }
    console.log(states[networkState]);
}

function getInformations() {

    var version_cordova = device.cordova;
    var telephone_modele = device.model;
    var telephone_os = device.platform;
    var uuid_tel = device.uuid;
    var os_version = device.version;
    var infos = $("#device");
    $("#contenu").hide();

    switch(telephone_os){
      case "Android":
          infos.html("<b>Appareil</b><br/><hr><br/><i class='fa fa-android'></i> <span id='alignement'> Version Android: "+os_version+"</span><br/><br/><i class='fa fa-mobile'></i><span id='alignement'> Téléphone: "+telephone_modele+"</span><br/><br/><i class='fa fa-barcode'></i><span id='alignement'> UUID: "+uuid_tel+"</span><br/>");
          break;
      case "iOS":
          infos.html("<b>Appareil</b><br/><hr><br/><i class='fa fa-apple'></i>  <span id='alignement'>Version iOS: "+os_version+"</span><br/><br/><i class='fa fa-mobile'></i><span id='alignement'> Téléphone: "+telephone_modele+"</span><br/><br/><i class='fa fa-barcode'></i><span id='alignement'> UUID: "+uuid_tel+"</span><br/>");
          break;
      case "WinCE": // Windows 7
      case "Win32NT": //Windows 8
          infos.html("<b>Appareil</b><br/><hr><br/><i class='fa fa-windows'></i>  <span id='alignement'>Version Windows Phone: "+os_version+"</span><br/><br/><i class='fa fa-mobile'></i><span id='alignement'> Téléphone: "+telephone_modele+"</span><br/><br/><i class='fa fa-barcode'></i><span id='alignement'> UUID: "+uuid_tel+"</span><br/>");
          break;
      default:
          infos.html("<b>Appareil</b><br/><hr><br/> <span id='alignement'>Version "+telephone_os+": "+os_version+"<br/><br/><i class='fa fa-mobile'></i><span id='alignement'> Téléphone: "+telephone_modele+"</span><br/><br/><i class='fa fa-barcode'></i><span id='alignement'> UUID: "+uuid_tel+"</span><br/>");
          break;
    }

    console.log("Version de Cordova: " + version_cordova +
        "\nTéléphone: " + telephone_modele + "\nOS: " + telephone_os + " " + os_version + "\nUUID: " + uuid_tel);

}

function localisation() {

    var localisation_ok = function(position) {
        alert('Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude + '\n' +
            'Altitude: ' + position.coords.altitude + '\n' +
            'Accuracy: ' + position.coords.accuracy + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
            'Heading: ' + position.coords.heading + '\n' +
            'Speed: ' + position.coords.speed + '\n' +
            'Timestamp: ' + position.timestamp + '\n');
    };

    navigator.geolocation.getCurrentPosition(localisation_ok, localisation_echec, { enableHighAccuracy:true,maximumAge: Infinity, timeout:60000 });

}

function localisation_echec(error) {
    alert('Code: ' + error.code + '\n' +
        'Message: ' + error.message + '\n');
}
function charger_maps() {
  var gmaps = document.getElementById("gmaps");
  var div = document.getElementById("map_canvas");
  var bouton = document.getElementById("cherche");
  // Initialize the map view
  map = plugin.google.maps.Map.getMap(div);
  // Wait until the map is ready status.
  map.addEventListener(plugin.google.maps.event.MAP_READY,  onMapReady);
  bouton.style.display = "block";
  gmaps.style.display = "block";
}

function map_position(){
  var onMapSuccess = function(location) {
    const ma_position = new plugin.google.maps.LatLng(location.latLng.lat,location.latLng.lng);
    var msg = ["Votre position:\n",
      "Latitude:" + location.latLng.lat,
      "Longitude:" + location.latLng.lng,
      "Speed:" + location.speed,
      "Time:" + location.time,
      "Bearing:" + location.bearing].join("\n");
  
    map.addMarker({
      'position': location.latLng,
      'title': msg
    }, function(marker) {
      marker.showInfoWindow();
    });

    map.animateCamera({
    'target': ma_position,
    'tilt': 60,
    'zoom': 18,
    'bearing': 140
    });
  };
  
  var onMapError = function(msg) {
    alert("Erreur: " + msg);
  };

  map.getMyLocation(onMapSuccess, onMapError);
}

function onMapReady() {
    var button = document.getElementById("button");
    button.addEventListener("click", onBtnClicked, false);
    map_position();
}
  function onBtnClicked() {
    map.showDialog();
}

// DEBUT FONCTIONS ACCELEROMETRE

var canvas_ctx;                 // Contexte du canvas HTML
var VITESSE = 2;                 // Frequence de maj des données x,y,z et donc de la vitesse du cercle (fluidité).
var FACTEUR_DISTANCE = .1;       // Facteur pour ajuster la valeur de l'accelerometre à la distance de l'ecran.
var ax = 0;                     // Axe d'Acceleration X 
var ay = 0;                     // Axe d'Acceleration Y 
var x;                          // Coordonnees X du cercle
var y;                          // Coordonnes Y du cercle
var vx = 0;                     // Axe de velocité X
var vy = 0;                     // Axe de velocité Y
var LARGEUR = 320;                // Largeur du canvas
var HAUTEUR = 300;               // Hauteur du canvas
var PERIMETRE = 30;                // Perimetre du cercle
var COULEUR_CERCLE = "#452345";      // Couleur du cercle
var COULEUR_CANVAS = "#FAF7F8";   // Couleur du

// Initialise les parametres et début de la capture de l'accelerometre
function start_accel() {
  var canvas = document.getElementById("canvas");
  canvas_ctx = canvas.getContext("2d");
  // Centre
  x = LARGEUR / 2 ;
  y = HAUTEUR/ 2 ;
  var options = { frequency: VITESSE };
  document.getElementById('start').disabled = true;
  document.getElementById('stop').disabled = false;
  watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
  return watchID;
}

// Vidage des parametres et fin de capture
function stop_accel(watchID) {
  var emptyText = "";
  if(watchID !== null){
    navigator.accelerometer.clearWatch(watchID);
    watchID = null;
    spanX.textContent = emptyText;
    spanY.textContent = emptyText;
    spanZ.textContent = emptyText;
    spanTimeStamp.textContent = emptyText;

    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
  }
}

// Initialisation des parametres et début d'animation du cercle
function startPlay()
{
    vx = 0;
    vy = 0;
    drawID = setInterval(draw, VITESSE);
    return drawID;
}
// Fin d'animation du cercle et vidage du canvas
function stopPlay(drawID)
{
    clearInterval(drawID);
}

// Si la capture de l'accelerometre est OK on affiche les données à l'écran
function onSuccess(acceleration) {
  spanX = document.getElementById("spanDirectionX");
  spanY = document.getElementById("spanDirectionY");
  spanZ = document.getElementById("spanDirectionZ");
  spanTimeStamp = document.getElementById("spanTimeStamp");

  // données d'accélération pour l'animation
  ax = acceleration.x * FACTEUR_DISTANCE * -1;
  ay = acceleration.y * FACTEUR_DISTANCE ;

  spanX.textContent = acceleration.x;
  spanY.textContent = acceleration.y;
  spanZ.textContent = acceleration.z;
  spanTimeStamp.textContent = acceleration.timestamp;
}  

function onError(error) {
    alert('Erreur Code: '+error);
}

/* Dessin du cercle */  
function circle( x, y, r )
{
    canvas_ctx.beginPath();
    canvas_ctx.arc(x, y, r, 0, Math.PI*2, true);
    canvas_ctx.fill();
}

function rect( x, y, w, h )
{
    canvas_ctx.beginPath();
    canvas_ctx.rect(x,y,w,h);
    canvas_ctx.closePath();
    canvas_ctx.fill();
}

/* Vidage du canvas */
function clear()
{
    canvas_ctx.clearRect(0, 0, LARGEUR, HAUTEUR);
}

 /* Animation du cercle à l'aide de la maj des coordonnes de l'accelerometre */  
function draw()
{
    // 
    vx += ax;
    vy += ay;
    // Maj des positions du cercles.
    x += vx;
    y += vy;
    /* Tests pour éviter que le cercle sorte du canvas */
    // Bordure droite
    if ( x + PERIMETRE > LARGEUR  )
    {
        x = LARGEUR - PERIMETRE ;
        vx = 0;
    }
    // Bordure gauche
    if (x - PERIMETRE  <= 0)
    {
        x = PERIMETRE   ;
        vx = 0;
    }
    // Bordure bot
    if (y +  PERIMETRE  > HAUTEUR)
    {
        y = HAUTEUR - PERIMETRE ;
        vy = 0;
    }
    // Bordure top
    if (y - PERIMETRE  <= 0)
    {
        y = PERIMETRE  ;
        vy = 0;
    } 
     

    clear();
    canvas_ctx.fillStyle = COULEUR_CANVAS;
    rect( 0, 0, LARGEUR, HAUTEUR );

    canvas_ctx.fillStyle = COULEUR_CERCLE;
    circle( x, y, PERIMETRE );
}

// FIN FONCTIONS ACCELEROMETRE

function hey() {
  var media = new Media("/android_asset/www/son/hey.wav");
  media.play();
}

function listen() {
  var media = new Media("/android_asset/www/son/listen.wav");
  media.play();
}

function envoiesms() {
  var numero = document.getElementById('saisie_numero').value;
  var message = document.getElementById('saisie_msg').value;
  //CONFIGURATION
  var options = {
      replaceLineBreaks: true, // true pour remplacer les \n par un retour chariot, false par défaut
      android: {
          //intent: 'INTENT'  // envoyer les SMS par l'app native (le champs de saisie est préremplie dans l'app
          // d'envoyer ensuite)
          intent: '' // envoyer le sms sans ouvrir d'app
      }
  };

  var success = function () { window.plugins.toast.showShortBottom('Message envoyé !'); };
  var error = function (e) { window.plugins.toast.showShortBottom('Erreur message non envoyé: ' + e); };
  if(message != '' && numero != ''){
    sms.send(numero, message, options, success, error); 
  }
  else{
    window.plugins.toast.showShortBottom("Saisisser un message et un numero SVP.")
  }
}

function envoiemail(){

  var destinataire = document.getElementById('saisie_destinataire').value.split(" ");
  var cc = document.getElementById('saisie_cc').value.split(" ");
  var bcc = document.getElementById('saisie_bcc').value.split(" ");
  var objet = document.getElementById('saisie_objet').value;
  var msg = document.getElementById('saisie_msg').value;

  /*alert('Dest: ' + destinataire + '\n' +
        'CC: ' + cc + '\n' +
        'BCC: ' + bcc + '\n' +
        'Objet: ' + objet + '\n' +
        'Msg: ' + msg + '\n');*/

  // ouvre la séléction des apps de mail (Gmail, Email, ...) pour remplir une page d'envoie
  // de mail préremplie avec les données saisies 
  if(msg != ''){
    cordova.plugins.email.open({
      to:  destinataire,
      cc:  cc,
      bcc: bcc,
      subject: objet,
      body: msg    
    }); 
  }
  else{
    window.plugins.toast.showShortBottom("Saisisser un message SVP.")
  }
}

// CAMERA
 
function prendrePhoto(){
  navigator.camera.getPicture(capture_reussi, capture_erreur, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
  });
}

function capture_reussi(imageData) {
    var image = document.getElementById('monImage');
    image.src = "data:image/jpeg;base64," + imageData;
    image.display = "block";
}

function capture_erreur(message) {
    window.plugins.toast.showShortBottom('Echec: ' + message);
}

function headingToText(h) {
  var t;
  if (typeof h !== "number") {
    t = '';
  } 
  else if (h >= 337.5 || (h >= 0 && h <= 22.5)) {
    t = 'N';
  } 
  else if (h >= 22.5 && h <= 67.5) {
    t = 'NE';
  } 
  else if (h >= 67.5 && h <= 112.5) {
    t = 'E';
  } 
  else if (h >= 112.5 && h <= 157.5) {
    t = 'SE';
  } 
  else if (h >= 157.5 && h <= 202.5) {
    t = 'S';
  } 
  else if (h >= 202.5 && h <= 247.5) {
    t = 'SO';
  } 
  else if (h >= 247.5 && h <= 292.5) {
    t = 'O';
  } 
  else if (h >= 292.5 && h <= 337.5) {
    t = 'NO';
  } 
  else {
    t = t;
  }
return t;
}

function charger_boussole() {
     var view = $("#compass .container")
     var lastHeading = -1;

  function success(heading) {
      var needle = $("#compass .needle");
      var info = $("#compass .heading");
      if (lastHeading === heading.trueHeading) return;
      lastHeading = heading.trueHeading;
      needle.css({
      "-webkit-transform": "rotate(+" + heading.trueHeading + "deg)",
      "transform": "rotate(+" + heading.trueHeading + "deg)"
    });
     info.html(Math.round(heading.trueHeading) + "&#xb0; (" + headingToText(heading.trueHeading) + ")");
  }

  function fail() {
    view.html("Error!");
  }
  document.getElementById('start').disabled = true;
  document.getElementById('stop').disabled = false;
  navigator.compass.getCurrentHeading(success, fail);
  watchID = navigator.compass.watchHeading(success, fail, {frequency: 100});
  return watchID;
}

function stop_boussole(watchID) {
  if(watchID !== null){
    navigator.compass.clearWatch(watchID);
    watchID = null;
    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
  }
}