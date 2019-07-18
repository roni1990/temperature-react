import React from 'react';

function BoilingVerdict(props){
  const { celsius } = props;

  if( celsius >= 100 )
  {

    return <p>El Agua esta hirviendo</p>;
  }
  return <p>El Agua no esta hirviendo</p>;
}

export default BoilingVerdict;