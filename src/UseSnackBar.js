import NotificationBar from './NotificationBar'
import Button from '@material-ui/core/Button';

import React from 'react'

export default function UseSnackBar() {

    // console.log("in")
    const [notificationState, setNotificationState] = React.useState(false);

    const openNotification = () => {
        setNotificationState(true);
      };

    return (
        <div>
            <Button onClick={openNotification}>Open simple snackbar</Button>
            <NotificationBar notificationState={notificationState} setNotificationState={setNotificationState}/>
        </div>
    )
}
