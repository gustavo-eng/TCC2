export interface ApiResponseError {
  type: string;
  error: string;
}

export interface responseUpdateUser {
  status?: boolean;
  msg?: string;
  payload?: object;
}

export interface ApiResponseSuccess {
  type: string;
}
