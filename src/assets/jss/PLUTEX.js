// import * from 'assets/jss/constants'

const GlobalStyle = {
  text40Area: {
    // marginTop: '100px',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
      marginBottom: '30px',
      justifyContent: 'center',
    },
    '@media (min-width: 600px)': {
      marginBottom: '30px',
      justifyContent: 'center',
    },
    '@media (min-width: 768px)': {
      marginBottom: '33px',
      justifyContent: 'center',
    },
    '@media (min-width: 960px)': {
      marginBottom: '34px',
      justifyContent: 'center',
    },
    '@media (min-width: 1280px)': {
      marginBottom: '40px',
      justifyContent: 'center',
    },
  },
  text40: {
    zIndex: 1,
    fontFamily: 'Exo',
    fontWeight: 700,
    fontSize: '30px',
    lineHeight: '60px',
    '@media (max-width: 600px)': {
      fontSize: '30px',
      lineHeight: '60px',
    },
    '@media (min-width: 600px)': {
      fontSize: '30px',
      lineHeight: '60px',
    },
    '@media (min-width: 768px)': {
      fontSize: '34px',
      lineHeight: '60px',
    },
    '@media (min-width: 960px)': {
      fontSize: '38px',
      lineHeight: '60px',
    },
    '@media (min-width: 1280px)': {
      fontSize: '40px',
      lineHeight: '60px',
    },
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '1.47px',
    color: '#FFFFFF',
  },
  text21: {
    position: 'relative',
    fontFamily: 'CourierPrimeRegular',
    fontStyle: 'normal',
    fontSize: '21px',
    fontWeight: 400,
    paddingBottom: 20,
    '@media (max-width: 600px)': { fontSize: '18px', lineHeight: '27px' },
    '@media (min-width: 600px)': { fontSize: '18px', lineHeight: '27px' },
    '@media (min-width: 768px)': { fontSize: '19px', lineHeight: '29px' },
    '@media (min-width: 960px)': { fontSize: '20px', lineHeight: '31px' },
    '@media (min-width: 1280px)': { fontSize: '21px', lineHeight: '33px' },
    alignItems: 'center',
    letterSpacing: '0.65px',
    color: '#FFFFFF',
  },
  yellowText: {
    color: '#F36E00 !important',
    fontWeight: 700,
  },
  whiteText: {
    color: '#FFFFFF !important',
    fontWeight: 400,
  },
}

export default GlobalStyle
