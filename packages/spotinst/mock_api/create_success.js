module.exports.handler = function(event,context,cb) {

  var mockObj = {
    "request": {
      "id": "9f61615c-c6f3-460b-b214-78321666e305",
      "url": "/aws/ec2/group",
      "method": "POST",
      "timestamp": "2016-12-09T09:44:58.197Z"
    },
    "response": {
      "status": {
        "code": 200,
        "message": "OK"
      },
      "kind": "spotinst:aws:ec2:group",
      "items": [
        {
          "id": "sig-c7e9w7pc",
          "name": "spotinst-group-ci-KPNKLATIVE",
          "description": "Development",
          "capacity": {
            "minimum": 1,
            "maximum": 1,
            "target": 1,
            "unit": "instance"
          },
          "strategy": {
            "risk": 100,
            "availabilityVsCost": "balanced",
            "drainingTimeout": 0,
            "fallbackToOd": true
          },
          "compute": {
            "instanceTypes": {
              "ondemand": "t2.large",
              "spot": [
                "m3.2xlarge",
                "m4.2xlarge",
                "c3.2xlarge",
                "c4.2xlarge"
              ]
            },
            "availabilityZones": [
              {
                "name": "us-east-1b",
                "subnetId": "subnet-8e4c5909",
                "subnetIds": [
                  "subnet-8e4c5909"
                ]
              },
              {
                "name": "us-east-1d",
                "subnetId": "subnet-eca8a9d3",
                "subnetIds": [
                  "subnet-eca8a9d3"
                ]
              },
              {
                "name": "us-east-1a",
                "subnetId": "subnet-6e477939",
                "subnetIds": [
                  "subnet-6e477939"
                ]
              }
            ],
            "product": "Linux/UNIX",
            "launchSpecification": {
              "loadBalancerNames": [
                "HCDASDF-ASRED"
              ],
              "securityGroupIds": [
                "sg-ca1117ba"
              ],
              "monitoring": false,
              "imageId": "ami-11111111",
              "keyPair": "fake_keypair",
              "userData": "__hidden__",
              "blockDeviceMappings": [
                {
                  "deviceName": "/dev/sdb",
                  "ebs": {
                    "deleteOnTermination": true,
                    "volumeSize": 50,
                    "volumeType": "gp2"
                  }
                },
                {
                  "deviceName": "/dev/xvda",
                  "ebs": {
                    "deleteOnTermination": true,
                    "volumeSize": 24,
                    "volumeType": "gp2"
                  }
                }
              ],
              "networkInterfaces": [
                {
                  "deviceIndex": 0,
                  "associatePublicIpAddress": true,
                  "deleteOnTermination": true
                }
              ],
              "tags": [
                {
                  "tagKey": "Environment",
                  "tagValue": "mockenv"
                },
                {
                  "tagKey": "Mock",
                  "tagValue": "Yes"
                }
              ]
            }
          },
          "scaling": {},
          "scheduling": {},
          "thirdPartiesIntegration": {},
          "createdAt": "2016-12-09T09:44:58.172+0000",
          "updatedAt": "2016-12-09T09:44:58.172+0000"
        }
      ],
      "count": 1
    }
  }

  return cb(
    null,
    {
      "statusCode": 200,
      "body": JSON.stringify(mockObj)
    }
 );

}
