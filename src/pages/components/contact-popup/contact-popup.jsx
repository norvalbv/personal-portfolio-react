import './contact-popup.scss';

export default function ContactPopUp() {
    // const form = document.getElementById("formContainer");
    // const closeBtn = document.getElementById("btnClose");

    // const openForm = () => {
    //     form.style.display = "block";
        
    // }
    // closeBtn.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     form.style.display = "none";
    // });
    

    return (
        <div className="formContainer" id="formContainer">
            <form>
                <h2>Contact Me</h2>
                <br />
                <p className="formParagraph">If you any questions, please feel free to contact me.</p>
                <hr />
                <button id="btnClose">x</button>
                <div class="inputContainer">
                    <h3>Name</h3>
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
                    <h3>Email</h3>
                    <input type="text" id="email" required />
                    <br />
                    <h3>Send me a message</h3>
                    <textarea placeholder="Send me a message!" required />
                    <input type="submit" id="submit" />
                </div>
            </form>
        </div>
    )
}
