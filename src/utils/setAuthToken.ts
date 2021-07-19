import g_instance from './generic_instance';
const setAuthToken = (token: string | null) => {
	if(tokenn !== null) {
		g_instance.defaults.headers.common['x-auth-token'] = token;
	} else {
		delete g_instance.defaults.headers.common['x-auth-token'];
	}
}

export default setAuthToken;
