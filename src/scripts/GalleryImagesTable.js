var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-north-1"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "GalleryImages",
  KeySchema: [
    // Partition Key
    { AttributeName: "id", KeyType: "HASH" },
    // Sort Keys
    { AttributeName: "src", KeyType: "RANGE"}  
  ],
  AttributeDefinitions: [
    { AttributeName: "alt", AttributeType: "S" },
    { AttributeName: "src", AttributeType: "S" },
    { AttributeName: "id", AttributeType: "S" }
  ],
  LocalSecondaryIndexes: [
    {
      IndexName: "AltIndex",
      KeySchema: [
        { AttributeName: "id", KeyType: "HASH" },
        { AttributeName: "alt", KeyType: "RANGE" }
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


