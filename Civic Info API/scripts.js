let API_KEY = "AIzaSyAtuyBVAQ_eNq95r8RjB38Oj5DtalyL_-E"

getPollingLocationData = () => {
    let place = document.getElementById("pac-input").value;
    const URL = "https://civicinfo.googleapis.com/civicinfo/v2/voterinfo?";
    const FULL_URL = `${URL}address=${place}&key=${API_KEY}`;
    const pollingPromise = fetch(FULL_URL);
    return pollingPromise.then((response) => {
      return response.json()
    });
  };

getRepData = () => {
    let place = document.getElementById("pac-input").value;
    const URL = "https://www.googleapis.com/civicinfo/v2/representatives"
    const repPromise = fetch(`${URL}?key=${API_KEY}&address=${place}`)
    return repPromise.then((res) =>{
        return res.json()
    })
}
  
 showPollingPlaceData = (response) => {
    for (let i = 0; i < response.earlyVoteSites.length; i++) {
        let li = document.createElement('li');
        let t = document.createTextNode(`${response.earlyVoteSites[i].address.locationName} -- ${response.earlyVoteSites[i].address.line1}, ${response.earlyVoteSites[i].address.city}, ${response.earlyVoteSites[i].address.state}, ${response.earlyVoteSites[i].address.zip}`)
        li.appendChild(t);
        document.getElementById("pollingUL").appendChild(li);
    }
    let br = document.createElement('br');
    document.getElementById("pollingUL").appendChild(br);
 } 

 showRepData = (res) => {
     let div = document.createElement('div')
     let text = document.createTextNode("Federal")
     div.appendChild(text)
     document.getElementById('repUL').appendChild(div)
    for (let i = 0; i < 2; i++) {
        let li = document.createElement('li');
        let t = document.createTextNode(`Name: ${res.officials[i].name} Party: ${res.officials[i].party} Phone Number: ${res.officials[i].phones[0]}`)
        li.appendChild(t);
        document.getElementById("repUL").appendChild(li);
    }
    let br = document.createElement('br');
    document.getElementById("repUL").appendChild(br);

    let senatorDiv = document.createElement('div')
    let senatorText = document.createTextNode("U.S. Senators")
    senatorDiv.appendChild(senatorText)
    document.getElementById('repUL').appendChild(senatorDiv)
    for (let i = 2; i < 4; i++) {
        let li = document.createElement('li');
        let t = document.createTextNode(`Name: ${res.officials[i].name} Party: ${res.officials[i].party} Phone Number: ${res.officials[i].phones[0]}`)
        li.appendChild(t);
        document.getElementById("repUL").appendChild(li);
    }
    let sbr = document.createElement('br');
    document.getElementById("repUL").appendChild(sbr);

    let representativeDiv = document.createElement('div')
    let representativeText = document.createTextNode("U.S. Representative")
    representativeDiv.appendChild(representativeText)
    document.getElementById('repUL').appendChild(representativeDiv)
    for (let i = 3; i < 5; i++) {
        let li = document.createElement('li');
        let t = document.createTextNode(`Name: ${res.officials[i].name} Party: ${res.officials[i].party} Phone Number: ${res.officials[i].phones[0]}`)
        li.appendChild(t);
        document.getElementById("repUL").appendChild(li);
    }
    let rbr = document.createElement('br');
    document.getElementById("repUL").appendChild(rbr);

    let governorDiv = document.createElement('div')
    let governorText = document.createTextNode("State Governor")
    governorDiv.appendChild(governorText)
    document.getElementById('repUL').appendChild(governorDiv)
    for (let i = 5; i < 6; i++) {
        let li = document.createElement('li');
        let t = document.createTextNode(`Name: ${res.officials[i].name} Party: ${res.officials[i].party} Phone Number: ${res.officials[i].phones[0]}`)
        li.appendChild(t);
        document.getElementById("repUL").appendChild(li);
    }
 }

 getPollingInfo = () => {
     getPollingLocationData()
     .then((response) => {
         showPollingPlaceData(response)
     })
     .catch((error) => {
         console.log(error);
     })
    }

 getRepInfo = () => {
     getRepData()
     .then((response) => {
         showRepData(response)
     }).catch((error) => {
         console.log(error);
     })
    }

//  1783 Macallan Drive, Brentwood, TN, 37027