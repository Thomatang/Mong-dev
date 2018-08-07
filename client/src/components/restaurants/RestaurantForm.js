// shows a Form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, FormGroup } from 'react-bootstrap';
import RestaurantFormField from './RestaurantFormField';
import { Link } from 'react-router-dom';

const FIELDS = [
  { label: 'Restaurant Name', name: 'restaurant', noValueError:'Please enter the restaurant name here'},
  {label: 'Address', name: 'address', noValueError:'Please enter the address here'},
  {label: 'City', name: 'city', noValueError:'Please enter the city here'},
  {label: 'Vegan Options', name: 'vegan options', noValueError:'Please enter vegan options separated by a comma'},

];

class RestaurantForm extends Component {

  renderFields() {
    return _.map(FIELDS, ({ label,name }) => {
      return <Field key={name} component={RestaurantFormField} type="text" label={label} name={name}/>
    });
  }

  render(){
    return(
      <div className="restaurant_form">
        <form className="restaurant_form" onSubmit={this.props.handleSubmit( this.props.onSurveySubmit)}>
          {this.renderFields()}
          <FormGroup className="form_button_container">
              <Link to="/dashboard">
              <Button>Cancel</Button>
              </Link>
              <Button type="submit">Submit</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

//redux-form validate function
function validate(values) {
  const errors = {};

  
  //forEach loop: for each field in the FIELDS, run arrow function
  _.each(FIELDS, ({name, noValueError})=> {
    if(!values[name]){
        errors[name] = noValueError;
    }
});

  return errors;
}

export default reduxForm({
  validate,
  form: 'restaurantForm',
  destroyOnUnmount: false
})(RestaurantForm);
