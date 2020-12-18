import { 
  Home,
  ClassesPage
} from '../pages';

const routes = [
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
  {
    path: '/ClassesPage',
    component: ClassesPage,
    isPublic: true,
  },
];

export default routes;
