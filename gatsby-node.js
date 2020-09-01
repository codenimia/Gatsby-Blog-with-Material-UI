const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/template/blog.js')
  const res = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  res.data.allContentfulBlog.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  const posts = res.data.allContentfulBlog.edges

  const postPerPage = 4
  const numberOfPages = Math.ceil(posts.length / postPerPage)

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    const isFirstPage = index === 0
    const currentPage = index + 1

    if (isFirstPage) return

    createPage({
      path: `/page/${currentPage}`,
      component: path.resolve('src/template/posts-list.js'),
      context: {
        limit: postPerPage,
        skip: index * postPerPage,
        currentPage,
        numberOfPages,
      },
    })
  })

  const tutorialTemplate = path.resolve('src/template/detailTutorial.js')

  const queryTutorial = await graphql(`
    query {
      allContentfulDetailTutorial {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  queryTutorial.data.allContentfulDetailTutorial.edges.forEach(edge => {
    createPage({
      component: tutorialTemplate,
      path: `/tutorial/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
