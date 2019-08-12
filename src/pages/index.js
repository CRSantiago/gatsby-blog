import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import pagesStyles from './index.module.scss';
import Head from '../components/head';



const IndexPage = () => {

    const pageQuery = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "IMG_0264.jpg" }) {
          childImageSharp {
            fluid (maxWidth: 590){
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `);

    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello.</h1>
            <h2>I'm Chris, a full-stack developer current residing in Orlando, FL</h2>
            <p>Okay.. but what is this website about? <Link to='/contact' className={pagesStyles.link}>Try here.</Link></p>
            <p>Want to read about things that I think I know I am talking about? <Link to='/blog' className={pagesStyles.link}>Read.</Link></p>
            <p>Want to follow someone whose post will amaze you? (not really but it couldn't hurt) <Link to='/contact' className={pagesStyles.link}>Follow.</Link></p>
            <p>Need a developer? <Link to='/contact' className={pagesStyles.link}>Contact me.</Link></p>
            <p>Want a picture of me looking cool? <a className={pagesStyles.link}>There's no link, just scroll down.</a></p>
            <figure>
                <Img fluid={pageQuery.file.childImageSharp.fluid} alt="Picture of me at the Albertina in Vienna" />
                <figcaption>Strolling through the Albertina, Vienna.</figcaption>
            </figure>
        </Layout>
        );

};

export default IndexPage;
