import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import close_img from '../images/cross_close_img.svg';
import './Log_in.css'


const Log_in = () => {

    //set var so you can useNavigate directly to admin_home
    const navigate = useNavigate();

//fetch so I can track data
    const [admin, setadmin] = useState();
    const [books, setbooks] = useState();
    const [email, setemail] = useState();
    const [requests, setrequests] = useState();

    useEffect( () => {

        const fetchAdmin = () => fetch ("http://localhost:8082/admin") .then (response => response.json());
        const fetchBooks = () => fetch("http://localhost:8082/books") .then (response => response.json()); 
        const fetchEmail = () => fetch("http://localhost:8082/email") .then (response => response.json());
        const fetchRequests = () => fetch("http://localhost:8082/requests") .then(response => response.json());
  
        Promise.all ([fetchAdmin(), fetchBooks(), fetchEmail(), fetchRequests()])
        .then(data => {
          setadmin(data[0]);
          setbooks(data[1]);
          setemail(data[2]);
          setrequests(data[3]);
        })
        .catch(err => {
          console.error(err.message);
        });
        
      }, []);
        console.log(admin);
        console.log(books);
        console.log(email);
        console.log(requests);
      

    const [log_inData, setlog_inData] = useState({
        email: '',
        password: '',
    });

    //handle the changes in the inputs w/out changing full state like in Account_Creation
    const handleChange = (event) => {
        const { name, value } = event.target;
        setlog_inData((steadyData) => ({...steadyData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit clicked"')
        // post admin
            fetch("http://localhost:8082/admin", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                  },
                body: JSON.stringify(log_inData)
            })
                .then((response) => {
                    //response.ok is better than (repsonse !== 200) because it will give "true" for codes 200-299
                    if(response.ok) {
                        throw new Error('Login Failed')
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log('Successful Login. Welcome! Here is your data:', data);

                    //SAVE JWTOKEN to localStorage
                    //localStorage persists through browser refresh and sessions. 
                    localStorage.setItem('jwtoken', data.jwtoken);

                    navigate('/admin_home');
                })
                .catch((error) => {
                    console.error('You are a failure:', error.message)
                })
    }



    return (

        <div className='log_in_body'>


            <div className='log_in_inside_container'>

                <Link to='/Home' id="return_home_link">
                <p className='return_home'>
                    <span className="icon-wrapper_x">
                        <img id="close_image" src= {close_img} alt="close_img" />
                    </span>
                </p>
                </Link>
            

            <p className="log_in_banner">Admin Login</p>

            <form onSubmit={handleSubmit}>
                <div id="email">
                <label html="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={log_inData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div id="password">   
                <label html="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={log_inData.password}
                         onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    {/* <Link to='/apply' id="admin_account_apply_link"> */}
                    <p className='admin_account_apply'>
                        Apply for Admin Account
                    </p>
                    {/* </Link> */}
                </div> 
                
                <div>
                    <button className="submit" type="submit">LOGIN</button>
                </div>

            </form>

            </div>
        </div>
    )
};

export default Log_in;