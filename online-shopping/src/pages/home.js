import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const HomePage = () => {
    return(
        <div>
            <HeaderComponent></HeaderComponent>
            <h1>Home Page</h1>
            {/* <img src={require("../images/shinchan.jpg")} width={200} />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJHgZRtno3BK-NtzSZRdxikRnw5N1deYXaw&s" width={200}/> */}
            <FooterComponent></FooterComponent>
        </div>
    )
}

export default HomePage;