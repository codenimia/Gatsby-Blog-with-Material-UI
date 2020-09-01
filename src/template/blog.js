import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import { Container, Box, Typography, Paper, Button } from '@material-ui/core'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { ArrowBackIosTwoTone } from '@material-ui/icons'

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      publishedDate(fromNow: true)
      body {
        json
      }
    }
  }
`

const BlogTamplate = props => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        console.log('alt', alt)
        return (
          <Container maxWidth="md">
            <Paper elevation={2}>
              <img alt={alt} src={url} />
            </Paper>
          </Container>
        )
      },
    },
  }
  return (
    <Layout>
      <SEO title={props.data.contentfulBlog.title} />
      <Container maxWidth="md">
        <Paper elevation={8} style={{ padding: 24 }}>
          <Box>
            <Typography
              variant="h4"
              style={{
                marginTop: 64,
                marginBottom: 12,
                textAlign: 'center',
                fontWeight: 'bolder',
              }}
            >
              {props.data.contentfulBlog.title}
            </Typography>
            <Typography
              variant="h6"
              style={{
                marginBottom: 16,
                textAlign: 'right',
                fontWeight: 300,
                fontSize: 14,
              }}
            >
              Publish : {props.data.contentfulBlog.publishedDate}
            </Typography>
          </Box>
          <Box>
            {documentToReactComponents(
              props.data.contentfulBlog.body.json,
              options
            )}
          </Box>
          <Link to="/article">
            <Button
              startIcon={<ArrowBackIosTwoTone />}
              variant="outlined"
              color="secondary"
            >
              Back
            </Button>
          </Link>
        </Paper>
      </Container>
    </Layout>
  )
}

export default BlogTamplate
