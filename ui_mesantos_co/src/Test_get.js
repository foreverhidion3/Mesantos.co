import React from 'react';
import { useEffect, useState } from 'react'

const Test_get = () => {

    const [admin, setadmin] = useState();
    const [books, setbooks] = useState();
    const [email, setemail] = useState();
    // const [allData, setallData] = useState();

//post books


useEffect(() => {

    let newEmail = {
        email: "PaulE@fatboymail.com"
    }
    fetch("http://localhost:8082/email", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(newEmail)
    })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)));
}, []);

    



//     fetch('https://reqbin.com/echo/post/json', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ "id": 78912 })
// })
//    .then(response => response.json())
//    .then(response => console.log(JSON.stringify(response)))






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




