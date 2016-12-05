import React from 'react';
import './ContactForm.css';

let ContactForm = React.createClass({
    handleClick: function (event) {
        event.preventDefault();

    },
    render: function () {
        return(
        <div className="contactForm">
                <fieldset style={{"padding":"0.5em"}}>
                    <legend><h3>Contact us</h3></legend>
                    <label className="PersonNameL">Your name:</label><br></br>
                    <input className="PersonNameI" type="text" /><br></br>
                    <label className="PersonEmailL">Your email:</label><br></br>
                    <input className="PersonEmailI" type="text" /><br></br>
                    <label className="SubjectL">Subject:</label><br></br>
                    <input className="SubjectI" type="text"/><br></br>
                    <label className="MessageL">Your message:</label><br></br>
                    <textarea className="MessageI" type="text"/><br></br>
                    <button onClick={this.handleClick}><b>Submit</b></button>
                </fieldset>
        </div>
        )
    }
});

export default ContactForm;