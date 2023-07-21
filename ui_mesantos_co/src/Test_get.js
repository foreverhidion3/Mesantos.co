import React from 'react';
import { useEffect, useState } from 'react'

const Test_get = () => {

    const [admin, setadmin] = useState();
    const [books, setbooks] = useState();
    const [email, setemail] = useState();
    const [requests, setrequests] = useState();
    // const [allData, setallData] = useState();

//post email
// useEffect(() => {

//     let newEmail = {
//         email: "hyzynmordis@beautifulmail.com"
//     }
//     fetch("http://localhost:8082/email", {
//         method: "POST", 
//         headers: {
//             "Content-Type": "application/json"
//           },
//         body: JSON.stringify(newEmail)
//     })
//         .then(response => response.json())
//         .then(response => console.log(JSON.stringify(response)));
// }, []);

// post admin
// useEffect(() => {

//     let newAdmin = {

//         first_name: 'Paul',
//         last_name: 'Whaley',
//         email: 'foreverhidion3@gmail.com',
//         password: 'Thisthenistheend',
//         books_id: 2,
//         super_admin: false

//     }
//     fetch("http://localhost:8082/admin", {
//         method: "POST", 
//         headers: {
//             "Content-Type": "application/json"
//           },
//         body: JSON.stringify(newAdmin)
//     })
//         .then(response => response.json())
//         .then(response => console.log(JSON.stringify(response)));
// }, []);

// post book
// useEffect(() => {

//     let newBook = {
//         id: 5,
//         title: 'The TEST BOOK2',
//         image_path: '/images/SS_COVER_Reduced.svg', 
//         description: "In a remote medieval village, Kady, a half-demon, battles constant bullying and prejudice. Tormented by inner struggles, she yearns for acceptance and a sense of belonging. As tragedies befall her village, Kady's journey becomes a path of self-discovery, resilience, and the realization that her differences hold the key to strength and compassion.", 
//         cost: 1000,
//         available: 200
//       }
//     fetch("http://localhost:8082/books", {
//         method: "POST", 
//         headers: {
//             "Content-Type": "application/json"
//           },
//         body: JSON.stringify(newBook)
//     })
//         .then(response => response.json())
//         .then(response => console.log(JSON.stringify(response)));
// }, []);

//post request

// useEffect(() => {

//     let newrequest = {

//         first_name: 'Paul',
//         last_name: 'Phlaum',
//         email: 'foreverhidion3@gmail.com',
    
//     }
//     fetch("http://localhost:8082/requests", {
//         method: "POST", 
//         headers: {
//             "Content-Type": "application/json"
//           },
//         body: JSON.stringify(newrequest)
//     })
//         .then(response => response.json())
//         .then(response => console.log(JSON.stringify(response)));
// }, []);


//GET book by id
//  useEffect( () => {   
//         fetch("http://localhost:8082/books/1")
//         .then(response => response.json())
//         .then(data => {
//           setbooks(data);
//         })
//         .catch(err => {
//           console.error(err.message);
//         });
//         console.log(books)
        
//       }, []);


//DELETE

//delete book
// const bookTitleToDelete = {
//   title: "The TEST BOOK2" 
// } 
// useEffect(() => {

//   fetch("http://localhost:8082/books", {
//           method: "DELETE", 
//           headers: {
//               "Content-Type": "application/json"
//             },
//           body: JSON.stringify(bookTitleToDelete)
//       })
//       .then(response => {
//         if (response.status >= 200 && response.status < 300) {
//           return response.json();
//         } else {
//           throw new Error("Failed to delete title");
//         }
//       })
//       .then(data => {
//         console.log(data)
//       })
//       .catch(error => {
//         console.error("Error:", error);
//       });
//   }, []);

//delete admin
// const adminToDelete = {
//   first_name: "Paul",
//   last_name: "Whaley"
// } 
// useEffect(() => {

//   fetch("http://localhost:8082/admin", {
//           method: "DELETE", 
//           headers: {
//               "Content-Type": "application/json"
//             },
//           body: JSON.stringify(adminToDelete)
//       })
//       .then(response => {
//         if (response.status >= 200 && response.status < 300) {
//           return response.json();
//         } else {
//           throw new Error("Failed to delete that user_admin");
//         }
//       })
//       .then(data => {
//         console.log(data)
//       })
//       .catch(error => {
//         console.error("Error:", error);
//       });
//   }, []);

//delete email
// const emailToDelete = {
//   email: "hyzynmordis@beautifulmail.com"
// }
// useEffect(() => {

//   fetch("http://localhost:8082/email", {
//           method: "DELETE", 
//           headers: {
//               "Content-Type": "application/json"
//             },
//           body: JSON.stringify(emailToDelete)
//       })
//       .then(response => {
//         if (response.status >= 200 && response.status < 300) {
//           return response.json();
//         } else {
//           throw new Error("Failed to delete that email");
//         }
//       })
//       .then(data => {
//         console.log(data)
//       })
//       .catch(error => {
//         console.error("Error:", error);
//       });
//   }, []);

//delete request
// const requestToDelete = {
//   first_name: "Paul",
//   last_name: "Phlaum"
// } 
// useEffect(() => {

//   fetch("http://localhost:8082/requests", {
//           method: "DELETE", 
//           headers: {
//               "Content-Type": "application/json"
//             },
//           body: JSON.stringify(requestToDelete)
//       })
//       .then(response => {
//         if (response.status >= 200 && response.status < 300) {
//           return response.json();
//         } else {
//           throw new Error("Failed to delete that Request");
//         }
//       })
//       .then(data => {
//         console.log(data)
//       })
//       .catch(error => {
//         console.error("Error:", error);
//       });
//   }, []);


//PATCH 

//patch admin

  // const adminUpdate = {
  //   first_name: 'Paul',
  //   last_name: 'Whaley',
  //   email: 'WhatisGOINGON!@gmail.com,',
  //   book_id: 1,
  //   password: 'Thisthenisnothteend'
  // };
  // useEffect(() => {
  // fetch("http://localhost:8082/admin", {
  //         method: "PATCH", 
  //         headers: {
  //             "Content-Type": "application/json"
  //           },
  //         body: JSON.stringify(adminUpdate)
  //     })
  //     .then(response => {
  //       if (response.status >= 200 && response.status < 300) {
  //         return response.json({message:"Admin_user has been update"});
  //       } else {
  //         throw new Error(`Failed to update Admin_user`);
  //       }
  //     })
  //     .then(data => {
  //       console.log(data)
  //     })
  //     .catch(error => {
  //       console.error("Error:", error);
  //     });
  // }, []);

//patch book

// const bookUpdate = {
//   title: 'Awakened',
//   description: "Maimed wolf Coin and feline friend Heromine unite, embarking on an epic adventure to save their beloved forest. Facing perilous challenges, they demonstrate extraordinary teamwork, unwavering courage, and the power of true friendship. Through their bravery, they triumph against all odds."
// };
// useEffect(() => {
// fetch("http://localhost:8082/books", {
//         method: "PATCH", 
//         headers: {
//             "Content-Type": "application/json"
//           },
//         body: JSON.stringify(bookUpdate)
//     })
//     .then(response => {
//       if (response.status >= 200 && response.status < 300) {
//         return response.json();
//       } else {
//         throw new Error('Failed to update book');
//       }
//     })
//     .then(data => {
//       console.log(data)
//     })
//     .catch(error => {
//       console.error("Error:", error);
//     });
// }, []);





    // fetch all

    // useEffect( () => {

    //   const fetchAdmin = () => fetch ("http://localhost:8082/admin") .then (response => response.json());
    //   const fetchBooks = () => fetch("http://localhost:8082/books") .then (response => response.json()); 
    //   const fetchEmail = () => fetch("http://localhost:8082/email") .then (response => response.json());
    //   const fetchRequests = () => fetch("http://localhost:8082/requests") .then(response => response.json());

    //   Promise.all ([fetchAdmin(), fetchBooks(), fetchEmail(), fetchRequests()])
    //   .then(data => {
    //     setadmin(data[0]);
    //     setbooks(data[1]);
    //     setemail(data[2]);
    //     setrequests(data[3]);
    //   })
    //   .catch(err => {
    //     console.error(err.message);
    //   });
      
    // }, []);
    //   console.log(admin);
    //   console.log(books);
    //   console.log(email);
    //   console.log(requests);
    

    //fetch admin
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

    //fetch books
    // useEffect( () => {   
    //     fetch("http://localhost:8082/books")
    //     .then(response => response.json())
    //     .then(data => {
    //       setbooks(data);
    //     })
    //     .catch(err => {
    //       console.error(err.message);
    //     });
        
    //   }, []);
    //     console.log(books)
    
    //fetch email
    // useEffect( () => {   
    //     fetch("http://localhost:8082/email")
    //     .then(response => response.json())
    //     .then(data => {
    //       setemail(data);
    //     })
    //     .catch(err => {
    //       console.error(err.message);
    //     });
        
    //   }, []);
    //     console.log(email)

     //fetch use_request
    // useEffect( () => {   
    //     fetch("http://localhost:8082/requests")
    //     .then(response => response.json())
    //     .then(data => {
    //       setrequests(data);
    //     })
    //     .catch(err => {
    //       console.error(err.message);
    //     });
        
    //   }, []);
    //     console.log(requests)

        


    
    
    
    
    return (

        <div>

        <p>Test</p>
        {/* <p> {admin} </p> */}
        {/* <p> {admin.firstname} </p> */}


        </div>

    );
};

export default Test_get;




