import React from 'react';

function NewKegForm(){
  return (
    <div className='newkegform-wrapper'>
      <style jsx>{`
          .newkegform-wrapper{
            text-align: center;
          }

          .newkeg-input{
            margin-top: 30px;
          }

          .newkeg-button{
            margin-top: 30px;
            margin-bottom: 100px;
            padding: 20px;
            border-radius: 5px;
            background-color: black;
            color: white;
              box-shadow: 2px 3px #888888;
          }

          .newkeg-button:hover{
            color: black;
            background-color: #e88b3a;
          }

          .new-keglist-subheader{
            background-color: darkgray;
            color: white;
            margin-bottom: 50px;
          }
          @import url('https://fonts.googleapis.com/css?family=Modak&display=swap');
          span{
             font-family: 'Modak', cursive;
             font-size: 4rem;
               color: #e88b3a;
          }

          .newkeg-input{
            width: 220px;
            border-radius: 5px;
          }

          `}</style>

          <div className='new-keglist-subheader'>
              <h4>Employee Tools</h4>
            </div>

        <h1>Hello <span>Ken's Kegs</span> Employee</h1>
        <h2>Please fill out the following form to add a new Ken Keg</h2>
        <form>
          <hr/>
          <input
            class='newkeg-input'
            type='text'
            id='name'
            placeholder='Keg Name'/>
          <br/>
          <input
            class='newkeg-input'
            type='text'
            id='brand'
            placeholder='Brand'/>
          <br/>
          <input
            class='newkeg-input'
            type='number'
            id='price'
            placeholder='Price'/>
          <br/>
          <input
            class='newkeg-input'
            type='number'
            id='alcoholContent'
            placeholder='Alcohol Content'/>
              <br/>
            <input
              class='newkeg-input'
              type='number'
              id='availablePints'
              placeholder='Available Pints (Hint: 124)'/>
          <br/>
          <button class='newkeg-button'type='submit'>Enter New Keg</button>
        </form>
      </div>
    );
  }

  export default NewKegForm;
