import AWS from "aws-sdk";
import React from 'react'


//https://www.youtube.com/watch?v=SU4dZ-qgR1Y&t=192s
//https://github.com/awsdocs/aws-doc-sdk-examples/blob/master/javascript/example_code/dynamodb/ddbdoc_get.js
//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html
//Partition key and sort key – Referred to as a composite primary key, this type of key is composed of two attributes. 
//The first attribute is the partition key, and the second attribute is the sort key.
function ddbdoc_get(tableName, hashId, sortID) {
    // Create DynamoDB document client
    var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });
  
  
    var params = {
      TableName: tableName,
      Key: { id1: hashId,
        id2 : sortID

       },

    };

    //console.log(params)
  
    docClient.get(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Item);
      }
    });
  }

  
export default function GetTableItem() {

    //https://docs.aws.amazon.com/cognito/latest/developerguide/getting-credentials.html
    // Make the call to obtain credentials
AWS.config.credentials.get(function(){
    // Credentials will be available when this function is called.
    //const credentials = AWS.config.credentials
    ddbdoc_get('name1',2,"shorn")
});

return (  <div>g</div> )

}
