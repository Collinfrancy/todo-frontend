import { jwtDecode } from 'jwt-decode';

export const getLoggedInId = () => {
  const token = localStorage.getItem('token');
  const decoded = jwtDecode(token);
  return decoded.id;
};

export const getLoggedInRole = () => {
  const token = localStorage.getItem('token');
  const decoded = jwtDecode(token);
  return decoded.role;
};
