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
    $('#location1').html('');
    $('#location2').html('');
    $('#location3').html('');
    $('#location4').html('');
    $('#location5').html('');
    for (let i = 0; i < 1; i++) {
        // Location Name
        let th = document.createElement('th');
        let thText = document.createTextNode(`${response.earlyVoteSites[0].address.locationName}`)
        th.appendChild(thText);
        document.getElementById("location1").appendChild(th);
        
        // Location address
        let td = document.createElement('td');
        let tdText = document.createTextNode(`${response.earlyVoteSites[0].address.line1}, ${response.earlyVoteSites[0].address.city}, ${response.earlyVoteSites[0].address.state}, ${response.earlyVoteSites[0].address.zip}`)
        td.appendChild(tdText)
        document.getElementById("location1").appendChild(td);

    }
    for (let i = 1; i < 2; i++) {
        // Location Name
        let th = document.createElement('th');
        let thText = document.createTextNode(`${response.earlyVoteSites[1].address.locationName}`)
        th.appendChild(thText);
        document.getElementById("location2").appendChild(th);
        
        // Location address
        let td = document.createElement('td');
        let tdText = document.createTextNode(`${response.earlyVoteSites[1].address.line1}, ${response.earlyVoteSites[1].address.city}, ${response.earlyVoteSites[1].address.state}, ${response.earlyVoteSites[1].address.zip}`)
        td.appendChild(tdText)
        document.getElementById("location2").appendChild(td);

    }
    for (let i = 2; i < 3; i++) {
        // Location Name
        let th = document.createElement('th');
        let thText = document.createTextNode(`${response.earlyVoteSites[2].address.locationName}`)
        th.appendChild(thText);
        document.getElementById("location3").appendChild(th);
        
        // Location address
        let td = document.createElement('td');
        let tdText = document.createTextNode(`${response.earlyVoteSites[2].address.line1}, ${response.earlyVoteSites[2].address.city}, ${response.earlyVoteSites[2].address.state}, ${response.earlyVoteSites[2].address.zip}`)
        td.appendChild(tdText)
        document.getElementById("location3").appendChild(td);

    }
    for (let i = 3; i < 4; i++) {
        // Location Name
        let th = document.createElement('th');
        let thText = document.createTextNode(`${response.earlyVoteSites[3].address.locationName}`)
        th.appendChild(thText);
        document.getElementById("location4").appendChild(th);
        
        // Location address
        let td = document.createElement('td');
        let tdText = document.createTextNode(`${response.earlyVoteSites[3].address.line1}, ${response.earlyVoteSites[3].address.city}, ${response.earlyVoteSites[3].address.state}, ${response.earlyVoteSites[3].address.zip}`)
        td.appendChild(tdText)
        document.getElementById("location4").appendChild(td);

    }
    for (let i = 4; i < 5; i++) {
        // Location Name
        let th = document.createElement('th');
        let thText = document.createTextNode(`${response.earlyVoteSites[4].address.locationName}`)
        th.appendChild(thText);
        document.getElementById("location5").appendChild(th);
        
        // Location address
        let td = document.createElement('td');
        let tdText = document.createTextNode(`${response.earlyVoteSites[4].address.line1}, ${response.earlyVoteSites[4].address.city}, ${response.earlyVoteSites[4].address.state}, ${response.earlyVoteSites[4].address.zip}`)
        td.appendChild(tdText)
        document.getElementById("location5").appendChild(td);

    }
 } 

 showRepData = (res) => {
    for (let i = 0; i < 1; i++) {
        // Name of the President
        let nametd = document.createElement('th');
        let nameText = document.createTextNode(`${res.officials[0].name}`)
        nametd.appendChild(nameText);
        document.getElementById("president").appendChild(nametd);

        // Position of the President
        let positiontd = document.createElement('td');
        let positionText = document.createTextNode(`${res.offices[0].name}`)
        positiontd.appendChild(positionText);
        document.getElementById("president").appendChild(positiontd);

        // Party of the President
        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${res.officials[0].party}`)
        partytd.appendChild(partyText);
        document.getElementById("president").appendChild(partytd);

        // Phone Number of the President
        let phonetd = document.createElement('td');
        let phoneText = document.createTextNode(`${res.officials[0].phones[0]}`)
        phonetd.appendChild(phoneText);
        document.getElementById("president").appendChild(phonetd);
    }

    for (let i = 1; i < 2; i++) {
        // Name of the vice-president
        let nametd = document.createElement('th');
        let nameText = document.createTextNode(`${res.officials[1].name}`)
        nametd.appendChild(nameText);
        document.getElementById("vice-president").appendChild(nametd);

        // Position of the vice-president
        let positiontd = document.createElement('td');
        let positionText = document.createTextNode(`${res.offices[1].name}`)
        positiontd.appendChild(positionText);
        document.getElementById("vice-president").appendChild(positiontd);

        // Party of the vice-president
        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${res.officials[1].party}`)
        partytd.appendChild(partyText);
        document.getElementById("vice-president").appendChild(partytd);

        // Phone Number of the vice-president
        let phonetd = document.createElement('td');
        let phoneText = document.createTextNode(`${res.officials[1].phones[0]}`)
        phonetd.appendChild(phoneText);
        document.getElementById("vice-president").appendChild(phonetd);
    }

    for (let i = 2; i < 3; i++) {
        // Name of the senator-1
        let nametd = document.createElement('th');
        let nameText = document.createTextNode(`${res.officials[2].name}`)
        nametd.appendChild(nameText);
        document.getElementById("senator-1").appendChild(nametd);

        // Position of the senator-1
        let positiontd = document.createElement('td');
        let positionText = document.createTextNode(`${res.offices[2].name}`)
        positiontd.appendChild(positionText);
        document.getElementById("senator-1").appendChild(positiontd);

        // Party of the senator-1
        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${res.officials[2].party}`)
        partytd.appendChild(partyText);
        document.getElementById("senator-1").appendChild(partytd);

        // Phone Number of the senator-1
        let phonetd = document.createElement('td');
        let phoneText = document.createTextNode(`${res.officials[2].phones[0]}`)
        phonetd.appendChild(phoneText);
        document.getElementById("senator-1").appendChild(phonetd);
    }

    for (let i = 3; i < 4; i++) {
        // Name of the senator-2
        let nametd = document.createElement('th');
        let nameText = document.createTextNode(`${res.officials[3].name}`)
        nametd.appendChild(nameText);
        document.getElementById("senator-2").appendChild(nametd);

        // Position of the senator-2
        let positiontd = document.createElement('td');
        let positionText = document.createTextNode(`${res.offices[2].name}`)
        positiontd.appendChild(positionText);
        document.getElementById("senator-2").appendChild(positiontd);

        // Party of the senator-2
        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${res.officials[3].party}`)
        partytd.appendChild(partyText);
        document.getElementById("senator-2").appendChild(partytd);

        // Phone Number of the senator-2
        let phonetd = document.createElement('td');
        let phoneText = document.createTextNode(`${res.officials[3].phones[0]}`)
        phonetd.appendChild(phoneText);
        document.getElementById("senator-2").appendChild(phonetd);
    }

    for (let i = 4; i < 5; i++) {
        // Name of the representative
        let nametd = document.createElement('th');
        let nameText = document.createTextNode(`${res.officials[4].name}`)
        nametd.appendChild(nameText);
        document.getElementById("representative").appendChild(nametd);

        // Position of the representative
        let positiontd = document.createElement('td');
        let positionText = document.createTextNode(`${res.offices[4].name}`)
        positiontd.appendChild(positionText);
        document.getElementById("representative").appendChild(positiontd);

        // Party of the representative
        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${res.officials[4].party}`)
        partytd.appendChild(partyText);
        document.getElementById("representative").appendChild(partytd);

        // Phone Number of the representative
        let phonetd = document.createElement('td');
        let phoneText = document.createTextNode(`${res.officials[4].phones[0]}`)
        phonetd.appendChild(phoneText);
        document.getElementById("representative").appendChild(phonetd);
    }

    for (let i = 5; i < 6; i++) {
        // Name of the governor
        let nametd = document.createElement('th');
        let nameText = document.createTextNode(`${res.officials[5].name}`)
        nametd.appendChild(nameText);
        document.getElementById("governor").appendChild(nametd);

        // Position of the governor
        let positiontd = document.createElement('td');
        let positionText = document.createTextNode(`${res.offices[5].name}`)
        positiontd.appendChild(positionText);
        document.getElementById("governor").appendChild(positiontd);

        // Party of the governor
        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${res.officials[5].party}`)
        partytd.appendChild(partyText);
        document.getElementById("governor").appendChild(partytd);

        // Phone Number of the governor
        let phonetd = document.createElement('td');
        let phoneText = document.createTextNode(`${res.officials[5].phones[0]}`)
        phonetd.appendChild(phoneText);
        document.getElementById("governor").appendChild(phonetd);
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