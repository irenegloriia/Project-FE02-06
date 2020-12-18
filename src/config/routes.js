import { Home, TeacherLesson } from '../pages';

const routes = [
  {
    path: '/home',
    component: Home,
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
