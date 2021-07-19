import {createContext} from 'react';
import {IUser} from '../../models/user/user.models';

type AuthContextType = {
	token: string;
	isAuthenticated: boolean;
	user: IUser;
	loading: boolean;
	error: string;
	register: (fromData: any) => Promise<void>;
	login: (fromData: any) => Promise<void>;
	loadUser: () => Promise<void>;
	logout: () => void;
	cleanErrors: () => void;

}

const authContext = createContext<AuthContextType>({} as AuthContextType);
export default authContext;