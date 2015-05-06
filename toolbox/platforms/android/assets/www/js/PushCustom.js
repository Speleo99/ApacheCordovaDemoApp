/*var pushNotification;

function onDeviceReady() {
        document.addEventListener("menubutton", function(e) {}, false);
        try {
            pushNotification = window.plugins.pushNotification;
            if (device.platform == 'android' || device.platform == 'Android' || device.platform ==
                'amazon-fireos') {
                pushNotification.register(successHandler, errorHandler, {
                    "senderID": "1024084662445",
                    "ecb": "onNotification"
                }); // required!
            } else {
                pushNotification.register(tokenHandler, errorHandler, {
                    "badge": "true",
                    "sound": "true",
                    "alert": "true",
                    "ecb": "onNotificationAPN"
                }); // required!
            }
        } catch (err) {
            txt = "There was an error on this page.\n\n";
            txt += "Error description: " + err.message + "\n\n";
            alert(txt);
        }
    }
    // handle APNS notifications for iOS
 
function onNotificationAPN(e) {
        if (e.alert) {
            // showing an alert also requires the org.apache.cordova.dialogs plugin
            navigator.notification.alert(e.alert);
        }
        if (e.sound) {
            // playing a sound also requires the org.apache.cordova.media plugin
            var snd = new Media(e.sound);
            snd.play();
        }
        if (e.badge) {
            pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
        }
    }
    // handle GCM notifications for Android
 
function onNotification(e) {
    switch (e.event) {
        case 'registered':
            if (e.regid.length > 0) {
                // Your GCM push server needs to know the regID before it can push to this device
                // here is where you might want to send it the regID for later use.
                console.log(e.regid);

                // Pour avoir le regid et envoyer les push grâce au server.
                //string=e.regid.toLowerCase();
                //alert("regID = " + string);
            }
            break;
        case 'message':
            // if this flag is set, this notification happened while we were in the foreground.
            // you might want to play a sound to get the user's attention, throw up a dialog, etc.
            if (e.foreground) {
                // on Android soundname is outside the payload.
                // On Amazon FireOS all custom attributes are contained within payload
                var soundfile = e.soundname || e.payload.sound;
                // if the notification contains a soundname, play it.
                // playing a sound also requires the org.apache.cordova.media plugin
                var my_media = new Media("/android_asset/www/" + soundfile);
                my_media.play();
            }
            break;
        case 'error':
            break;
        default:
            break;
    }
}
 
function tokenHandler(result) {
    alert('device token = ' + result);
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.
}
 
function successHandler(result) {}
 
function errorHandler(error) {}*/

function onDeviceReady()
{
    var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");
 
    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
        var userData = event.notification.userdata;
                                 
        if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }
                                     
        alert(title);
    });
 
    //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_NUMBER", pw_appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
    pushNotification.onDeviceReady({ projectid: "1024084662445", pw_appid : "90D81-E808B" });
 
    //register for pushes
    pushNotification.registerDevice(
        function(status) {
            var pushToken = status;
            console.warn('push token: ' + pushToken);
        },
        function(status) {
            console.warn(JSON.stringify(['failed to register ', status]));
        }
    );
}

document.addEventListener('deviceready', onDeviceReady, true);