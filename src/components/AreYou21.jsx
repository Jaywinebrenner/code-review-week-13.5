import React from 'react';
import { Link } from 'react-router-dom';




function AreYou21(){

  return (
    <div className="AreYou21-body">

      <style jsx>{`
          .AreYou21-body {
            height: 0px;
            text-align: center;

          }

          .over21-button {
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
            height: 50rem;
            margin-left: 80%;
          }
          .kenImage-are-you{
            height: 20rem;
            position:fixed;
            bottom:0px;
            left:0%;
          }

          .question-wrapper{
            position: sticky;
top: 0;
          }

          `}</style>
        <img className='kenImage-are-you'src="https://i.imgur.com/ZYbTJtW.png" alt=""></img>
        <div className='question-wrapper'>
        <h1 class='areYouOver-text'>ARE YOU OVER 21?</h1>
        <Link to="/home" class='over21-button' style={{ textDecoration: 'none' }}>YES</Link>
        <Link to='/google.com' class='over21-button' style={{ textDecoration: 'none' }}>NO</Link>
        </div>

      </div>
    );
  }

  export default AreYou21;
