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
      const db = firebase.firestore()
      let checked = false;
      //remember to set webpage to be null if checked is false
      function signUp() {
    
        var email = document.getElementById("email");
        var password = document.getElementById("password");
    
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
    
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('signed in')
                location.href = "./dashboard.html";
            } else {
              console.log('sign out')
            }
          });
      }
      function postVerifyInformation(){
        //Check given database if data is present, if not then do not allow them to proceed
        checked = true
      }
      function postVoterBallot(){
        document.getElementById('JD-FD').value
        db.collection("ballots").doc("example").set({
          name: "Los Angeles",
          state: "CA",
          country: "USA"
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
      }
      function signIn() {
        var email = document.getElementById("email");
        var password = document.getElementById("password");
    
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
    
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('signed in')
                location.href = "./dashboard.html";
            } else {
              console.log('sign out')
            }
          });
      }
    
      function signOut() {
        auth.signOut();
        alert("You logged out successfully!")
      }