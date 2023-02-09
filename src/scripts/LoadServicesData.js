var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "eu-north-1"
});

console.log("Writing entries to Services table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var servicesData = 
  JSON.parse(fs.readFileSync('../Components/Data/services.json', 'utf8'));

servicesData.forEach(function(service) {
  var params = {
    TableName: "Services",
    Item: {
      "id": service.id,
      "name": service.name
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for service",
                    service.name, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", service.name, "to table.")
  })
});