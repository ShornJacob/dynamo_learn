import React, { useState } from "react";
import AWS from "aws-sdk";

//https://aws.amazon.com/blogs/developer/support-for-promises-in-the-sdk/

AWS.config.region = "ap-southeast-2"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.REACT_APP_COGNITO_IDENTITYPOOL_ID
});

const bucketName = 'pulse-tranparency'
const folderName = '12-3-2020-19-14-55-186'
const folderKey = encodeURIComponent(folderName) + "/"

async function viewFileList(setFileList) {



  const FileListKey = encodeURIComponent(folderName) + "/";

    //MaxKeys
//Sets the maximum number of keys returned in the response. The response might contain fewer keys but will never contain more.
const params = {
  Bucket: bucketName,
  Prefix: FileListKey
 };

  const s3 = new AWS.S3()
  //https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjectsV2-property
  const filelist = await s3.listObjectsV2(params).promise()
  console.log(filelist.Contents)

 setFileList(filelist.Contents)
  
}

//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html
async function addPhoto(file) {

    
 
      var fileName = file.name;
     

      console.log(folderKey)
      var fileKey = folderKey + fileName;

      console.log(fileKey)

   

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


  console.log(managedUpload)

  return managedUpload
}


 
export default function AddFilesToS3() {

  const [filelist, setFileList] = useState([]);
   

    function onChangeHandler(event) {

        const files = event.target.files
        console.log(files)

 
       Array.from(files).forEach(addPhoto);

       viewFileList(setFileList)
    
    }

    console.log(filelist)
    return (
        <div>
           <h1>Upload Files</h1>
   
            <input type="file" name="file" onChange={onChangeHandler} multiple/>

            { filelist.map( file => <li>{file.Key}</li>)}
        </div>
    )
}
