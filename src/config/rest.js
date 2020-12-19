export default {
  LOGIN: '/login',
  CLASSES: '/classes',
  CLASSESBYID: (classId) => {
    return `classes/${classId}`;
  }
};
