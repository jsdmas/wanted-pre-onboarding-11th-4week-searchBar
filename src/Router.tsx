import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/index'));
const NotFound = lazy(() => import('./pages/NotFound/index'));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={'Loading....'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;
