import React from "react";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { BsArrowLeftRight } from "react-icons/bs";
import { BsBoxArrowInRight } from "react-icons/bs";
import { IoLogoElectron } from "react-icons/io5";
function Navbar() {
  const iconStyles = {
    padding: "0 10px 0 10px",
    fontSize: "1.2em",
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light  nav">
      <div className="nav-content">
        <IoLogoElectron
          style={{ fontSize: "1.5em", marginRight: "15px", marginTop: "10px" }}
        />
        <a class="navbar-brand" href="#" style={{color:"white"}}>
          Sales Machine
        </a>
      </div>

      <div class="nav-content " id="navbarSupportedContent">
        <div class="input-group">
          <div class="form-outline  collapse navbar-collapse">
            <input
              id="search-input"
              type="search"
              id="form1"
              class="form-control input-control"
              placeholder="search"
            />
          </div>
          <button id="search-button" type="button" class="btn btn-info">
            <BsSearch />
          </button>
        </div>
      </div>

      <div
        className="nav-content"
        style={{ display: "flex", margin: "0.5rem", padding: "0 10px 0 10px" }}
      >
        <div className="icon">
          <BsPersonCircle
            size="2em"
            style={iconStyles}
            className="icon-style"
          />
        </div>

        <div className="icon">
          <BsArrowLeftRight
            size="2em"
            style={iconStyles}
            className="icon-style"
          />
        </div>
        <div className="icon">
          <BsBoxArrowInRight
            size="2em"
            style={iconStyles}
            className="icon-style"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
