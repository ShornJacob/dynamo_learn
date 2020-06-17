import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function NotificationBar({notificationState,setNotificationState}) {
  // const [notificationState, setNotificationState] = React.useState(false);

  // const handleClick = () => {
  //   setNotificationState(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setNotificationState(false);
  };
  console.log(notificationState)

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={notificationState}
        autoHideDuration={6000}
        // onClose={handleClose}
        message="Note archived"
        action={
          <React.Fragment>
            {/* <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button> */}
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}