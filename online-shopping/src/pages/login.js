import React, {useState} from "react";

const LoginPage = () => {
    // syntax of how to consume the useState 
    // const [variableName, functionName] = useState(initialState);
    let textMessage = "Hello";  // Static variable
    const [message, updateMessage] = useState("Hello"); // Dynamic Variable

    const [email, readEmail] = useState("");
    const [password, readPassword] = useState("");

    const copyEmail = (event) => {
        // console.log(event.target.value);

        readEmail(event.target.value);
        // console.log("User is typing Email");
    }

    const copyPassword = (event) => {
        // console.log(event.target.value);

        readPassword(event.target.value);
        // console.log("User is typing Password");
    }
    
    const loginAction = () => {
        console.log(email, password);
    }

    const modifyTextMessage = () => {
        // alert("Its working");
        textMessage = "Good day!"; // updating static variable

        //functionName(new Value);
        updateMessage("Good day!"); // updating dynamic variable
    }

    return(
        <div className="login-form">
            <h1>Login page</h1>
            {/* <h2>Dynamic variable -- {message}</h2>
            <h2>Staic variable --  {textMessage}</h2> */}
            <div>
                <label className="label">Enter your Email :</label>
                <input type="text" onChange={copyEmail} className="font-20" placeholder="Enter your Email" />
            </div>
            <div className="space">
                <label className="label">Enter your Password :</label>
                <input type="password" onChange={copyPassword} className="font-20" placeholder="Enter your Password"/>
            </div>
            <h3>The user email id - {email}</h3>
            <h3>The user password - {password}</h3>
            <div className="space">
                <button className="font-20" onClick={() => loginAction()}>Login</button>
            </div>
            {/* <div className="space">
                <button onClick={() => modifyTextMessage()}>Modify Text Message</button>
            </div> */}
        </div>
    )
}

export default LoginPage;