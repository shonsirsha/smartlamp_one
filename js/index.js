var firebaseConfig = {
  apiKey: "AIzaSyBfmM1WC6MhUBTaP4u4I7sADLifpIwrpeo",
  authDomain: "nodemcu-led-sean.firebaseapp.com",
  databaseURL: "https://nodemcu-led-sean.firebaseio.com",
  projectId: "nodemcu-led-sean",
  storageBucket: "nodemcu-led-sean.appspot.com",
  messagingSenderId: "254600322423",
  appId: "1:254600322423:web:34b28e64fa20b91be49572",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var statusLampFromDb = firebase.database().ref("number");

function turnOn() {
  database.ref("number").set(1);
}

function turnOff() {
  database.ref("number").set(0);
}

function check() {
  statusLampFromDb.on("value", function (snapshot) {
    if (snapshot.val() == "0") {
      document.getElementById("demo").innerHTML = "Lampu Mati";
    }

    if (snapshot.val() == "1") {
      status.innerHTML = "Lampu menyala";
      document.getElementById("demo").innerHTML = "Lampu Nyala";
    }
  });
}
