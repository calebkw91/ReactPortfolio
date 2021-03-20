import React from "react";

function Contact(props) {
    return (
        <div className="container">
            <h3>Contact Me</h3>
            <p>You can view my resume <a href="https://drive.google.com/file/d/1-pqWAeKlnh5fG5jz7dFWHg8-o-Db6P86/view?usp=sharing" target="_blank" rel="noreferrer">here, </a>or leave me a message with the form below.</p>
            <form method="post" action="https://getform.io/f/8055ab6e-b5a9-4e24-8885-515ba98cbc6f">
                <div className="row gtr-uniform">
                    <div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
                    <div className="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
                    <div className="col-12"><input type="text" name="subject" id="subject" placeholder="Subject" /></div>
                    <div className="col-12"><textarea name="message" id="message" placeholder="Message" rows="6"></textarea></div>
                    <div className="col-12">
                        <ul className="actions">
                            <li><input type="submit" className="primary" value="Send Message" /></li>
                            <li><input type="reset" value="Reset Form" /></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;
