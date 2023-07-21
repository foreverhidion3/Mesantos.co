import React from 'react';
import { useEffect } from 'react';
import { useState} from 'react';
// import { useNavigate } from 'react-router_dom';
import './Admin_Home.css';


const Admin_Home = () => {
    // const navigate = useNavigate();
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

    const Books_gen = () => {

      useEffect( () => {   
          fetch("http://localhost:8082/books")
          .then(response => response.json())
          .then(data => {
            setbooks(data);
          })
          .catch(err => {
            console.error(err.message);
          });
          
        }, []);  
      
      console.log(books)
  
          return(
              <div>
                  Test
              </div>
          )
      }   

    const Welcome_admin = () => {
        return (
          <div className="admin_home_body">
            <p id='para_welcome_admin'>
              Welcome Admin
            </p>
          </div>
        );
      };

     
    
    // const Users_gen = () => {
        
    // //fetch admin
    // useEffect( () => {   
    //     fetch("http://localhost:8082/admin")
    //     .then(response => response.json())
    //     .then(data => {
    //       setadmin(data);
    //     })
    //     .catch(err => {
    //       console.error(err.message);
    //     });
        
    //   }, []);
    //     console.log(admin) 
        
    //     return (
    //         <div>
    //             Test 2
    //         </div>
    //     )
    // }
    
    return (
      <div className='Admin_body'>

        <div className='center_piece'>
        
        <Welcome_admin />
        {/* <Books_gen /> */}
        {/* <Add_new_book /> */}
        {/* <Edit_book /> */}
        {/* <Users_gen /> */}
        {/* <User_request_gen /> */}
        {/* <Add_new_user /> */}
        {/* <Email_gen /> */}

        </div>      



        {/* <Link_create_account />
        <Link_create_new_item />
        <Link_edit_item />
        <Welcome_admin /> */}

        
        
      </div>
    )
}

export default Admin_Home;






// jwToken fetch

// useEffect(() => {
//   fetchAdmin();
// }, []);

// const fetchAdmin = () => {
//   const token = localStorge.getItem('jwtoken')
//   if(!token) {
//     navigate('/login');
//     return;
//   }
// }

// fetch('http://localhost:8082/admin'), {
//   headers: {
//     Authorization: `Have ${token}`,
//   }
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Failded to fetch admin')
//     }
//     return response.json();
//   })
//   .then((data) => {
//     setadmin(data);
//   })
//   .catch((error) => {
//     console.error('Error fetching admin data:', error);
//   })
// }





// jwToken setup

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Admin_Home.css';

// const Admin_Home = () => {
//   const navigate = useNavigate();
//   const [admin, setAdmin] = useState();

//   useEffect(() => {
//     fetchAdminData();
//   }, []);

//   const fetchAdminData = () => {
//     const token = localStorage.getItem('jwtoken');
//     if (!token) {
//       navigate('/login');
//       return;
//     }
  
//     fetch('http://localhost:8082/admin', {
//       headers: {
//         Authorization: `Bearer ${token}`, // Set the Authorization header with the token
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch admin data');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setAdmin(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching admin data:', error);
//       });
//   };

//     return (
//       <div className='Admin_body'>

//         <div className='center_piece'>
        
//         {/* <Welcome_admin /> */}
//         {/* <Books_gen /> */}
//         {/* <Add_new_book /> */}
//         {/* <Edit_book /> */}
//         {/* <Users_gen /> */}
//         {/* <User_request_gen /> */}
//         {/* <Add_new_user /> */}
//         {/* <Email_gen /> */}

//         </div>      



//         {/* <Link_create_account />
//         <Link_create_new_item />
//         <Link_edit_item />
//         <Welcome_admin /> */}

        
        
//       </div>
//     )
// }

// export default Admin_Home;