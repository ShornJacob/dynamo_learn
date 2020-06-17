import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router, Link } from "@reach/router";


import GetTableItem from './GetTableItem'
import PutTableItem from './PutTableItem'
import UpdateTableItem from './UpdateTableItem'
// import MoviesItemOps04 from './MoviesItemOps04'
// import MoviesItemOps05 from './MoviesItemOps05'
// import ConditionalDelete from './ConditionalDelete'

import CreateS3Album from './CreateS3Album'
import AddFileToS3 from './AddFileToS3'
import AddFilesToS3 from './AddFilesToS3'
import ViewFolderInS3 from './ViewFolderInS3'

import DropzoneDialogExample from './DropZone'
import ReactDropZone from './ReactDropZone'
import UseErrorBoundary from './UserErrorBoundary'
import BsPagination from './BsPagination'
import UseSnackBar from './UseSnackBar'
import ContextError from 'ContextError';
//import APIErrorContext from './APIErrorContext'
// import from './contexterror'





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
        <Link to="/creates3folder">Create folder</Link>
        <Link to="/addfiletos3">Add file to s3</Link>
        <Link to="/addfilestos3">Add files to s3</Link>
        <Link to="/viewfolderins3">View Folder in S3</Link>
        <Link to="/s3axios">S3 axios</Link>
        
      </nav>

      <nav>
      <Link to="/dropzone">Drop Zone</Link>
      <Link to="/reactdropzone">React Drop Zone</Link>
      <Link to="/errorboundary">Error Boundary</Link>
      <Link to="/bootpagination">Bootstrap Pagination</Link>
      <Link to="/snackbar">Notification Bar</Link>
      </nav>

      <nav>
      <Link to="/contexterror">Context Error</Link>

      </nav>

    <Router>
      <GetTableItem path="/getitem" />
      <PutTableItem path="/putitem" />
      <UpdateTableItem path="/updateitem" />
      <CreateS3Album path="/creates3folder" />
      <AddFileToS3 path="/addfiletos3" />
      <AddFilesToS3 path="/addfilestos3" />
      <ViewFolderInS3 path="/viewfolderins3" />
      <DropzoneDialogExample path="/dropzone" />
      <ReactDropZone path="/reactdropzone" />
      <UseErrorBoundary path="/errorboundary" />
      <BsPagination path="/bootpagination" />
      <UseSnackBar path="/snackbar" />
      <ContextError path="/contexterror" />
    </Router>

    </div>)
 }

ReactDOM.render(<App/>, document.getElementById('root'));

//f you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
