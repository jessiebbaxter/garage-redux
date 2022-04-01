import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'; 

import { fetchCars } from '../actions/index';
import Aside from '../components/aside.jsx';

class CarsIndex extends Component {
	componentDidMount() {
		this.props.fetchCars();
	}

	renderCars() {
		return this.props.cars.map((car) => {
			return (
				<div className="car-smallad" key={car.id}>
				  <Link to={`/cars/${car.id}`} key={car.id} />
			  	<img className="car-logo" src="assets/images/logo_square.svg" />
			  	<div className="car-details">
			  	  <span>{car.brand} - {car.model}</span>
			  	  <ul>
			  	  	<li><strong>Owner:</strong> {car.owner}</li>
			  	  </ul>
			  	</div>
				</div>
			); 
		});
	}

	render() {
	  return [
	  	<Aside key="aside">
        <Link to="/cars/new">Add a car</Link>
      </Aside>,
    	<div className="list-container" key="cars">
    		{this.renderCars()}
    	</div>
	  ];
	}
}

function mapStateToProps(state) {
	return {
		cars: state.cars
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
