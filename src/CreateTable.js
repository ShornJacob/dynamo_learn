import React from "react";
import { useForm } from 'react-hook-form'
import AWS from "aws-sdk";

AWS.config.region = "ap-southeast-2"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.REACT_APP_COGNITO_IDENTITYPOOL_ID
});


//https://docs.amazonaws.cn/en_us/amazondynamodb/latest/APIReference/API_AttributeValue.html
//https://docs.aws.amazon.com/cli/latest/reference/dynamodb/create-table.html
//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.CreateTable

function createParams(data) {
  return   {
    AttributeDefinitions: [
      {
        AttributeName: data.attrid1,
        AttributeType: data.attrname1
      },
      {
        AttributeName: data.attrid2,
        AttributeType: data.attrname2
      }
    ],
    // https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-keyschema.html
    //https://stackoverflow.com/questions/30866030/number-of-attributes-in-key-schema-must-match-the-number-of-attributes-defined-i
    //An array of attributes that describe the key schema for the table and indexes.

    KeySchema: [
      {
        AttributeName: data.attrid1,
        KeyType: "HASH"
      },
      {
        AttributeName: data.attrid2,
        KeyType: "RANGE"
      }
    ],
    //https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html
    //The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ThrottlingException
    //he maximum number of writes consumed per second before DynamoDB returns a ThrottlingException.
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1
    },
   
    TableName: data.tablename,

    //https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_StreamSpecification.html
    //A DynamoDB stream is an ordered flow of information about changes to items in a DynamoDB table. When you enable a stream on a table, DynamoDB captures information about every modification to data items in the table.
    StreamSpecification: {
      StreamEnabled: false
    }
  }
}

function createTableinDynamo(params) {
 

  console.log(process.env)

  AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack)
    else {
      const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
      ddb.createTable(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Table Created", data);
        }
      })
    }
  })


}


export default function() {

  const { register, handleSubmit } = useForm()

   function onSubmit(data) { 
    console.log(data)
    const params = createParams(data)
    console.log(params)
    createTableinDynamo(params)

   }

  // Create the DynamoDB service object
 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       <label htmlFor="tablename">Table Name:</label>
       <input type="text" id="tablename" name="tablename" ref={register({ required: true })}/><br/><br/>

       <label htmlFor="attrid1">Attribute ID: </label>
       <input type="text" id="attrid1" name="attrid1" ref={register({ required: true })}/>

       <label htmlFor="attrname1">Type</label>

       <select id="attrname1" name="attrname1" ref={register}>
          <option value="N">Number</option>
           <option value="S">String</option>
        </select>

        <label>Used as Primary or Hash</label> <br/><br/>

        <label htmlFor="attrid2">Attribute ID: </label>
       <input type="text" id="attrid2" name="attrid2" ref={register({ required: true })}/>

       <label htmlFor="attrname2">Type</label>

       <select id="attrname2" name="attrname2" ref={register}>
          <option value="N">Number</option>
           <option value="S">String</option>
        </select>

        <br/><br/>
      
      
 
 
      <input type="submit" />
    </form>
  );
}
