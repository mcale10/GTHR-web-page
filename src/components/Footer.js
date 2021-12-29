import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter to receive news about new events
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How we work</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <a href = 'https://web.facebook.com/groups/522596101906073' target='_blank' rel="noopener noreferrer">
                Facebook
            </a>
            <a href = 'https://www.youtube.com/channel/UCkkH_rgdKLwXpKngtW7W7pg' target='_blank' rel="noopener noreferrer">
                Youtube
            </a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src="/images/logo.png" alt="GTHR Logo"/>
            </Link>
          </div>
          <small class='website-rights'>GTHR © 2021</small>
          <div class='social-icons'>
          
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <a href = 'https://web.facebook.com/groups/522596101906073' target='_blank' rel="noopener noreferrer">
              <i class='fab fa-facebook-f' /> </a>
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <a href = 'https://www.youtube.com/channel/UCkkH_rgdKLwXpKngtW7W7pg' target='_blank' rel="noopener noreferrer">
              <i class='fab fa-youtube' /> </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
