import React from 'react'
import AWS from "aws-sdk";

AWS.config.region = "ap-southeast-2"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.REACT_APP_COGNITO_IDENTITYPOOL_ID
});

var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: "pulse-tranparency" }
});

//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html
function createAlbum(albumName) {



    albumName = albumName.trim();

    if (!albumName) {
        return "Album names must contain at least one non-space character."
      }

      if (albumName.indexOf("/") !== -1) {
         return "Album names cannot contain slashes."
      }

      var albumKey = encodeURIComponent(albumName) + "/";

      //https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html
      //The HEAD operation retrieves metadata from an object without returning the object itself. This operation is useful if you're only interested in an object's metadata. 
      //To use HEAD, you must have READ access to the object

      let returnMessage

      s3.headObject({ Key: albumKey }, function(err, data) {
        if (!err) {
          console.log("Album already exists : ", err);
          return  
               
        }
        if (err.code !== "NotFound") {
          console.log( "There was an error creating your album: " +  err.message);
          return  
        }

       console.log(albumKey)
        // https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html
        // Adds an object to a bucket. You must have WRITE permissions on a bucket to add an object to it.
        // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
        s3.putObject({ Key: albumKey }, function(err, data) {
            if (err) {
              console.log("Error", err); 
              return      
            }
          
            console.log("Success . Created Album" + albumKey, data);  
            //viewAlbum(albumName);
          })
        })
    
}



export default function CreateS3Album() {

  const currentDate = new Date()
  const datetime = currentDate.getDate() + "-" +
               (currentDate.getMonth()+1) + "-" +
               currentDate.getFullYear() + "-" +   
               currentDate.getHours() + "-" +  
               currentDate.getMinutes() + "-" +  
               currentDate.getSeconds();

    //https://www.w3schools.com/jsref/jsref_random.asp
    const aRandom = Math.floor((Math.random() * 1000) + 1);

    const albumName = datetime + "-" + aRandom

    let message;

    AWS.config.credentials.get(function(){
      console.log(albumName)
   createAlbum(albumName)
  
  });

    
  return (
    <div>
       Create Album Page
    </div>
  )
}
