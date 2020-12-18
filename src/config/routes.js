import { Home, Classespage } from '../pages';

const routes = [
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
  {
    path: '/Classespage',
    component: Classespage,
    isPublic: true,
  },
];

export default routes;
