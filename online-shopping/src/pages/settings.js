import React, {useState} from "react";
import HeaderComponent from "../components/header";

const SettingsPage = () => {

    const [imageVisiblity, setImageVisiblity] = useState(true);
    const [toggleLight, setToggleLight] = useState(false);

    const hideImage = () => {
        setImageVisiblity(false);
    }

    const showImage = () => {
        setImageVisiblity(true);
    }

    const lightOn = () => {
        setToggleLight(true);
    }

    const lightOff = () => {
        setToggleLight(false);
    }

    return(
        <div>
            <HeaderComponent></HeaderComponent>
            <h2>This is a Settings Page</h2>
            <p>
            Conditional Rendering
            1. Inline If  
            {/* {condition && HTML Code } */}
            2. Inline If - Else  
            {/* {condition ? HTML Code Set 1 : HTML Code Set 2} */}
            </p>
            <h2>Conditional Inline IF</h2>
            <div>
                <button onClick={() => hideImage()}>Hide</button>
                <button onClick={() => showImage()}>Show</button>
            </div>
            {
                imageVisiblity && <img src={require("../images/shinchan.jpg")} width="300" />
            }

            <h2>Conditional Inline IF Else</h2>
            <div>
                <button onClick={() => lightOn()}>Light ON</button>
                <button onClick={() => lightOff()}>Light OFF</button>
            </div>
            {
                toggleLight ? 
                <img src="https://www.w3schools.com/js/pic_bulbon.gif" />
                :
                <img src="https://w3schools.com/js/pic_bulboff.gif" />
            }
            
        </div>
    )
}

export default SettingsPage;