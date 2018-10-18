import React from 'react';
import Spacer from '../Spacer';
import Contato from '../Contato';
// import Localizacao from '../Localizacao';
import {
    Drawer,
    IconButton,
    Typography,
    ListItemIcon
} from '@material-ui/core';
import {
    ContactPhone,
    ChevronLeft
} from '@material-ui/icons';
import {styles} from './styles.js';
import {withStyles} from '@material-ui/core/styles';

const Header = withStyles(styles)(({classes, onDrawerClose}) => {
    return (
        <div className={classes.drawerHeader}>
            <ListItemIcon style={{paddingLeft: 5}}>
                <ContactPhone />
            </ListItemIcon>
            <Typography variant="title" noWrap>
                Contato
            </Typography>
            <Spacer />
            <IconButton onClick={() => onDrawerClose()}>
                <ChevronLeft />
            </IconButton>
        </div>
    )
});

const Sidebar = ({classes, cliente, open, onDrawerClose}) => {
    const { cs_perfil_publico, situacao } = cliente;
    const show = !(cs_perfil_publico === '0' || (situacao === '0' || situacao === '3'));
    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Header onDrawerClose={onDrawerClose} />
            {show && (
                <Contato cliente={cliente}/>
            )}
        </Drawer>
    )
};

export default withStyles(styles)(Sidebar);