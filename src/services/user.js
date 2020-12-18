import BaseService from './baseService';
import API from '../config/rest';

const getTeacherById = (userId) => {
  return BaseService.get(API.TEACHERBYID(userId));
};
const getStudentById = (userId) => {
  return BaseService.get(API.STUDENTBYID(userId));
};

export default { getTeacherById, getStudentById };
