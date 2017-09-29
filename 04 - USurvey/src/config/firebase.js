const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyADvdZuqX_j-lwYr-4jPAzqVl7t99gkZ50",
  authDomain: "model-zoo-153413.firebaseapp.com",
  databaseURL: "https://model-zoo-153413.firebaseio.com",
  projectId: "model-zoo-153413",
  storageBucket: "model-zoo-153413.appspot.com",
  messagingSenderId: "130818100801"
};
firebase.initializeApp(config);

export default firebase;