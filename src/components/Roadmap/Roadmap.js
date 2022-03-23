import React from 'react'


import { Box, Typography } from '@material-ui/core'


import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Roadmap/roadmapStyle'

const useStyles = makeStyles(styles)

const Roadmap = props => {
  const classes = useStyles()
  const { image, percentage, description } = props
  return (
    <Box className={classes.body}>
      <Box>
        <img src={image} className={classes.image} />
      </Box>
      <Box className={classes.container}>
        <Box>
          <Typography className={classes.percentage}>{percentage}%</Typography>
        </Box>
        <Box>
          <Typography className={classes.description}>{description}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Roadmap
