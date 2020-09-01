import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Box, Typography, Zoom, IconButton, Tooltip, Container } from '@material-ui/core'
import { Facebook, Twitter, Telegram, Instagram, YouTube, WhatsApp } from '@material-ui/icons'
import {useStylesContact} from '../assets/styles/contactPage'

const SecondPage = () => {
  const classes = useStylesContact()
  return (
    <Layout>
      <SEO title="Contact" />
      <Box component="div" className={classes.middle}> 
          <Container maxWidth='md'>
            <Typography variant='h2' className={classes.title}>Contact <span style={{color : '#4A5568'}}>Us !</span> </Typography>
            <Typography variant='body2' className={classes.subTitle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </Typography> 
            <Tooltip TransitionComponent={Zoom} title="like my fanpage">
              <IconButton  aria-label="facebook" className={classes.btn} >
                <Facebook className={classes.icon}/>
              </IconButton>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="follow us on twitter">
              <IconButton  aria-label="twitter" className={classes.btn}>
                <Twitter className={classes.icon}/>
              </IconButton>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="contact me !">
              <IconButton  aria-label="telegram" className={classes.btn}>
                <Telegram className={classes.icon}/>
              </IconButton>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="follow us on instagram">
              <IconButton  aria-label="instagram" className={classes.btn}>
                <Instagram className={classes.icon}/>
              </IconButton>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="subscribe my channel">
              <IconButton  aria-label="youtube" className={classes.btn}>
                <YouTube className={classes.icon}/>
              </IconButton>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="contact me !">
              <IconButton  aria-label="whats-app" className={classes.btn}>
                <WhatsApp className={classes.icon}/>
              </IconButton>
            </Tooltip>
          </Container>
        </Box>
    </Layout>
  )
}

export default SecondPage
