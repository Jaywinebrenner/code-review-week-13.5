import React from 'react';
import { Link } from 'react-router-dom';




function Header(){

  return (
    <div className="header-body">


      <Link to="/kegs">Home</Link> | <Link to="/newbody">Do you wanna?</Link>



      <style jsx>{`
          .header-body {
            height: 500px;
            background-image: url("https://i0.wp.com/www.maxim.com/.image/t_share/MTQ2MjY3MDk3Njg3NjYzNjMz/beer.png?resize=914%2C471&ssl=1");
            text-align: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-size: 100% 100%;
          }




          `}</style>
        <button class='btn btn-primary' type="button">Click Me!</button>
      </div>
    );
  }

  export default Header;
