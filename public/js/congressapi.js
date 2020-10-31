let API_KEY = "b3RmcGX9ewJVUIcZdfAPPi7QjLINzN6TR5Rf28Vn"

getStatementData = () => {
    let memberid = document.getElementById("pac-input").value;
    let congress113116 = document.getElementById('property').value
    console.log(`https://api.propublica.org/congress/v1/members/${memberid}/statements/${congress113116}.json`)
    const promise = fetch(`https://api.propublica.org/congress/v1/members/${memberid}/statements/${congress113116}.json`, {
    headers: {
    "X-Api-Key": "b3RmcGX9ewJVUIcZdfAPPi7QjLINzN6TR5Rf28Vn"
  }
})
    return promise.then((res) => {
        console.log(res)
      return res.results
    });
};

getBillData = () => {
    let memberid = document.getElementById("pac-input").value;
    let congress113116 = document.getElementById('property').value
    console.log(`https://api.propublica.org/congress/v1/members/${memberid}/bills/${congress113116}.json`)
    const promise = fetch(`https://api.propublica.org/congress/v1/members/${memberid}/statements/${congress113116}.json`, {
    headers: {
    "X-Api-Key": "b3RmcGX9ewJVUIcZdfAPPi7QjLINzN6TR5Rf28Vn"
  }
})
    return promise.then((res) => {
        console.log(res)
      return res.json()
    });
};
getNomineesData = () => {
    let congress107116 = document.getElementById("pac-input").value;
    const promise = fetch(`https://api.propublica.org/congress/v1/${congress107116}/nominees/confirmed.json`, {
    headers: {
    "X-Api-Key": "b3RmcGX9ewJVUIcZdfAPPi7QjLINzN6TR5Rf28Vn"
  }
    })
    return promise.then((res) =>{
        console.log(res)
        return res.json()
    })
}

 showStatementData = (response) => {
    $('#name').html('');
    $('#statement-type').html('');
    $('#date').html('');
    $('#title').html('');
    $('#state').html('');
    $('#party').html('');
    for (let i = 0; i < 1; i++) {
        // Indiviudal Name
        let th = document.createElement('th');
        let thText = document.createTextNode(`${response.name}`)
        th.appendChild(thText);
        document.getElementById("name").appendChild(th);
        
        // Statement Title
        let td = document.createElement('td');
        let tdText = document.createTextNode(`${response.results[i].statement_type}`)
        td.appendChild(tdText)
        document.getElementById("name").appendChild(td);

        //Statement Date
        let datetd = document.createElement('td');
        let dateText = document.createTextNode(`${response.results[i].date}`)
        datetd.appendChild(dateText)
        document.getElementById("name").appendChild(datetd);

        let titletd = document.createElement('td');
        let titleText = document.createTextNode(`${response.results[i].title}`)
        titletd.appendChild(titleText)
        document.getElementById("name").appendChild(titletd);

        let statetd = document.createElement('td');
        let stateText = document.createTextNode(`${response.results[i].state}`)
        statetd.appendChild(stateText)
        document.getElementById("name").appendChild(statetd);

        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${response.results[i].title}`)
        partytd.appendChild(partyText)
        document.getElementById("name").appendChild(partytd);
    }
    for (let i = 1; i < 2; i++) {
        // Indiviudal Name
        let th = document.createElement('th');
        let thText = document.createTextNode(`${response.name}`)
        th.appendChild(thText);
        document.getElementById("statement-type").appendChild(th);
        
        // Statement Title
        let td = document.createElement('td');
        let tdText = document.createTextNode(`${response.results[i].statement_type}`)
        td.appendChild(tdText)
        document.getElementById("statement-type").appendChild(td);

        //Statement Date
        let datetd = document.createElement('td');
        let dateText = document.createTextNode(`${response.results[i].date}`)
        datetd.appendChild(dateText)
        document.getElementById("statement-type").appendChild(datetd);

        let titletd = document.createElement('td');
        let titleText = document.createTextNode(`${response.results[i].title}`)
        titletd.appendChild(titleText)
        document.getElementById("statement-type").appendChild(titletd);

        let statetd = document.createElement('td');
        let stateText = document.createTextNode(`${response.results[i].state}`)
        statetd.appendChild(stateText)
        document.getElementById("statement-type").appendChild(statetd);

        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${response.results[i].title}`)
        partytd.appendChild(partyText)
        document.getElementById("statement-type").appendChild(partytd);
    }
    for (let i = 2; i < 3; i++) {
        // Indiviudal Name
        let th = document.createElement('th');
        let thText = document.createTextNode(`${response.name}`)
        th.appendChild(thText);
        document.getElementById("date").appendChild(th);
        
        // Statement Title
        let td = document.createElement('td');
        let tdText = document.createTextNode(`${response.results[i].statement_type}`)
        td.appendChild(tdText)
        document.getElementById("date").appendChild(td);

        //Statement Date
        let datetd = document.createElement('td');
        let dateText = document.createTextNode(`${response.results[i].date}`)
        datetd.appendChild(dateText)
        document.getElementById("date").appendChild(datetd);

        let titletd = document.createElement('td');
        let titleText = document.createTextNode(`${response.results[i].title}`)
        titletd.appendChild(titleText)
        document.getElementById("date").appendChild(titletd);

        let statetd = document.createElement('td');
        let stateText = document.createTextNode(`${response.results[i].state}`)
        statetd.appendChild(stateText)
        document.getElementById("date").appendChild(statetd);

        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${response.results[i].title}`)
        partytd.appendChild(partyText)
        document.getElementById("date").appendChild(partytd);
    }
    for (let i = 3; i < 4; i++) {
        // Indiviudal Name
        let th = document.createElement('th');
        let thText = document.createTextNode(`${response.name}`)
        th.appendChild(thText);
        document.getElementById("title").appendChild(th);
        
        // Statement Title
        let td = document.createElement('td');
        let tdText = document.createTextNode(`${response.results[i].statement_type}`)
        td.appendChild(tdText)
        document.getElementById("title").appendChild(td);

        //Statement Date
        let datetd = document.createElement('td');
        let dateText = document.createTextNode(`${response.results[i].date}`)
        datetd.appendChild(dateText)
        document.getElementById("title").appendChild(datetd);

        let titletd = document.createElement('td');
        let titleText = document.createTextNode(`${response.results[i].title}`)
        titletd.appendChild(titleText)
        document.getElementById("title").appendChild(titletd);

        let statetd = document.createElement('td');
        let stateText = document.createTextNode(`${response.results[i].state}`)
        statetd.appendChild(stateText)
        document.getElementById("title").appendChild(statetd);

        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${response.results[i].title}`)
        partytd.appendChild(partyText)
        document.getElementById("title").appendChild(partytd);
    }
    for (let i = 4; i < 5; i++) {
        // Indiviudal Name
        let th = document.createElement('th');
        let thText = document.createTextNode(`${response.name}`)
        th.appendChild(thText);
        document.getElementById("state").appendChild(th);
        
        // Statement Title
        let td = document.createElement('td');
        let tdText = document.createTextNode(`${response.results[i].statement_type}`)
        td.appendChild(tdText)
        document.getElementById("state").appendChild(td);

        //Statement Date
        let datetd = document.createElement('td');
        let dateText = document.createTextNode(`${response.results[i].date}`)
        datetd.appendChild(dateText)
        document.getElementById("state").appendChild(datetd);

        let titletd = document.createElement('td');
        let titleText = document.createTextNode(`${response.results[i].title}`)
        titletd.appendChild(titleText)
        document.getElementById("state").appendChild(titletd);

        let statetd = document.createElement('td');
        let stateText = document.createTextNode(`${response.results[i].state}`)
        statetd.appendChild(stateText)
        document.getElementById("state").appendChild(statetd);

        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${response.results[i].title}`)
        partytd.appendChild(partyText)
        document.getElementById("state").appendChild(partytd);
    }
    for (let i = 0; i < 1; i++) {
        // Indiviudal Name
        let th = document.createElement('th');
        let thText = document.createTextNode(`${response.name}`)
        th.appendChild(thText);
        document.getElementById("party").appendChild(th);
        
        // Statement Title
        let td = document.createElement('td');
        let tdText = document.createTextNode(`${response.results[i].statement_type}`)
        td.appendChild(tdText)
        document.getElementById("party").appendChild(td);

        //Statement Date
        let datetd = document.createElement('td');
        let dateText = document.createTextNode(`${response.results[i].date}`)
        datetd.appendChild(dateText)
        document.getElementById("party").appendChild(datetd);

        let titletd = document.createElement('td');
        let titleText = document.createTextNode(`${response.results[i].title}`)
        titletd.appendChild(titleText)
        document.getElementById("party").appendChild(titletd);

        let statetd = document.createElement('td');
        let stateText = document.createTextNode(`${response.results[i].state}`)
        statetd.appendChild(stateText)
        document.getElementById("party").appendChild(statetd);

        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${response.results[i].title}`)
        partytd.appendChild(partyText)
        document.getElementById("party").appendChild(partytd);
    }
 } 

 showBillData = (res) => {
    $('#name').html('');
    $('#title').html('');
    $('#sponsor-party').html('');
    $('#introduced-date').html('');
    $('#state').html('');
    $('#bill-url').html('');
    console.log(res)
    for (let i = 0; i < 1; i++) {
        // Name of the President
        // let nametd = document.createElement('th');
        // let nameText = document.createTextNode(`${res.results[0].name}`)
        // nametd.appendChild(nameText);
        // document.getElementById("name").appendChild(nametd);

        // Position of the President
        let positiontd = document.createElement('td');
        let positionText = document.createTextNode(`${res.results[0].bills[i].title}`)
        positiontd.appendChild(positionText);
        document.getElementById("name").appendChild(positiontd);

        // Party of the President
        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${res.results[0].bills[i].sponsor_party}`)
        partytd.appendChild(partyText);
        document.getElementById("name").appendChild(partytd);

        // Phone Number of the President
        let phonetd = document.createElement('td');
        let phoneText = document.createTextNode(`${res.results[0].bills[i].introduced_date}`)
        phonetd.appendChild(phoneText);
        document.getElementById("name").appendChild(phonetd);

        let statetd = document.createElement('td');
        let stateText = document.createTextNode(`${res.results[0].bills[i].state}`)
        statetd.appendChild(stateText);
        document.getElementById("name").appendChild(statetd);

        let billtd = document.createElement('td');
        let billText = document.createTextNode(`${res.results[0].bills[i].bill_url}`)
        billtd.appendChild(billText);
        document.getElementById("name").appendChild(billtd);
    }

    // for (let i = 1; i < 2; i++) {
    //     // Picture of vice-president
    //     let img = new Image();
    //     img.src = `${res.officials[1].photoUrl}`
    //     img.style.height = "100px"
    //     document.getElementById('vice-president').appendChild(img)

    //     // Name of the vice-president
    //     let nametd = document.createElement('th');
    //     let nameText = document.createTextNode(`${res.officials[1].name}`)
    //     nametd.appendChild(nameText);
    //     document.getElementById("vice-president").appendChild(nametd);

    //     // Position of the vice-president
    //     let positiontd = document.createElement('td');
    //     let positionText = document.createTextNode(`${res.offices[1].name}`)
    //     positiontd.appendChild(positionText);
    //     document.getElementById("vice-president").appendChild(positiontd);

    //     // Party of the vice-president
    //     let partytd = document.createElement('td');
    //     let partyText = document.createTextNode(`${res.officials[1].party}`)
    //     partytd.appendChild(partyText);
    //     document.getElementById("vice-president").appendChild(partytd);

    //     // Phone Number of the vice-president
    //     let phonetd = document.createElement('td');
    //     let phoneText = document.createTextNode(`${res.officials[1].phones[0]}`)
    //     phonetd.appendChild(phoneText);
    //     document.getElementById("vice-president").appendChild(phonetd);
    // }

    // for (let i = 2; i < 3; i++) {
    //     // Picture of senator-1
    //     let img = new Image();
    //     img.src = `${res.officials[2].photoUrl}`
    //     img.style.height = "100px"
    //     document.getElementById('senator-1').appendChild(img)

    //     // Name of the senator-1
    //     let nametd = document.createElement('th');
    //     let nameText = document.createTextNode(`${res.officials[2].name}`)
    //     nametd.appendChild(nameText);
    //     document.getElementById("senator-1").appendChild(nametd);

    //     // Position of the senator-1
    //     let positiontd = document.createElement('td');
    //     let positionText = document.createTextNode(`${res.offices[2].name}`)
    //     positiontd.appendChild(positionText);
    //     document.getElementById("senator-1").appendChild(positiontd);

    //     // Party of the senator-1
    //     let partytd = document.createElement('td');
    //     let partyText = document.createTextNode(`${res.officials[2].party}`)
    //     partytd.appendChild(partyText);
    //     document.getElementById("senator-1").appendChild(partytd);

    //     // Phone Number of the senator-1
    //     let phonetd = document.createElement('td');
    //     let phoneText = document.createTextNode(`${res.officials[2].phones[0]}`)
    //     phonetd.appendChild(phoneText);
    //     document.getElementById("senator-1").appendChild(phonetd);
    // }

    // for (let i = 3; i < 4; i++) {
    //     // Picture of senator-2
    //     let img = new Image();
    //     img.src = `${res.officials[3].photoUrl}`
    //     img.style.height = "100px"
    //     document.getElementById('senator-2').appendChild(img)

    //     // Name of the senator-2
    //     let nametd = document.createElement('th');
    //     let nameText = document.createTextNode(`${res.officials[3].name}`)
    //     nametd.appendChild(nameText);
    //     document.getElementById("senator-2").appendChild(nametd);

    //     // Position of the senator-2
    //     let positiontd = document.createElement('td');
    //     let positionText = document.createTextNode(`${res.offices[2].name}`)
    //     positiontd.appendChild(positionText);
    //     document.getElementById("senator-2").appendChild(positiontd);

    //     // Party of the senator-2
    //     let partytd = document.createElement('td');
    //     let partyText = document.createTextNode(`${res.officials[3].party}`)
    //     partytd.appendChild(partyText);
    //     document.getElementById("senator-2").appendChild(partytd);

    //     // Phone Number of the senator-2
    //     let phonetd = document.createElement('td');
    //     let phoneText = document.createTextNode(`${res.officials[3].phones[0]}`)
    //     phonetd.appendChild(phoneText);
    //     document.getElementById("senator-2").appendChild(phonetd);
    // }

    // for (let i = 4; i < 5; i++) {
    //     // Picture of representative
    //     let img = new Image();
    //     img.src = `${res.officials[4].photoUrl}`
    //     img.style.height = "100px"
    //     document.getElementById('representative').appendChild(img)

    //     // Name of the representative
    //     let nametd = document.createElement('th');
    //     let nameText = document.createTextNode(`${res.officials[4].name}`)
    //     nametd.appendChild(nameText);
    //     document.getElementById("representative").appendChild(nametd);

    //     // Position of the representative
    //     let positiontd = document.createElement('td');
    //     let positionText = document.createTextNode(`${res.offices[3].name}`)
    //     positiontd.appendChild(positionText);
    //     document.getElementById("representative").appendChild(positiontd);

    //     // Party of the representative
    //     let partytd = document.createElement('td');
    //     let partyText = document.createTextNode(`${res.officials[4].party}`)
    //     partytd.appendChild(partyText);
    //     document.getElementById("representative").appendChild(partytd);

    //     // Phone Number of the representative
    //     let phonetd = document.createElement('td');
    //     let phoneText = document.createTextNode(`${res.officials[4].phones[0]}`)
    //     phonetd.appendChild(phoneText);
    //     document.getElementById("representative").appendChild(phonetd);
    // }

    // for (let i = 5; i < 6; i++) {
    //     // Picture of the governor
    //     let img = new Image();
    //     img.src = `${res.officials[5].photoUrl}`
    //     img.style.height = "100px"
    //     document.getElementById('governor').appendChild(img)

    //     // Name of the governor
    //     let nametd = document.createElement('th');
    //     let nameText = document.createTextNode(`${res.officials[5].name}`)
    //     nametd.appendChild(nameText);
    //     document.getElementById("governor").appendChild(nametd);

    //     // Position of the governor
    //     let positiontd = document.createElement('td');
    //     let positionText = document.createTextNode(`${res.offices[4].name}`)
    //     positiontd.appendChild(positionText);
    //     document.getElementById("governor").appendChild(positiontd);

    //     // Party of the governor
    //     let partytd = document.createElement('td');
    //     let partyText = document.createTextNode(`${res.officials[5].party}`)
    //     partytd.appendChild(partyText);
    //     document.getElementById("governor").appendChild(partytd);

    //     // Phone Number of the governor
    //     let phonetd = document.createElement('td');
    //     let phoneText = document.createTextNode(`${res.officials[5].phones[0]}`)
    //     phonetd.appendChild(phoneText);
    //     document.getElementById("governor").appendChild(phonetd);
    // }
 }

 getStatementInfo = () => {
     getStatementData()
     .then((response) => {
        showStatementData(response)
     })
     .catch((error) => {
         console.log(error);
     })
    }

 getBillInfo = () => {
     getBillData()
     .then((response) => {
         console.log(response)
         showBillData(response)
     }).catch((error) => {
         console.log(error);
     })
}
getNomineesInfo = () => {
    getNomineesData()
    .then((response) => {
        showRepData(response)
    }).catch((error) => {
        console.log(error);
    })
}