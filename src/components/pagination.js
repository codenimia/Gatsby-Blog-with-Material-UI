import React from 'react'
import { Button, Box } from '@material-ui/core'
import { Link } from 'gatsby'

const Pagination = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const prevPage =
    currentPage - 1 === 1 ? '/article' : `/page/${currentPage - 1}`
  const nextpage = `/page/${currentPage + 1}`

  return (
    <Box display="flex">
      {isFirst ? (
        <Box style={{ flex: 1 }}>
          <Button disabled variant="contained">
            <Link to="/article">prev</Link>
          </Button>
        </Box>
      ) : (
        <Box style={{ flex: 1 }}>
          <Button variant="contained" color="secondary">
            <Link style={{ color: 'white' }} to={prevPage}>
              prev
            </Link>
          </Button>
        </Box>
      )}

      {/* {Array.from({ length: numberOfPages }, (_, i) =>
        currentPage === i + 1 ? (
          <Button key={i + 1}>
            <Link to={`/page/${i + 1}`}>{i + 1}</Link>
          </Button>
        ) : (
          <Button key={i + 1}>
            <Link to={`/${i === 0 ? '' : 'page/' + (i + 1)}`}>{i + 1}</Link>
          </Button>
        )
      )} */}

      {isLast ? (
        <Button variant="contained" disabled style={{ flex: 0 }}>
          <Link to={nextpage}>next</Link>
        </Button>
      ) : (
        <Button variant="contained" color="primary" style={{ flex: 0 }}>
          <Link style={{ color: 'white' }} to={nextpage}>
            next
          </Link>
        </Button>
      )}
    </Box>
  )
}

export default Pagination
