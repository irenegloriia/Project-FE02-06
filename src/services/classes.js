import BaseService from './baseService';
import API from '../config/rest';

const getAllClasses = () => {
  return BaseService.get(API.CLASSES);
};

export default { getAllClasses };
