import React from 'react';
import { Link } from 'react-router-dom';




function Welcome(){

  const alternateCSS ={
    color: 'rgba(227, 252, 252, 0)',
    webkitTextStroke: '2px black',
    fontSize:' 10rem',
    fontFamily: "'Modak', cursive"

  }

  return (
    <div className="welcome-text-div">
      <h2 className='welcome-text'>Welcome to</h2>
      <h1 className='kens-kegs-header' style={alternateCSS}>Ken's Kegs</h1>
      <style jsx>{`
          .welcome-text-div{
            text-align: center;
            height: 220px;
            margin-top: 50px;
            background-image: url("https://media.giphy.com/media/8yFGAh0Zzj71K/giphy.gif");
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-size: 100% 100%;


          }

          .welcome-text{
            color: black;

          }

          .Wwelcome-text{
            line-height: 0px;
            padding-top: 0;
            text-align: center;
            background-image: url("https://media.giphy.com/media/8yFGAh0Zzj71K/giphy.gif");
          }

          @import url('https://fonts.googleapis.com/css?family=Modak&display=swap');

          .kens-kegs-header{
            line-height: 100px;
            color: white;

          }



          `}</style>

      </div>
    );
  }

  export default Welcome;
