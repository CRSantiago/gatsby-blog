import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import subscribeStyles from './subscribe.module.scss';

const SubscribePage = () => {
  return(
    <Layout>
      <Head title="Subscribe"/>
      <form name="subscribe" 
      method="POST" 
      data-netlify="true" 
      data-netlify-recaptcha="true" action="/" 
      data-netlify-honeypot="bot-field"
      className={subscribeStyles.myForm}>
      <input type="hidden" name="form-name" value="subscribe" />
          <div hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field"/>
              </label>
            </div>
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
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit">Subscribe</button>
        </p>
      </form>
    </Layout>
  )
} 

export default SubscribePage;