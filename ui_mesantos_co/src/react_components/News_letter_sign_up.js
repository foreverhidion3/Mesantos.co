import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './News_letter_sign_up.css'
import sign_up_img from '../images/sign_up.svg';
import close_img from '../images/cross_close_img.svg';
import { useNavigate } from 'react-router-dom'


const News_letter_sign_up = () => {

  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const Submit = (event) => {
    event.preventDefault();
    // POST email to the server
    fetch('http://localhost:8082/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      });
      navigate('/');
    }

    return (
        <div>

            <div className="pop_up_container">    

                <Link to='/' id="return_home from_sign_up_link">
                    <p className='return_home_from_sign_up'>
                        <span className="icon-wrapper_x">
                            <img id="close_image" src= {close_img} alt="close_img" />
                        </span>
                    </p>
                </Link>
                
                <img id="pop_up_img" src= {sign_up_img} alt="sign_up_img" />
          

            {/* <p> Testing Signup </p> */}
            <form onSubmit={Submit}>
                <div id='email_input'>
                    <label htmlFor='email'>Email:</label>
                    <input
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={handleEmailChange}
                    required
                    />
                </div>

                <button id="subscribe_button" type='submit'>Subscribe</button>

            </form>

            </div> 
        
        </div>
    )
}

export default News_letter_sign_up;

