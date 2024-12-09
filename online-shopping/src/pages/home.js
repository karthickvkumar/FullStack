import React, {useState} from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import axios from "axios";

const HomePage = () => {

    const [listUser, updateListUser] = useState([]);

    const getInformation = () => {
        const url = "https://reqres.in/api/users?page=2";
        axios.get(url)
            .then((response) => {
                // console.log(response.data);
                const incomingData = response.data;
                updateListUser(incomingData.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div>
            <HeaderComponent></HeaderComponent>
            <h1>Home Page</h1>
            <button onClick={() => getInformation()}>GET Method</button>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Profile Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUser.map((value, index) => {
                            return(
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.first_name}</td>
                                    <td>{value.last_name}</td>
                                    <td>{value.email}</td>
                                    <td>
                                        <img src={value.avatar} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {/* <img src={require("../images/shinchan.jpg")} width={200} />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJHgZRtno3BK-NtzSZRdxikRnw5N1deYXaw&s" width={200}/> */}
            <FooterComponent></FooterComponent>
        </div>
    )
}

export default HomePage;