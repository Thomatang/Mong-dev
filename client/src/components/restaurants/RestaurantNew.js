//RestaurantNew shows RestaurantForm and RestaurantFormReview

import React, { Component } from 'react';

import RestaurantForm from './RestaurantForm';
import RestaurantFormReview from './RestaurantFormReview';

class RestaurantNew extends Component {

  // constructor(props) {
    //     super(props);
    //this.state = { new:true};}

  state = {showFormReview: false}; // exactly the same effect as constructor function above

    //helper function to toggle visibility between two components
    renderContent(){
        if(this.state.showFormReview) {
            return (
              <RestaurantFormReview 
              onCancel={ () => this.setState({showFormReview: false})}
              />
            );
        }
        return (
          <RestaurantForm 
          onSurveySubmit={ () => this.setState({showFormReview:true})}
          />
      ); 

      }


  render() {
    return(
      <div>
          {this.renderContent()}
      </div>
    );
  }
}

export default RestaurantNew;
