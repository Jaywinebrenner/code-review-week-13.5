
import React from 'react';
import Keg from './Keg';

var masterKegList = [
  {
    name: 'IPAA',
    brand: 'Alcoholics Anonymous',
    price: '$45',
    alcoholContent: '0%',
    pintsLeft: '100'
  },
  {
    name: 'Rat Milk',
    brand: 'Animals R Us',
    price: '$34',
    alcoholContent: '5%',
    pintsLeft: '65'
  },
  {
    name: 'Pabst Yellow Ribbon',
    brand: 'Anonymous Corporate Conglomerate',
    price: '25$',
    alcoholContent: '1.2%',
    pintsLeft: '34'
  }
];

function KegList(){
  return (
    <div className='keglist-div'>
      <h1>test??</h1>
      <div className='keglist-subheader'>
        <h4 className='.about-ken-text'>Available Kegs</h4>
      </div>

        <style jsx>{`
            .keglist-div{
              margin-top: 0px;
              margin-bottom: 150px;
            }

            .keglist-subheader{
              text-align: center;
              background-color: darkgray;
              color: white;
            }


        `}</style>


      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pintsLeft={keg.pintsLeft}
          key={index}/>
      )}
    </div>
  );
}

export default KegList;
