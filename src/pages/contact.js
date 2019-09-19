import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from '../components/layout';
import Head from '../components/head';
import contactStyles from './CSS/contact.module.scss';
import Img from 'gatsby-image';

const ContactPage = () => {
    const socialIcon = useStaticQuery(graphql`
      query {
        twitterIcon: file(relativePath: {eq: "01_Twitter.png"}) {
            childImageSharp {
                fixed(width:100){
                    ...GatsbyImageSharpFixed
                }
            }
        }
        linkedInIcon: file(relativePath: {eq: "01_Linkedin.png"}) {
            childImageSharp {
                fixed(width:100){
                    ...GatsbyImageSharpFixed
                }
            }
        }
        instaIcon: file(relativePath: {eq: "01_Instagram.png"}) {
            childImageSharp {
                fixed(width:100){
                    ...GatsbyImageSharpFixed
                }
            }
        }
        gmailIcon: file(relativePath: {eq: "gmailicon.jpg"}) {
            childImageSharp {
                fixed(width:100){
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`);

    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact me</h1>
            <div className={contactStyles.flexMail}>
                <OutboundLink className={contactStyles.exlink} href="mailto:chrisantiago217@gmail.com">
                    <Img className={contactStyles.mail} fixed={socialIcon.gmailIcon.childImageSharp.fixed} />
                    <p>Click to Mail</p>
                </OutboundLink>
            </div>
            <h2 className={contactStyles.follow}>Follow me</h2>
            <div className={contactStyles.flexContainer}>
                <div className={contactStyles.flexBox}>
                    <OutboundLink className={contactStyles.exlink} href="https://twitter.com/CRS_THE_HUMAN" target="_blank">
                        <Img fixed={socialIcon.twitterIcon.childImageSharp.fixed} alt="Twitter icon" />
                        <p>@CRS_THE_HUMAN</p>
                    </OutboundLink>
                </div>
                <div className={contactStyles.flexBox}>
                    <OutboundLink className={contactStyles.exlink} href="https://www.linkedin.com/in/christopher-a-santiago/" target="_blank">
                        <Img fixed={socialIcon.linkedInIcon.childImageSharp.fixed} alt="LinkedIn Icon" />
                        <p>Christopher Santiago</p>
                    </OutboundLink>
                </div>
                <div className={contactStyles.flexBox}>
                    <OutboundLink className={contactStyles.exlink} href="https://www.instagram.com/chris.thehuman/?hl=en" target="_blank">
                        <Img fixed={socialIcon.instaIcon.childImageSharp.fixed} alt="Instagram Icon" />
                        <p>chris.thehuman</p>
                    </OutboundLink>
                </div>
            </div>
            <div>
                <h2 className={contactStyles.subscribe}><Link to="/subscribe">Subscribe</Link></h2>
            </div>
            </Layout>
        );
};

export default ContactPage;