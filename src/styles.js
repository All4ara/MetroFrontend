import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    container: {
        padding: '100px 0px'
    },
    appBar: {
        borderRadius: 15,
        marginBottom: '30px',
        padding: '20px 0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        padding: '0px 0px',
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        width: '200px',

        marginLeft: '15px',
    },
}));