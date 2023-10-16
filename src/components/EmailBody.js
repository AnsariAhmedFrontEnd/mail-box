import React from "react";
import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";
import StarIcon from "@mui/icons-material/Star";
import LabelImportant from "@mui/icons-material/LabelImportant";
import './EmailBody.css';

const EmailBody = () => {
  return (
    <div className="email-body">
      <div className="email-body__left">
        <CheckBoxOutlineBlank />
        <StarIcon />
        <LabelImportant />
        <h4>Ahmed Shahid</h4>
      </div>
      <div className="email-body__middle">
      <div className="email-body-middle__msg">
      <p><b>Subjesc</b> This is messages</p>
      </div>
      </div>
      <div className="email-body__right">
       <p>02:30 PM</p>
      </div>
    </div>
  );
};

export default EmailBody;
