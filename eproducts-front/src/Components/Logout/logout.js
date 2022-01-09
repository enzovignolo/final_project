import axios from 'axios';
import { React } from 'react';
import { useHistory } from 'react-router';
import { useContext } from 'react/cjs/react.development';
import AppContext from '../../AppContext';
import envVars from '../../envVars';
const Logout = () => {
	const history = useHistory();
	const userSettings = useContext(AppContext);
	userSettings.setToken(false);
	history.push('/');
	(async () => {
		try {
			await axios({
				method: 'GET',
				url: `${envVars.apiHost}/auth/logout`,
				withCredentials: true,
			});
		} catch (err) {
			throw err;
		}
	})();
	return (
		<>
			<div></div>
		</>
	);
};

export default Logout;
