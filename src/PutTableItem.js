import React from 'react'
import AWS from './aws-config'

//https://www.youtube.com/watch?v=SU4dZ-qgR1Y&t=192s
//https://github.com/awsdocs/aws-doc-sdk-examples/blob/master/javascript/example_code/dynamodb/ddbdoc_get.js
//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html
//Partition key and sort key – Referred to as a composite primary key, this type of key is composed of two attributes. 
//The first attribute is the partition key, and the second attribute is the sort key.
function ddbdoc_get(tableName, hashId, sortID , info) {
    // Create DynamoDB document client
    var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });
  
  
    var params = {
      TableName: tableName,
      Item : { id: hashId,
        name : sortID,
        ...info
       },

    };

    //console.log(params)
  
    docClient.put(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Item);
      }
    });
  }

  
export default function PutTableItem() {

  
    const currentDate = new Date()
    const datetime = currentDate.getDate() + "/"
                + (currentDate.getMonth()+1)  + "/" 
                + currentDate.getFullYear() + " @ "  
                + currentDate.getHours() + ":"  
                + currentDate.getMinutes() + ":" 
                + currentDate.getSeconds();

      //https://www.w3schools.com/jsref/jsref_random.asp
      const aRandom = Math.floor((Math.random() * 1000) + 1);

      const aKey = datetime + " - " + aRandom

      const info = {
          attr1 : "derf",
          attr2 : "deft"
      }

    //https://docs.aws.amazon.com/cognito/latest/developerguide/getting-credentials.html
    // Make the call to obtain credentials
AWS.config.credentials.get(function(){
    // Credentials will be available when this function is called.
    //const credentials = AWS.config.credentials
    ddbdoc_get('newTable',aKey,"shorn",info)
});

return (  <div>g</div> )

}
