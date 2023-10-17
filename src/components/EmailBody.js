
import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";
import StarIcon from "@mui/icons-material/Star";
import LabelImportant from "@mui/icons-material/LabelImportant";
import './EmailBody.css';

const EmailBody = (props) => {
 
  return (
    <div className="email-body">
      <div className="email-body__left">
        <CheckBoxOutlineBlank />
        <StarIcon />
        <LabelImportant />
        <h4>{props.to}</h4>
      </div>
      <div className="email-body__middle">
      <div className="email-body-middle__msg">
      <p><b>{props.subject}</b>{props.msg}</p>
      </div>
      </div>
      <div className="email-body__right">
       <p>{props.timeStamp}</p>
      </div>
    </div>
  );
};

export default EmailBody;
