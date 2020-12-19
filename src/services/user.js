import BaseService from './baseService';
import API from '../config/rest';

const getTeacherById = (userId) => {
  return BaseService.get(API.TEACHERBYID(userId));
};
const getStudentById = (userId) => {
  return BaseService.get(API.STUDENTBYID(userId));
};

const updateTeacherById = (userId, username, name, email, password, phone) => {
  return BaseService.put(API.TEACHERBYID(userId), {
    username,
    name,
    email,
    password,
    phone,
  });
};
const updateStudentById = (
  userId,
  username,
  name,
  email,
  password,
  education
) => {
  return BaseService.put(API.STUDENTBYID(userId), {
    username,
    name,
    email,
    password,
    education,
  });
};

export default {
  getTeacherById,
  getStudentById,
  updateStudentById,
  updateTeacherById,
};
