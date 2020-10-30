// var https = require('https');
// var querystring = require('querystring');
import TypingDNA from "./typingdna.js";
var http = new XMLHttpRequest();
var tdna  = new TypingDNA();
var base_url = 'https://api.typingdna.com/save/:id';
var apiKey = '{079ecadfe08241731f9777dfc3033267}';
var apiSecret = '{0f251ae38b0d26e133757fd82b80e27e}';
var id = document.getElementById("username").value;;
var data = {
   tp : '{tp}',
}
var options = {
   hostname : base_url,
   port : 443,
   path : '/save/' + id,
   method : 'POST',
   headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
       'Cache-Control': 'no-cache',
       'Authorization': 'Basic ' + new Buffer(apiKey + ':' + apiSecret).toString('base64'),
   },
}

fetch("https://api.typingdna.com/save/:id", {
  method: "POST", 
  body: JSON.stringify(data),
  headers: {
   'Content-Type': 'application/x-www-form-urlencoded',
   'Cache-Control': 'no-cache',
   'Authorization': 'Basic ' + new Buffer(apiKey + ':' + apiSecret).toString('base64'),
  },
}).then(res => {
  console.log("Request complete! response:", res);
});
// getPollingLocationData = () => {
//    let place = document.getElementById("pac-input").value;
//    const URL = "https://civicinfo.googleapis.com/civicinfo/v2/voterinfo?";
//    const FULL_URL = `${URL}address=${place}&key=${API_KEY}`;
//    const pollingPromise = fetch(FULL_URL);
//    return pollingPromise.then((response) => {
//      return response.json()
//    });
//  };

// getRepData = () => {
//    let place = document.getElementById("pac-input").value;
//    const URL = "https://www.googleapis.com/civicinfo/v2/representatives"
//    const repPromise = fetch(`${URL}?key=${API_KEY}&address=${place}`)
//    return repPromise.then((res) =>{
//        return res.json()
//    })
// }
// var responseData = '';
// var req = https.request(options, function(res) {
//    res.on('data', function(chunk) {
//        responseData += chunk;
//    });

//    res.on('end', function() {
//        console.log(JSON.parse(responseData));
//    });
// });



req.on('error', function(e) {
   console.error(e);
});
req.write(
   querystring.stringify(data)
);
req.end();