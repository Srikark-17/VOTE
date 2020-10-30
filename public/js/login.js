var https = require('https');
var tdna  = new TypingDNA();
var base_url = 'api.typingdna.com';
var apiKey = '{apiKey}';
var apiSecret = '{apiSecret}';
var id = '{id}';
var options = {
   hostname : base_url,
   port : 443,
   path : '/user/' + id,
   method : 'GET',
   headers: {
       'Cache-Control': 'no-cache',
       'Authorization': 'Basic ' + new Buffer(apiKey + ':' + apiSecret).toString('base64'),
   },
};

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

req.end();