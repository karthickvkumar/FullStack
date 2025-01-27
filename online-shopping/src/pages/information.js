import React, {useState} from "react";
import HeaderComponent from "../components/header";
import axios from "axios";

const InformationPage = () => {

    const [studentList, setStudentList] = useState([]);
    const [studentForm, setStudentForm] = useState({
        name : "",
        age: "",
        location: ""
    });

    const loadGetAPI = () => {
        const url = "http://localhost:5000/api/load/user";
        axios.get(url)
            .then((response) => {
                let data = response.data;
                console.log(data);
                setStudentList(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleInputField = (event) => {
        setStudentForm({...studentForm, [event.target.name] : event.target.value });
    }

    const submitStudentDetial = () => {
        console.log(studentForm);
    }

    return(
        <div>
            <HeaderComponent></HeaderComponent>
            <h1>Information Page</h1>
            <div className="align-section">
                <div className="content-box">
                    <div>
                        <label>Enter Student Name</label>
                        <input type="text" name="name" placeholder="Student Name" onChange={handleInputField} />
                    </div>
                    <div className="space">
                        <label>Enter Student Age</label>
                        <input type="number" name="age" placeholder="Student Age" onChange={handleInputField}/>
                    </div>
                    <div className="space">
                        <label>Enter Student Location</label>
                        <input type="text" name="location" placeholder="Student Location" onChange={handleInputField}/>
                    </div>
                    <div className="space">
                        <button onClick={() => submitStudentDetial()}>Submit Student Detial</button>
                    </div>
                </div>
                <div className="content-box">
                    <button onClick={() => loadGetAPI()}>Load GET API</button>
                    <table className="table-design">
                    <thead>
                        <tr>
                            <th className="table-design">Name</th>
                            <th className="table-design">Age</th>
                            <th className="table-design">Location</th>
                        </tr>
                    </thead>
                        <tbody>
                            {
                                studentList.map((value, index) => {
                                    return(
                                        <tr key={index}>
                                            <td className="table-design">{value.name}</td>
                                            <td className="table-design">{value.age}</td>
                                            <td className="table-design">{value.location}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>

            
        </div>
    )
} 

export default InformationPage;