import { Fragment } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import './Welcome.css';

const Welcome = () => {
  return (
    <Fragment>
      <Header />
      <div className="sidebar__body">
        <Sidebar />
      </div>
    </Fragment>
  );
};

export default Welcome;
