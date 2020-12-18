import { Home, Classespage } from '../pages';

const routes = [
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
  {
    path: '/classes',
    component: Classespage,
    isPublic: true,
  },
];

export default routes;
