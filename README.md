# particles-lf-tests

[![condensation-image][condensation-image]][condensation-url]

[![Gitter][gitter-image]][gitter-url]

## Summary

[Condensation][condensation-url] particles to test lambda-formation with the Lambda service.

## Mock Tests - Spotinst

1. Run the Mock API stack - this uses SAM to be sure to enable capabilities and create a change set
2. Run LambdaFormation stack - this creates the ARN for the lambda used by CloudFormation Custom Resource - use STAGE url from step 1
3. Use runit.js to (or manually) launch many mock elastigroups with the ARN from step 2

runit.js example:

```
node runit.js --runOnce=true --spotinstLambdaARN="arn:aws:lambda:us-east-1:XXXXXXXXXXXX:function:spotinst-lambda-SpotinstLambda-XXXXXXXXXXXX"
```


|region|Stack|Launch|
|------|---------|------|---------|
|us-east-1|Mock API|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=lf-spotinst-mock-api&templateURL=https://s3.amazonaws.com/condensation-particles.us-east-1/particles-lf-tests/particles/cftemplates/spotinst/mock_api.template.json)
|us-east-1|LF-Spotinst|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=spotinst-lambda&templateURL=https://s3.amazonaws.com/condensation-particles.us-east-1/particles-lf-tests/particles/cftemplates/spotinst/lf.template.json)
|us-east-1|Mock ElastiGroup|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=lf-spotinst-mock-elastigroup&templateURL=https://s3.amazonaws.com/condensation-particles.us-east-1/particles-lf-tests/particles/cftemplates/spotinst/elastigroup.template.json)


## License
Apache-2.0 ©

[condensation-image]: https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png
[condensation-url]: https://github.com/SungardAS/condensation
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge

