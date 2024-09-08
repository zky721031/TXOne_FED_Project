import { useRoutes } from 'react-router-dom';
import Auth from '../auth';
import LazyLoad from '../lazyLoad';

export default function Router() {
  const element = useRoutes([
    { path: '/', element: <Auth>{LazyLoad('Weather')}</Auth> },
    { path: '/weather', element: <Auth>{LazyLoad('Weather')}</Auth> },
    { path: '/chart', element: <Auth>{LazyLoad('Chart')}</Auth> },
    { path: '*', element: <Auth>{LazyLoad('NotFound')}</Auth> },
  ]);
  return <>{element}</>;
}
