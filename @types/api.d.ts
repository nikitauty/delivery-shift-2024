interface BaseResponse {
  reason?: string;
  success: boolean;
}

interface CreateOtpDto {
  phone: string;
}

interface OtpResponse extends BaseResponse {
  retryDelay: number;
}

interface SignInDto {
  phone: string;
  code: number;
}
