// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from "firebase";

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDKYHXuV76Q-KnukDbq3mzyE2Qz_mXIFi0",
    authDomain: "mystore-77261.firebaseapp.com",
    databaseURL: "https://mystore-77261-default-rtdb.firebaseio.com",
    projectId: "mystore-77261",
    storageBucket: "mystore-77261.appspot.com",  ////code de la laison entre notre projet et firease
    messagingSenderId: "441698602112",
    appId: "1:441698602112:web:9414536e1df7e9f1d36a65",
    measurementId: "G-02PL4Z32P1"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
