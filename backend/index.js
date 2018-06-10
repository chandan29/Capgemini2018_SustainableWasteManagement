var app = require('express')();
require('dotenv').config({silent: true});

app.listen(process.env.PORT || 3000, () => console.log('Listening on port 3000!'))
app.get('/test', (req, res) => res.send('Hello World!'))

var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
	url: 'https://gateway.watsonplatform.net/visual-recognition/api',
	version: '2018-03-19',
	iam_apikey: process.env.KEY
});

app.post('/img', function(req, res) {
  var images_file = fs.createReadStream('./carrots.jpg');
  console.log(images_file)
  var classifier_ids = ["food"];
  var threshold = 0.6;

  var params = {
    images_file: images_file,
    classifier_ids: classifier_ids,
    threshold: threshold
  };

  visualRecognition.classify(params, function(err, response) {
    if (err) {
      console.log(err);
    } else {
      code = response.images[0].classifiers[0].classes;
    }
    return res.status(200).json(code, null, 2)
  });
})