import { Fragment } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import './Welcome.css';
import EmailList from "../components/EmailList";

const Welcome = () => {
  return (
    <Fragment>
      <Header />
      <div className="sidebar__body">
        <Sidebar />
      <EmailList />
      </div>
    </Fragment>
  );
};

export default Welcome;
