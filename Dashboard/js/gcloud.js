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
    for (let i = 0; i < 1; i++) {
        // Name of the President
        let nametd = document.createElement('td');
        let nameText = document.createTextNode(`${res.officials[0].name}`)
        nametd.appendChild(nameText);
        document.getElementById("president").appendChild(td);

        // Position of the President
        let positiontd = document.createElement('td');
        let positionText = document.createTextNode(`${res.offices[0].name}`)
        positiontd.appendChild(positionText);
        document.getElementById("president").appendChild(td);

        // Party of the President
        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${res.officials[0].party}`)
        partytd.appendChild(partyText);
        document.getElementById("president").appendChild(td);

        // Phone Number of the President
        let nametd = document.createElement('td');
        let nameText = document.createTextNode(`${res.officials[0].phones[0]}`)
        nametd.appendChild(nameText);
        document.getElementById("president").appendChild(td);
    }

    // for (let i = 2; i < 4; i++) {
    //     let li = document.createElement('li');
    //     let t = document.createTextNode(`Name: ${res.officials[i].name} Party: ${res.officials[i].party} Phone Number: ${res.officials[i].phones[0]}`)
    //     li.appendChild(t);
    //     document.getElementById("repUL").appendChild(li);
    // }

    // for (let i = 3; i < 5; i++) {
    //     let li = document.createElement('li');
    //     let t = document.createTextNode(`Name: ${res.officials[i].name} Party: ${res.officials[i].party} Phone Number: ${res.officials[i].phones[0]}`)
    //     li.appendChild(t);
    //     document.getElementById("repUL").appendChild(li);
    // }

    // for (let i = 5; i < 6; i++) {
    //     let li = document.createElement('li');
    //     let t = document.createTextNode(`Name: ${res.officials[i].name} Party: ${res.officials[i].party} Phone Number: ${res.officials[i].phones[0]}`)
    //     li.appendChild(t);
    // }
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