import React from 'react'
import { Container, Typography, Divider, Box, Button } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { useStylesArticle } from '../assets/styles/article-css'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'

const Article = ({ data }) => {
  const classes = useStylesArticle()
  const result = data.allContentfulLIstTutorial.edges
  return (
    <Layout>
      <SEO title="article" />
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h2" className={classes.heading}>
          <span style={{ color: '#667EEA' }}>Codenimians </span>Tutorials
        </Typography>
        <Typography variant="h6" className={classes.subHeading}>
          All the latest Web Development course, straight from the Codenimia
          team.
        </Typography>

        <Divider />
        {result.map((data, id) => (
          <Box key={id}>
            <Typography variant="h5" className={classes.title}>
              {data.node.title}
            </Typography>
            <Typography variant="body1" className={classes.post}>
              {data.node.description.description}
            </Typography>
            <Link to={data.node.link}>
              <Button
                variant="outlined"
                size="small"
                className={classes.button}
                endIcon={<ArrowForwardIcon />}
              >
                Start Course
              </Button>
            </Link>
            <Divider />
          </Box>
        ))}
      </Container>
    </Layout>
  )
}

export default Article

export const listTutorialQuery = graphql`
  query {
    allContentfulLIstTutorial {
      edges {
        node {
          title
          description {
            description
          }
          link
        }
      }
    }
  }
`
