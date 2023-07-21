import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Account_Creation.css'
import { useNavigate } from 'react-router-dom';


const Account_Creation = () => {

    const navigate = useNavigate();

    // const [admin, setadmin] = useState();
    // const [books, setbooks] = useState();
    // const [email, setemail] = useState();
    // const [requests, setrequests] = useState();

    // useEffect( () => {

    //     const fetchAdmin = () => fetch ("http://localhost:8082/admin") .then (response => response.json());
    //     const fetchBooks = () => fetch("http://localhost:8082/books") .then (response => response.json()); 
    //     const fetchEmail = () => fetch("http://localhost:8082/email") .then (response => response.json());
    //     const fetchRequests = () => fetch("http://localhost:8082/requests") .then(response => response.json());
  
    //     Promise.all ([fetchAdmin(), fetchBooks(), fetchEmail(), fetchRequests()])
    //     .then(data => {
    //       setadmin(data[0]);
    //       setbooks(data[1]);
    //       setemail(data[2]);
    //       setrequests(data[3]);
    //     })
    //     .catch(err => {
    //       console.error(err.message);
    //     });
        
    //   }, []);
    //     console.log(admin);
    //     console.log(books);
    //     console.log(email);
    //     console.log(requests);
      

    const [accountData, setaccountData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        super_admin: false
    });

    //handle the changes in the inputs w/out changing full state
    const handleChange = (event) => {
        const { name, value } = event.target;
        setaccountData((steadyData) => ({...steadyData, [name]: value }));
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
                body: JSON.stringify(accountData)
            })
                .then(response => response.json())
                .then(response => console.log(JSON.stringify(response)));

        console.log(accountData);
        navigate('/admin_home');
    }



    return (

        <div className='crtacntbody'>

            <div className='inside_container'>

            <p className="crtacntbanner">Create New Admin Account</p>

            <form onSubmit={handleSubmit}>
                <div id="first_name">
                <label html="first_name">First Name:</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={accountData.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div id="last_name">  
                <label html="last_name">Last Name:</label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={accountData.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div id="email">
                <label html="email">Email:</label>
                    <input
                        type="email"
                         id="email"
                        name="email"
                        value={accountData.email}
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
                        value={accountData.password}
                         onChange={handleChange}
                        required
                    />
                </div>
                <div id="super_user"> 
                <label html="super_user">Super_User:</label>
                    <input
                        type="boolean"
                        id="super_admin"
                        name="super_admin"
                        value={accountData.super_admin}
                        onChange={handleChange}
                        required
                    />
                </div>      
                
                <div>
                    <button className="submit" type="submit">SUBMIT</button>
                </div>

            </form>

            </div>
        </div>
    )
};

export default Account_Creation;