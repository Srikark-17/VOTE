const registeredVoters = [{
  first_name: 'Om',
  middle_name: 'K',
  last_name: 'Joshi',
  full_address: 'example',
  dob: 'example',
  pob: 'example'
}]

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
        let numberOfRegisteredVoters = registeredVoters.length
        let firstName = document.getElementById("first-name").value
        let middleName = document.getElementById("middle-name").value
        let lastName = document.getElementById("last-name").value
        let dob = document.getElementById("dob").value
        let pob = document.getElementById("pob").value
        let address = document.getElementById("full-address").value
        console.log('checking')
        for (let i = 0; i < numberOfRegisteredVoters; i++){
          console.log(registeredVoters[i].first_name)
          console.log(firstName)
          if(registeredVoters[i].first_name == firstName){
            var firstNameValid = true
          }else{
            var firstNameValid = false
          }
          if(registeredVoters[i].middle_name == middleName){
            var middleNameValid = true
          }else{
            var middleNameValid = false
          }
          if(registeredVoters[i].last_name == lastName){
            var lastNameValid = true
          }else{
            var lastNameValid = false
          }
          if(registeredVoters[i].dob == dob){
            var dobValid = true
          }else{
            var dobValid = false
          }
          if(registeredVoters[i].pob == pob){
            var pobValid = true
          }else{
            var pobValid = false
          }
          if(registeredVoters[i].full_address == address){
            var addressValid = true
          }else{
            var addressValid = false
          }
          if(firstNameValid){
            console.log('first name valid')
            if(middleNameValid){
              console.log('middle name valid')
              if(lastNameValid){
                console.log('last name valid')
                if(dobValid){
                  console.log('dob valid')
                  if(pobValid){
                    console.log('pob valid')
                    if(addressValid){
                      console.log('address valid')
                      console.log('verified')
                      window.open("mainballot.html")
                      
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
        let jdfdValue = document.getElementById('JD-FD').value
        let ogokValue = document.getElementById('OG-OK').value
        let jadavalue = document.getElementById('JA-DA').value
        if(jdfdValue == 'on'){
          jdfdValue = true

          candidateSelected = 'John Doe and Fohn Doe - Gryffindor'
        }
        if(ogokValue == 'on'){
          ogokValue = true
          candidateSelected = 'O.G. Money and O.K. Pay - Ravenclaw'
        }
        if(jadavalue == 'on'){
          jadavalue = true
          candidateSelected = 'Johnny Appleseed and Dohnny Appleseed - Slytherin'
        }
        console.log(jdfdValue)
        console.log(ogokValue)
        console.log(jadavalue)
        db.collection("ballots").add({
          name: `${registeredVoters[0].first_name}`+ ' ' + `${registeredVoters[0].middle_name}` + ' '+ `${registeredVoters[0].last_name}`,
          uid: `${auth.currentUser.uid}`,
          candidateVotedFor: `${candidateSelected}`
        })
        .then(function() {
            console.log("Document successfully written!");
            window.open("success.html")
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
            window.open("denial.html")
        });
      }
      function signIn() {
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        var firstName = document.getElementById("firstname")
        var lastName = document.getElementById("lastname")
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
    
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('signed in')
                user.updateProfile({
                  displayName: `${firstName}` + ' ' + `${lastName}`,
                }).then(function() {
                  console.log('update successful')
                }).catch(function(error) {
                  alert(error)
                });
                window.location = ("dashboard.html")
            } else {
              console.log('sign out')
            }
          });
      }
    
      function signOut() {
        auth.signOut();
        alert("You logged out successfully!")
      }