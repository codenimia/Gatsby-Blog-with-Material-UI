const { makeStyles } = require('@material-ui/core')

export const useStylesArticle = makeStyles(theme => ({
  container: {
    padding: '0px 50px',
    marginTop: 100,
  },
  heading: {
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 48,
    color: '#2A4365',
  },
  subHeading: {
    marginTop: 16,
    marginBottom: 24,
    color: '#aaa',
    fontSize: 22,
  },
  date: {
    fontSize: 14,
    marginTop: 24,
    color: '#777',
  },
  title: {
    margin: '12px 0',
    fontWeight: 540,
    color: '#553C9A',
  },
  post: {
    marginTop: 12,
    display: 'block',
  },
  subPost: {
    marginTop: 12,
    display: 'block',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 16,
    marginBottom: 24,
    color: '#805AD5',
  },
}))
