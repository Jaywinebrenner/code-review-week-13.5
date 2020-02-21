
import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
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

        {props.kegList.map((Keg, index) =>
          <Keg name={Keg.name}
            brand={Keg.brand}
            price={Keg.price}
            alcoholContent={Keg.alcoholContent}
            availablePints={Keg.availablePints}
            key={index}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
