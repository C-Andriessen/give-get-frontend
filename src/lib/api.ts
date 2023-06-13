import axios from "axios";

export class Api {
    private static getQueryString(params: Record<string, unknown>): string {
        const searchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined && value !== null) {
                searchParams.append(key, String(value));
            }
        }
        return searchParams.toString();
    }

    public static async get<T = any>(endpoint: string, params: Record<string, unknown> = {}, options?: Object) {
        return axios.get<T>(`${process.env.API_URL}/${endpoint}${Object.entries(params)?.length ? `?${Api.getQueryString(params)}` : ''}`, options);
    }

    public static async post<T = any>(endpoint: string, data: Object, options?: Object) {
        return axios.post<T>(`${process.env.API_URL}/${endpoint}`, data, options);
    }

    public static async delete<T = any>(endpoint: string, options?: Object) {
        return axios.delete<T>(`${process.env.API_URL}/${endpoint}`, options);
    }
}

export default Api;
