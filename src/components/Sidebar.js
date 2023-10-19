import { React, useState } from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SidebarOptions from "./SidebarOptions";
import MailIcon from "@mui/icons-material/Mail";
import StarIcon from "@mui/icons-material/Star";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useDispatch } from "react-redux";
import { mailActions } from "../store/mailSlice";

const Sidebar = () => {
  const [activeOptions, setActiveOptions] = useState({
    inbox: true,
    starred: false,
    important: false,
    sent: false,
    drafts: false, // Set the default active option
  });
  const dispatch = useDispatch();

  const composeMailHandler = () => {
    dispatch(mailActions.openSendMessage());
  };

  const handleSidebarOptionClick = (optionName) => {
    // Create a new object with all options set to false, and the clicked option set to true
    const newActiveOptions = {
      inbox: false,
      starred: false,
      important: false,
      sent: false,
      drafts: false,
      [optionName]: true,
    };



    setActiveOptions(newActiveOptions);
  };

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon />}
        className="compose__btn"
        onClick={composeMailHandler}
      >
        Compose
      </Button>

      <div onClick={() => handleSidebarOptionClick("inbox")}>
        <SidebarOptions
          Icon={MailIcon}
          title="Inbox"
          number="224"
          isActive={activeOptions.inbox}
        />
      </div>

      <div onClick={() => handleSidebarOptionClick("starred")}>
        <SidebarOptions
          Icon={StarIcon}
          title="Starred"
          number="224"
          isActive={activeOptions.starred}
        />
      </div>

      <div onClick={() => handleSidebarOptionClick("important")}>
        <SidebarOptions
          Icon={LabelImportantIcon}
          title="Important"
          number="224"
          isActive={activeOptions.important}
        />
      </div>

      <div onClick={() => handleSidebarOptionClick("sent")}>
        <SidebarOptions
          Icon={SendIcon}
          title="Sent"
          number="224"
          isActive={activeOptions.sent}
        />
      </div>
      <div onClick={() => handleSidebarOptionClick("drafts")}>
        <SidebarOptions
          Icon={DraftsIcon}
          title="Drafts"
          number="224"
          isActive={activeOptions.drafts}
        />
      </div>
    </div>
  );
};

export default Sidebar;
