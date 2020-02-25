import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {ddb_describetable} from "./dynamo_util";


//gets an array that added the value field from data to the attr arrays
function createParams(data, attr) {
  // console.log(data)
  //console.log(attr)
  // console.log(tableName)

  const keys = Object.keys(attr);
  let arrayContainer = [];

  for (const key of keys) {
    const anObj = attr[key];
    const newObj = { ...anObj, data: data[anObj.AttributeName] };
    arrayContainer = arrayContainer.concat(newObj);
  }

  console.log(arrayContainer);
}

//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write.html
export default function PutItem() {
  const [tableName] = useState("name1");

  const [tableDesc, setTableDesc] = useState([]);

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    createParams(data, tableDesc);
  };

  //https://github.com/facebook/react/issues/14326
  useEffect(() => {
    //first define an async function
    async function fetchMyAPI() {
        await ddb_describetable(tableName, setTableDesc);
    }

    //then use it
    fetchMyAPI();
    //re render only if tablename changes
  }, [tableName]);
  

  //console.log(tableDesc)
  const formItems = tableDesc.map( (attrItem,index) => (
    <fieldset key={index}>
      <label htmlFor={attrItem.AttributeName}>{attrItem.AttributeName} </label>
      <input
        type="text"
        id={attrItem.AttributeName}
        name={attrItem.AttributeName}
        ref={register({ required: true })}
      />
    </fieldset>
  ));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formItems}

      <br />

      <input type="submit" value="Put Item" />
    </form>
  );
}
