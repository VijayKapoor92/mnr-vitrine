import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';

export default ({divider}) => {
    return (
        <Fragment>
            <div style={{flex: 1}}/>
            {divider && (
                <Divider light/>
            )}
        </Fragment>
    )
}