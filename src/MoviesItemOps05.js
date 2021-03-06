import React from 'react'
import AWS from "aws-sdk";


//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.Js.03.html

function increaseRating() {


    console.log(AWS.config.credentials)

    var docClient = new AWS.DynamoDB.DocumentClient();

    var table = "Movies";
    var year = 2015;
    var title = "The Big New Movie";

    //possibloe errors
    //"message": "The document path provided in the update expression is invalid for update",
    //message": "The provided expression refers to an attribute that does not exist in the item",
    var params = {
        TableName:table,
        Key:{
            "year": year,
            "title": title
        },
        UpdateExpression: "remove info.actors[0]",
        ConditionExpression: "size(info.actors) > :num",
        ExpressionAttributeValues:{
            ":num":3
        },
        ReturnValues:"UPDATED_NEW"
    };

    docClient.update(params, function(err, data) {
        if (err) {
            console.log( "The conditional update failed: \n" + JSON.stringify(err, undefined, 2))
        } else {
            console.log("The conditional update succeeded: " + JSON.stringify(data, undefined, 2))
        }
    })

}

export default function MoviesItemOps05() {


    AWS.config.credentials.get(function(){
        increaseRating()
    });

    
  
    return (
        <div>
            Conditional Update
        </div>
    )
}
