import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/auth';




// export const signUpUserFn = async (user: RegisterInput) => {
//   const response = await authApi.post<GenericResponse>('auth/register', user);
//   return response.data;
// };
// export const signUpUserFn = async (user: RegisterInput) => {
//   const response = await authApi.post<GenericResponse>('auth/register', user);
//   return response.data;
// };

const loginUserFn=async (User) =>{
    return await axios.post(`${BASE_URL}/login`,User)
//  return response.data
};
// export const loginUserFn=async (User : String) =>{
//   const response = await authApi.post(`login`,User)
//   return response.data
//  };

// export const verifyEmailFn = async (verificationCode: string) => {
//   const response = await authApi.get<GenericResponse>(
//     `auth/verifyemail/${verificationCode}`
//   );
//   return response.data;
// };

// export const logoutUserFn = async () => {
//   const response = await authApi.get<GenericResponse>('auth/logout');
//   return response.data;
// };

// export const getMeFn = async () => {
//   const response = await authApi.get<IUserResponse>('users/me');
//   return response.data;
// };

// export const forgotPasswordFn = async (email: string) => {
//   const response = await authApi.post<GenericResponse>('auth/forgotpassword',{email});
//   return response.data;
// };

// export const resetPasswordFn = async (data, resetCode) => {
//   const response = await authApi.patch<GenericResponse>(`auth/resetpassword/${resetCode}`, data);
//   return response.data;
// };
export{loginUserFn}