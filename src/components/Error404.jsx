import React from 'react';
import { Link } from 'react-router-dom';

function Error404(props){
  return (
    <div>
      <h2>Oops, you've made a wrong turn at Ken's Kegs!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

export default Error404;
