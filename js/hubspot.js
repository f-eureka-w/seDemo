
$("form").submit(function( event ) {
  event.preventDefault();
  var data = $(this).serialize();
  data = data.split("&");
  var firstName = data[0].split("=")[1];
  var lastName = data[1].split("=")[1];
  var email = data[2].split("=")[1];
  var list = data[3].split("=")[1];
  $.ajax({
  	type:"POST",
  	url: "https://forms.hubspot.com/uploads/form/v2/1787193/6e2cf8f0-b777-4b7f-ba9f-5931af95f432",
  	data: {firstName: firstName, lastName: lastName, email:email, list:list}
  	
  })
});

// //HID = 1787193
// //Form GUID = 6e2cf8f0-b777-4b7f-ba9f-5931af95f432

// //require Node modules

// var https = require('https');
// var querystring = require('querystring');

// // build the data object

// var postData = querystring.stringify({
//     'email': req.body.email,
//     'firstname': req.body.firstname,
//     'lastname': req.body.lastname,
//     'hs_context': JSON.stringify({
//         "hutk": req.cookies.hubspotutk,
//         "ipAddress": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
//         "pageUrl": "http://www.example.com/form-page",
//         "pageName": "Example Title"
//     })
// });

// // set the post options, changing out the HUB ID and FORM GUID variables.


// var options = {
//   hostname: 'forms.hubspot.com',
//   path: '/uploads/form/v2/1787193/6e2cf8f0-b777-4b7f-ba9f-5931af95f432',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Content-Length': postData.length
//   }
// }

// // set up the request

// var request = https.request(options, function(response){
//   console.log("Status: " + response.statusCode);
//   console.log("Headers: " + JSON.stringify(response.headers));
//   response.setEncoding('utf8');
//   response.on('data', function(chunk){
//     console.log('Body: ' + chunk)
//   });
// });

// request.on('error', function(e){
//   console.log("Problem with request " + e.message)
// });

// // post the data

// request.write(postData);
// request.end();





