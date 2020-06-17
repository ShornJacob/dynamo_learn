//https://www.npmjs.com/package/axios-mock-adapter
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import React from 'react'
import useAPIError from 'hooks/useAPIError'

export default function ContextError() {

    //can set state in snackbar using this function available from context
    const { addError } = useAPIError();

    //console.log(addError)

    // All requests using this instance will have a 2 seconds delay:
var mock = new MockAdapter(axios, { delayResponse: 1000 });



//mock out real jsonplceholder
// mock.onGet("https://jsonplaceholder.typicode.com/todos/1").reply(200, {
//     users: [{ id: 1, name: "John Smith" }],
//   });

//mock an error response
mock.onGet("https://jsonplaceholder.typicode.com/todos/1").reply(400,{} );


  async function onButtonClick(event) {
      try {
       await  axios.get("https://jsonplaceholder.typicode.com/todos/1").then(function (response) {
            console.log(response.data);
          });
      }catch(err) {
          //console.log("Error caught")
          addError("Error caught")
      }
   
  }


  //https://medium.com/yld-blog/handling-global-notifications-with-reacts-context-api-7d8135510d50
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={onButtonClick}>Primary</button>
        </div>
    )
}
