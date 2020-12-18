import BaseService from './baseService';
import API from '../config/rest';

const getLessonByClassId = (classId) => {
  return BaseService.get(API.CLASSES(classId));
};

export default { getLessonByClassId };
