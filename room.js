
var firebaseConfig = {
      apiKey: "AIzaSyAE6hC8kLwlRSP75qm_h0DPf796sCe-52g",
      authDomain: "kwitter-5a2f4.firebaseapp.com",
      databaseURL: "https://kwitter-5a2f4-default-rtdb.firebaseio.com",
      projectId: "kwitter-5a2f4",
      storageBucket: "kwitter-5a2f4.appspot.com",
      messagingSenderId: "929985328840",
      appId: "1:929985328840:web:5286b2344c213ead84d7fd"
    };
    
    
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
console.log("Room Name - " + Room_names);
row= "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      
      });});}
getData();
function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : " adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "message.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = " message.html";
}


