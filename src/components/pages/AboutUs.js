import React from 'react';
import '../../App.css';
import './Log1.css';
import CardItem from '../CardItem';
import '../Cards.css';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <>
    <div className='about'>
      <h1>About Us</h1>
      <div className='about-us'>
        <h2>Why Choose Us</h2>
        <img className='img' src='/images/about.jpg' alt=''/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur.</p>
        <div className='cards__container'>
        <div className='cards__wrapper'>
          <h3>Our Services</h3>
          <ul className='cards__items'>
          <CardItem
              src='images/adventure.png'
              text='Adventure'
              
            />
            <CardItem
              src='images/tour-guide.png'
              text='Tour Guide'
              
            />
            <CardItem
              src='images/trekking.png'
              text='Trekking'
              
            />
          </ul>
        </div>
        <Link
                to='/services'
                className='btn'
              >
                View More
              </Link>
      </div>
      </div>
    </div>
    </>
  );
}
