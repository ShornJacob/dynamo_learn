import React from 'react'
import AWS from "aws-sdk";


//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.Js.03.html

function increaseRating() {


    console.log(AWS.config.credentials)

    var docClient = new AWS.DynamoDB.DocumentClient();

    var table = "Movies";
    var year = 2016;
    var title = "The Big New Movie";


    var params = {
        TableName:table,
        Key:{
            "year": year,
            "title": title
        },
        ConditionExpression:"info.rating <= :val",
        ExpressionAttributeValues: {
            ":val": 5.0
        },
      
    };

    docClient.delete(params, function(err, data) {
        if (err) {
            console.log( "The conditional delete failed: \n" + JSON.stringify(err, undefined, 2))
        } else {
            console.log("The conditional delete succeeded: " + JSON.stringify(data, undefined, 2))
        }
    })

}

export default function ConditionalDelete() {


    AWS.config.credentials.get(function(){
        increaseRating()
    });

    
  
    return (
        <div>
            Conditional Update
        </div>
    )
}
