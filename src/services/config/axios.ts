import type { ParamsType } from '@/types/Api';
import axios, { AxiosError, type AxiosRequestConfig } from 'axios';
import qs from 'qs';

const axiosServices = axios.create({
	baseURL: 'https://61ecf915f3011500174d2262.mockapi.io',
	timeout: 30000,
});

axios.interceptors.request.use(
	(req) => {
		req.params = {
			lang: 'en',
		};

		return req;
	},
	(err) => {
		throw err;
	}
);

axiosServices.interceptors.response.use(
	(res) => res.data,
	(error: AxiosError) => {
		throw error;
	}
);

export default axiosServices;

export const API_get = (
	pathname: string,
	params?: ParamsType,
	config?: AxiosRequestConfig
) => {
	if (pathname.includes('?')) {
		throw new Error('pathname cannot includes "?"');
	}
	const stringifyParams = qs.stringify(params);
	const url = pathname + stringifyParams ? `?${stringifyParams}` : '';

	return axiosServices.get(url, config);
};

export const API_post = <T>(
	pathname: string,
	data: T,
	config?: AxiosRequestConfig
) => {
	const url = pathname;

	return axiosServices.post(url, data, config);
};

export const API_update = <T>(
	pathname: string,
	data: T,
	config?: AxiosRequestConfig
) => {
	const url = pathname;

	return axiosServices.put(url, data, config);
};

export const API_delete = (pathname: string, config?: AxiosRequestConfig) => {
	const url = pathname;

	return axiosServices.delete(url, config);
};

export const API_patch = <T>(
	pathname: string,
	data: T,
	config?: AxiosRequestConfig
) => {
	const url = pathname;
	return axiosServices.patch(url, data, config);
};
