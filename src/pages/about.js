import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import aboutStyles from './about.module.scss';
import Head from '../components/head';

const AboutPage = () => {
    const pageQuery = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "about-me.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);

    return (
        <Layout>
            <Head  title="About"/>
            <h1>About me</h1>
            <Img fluid={pageQuery.file.childImageSharp.fluid} style={{marginBottom:'1rem'}} alt="Picture of me having breakfast in York, UK" />
            <p>Hi! If it isn't clear yet. I am working on becoming a professional full stack developer. But that's not all I am (at least I hope). I have many interests, many of which I plan to explore throughout the progression of this site.</p>
            <h2>Why such a long name?</h2>
            <p>I'm glad you asked. I want this blog to act as a testimonial for my growth both professionally, and personally. I recently went through a dramatic career change where I decided I wanted to be a software developer. Good idea right? I thought so. But with that decision has come to a lot of ups and downs. Modern technology is expansive! There is so much to learn, which at times can seem daunting, but I see it as a benefit. Learning is the key to everything! Not just to continue to grow professionally, but personally as well. We all have our difficulties, but those who work to change that have a special place in my heart. And this is my aim for this blog. We are all under constant construction. No one is perfect. And if they are, they're probably boring (jk perfect people are welcomed here too). It can be scary to seek out our flaws and confront them. Which takes me to my final point. I want to do that here. Some of my posts will be brutally honest (Please be nice internet). I've been through some hardships and want to help others relate. I am coming from a place of love and hope you stumble here with the same intentions. If you made it this far with me rambling, thank you and welcome to my construction site.</p>
            <p><Link to='/contact' className={aboutStyles.link}> Want to work with me? Reach out. </Link></p>
            </Layout>
    );
};

export default AboutPage;