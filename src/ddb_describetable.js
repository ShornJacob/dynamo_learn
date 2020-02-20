//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-examples-using-tables.html

import AWS from "aws-sdk";


export default function ddb_describetable(tablename, setAttrState) {

    // Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: tablename
};

// Call DynamoDB to retrieve the selected table descriptions
ddb.describeTable(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Table.AttributeDefinitions)
    setAttrState(data.Table.AttributeDefinitions)
  }
});

}
