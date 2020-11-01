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
      return res.json()
    });
};

getBillData = () => {
    let memberid = document.getElementById("pac-input").value;
    let congress113116 = document.getElementById('property').value
    console.log(`https://api.propublica.org/congress/v1/members/${memberid}/bills/${congress113116}.json`)
    const promise = fetch(`https://api.propublica.org/congress/v1/members/${memberid}/bills/${congress113116}.json`, {
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
        return res.json()
    })
}

 showStatementData = (response) => {
    $('#results').html('');

    let resultsArray = response.results

    for (let i = 0; i < resultsArray.length; i++) {
        // Indiviudal Name

        let newRow = document.createElement('tr')
        newRow.id = 'row' +`${i}`

        document.getElementById('results').appendChild(newRow)


        
        let th = document.createElement('th');
        let thText = document.createTextNode(`${response.name}`)
        th.appendChild(thText);
        document.getElementById(`${newRow.id}`).appendChild(th);
        
        // Statement Title
        let td = document.createElement('td');
        let tdText = document.createTextNode(`${response.results[i].statement_type}`)
        td.appendChild(tdText)
        document.getElementById(`${newRow.id}`).appendChild(td);

        //Statement Date
        let datetd = document.createElement('td');
        let dateText = document.createTextNode(`${response.results[i].date}`)
        datetd.appendChild(dateText)
        document.getElementById(`${newRow.id}`).appendChild(datetd);

        let titletd = document.createElement('td');
        let titleText = document.createTextNode(`${response.results[i].title}`)
        titletd.appendChild(titleText)
        document.getElementById(`${newRow.id}`).appendChild(titletd);

        let statetd = document.createElement('td');
        let stateText = document.createTextNode(`${response.results[i].state}`)
        statetd.appendChild(stateText)
        document.getElementById(`${newRow.id}`).appendChild(statetd);

        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${response.results[i].party}`)
        partytd.appendChild(partyText)
        document.getElementById(`${newRow.id}`).appendChild(partytd);
    }
 } 

 showBillData = (res) => {
    $('#results').html('');
    
    console.log(res)
    let resultsArray = res.results[0].bills
    console.log(resultsArray.length)
    for (let i = 1; i < resultsArray.length; i++) {
        // Name of the President
        // let nametd = document.createElement('th');
        // let nameText = document.createTextNode(`${res.results[0].name}`)
        // nametd.appendChild(nameText);
        // document.getElementById("name").appendChild(nametd);
        // Position of the President
        let newRow = document.createElement('tr')
        newRow.id = 'row' +`${i}`
        document.getElementById('results').appendChild(newRow)
        // Party of the President
        let nametd = document.createElement('td');
        let nameText = document.createTextNode(`${res.results[0].name}`)
        nametd.appendChild(nameText);
        document.getElementById(`${newRow.id}`).appendChild(nametd);

       
        let positiontd = document.createElement('td');
        let positionText = document.createTextNode(`${res.results[0].bills[i].short_title}`)
        positiontd.appendChild(positionText);
        document.getElementById(`${newRow.id}`).appendChild(positiontd);

        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${res.results[0].bills[i].sponsor_party}`)
        partytd.appendChild(partyText);
        document.getElementById(`${newRow.id}`).appendChild(partytd);


        // Phone Number of the President
        let phonetd = document.createElement('td');
        let phoneText = document.createTextNode(`${res.results[0].bills[i].introduced_date}`)
        phonetd.appendChild(phoneText);
        document.getElementById(`${newRow.id}`).appendChild(phonetd);

        let statetd = document.createElement('td');
        let stateText = document.createTextNode(`${res.results[0].bills[i].sponsor_state}`)
        statetd.appendChild(stateText);
        document.getElementById(`${newRow.id}`).appendChild(statetd);

        let billtd = document.createElement('td');
        let billText = document.createTextNode(`${res.results[0].bills[i].congressdotgov_url}`)
        billtd.appendChild(billText);
        document.getElementById(`${newRow.id}`).appendChild(billtd);
    }
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