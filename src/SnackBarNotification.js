import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useAPIError from 'hooks/useAPIError'

export default function SnackBarNotification() {
  


//error and remove error accesed from context
//set error is accesed from component that outputs error
//{errorState : false, errorMessage: ""}
const { error, removeError } = useAPIError();

//console.log(error)

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={error.errorState}
        onClose={removeError}
        message={error.errorMessage}
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