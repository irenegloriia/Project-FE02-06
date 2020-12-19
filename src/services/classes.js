import BaseService from './baseService';
import API from '../config/rest';

const getAllClasses = () => {
  return BaseService.get(API.CLASSES);
};

const getClassesbyId = () => {
  return BaseService.get(API.CLASSES);
};

const createCourse = (name, description) => {
  return BaseService.post(API.CLASSES, {
    name,
    description,
  });
};
export default { getAllClasses, getClassesbyId, createCourse };
