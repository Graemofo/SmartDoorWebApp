
//import firebase from "firebase";

            // Initialize Firebase
            // var config = {
            //   apiKey: "AIzaSyCOAsUtv0LWbKAtB3EiOQuIkWOr-MhPkGE",
            //   authDomain: "smartdoormobileapp.firebaseapp.com",
            //   databaseURL: "https://smartdoormobileapp.firebaseio.com",
            //   projectId: "smartdoormobileapp",
            //   storageBucket: "smartdoormobileapp.appspot.com",
            //   messagingSenderId: "186419306764"
            // };
            // firebase.initializeApp(config);




             var firebase = require("firebase");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.alert("User Is Signed In To Firebase");
  } else {
    // No user is signed in.
    window.alert("Error Signing In. Please Try Again");
  }
});




function popup(){
	var userEmail = document.getElementById("inputEmail").value;
	var userPass = document.getElementById("inputPassword").value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  window.alert("Error: "+errorCode+ " -- "+errorMessage);
  // ...
});
		//if successful
   window.alert("Hello " + userEmail +" ,"+ userPass);
	console.log("All is well");
	

}

function logout(){

	firebase.auth().signOut();
		  // Sign-out successful.
		  window.alert("You have succesfully logged out !!");


}

function register(){
	var userEmail = document.getElementById("inputEmail_register").value;
	var userPass = document.getElementById("inputPassword_register").value;
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Could not create account");
  // ...
});

}