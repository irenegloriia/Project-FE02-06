import {
  Home,
  ClassesPage,
} from '../pages';

const routes = [
  {
    path: '/home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/ClassesPage',
    component: ClassesPage,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
