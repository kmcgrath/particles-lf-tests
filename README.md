# particles-lf-tests

[![condensation-image][condensation-image]][condensation-url]

[![Gitter][gitter-image]][gitter-url]

## Summary

Particles to test lambda-formation with the Lambda service.

## Mock Tests - Spotinst

1. Run the Mock API stack
2. Use the STAGE url from the API created step 1 to launch many elastigroup stacks

|region|Stack|Launch|
|------|---------|------|---------|
|us-east-1|Mock API|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3.amazonaws.com/condensation-particles.us-east-1/particles-lf-tests/particles/cftemplates/spotinst/mock_api.template.json)
|us-east-1|Mock ElastiGroup|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=particles-rancher-instance&templateURL=https://s3.amazonaws.com/condensation-particles.us-east-1/particles-lf-tests/particles/cftemplates/spotinst/elastigroup.template.json)

[Condensation][condensation-url] particles that create AWS CloudFormation templates.

## License
Apache-2.0 ©

[condensation-image]: https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png
[condensation-url]: https://github.com/SungardAS/condensation
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge

