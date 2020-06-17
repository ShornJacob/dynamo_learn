import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useAPIError from 'hooks/useAPIError'

export default function SnackBarNotification() {
  


//error and remove error accesed from context
//set error is accesed from component that outputs error
const { error, removeError } = useAPIError();


//cant set deault state here, its already been rendered
const [open, setOpen] = React.useState(false);


//move open variable to context
console.log(open)
console.log(error)


//check for error and set open
// if (error == null) {
//     setOpen(true)
// }


  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        onClose={removeError}
        message={error}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={removeError}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}