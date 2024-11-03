import React, {useState} from "react";
import HeaderComponent from "../components/header";

const ContactPage = () => {

    const [emailAddress, updateEmailAddress] = useState("");
    const [contactNumber, updateContactNumber] = useState("");
    const [message, updateMessage] = useState("");

    const copyEmailAddress = (event) => {
        updateEmailAddress(event.target.value);
    }

    const copyContactNumber = (event) => {
        updateContactNumber(event.target.value);
    }

    const copyMessage = (event) => {
        updateMessage(event.target.value);
    }

    const submitAction = () => {
        const data = {
            email : emailAddress,
            contact : contactNumber,
            message: message
        };

        console.log(data);
    }

    return(
        <div>
            <HeaderComponent></HeaderComponent>
            <h2>This is a Contact Page</h2>
            <div className="contact-space">
                <label className="contact-label">Enter your Email Address</label>
                <input className="contact-textfield" onChange={copyEmailAddress} type="text" placeholder="Enter your Email Address" />
            </div>
            <div className="contact-space">
                <label className="contact-label">Enter your Contact Number</label>
                <input className="contact-textfield" onChange={copyContactNumber} type="text" placeholder="Enter your Contact Number" />
            </div>
            <div className="contact-space">
                <label className="contact-label">Enter your Message</label>
                <textarea className="contact-textfield" onChange={copyMessage} placeholder="Enter your Message"></textarea>
            </div>
            <div className="contact-space">
                <button className="contact-submit" onClick={() => submitAction()}>Submit</button>
            </div>
            <div>
                <p>This sender email id - {emailAddress}</p>
                <p>This sender contact number - {contactNumber}</p>
                <p>This sender message - {message}</p>
            </div>
        </div>
    )
}

export default ContactPage;