import {
  Home,
  TeacherLesson,
  Register,
  Login,
  myCourse,
  allCourse,
} from '../pages';

const routes = [
  {
    path: '/home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/register',
    component: Register,
    isPublic: true,
  },
  {
    path: '/mycourse',
    component: myCourse,
    isPublic: false,
  },
  {
    path: '/allcourse',
    component: allCourse,
    isPublic: false,
  },
  {
    path: '/login',
    component: Login,
    isPublic: true,
  },
  {
    path: '/teacherLesson',
    component: TeacherLesson,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
