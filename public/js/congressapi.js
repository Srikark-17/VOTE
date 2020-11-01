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
    $('#row1').html('');
    $('#row2').html('');
    $('#row3').html('');
    $('#row4').html('');
    $('#row5').html('');
    $('#row6').html('');
    $('#row7').html('');
    $('#row8').html('');
    $('#row9').html('');
    $('#row10').html('');
    console.log(res)
    for (let i = 1; i < 10; i++) {
        // Name of the President
        // let nametd = document.createElement('th');
        // let nameText = document.createTextNode(`${res.results[0].name}`)
        // nametd.appendChild(nameText);
        // document.getElementById("name").appendChild(nametd);
        let id = 'row' +`${i}`
        console.log(id)
        // Position of the President

        // Party of the President
        let nametd = document.createElement('td');
        let nameText = document.createTextNode(`${res.results[0].name}`)
        nametd.appendChild(nameText);
        document.getElementById(`${id}`).appendChild(nametd);

       
        let positiontd = document.createElement('td');
        let positionText = document.createTextNode(`${res.results[0].bills[i].short_title}`)
        positiontd.appendChild(positionText);
        document.getElementById(`${id}`).appendChild(positiontd);

        let partytd = document.createElement('td');
        let partyText = document.createTextNode(`${res.results[0].bills[i].sponsor_party}`)
        partytd.appendChild(partyText);
        document.getElementById(`${id}`).appendChild(partytd);


        // Phone Number of the President
        let phonetd = document.createElement('td');
        let phoneText = document.createTextNode(`${res.results[0].bills[i].introduced_date}`)
        phonetd.appendChild(phoneText);
        document.getElementById(`${id}`).appendChild(phonetd);

        let statetd = document.createElement('td');
        let stateText = document.createTextNode(`${res.results[0].bills[i].sponsor_state}`)
        statetd.appendChild(stateText);
        document.getElementById(`${id}`).appendChild(statetd);

        let billtd = document.createElement('td');
        let billText = document.createTextNode(`${res.results[0].bills[i].congressdotgov_url}`)
        billtd.appendChild(billText);
        document.getElementById(`${id}`).appendChild(billtd);
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