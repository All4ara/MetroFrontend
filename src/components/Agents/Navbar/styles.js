import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    marginBottom: '30px',
    padding: '20px 50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  heading: {
    padding: '0px 0px',
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    width: '350px',
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '350px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: 'white'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logout: {
    width: '40%',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    height: "50px",
    width: "50px"
  },
}));