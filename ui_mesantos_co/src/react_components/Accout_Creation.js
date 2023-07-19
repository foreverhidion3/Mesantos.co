import React from 'react'
import { useState } from 'react'

const Account_Creation = () => {

    const [accoutData, setaccountData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        super_admin: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setaccountData((prevaccountData) => ({...prevaccountData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // post admin
        useEffect(() => {
            fetch("http://localhost:8082/admin", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                  },
                body: JSON.stringify(accountData)
            })
                .then(response => response.json())
                .then(response => console.log(JSON.stringify(response)));
        }, []);
        console.log(accountData)
    }



    return (

        <div>
            <form onSubmit={handleSubmit}></form>
                <label html="first_name">First Name:</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={accountData.first_name}
                    onChange={handleChange}
                    require
                />

                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={accountData.last_name}
                    onChange={handleChange}
                    require
                />

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={accountData.email}
                    onChange={handleChange}
                    require
                />

                <input
                    type="password"
                    id="password"
                    name="password"
                    value={accountData.password}
                    onChange={handleChange}
                    require
                />

                <input
                    type="boolean"
                    id="super_admin"
                    name="super_admin"
                    value={accountData.super_admin}
                    onChange={handleChange}
                    require
                />


        </div>
    )
};

export default Account_Creation;