import { RouteObject } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Events } from '../pages/Events';
import { LiveStream } from '../pages/LiveStream';
import { Dashboard } from '../pages/Dashboard';

interface RouteConfig extends RouteObject {
  path: Key | null | undefined;
  element: ReactNode;
  title?: string;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Home />,
    title: 'Home'
  },
  {
    path: '/events',
    element: <Events />,
    title: 'Events'
  },
  {
    path: '/live/:id',
    element: <LiveStream />,
    title: 'Live Stream'
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    title: 'Dashboard'
  }
];