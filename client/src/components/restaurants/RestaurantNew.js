//RestaurantNew shows RestaurantForm and RestaurantFormReview

import React, { Component } from 'react';

import RestaurantForm from './RestaurantForm';

class RestaurantNew extends Component {
  render(){
    return(
      <div>
          <RestaurantForm />
      </div>
    );
  }
}

export default RestaurantNew;
