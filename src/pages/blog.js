import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

const BlogPage = ({data}) => {
    return (
    <Layout pageTitle="My Blog Posts">
      <ol>
      {
        data.allFile.nodes.map(node => (
            <li key={node.name}>
                {node.name}
            </li>
            )
        )
      }
      </ol>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="Blog" />
export default BlogPage