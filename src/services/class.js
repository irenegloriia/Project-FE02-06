import BaseService from './baseService';
import API from '../config/rest';

const getAllClass = () => {
  return BaseService.get(API.CLASSES);
};

export default { getAllClass };
