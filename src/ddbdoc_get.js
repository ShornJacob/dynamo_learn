//https://www.youtube.com/watch?v=SU4dZ-qgR1Y&t=192s
//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-document-client.html

// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
//AWS.config.region = "ap-southeast-2"; // Region
AWS.config.update({ region: "ap-southeast-2" });
import AWS from "aws-sdk";

function ddbdoc_get(tableName, keyId, keyName) {
  // Create DynamoDB document client
  var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

  // Create variables to hold numeric key values
  var season = SEASON_NUMBER;
  var episode = EPISODES_NUMBER;

  // Create DynamoDB document client
  var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

  var params = {
    TableName: tableName,
    Key: { [keyId]: keyName }
  };

  docClient.get(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Item);
    }
  });
}
