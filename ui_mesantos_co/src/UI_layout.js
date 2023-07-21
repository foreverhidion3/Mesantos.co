import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { useState } from 'react'
import Test_get from './Test_get.js'
import Log_in from './react_components/Log_in.js'
import ss_cover from './images/SS_COVER_Reduced.svg';
import header_img from './images/header.svg';
import about_img from './images/About.svg';
import author_img from './images/Author.svg';
import contact_img from './images/Contact.svg';
import diamond_img from './images/diamond_icon.svg';
import footer_img from './images/footer.svg';
import News_letter_sign_up from './react_components/News_letter_sign_up'

function UI_layout() {


//Ideas for implementing jwToken

//   const [token, setToken] = useState('');

//   const saveToken = (token) => {
//     setToken(token);
//     localStorage.setItem('token', token);
//   };

  const Link_to_admin = () => {
    
    return (
      <div>
      <Link to='/Log_in' id='log_in_link'>
        <p className='link_to_admin'>
          Admin Login
        </p>
      </Link>

      
      </div>
    )
  }

  const Paragraphs = () => {
    return (
      <div className='paragraphs'>
        <p id='para_about'><a href="#About_img">About</a></p>
        <span className="icon-wrapper">
        <img id="diamond_img" src= {diamond_img} alt="diamond_img" />
        </span>
        <p id='para_author'><a href="#Author_img">Author</a></p>
        <span className="icon-wrapper">
        <img id="diamond_img" src= {diamond_img} alt="diamond_img" />
        </span>
        <p id='para_contact'><a href="#Contact_img">Contact</a></p>
      </div>
    )
  }
  
  const Ss_cover = () => {
    return (
      <div className="ss_cover_container">    
        <img id="ss_cover_img" src= {ss_cover} alt="Sword_Slinger_Cover" class='hover-effect' />
      </div>
    )
  }
  
  const Pre_order = () => {
    return (
      <div id='pre_order' className="pre_order_container">
        <p id='para_pre_order'>Pre-Order</p>
      </div>
    )
  }
  
  const Purchase_ebook = () => {
    return (
      <div id='purchase_ebook' className="purchase_ebook_container">
        <p id='para_purchase_ebook'>Purchase e-Book</p>
      </div>
    )
  }
  
  // const About_img_container = () => {
  //   return (
  //     <div className='About_img_container'>
  //       <img id="About_img" src= {about_img} alt="about_img" />
  //     </div>
  
  //   )
  // }
  
  const Header_img_container = () => {
    return (
      <div className='header_img_container'>
        <img id="header_img" src= {header_img} alt="header_img" />
      </div>
  
    )
  }
  
  const About = () => {
    return (
      <div id='about' className="about_container">
  
        {/* <img id="About_img" src= {about_img} alt="about_img" /> */}
        <p>
          In the enchanting realm of Elmareth, a spirited halfling named Creeper, known as "Sword Slinger," possessed unparalleled skill with a blade. When darkness threatened the realm, Creeper and his newfound allies embarked on a perilous journey to aid the kingdom of Valeria. Together, they faced daunting challenges, forging unbreakable bonds. With unwavering bravery, they vanquished the malevolent sorcerer, Malachai, restoring peace to Elmareth. Despite becoming a legendary figure, Creeper remained humble, treasuring the friendships he had formed and the beauty of his homeland. His tale endured as a timeless reminder that true heroes are defined by their courage and the bonds they share, not by battles won.
        </p>
  
      </div>
    )
  }
  
  // const Empty_div_1 = () => {
  //   return (
  //   <div className="emptyDiv">
  //       <p> Empty_div_1 </p>
  //   </div>
  //   )
  // }
  
  const Author_img_container = () => {
    return (
      <div className='Author_img_container'>
        <img id="Author_img" src= {author_img} alt="author_img" />
      </div>
  
    )
  }
  
  const Author = () => {
    return (
  
      
      <div id='author' className='author'>
        <p>
          Meet Mesantos, the brilliant author of "Sword Slinger," a spellbinding tale that transports readers to captivating worlds. Aged 31, Mesantos, with her Asian heritage, infuses her writing with cultural depth and authenticity, enthralling audiences with her imagination.
            Her characters are a blend of strength and femininity, defying conventions and embarking on daring quests. Besides her literary achievements, Mesantos is a devoted wife and mother of two, embodying determination and perseverance.
            In "Sword Slinger," Mesantos weaves an enchanting narrative, where courage, love, and magic intertwine, leaving readers enthralled by the mesmerizing journey. Get ready to be captivated by her masterful prose and unforgettable adventure.
        </p>
      </div>
    )
  }
  
  // const Empty_div_2 = () => {
  //   return (
  //   <div className="emptyDiv">
  //       <p> Empty_div_2 </p>
  //   </div>
  //   )
  // }
  
  const Contact_img_container = () => {
    return (
      <div className='Contact_img_container'>
        <img id="Contact_img" src= {contact_img} alt="contact_img" />
      </div>
  
    )
  }
  
  const Contact_us = () => {
    return (
      <div id='contact' className='contact_us'>
        <p>
          Contact MenSantos:
        </p>
            <p>
              Mailing Address:
            </p>
              <p>
                PO Box 12345
              </p>
              <p>
                City, State
              </p>
              <p>
                Country
              </p>
              <p>
                Zip Code
              </p>
            <p>
            Email:
            </p>
              <p>
                contact@mensantos.com
              </p>
        <p>
          Please feel free to reach out to us for any inquiries, collaborations, or simply to share your thoughts. We look forward to hearing from you!
        </p>
        
      </div>
    )
  }
  
  const News_letter = () => {
    return (
      <div className='news_letter'>
        <Link to='/signup' id='link'>
          <p id='para_news'>
            Sign up for our News Letter
          </p>
        </Link>
  
      </div>
  
    )
  }
  
  const Empty_div_3 = () => {
    return (
    <div className="emptyDiv">
        {/* <p> Empty_div_2 </p> */}
    </div>
    )
  }
  
    return (

//   <BrowserRouter>
  
    <div id='body'>

      <div className='pseudo-background' />
      
      <div className='container'>
          <Link_to_admin />
          <Paragraphs />
          <Ss_cover />
          <Pre_order />
          <Purchase_ebook />
          {/* <About_img_container /> */}
          <Header_img_container />
          <About />
          {/* <Empty_div_1 /> */}
          <Author_img_container />
          <Author />
          {/* <Empty_div_2 /> */}
          <Contact_img_container />
          <Contact_us />
          <News_letter />
        {/* <Routes>
            <Route path='/signup' element={<News_letter_sign_up />} />
        </Routes> */}
        <Empty_div_3 />
      
    </div>

  </div>

//   </BrowserRouter>

  );
}

export default UI_layout;

  
      



