import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import { Container, Typography, Divider, Box, Button } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { useStylesArticle } from '../assets/styles/blogPage'

const Article = ({ data }) => {
  const classes = useStylesArticle()

  return (
    <Layout>
      <SEO title="article" />
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h2" className={classes.heading}>
          Latest
        </Typography>
        <Typography variant="h5" className={classes.subHeading}>
          All the latest Web Development news, straight from the Alaude team.
        </Typography>
        <Divider />
        {data.allContentfulBlog.edges.map((edge, index) => (
          <Box component="div" key={index}>
            <Typography variant="h6" className={classes.date}>
              {edge.node.publishedDate}
            </Typography>
            <Typography variant="h5" className={classes.title}>
              {edge.node.title}
            </Typography>
            <Typography variant="body1" className={classes.post}>
              {edge.node.headline}
            </Typography>
            <Link to={`/blog/${edge.node.slug}`}>
              <Button
                variant="outlined"
                size="small"
                className={classes.button}
                endIcon={<ArrowForwardIcon />}
              >
                Read More
              </Button>
            </Link>
            <Divider />
          </Box>
        ))}
        {data.allContentfulBlog.edges.length > 4 && (
          <Box style={{ paddingTop: 20, paddingBottom: 50 }}>
            <Link to="/page/2">
              <Button variant="contained">See More</Button>
            </Link>
          </Box>
        )}
      </Container>
    </Layout>
  )
}

export default Article

export const queryArticle = graphql`
  query {
    allContentfulBlog(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          publishedDate(formatString: "MMMM DD, YYYY")
          headline
          slug
        }
      }
    }
  }
`
