import React from 'react';

const CitySearch = () =>{
  return(
    <h4>CitySearchBarComponent</h4>
  )

}

const Landing = () => {
  return (
    <div>
        <div style={{textAlign: 'center'}}>
            <h1>Mong!</h1>
            <p>Find Food You Can Trust.</p>
        </div>
        <div style={{textAlign: 'center'}}>
            <h4>Choose your city:</h4>
            <CitySearch />
        </div>
    </div>

  );
}

export default Landing;
