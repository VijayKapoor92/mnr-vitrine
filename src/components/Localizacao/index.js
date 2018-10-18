import React, {Fragment} from 'react';
import {
    Typography,
    List,
    ListItem,
    ListItemIcon
} from '@material-ui/core';
import {
    LocationOn
} from '@material-ui/icons';
import Maps from '../Maps';
import {styles} from './styles';
import {withStyles} from '@material-ui/core/styles';

const Localizacao = ({classes, cliente}) => {
    return (
        <Fragment>
            <List>
                <ListItem className={classes.listItem}>
                    <ListItemIcon>
                        <LocationOn/>
                    </ListItemIcon>
                    <div className={classes.listItemBody}>
                        <Typography>{`${cliente.te_endereco} - ${cliente.te_complemento}`}</Typography>
                        <Typography className={classes.secondary}>{`${cliente.nm_bairro}, ${cliente.nm_cidade} - ${cliente.sg_uf}, ${cliente.nr_cep}`}</Typography>
                    </div>
                </ListItem>
            </List>
            <Maps
                isMarkerShown
                latitude={cliente.nr_latitude}
                longitude={cliente.nr_longitude}
            />
        </Fragment>
    )
};

export default withStyles(styles)(Localizacao);