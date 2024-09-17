import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this static site using Gatsby & Contentful CMS.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/Contentful_infrastructure.png"
      />
        </Layout>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
