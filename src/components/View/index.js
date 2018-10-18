import React from 'react';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

const View = ({classes, children}) => {
    return (
        <div className={classes.root}>
            <div className={classes.appFrame}>
                {children}
            </div>
        </div>
    )
};

export default withStyles(styles)(View);