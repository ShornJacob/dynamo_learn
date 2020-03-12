import React from 'react'
import AWS from "aws-sdk";

AWS.config.region = "ap-southeast-2"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.REACT_APP_COGNITO_IDENTITYPOOL_ID
});


//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html
function addPhoto(file) {



    const bucketName = 'pulse-tranparency'
    const folderName = '12-3-2020-19-14-55-186'
  //console.log(file)

      var fileName = file.name;
      var folderKey = encodeURIComponent(folderName) + "/"

      console.log(folderKey)
      var fileKey = folderKey + fileName;

      console.log(fileKey)

      //https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3/ManagedUpload.html
      //Returns a 'thenable' promise.
           // Use S3 ManagedUpload class as it supports multipart uploads

 var upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: bucketName,
      Key: fileKey,
      Body: file,
    //   https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html
    //canned ACL
     // ACL: "public-read"
    }
  });

  //Returns a 'thenable' promise.
  var promise = upload.promise();

  promise.then(
    function(data) {
      console.log("Successfully uploaded photo.")
     // viewAlbum(albumName);
    },
    function(err) {
      console.log("There was an error uploading your photo: " + err.message)
    }
  );

}

export default function AddFilesToS3() {

   

    function onChangeHandler(event) {

        const files = event.target.files
        console.log(files)

       //https://stackoverflow.com/questions/40902437/cant-use-foreach-with-filelist
       //A FileList is not an Array, but it does conform to its contract (has length and numeric indices), so we can "borrow" Array methods:

       //The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
       Array.from(files).forEach(addPhoto);
    
    }

    return (
        <div>
            <h1>Add Files</h1>
            <input type="file" name="file" onChange={onChangeHandler} multiple/>
        </div>
    )
}
