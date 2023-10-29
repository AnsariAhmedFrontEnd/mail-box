import React from "react";
import "./EmailDetails.css";
import { Avatar } from "@mui/material";
import {useSelector} from 'react-redux'

const EmailDetails = () => {
  const emailDetails = useSelector(state => state.mail.selectedMsg);
  return (
    <div className="emailbody__msg">
      
      <div className="emaildetails__header">
        <div className="emaildetails__headerleft">
          <h4>{emailDetails.subject}</h4>
        </div>
      </div>
      <div className="emaildetails__middleheader">
        <div className="emaildetails__middleheaderleft">
          <Avatar />
          <h4>{emailDetails.from}</h4>
        </div>
      </div>
      <div className="emaildetails__body">
      <div dangerouslySetInnerHTML={{ __html: emailDetails.msg }}></div>
      </div>
    </div>
  );
};

export default EmailDetails;
