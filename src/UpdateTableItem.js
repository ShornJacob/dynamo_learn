import AWS from "aws-sdk";
import React from 'react'

//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.Js.03.html
//https://www.youtube.com/watch?v=SU4dZ-qgR1Y&t=192s
//https://github.com/awsdocs/aws-doc-sdk-examples/blob/master/javascript/example_code/dynamodb/ddbdoc_get.js
//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html
//Partition key and sort key – Referred to as a composite primary key, this type of key is composed of two attributes. 
//The first attribute is the partition key, and the second attribute is the sort key.
function ddbdoc_update(tableName, hashId, sortID , info) {

    console.log(info)
    // Create DynamoDB document client
    var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });
  
    
  //https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.UpdateExpressions.html
    var params = {
      TableName: tableName,
      Key : { id: hashId,
        name : sortID,
       },
       UpdateExpression: 'set attr1 = :attr1, attr2 = :attr2',

  ExpressionAttributeValues: {
    ':attr1' : info.attr1,
    ':attr2' : info.attr2
  }
}

    //console.log(params)
  
    docClient.update(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Item);
      }
    });
  
}
  
export default function PutTableItem() {

  

      //https://www.w3schools.com/jsref/jsref_random.asp
      const aRandom1 = String(Math.floor((Math.random() * 1000) + 1))
      const aRandom2 = String(Math.floor((Math.random() * 1000) + 1))

      const aKey = "3/3/2020 @ 12:57:3-686"

      const info = {
          attr1 : aRandom1,
          attr2 : aRandom2
      }

    //https://docs.aws.amazon.com/cognito/latest/developerguide/getting-credentials.html
    // Make the call to obtain credentials
AWS.config.credentials.get(function(){
    // Credentials will be available when this function is called.
    //const credentials = AWS.config.credentials
    ddbdoc_update('newTable',aKey,"shorn",info)
});

return (  <div>g</div> )

}
