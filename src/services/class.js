import BaseService from './baseService';
import API from '../config/rest';

const getAllClass = () => {
  return BaseService.get(API.CLASSES);
};

const getClassByStudentId = (userId) => {
  return BaseService.get(API.CLASSESBYSTUDENTID(userId));
};

const getClassById = (classId) => {
  return BaseService.get(API.CLASSBYID(classId));
};

export default { getAllClass, getClassByStudentId, getClassById };
