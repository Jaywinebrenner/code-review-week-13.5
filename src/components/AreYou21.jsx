import React from 'react';
import { Link } from 'react-router-dom';




function AreYou21(){

  return (
    <div className="AreYou21-body">

      <style jsx>{`
          .AreYou21-body {
            height: 500px;
            background-image: url("https://i0.wp.com/www.maxim.com/.image/t_share/MTQ2MjY3MDk3Njg3NjYzNjMz/beer.png?resize=914%2C471&ssl=1");
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






          `}</style>
        <h1 class='areYouOver-text'>ARE YOU OVER 21?</h1>
        <Link to="/home" class='over21-button' style={{ textDecoration: 'none' }}>YES</Link>
<Link to="/underage" class='over21-button' style={{ textDecoration: 'none' }}>NO</Link>
      </div>
    );
  }

  export default AreYou21;
