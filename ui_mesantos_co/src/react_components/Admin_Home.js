import React from 'react';
import { useEffect, useState } from 'react'
import './Admin_Home.css'


const Admin_Home = () => {

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

    const Welcome_admin = () => {
        return (
          <div className="admin_home_body">
            <p id='para_welcome_admin'>
              Welcome Admin
            </p>
          </div>
        );
      };
    // const Books_gen = () => {

    // }




    return (
      <div className='Admin_body'>

        <div className='center_piece'>
        
        <Welcome_admin />
        {/* <Books_gen />
        <Add_new_book />
        <Edit_book />
        <User_request_gen />
        <Add_new_user />
        <Email_gen /> */}

        </div>      



        {/* <Link_create_account />
        <Link_create_new_item />
        <Link_edit_item />
        <Welcome_admin /> */}

        
        
      </div>
    )
}

export default Admin_Home;