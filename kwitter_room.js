
//AÑADE TUS ENLACES DE FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyB5_gUpJ-pi0LELzANX93HPwt_I8tHg9BU", 
      authDomain: "kwitterc93-f2b7d.firebaseapp.com", 
      databaseURL:"https://kwitterc93-f2b7d-default-rtdb.firebaseio.com",
      projectId: "kwitterc93-f2b7d", 
      storageBucket: "kwitterc93-f2b7d.appspot.com", 
      messagingSenderId: "956589542903", 
      appId: "1:9565895429"
    };
    
    // Initialize Firebase
   // const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML = "¡Hola, Bienvenid@ " + user_name + "!";

function addRoom () {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "añadir sala"
      });

      localStorage.setItem("room_name", room_name);
      window.location.replace("kwitter_page.html");
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {

            }
      })
})
}

