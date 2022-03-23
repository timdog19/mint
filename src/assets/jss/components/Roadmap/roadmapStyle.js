import { containerFluid } from 'assets/jss/constants'

const roadmapStyle = {
  body: {
    width: '100%',
    display: 'flex',
    margin: '20px 0px',
    alignItems: 'center',
  },
  image: {
    width: '60px',
    height: '60px',
  },
  container: {
    ...containerFluid,
    '@media (max-width: 768px)': {
      maxWidth: '540px',
    },
    '@media (min-width: 768px)': {
      maxWidth: '640px',
    },
    alignItems: 'left',
    flexWrap: 'wrap',
    marginLeft: 20,
    marginRight: 40,
  },
  description: {
    color: '#CCCCCC',
    fontFamily: 'CourierPrimeRegular',
    fontWeight: 500,
    LineHeight: '25px',
    cursor: 'pointer',
    '&:hover': {
      color: '#E97800',
    },
    '@media (max-width: 600px)': { fontSize: '10px' },
    '@media (min-width: 600px)': { fontSize: '11px' },
    '@media (min-width: 768px)': { fontSize: '12px' },
    '@media (min-width: 960px)': { fontSize: '14px' },
    '@media (min-width: 1280px)': { fontSize: '16px' },
  },
  percentage: {
    color: '#DDDDDD',
    fontFamily: 'CourierPrimeRegular',
    fontWeight: 500,
    lingHeight: '41px',
    letterSpacing: '0.26px',
    cursor: 'pointer',
    '@media (max-width: 600px)': { fontSize: '18px' },
    '@media (min-width: 600px)': { fontSize: '19px' },
    '@media (min-width: 768px)': { fontSize: '21px' },
    '@media (min-width: 960px)': { fontSize: '23px' },
    '@media (min-width: 1280px)': { fontSize: '25px' },
  },
}

export default roadmapStyle
