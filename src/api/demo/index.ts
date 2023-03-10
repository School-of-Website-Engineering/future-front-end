export const USER_LOGIN = '/api/demo/login';
export const USER_INFO = '/api/demo/info';
export const USER_LOGOUT = '/api/demo/logout';
export const USER_ADDRESS = '/api/demo/address';

export interface LoginParams {
    username: string;
    password: string;
}

export interface UserInfo {
    id: number;
    name: string;
    email: string;
}

export interface AddressInfo {
    province: string;
    city: string;
    district?: string;
}

export interface UserApi {
    login(data: LoginParams): Promise<string>;
    getInfo(): Promise<UserInfo>;
    logout(): Promise<void>;
    getAddress(userId: number): Promise<AddressInfo>;
}
