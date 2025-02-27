import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

// Generic API response interface
interface ApiResponse<T = any> {
  success: boolean;
  data: T | null;
  error?: string;
}

// Create Axios instance
export const axiosInstance = axios.create({
  baseURL: "https://your-api-url.com",
  headers: { "Content-Type": "application/json" },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse): Promise<AxiosResponse<ApiResponse>> =>
    Promise.resolve({
      ...response,
      data: { success: true, data: response.data },
    }),
  (error: AxiosError): Promise<AxiosResponse<ApiResponse>> =>
    Promise.resolve({
      ...error.response,
      data: {
        success: false,
        data: null,
        error: error.response?.data || error.message || "Something went wrong",
      },
    } as AxiosResponse<ApiResponse>) // Type assertion for TypeScript
);


