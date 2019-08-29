import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';

import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import layoutStyles from './layout.module.scss';

const Layout = (props) => {

    const imageData = useStaticQuery(graphql`
        query {
            background: file(relativePath: {eq: "corner-building.jpg"}) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 4160) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
  
    return (
        <BackgroundImage fluid={imageData.background.childImageSharp.fluid} style={{backgroundSize:'cover'}}>
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <div className={`${layoutStyles.card} ${layoutStyles.cardContainer}`}>
                    <Header />
                </div>
                <div className={`${layoutStyles.card} ${layoutStyles.cardContainer}`}>
                    {props.children}
                </div>
            </div>
            <div className={`${layoutStyles.card} ${layoutStyles.cardContainer}`}>
                <Footer />
            </div>
        </div>
        </BackgroundImage>
        );
};

export default Layout;