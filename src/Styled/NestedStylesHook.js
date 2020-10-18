import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: 'red',
    '& p': {
      margin: 0,
      color: 'green',
      '& span': {
        color: 'blue',
      },
    },
  },
});

export default function NestedStylesHook() {

    //Hook use
  const classes = useStyles();

  return (
    <div className={classes.root}>
      This is red since it is inside the root.
      <p>
        This is green since it is inside the paragraph{' '}
        <span>and this is blue since it is inside the span</span>
      </p>
    </div>
  );
}