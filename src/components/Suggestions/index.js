import React, { Fragment } from 'react';
import classNames from 'classnames';
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Paper
} from '@material-ui/core';
import {
    Business
} from '@material-ui/icons';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';
import {MNR_LOGO_PATH, MNR_NO_LOGO_PATH, MNR_URL} from '../../utils/constants';
/*MNR_URL + emp.url*/
const Suggestions = ({open, search, empresas, classes, onClickSuggestion}) => (
    <Fragment>
        {empresas.length > 0 && (
            <Paper elevation={8} className={classNames(classes.paper, open && classes.display)}>
                <List>
                    {empresas.map(emp => (
                        <a key={emp.id_cliente} href onClick={e => onClickSuggestion(e, MNR_URL + emp.url)} className={classes.link}>
                            <ListItem className={classes.listitem}>
                                <ListItemAvatar>
                                    {emp.id === null ? (
                                        <Avatar>
                                            <Business/>
                                        </Avatar>
                                    ) : (
                                        <Avatar src={`${MNR_LOGO_PATH}/${emp.id}-logo.jpg`} alt="Logo" imgProps={{onError: e => e.target.src = MNR_NO_LOGO_PATH}}/>
                                    )}
                                </ListItemAvatar>
                                <ListItemText
                                    primary={emp.value}
                                    secondary={`${emp.uf} - ${emp.razao}`}
                                />
                            </ListItem>
                        </a>
                    ))}
                </List>
            </Paper>
        )}
    </Fragment>
);

export default withStyles(styles)(Suggestions);