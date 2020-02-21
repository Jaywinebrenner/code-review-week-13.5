
import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <div className='keglist-div'>
      <div className='keglist-subheader'>
        <h4 className='.about-ken-text'>Available Kegs</h4>
      </div>

      {props.kegList.map((keg, index) =>
        <Keg name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        availablePints={keg.availablePints}
        key={index}/>
      )}

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

    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
