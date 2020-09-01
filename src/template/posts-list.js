import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Divider, Typography, Button, Box, Container } from '@material-ui/core'
import { graphql, Link } from 'gatsby'
import { useStylesArticle } from '../assets/styles/blogPage'
import Pagination from '../components/pagination'

const PostsList = props => {
  const classes = useStylesArticle()
  const posts = props.data.allContentfulBlog.edges
  const { currentPage, numberOfPages } = props.pageContext
  return (
    <Layout>
      <SEO title={currentPage} />
      <Divider style={{ marginTop: 64 }} />
      <Container maxWidth="md" className={classes.container}>
        <Box style={{ marginTop: 24, marginBottom: 50 }}>
          <Pagination numberOfPages={numberOfPages} currentPage={currentPage} />
        </Box>
        {posts.map((edge, index) => (
          <Box key={index}>
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
                // endIcon={<ArrowForwardIcon />}
              >
                Read More
              </Button>
            </Link>
            <Divider />
          </Box>
        ))}
        <Box style={{ marginTop: 24, marginBottom: 50 }}>
          <Pagination numberOfPages={numberOfPages} currentPage={currentPage} />
        </Box>
      </Container>
    </Layout>
  )
}

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allContentfulBlog(
      sort: { fields: publishedDate, order: ASC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          publishedDate(formatString: "MMMM Do, YYYY")
          headline
          slug
        }
      }
    }
  }
`

export default PostsList
