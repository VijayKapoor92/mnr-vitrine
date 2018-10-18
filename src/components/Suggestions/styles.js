import {grey} from '@material-ui/core/colors/index';

export const styles = theme => ({
    paper: {
        position: 'absolute',
        top: 35,
        left: 30,
        width: 'calc(100% - 30px)',
        maxHeight: '25rem',
        overflowY: 'auto',
        overflowX: 'hidden',
        display: 'none'
    },
    display: {
        display: 'block'
    },
    listitem: {
        position: 'relative',
        zIndex: 1112,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: grey[300]
        }
    },
    link: {
        textDecoration: 'none',
        width: '100%'
    }
});