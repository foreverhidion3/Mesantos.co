import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './Add_Edit_Delete.css';
import close_img from '../images/cross_close_img.svg';

const Admin_Apply = () => {

  //Fetch to fix unknown constant render error. Take no/chances
    const [requestfetched, setrequestfetched] = useState(false);

    const [request, setrequest] = useState({

            first_name: "",
            last_name: "",
            email: ""
            
        });
  
        const handleInput = (e) => {
            const { name, value } = e.target;
            setrequest((prevrequest) => ({
                 ...prevrequest, [name]: value }));
        };
  
        const handleAdd = () => {
            fetch('http://localhost:8082/requests', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(request),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.message);         
            })
            .catch((error) => {
                console.error('Error adding book:', error);
            });
        };
            return (
                <div className='Admin_body'>
                    <div id='center_piece'>
                    <Link to='/' id="return_admin_home_link">
                        <p className='return_home'>
                            <span className="icon-wrapper_x">
                                <img id="close_image" src= {close_img} alt="close_img" />
                            </span>
                         </p>
                    </Link>

                <div>
                    <h2>Apply for Admin Account</h2>
                <div>
                <div>First Name:</div>
                    <input type="text" name="first_name" value={request.first_name} onChange={handleInput} />
                </div>
                <div>
                <div>Last Name:</div>
                    <input type="text" name="last_name" value={request.last_name} onChange={handleInput} />
                </div>
                <div>
                <div>Email:</div>
                    <input type="text" name="email" value={request.email} onChange={handleInput} />
                </div>
            
            <button id='add_request' onClick={handleAdd}>Submit Request</button>
        </div>
        </div>
        </div>
    );
};    

export default Admin_Apply;