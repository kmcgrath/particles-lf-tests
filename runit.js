var AWS = require("aws-sdk");
var shortid = require("shortid");

var cf = new AWS.CloudFormation({
  region: "us-east-1"
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
    TemplateURL: "https://s3.amazonaws.com/condensation-particles.us-east-1/particles-lf-tests/particles/cftemplates/spotinst/elastigroup.template.json",
    Parameters: [
      {
        ParameterKey: "LambdaARN",
        ParameterValue: "arn:aws:lambda:us-east-1:745968232654:function:spotinst-lambda-SpotinstLambda-MVNVKHJ4M5WQ"
      }
    ]
  }, function(err,createData) {
    if (err) console.log(err, err.stack); // an error occurred
    else {
      waitAndDelete(createData.StackId);
    }
  });

};


//setInterval(createStack,5000);


createStack();
