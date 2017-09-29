const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyCyZ3Qzyqc-oioBMPuR-HWHUT9ppRFXFng",
  authDomain: "fleet-blend-153207.firebaseapp.com",
  databaseURL: "https://fleet-blend-153207.firebaseio.com",
  projectId: "fleet-blend-153207",
  storageBucket: "fleet-blend-153207.appspot.com",
  messagingSenderId: "963742612686"
};
firebase.initializeApp(config)

export default firebase;