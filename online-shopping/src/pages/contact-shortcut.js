import React, {useState} from "react";
import HeaderComponent from "../components/header";

const ContactShortCutPage = () => {
    
    const [contactForm, updateContactForm] = useState({
        emailAddress : "",
        contactNumber : "",
        message: ""    
    });

    const copyInputField = (event) => {
        // dynamicFucntionName({...dynamicVariable, [event.target.id] : event.target.value})
        updateContactForm({...contactForm, [event.target.id] : event.target.value });
    }

    const submitAction = () => {
        console.log(contactForm);
    }

    return(
        <div>
            <HeaderComponent></HeaderComponent>
            <h2>Contact ShortCut Page</h2>
            <div className="contact-space">
                <label className="contact-label">Enter your Email Address</label>
                <input id="emailAddress" className="contact-textfield" type="text" placeholder="Enter your Email Address" onChange={copyInputField}/>
            </div>
            <div className="contact-space">
                <label className="contact-label">Enter your Contact Number</label>
                <input id="contactNumber" className="contact-textfield" type="text" placeholder="Enter your Contact Number" onChange={copyInputField}/>
            </div>
            <div className="contact-space">
                <label className="contact-label">Enter your Message</label>
                <textarea id="message" className="contact-textfield" placeholder="Enter your Message" onChange={copyInputField}></textarea>
            </div>
            <div className="contact-space">
                <button className="contact-submit" onClick={() => submitAction()}>Submit</button>
            </div>
            <div>
                <p>This sender email id - {contactForm.emailAddress}</p>
                <p>This sender contact number - {contactForm.contactNumber}</p>
                <p>This sender message - {contactForm.message}</p>
            </div>
        </div>
    )
}

export default ContactShortCutPage;