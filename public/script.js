// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC4j0iA97kHCbZrcKtWTa3GacYgQ8872Ck",
    authDomain: "vote-407f6.firebaseapp.com",
    databaseURL: "https://vote-407f6.firebaseio.com",
    projectId: "vote-407f6",
    storageBucket: "vote-407f6.appspot.com",
    messagingSenderId: "172957129697",
    appId: "1:172957129697:web:cc1c1ed75e6ead72bcd0a0",
    measurementId: "G-7PEQ5GLS08"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
      const auth = firebase.auth();
    
      function signUp() {
    
        var email = document.getElementById("email");
        var password = document.getElementById("password");
    
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
    
        alert("Registered! You may now login!");
      }
    
      function signIn() {
        var email = document.getElementById("email");
        var password = document.getElementById("password");
    
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
    
        alert("Logged In " + email.value +  " !"  + " Log out by clicking log out!");
      }
    
      function signOut() {
        auth.signOut();
        alert("You logged out successfully!")
      }