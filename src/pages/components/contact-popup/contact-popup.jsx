import './contact-popup.scss';
import React from 'react';

export default function ContactPopUp({ opencontact, contactOpen }) {
    return (
        <div>
            <li onClick={opencontact} className="nav-item">Contact</li>
                <div 
                // className={contactOpen ? "formContainer active" : "formContainer"} 
                className={"formContainer " + (contactOpen && "active")}
                id="formContainer">
                <form>
                    <h2>Contact Me</h2>
                    <br />
                    <p className="formParagraph">If you any questions, please feel free to contact me.</p>
                    <hr />
                    <button id="btnClose" onClick={opencontact}>x</button>
                    <div class="inputContainer">
                        <h3>Name</h3>
                        <div className="name">
                            <div className="firstName">
                                <input type="text" id="firstName" minlength="1" maxlength="100" pattern="[a-zA-Z]+" required />
                                <br />
                                <label for="firstName">First Name</label>
                            </div>
                            <div class="lastName">
                                <input type="text" id="lastName" minlength="1" maxlength="100" pattern="[a-zA-Z]+" required />
                                <br />
                                <label for="lastName">Last Name</label>
                            </div>
                        </div>
                        <h3>Email</h3>
                        <input type="text" id="email" required />
                        <br />
                        <h3>Send me a message</h3>
                        <textarea placeholder="Send me a message!" required />
                        <input type="submit" id="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}
