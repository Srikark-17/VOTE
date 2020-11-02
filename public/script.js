import registeredVoters from './registeredvoterdatabase'

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
        numberOfRegisteredVoters = registeredVoters.length
        firstName = document.getElementById("first-name")
        middleName = document.getElementById("middle-name")
        lastName = document.getElementById("last-name")
        dob = document.getElementById("dob")
        pob = document.getElementById("pob")
        address = document.getElementById("address")
        console.log('checking')
        for (let i = 0; i < numberOfRegisteredVoters; i++){
          if(numberOfRegisteredVoters[i].firstName == firstName){
            var firstNameValid = true
          }else{
            var firstNameValid = false
          }
          if(numberOfRegisteredVoters[i].middleName == middleName){
            var middleNameValid = true
          }else{
            var middleNameValid = false
          }
          if(numberOfRegisteredVoters[i].lastName == lastName){
            var lastNameValid = true
          }else{
            var lastNameValid = false
          }
          if(numberOfRegisteredVoters[i].dob == dob){
            var dobValid = true
          }else{
            var dobValid = false
          }
          if(numberOfRegisteredVoters[i].pob == pob){
            var pobValid = true
          }else{
            var pobValid = false
          }
          if(numberOfRegisteredVoters[i].address == address){
            var addressValid = true
          }else{
            var addressValid = false
          }
          if(firstNameValid){
            if(middleNameValid){
              if(lastNameValid){
                if(dobValid){
                  if(pobValid){
                    if(addressValid){
                      console.log('verified')
                      window.href = "./mainballot.html"
                      break;
                    }
                  }
                }
              }
            }
          }else{
            alert('You have not registered! Please check with your local clerk!')
          }
        }
        checked = true
      }
      function postVoterBallot(){
        document.getElementById('JD-FD').value
        db.collection("ballots").add({
          name: ``,
          candidateVotedFor: "CA",
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