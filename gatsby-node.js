const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const projectPost = path.resolve(`./src/templates/project.js`)


  return graphql(
    `
      {
        postList: allMdx(
          sort: { fields: [frontmatter___date], order: DESC },
          filter: {frontmatter: {type: {ne: "project"}}},
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title,
                type
              }
            }
          }
        }
        projectList: allMdx(
          sort: { fields: [frontmatter___date], order: DESC },
          filter: {frontmatter: {type: {eq: "project"}}}
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title,
                type
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.postList.edges
    const projects = result.data.projectList.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `blog${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
    projects.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `project${post.node.fields.slug}`,
        component: projectPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
