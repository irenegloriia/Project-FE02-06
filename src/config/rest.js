export default {
  LOGIN_STUDENT: '/auth/signin/student',
  REGISTER_STUDENT: '/auth/signup/student',
  LOGIN_TEACHER: '/auth/signin/teacher',
  REGISTER_TEACHER: '/auth/signup/teacher',
  STUDENTBYID: (studentId) => {
    return `students/${studentId}`;
  },
  TEACHERBYID: (teacherId) => {
    return `teachers/${teacherId}`;
  },
  CLASSES: '/classes',
  LESSONS: (classId) => {
    return `classes/${classId}/lessons`;
  },
};
