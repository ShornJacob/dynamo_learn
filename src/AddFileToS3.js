import React from 'react'
import AWS from "aws-sdk";

AWS.config.region = "ap-southeast-2"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.REACT_APP_COGNITO_IDENTITYPOOL_ID
});



//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html
async function addPhoto(bucketName,folderName,files) {




    if (!files.length) {
        console.log("Please choose a file to upload first.")
      }

      var file = files[0];
      var fileName = file.name;
      var folderKey = encodeURIComponent(folderName) + "/"

      console.log(folderKey)
      var fileKey = folderKey + fileName;

      console.log(fileKey)

      //https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3/ManagedUpload.html
      //Returns a 'thenable' promise.
           // Use S3 ManagedUpload class as it supports multipart uploads

           ////Returns a 'thenable' promise.
 const managedUpload = await new AWS.S3.ManagedUpload({
    params: {
      Bucket: bucketName,
      Key: fileKey,
      Body: file,
    //   https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html
    //canned ACL
     // ACL: "public-read"
    }
  }).promise()


  //promises are thenable and can be awaited on

  // promise.then(
  //   function(data) {
  //     console.log("Successfully uploaded photo.")
  //    // viewAlbum(albumName);
  //   },
  //   function(err) {
  //     console.log("There was an error uploading your photo: " + err.message)
  //   }
  // );

 //console.log(managedUpload)

 return managedUpload


}



export default function AddFileToS3() {

    function onChangeHandler(event) {

        console.log(event.target.files[0])
        addPhoto('pulse-tranparency','12-3-2020-19-14-55-186',event.target.files)
    
    }

    return (
        <div>
            <input type="file" name="file" onChange={onChangeHandler}/>
        </div>
    )
}
