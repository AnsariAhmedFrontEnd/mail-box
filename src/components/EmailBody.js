import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";
import StarIcon from "@mui/icons-material/Star";
import LabelImportant from "@mui/icons-material/LabelImportant";
import "./EmailBody.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mailActions } from "../store/mailSlice";

const EmailBody = ({ from, subject, msg, timeStamp, id }) => {
  const {mailId} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setMails = () => {
    dispatch(mailActions.openMsg({ from, subject, msg }));
    navigate(`/inbox/${id}`);
  };
  return (
    <div className="email-body" onClick={setMails}>
      <div className="email-body__left">
        <CheckBoxOutlineBlank />
        <StarIcon />
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
