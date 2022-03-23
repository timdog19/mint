import { containerFluid } from 'assets/jss/constants'

const footerStyle = {
  body: {
    width: '100%',
    backgroundColor: '#000000',
    display: 'flex',
    alignItems: 'center',
    marginTop: '80px',
    marginBottom: '40px',
  },
  container: {
    ...containerFluid,
    '@media (max-width: 768px)': {
      maxWidth: '540px',
    },
    '@media (min-width: 768px)': {
      maxWidth: '640px',
    },
  },
  supportContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom: '10px',
    paddingTop: '10px',
  },
  text: {
    color: 'rgba(255, 255, 255, 1)',
    margin: '0px 20px',
    fontFamily: 'Source Sans Pro',
    fontSize: '16px',
    fontWeight: 500,
    LineHeight: '41px',
    textAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      color: '#E97800',
    },
  },
  selectedText: {
    color: '#E97800',
    margin: '0px 20px',
    fontFamily: 'Source Sans Pro',
    fontSize: '16px',
    fontWeight: 500,
    lingHeight: '41px',
    letterSpacing: '0.26px',
    cursor: 'pointer',
  },
  supportImage: {
    alignItems: 'center',
    display: 'flex',
  },
  imageLine: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  socialAvatar: {
    width: '30px',
    height: '30px',
  },
}

export default footerStyle
