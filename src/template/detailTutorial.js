import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { Container, Box, Typography, Paper, Button } from '@material-ui/core'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { ArrowBackIosTwoTone } from '@material-ui/icons'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const DetailTutorial = props => {
  const result = props.data.contentfulDetailTutorial
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
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
      <SEO title={result.title} />
      <Container maxWidth="md">
        <Paper elevation={0} style={{ padding: 24, marginTop: 60 }}>
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
              {result.title}
            </Typography>
          </Box>
          <Box>
            {documentToReactComponents(result.contentBody.json, options)}
          </Box>
          <Button
            startIcon={<ArrowBackIosTwoTone />}
            variant="outlined"
            color="secondary"
            onClick={() =>
              (window.location.pathname = `/tutorial/${result.slugBack}`)
            }
            disabled={!result.slugBack}
          >
            Back
          </Button>
          {/* <Link to={result.slugNext} replace> */}
          <Button
            endIcon={<ArrowForwardIosIcon />}
            variant="outlined"
            color="secondary"
            onClick={() =>
              (window.location.pathname = `/tutorial/${result.slugNext}`)
            }
            disabled={!result.slugNext}
          >
            Next
          </Button>
          {/* </Link> */}
        </Paper>
      </Container>
    </Layout>
  )
}

export default DetailTutorial

export const query = graphql`
  query($slug: String!) {
    contentfulDetailTutorial(slug: { eq: $slug }) {
      slug
      title
      contentBody {
        json
      }
      slugBack
      slugNext
    }
  }
`
