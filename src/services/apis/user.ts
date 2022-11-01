import type { ParamsType } from '@/types/Api';
import type { User } from '@/types/User';
import type { AxiosRequestConfig } from 'axios';
import {
	API_delete,
	API_get,
	API_patch,
	API_post,
	API_update,
} from './../config/axios';

const USER_PATH = '/users';

const userAPI = {
	get: (params?: ParamsType, config?: AxiosRequestConfig) =>
		API_get(USER_PATH, params, config),

	post: (data: User, config?: AxiosRequestConfig) =>
		API_post(USER_PATH, data, config),

	update: (data: User, config?: AxiosRequestConfig) =>
		API_update(USER_PATH, data, config),

	delete: (config?: AxiosRequestConfig) => API_delete(USER_PATH, config),

	patch: (data: User, config: AxiosRequestConfig) =>
		API_patch(USER_PATH, data, config),
};

export default userAPI;
