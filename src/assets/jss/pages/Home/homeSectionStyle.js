import { container } from 'assets/jss/constants'
import BgImage from 'assets/images/Home/home.png'

const homeSectionStyle = {
  homeSectionArea: {
    width: '100%',
  },
  homeImage: {
    width: '100%',
    height: 'calc(100vh - 94px)',
    backgroundImage: 'url(' + BgImage + ')',
    objectFit: 'cover',
    marginTop: 94,
  },
  videoPlayer: {
    width: '100%',
    marginTop: 94,
  },
  homeContainer: {
    backgroundColor: 'black',
    width: '100%',
  },
  container: {
    ...container,
  },
  content: {
    paddingTop: '46px',
    // '@media (max-width: 600px)': { paddingBottom: '-20px' },
    // '@media (min-width: 600px)': { paddingBottom: '-20px' },
    // '@media (min-width: 768px)': { paddingBottom: '0px' },
    // '@media (min-width: 960px)': { paddingBottom: '30px' },
    // '@media (min-width: 1280px)': { paddingBottom: '60px' },
  },
  title: {
    fontFamily: 'DaysOneRegular',
    textAlign: 'center',
    marginBottom: 38,
    '@media (max-width: 600px)': { fontSize: '30px', lineHeight: '40px' },
    '@media (min-width: 600px)': { fontSize: '30px', lineHeight: '40px' },
    '@media (min-width: 768px)': { fontSize: '35px', lineHeight: '50px' },
    '@media (min-width: 960px)': { fontSize: '45px', lineHeight: '55px' },
    '@media (min-width: 1280px)': { fontSize: '45px', lineHeight: '60px' },
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '1.47px',
    color: '#F53EDA',
    justifyContent: 'center',
  },
}

export default homeSectionStyle
