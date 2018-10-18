import {blue, grey, red} from '@material-ui/core/colors/index';
import {MNR_DRAWER_WIDTH} from '../../utils/constants';

export const styles = theme => ({
    content: {
        flexGrow: 1,
        marginTop: 220,
        paddingLeft: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    'content-left': {
        marginLeft: -MNR_DRAWER_WIDTH,
    },
    'content-right': {
        marginRight: -MNR_DRAWER_WIDTH,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
        marginLeft: 0,
    },
    'contentShift-right': {
        marginRight: 0,
    },
    extendedButton: {
        margin: theme.spacing.unit,
        backgroundColor: blue[500],
        color: 'white',
        position: 'absolute',
        top: 85,
        right: 30,
        zIndex: 1101,
        height: 70,
        fontSize: 20,
        '&:hover':{
            backgroundColor: blue[800]
        }
    },
    extendedIcon: {
        fontSize: 35,
        marginRight: theme.spacing.unit,
        color: 'white'
    },
    gridListTile: {
        paddin: 0,
        margin: 0,
        transition: 'box-shadow .3s',
        width: '20%',
        // border: '1px solid black',
        /*'&:hover': {
            boxShadow: 'inset 1px 1px 1px 1px #CCCCCC'
        }*/
    },
    rootTileBar: {
        left: 'auto'
    },
    tileBar: {
        height: 100,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        transition: 'height .2s',
        '&:hover': {
            height: 110
        }
    },
    titleWrap: {
        color: 'black',
    },
    title: {
        fontSize: 12
    },
    contactInfo: {
        padding: '10px 0',
        fontSize: 15,
        color: grey[800]
    },
    contactInfoNoValue: {
        color: grey[500],
        padding: '10px 0',
        fontSize: 15,
    },
    colorSwitchBase: {
        color: grey[300],
        '&$colorChecked': {
            color: red[800],
            '& + $colorBar': {
                backgroundColor: red[400],
            },
        },
    },
    colorBar: {},
    colorChecked: {},
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing.unit,
    },
    badge: {
        top: 5,
        right: 5
    }
});