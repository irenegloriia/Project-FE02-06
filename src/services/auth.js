import BaseService from './baseService';
import API from '../config/rest';

const login = (email, password, role) => {
  if (role === 'student') {
    return BaseService.post(API.LOGIN_STUDENT, { email, password });
  }
  if (role === 'teacher') {
    return BaseService.post(API.LOGIN_TEACHER, { email, password });
  }
  return null;
};

const register = (firstName, lastName, username, email, password, role) => {
  if (role === 'student') {
    return BaseService.post(API.REGISTER_STUDENT, {
      firstName,
      lastName,
      username,
      email,
      password,
    });
  }
  if (role === 'teacher') {
    return BaseService.post(API.REGISTER_TEACHER, {
      firstName,
      lastName,
      username,
      email,
      password,
    });
  }
  return null;
};

export default { login, register };
