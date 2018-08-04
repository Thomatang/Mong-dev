//RestaurantFormField contains logic to render a single label and text input
import React from 'react';
import { FormControl, FormGroup} from 'react-bootstrap';

export default ({input, label, meta:{ error, touched } }) => {
  console.log( touched && error);
  return (
    <div>
      <FormGroup>
          <label>{label}</label>
          <FormControl {...input} />
          <div className="red-text">
            {touched && error}
          </div>
      </FormGroup>
    </div>
  );
};
