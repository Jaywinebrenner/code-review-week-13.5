import React from 'react';
import { Link } from 'react-router-dom';




function AreYou21(){

  return (
    <div className="AreYou21-body">

      <style jsx>{`
          .AreYou21-body {
            height: 100px;
            text-align: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-size: 100% 100%;
          }

          .over21-button {
              margin-top: 30px;
              margin-right: 50px;
              margin-bottom: 100px;
              padding: 20px;
              border-radius: 5px;
              background-color: black;
              color: white;
                box-shadow: 2px 3px #888888;
            }

            .over21-button:hover{
              color: black;
              background-color: #e88b3a;
            }
            .areYouOver-text{
              margin-bottom: 100px;
            }
            .kenImage-are-you{
              height: 50rem;
              position:fixed;
              bottom:0px;
              left:0%;
            }

          `}</style>
        <img className='kenImage-are-you'src="https://i.imgur.com/ZYbTJtW.png" alt=""></img>
        <h1 class='areYouOver-text'>ARE YOU OVER 21?</h1>
        <Link to="/home" class='over21-button' style={{ textDecoration: 'none' }}>YES</Link>
<Link to='/google.com' class='over21-button' style={{ textDecoration: 'none' }}>NO</Link>

      </div>
    );
  }

  export default AreYou21;
