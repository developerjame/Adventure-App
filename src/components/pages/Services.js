import React from 'react';
import "../Cards.css";
import CardItem from '../CardItem';

export default function Services() {
  return (
    <>
    <div className='cards'>
      <div className='cards__container'>
      <h3>OUR SERVICES</h3>
        <div className='cards__wrapper'>
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
            <CardItem
              src='images/camp-fire.png'
              text='Camp Fire'
              
            />
            <CardItem
              src='images/off-road.png'
              text='Off Road'
              
            />
            <CardItem
              src='images/camping.png'
              text='Camping'
              
            />
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
