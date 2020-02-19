import React from 'react';
import { Link } from 'react-router-dom';




function Footer(){

  return (
    <div className="footer-body">

      <div className='footer-divs'>
        <h3>Social Media</h3>

        <img className='facebookImage' src='https://icons.iconarchive.com/icons/danleech/simple/256/facebook-icon.png'/>



        <img className='facebookImage' src='https://i.pinimg.com/originals/ca/5b/4d/ca5b4df7080ab2cb871cae11baa791b1.png'/>
        <img className='facebookImage' src='https://akns-images.eonline.com/eol_images/Entire_Site/2014817/rs_1024x759-140917143531-1024.Tinder-Logo.ms.091714.jpg?fit=inside|900:auto&output-quality=90'/>
        <img className='facebookImage' src='https://secureservercdn.net/198.71.233.227/248.a92.myftpupload.com/wp-content/uploads/2019/03/myspacelogo2019-678x381.jpg'/>



      </div>

      <div className='footer-divs'>
        <h3>Locations</h3>
        <h6 className='white-footer-text'>SE Portland</h6>
        <h6 className='white-footer-text'>Lyons, France</h6>
        <h6 className='white-footer-text'>Sao Paulo, Brasil</h6>

      </div>

      <div className='footer-divs'>
        <h3>Get Ken's News letter</h3>
        <input
          class='news-letter-input'
          type='text'
          id='newsletter'
          placeholder='Your Email'/>
      </div>

      <style jsx>{`

          .facebookImage{
            height: 40px;
            display: inline-block;
            margin-right: 6px;
          }

          .white-footer-text{
            color: white;
          }
          .footer-divs{
            display: inline-block;
            margin: 30px 60px 0 0;
            vertical-align: top;
            text-align: left;
          }
          .newsletter-divs {
            display: inline-block;
            margin: 40px 60px 0 0;

          }

          .footer-body {
            text-align: center;
            width: 100%;
            height: 200px;
            background-color: black;
            color: #e88b3a;
          }

          .locations-div{

          }

          `}</style>

      </div>
    );
  }

  export default Footer;
