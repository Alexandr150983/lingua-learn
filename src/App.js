import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout, Loader } from "components";

import { FAVORITES_ROUTE, HOME_ROUTE, TEACHERS_ROUTE } from "constants/routes";

const Home = lazy(() => import("./pages/Home/Home"));
const Teachers = lazy(() => import("./pages/Teachers/Teachers"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={TEACHERS_ROUTE} element={<Teachers />} />
          <Route path={FAVORITES_ROUTE} element={<Favorites />} />
          <Route path="*" element={<Navigate replace to={HOME_ROUTE} />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
