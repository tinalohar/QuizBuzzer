import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC8tbKb2bLSJyYVdNYu8s2YFhXFWVpQUsc",
    authDomain: "wireless-buzzer-app-a115d.firebaseapp.com",
    databaseURL: "https://wireless-buzzer-app-a115d.firebaseio.com",
    projectId: "wireless-buzzer-app-a115d",
    storageBucket: "wireless-buzzer-app-a115d.appspot.com",
    messagingSenderId: "493651608876",
    appId: "1:493651608876:web:33d8993e62ccd96ba6d889",
    measurementId: "G-G7CTPPKKWV"
  };


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()