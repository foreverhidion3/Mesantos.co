import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './Admin_Home.css';
import Account_Creation from './Account_Creation'
import close_img from '../images/cross_close_img.svg';

const Admin_Home = () => {
  const [admin, setadmin] = useState();
  const [books, setbooks] = useState();
  const [email, setemail] = useState();
  const [requests, setrequests] = useState();

  //fetchs to fix unknown constant render error

  const [booksfetched, setbooksfetched] = useState(false);
  const [adminfetched, setadminfetched] = useState(false);
  const [userrequestsfetched, setuserrequestsfetched] = useState(false);
  const [emailfetched, setemailfetched] = useState(false);

  const Welcome_admin = () => {
    return (
      <div className="admin_home_body">
        <p id='para_welcome_admin'>
          Welcome Admin
        </p>
        <Link to='/' id="return_home_link">
                <p className='return_home'>
                    <span className="icon-wrapper_x">
                        <img id="close_image" src= {close_img} alt="close_img" />
                    </span>
                </p>
        </Link>
            
      </div>
    );
  };

  const Books_gen = () => {
    useEffect(() => {
      if (!booksfetched) {
        fetch("http://localhost:8082/books")
          .then(response => response.json())
          .then(data => {
            setbooks(data);
            setbooksfetched(true);
          })
          .catch(err => {
            console.error(err.message);
          });
      }
    }, [booksfetched]);

    if (!books) {
      return null;
    }

    return (
      <div className="book_container">
        <div id='book_container_title'>
          <p>Your Current Inventory</p>
        </div>
        {books.map(book => (
          <div key={book.id} className="book_entry">
            {/* <img src={book.image_path} alt={book.title} className="book-image" /> */}
            <h2 className="book_title">{book.title}</h2>
            <p className="book_description">{book.description}</p>
            <p className="book_details">Cost: ${book.cost} | Available: {book.available}</p>
          </div>
        ))}
      </div>
    );
  };

  const Add_Edit_new_book_link = () => {

    return (
      <div>
        <Link to="/Add_Edit_Title">Add/Edit/Delete </Link>
      </div>
    );
  };

  const Admin_user_gen = () => {
    useEffect(() => {
      if (!adminfetched) {
        fetch("http://localhost:8082/admin")
          .then(response => response.json())
          .then(data => {
            setadmin(data);
            setadminfetched(true);
          })
          .catch(err => {
            console.error(err.message);
          });
      }
    }, [adminfetched]);
  
    if (!admin) {
      return null;
    }
  
    return (
      <div className="admin_container">
        <div id='admin_container_title'>
          <p>Your Current Team</p>
        </div>
        {admin.map(admin_user => (
          <div key={admin_user.id} className="admin_entry">
            <h2 className="first">{admin_user.first_name}</h2>
            <p className="last">{admin_user.last_name}</p>
            <p className="email">Email: {admin_user.email}</p>
            <p className="password">Password: {admin_user.password}</p>
            <p className="book_id">Working on Book: {admin_user.books_id}</p>
            <p className="super_admin">Is a super_admin: {admin_user.super_admin ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    );
  };

  const Add__new_admin_link = () => {
    return (
      <div>
        <Link to="/Account_Creation">Create Account</Link>
      </div>
    );
  };

  const User_requests = () => {
    
    useEffect(() => {
      if (!userrequestsfetched) {
        fetch("http://localhost:8082/requests")
          .then(response => response.json())
          .then(data => {
            setrequests(data);
            setuserrequestsfetched(true);
          })
          .catch(err => {
            console.error(err.message);
          });
      }
    }, [userrequestsfetched]);
  
    if (!requests) {
      return null;
    }
  
    return (
      <div className="user_requests_container">
        <div id='user_requests_container_title'>
          <p>New Admin User Requests</p>
        </div>
        {requests.map(userRequest => (
          <div key={userRequest.id} className="user_request_entry">
            <h2 className="first">{userRequest.first_name}</h2>
            <p className="last">{userRequest.last_name}</p>
            <p className="email">Email: {userRequest.email}</p>
          </div>
        ))}
      </div>
    );
  };

  const Delete_Requests = () => {
    fetch('http://localhost:8082/requests', {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error('Error deleting user requests:', error);
      });
  };

  const Remove_request = ({ Delete_Requests }) => {
    
    return (
      <div>
        <button onClick={Delete_Requests}>Remove Current Admin User Request</button>
      </div>
    );
  };


  
  const Email_chain_gen = () => {

    useEffect(() => {
      if (!emailfetched) {
        fetch("http://localhost:8082/email")
          .then(response => response.json())
          .then(data => {
            setemail(data);
            setemailfetched(true);
          })
          .catch(err => {
            console.error(err.message);
          });
      }
    }, [emailfetched]);
  
    if (!email) {
      return null;
    }
  
    return (
      <div className="email_list_container">
        <div id='email_list_container_title'>
          <p>News Letter Contacts</p>
        </div>
        {email.map(emailData => (
          <div key={emailData.id} className="email_entry">
            <p className="email">Email: {emailData.email}</p>
          </div>
        ))}
      </div>
    );
  };





  return (
    <div className='Admin_body'>
      <div className='center_piece'>
          <Welcome_admin />
          <Books_gen />
          <Add_Edit_new_book_link />
          <Admin_user_gen />
          <Add__new_admin_link />
          <User_requests />
          <Remove_request Delete_Requests={Delete_Requests} />
          <Email_chain_gen />
      </div>
    </div>
  );
};

export default Admin_Home;



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

