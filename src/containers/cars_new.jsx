import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form'; 

import { createCar } from '../actions';
import Aside from '../components/aside.jsx';

class CarsNew extends Component {
	onSubmit = (values) => { this.props.createCar(values, (car) => {
		this.props.history.push('/'); // Navigate after submit 
			return car;
		});
	}

	renderField(field) {
    return (
			<div className="form-group"> 
				<label>{field.label}</label> 
				<input
					className="form-control" 
					type={field.type} 
					{...field.input}
				/> 
			</div>
		); 
	 }

	render() {
	  return [
	  	<Aside key="aside">
        <Link to="/">Back to list</Link>
      </Aside>,
    	<div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpg')"}}>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}> 
        	<Field
        		label="Brand"
		        name="brand"
		        type="text" 
		        component={this.renderField}
		      />
		      <Field
        		label="Model"
		        name="model"
		        type="text" 
		        component={this.renderField}
		      />
		      <Field
        		label="Owner"
		        name="owner"
		        type="text" 
		        component={this.renderField}
		      />
		      <Field
        		label="Plate"
		        name="plate"
		        type="text" 
		        component={this.renderField}
		      />
        	<button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Create Car
          </button>
        </form>
    	</div>
	  ];
	}
}

export default reduxForm({ form: 'newPostForm' })( 
	connect(null, { createCar })(CarsNew)
);