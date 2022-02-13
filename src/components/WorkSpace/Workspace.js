import React, { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EditIcon from "@mui/icons-material/Edit";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GitHubIcon from "@mui/icons-material/GitHub";
import PeopleIcon from "@mui/icons-material/People";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TranslateIcon from "@mui/icons-material/Translate";
import LinkIcon from "@mui/icons-material/Link";
import LanguageIcon from "@mui/icons-material/Language";
import VideocamIcon from "@mui/icons-material/Videocam";
import MessageIcon from "@mui/icons-material/Message";
import EventIcon from "@mui/icons-material/Event";
import NoteIcon from "@mui/icons-material/Note";
import CloseIcon from "@mui/icons-material/Close";
import "./Workspace.css";

function Workspace() {
  const [toggleState, setToggleState] = useState(0);
  const [buttons, setButton] = useState([]);
  var i = 1;
  const [name, setName] = useState(["Videocam", "Schedule", "Mail", "Compose"]);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [bool, setBool] = useState(true);
  const handleClose = (btn) => {
    setButton(buttons.filter((button) => btn != button));
  };

  useEffect(() => {
    if (buttons.length == 0) {
      setToggleState(0);
    } else {
      setToggleState(null);
    }
  }, [bool]);

  const handleButton = (index) => {
    if (buttons.length < 4) {
      setButton([...buttons, index]);
    } else {
      setToggleState(-1);
    }
  };

  return (
    <div className="row">
      <div className="col-md-4 col-sm-6 ">
        <div className="profile">
          <div className="top">
            <div className="intro">
              <div className="name">
                <h5>Jean-Samuel Najnudel</h5>
                <div className="edit-icons">
                  <button>
                    <EditIcon />
                  </button>
                  <button>
                    <VerifiedUserIcon />
                  </button>
                </div>
              </div>
              <div className="info">
                <p className="text-secondary">President</p>
                <p className="comp-name">
                  <strong>
                    Ringover | <PeopleIcon /> 101-250
                  </strong>
                </p>
                <a href="http://www.ringover" className="web">
                  http://www.ringover
                </a>
              </div>
            </div>

            <div className="social-icons">
              <LinkedInIcon className="icon" />
              <GitHubIcon className="icon" />
            </div>
          </div>
          <div className="topics">
            <h5 className="topic">Topics</h5>
            <div className="flex">
              <button className="btns btn btn-ouline">Some Topic</button>
              <button className="btns btn btn-outline">Some Topic Name</button>
            </div>
          </div>

          <div className="contact">
            <h5 className="topic">Contact</h5>
            <p>
              <EmailIcon /> example@ringover.com
            </p>
            <p>
              <PhoneIcon /> +33 56787 89076
            </p>
            <p>
              <PhoneIcon /> +33 89080 34578
            </p>
          </div>

          <div className="add">
            <h5 className="topic">Additionals</h5>
            <p>
              <EmailIcon /> president@ringover.com
            </p>
            <p>
              <TranslateIcon /> Francis
            </p>
            <p>
              <LinkIcon /> www.youtube.com/ringover
            </p>
            <p>
              <LanguageIcon /> Indian Standard (+5:30)
            </p>
          </div>
          <div className="final-icons flex">
            <div className="phone">
              <PhoneIcon />
            </div>
            <div className="other-icons flex">
              <button
                className={
                  toggleState === 1
                    ? "tabs active-tabs btn-info"
                    : "tabs btn-info"
                }
                onClick={() => {
                  toggleTab(1);
                  handleButton(1);
                }}
              >
                <VideocamIcon />
              </button>
              <button
                className={
                  toggleState === 2
                    ? "tabs active-tabs btn-info"
                    : "tabs btn-info"
                }
                onClick={() => {
                  toggleTab(2);
                  handleButton(2);
                }}
              >
                <EventIcon />
              </button>
              <button
                className={
                  toggleState === 3
                    ? "tabs active-tabs btn-info"
                    : "tabs btn-info"
                }
                onClick={() => {
                  toggleTab(3);
                  handleButton(3);
                }}
              >
                <EmailIcon />
              </button>
              <button
                className={
                  toggleState === 4
                    ? "tabs active-tabs btn-info"
                    : "tabs btn-info"
                }
                onClick={() => {
                  toggleTab(4);
                  handleButton(4);
                }}
              >
                <MessageIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-sm-6">
        <div className="row work">
          <div className="Heading col-6 d-flex justify-content-start">
            <h3>WorkSpace</h3>
          </div>
          <div className="col-6 d-flex justify-content-end work-icons">
            <NoteIcon />
          </div>
        </div>

        <div className="row">
          {buttons.map((btn, index) => (
            <div className="col">
              <div>
                <div
                  key={index}
                  className="btn btn-info btn1 "
                  onClick={() => {
                    setToggleState(btn);
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <div>{name[btn - 1]}</div>
                    <div>
                      <a
                        type="btn"
                        id={i++}
                        onClick={() => {
                          handleClose(btn);
                          setBool(!bool);
                        }}
                      >
                        <CloseIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col">
            <div
              className={
                toggleState === 0 ? "content  active-content" : "content"
              }
            >
              <h5>Your WorkSpace is Empty</h5>
            </div>

            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <h5>This is a Videocam</h5>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <h5>This is a Schedule</h5>
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <h5>This is a Email</h5>
            </div>

            <div
              className={
                toggleState === 4 ? "content  active-content" : "content"
              }
            >
              <h5>This is a Compose</h5>
            </div>
            <div
              className={
                toggleState === -1 ? "content  active-content" : "content"
              }
            >
              <h5>Oops..Remove some tabs and Try again!!</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
