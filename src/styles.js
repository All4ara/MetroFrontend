import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
    borderRadius: 15,
    margin: '0px 0',
    padding: '40px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    },
    heading: {
        padding: '20px 0px',
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        width: '200px',

        marginLeft: '15px',
    },
}));