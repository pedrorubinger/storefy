import { AxiosError } from "axios";

export enum ErrorCode {
  INTERNAL = "INTERNAL_SERVER_ERROR",
}

export interface ApiValidationError {
  property: string;
  value?: any;
  constraints?: {
    [type: string]: ErrorCode;
  };
}

export interface ApiError {
  code: ErrorCode;
  status: number;
  errors?: ApiValidationError[] | null;
}

export interface HandledError {
  plain?: AxiosError | any;
  api?: ApiError | null;
  handled: boolean;
  message: string;
}
