import React from 'react';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SEO from '../components/seo';
import '../templates/blog.module.scss';

import JustComments from 'gatsby-plugin-just-comments';

import Layout from '../components/layout';
import Head from '../components/head';

/*
export const query = graphql`
    query ($slug: String!) {
     markdownRemark ( fields: { slug: { eq: $slug } }) {
        frontmatter {
          title
          date
        }
        html
      }
    }
`;
*/

export const query = graphql`
    query($slug: String!) {
    contentfulBlogPost (slug: {eq: $slug}){
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
    }
}
`;

const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title["en-US"];
                const url = node.data.target.fields.file['en-US'].url;
                return <img alt={alt} src={url} style={{display:'block',marginLeft: 'auto', marginRight:'auto'}}/>
            }
        }
    }

    

    return (
        <Layout>
            {/*
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <p>{props.data.markdownRemark.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                */}
            <SEO title={props.data.contentfulBlogPost.title}/>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            <p style={{fontWeight:'bold', fontStyle: 'italic'}}>Stay up to date with all my post <Link to='/subscribe'>Subscribe</Link></p>
            <JustComments recaptcha="true" apikey="40ac71d2-7604-4559-a5ab-b6c15c98bbdd"/>
        </Layout>
    );
}

export default Blog;