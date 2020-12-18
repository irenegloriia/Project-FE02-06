import BaseService from './baseService';
import API from '../config/rest';

const login = (username, password, role) => {
  if (role === 'student') {
    return BaseService.post(API.LOGIN_STUDENT, { username, password });
  }
  if (role === 'teacher') {
    return BaseService.post(API.LOGIN_TEACHER, { username, password });
  }
  return null;
};

const register = (username, name, email, password, phone, role) => {
  if (role === 'student') {
    return BaseService.post(API.REGISTER_STUDENT, {
      username,
      name,
      email,
      password,
      phone,
    });
  }
  if (role === 'teacher') {
    return BaseService.post(API.REGISTER_TEACHER, {
      username,
      name,
      email,
      password,
      phone,
    });
  }
  return null;
};

export default { login, register };
