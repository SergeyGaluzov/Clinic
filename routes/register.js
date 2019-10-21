/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();

const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyD9QE3H5N9phGGcd710ea7M_bYzRkzgt34",
  authDomain: "kpi-clinic-lab.firebaseapp.com",
  databaseURL: "https://kpi-clinic-lab.firebaseio.com",
  projectId: "kpi-clinic-lab",
  storageBucket: "kpi-clinic-lab.appspot.com",
  messagingSenderId: "750767821804",
  appId: "1:750767821804:web:564ad453ef128cfe6da6c9"
};
const firebase_init = firebase.initializeApp(firebaseConfig);

router.get('/', function(req, res, next) {
  res.sendFile(__dirname.replace("routes", "") + "kpi_lab/registration.html");
});

router.post('/', function(req, res){
  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email
  const password = req.body.password;
  
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(error=>{
    var errorCode = error.code;
    var errorMessage = error.message;
  });

  const user = firebase.auth().currentUser;
  const ref = firebase.database().ref("users/" + user.uid).set({
    name: name,
    surname: surname,
    email: email,
    password: password,
  });
})

module.exports = router;
