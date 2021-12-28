import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our latest events!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img_prvenstvo.jpg'
              text='Ultimate battles betwwen the best in Croatia'
              label='Croatian championship'
              path='/events'
            />
            <CardItem
              src='images/wec-1.jpg'
              text='New championship after New Year'
              label='WEC'
              path='/events'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-trialmount.jpg'
              text='New/old circuit on GT7'
              label='GT7'
              path='/events'
            />
            <CardItem
              src='images/christmas-newyear.jpg'
              text='Merry Christmas nad a Happy New Year 2022 from GHTR community'
              label='Holidays'
              path='/events'
            />
            <CardItem
              src='images/new-livery.jpg'
              text='Check out new livery from Sagaris-05 on his GT profile'
              label='Liveries'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
