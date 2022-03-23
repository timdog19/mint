import React from 'react'
import { Element } from 'react-scroll'

// material ui core components
import { Box } from '@material-ui/core'

// core components
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks'
// import Footer from 'components/Footer/Footer'
import HomeSection from 'pages/Home/HomeSection'
import BuyNowSection from 'pages/Home/BuyNowSection'
import RoadmapSection from 'pages/Home/RoadmapSection'
import TeamMeetSection from 'pages/Home/TeamMeetSection'
import FooterSection from 'pages/Home/FooterSection'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/homeStyle'
const useStyles = makeStyles(styles)

const Home = () => {
  const classes = useStyles()
  return (
    <Box display="block" justifyContent="center" alignItems="flex-start">
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'white',
        }}
      />
      <Box className={classes.body}>
        <Element id="home" name="home">
          <HomeSection />
        </Element>
        <Element id="buyNow" name="buyNow">
          <BuyNowSection />
        </Element>
        <Element id="roadmap" name="roadmap">
          <RoadmapSection />
        </Element>
        <Element id="teamMeet" name="teamMeet">
          <TeamMeetSection />
        </Element>
        <Element id="support" name="support">
          <FooterSection />
        </Element>
      </Box>
      {/* <Footer /> */}
    </Box>
  )
}

export default Home
