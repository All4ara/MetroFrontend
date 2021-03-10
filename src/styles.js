import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    div: {
        backgroundColor: '#757575',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23000000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23ffffff' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23000000' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23ffffff' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23000000' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23ffffff' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23000000' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ffffff' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23000000' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23ffffff' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23000000' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23ffffff' points='943 900 1210 900 971 687'/%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
    },
    container: {
        padding: '100px 0px',
        
    },
    appBar: {
        borderRadius: 15,
        marginBottom: '30px',
        padding: '20px 0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    heading: {
        padding: '0px 0px',
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        width: '350px',
        marginLeft: '15px',
    },
}));