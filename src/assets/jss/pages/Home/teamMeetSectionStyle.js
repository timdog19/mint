import { container } from 'assets/jss/constants'

const teamMeetSectionStyle = {
  plutexSwapSectionArea: {
    width: '100%',
    position: 'relative',
    paddingTop: '94px',
  },
  gameContainer: {
    paddingTop: 10,
    backgroundColor: '#F53EDA ',
  },
  title: {
    fontFamily: 'DaysOneRegular',
    fontWeight: 700,
    '@media (max-width: 600px)': { fontSize: '25px', lineHeight: '40px' },
    '@media (min-width: 600px)': { fontSize: '30px', lineHeight: '40px' },
    '@media (min-width: 768px)': { fontSize: '35px', lineHeight: '50px' },
    '@media (min-width: 960px)': { fontSize: '40px', lineHeight: '55px' },
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
  meetAvatar: {
    borderRadius: '10px',
    textAlign: 'center',
    maxWidth: '300px',
  },
  content: {
    '@media (max-width: 600px)': { marginTop: '30px' },
    '@media (min-width: 600px)': { marginTop: '30px' },
    '@media (min-width: 768px)': { marginTop: '35px' },
    '@media (min-width: 960px)': { marginTop: '40px' },
    '@media (min-width: 1280px)': { marginTop: '40px' },
  },
}

export default teamMeetSectionStyle
