import React from "react";
import AWS from "aws-sdk";

AWS.config.region = "ap-southeast-2"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.REACT_APP_COGNITO_IDENTITYPOOL_ID
});

async function viewAlbum(folderName) {


  
  var s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: "pulse-tranparency" }
  });

  var folderKey = encodeURIComponent(folderName) + "/";

  let fileLinks

  s3.listObjects({ Prefix: folderKey }, function(err, data) {
    if (err) {
      console.log("There was an error viewing your album: " + err.message);
      return
    }

    // 'this' references the AWS.Response instance that represents the response
    var href = this.request.httpRequest.endpoint.href;

    //value of href https://s3.ap-southeast-2.amazonaws.com/
    console.log(href);

    var bucketUrl = href + "pulse-tranparency/" 

    console.log(bucketUrl);

    const files = data.Contents;

    //0: {Key: "12-3-2020-19-14-55-186/Chow.docx", LastModified: Fri Mar 13 2020 11:51:28 GMT+1300 (New Zealand Daylight Time), ETag: ""f7204d337320bd7a912f1fbfdc7c0a01"", Size: 14055, StorageClass: "STANDARD", …}
    console.log(files);

  fileLinks = files.map( file => {
        var fileKey = file.Key;
        var fileURL= bucketUrl + encodeURIComponent(fileKey);

        // console.log(fileKey)
        // console.log(fileURL)
        return (
            <a href={fileURL}>{fileKey}</a>
        )
    })
  })

  console.log(fileLinks)
  return fileLinks
}

export default async function ViewFolderInS3() {
  const fileLinks = await viewAlbum("12-3-2020-19-14-55-186");

  console.log(fileLinks)
  return <div>display S3 Folder</div>;
}
