import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';

import Layout from '../components/layout';
import pagesStyles from './index.module.scss';
import Head from '../components/head';



const IndexPage = () => {

    const pageQuery = useStaticQuery(graphql`
      query {
        museumpic: file(relativePath: { eq: "IMG_0264.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        intropic: file(relativePath: { eq: "IMG_2603.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        graffitipic: file(relativePath: { eq: "blog-home.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        musicpic:file(relativePath: { eq: "nomusic.jpg" }) {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
        footballpic:file(relativePath: { eq: "home-football-card-pic.jpg" }) {
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
            <SEO title="Home" keywords={[`blog`, `gatsby`]} />
            <Head title="Home" />
            <div className={pagesStyles.flexContainer}>
              <div className={[pagesStyles.flexItem, pagesStyles.vertAlign].join(' ')}>
                <h1>Hi!</h1>
                <h2 style={{marginBottom:0}}>I'm Chris, a full-stack developer currently residing in Orlando, FL</h2>
              </div>
              <div style={{width:'100%',flex:1, marginTop:'1.5rem'}}>
              <Img fluid={pageQuery.intropic.childImageSharp.fluid}/>
              </div>
            </div>
            <blockquote><q>You miss 100% of the shots you don't take -Wayne Gretzky</q> <p>-Michael Scott</p></blockquote>
            <p>I took one right out of the Michael Scott life lessons book and took my shot. I launched Under Constant Construction as a safe space for me to develop my skills both as a developer, and a person. This is my ground zero for growth. Thank you for those who are along the ride with me.</p>
            <p>Want to know more about me? <Link to='/about' className={pagesStyles.link}>Try here.</Link></p>
            <div className={[pagesStyles.flexContainer, pagesStyles.card2].join(' ')}>
              <div style={{width:'100%', flex:1}}>
              <Img fluid={pageQuery.graffitipic.childImageSharp.fluid} 
              alt="graffiti on Shoreditch, London wall"/>
              </div>
              <div className={pagesStyles.flexItem}>
                <h3>Blog Post</h3>
                <p>I have a lot to talk about.</p>
                <button><Link to='/blog' className={pagesStyles.button}>Recent Post</Link></button>
              </div>
            </div>
            <div className={[pagesStyles.flexContainer, pagesStyles.card2].join(' ')}>
            <div style={{width:'100%', flex:1}}>
              <Img fluid={pageQuery.musicpic.childImageSharp.fluid} alt="No Music No Life"/>
              </div>
              <div className={[pagesStyles.flexItem, pagesStyles.mmItem].join(' ')}>
                <h3>Music Monday</h3>
                <p>Let's find some music.</p>
                <button><Link to='/music-monday' className={pagesStyles.button}>Recent Post</Link></button>
              </div>
            </div>
            <div className={[pagesStyles.flexContainer, pagesStyles.card2].join(' ')}>
            <div style={{width:'100%',flex:1}}>
              <Img fluid={pageQuery.footballpic.childImageSharp.fluid} alt="Soccer ball sitting in field"/>
              </div>
              <div className={pagesStyles.flexItem}>
                <h3>Football Friday</h3>
                <p>Let's talk about football.</p>
                <button><Link to='/football-friday' className={pagesStyles.button}>Recent Post</Link></button>
              </div>
            </div>
            <p>Want to follow someone whose posts will amaze you? (not really but it couldn't hurt) <Link to='/contact' className={pagesStyles.link}>Follow.</Link></p>
            <p>Need a developer? <Link to='/contact' className={pagesStyles.link}>Contact me.</Link></p>
            <p>Want a picture of me looking cool? <a className={pagesStyles.link}>There's no link, just scroll down.</a></p>
            <figure>
                <Img fluid={pageQuery.museumpic.childImageSharp.fluid} alt="Picture of me at the Albertina in Vienna" />
                <figcaption>Strolling through the Albertina, Vienna.</figcaption>
            </figure>
        </Layout>
        );

};

export default IndexPage;
