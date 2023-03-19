export const USER_LOGIN = '/api/user/login';

export interface UserState {
	token: string;
	username: string;
}

export interface userLoginApi {
	getUserLogin(userData: object): Promise<Response>;
}

class UserLoginService implements userLoginApi {
	getUserLogin(userData: object): Promise<Response> {
		return http.post(USER_LOGIN, { userData });
	}
}
export default new UserLoginService();
