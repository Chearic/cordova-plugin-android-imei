# cordova-plugin-android-imei

Cordova plugin for retrieving IMEI of the device.

    cordova plugin add https://github.com/Chearic/cordova-plugin-android-imei.git

## Usage

The plugin uses the [getImei](https://developer.android.com/reference/android/telephony/TelephonyManager.html#getImei(int)) method of the *TelephonyManager* instance to retrieve the IMEI.

```javascript
cordova.plugins.IMEI(function (err, imei) {
  let i = 0;
  while (imei[i]) {
    console.log(imei[i]);
    i++;
  }
});
```
