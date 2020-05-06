import AWS from "aws-sdk"

AWS.config.region = "ap-southeast-2" // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.REACT_APP_COGNITO_IDENTITYPOOL_ID
});

console.log(process.env.REACT_APP_COGNITO_IDENTITYPOOL_ID)

export default AWS