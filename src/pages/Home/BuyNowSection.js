import React, { useContext, useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
// images
import walletImage from 'assets/images/Home/feature.gif'
import gameAvatar1 from 'assets/images/Home/one.png'
import gameAvatar2 from 'assets/images/Home/two.png'
import gameAvatar3 from 'assets/images/Home/three.png'
import gameAvatar4 from 'assets/images/Home/four.png'
import featureAvatar from 'assets/images/Home/forrest.png'
import clsx from 'clsx'
import { makeStyles, withStyles, TextField, Button } from '@material-ui/core'
import styles from 'assets/jss/pages/Home/buyNowSectionStyle'
import globalStyles from 'assets/jss/PLUTEX'
import toast from 'react-hot-toast'
import { Web3Context } from 'utils/Web3Provider'

const useStyles = makeStyles(styles)
const useGlobalStyles = makeStyles(globalStyles)

const MAX_VALUE = 'You can enter up to 10'
const INPUT_VALUE = 'You must input quantity'
const WRONG_NETWORK = 'You should connect to the Avalanche Network'
const SUCCSESS_CONNECTED = 'Successfully connected to the Avalanche Network'
const WAIT_METAMASK = 'Please wait a moment.'
const SUCCESS_BUY = 'Successfully buy'
const ASTRO_PRICE = 1 //0.07 ETH

const WalletButton = withStyles(() => ({
  root: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#CCCCCC',
    },
    fontWeight: '800',
    borderRadius: '25px',
    padding: '10px 15px',
    textTransform: 'none',
    fontFamily: 'sans-serif',
    width: '130px',
    margin: '20px',
  },
}))(Button)

const BuyButton = withStyles(() => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: '#000000',
    '&:hover': {
      backgroundColor: '#4c4c4c',
    },
    fontWeight: '700',
    borderRadius: '25px',
    padding: '10px 15px',
    fontFamily: 'sans-serif',
    // textTransform: 'none',
    width: '130px',
    margin: '20px',
  },
}))(Button)

