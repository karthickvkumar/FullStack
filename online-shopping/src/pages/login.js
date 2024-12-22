import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"; 

const LoginPage = () => {
 
    const [loginForm, updateLoginForm] = useState({
        email : "",
        password : ""
    }) 

    const navigate = useNavigate();

    const handleInputField = (event) => {
        updateLoginForm({...loginForm, [event.target.id] : event.target.value });
    }

    const submitLoginForm = () => {
        // console.log(loginForm);
        const url = "https://reqres.in/api/login";
        axios.post(url, loginForm)
            .then((response) => {
                const incomingData = response.data;
                console.log(incomingData);
                navigate("/main");
            })
            .catch((error) => {
                console.log(error);
                alert("Invalid email or password");
            })
    }

    return(
        <div className="login-form">
            <h1>Login page</h1>
            <div>
                <label className="label">Enter your Email :</label>
                <input type="text" id="email" onChange={handleInputField} className="font-20" placeholder="Enter your Email" />
            </div>
            <div className="space">
                <label className="label">Enter your Password :</label>
                <input type="password" id="password" onChange={handleInputField} className="font-20" placeholder="Enter your Email" />
            </div>
            <div className="space">
                <button onClick={() => submitLoginForm()}>Login</button>
            </div>
        </div>
    )
}

export default LoginPage;