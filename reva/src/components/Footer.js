import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className="leftFooter">
          <div className='footer-link-items'>
            <h2 style={{marginTop:-5}}>REVA TECHNOLOGIES</h2>
            <p style={{textAlign: 'left'}}>Reva Technology is one of the high Technology emerging company with focus on creating your tech vision into reality</p>
          </div>
          <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
          <h3>Follow Us:</h3><br/>
          <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
            <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
          </div>
          <div className="centerFooter">
          <div className='footer-link-items'>
            <h2 style={{color:'white'}}>INDIA</h2>
            <p></p>
            <p 	className='fas fa-map-marker-alt' style={{color:'white'}}> Reva Technologies Pvt. Ltd.,Z-302 Omkar Bramha CHS Adai, New Panvel 410206.</p>
            <p></p>
            <p></p>
            <p className='fa fa-phone'> +022 956 954 9299</p>
            <p></p>
            <p className='fa fa-envelope'>  revatechno18@.com</p>
          </div>
          </div>
          <div className="rightFooter">
          <div className='footer-link-items'>
          <h2 style={{color:'white'}}>WORK EXPERTISE</h2>
            <p>AI / ML / Data Annotation</p>
            <p>Web Development</p>
            <p>Mobile App Development</p>
            <p>Digital Marketing & Content Writing</p>
            <p>Corporate Training</p>
            <h2 style={{color:'white',paddingTop:20}}>REFERENCES</h2>
            <span style={{display:'inline',color:'white',fontSize:16}} >Site Map </span><span style={{display:'inline',color:'white',fontSize:16}} >Contact Us</span>
          </div>
      
        </div>
    
      </div>
      
    </div>
  );
}

export default Footer;
