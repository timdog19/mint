
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { useHistory } from 'react-router-dom'
import { List, ListItem, Typography } from '@material-ui/core'
import { useNavigation } from 'hook/Context/NavigationContext'

import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Header/headerLinksStyle.js'
import discord from 'assets/images/Home/discord.svg'
import instagram from 'assets/images/Home/instagram.svg'
import twitter from 'assets/images/Home/twitter.svg'

const useStyles = makeStyles(styles)

const HeaderLinks = () => {
  const classes = useStyles()
  const history = useHistory()


  const { navigation, setNavigation } = useNavigation()


  const handleGotoNav = path => {
    setNavigation(path)
    
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link
          to="/home#buyNow"
          onClick={() => handleGotoNav('buyNow')}
          className={navigation === 'buyNow' ? classes.selectedText : classes.text}
          spy={1}
          smooth={true}
          offset={5}
          duration={500}
        >
          <Typography className={classes.buyNow}>BUY NOW</Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="/home#roadmap"
          onClick={() => handleGotoNav('roadmap')}
          className={navigation === 'roadmap' ? classes.selectedText : classes.text}
          spy={1}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Typography className={classes.headerTitle}>ROADMAP</Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="/home#teamMeet"
          onClick={() => handleGotoNav('teamMeet')}
          className={navigation === 'teamMeet' ? classes.selectedText : classes.text}
          spy={1}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Typography className={classes.headerTitle}>TEAM</Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="/home#support"
          onClick={() => handleGotoNav('support')}
          className={navigation === 'support' ? classes.selectedText : classes.text}
          spy={1}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Typography className={classes.headerTitle}>SUPPORT</Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a href="https://twitter.com/funkyhorsepub">
          <img src={twitter} className={classes.socialAvatar} />
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a href="https://discord.gg/S9MZ6P4zPv">
          <img src={discord} className={classes.socialAvatar} />
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a href="https://www.instagram.com/thefunkyhorsepubofficial/">
          <img src={instagram} className={classes.socialAvatar} />
        </a>
      </ListItem>
    </List>
  )
}

export default HeaderLinks
