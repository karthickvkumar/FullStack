import React, {useState} from "react";
import HeaderComponent from "../components/header";

const RegisterPage = () => {

    const [registerForm, updateRegisterFrom] = useState({
        name : "",
        email : "",
        password : "",
        dateOfBirth : "",
        gender: "",
        hobbies: [],
        qualification: "",
        address: ""
    });

    const copyInputField = (event) => {
        if(event.target.id === "hobbies"){
            if(event.target.checked){
                registerForm.hobbies.push(event.target.value);
            }
            else{
                const index = registerForm.hobbies.findIndex((value) => {
                    return value === event.target.value
                });

                registerForm.hobbies.splice(index, 1);
            }
        }
        else{
            updateRegisterFrom({...registerForm, [event.target.id] : event.target.value });
        }
    }

    const registerAction = () => {
        console.log(registerForm)
    }

    return(
        <div>
            <HeaderComponent></HeaderComponent>
            <h2>Register Page</h2>
            <div className="contact-space">
                <label className="contact-label">Enter your Name</label>
                <input id="name" className="contact-textfield" type="text" placeholder="Enter your Name" onChange={copyInputField} />
            </div>
            <div className="contact-space">
                <label className="contact-label">Enter your Email Address</label>
                <input id="email" className="contact-textfield" type="text" placeholder="Enter your Email Address" onChange={copyInputField}/>
            </div>
            <div className="contact-space">
                <label className="contact-label">Enter your Password</label>
                <input id="password" className="contact-textfield" type="password" placeholder="Enter your Password"  onChange={copyInputField}/>
            </div>
            <div className="contact-space">
                <label className="contact-label">Select your DOB</label>
                <input id="dateOfBirth" className="contact-textfield" type="date"  onChange={copyInputField}/>
            </div>
            <div className="contact-space">
                <label className="contact-label">Select your Gender</label>
                <input id="gender" type="radio" name="gender" onChange={copyInputField} value="Male"/>Male
                <input id="gender" type="radio" name="gender" onChange={copyInputField} value="Female"/>Female
                <input id="gender" type="radio" name="gender" onChange={copyInputField} value="NA"/>NA
            </div>
            <div className="contact-space">
                <label className="contact-label">Select your hobbies</label>
                <input id="hobbies" type="checkbox" onChange={copyInputField} value="Baseball"/>Baseball
                <input id="hobbies" type="checkbox" onChange={copyInputField} value="Cricket" />Cricket
                <input id="hobbies" type="checkbox" onChange={copyInputField} value="Football"/>Football
                <input id="hobbies" type="checkbox" onChange={copyInputField} value="Hockey"/>Hockey
                <input id="hobbies" type="checkbox" onChange={copyInputField} value="Vollyball"/>Vollyball
                <input id="hobbies" type="checkbox" onChange={copyInputField} value="Horse Ride"/>Horse Ride
            </div>
            <div className="contact-space">
                <label className="contact-label">Select your Qualification</label>
                <select id="qualification" onChange={copyInputField} defaultValue={""}>
                    <option disabled value="">Choose your Qualification</option>
                    <option>Primary School</option>
                    <option>High School</option>
                    <option>Degree College</option>
                    <option>Masters College</option>
                </select>
            </div>
            <div className="contact-space">
                <label className="contact-label">Address</label>
                <textarea id="address" className="contact-textfield" onChange={copyInputField}></textarea>
            </div>
            <div className="contact-space">
                <button className="contact-submit" onClick={() => registerAction()}>Register</button>
            </div>
        </div>
    )
}

export default RegisterPage;