import React, { useState } from 'react';

import PropTypes from 'prop-types';


function Keg(props){

  const [counter, setCounter] = useState(props.pintsLeft);

  function changePintCount(event) {
    console.log(props.id);
    props.onChangePintCount(props.id)
  }

  return (
    <div className='keg-card-body'>

      <style jsx>{`
          keg-card-body{
            text-align: center;
          }

          .keg-card {
            text-align: center;
            border: 1px solid black;
            width: 400px;
            height: auto;
            margin: 25px auto;
            padding: 10px;
            position: relative;
            padding: 0px;
            border-radius: 5px;
            background-color: #e88b3a;
            background-image: url("https://i.imgur.com/URD6dtv.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-size: 100% 100%;
          }

          .keg-card-top{
            color: white;
            background-color: black;
            height: 45px;

          }

          .keg-card-bottom{
            color: white;
          }

          .keg-card-image{
            width: 30px;
            position: absolute;
            top: 5px;
            left: 30px;
          }

          .employee-edit-button{
            border-radius: 5px;
            margin-bottom: 5px;
            margin-right: 10px;
          }

          .pint-sold-button{
            border-radius: 5px;
            margin-bottom: 5px;
          }
          .brand-text{
            color: white;
            font-weight: bold;
            -webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: black;
          }


          `}</style>



        <div className='keg-card'>
          <div className='keg-card-top'>
            <h2>{props.name}</h2>
            <img className='keg-card-image'src="https://i.imgur.com/ZYbTJtW.png" alt=""></img>
          </div>
          <div className='keg-card-bottom'>
            <h3 className='brand-text'>{props.brand}</h3>
            <h6>Price: {props.price}</h6>
            <h6>Alcohol Content: {props.alcoholContent}</h6>
            <h6> Pints Left: {counter}</h6>
            <button className='employee-edit-button'>Employee Edit</button>
              <button onClick={changePintCount} className='pint-sold-button'>Pint Sold</button>
              <button onClick={() => setCounter(counter -1)}>Pint Sold Hooks</button>
          </div>
        </div>
      </div>
    );
  }

  Keg.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    alcoholContent: PropTypes.number.isRequired,
    pintsLeft: PropTypes.number.isRequired,
    onChangePintCount: PropTypes.func

  };

  export default Keg;
