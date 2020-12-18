import { Home, TeacherLesson, Register, Login } from '../pages';

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
