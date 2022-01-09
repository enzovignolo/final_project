import { React } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useContext } from 'react/cjs/react.development';
import AppContext from '../../AppContext';
import envVars from '../../envVars';

const SignUpForm = () => {
	const handleSubmit = async (e) => {
		try {
			e.preventDefault();

			const response = await axios.post(`${envVars.apiHost}/auth/signup`, {
				username: e.target.username.value,
				password: e.target.password.value,
				firstname: e.target.name.value,
				lastname: e.target.lastName.value,
				email: e.target.username.value,
				address: e.target.address.value,

				passwordConfirmation: e.target.passwordConfirmation.value,
			});
			const token = response.data.token;

			userSettings.setToken(token);
			history.push('/');
		} catch (err) {
			console.log(err);
		}
	};
	const history = useHistory();
	const userSettings = useContext(AppContext);
	return (
		<>
			<h1>Rellene el formulario con sus datos</h1>
			<div class=" m-auto d-flex justify-content-center">
				<form onSubmit={(e) => handleSubmit(e)}>
					<div class="form-group  m-auto">
						<label for="username" class="form-label mt-4">
							Email address
						</label>
						<input
							type="email"
							class="form-control"
							name="username"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
					</div>
					<div class="form-group  m-auto">
						<label class="form-label mt-4">Name</label>
						<input
							type="text"
							class="form-control"
							name="name"
							placeholder="First Name"
						/>
					</div>
					<div class="form-group  m-auto">
						<label class="form-label mt-4">Last Name</label>
						<input
							type="text"
							class="form-control"
							name="lastName"
							placeholder="Last Name"
						/>
					</div>
					<div class="form-group  m-auto">
						<label class="form-label mt-4">Address</label>
						<input
							type="text"
							class="form-control"
							name="address"
							placeholder="Address"
						/>
					</div>
					<div class="form-group  m-auto">
						<label class="form-label mt-4">Password</label>
						<input
							type="password"
							class="form-control"
							name="password"
							placeholder="Password"
						/>
					</div>
					<div class="form-group  m-auto">
						<label class="form-label mt-4">Repeat password</label>
						<input
							type="password"
							class="form-control"
							name="passwordConfirmation"
							placeholder="Password confirmation"
						/>
					</div>

					<div class="form-group mt-3 mb-3 m-auto d-flex justify-content-center">
						<button type="submit" class="btn btn-outline-primary ">
							Sign up
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default SignUpForm;
