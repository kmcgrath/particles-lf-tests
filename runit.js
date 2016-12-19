var AWS = require("aws-sdk");
var shortid = require("shortid");
var rc = require("rc");


var conf = require('rc')("runit", {
  region: "us-east-1",
  templateUrl: "https://s3.amazonaws.com/condensation-particles.us-east-1/particles-lf-tests/particles/cftemplates/spotinst/elastigroup.template.json",
  spotinstLambdaARN: "",
  runOnce: false
});


var cf = new AWS.CloudFormation({
  region: conf.region
});


var waitAndDelete = function(stackId) {
  cf.waitFor('stackCreateComplete', {StackName: stackId}, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else {
        cf.deleteStack({
          StackName: stackId
        }, function(err, data) {
          if (err) console.log(err, err.stack); // an error occurred
          else {
            console.log("Deleted " + stackId);
          }
        });
      }
  });
};

var createStack = function() {
  cf.createStack({
    StackName: "mock-elastigroup-"+shortid.generate(),
    TemplateURL: conf.templateUrl,
    Parameters: [
      {
        ParameterKey: "LambdaARN",
        ParameterValue: conf.spotinstLambdaARN
      }
    ]
  }, function(err,createData) {
    if (err) console.log(err, err.stack); // an error occurred
    else {
      waitAndDelete(createData.StackId);
    }
  });

};


if (conf.runOnce === "true") {
  createStack();
}
else {
  setInterval(createStack,5000);
}
