package com.blueshift.cordova.battery;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.app.Activity;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.BatteryManager;
import android.util.Log;

public class BatteryPlugin extends CordovaPlugin {
    private static final String TAG = "BatteryPlugin";
    private static final String ACTION_GET_LEVEL = "getLevel";

    public boolean execute(String action, JSONArray data, CallbackContext callback){
        Boolean result = false;
        Activity activity = this.cordova.getActivity();
        
        Intent batteryStatus = activity.registerReceiver(null, new IntentFilter(Intent.ACTION_BATTERY_CHANGED));
        
        if(ACTION_GET_LEVEL.equalsIgnoreCase(action)) {
            int level = batteryStatus.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
            int scale = batteryStatus.getIntExtra(BatteryManager.EXTRA_SCALE, -1);
            float batteryPct = (level / (float)scale) * 100;

            Log.i(TAG, "Battery Level Requested " + batteryPct);
            result = true;
            
            JSONObject ret = new JSONObject();
            try{
            	ret.put("batteryPercent", batteryPct);
            	callback.success(ret);
            } catch(JSONException e) {
            	callback.error("EXCEPTION");
            }
           
        } else {
            callback.error("Not a valid battery action");
        }

        return result;
    }
}