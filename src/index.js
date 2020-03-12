import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router, Link } from "@reach/router";
import AWS from "aws-sdk";


import GetTableItem from './GetTableItem'
import PutTableItem from './PutTableItem'
import UpdateTableItem from './UpdateTableItem'
import MoviesItemOps04 from './MoviesItemOps04'
import MoviesItemOps05 from './MoviesItemOps05'
import ConditionalDelete from './ConditionalDelete'

import CreateS3Album from './CreateS3Album'


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
        <Link to="/updateitem">Update Item</Link>
        <Link to="/atomiccounter">Atomic Counter</Link>
        <Link to="/conditionalupdate">Conditional update</Link>
        <Link to="/conditionaldelete">Conditional delete</Link>
      </nav>
      <nav>
        <Link to="/creates3folder">Create folder</Link>{" "}
      
      </nav>

    <Router>
      <GetTableItem path="/getitem" />
      <PutTableItem path="/putitem" />
      <UpdateTableItem path="/updateitem" />
      <CreateS3Album path="/creates3folder" />
    </Router>

    </div>)
 }

ReactDOM.render(<App/>, document.getElementById('root'));

//f you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
