import React from 'react';
import './EmailList.css';
import EamilListSettings from './EamilListSettings';
import EmailType from './EmailType';
import EmailBody from './EmailBody';

const EmailList =() => {
  return (
    <div className='email-list'>
        <EamilListSettings />
        <EmailType />
        <EmailBody />
      
    </div>
  )
}

export default EmailList
