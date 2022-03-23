import { defaultFont } from 'assets/jss/constants'

const headerLinksStyle = theme => ({
  list: {
    ...defaultFont,
    margin: 0,
    paddingLeft: '0',
    listStyle: 'none',
    paddingTop: '0',
    paddingBottom: '0',
    color: 'inherit',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'unset',
    },
    alignItems: 'center',
  },
  listItem: {
    ...defaultFont,
    float: 'left',
    color: 'inherit',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: '10px',
    padding: '0',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '&:after': {
        width: 'calc(100% - 30px)',
        content: '""',
        display: 'block',
        height: '1px',
        marginLeft: '15px',
        backgroundColor: '#e5e5e5',
      },
    },
  },
  text: {
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    fontSize: '14px',
    lingHeight: '38px',
    letterSpacing: '0.26px',
    cursor: 'pointer',
    '&:hover': {
      color: '#E97800',
    },
    color: '#fff',
    textDecoration: 'none',
  },
  selectedText: {
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    fontSize: '14px',
    color: '#E97800',
    textDecoration: 'none',
    lingHeight: '38px',
    letterSpacing: '0.26px',
    cursor: 'pointer',
  },
  buyNow: {
    color: 'black',
    backgroundColor: '#F53EDA',
    padding: '10px 15px',
    fontWeight: 800,
    borderRadius: '25px',
    fontSize: '15px',
    width: 85,
    margin: 'auto',
  },
  headerTitle: {
    color: 'white',
    fontWeight: 800,
    fontSize: '15px',
  },
  socialAvatar: {
    width: '25px',
    height: '25px',
  },
})

export default headerLinksStyle
