export const USER_LOGIN = '/api/user/login';

export interface UserState {
    token: string;
    username: string;
}

export interface userLoginApi {
    getUserLogin<Response>(userData: object): Promise<Response>;
}

class UserLoginService implements userLoginApi {
    getUserLogin<Response>(userData: object): Promise<Response> {
        return http.post<Response>(USER_LOGIN, userData);
    }
}
export default new UserLoginService();
