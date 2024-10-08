import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About Me">
                <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            </Layout>
        </main>
    )
}

export default AboutPage

export const Head = () => <Seo title="About" />

