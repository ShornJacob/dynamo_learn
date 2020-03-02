import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router, Link } from "@reach/router";
import AWS from "aws-sdk";


import GetTableItem from './GetTableItem'
import PutTableItem from './PutTableItem'

AWS.config.region = "ap-southeast-2"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.REACT_APP_COGNITO_IDENTITYPOOL_ID
});

function App ({children})  {

    return(
    <div>
      <nav>
        <Link to="/createtable">Create Table</Link>{" "}
        <Link to="/putitem">Put Item</Link>
        <Link to="/listtables">Put Item</Link>
        <Link to="/getitem">Get Item</Link>
        <Link to="/putitem">Put Item</Link>
      </nav>
      <Router>
      <GetTableItem path="/getitem" />
      <PutTableItem path="/putitem" />

   
    </Router>
    </div>)
 }

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
