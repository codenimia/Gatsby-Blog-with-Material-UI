import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Grid, Box } from '@material-ui/core'
import profile from '../assets/images/PROFILE.png'

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="codenimia" />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: '100vh' }}
      >
        <Box style={{ width: 500 }}>
          <img src={profile} alt="profile" />
        </Box>
      </Grid>
    </Layout>
  )
}

export default BlogPage
