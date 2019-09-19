import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import subscribeStyles from './CSS/subscribe.module.scss';

const SubscribePage = () => {
  return(
    <Layout>
      <Head title="Subscribe"/>
      <form name="subscribe" 
      method="post" 
      data-netlify="true" 
      data-netlify-honeypot="bot-field"
      className={subscribeStyles.myForm}>
      <input type="hidden" name="form-name" value="subscribe" />
      <input type="hidden" name="bot-field" />
        <p>
          <label>First Name: <input type="text" name="firstname" placeholder="John"/></label>   
        </p>
        <p>
          <label>Last Name: <input type="text" name="lastname" placeholder="Snow"/></label>   
        </p>
        <p>
          <label>Email: <input type="email" name="email" placeholder="johnsnow@nightswatch.com"/></label>
        </p>
        <p>
          <label>Message: <textarea name="message" placeholder="Give me some feedback"></textarea></label>
        </p>
        <p>
          <button type="submit">Subscribe</button>
        </p>
      </form>
    </Layout>
  )
} 

export default SubscribePage;