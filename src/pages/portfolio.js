import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  Card,
  CardMedia,
  Typography,
  Button,
  CardActions,
  makeStyles,
  Box,
  Grid,
  Container,
  Tooltip,
  Zoom,
  Paper,
} from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 280,
    minHeight: 320,
    margin: '24px 12px',
    [theme.breakpoints.up('md')]: {
      marginTop: 24,
    },
  },
  mainContainer: {
    paddingTop: 80,
    paddingBottom: 70,
  },
  preview: {
    width: 280,
    height: 145,
    padding: 1,
  },
  title: {
    color: '#6B46C1',
    textAlign: 'center',
    fontWeight: 500,
    [theme.breakpoints.down('lg')]: {
      margin: 14,
    },
  },
  cardContent: {
    padding: 16,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 12,
  },
  description: {
    fontSize: 12,
    height: 60,
  },
  liveDemo: {
    marginLeft: '-9px',
    marginBottom: '-8px',
  },
}))

const Portfolio = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        edges {
          node {
            title
            description
            linkDemo
            imagePreview {
              id
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Container maxWidth="lg" className={classes.mainContainer}>
        <Typography variant="h4" className={classes.title}>
          Our Projects
        </Typography>
        <Grid container direction="row" justify="center" alignItems="center">
          {data.allContentfulPortfolio.edges.map((edge, index) => (
            <Paper key={index} className={classes.card} elevation={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt={edge.node.title}
                  className={classes.preview}
                  image={edge.node.imagePreview.file.url}
                  title="Contemplative Reptile"
                />
                <Box className={classes.cardContent}>
                  <Typography className={classes.subTitle}>
                    {edge.node.title}
                  </Typography>
                  <Typography className={classes.description}>
                    {edge.node.description}
                  </Typography>
                  <CardActions className={classes.liveDemo}>
                    <Tooltip
                      TransitionComponent={Zoom}
                      title={
                        edge.node.linkDemo === null
                          ? "Oops Sorry You can't open this link"
                          : 'Visit Link'
                      }
                    >
                      <Button
                        size="small"
                        color="primary"
                        variant="outlined"
                        href={edge.node.linkDemo}
                        target="__blank"
                      >
                        Live Demo
                      </Button>
                    </Tooltip>
                  </CardActions>
                </Box>
              </Card>
            </Paper>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default Portfolio

// disabled={edge.node.linkDemo === null}
