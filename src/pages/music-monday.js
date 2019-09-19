import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import blogStyles from './CSS/blog.module.scss';
import Head from '../components/head';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
          allContentfulBlogPost ( filter:{ tags: {eq: "music"}} sort: { fields: publishedDate, order: DESC }) {
            edges {
              node {
                title
                slug
                publishedDate(formatString: "MMMM Do, YYYY")
              }
            }
          }
        }
`);
    const post = data.allContentfulBlogPost.edges;
    
    return (
        <Layout>
            <Head title="Music Monday"/>
            <h1>Music Monday</h1>
            <ol className={blogStyles.posts}>
                {post.map((post) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${post.node.slug}`}>
                                <h2>{post.node.title}</h2>
                                <p>{post.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
            </Layout>
    );
};

export default BlogPage;
