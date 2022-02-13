import React, { useEffect, useState } from "react";
import { MdFileUpload } from "react-icons/md";
import { BsFillPauseFill } from "react-icons/bs";
import { FaStop } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./RightBar.css";
function RightBar() {
  const [toggleState, setToggleState] = useState(1);
  const [show, setShow] = useState(true);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <div>
      {width < 900 && width > 800 && (
        <button onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </button>
      )}

      <div className={width < 900 && show ? "RightBar collapse" : "RightBar"}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-betwwen",
            flexDirection: "row",
          }}
        >
          <div
            class="btn-group salesforce"
            role="group"
            aria-label="Basic example"
            style={{
              display: "flex",
              margin: "1rem",
              justifyContent: "space-between",
            }}
          >
            <button type="button" class="btn btn-info">
              <MdFileUpload /> Salesforce
            </button>
          </div>

          <div
            class="btn-group salesforce"
            role="group"
            aria-label="Basic example"
            style={{
              display: "flex",
              margin: "1rem",
              justifyContent: "space-between",
            }}
          >
            <button type="button" class="btn btn-light">
              <BsFillPauseFill />
            </button>
            <button
              type="button"
              class="btn btn-light"
              style={{ color: "red" }}
            >
              <FaStop />
            </button>
          </div>
        </div>
        <hr />
        <div className="container1">
          <div className="bloc-tabs1 ">
            <button
              className={
                toggleState === 1
                  ? "tabs1 active-tabs1 btn-info"
                  : "tabs1 btn-info "
              }
              onClick={() => toggleTab(1)}
            >
              Activity
            </button>
            <button
              className={
                toggleState === 2
                  ? "tabs1 active-tabs1 btn-info "
                  : "tabs1 btn-info "
              }
              onClick={() => toggleTab(2)}
            >
              Tasks
            </button>
            <button
              className={
                toggleState === 3
                  ? "tabs1 active-tabs1 btn-info "
                  : "tabs1 btn-info "
              }
              onClick={() => toggleTab(3)}
            >
              Progress
            </button>
          </div>

          <div className="content-tabs1">
            <div
              className={
                toggleState === 1 ? "content1  active-content1" : "content1"
              }
            >
              <h5>Activity Section</h5>
            </div>

            <div
              className={
                toggleState === 2 ? "content1  active-content1" : "content1"
              }
            >
              <h5>Task section</h5>
            </div>

            <div
              className={
                toggleState === 3 ? "content1  active-content1" : "content1"
              }
            >
              <h5>Progress section</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
