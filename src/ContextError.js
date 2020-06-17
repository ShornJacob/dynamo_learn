//https://www.npmjs.com/package/axios-mock-adapter
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import React from 'react'

export default function ContextError() {

    var mock = new MockAdapter(axios);

    //https://www.npmjs.com/package/axios-mock-adapter
mock.onGet("/users").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
  });


  function onButtonClick(event) {
    axios.get("/users").then(function (response) {
        console.log(response.data);
      });
  }


  //https://medium.com/yld-blog/handling-global-notifications-with-reacts-context-api-7d8135510d50
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={onButtonClick}>Primary</button>
        </div>
    )
}
