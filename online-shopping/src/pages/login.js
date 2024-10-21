import React, {useState} from "react";

const LoginPage = () => {
    // syntax of how to consume the useState 
    // const [variableName, functionName] = useState(initialState);
    let textMessage = "Hello";  // Static variable
    const [message, updateMessage] = useState("Hello"); // Dynamic Variable
    
    const modifyTextMessage = () => {
        // alert("Its working");
        textMessage = "Good day!"; // updating static variable
        updateMessage("Good day!"); // updating dynamic variable
    }

    return(
        <div className="login-form">
            <h1>Login page</h1>
            <h2>Dynamic variable -- {message}</h2>
            <h2>Staic variable --  {textMessage}</h2>
            <div>
                <label className="label">Enter your Email :</label>
                <input type="text" className="font-20" placeholder="Enter your Email" />
            </div>
            <div className="space">
                <label className="label">Enter your Password :</label>
                <input type="password" className="font-20" placeholder="Enter your Password"/>
            </div>
            <div className="space">
                <button className="font-20">Login</button>
            </div>
            <div className="space">
                <button onClick={() => modifyTextMessage()}>Modify Text Message</button>
            </div>
        </div>
    )
}

export default LoginPage;