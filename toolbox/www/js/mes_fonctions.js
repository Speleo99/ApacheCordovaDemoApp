/* Les appels aux plugins se font dans ce script Javascript

Tous les plugins sont disponibles ici :
--> http://plugins.cordova.io/#/

Voici la liste des plugins utilisés dans l'application :

 /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
| com.blueshift.cordova.battery 0.3.7 "CordovaBattery"                |
| com.cordova.plugins.sms 0.1.2 "Cordova SMS Plugin"                  |
| com.google.playservices 23.0.0 "Google Play Services for Android"   |
| com.phonegap.plugins.PushPlugin 2.4.0 "PushPlugin"                  |               
| com.pushwoosh.plugins.pushwoosh 3.5.1 "Pushwoosh"                   |
| de.appplant.cordova.plugin.email-composer 0.8.2 "EmailComposer"     |
| nl.x-services.plugins.toast 2.0.4 "Toast"                           |
| org.apache.cordova.battery-status 0.2.12 "Battery"                  |
| org.apache.cordova.camera 0.3.6 "Camera"                            |
| org.apache.cordova.device 0.3.0 "Device"                            |
| org.apache.cordova.device-motion 0.2.11 "Device Motion"             |
| org.apache.cordova.device-orientation 0.3.11 "Device Orientation"   |
| org.apache.cordova.dialogs 0.3.0 "Notification"                     |
| org.apache.cordova.file 1.3.3 "File"                                |
| org.apache.cordova.geolocation 0.3.12 "Geolocation"                 |
| org.apache.cordova.media 0.2.16 "Media"                             |
| org.apache.cordova.network-information 0.2.15 "Network Information" |
| org.apache.cordova.vibration 0.3.13 "Vibration"                     |
| plugin.google.maps 1.2.5 "phonegap-googlemaps-plugin"               |
| plugin.http.request 1.0.4 "phonegap-http-request"                   |
\*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

document.addEventListener('backbutton', backPressed, false);
// Un appuie physique sur le bouton back du tél ramène à la page précédente.
function backPressed(){
        window.history.back();
}

/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Battery-Status //////////////////////////////////
///////////////// Plus d'infos sur les fonctions dans le readme Git ///////////////
///////////// https://github.com/apache/cordova-plugin-battery-status ////////////
/////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// Connection ///////////////////////////////////////////////
/////////////////////// Plus d'infos sur les fonctions dans la doc cordova /////////////////////
///////// https://cordova.apache.org/docs/en/3.0.0/cordova_connection_connection.md.html //////
//////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// Device /////////////////////////////////////////////////
/////////////////////// Plus d'infos sur les fonctions dans la doc cordova /////////////////////
///////////// https://cordova.apache.org/docs/en/3.0.0/cordova_device_device.md.html //////////
//////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// Geolocalisation ////////////////////////////////////////////
/////////////////////// Plus d'infos sur les fonctions dans la doc cordova /////////////////////
//////// https://cordova.apache.org/docs/en/3.0.0/cordova_geolocation_geolocation.md.html /////
//////////////////////////// et Google Maps Plugin pour Cordova //////////////////////////////
////////////////// https://github.com/wf9a5m75/phonegap-googlemaps-plugin ///////////////////
////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// Accelerometre //////////////////////////////////////////////
/////////////////////// Plus d'infos sur les fonctions dans la doc cordova /////////////////////
///// https://cordova.apache.org/docs/en/3.0.0/cordova_accelerometer_accelerometer.md.html ////
//////////////////////////////////////////////////////////////////////////////////////////////

var canvas_ctx;                   // Contexte du canvas HTML
var VITESSE = 5;                  // Frequence de maj des données x,y,z et donc de la vitesse du cercle (fluidité).
var FACTEUR_DISTANCE = .1;        // Facteur pour ajuster la valeur de l'accelerometre à la distance de l'ecran.
var ax = 0;                       // Axe d'Acceleration X 
var ay = 0;                       // Axe d'Acceleration Y 
var x;                            // Coordonnees X du cercle
var y;                            // Coordonnes Y du cercle
var vx = 0;                       // Axe de velocité X
var vy = 0;                       // Axe de velocité Y
var LARGEUR = 320;                // Largeur du canvas
var HAUTEUR = 300;                // Hauteur du canvas
var PERIMETRE = 30;               // Perimetre du cercle
var COULEUR_CERCLE = "#452345";   // Couleur du cercle
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

/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Media ///////////////////////////////////////////
///////////////// Plus d'infos sur les fonctions dans la doc cordova //////////////
/////////////// https://www.npmjs.com/package/cordova-plugin-media ///////////////
/////////////////////////////////////////////////////////////////////////////////

function hey() {
  var media = new Media("/android_asset/www/son/hey.wav");
  media.play();
}

function listen() {
  var media = new Media("/android_asset/www/son/listen.wav");
  media.play();
}

/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// SMS /////////////////////////////////////////////
///////////////// Plus d'infos sur les fonctions dans le readme Git ///////////////
/////////// http://plugins.cordova.io/#/package/com.cordova.plugins.sms //////////
/////////////////////////////////////////////////////////////////////////////////

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



/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Email ///////////////////////////////////////////
///////////////// Plus d'infos sur les fonctions dans le readme Git ///////////////
/////////// https://github.com/katzer/cordova-plugin-email-composer //////////////
/////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Camera //////////////////////////////////////////
///////////////// Plus d'infos sur les fonctions dans la doc cordova //////////////
///// https://cordova.apache.org/docs/en/3.0.0/cordova_camera_camera.md.html /////
/////////////////////////////////////////////////////////////////////////////////
 
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

/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Boussole ////////////////////////////////////////
///////////////// Plus d'infos sur les fonctions dans la doc cordova //////////////
//// https://cordova.apache.org/docs/en/3.0.0/cordova_compass_compass.md.html ////
/////////////////////////////////////////////////////////////////////////////////

// Ajoute la direction où pointe le téléphone à la valeur en degrés.
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
      // true.heading se base sur le pôle nord contrairement au magnetic.heading qui utilise le nord magnétique
      if (lastHeading === heading.trueHeading) return;
      lastHeading = heading.trueHeading;
      needle.css({
      "-webkit-transform": "rotate(+" + heading.trueHeading + "deg)",
      "transform": "rotate(+" + heading.trueHeading + "deg)"
    });
      // on tourne l'aiguille grâce à la rotation en degrés que donne true.heading
     info.html(Math.round(heading.trueHeading) + "&#xb0; (" + headingToText(heading.trueHeading) + ")");
  }

  function fail() {
    view.html("Erreur lors du chargement de la boussole!");
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

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// Gestionnaire de fichiers ////////////////////////////
///////////////// Plus d'infos sur les fonctions dans la doc cordova /////////////
////// https://cordova.apache.org/docs/en/3.0.0/cordova_file_file.md.html ///////
////////////////////////////////////////////////////////////////////////////////

var fileSystem;

//simple getter par id
function getById(id) {
        return document.querySelector(id);
    }
//log des actions
function logit(s) {
    getById("#reponse").innerHTML = s;
}

//logs des erreurs
function onFSError(e) {
    getById("#reponse").innerHTML = "<h2>Erreur</h2>" + e.toString();
}

function doDeleteFile(e) {
    fileSystem.root.getFile("test.txt", {
        create: true
    }, function(f) {
        f.remove(function() {
            logit("Fichier supprimé <p/>");
        });
    }, onFSError);
}

function metadataFile(m) {
    logit("Dernière modification du fichier: " + m.modificationTime + "<p/>");
}

function doMetadataFile(e) {
    fileSystem.root.getFile("test.txt", {
        create: true
    }, function(f) {
        f.getMetadata(metadataFile, onFSError);
    }, onFSError);
}

function readFile(f) {
    reader = new FileReader();
    reader.onloadend = function(e) {
        console.log("Lecture OK");
        logit(e.target.result + "<p/>");
    };
    reader.readAsText(f);
}

function doReadFile(e) {
    fileSystem.root.getFile("test.txt", {
        create: true
    }, readFile, onFSError);
}

function appendFile(f) {

    f.createWriter(function(writerOb) {
        writerOb.onwrite = function() {
                logit("Fichier créé avec succès.<p/>");
            }
            //go to the end of the file...
        writerOb.seek(writerOb.length);
        writerOb.write("J'ai été créé le " + new Date().toString() + "\n");
    });

}

function doAppendFile(e) {
    fileSystem.root.getFile("test.txt", {
        create: true
    }, appendFile, onFSError);
}

function gotFiles(entries) {
    var s = "";
    for (var i = 0, len = entries.length; i < len; i++) {
        //entry objects include: isFile, isDirectory, name, fullPath
        s += entries[i].fullPath;
        if (entries[i].isFile) {
            s += " [F]";
        } else {
            s += " [D]";
        }
        s += "<br/>";

    }
    s += "<p/>";
    logit(s);
}

function doDirectoryListing(e) {
    //get a directory reader from our FS
    var dirReader = fileSystem.root.createReader();

    dirReader.readEntries(gotFiles, onFSError);
}

function onFSSuccess(fs) {
    fileSystem = fs;

    getById("#dirListingButton").addEventListener("touchstart", doDirectoryListing);
    getById("#addFileButton").addEventListener("touchstart", doAppendFile);
    getById("#readFileButton").addEventListener("touchstart", doReadFile);
    getById("#metadataFileButton").addEventListener("touchstart", doMetadataFile);
    getById("#deleteFileButton").addEventListener("touchstart", doDeleteFile);

    logit("Nom du système de fichier: " + fileSystem.name + "<br/>" +
        "Contenu du dossier root:" + fileSystem.root.name + "<p/>");

    doDirectoryListing();
}

function charger_file_api() {
    $("#contenu").show();
    $("#bouton_fichier").hide();
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFSSuccess, onFSError);
}