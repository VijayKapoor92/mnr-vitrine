import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Suggestions from '../../components/Suggestions';
import {MNR_HOST, MNR_DRAWER_WIDTH} from '../../utils/constants';
import classNames from 'classnames';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Tooltip,
    Popover,
    TextField,
    InputAdornment,
    Menu,
    MenuItem,
    Fade,
    CircularProgress
} from '@material-ui/core';
import {
    Share,
    ContactPhone,
    PersonAdd,
    ArrowDropDown
} from '@material-ui/icons';
// import { styles } from './styles';
import {blue, grey, red} from '@material-ui/core/colors/index';
import { withStyles } from '@material-ui/core/styles';

const anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
};
const transformOrigin = {
    vertical: 'top',
    horizontal: 'center',
};

export const styles = theme => ({
    appHeader: {
        position: 'absolute',
        width: '100%',
        height: 270,
        backgroundImage: 'url(http://file.wantu8.com/wan007/im3/a15955.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 300px'
    },
    appHeaderCover: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 270,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    appFrame: {
        height: window.innerHeight,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width', 'box-shadow'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        boxShadow: 'none',
        backgroundColor: '#283752'
    },
    toolbar: {
        justifyContent: 'space-between',
    },
    btnPrimary: {
        fontSize: 11,
        color: blue[500],
        transition: 'color 250ms',
        '&:hover': {
            backgroundColor: 'rgba(33, 150, 243, 0.5)',
            color: 'white'
        }
    },
    btnSecondary: {
        marginRight: 10,
        fontSize: 11,
        color: red[600],
        borderColor: red[600],
        transition: 'background-color 250ms, border-color 250ms',
        '&:hover': {
            backgroundColor: 'rgba(198, 40, 40, 0.2)',
            borderColor: red[600],
        }
    },
    headerPresentation: {
        position: 'absolute',
        top: 75,
        zIndex: 10,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShadow: {
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    },
    appBarShift: {
        width: `calc(100% - ${MNR_DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'appBarShift-left': {
        marginLeft: MNR_DRAWER_WIDTH,
    },
    'appBarShift-right': {
        marginRight: MNR_DRAWER_WIDTH,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20
    },
    hide: {
        display: 'none',
    },
    extendedButton: {
        margin: theme.spacing.unit,
        backgroundColor: blue[500],
        color: 'white',
        position: 'absolute',
        top: 85,
        right: 30,
        zIndex: 1101,
        height: 60,
        width: 60,
        fontSize: 20,
        '&:hover':{
            backgroundColor: blue[800]
        }
    },
    extendedIcon: {
        fontSize: 35,
        color: 'white'
    },
    paper: {
        padding: theme.spacing.unit,
        '&:before': {
            content: "",
            position: 'absolute',
            left: '10%',
            top: '-20px',
            width: 0,
            height: 0,
            border: '10px solid transparent',
            borderBottom: '10px solid #3F51B5'
        }
    },
    textfield: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'rgba(192, 192, 192, 0.3)',
        borderRadius: 20,
        transition: 'background-color .3s linear',
        '&:hover':{
            backgroundColor: 'white',
        }
    },
    searchMnrField: {
        backgroundColor: 'white'
    },
    iconDefault: {
        color: 'rgba(192, 192, 192, 0.3)',
        transition: 'color .5s linear'
    },
    iconActive: {
        color: 'rgba(192, 192, 192, 1)'
    },
    menuItem: {
        '&:focus': {
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    primary: {},
    icon: {},
    popover: {
        pointerEvents: 'none',
        top: 5
    }
});

const NavBar = ({classes, menu, open, search, openSuggestions, openPopover, anchorEl, anchorMenu, loading, term, empresas, onDrawerOpen, onFocusSearch, onBlurSearch, onChangeTerm, onCloseSuggestions, onPopoverClose, onPopoverOpen, onCloseMenu, onOpenMenu, onOpenDialog, onClickCadastrar, onClickSuggestion, onPressEnter}) => {
    const InputProps = {
        disableUnderline: true,
        endAdornment: (
            <InputAdornment position="end" style={{visibility: loading && term.length > 0 ? 'visible' : 'hidden'}}>
                <CircularProgress style={{color: grey[500]}} size={16}/>
            </InputAdornment>
        ),
        startAdornment: (
            <Fragment>
                <InputAdornment position="start" aria-owns={anchorMenu ? 'simple-menu' : null} onClick={e => onOpenMenu(e)}>
                    {menu === 1 ? (
                        <Fragment>
                            <img src={`${MNR_HOST}/images/industria.png`} alt="Indica empresa" />
                            <ArrowDropDown style={{fontSize: 16, marginLeft: 3}}/>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <img src={`${MNR_HOST}/images/product.png`} alt="Indica produto" />
                            <ArrowDropDown style={{fontSize: 16, marginLeft: 3}}/>
                        </Fragment>
                    )}
                </InputAdornment>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorMenu}
                    open={Boolean(anchorMenu)}
                    onClose={() => onCloseMenu()}
                    TransitionComponent={Fade}
                    style={{paddingTop: 0, paddingBottom: 0, marginTop: 35, marginLeft: -10}}
                >
                    <MenuItem onClick={() => onCloseMenu(1)} style={{backgroundColor: menu === 1 ? blue[500] : 'inherit'}}>Empresas</MenuItem>
                    <MenuItem onClick={() => onCloseMenu(2)} style={{backgroundColor: menu === 2 ? blue[500] : 'inherit'}}>Produtos</MenuItem>
                </Menu>
            </Fragment>
        )
    };

    return (
        <AppBar
            className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
                [classes[`appBarShift-left`]]: open,
            })}
        >
            <Toolbar className={classes.toolbar}>
                <div style={{display: 'inline-flex', flexGrow: 1}}>
                    <Tooltip title="Contato" placement="bottom">
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={() => onDrawerOpen()}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <ContactPhone />
                        </IconButton>
                    </Tooltip>
                    <div style={{alignSelf: 'center'}}>
                        <img src={`${MNR_HOST}/imagens/logo.png`} alt="Logo" width="50" height="32" />
                    </div>
                </div>
                <div style={{flexGrow: 1, position: 'relative'}}>
                    <TextField
                        InputProps={InputProps}
                        className={classNames(classes.textfield, search && classes.searchMnrField)}
                        placeholder={menu === 1 ? "Pesquisar por empresas..." : "Pesquisar por produtos..."}
                        onFocus={e => onFocusSearch(e)}
                        onBlur={e => onBlurSearch(e)}
                        onChange={e => onChangeTerm(e)}
                        onKeyPress={e => onPressEnter(e, menu)}
                    />
                    {menu === 1 && (
                        <Suggestions
                            open={openSuggestions}
                            empresas={empresas}
                            onCloseSuggestions={onCloseSuggestions}
                            onClickSuggestion={onClickSuggestion}
                        />
                    )}
                </div>
                <div style={{flexGrow: 1, display: 'flex', justifyContent: 'flex-end'}}>
                    <Button
                        classes={{
                            outlinedSecondary: classes.btnSecondary
                        }}
                        variant="outlined"
                        color="secondary"
                        aria-label="Compartilhar"
                        aria-owns={openPopover ? 'mouse-over-popover' : null}
                        aria-haspopup="true"
                        onMouseEnter={onPopoverOpen}
                        onMouseLeave={onPopoverClose}
                        onClick={() => onOpenDialog()}
                        size="small"
                    >
                        Compartilhar
                        <Share style={{marginLeft: 5, fontSize: 16}}/>
                    </Button>
                    <Popover
                        id="mouse-over-popover"
                        className={classes.popover}
                        classes={{
                            paper: classes.paper
                        }}
                        open={openPopover}
                        anchorEl={anchorEl}
                        anchorOrigin={anchorOrigin}
                        transformOrigin={transformOrigin}
                        onClose={onPopoverClose}
                        marginThreshold={24}
                        disableRestoreFocus
                    >
                        <div className={classes.pointer} />
                        <Typography>Compartilhe sua página com seus contatos, é fácil, clique em mim!</Typography>
                    </Popover>
                    <Button
                        classes={{
                            outlinedPrimary: classes.btnPrimary
                        }}
                        variant="outlined"
                        color="primary"
                        aria-label="Cadastrar"
                        size="small"
                        onClick={() => onClickCadastrar()}
                    >
                        Cadastre-se
                        <PersonAdd style={{marginLeft: 5, fontSize: 16}}/>
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
};

NavBar.propTypes = {
    menu: PropTypes.number.isRequired,
    open: PropTypes.bool.isRequired,
    openSuggestions: PropTypes.bool.isRequired,
    openPopover: PropTypes.bool.isRequired,
    search: PropTypes.bool.isRequired,
    anchorEl: PropTypes.object,
    anchorMenu: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    term: PropTypes.string.isRequired,
    empresas: PropTypes.array.isRequired,
    onDrawerOpen: PropTypes.func.isRequired,
    onFocusSearch: PropTypes.func.isRequired,
    onBlurSearch: PropTypes.func.isRequired,
    onChangeTerm: PropTypes.func.isRequired,
    onCloseSuggestions: PropTypes.func.isRequired,
    onPopoverClose: PropTypes.func.isRequired,
    onPopoverOpen: PropTypes.func.isRequired,
    onCloseMenu: PropTypes.func.isRequired,
    onOpenMenu: PropTypes.func.isRequired,
    onOpenDialog: PropTypes.func.isRequired,
    onClickCadastrar: PropTypes.func.isRequired
};

export default withStyles(styles)(NavBar);