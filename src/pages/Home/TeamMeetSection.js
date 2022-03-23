import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
// core components
import meetAvatar from 'assets/images/Home/team.gif'

import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/teamMeetSectionStyle'
import globalStyles from 'assets/jss/PLUTEX'

const useStyles = makeStyles(styles)
const useGlobalStyles = makeStyles(globalStyles)

const TeamMeetSection = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()

  return (
    <Box className={classes.plutexSwapSectionArea}>
      <Box className={classes.gameContainer}>
        <Box className={classes.container}>
          <Box className={classes.content}>
            <Typography className={classes.title}>MEET THE TEAM</Typography>
            <Box className={classes.featureContainer}>
              <Grid
                container
                display="flex"
                alignItems="center"
                justify="center"
                spacing={7}
                style={{ paddingTop: '10px' }}
              >
                <Grid item xs={12} sm={12} md={5} lg={5} style={{ textAlign: 'center' }}>
                  <img src={meetAvatar} className={classes.meetAvatar} />
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7} style={{ alignItems: 'center' }}>
                  <Box>
                    <Typography className={globalClasses.text21}>
                    Can DOĞAN (CO-Founder-Designer-Community Manager-Developer)                      
                    Çağan Cerrahoğlu (Developer-Community Manager)
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default TeamMeetSection
