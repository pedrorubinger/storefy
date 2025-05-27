import { AxiosError } from "axios";

type ApiError = {
  message: string;
  statusCode?: number;
  details?: any;
  isNetworkError?: boolean;
};

export function handleError(error: unknown): ApiError {
  if (isAxiosError(error)) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const status = axiosError.response.status;
      const data = axiosError.response.data;

      let message = "An unexpected error occurred.";
      let details = data;

      switch (status) {
        case 400:
          message = "Bad request. Please check your input.";
          break;
        case 401:
          message = "Unauthorized. Please log in again.";
          break;
        case 403:
          message = "Forbidden. You don't have access to this resource.";
          break;
        case 404:
          message = "Resource not found.";
          break;
        case 422:
          message = "Validation failed. Please check your input.";
          break;
        case 429:
          message = "Too many requests. Please slow down.";
          break;
        case 500:
          message = "Server error. Please try again later.";
          break;
        default:
          message =
            (data as Record<string, string> | undefined)?.message ||
            "An unexpected error occurred.";
      }

      return {
        message,
        statusCode: status,
        details,
      };
    }

    if (axiosError.request) {
      return {
        message: "Network error. Please check your internet connection.",
        isNetworkError: true,
      };
    }
  }

  return {
    message: (error as Error)?.message || "An unknown error occurred.",
  };
}

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}
