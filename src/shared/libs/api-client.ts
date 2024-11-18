import axios, { AxiosInstance, AxiosResponse } from "axios";

const BASE_URL = "https://devxpm.bixolon.com:4000/api";

class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  }

  private async handleResponse<TResult>(response: AxiosResponse<TResult>): Promise<TResult> {
    return response.data;
  }

  public async get<TResult = unknown>(
    endpoint: string,
    queryParams?: Record<string, string | number>
  ): Promise<TResult> {
    try {
      const response = await this.axiosInstance.get<TResult>(endpoint, {
        params: queryParams,
      });
      return this.handleResponse(response);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`HTTP GET Error: ${error.response?.status} - ${error.message}`);
      } else {
        throw new Error(`Unexpected Error: ${(error as Error).message}`);
      }
    }
  }

  public async post<TResult = unknown, TData = Record<string, unknown>>(
    endpoint: string,
    data: TData
  ): Promise<TResult> {
    try {
      const response = await this.axiosInstance.post<TResult>(endpoint, data);
      return this.handleResponse(response);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`HTTP POST Error: ${error.response?.status} - ${error.message}`);
      } else {
        throw new Error(`Unexpected Error: ${(error as Error).message}`);
      }
    }
  }
}

export const apiClient = new ApiClient(BASE_URL);
