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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}