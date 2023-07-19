import React from 'react';
import { useEffect, useState } from 'react'

const Test_get = () => {

    const [admin, setadmin] = useState();
    const [books, setbooks] = useState();
    const [email, setemail] = useState();
    // const [allData, setallData] = useState();

//post books
// useEffect(() => {

//     let newEmail = {
//         email: "PaulE@fatboymail.com"
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

//         first_name: 'Peter',
//         last_name: 'Stock',
//         email: 'ssCHoc@gmail.com',
//         password: 'peanuts&JJ',
//         books_id: 1,
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

//delete title
// const bookTitleToDelete = "The TEST BOOK";
// useEffect(() => {

//   fetch("http://localhost:8082/books", {
//           method: "DELETE", 
//           headers: {
//               "Content-Type": "application/json"
//             },
//           body: JSON.stringify({ title: bookTitleToDelete })
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
// const adminToDelete = "Peter";
// useEffect(() => {

//   fetch("http://localhost:8082/admin", {
//           method: "DELETE", 
//           headers: {
//               "Content-Type": "application/json"
//             },
//           body: JSON.stringify({ first_name: adminToDelete })
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
// const emailToDelete = "PaulE@fatboymail.com";
// useEffect(() => {

//   fetch("http://localhost:8082/email", {
//           method: "DELETE", 
//           headers: {
//               "Content-Type": "application/json"
//             },
//           body: JSON.stringify({ title: emailToDelete  })
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





    // fetch all
    useEffect( () => {

        const fetchAdmin = () => fetch ("http://localhost:8082/admin") .then (response => response.json());
        const fetchBooks = () => fetch("http://localhost:8082/books") .then (response => response.json()); 
        const fetchEmail = () => fetch("http://localhost:8082/email") .then (response => response.json());

        Promise.all ([fetchAdmin(), fetchBooks(), fetchEmail()])
        .then(data => {
          setadmin(data[0]);
          setbooks(data[1]);
          setemail(data[2]);
        })
        .catch(err => {
          console.error(err.message);
        });
        
      }, []);
        console.log(admin);
        console.log(books);
        console.log(email);

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

    
    
    
    
    return (

        <div>

        <p>Test</p>
        {/* <p> {admin} </p> */}
        {/* <p> {admin.firstname} </p> */}


        </div>

    );
};

export default Test_get;




