import {MNR_DRAWER_WIDTH} from '../../utils/constants';

export const styles = theme => ({
    drawerPaper: {
        position: 'fixed',
        width: MNR_DRAWER_WIDTH,
        height: window.innerHeight,
        maxHeight: window.innerHeight,
        overflow: 'hidden'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    }
});