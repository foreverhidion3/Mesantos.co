import React from 'react'
import { Link } from 'react-router-dom'
import './News_letter_sign_up.css'
import sign_up_img from '../images/sign_up.svg';
import close_img from '../images/cross_close_img.svg';


const News_letter_sign_up = () => {

    return (
        <div>

            <div className="pop_up_container">    

                <Link to='/Home' id="return_home from_sign_up_link">
                    <p className='return_home_from_sign_up'>
                        <span className="icon-wrapper_x">
                            <img id="close_image" src= {close_img} alt="close_img" />
                        </span>
                    </p>
                </Link>
                
                <img id="pop_up_img" src= {sign_up_img} alt="sign_up_img" />

            </div>           

            {/* <p> Testing Signup </p> */}

        </div>
    )
}

export default News_letter_sign_up;

