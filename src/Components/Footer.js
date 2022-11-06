import React from "react";
import AccountInfo from "./AccountInfo";
import { NavLink } from "react-router-dom";

import "./Footer.css";

function Footer(props) {
  const progPerctage = {
    width: props.progress,
    backgroundColor: "#3413d8",
  };
  console.log(props.rstemail) 
  return (
    <React.Fragment>
      <footer className="container-fluid bg-white pt-3 ">
        <div className="row mb-3">
          <div className="col-6 col-md-3 text-start">
            {props.showBack ? (
              <NavLink className="btn btn-back px-4" to={props.prevPage}>
                &larr; Back
              </NavLink>
            ) : (
              " "
            )}
          </div>
          <div className="d-none d-md-block col-md-6 ps-4">
            <div className="text-start text-secondary">
              <p className="progress-title">Step {props.pageNumber} of 3</p>
            </div>
            <div className="progress " style={{ height: "10px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Basic example"
                style={progPerctage}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-6 col-md-3 text-end">
            <NavLink className="btn btn-primary px-4" to={props.nextPage}>
              {" "}
              {props.next} {props.icon}
            </NavLink>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
export default Footer;
