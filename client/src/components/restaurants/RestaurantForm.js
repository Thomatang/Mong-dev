// shows a Form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import RestaurantFormField from './RestaurantFormField';

class RestaurantForm extends Component {

  renderFields(){
    return(
      <div>
        <Field label="Restaurant Name" type="text" name="Restaurant Name" component={RestaurantFormField}/>
        <Field label="Address" type="text" name="Restaurant Address" component={RestaurantFormField}/>
        <Field label="City" type="text" name="Restaurant City" component={RestaurantFormField}/>
        <Field label="Vegan Options" type="text" name="Vegan Options" component={RestaurantFormField}/>
      </div>
    );
  }

  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'restaurantForm'
})(RestaurantForm);
