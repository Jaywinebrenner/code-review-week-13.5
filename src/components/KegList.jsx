
import React from 'react';
import Keg from './Keg';



function KegList(){
  return (
    <div className='keglist-div'>
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
