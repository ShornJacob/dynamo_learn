import React from "react";
import { useForm } from 'react-hook-form'

//https://docs.amazonaws.cn/en_us/amazondynamodb/latest/APIReference/API_AttributeValue.html
//https://docs.aws.amazon.com/cli/latest/reference/dynamodb/create-table.html


export default function() {

  const { register, handleSubmit } = useForm()
  const onSubmit = data => { console.log(data) }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       <label htmlFor="tablename">Table Name:</label>
       <input type="text" id="tablename" name="tablename" ref={register({ required: true })}/><br/><br/>

       <label htmlFor="attrid1">Attribute ID: </label>
       <input type="text" id="attrid1" name="attrid1" ref={register({ required: true })}/>

       <label htmlFor="attrtype1">Type</label>

       <select id="attrtype1" name="attrtype1" ref={register}>
          <option value="N">Number</option>
           <option value="S">String</option>
        </select>

        <label>Used as Primary or Hash</label> <br/><br/>

        <label htmlFor="attrid2">Attribute ID: </label>
       <input type="text" id="attrid2" name="attrid2" ref={register({ required: true })}/>

       <label fhtmlFor="attrtype2">Type</label>

       <select id="attrtype2" name="attrtype2" ref={register}>
          <option value="N">Number</option>
           <option value="S">String</option>
        </select>

        <br/><br/>
      
      
 
 
      <input type="submit" />
    </form>
  );
}
