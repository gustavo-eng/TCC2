export interface ApiResponseError {
  type: string;
  error: string;
}

export interface responseUpdateUser {
  status?: boolean;
  msg?: string;
}

export interface ApiResponseSuccess {
  type: string;
}
