import "./EmailList.css";
import EmailListSettings from "./EamilListSettings";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";

import { useSelector } from "react-redux";

const EmailList = () => {
  const emails = useSelector((state) => state.mail.emails);

  return (
    <div className="email-list">
      <EmailListSettings />
      <EmailType />
      {emails.map((email) => (
        <EmailBody
          key={email.id}
          to={email.to}
          subject={email.subject}
          msg={email.msg}
          timeStamp={new Date(email.timeStamp?.seconds * 1000).toLocaleString()}
        />
      ))}
    </div>
  );
};

export default EmailList;
