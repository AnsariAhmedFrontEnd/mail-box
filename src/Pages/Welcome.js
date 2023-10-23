import { Fragment } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Compose from "../components/Compose";
import './Welcome.css';
import EmailList from "../components/EmailList";
import {useSelector} from 'react-redux'
import EmailDetails from "../components/EmailDetails";
import { Routes, Route, useParams } from "react-router-dom";

const Welcome = () => {
  const mailBoxIsOpen = useSelector(state => state.mail.sendMessageIsOpen);
  return (
    <Fragment>
      <Header />
      <div className="sidebar__body">
        <Sidebar />
      
      <EmailList />
      <Routes>
          <Route
            path="/inbox/:emailKey"
            element={<EmailDetails />}
          />
        </Routes>
      </div>
   {mailBoxIsOpen &&  <Compose />}
    </Fragment>
  );
};

export default Welcome;
