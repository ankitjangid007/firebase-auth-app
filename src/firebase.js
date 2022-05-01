import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBTDAbjfssq9PH69OMHksUQ5c5nQ9I3shY",
    authDomain: "fir-auth-831f8.firebaseapp.com",
    projectId: "fir-auth-831f8",
    storageBucket: "fir-auth-831f8.appspot.com",
    messagingSenderId: "941520808697",
    appId: "1:941520808697:web:b7bc5dd4e0d15e45441028",
    measurementId: "G-YZZSERJ9HZ"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export { auth } 