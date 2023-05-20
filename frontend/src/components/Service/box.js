import React from 'react';

import "./box.css"

import { NavLink } from 'react-router-dom';

// To upload image
import clearify from '../../image/clearify.jpg';
import appointment from '../../image/appointment.jpg';
import technology from '../../image/technology.jpg';


const box = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-4 py-3 py-sm-0'>
          <div className='card box-shadow cardd'>
          

           <img className='card-img-top'
              // src='https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg'
              src={clearify}
              alt='Card image cap'
              style={{ width: '100%', height: '19rem'  }}
            />  
            <div className='card-body'>
              <h5 className='card-title'>Clearify Images</h5>
              <p className='card-text'>
              Our website offers an AI-powered service for deblurring x-ray images.
              </p>
              <NavLink to='/Clearify'>
                <button className='ps-button'>Upload Image To Deblurr</button>
              </NavLink>
            </div>
          </div>
        </div>


        <div className='col-sm-4 py-3 py-sm-0'>
          <div className='card box-shadow cardd'>
            <img
              className='card-img-top'
              src={appointment}
              alt='Card image cap'
              style={{ width: '100%', height: '19rem'  }}
            />
            <div className='card-body'>
              <h5 className='card-title'>Book An Appointment</h5>
              <p className='card-text'>
              Easily schedule appointments with medical professionals.
              </p>
              <NavLink to='/Clearify'>
                <button className='ps-button'>Book an Appointment</button>
              </NavLink>
            </div>
          </div>
        </div>


        <div className='col-sm-4 py-3 py-sm-0'>
          <div className='card box-shadow cardd'>
          <img className='card-img-top' src={technology}  alt='Card image cap'
              style={{ width: '100%', height: '19rem'  }}
            />
            <div className='card-body'>
              <h5 className='card-title'>Technology</h5>
              <p className='card-text'>
              Advanced AI algorithms and cutting-edge technologies utilized.
              </p>
              <NavLink to='/technology'>
                <button className='ps-button'>See Technology</button>
              </NavLink>
            </div>
          </div>
        </div>


       
      </div>
    </div>
  );
};

export default box;

