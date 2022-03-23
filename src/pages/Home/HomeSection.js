import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/homeSectionStyle'
import globalStyles from 'assets/jss/PLUTEX'
import videoSrc from 'assets/images/Home/video.mp4'

const useStyles = makeStyles(styles)
const useGlobalStyles = makeStyles(globalStyles)

const HomeSection = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()
  return (
    <Box className={classes.homeSectionArea}>
      <Box className={classes.videoPlayer}>
        <video width="100%" height="auto" loop muted autoPlay>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </Box>
      <Box className={classes.homeContainer}>
        <Box className={classes.container}>
          {/* <Box className={classes.homeImage}> */}
          <Box className={classes.content}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography className={classes.title}>What is The Funky Horse Pub?</Typography>
              <Typography className={globalClasses.text21}>
                The Funky Horse Pub is a collection of 8888 unique NFTs living on the Avalanche
                blockchain. What makes this project different than any other NFT project is that there are collections
                within the colletion. Of the 8888 Horses, The Funky Horse Pub community is the first NFT to NFT project in the world.The Funky Horses that the members have are in terrace, accessible by very loyal members!
                On this platform, everyone can create and sell their own NFT works so that they can both earn pure income and strengthen our community.Another purpose of our platform is to create a connected and focused community by establishing a strong bond between people.
                8.888 Horses is available, it will be issued on avalanche blockchain.
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeSection
