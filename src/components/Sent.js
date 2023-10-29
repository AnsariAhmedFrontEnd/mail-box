import React, {useCallback, useEffect} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { mailActions } from '../store/mailSlice';
import EmailBody from './EmailBody';

const Sent =() => {

  const dispatch = useDispatch();
  
  const sent = useSelector((state) => state.mail.sent);
  const user = useSelector(state => state.auth.email);
 

  const getInboxEmails = useCallback(async() => {
    const sanitizedUser = user.replace(/[@.]/g, '');
    console.log(sanitizedUser);

    const getEmailsUrl = `https://mail-box-7480d-default-rtdb.firebaseio.com/${sanitizedUser}/sent.json`;
    const response = await axios(getEmailsUrl);

    if (response.data) {
      const emailArray = [];
      for (const key in response.data) {
        emailArray.push({ id: key, ...response.data[key] });
      }
      console.log(emailArray);
      dispatch(mailActions.setSentBox(emailArray));
    }


    
  },[user,dispatch]);

  useEffect(() => {
    getInboxEmails();
  }, [getInboxEmails])

  return (
    <div className="email-list">
      {sent.map((email) => (
        <EmailBody
          key={email.id}
          from={email.to}
          subject={email.subject}
          msg={email.msg}
          timeStamp={new Date(email.timeStamp).toLocaleString()}
        />
      ))}
    </div>
  );
};
export default Sent;