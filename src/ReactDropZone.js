//https://react-dropzone.js.org/
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import Box from '@material-ui/core/Box';


export default function MyDropzone() {

  //useCallback
  //Pass an inline callback and an array of dependencies
  //memoized
  //To store (the result of a computed expression) so that it can be subsequently retrieved without repeating the computation.
  //useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
  //: every value referenced inside the callback should also appear in the dependencies array.

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files

    console.log(acceptedFiles)
  }, [])
  
  //onDrop already decalred wihich is a useCallBack, passed an an object

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  //{OnKeyDown: f, onfocus: f, ...}
  console.log(getRootProps())

  //{onChnage:f, onClick:f}
  console.log(getInputProps())

  console.log(isDragActive)

  return (
    // <div className={classes.dropzoneContainer}>
    
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <Box p={1} border={1} boxShadow={10}  width={1/4}>
          <p>Click to select files...</p>
          </Box>
      }
    </div>

  )
}