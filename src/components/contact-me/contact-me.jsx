import "./contact-me.scss";

const ContactMe = () => {
  return (
    <div id="contact">
      <h2 id="contact-title">Come Say Hi!</h2>
      <p id="contact-text">
        Drop me an email for any reason or alternatively, reach out via my
        socials
      </p>
      <form
        action="https://formsubmit.co/benjinorval@gmail.com"
        method="POST"
        className="input-container"
      >
        <h3 className="input-label">Name</h3>
        <input
          type="text"
          minLength="1"
          maxLength="100"
          pattern="[a-zA-Z]+"
          required
          className="input-field"
          placeholder="Name"
        />
        <h3 className="input-label">Email</h3>
        <input
          type="text"
          id="email"
          className="input-field"
          required
          placeholder="Email"
        />
        <h3 className="input-label">Send me a message</h3>
        <input
          type="text"
          name="_subject"
          placeholder="Subject"
          className="input-field"
        />
        <textarea
          placeholder="Send me a message!"
          className="input-field"
          style={{ height: "10rem" }}
          required
        />
        <input type="submit" id="submit" />
      </form>
      <p style={{ fontSize: "14px" }}>Reach me on my socials...</p>
      <ul id="socials">
        <li>GitHub</li>
        <li>Linked In</li>
      </ul>
    </div>
  );
};

export default ContactMe;
