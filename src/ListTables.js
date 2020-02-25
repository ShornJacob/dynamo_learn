import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";

export default function ListTables() {

    //https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-examples-using-tables.html
    //https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#listTables-property
    const { register, handleSubmit } = useForm();

    const [tableList, setTableList] = useState([]);

    const onSubmit = data => {
        console.log(data)
      };


      useEffect(() => {
        //first define an async function
        async function fetchMyAPI() {
          const ddbOutput = await ddb_describetable();
          setTableList(ddbOutput)
        }
    
        //then use it
        fetchMyAPI();
      }, []);

      console.log(tableList)
    return (

    <div>
     
    </div>
  
>
    )
}
