import { container } from 'assets/jss/constants'

const roadmapSectionStyle = {
  buySectionArea: {
    width: '100%',
    position: 'relative',
    backgroundColor: 'black',
    // paddingBottom: '30px',
    paddingTop: '104px',
  },
  roadmapTitle: {
    color: '#F53EDA !important',
  },
  title: {
    fontFamily: 'DaysOneRegular',
    fontWeight: 700,
    '@media (max-width: 600px)': { fontSize: '30px', lineHeight: '40px' },
    '@media (min-width: 600px)': { fontSize: '30px', lineHeight: '40px' },
    '@media (min-width: 768px)': { fontSize: '35px', lineHeight: '50px' },
    '@media (min-width: 960px)': { fontSize: '45px', lineHeight: '55px' },
    '@media (min-width: 1280px)': { fontSize: '45px', lineHeight: '60px' },
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '1.47px',
    color: '#FFFFFF',
    justifyContent: 'center',
    marginBottom: 30,
  },
  container: {
    ...container,
  },
  roadmapContainer: {
    margin: 'auto',
    marginTop: '70px',
    '@media (max-width: 600px)': { width: '480px' },
    '@media (min-width: 600px)': { width: '500px' },
    '@media (min-width: 768px)': { width: '600px' },
    '@media (min-width: 960px)': { width: '750px' },
    '@media (min-width: 1280px)': { width: '850px' },
  },
  // content: {
  //   '@media (max-width: 600px)': { paddingTop: '15px' },
  //   '@media (min-width: 600px)': { paddingTop: '15px' },
  //   '@media (min-width: 768px)': { paddingTop: '15px' },
  //   '@media (min-width: 960px)': { paddingTop: '15px' },
  //   '@media (min-width: 1280px)': { paddingTop: '15px' },
  // },
}

export default roadmapSectionStyle
