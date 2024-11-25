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

    const [error, updateError] = useState({
        name : false,
        email : false,
        password : false,
        dateOfBirth : false,
        gender: false,
        hobbies: false,
        qualification: false,
        address: false
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
        console.log(registerForm);

        updateError({
            name : registerForm.name === "" ? true : false,
            email : registerForm.email === "" ? true : false,
            password : registerForm.password === "" ? true : false,
            dateOfBirth : registerForm.dateOfBirth === "" ? true : false,
            gender: registerForm.gender === "" ? true : false,
            hobbies: registerForm.hobbies.length === 0 ? true : false,
            qualification: registerForm.qualification === "" ? true : false,
            address: registerForm.address === "" ? true : false,
        })
    }

    return(
        <div>
            <HeaderComponent></HeaderComponent>
            <h2>Register Page</h2>
            <div className="contact-space">
                <label className="contact-label">Enter your Name</label>
                <input id="name" className="contact-textfield" type="text" placeholder="Enter your Name" onChange={copyInputField} />

                { error.name && <span className="error-message">Please enter a valid Name <img src={require("../images/warning.png")} width="20"/> </span>}
            </div>
            <div className="contact-space">
                <label className="contact-label">Enter your Email Address</label>
                <input id="email" className="contact-textfield" type="text" placeholder="Enter your Email Address" onChange={copyInputField}/>

                { error.email && <span className="error-message">Please enter a valid Email Address <img src={require("../images/warning.png")} width="20"/> </span>}
            </div>
            <div className="contact-space">
                <label className="contact-label">Enter your Password</label>
                <input id="password" className="contact-textfield" type="password" placeholder="Enter your Password"  onChange={copyInputField}/>

                { error.password && <span className="error-message">Please enter a valid Password <img src={require("../images/warning.png")} width="20"/> </span>}
            </div>
            <div className="contact-space">
                <label className="contact-label">Select your DOB</label>
                <input id="dateOfBirth" className="contact-textfield" type="date"  onChange={copyInputField}/>

                { error.dateOfBirth && <span className="error-message">Please select a valid Data of Birth <img src={require("../images/warning.png")} width="20"/> </span>}
            </div>
            <div className="contact-space">
                <label className="contact-label">Select your Gender</label>
                <input id="gender" type="radio" name="gender" onChange={copyInputField} value="Male"/>Male
                <input id="gender" type="radio" name="gender" onChange={copyInputField} value="Female"/>Female
                <input id="gender" type="radio" name="gender" onChange={copyInputField} value="NA"/>NA

                { error.gender && <span className="error-message">Please select any one Gender <img src={require("../images/warning.png")} width="20"/> </span>}
            </div>
            <div className="contact-space">
                <label className="contact-label">Select your hobbies</label>
                <input id="hobbies" type="checkbox" onChange={copyInputField} value="Baseball"/>Baseball
                <input id="hobbies" type="checkbox" onChange={copyInputField} value="Cricket" />Cricket
                <input id="hobbies" type="checkbox" onChange={copyInputField} value="Football"/>Football
                <input id="hobbies" type="checkbox" onChange={copyInputField} value="Hockey"/>Hockey
                <input id="hobbies" type="checkbox" onChange={copyInputField} value="Vollyball"/>Vollyball
                <input id="hobbies" type="checkbox" onChange={copyInputField} value="Horse Ride"/>Horse Ride

                {error.hobbies && <span className="error-message">Please select any one Hobbies <img src={require("../images/warning.png")} width="20"/> </span>}
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

                { error.qualification && <span className="error-message">Please select any one Qualification <img src={require("../images/warning.png")} width="20"/> </span>}
            </div>
            <div className="contact-space">
                <label className="contact-label">Address</label>
                <textarea id="address" className="contact-textfield" onChange={copyInputField}></textarea>

                { error.address && <span className="error-message">Please enter a valid Address <img src={require("../images/warning.png")} width="20"/> </span>}
            </div>
            <div className="contact-space">
                <button className="contact-submit" onClick={() => registerAction()}>Register</button>
            </div>
        </div>
    )
}

export default RegisterPage;