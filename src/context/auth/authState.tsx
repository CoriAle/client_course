import auth_reducer from './authReducer'
import React, {PropsWithChildren, useReducer}  from 'react';
import setAuthToken from '../../utils/setAuthToken';
import  AuthContext form './authContext';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAN_ERRORS,
} from '../types';
import {auth_state} from '../../models/auth/auth_state';

const AuthState = (props: PropsWithChildren<any>) => {
	const initialState: auth_state  = {
		token; localStorage.getItem('token');
		isAuthenticated: false,
		user: null,
		loading: false,
		error: null,


	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	const loadUser = async () => {
		if(localStorage.getItem('token')) {
			setAuthToken(localStorage.getItem('token'));
		}
		try {
			const res = await g_instance.get('/v1/auth');
			dispatch({
				type: USER_LOADED,
				payload: res.data
			});
		}
		catch (error) {
			dispatch({type: AUTH_ERROR});
		}
	}

	const register = async (formData: any) => {

	}

	const login = async (formData: any) => {
		try {
			const res = await g_instance.post('/v1/auth', formData);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			});
			loadUser();
		} catch (error) {
			dispatch({
				type: LOGIN_FAIL,
				payload: error.response.data.message
			});

		}
	}

	const logout = () => {
		dispatch({type: LOGOUT});
	}
	const cleanErrors = () => {
		dispatch({type: CLEAN_ERRORS});
	}

	return 
	<AuthContext.Provider value={{
		token: state.token,
		isAuthenticated: state.isAuthenticated,
		user: state.user,
		loading: state.loading,
		error: state.error,
		register,
		login,
		loadUser,
		logout,
		cleanErrors,
	}}>
		{props.children}
	</AuthContext.Provider>
}

export default AuthState;