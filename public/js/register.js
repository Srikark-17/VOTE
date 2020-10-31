// var https = require('https');
// var querystring = require('querystring');
var https = new XMLHttpRequest();
var base_url = 'https://api.typingdna.com/';
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

fetch("https://api.typingdna.com/save/", {
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
var responseData = '';
var req = https.request(options, function(res) {
   res.on('data', function(chunk) {
       responseData += chunk;
   });

   res.on('end', function() {
       console.log(JSON.parse(responseData));
   });
});



req.on('error', function(e) {
   console.error(e);
});
req.write(
   JSON.stringify(data)
);
req.end();