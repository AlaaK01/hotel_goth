var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-north-1"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "Accessibilities",
  KeySchema: [
    // Partition Key
    { AttributeName: "id", KeyType: "HASH" },
    // Sort Keys
    { AttributeName: "name", KeyType: "RANGE" }
  ],
  AttributeDefinitions: [
    { AttributeName: "id", AttributeType: "S" },
    { AttributeName: "name", AttributeType: "S" }
  ],
  
  LocalSecondaryIndexes: [
    {
      IndexName: "ClassIndex",
      KeySchema: [
        { AttributeName: "id", KeyType: "HASH" },
        { AttributeName: "name", KeyType: "RANGE" }
      ],
      Projection: {
        ProjectionType: "KEYS_ONLY"
      }
    }
  ], 

  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, function(err, data) {
  if (err)
    console.error("Unable to create table: ", JSON.stringify(err, null, 2))
  else
    console.log("Created table with description: ", JSON.stringify(data, null, 2))
});