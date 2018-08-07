import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import formFields from "./formFields";
import {withRouter} from 'react-router-dom';

import * as actions from '../../actions/index';

const RestaurantFormReview = (onCancel, formValues, submitSurvey, history) => {

    const reviewFields = _.map(formFields, ({name,label}) => {
        return (
          <div key={name}>
            <label>{label}</label>
            <div>
              {formValues[name]}
            </div>
          </div>
        )
    })

    return (
        <div>
            <h5>Please confirm your entries:</h5>
            {reviewFields}
            <button onClick={onCancel}>Back</button>
            <button 
                onClick={()=> submitSurvey(formValues, history)}>
                <i>email</i>
                Send Survey
            </button>
        </div>
    )


}

function mapStateToProps(state){

    return {
        formValues: state.form.RestaurantForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(RestaurantFormReview));