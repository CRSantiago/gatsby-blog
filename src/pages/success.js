import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import successStyles from './CSS/success.module.scss';

const Success = () => {
  return (
    <Layout>
      <Head title="Success Page"/>
      <div>
        <h2>Thank You For Your Support!!</h2>
        <p>Be on the look out in your email for a welcome letter!</p>
        <p>In the mean time, feel free to scroll around and check out some of my blog post</p>
        <div className={successStyles.flexContainer}>
        <Link to="/music-monday">Check out some of Music Monday post</Link> 
        <Link to="/football-friday">Let's talk football on Football Friday</Link>
        <Link to="/blog">Or you can check out my random rants</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Success;