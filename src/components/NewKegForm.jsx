import React from 'react';

function NewKegForm(){
  let _name = null;
  let _brand = null
  let _price = null;
  let _alcoholContent = null;
  let _availablePints = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _availablePints.value = '';
  }
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
        <form onSubmit={handleNewKegFormSubmission}>
          <hr/>
          <input
            class='newkeg-input'
            type='text'
            id='name'
            placeholder='Keg Name'
            ref={(input) => {_name = input;}}
            />
          <br/>
          <input
            class='newkeg-input'
            type='text'
            id='brand'
            placeholder='Brand'
            ref={(input) => {_brand = input;}}
            />
          <br/>
          <input
            class='newkeg-input'
            type='number'
            id='price'
            placeholder='Price'
            ref={(input) => {_price = input;}}
            />
          <br/>
          <input
            class='newkeg-input'
            type='number'
            id='alcoholContent'
            placeholder='Alcohol Content'
            ref={(input) => {_alcoholContent = input;}}
            />
              <br/>
            <input
              class='newkeg-input'
              type='number'
              id='availablePints'
              placeholder='Available Pints (Hint: 124)'
              ref={(input) => {_availablePints = input;}}
              />
          <br/>
          <button class='newkeg-button'type='submit'>Enter New Keg</button>
        </form>
      </div>
    );
  }

  export default NewKegForm;
