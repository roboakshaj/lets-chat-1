 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDtKqW6gcwW8OLj00u65kEwudHg17aUEXk",
      authDomain: "kwitter-375e0.firebaseapp.com",
      databaseURL: "https://kwitter-375e0-default-rtdb.firebaseio.com",
      projectId: "kwitter-375e0",
      storageBucket: "kwitter-375e0.appspot.com",
      messagingSenderId: "294030547597",
      appId: "1:294030547597:web:c350c483483a0a86f620c4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
