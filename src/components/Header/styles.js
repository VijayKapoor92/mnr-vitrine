import {blue} from '@material-ui/core/colors/index';
import {MNR_DRAWER_WIDTH} from '../../utils/constants';
/*
* nova imagem de background
* color: white
* http://primuladirestelli.it/wp-content/uploads/2017/02/background-service.jpg
* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUwR3xb3aevb0khBlWEEi5ODDgsfua-3B5XBwBiig-cIIskim
* */
export const styles = theme => ({
    appHeader: {
        position: 'absolute',
        width: '100%',
        height: 150,
        top: 56,
        backgroundImage: `url(http://primuladirestelli.it/wp-content/uploads/2017/02/background-service.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 300px'
    },
    appHeaderCover: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 150,
        backgroundColor: 'rgba(0, 0, 0, .1)'
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
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
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
        color: blue[500],
        transition: 'color 250ms',
        '&:hover': {
            backgroundColor: 'rgba(33, 150, 243, 0.5)',
            color: 'white'
        }
    },
    headerPresentation: {
        top: 15,
        zIndex: 10,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
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
        height: 60,
        fontSize: 20,
        '&:hover':{
            backgroundColor: blue[800]
        }
    },
    extendedIcon: {
        fontSize: 30,
        marginRight: theme.spacing.unit,
        color: 'white'
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing.unit,
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
    icon: {}
});