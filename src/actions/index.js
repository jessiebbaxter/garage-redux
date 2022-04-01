// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const CAR_CREATED = 'CAR_CREATED';
export const REMOVE_CAR = 'REMOVE_CAR';

export function fetchCars() {
  const url = "https://wagon-garage-api.herokuapp.com/jesso/cars";
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_CARS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createCar(body, callback) {
	const url = "https://wagon-garage-api.herokuapp.com/jesso/cars";
	const promise = fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' }, 
		body: JSON.stringify(body)
		}).then(r => r.json())
			.then(callback);

	return {
		type: CAR_CREATED, 
		payload: promise
	};
}

export function removeCar(history, car) {
	const url = `https://wagon-garage-api.herokuapp.com/cars/${car.id}`;
	fetch(url, { method: 'DELETE' }).then(r => r.json())
	.then(() => history.push(""));

	return {
		type: REMOVE_CAR,
		payload: car
	}
}