import {grey} from '@material-ui/core/colors/index';
export const styles = {
    contactInfoContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        height: '55%'
    },
    contactInfo: {
        padding: '3px 13px',
        fontSize: 15,
        color: grey[800]
    },
    photoContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },
    photo: {
        marginLeft: 13,
        borderRadius: '50%',
        width: 100,
        height: 100,
    },
    icon: {
        color: grey[500],
        paddingLeft: 13
    },
    listItem: {
        padding: 0,
        paddingLeft: 7,
        paddingBottom: 10
    },
    listItemBody: {
        flex: '1 1 auto',
        padding: '0 2px',
        minWidth: 0
    },
    secondary: {
        color: grey[500]
    }
};