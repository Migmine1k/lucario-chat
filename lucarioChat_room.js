const firebaseConfig = {
  apiKey: "AIzaSyCEi9OARnsDguQS4Fh7-YuXxC3DMtmCItI",
  authDomain: "lucario-chat.firebaseapp.com",
  databaseURL: "https://lucario-chat-default-rtdb.firebaseio.com/",
  projectId: "lucario-chat",
  storageBucket: "lucario-chat.appspot.com",
  messagingSenderId: "579239526747",
  appId: "1:579239526747:web:f0b1497c0fff63e55d1a7e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML =  "Bem-vindo(a), " + user_name + "!";
  
  function addRoom() {
  
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose: "adicionar sala"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "lucarioChat_page.html";
  }
  
  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  // Para obter os dados do banco de dados e exibi-los na página de salas do ChatRoom
  getData();
  
  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "lucarioChat_page.html";
  }
  
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
  