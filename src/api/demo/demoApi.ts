import http from '@/utils/http';
import {
    USER_LOGIN,
    USER_INFO,
    USER_LOGOUT,
    USER_ADDRESS,
    UserApi,
    LoginParams,
    UserInfo,
    AddressInfo
} from '@/api/demo/index';

class UserService implements UserApi {
    login(data: LoginParams): Promise<string> {
        return http.post(USER_LOGIN, data);
    }

    getInfo(): Promise<UserInfo> {
        return http.get(USER_INFO);
    }

    logout(): Promise<void> {
        return http.post(USER_LOGOUT);
    }
    getAddress(userId: number): Promise<AddressInfo> {
        return http.get(USER_ADDRESS);
    }
}

export default new UserService();
