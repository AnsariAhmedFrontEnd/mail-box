import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";
import LabelImportant from "@mui/icons-material/LabelImportant";
import "./EmailBody.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const EmailBody = ({ from, subject, msg, timeStamp, id }) => {
  const user = useSelector((state) => state.auth.email);
  const emails = useSelector(state => state.mail.emails);

  const isRead = emails.find((email) => email.id === id).isRead;


  const sanitizedUser = user.replace(/[@.]/g, "");

  const navigate = useNavigate();

  const setMails = async () => {
    try {
      const inboxUrl = `https://mail-box-7480d-default-rtdb.firebaseio.com/${sanitizedUser}/inbox/${id}.json`;
      await axios.patch(inboxUrl, { isRead: true });
    } catch (error) {
      console.log(error);
    }

    navigate(`/mails/inbox/${id}`);
  };
  return (
    <div className="email-body" onClick={setMails}>
      <div className="email-body__left">
        <div className={`dot ${isRead ? 'unread': 'read'} `}></div>
        <CheckBoxOutlineBlank />

        <LabelImportant />
        <h4>{from}</h4>
      </div>
      <div className="email-body__middle">
        <div className="email-body-middle__msg">
          <div>
            <h4>{subject}</h4>
          </div>
          <div dangerouslySetInnerHTML={{ __html: msg }}></div>
        </div>
      </div>
      <div className="email-body__right">
        <p>{timeStamp}</p>
      </div>
    </div>
  );
};

export default EmailBody;
