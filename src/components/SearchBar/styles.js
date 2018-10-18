import { grey, red } from '@material-ui/core/colors/index';

export const styles = theme => ({
    appBar: {
        backgroundColor: 'white',
        marginBottom: 4,
        borderRadius: 30,
        width: '50%',
        zIndex: 0
    },
    appBarShift: {
        marginLeft: 'calc(50% - 300px)'
    },
    toolbar: {
        height: 30
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
    colorChecked: {}
});