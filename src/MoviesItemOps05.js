import React from 'react'
import AWS from "aws-sdk";




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
            console.log( "Unable to update rating: \n" + JSON.stringify(err, undefined, 2))
        } else {
            console.log("Deleted an array item in object " + JSON.stringify(data, undefined, 2))
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
