import "./contact-popup.scss";
import React from "react";

export default function ContactPopUp({ opencontact, contactOpen }) {
  return (
    <div
      className={"formContainer " + (contactOpen && "active")}
      id="formContainer"
    >
      <form action="https://formsubmit.co/benjinorval@gmail.com" method="POST">
        <h2>Contact Me</h2>
        <br />
        <p className="formParagraph">
          If you any questions, please feel free to contact me.
        </p>
        <hr />
        <button id="btnClose" onClick={opencontact}>
          x
        </button>
        <div className="inputContainer">
          <h3>Name</h3>
          <div className="name">
            <div className="firstName">
              <input
                type="text"
                id="firstName"
                minlength="1"
                maxlength="100"
                pattern="[a-zA-Z]+"
                required
              />
              <br />
              <label for="firstName">First Name</label>
            </div>
            <div className="lastName">
              <input
                type="text"
                id="lastName"
                minlength="1"
                maxlength="100"
                pattern="[a-zA-Z]+"
                required
              />
              <br />
              <label for="lastName">Last Name</label>
            </div>
          </div>
          <h3>Email</h3>
          <input type="text" id="email" required />
          <br />
          <h3>Send me a message</h3>
          <input
            type="text"
            name="_subject"
            placeholder="Subject"
            id="subject"
          ></input>
          <textarea placeholder="Send me a message!" required />
          <input type="submit" id="submit" />
        </div>
      </form>
    </div>
  );
}