const BuyNowSection = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()

  const { connectionStatus, notifyLabel, balance, address, walletInstalledStatus, loadWeb3, nftToken } =
    useContext(Web3Context)
  const [quantity, setQuantity] = useState('')
  const [progressStatus, setProgressStatus] = useState(false)

  const handleClickWallet = async () => {
    if (connectionStatus) {
      toast.success(SUCCSESS_CONNECTED)
    }
    await loadWeb3()
  }

  useEffect(() => {
    if (connectionStatus) {
      toast.success(notifyLabel)
    } else {
      if (notifyLabel !== '') {
        toast.error(notifyLabel)
      }
    }
  }, [notifyLabel])

  useEffect(() => {
    if (!walletInstalledStatus)
      window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en', '_blank')
  }, [walletInstalledStatus])

  const handleClickBuy = () => {
    if (quantity === '') {
      toast.error(INPUT_VALUE)
      return
    } else if (quantity > 30 || quantity < 1) {
      toast.error(MAX_VALUE)
      setQuantity('')
      return
    }
    if (!connectionStatus) {
      toast.error(WRONG_NETWORK)
      return
    }
    toast.success(WAIT_METAMASK)
    setProgressStatus(true)
    nftToken.methods
      .mintAstro(quantity)
      .send({ from: address, value: window.web3.utils.toWei((quantity * ASTRO_PRICE).toString()) })
      .then(data => {
        console.log(data)
        if (data.status) {
          toast.success(SUCCESS_BUY)
          setProgressStatus(false)
          setQuantity('')
        }
      })
  }

  const handleChangeQuantity = event => {
    const reg = /^\d+$/
    if (event.target.value === '' || reg.test(event.target.value)) {
      setQuantity(event.target.value)
    }
  }

  return (
    <>
      <Box className={classes.buyNowSectionArea}>
        <Box className={classes.quantityContainer}>
          <Box className={classes.container}>
            <Grid container display="flex" alignItems="center" justify="center">
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box display="flex" justifyContent="center" mb={5}>
                  <img src={walletImage} className={classes.walletArea} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box className={classes.titleBottom}>
                  <Typography className={clsx(classes.title, classes.quantityTitle)}>Get Your The Funky Horse Pub!</Typography>
                </Box>
                <Box className={classes.textContentArea}>
                  <Typography className={classes.text31}>Limited to 10 per mint.</Typography>
                </Box>
                <Box className={classes.textContentArea}>
                  <Box className={classes.text31}>
                    <Typography className={classes.text31} gutterBottom>
                      Quantity
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      id="text-quantity"
                      variant="outlined"
                      value={quantity}
                      className={classes.textQuantity}
                      onChange={handleChangeQuantity}
                    />
                  </Box>
                </Box>
                <Box className={classes.textContentArea}>
                  <WalletButton variant="contained" className={classes.wallet} onClick={handleClickWallet}>
                    Link Wallet
                  </WalletButton>
                  <BuyButton
                    variant="contained"
                    className={classes.roadmap}
                    onClick={handleClickBuy}
                    disabled={progressStatus}
                  >
                    SOON!
                  </BuyButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box className={classes.detailContainer}>
          <Box className={classes.container}>
            <Box className={classes.content}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography className={classes.title}>The Details</Typography>
                <Typography className={globalClasses.text21}>
                On this platform, people can use Funky Horses with unique DNA from each other as they want. 
                They can use it to discover a brand logo, a profile photo, or for the privileges of the Metaverse 3.0 technology that we will develop in the future!
                There is no obligation to have a Funky to join and operate activities on the pub!
                You can become a loyal member of our community even by working to grow and improve our community. 
                Our goal is to build the craziest, freest, most active and most powerful NFT community in the world.                
                  <br />
                  <br /> The Funky Horse Pub are stored as ERC-721 tokens on ther Avalanche blockchain and hosted on IPFS.
                  Purchasing The Funky Horse Pub cost 1 AVAX.
                  <br />
                  <br /> To access members-only areas such as the upcoming game, The Funky Horse Pub will need to be signed
                  into their Metamask Wallet.
                </Typography>
                <Typography variant="h5" className={classes.distribution}>
                  <br />
                  FAIR DISTRIBUTION
                </Typography>
                <Typography className={globalClasses.text21}>
                Welcome to The Funky Horse Pub! We were waiting for you :)
                </Typography>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box className={classes.galaxyContainer}>
          <Box className={classes.container}>
            <Box className={classes.content}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography className={clsx(classes.galaxyTitle, classes.title)}>
                  Welcome to the The Funky Horse Pub
                </Typography>
                <Typography className={clsx(globalClasses.text21, classes.galaxyDescription)}>
                  When you roadmap The Funky Horse Pub, You can become a loyal member of our community even by working to grow and improve our community. 
                  Our goal is to build the craziest, freest, most active and most powerful NFT community in the world. 
                  Are you ready to step out of a packed pub into a world where there are no boundaries?
                  Let's do this thing, guys
                </Typography>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box className={classes.gameContainer}>
          <Box className={classes.container}>
            <Box className={classes.content}>
              <Typography className={classes.title}>THE COMMUNITY</Typography>
              <Grid
                container
                display="flex"
                alignItems="center"
                justify="space-around"
                spacing={7}
                style={{ paddingTop: '8px' }}
              >
                <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gameAvatar}>
                  <img src={gameAvatar1} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gameAvatar}>
                  <img src={gameAvatar2} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gameAvatar}>
                  <img src={gameAvatar3} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gameAvatar}>
                  <img src={gameAvatar4} />
                </Grid>
              </Grid>
              <Box className={classes.featurePosition}>
                <Box className={classes.featureContainer}>
                  <Grid container display="flex" alignItems="center" justify="center" spacing={4}>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                      <img src={featureAvatar} className={classes.featureAvatar} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} className={classes.gameAvatar}>
                      <Box style={{ position: 'relative' }}>
                        <Box className={classes.featureText}>
                          <Typography className={classes.featureDescription}>
                            The Funky Horse Pub is currently in development. <br />
                            We are designing some pretty freakin&apos; awesome features.
                          </Typography>
                        </Box>
                        <Box className={classes.arrowDirection} />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Typography className={globalClasses.text21}>
              The Funky NFT actually acts as an identity card for entry into the privileged areas of the Pub, while the privileges are as follows:
              People who own a Funky NFT using NFT to NFT technology can create and sell their own creative works at terrace every month and earn income by receiving 70% of the NFT revenue sold.
              They can guide the development of the system by presenting their ideas in the Metaverse and Web 3.0 developments.
              They can experience it as a priority by providing access rights in the Metaverse and Web 3.0 beta tests.
              In the world of Metaverse, Funky owners will have their own unique land and avatar.{' '}
                <br />
                <br />
                In order to further strengthen our community, we first need loyal members who will work with us voluntarily. 
                Members who have been loyal to our community and helped the community develop will receive more than enough reward for this.
                <br />
                <br />
                Basically its going to be awesome... More information will be coming soon.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.gameBottomContainer}>{/* <img src={gameBottomImg} /> */}</Box>
      </Box>
    </>
  )
}

export default BuyNowSection
