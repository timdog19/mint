import React from 'react'
import { Box, Typography } from '@material-ui/core'
// core components
import Roadmap from 'components/Roadmap/Roadmap'
// images
import roadmap1 from 'assets/images/Home/10.png'
import roadmap2 from 'assets/images/Home/20.png'
import roadmap3 from 'assets/images/Home/30.png'
import roadmap4 from 'assets/images/Home/40.png'
import roadmap5 from 'assets/images/Home/50.png'
import roadmap6 from 'assets/images/Home/60.png'
import roadmap7 from 'assets/images/Home/70.png'
import roadmap8 from 'assets/images/Home/80.png'
import roadmap9 from 'assets/images/Home/80.png'
import roadmap10 from 'assets/images/Home/100.png'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/roadmapSectionStyle'

const useStyles = makeStyles(styles)

const RoadmapSection = () => {
  const classes = useStyles()

  return (
    <Box className={classes.buySectionArea}>
      {/* <Box className={classes.container}> */}
      <Box className={classes.content}>
        <Typography className={clsx(classes.roadmapTitle, classes.title)}>ROADMAP</Typography>
      </Box>
      <Box className={classes.roadmapContainer}>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap1} percentage={10} description={'A volunteer Funky career program will be launched.'} />
        </Box>
        <Box style={{ marginLeft: '120px' }}>
          <Roadmap
            image={roadmap2}
            percentage={20}
            description={'The terrace development will be started.'}
          />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap3} percentage={30} description={'A community-specific Utility token, the purpose and use of which is decided by the community, will be offered to the community.'} />
        </Box>
        <Box style={{ marginLeft: '0px' }}>
          <Roadmap
            image={roadmap4}
            percentage={40}
            description={'The Funky fashion department will be opened, the Funky fashion brand will be created and the clothes belonging to our community will be made in the style of T-shirts, Hoodies.'}
          />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap5} percentage={50} description={'The terrace will be operational.'} />
        </Box>
        <Box style={{ marginLeft: '120px' }}>
          <Roadmap image={roadmap6} percentage={60} description={'P2E game development based on Metaverse and Web3.0 will be started and will be offered to the community as soon as possible.'} />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap7} percentage={70} description={'Funky owners will be able to use their Funky NFTS as they wish and the Chill Zone will open.'} />
        </Box>
        <Box style={{ marginLeft: '0px' }}>
          <Roadmap image={roadmap8} percentage={80} description={'In the world of the Metaverse, 200 random people who have own funk will be given land and special avatar.'} />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap
            image={roadmap9}
            percentage={90}
            description={'Real life events and live meetings will be held.'}
          />
        </Box>
        <Box style={{ marginLeft: '120px' }}>
          <Roadmap
            image={roadmap10}
            percentage={100}
            description={'A brainstorming will be conducted among the community, ideas will be declared in the form of a questionnaire, and the most liked, most appropriate idea will be used for the next stage.'}
          />
        </Box>
      </Box>
      {/* </Box> */}
    </Box>
  )
}

export default RoadmapSection
