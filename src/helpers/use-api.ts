import axios, { AxiosInstance, AxiosResponse } from "axios";
import { getLocalToken } from "../utils/storage/local-storage";

// Definisikan tipe untuk data request post
interface PostData {
    path: string;
    body: Record<string, any>; // Objek yang bisa memiliki properti apa saja
}

class useApi {
    private instance: AxiosInstance;
    private lang: string;

    constructor() {
        this.instance = axios.create({
            baseURL: `${import.meta.env.VITE_APP_ENV}/api`, // Ambil host dari env
            headers: {
                Accept: "text/plain",
            },
        });

        // Interceptor untuk respon
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                return response;
            },
            (error: any) => {
                return Promise.reject(error?.response?.data ?? error);
            },
        );
    }

    // Method GET
    async get(rawPath: string): Promise<any> {
        try {
            const token = getLocalToken(); // Ambil token dari cookie
            if (token) {
                // Jika ada token, set Authorization header
                this.instance.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${token}`;
            }

            const path = rawPath; // Tambahkan bahasa ke path
            const response = await this.instance.get(path);
            return response.data;
        } catch (error: any) {
            throw error?.response?.data ?? error;
        }
    }

    // Method POST
    async post(data: PostData, multipart?: boolean): Promise<any> {

        const token = getLocalToken(); // Ambil token dari cookie
        if (token && data.path !== "auth/login") {
            this.instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }

        if (multipart) {
            this.instance.defaults.headers.common["Content-Type"] = "multipart/form-data";
        }

        const path = data.path; // Tambahkan bahasa ke path

        const response = await this.instance.post(path, data.body);
        return response.data;
    } catch(error: any) {
        console.error("Error in POST request:", error); // Debug tambahan
        throw error?.response?.data ?? error;
    }

    // Method DELETE
    async delete(path: string): Promise<any> {
        try {
            const token = getLocalToken();
            if (token) {
                this.instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            }

            const response = await this.instance.delete(path);
            return response.data;
        } catch (error: any) {
            console.error("Error in DELETE request:", error);
            throw error?.response?.data ?? error;
        }
    }
}

export default useApi;