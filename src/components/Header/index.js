import React, {Fragment} from 'react';
import NavBar from '../../components/NavBar';
import {MNR_LOGO_PATH, MNR_NO_LOGO_PATH} from '../../utils/constants';
import classNames from 'classnames';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import {
    List,
    ListItem,
    ListItemAvatar,
    Typography,
    Button
} from '@material-ui/core';

import {
    Phone
} from '@material-ui/icons';
import {mask_cnpj, mask_telefone} from '../../utils';

const Cover = withStyles(styles)(({classes}) =>
    <div className={classes.appHeaderCover} />
);

const Cliente = withStyles(styles)(({classes, cliente, open}) => {
    const { nm_fantasia, nm_razao_social, nr_cgc, nr_ie, nm_logo } = cliente;

    return (
        <List className={classNames(classes.headerPresentation, {
            [classes.appBarShift]: open,
            [classes[`appBarShift-left`]]: open,
        })}>
            <ListItem>
                {nm_logo && nm_logo !== null ? (

                        <img src={`${MNR_LOGO_PATH}/${nm_logo}-logo.jpg`} alt="Logo" style={{borderRadius: 12}}/>

                ) : (
                    <ListItemAvatar style={{width: 95, height: 95, borderRadius: '50%', objectFit: 'cover', backgroundColor: grey[500]}}>
                        <img src={MNR_NO_LOGO_PATH} alt="Logo" />
                    </ListItemAvatar>
                )}
                <div style={{flex: '1 1 auto', minWidth: 0, padding: '0 16px'}}>
                    <Typography variant="subheading" style={{color: 'black', fontSize: 18}} noWrap>{nm_fantasia}</Typography>
                    <Typography variant="subheading" style={{color: 'black'}} noWrap>{nm_razao_social}</Typography>
                    <Typography variant="subheading" style={{color: 'black'}} noWrap>{mask_cnpj(nr_cgc)}</Typography>
                    <Typography variant="subheading" style={{color: 'black'}} noWrap>{nr_ie}</Typography>
                </div>
            </ListItem>
        </List>
    )
});

const Header = ({classes, loading, open, onDrawerOpen, onDrawerClose, cliente, onPopoverOpen, onPopoverClose, openPopover, anchorEl, onFocusSearch, onBlurSearch, search, anchorMenu, onOpenMenu, onCloseMenu, menu, empresas, produtos, onChangeTerm, term, openSuggestions, onOpenDialog, onClickCadastrar, onCloseSuggestions, onLigarCliente, onClickSuggestion, onPressEnter}) => {
    return (
        <Fragment>
            <NavBar
                open={open}
                openSuggestions={openSuggestions}
                openPopover={openPopover}
                anchorEl={anchorEl}
                anchorMenu={anchorMenu}
                menu={menu}
                loading={loading}
                search={search}
                term={term}
                empresas={empresas}
                onBlurSearch={onBlurSearch}
                onFocusSearch={onFocusSearch}
                onChangeTerm={onChangeTerm}
                onClickCadastrar={onClickCadastrar}
                onCloseMenu={onCloseMenu}
                onCloseSuggestions={onCloseSuggestions}
                onDrawerOpen={onDrawerOpen}
                onOpenDialog={onOpenDialog}
                onOpenMenu={onOpenMenu}
                onPopoverClose={onPopoverClose}
                onPopoverOpen={onPopoverOpen}
                onClickSuggestion={onClickSuggestion}
                onPressEnter={onPressEnter}
            />
            {!(cliente.cs_perfil_publico === '0' || (cliente.situacao === '0' || cliente.situacao === '3')) && (
                <div className={classes.appHeader}>
                    <Cover />
                    <div style={{width: '80%', minWidth: 0}}>
                        <Cliente
                            open={open}
                            cliente={cliente}
                        />
                    </div>
                    <div style={{width: '20%', display: 'flex', height: '100%', justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', top: 0, right: 15}}>
                        <Button variant="extendedFab" className={classes.extendedButton} onClick={() => onLigarCliente(cliente.nr_telefone)}>
                            <Phone className={classes.extendedIcon}/>
                            {mask_telefone(cliente.nr_telefone)}
                        </Button>
                    </div>
                </div>
            )}
        </Fragment>
    )
};

export default withStyles(styles)(Header);