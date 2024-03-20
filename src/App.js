import { Suspense } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Teachers from "./pages/Teachers/Teachers";
import Favorites from "./pages/Favorites/Favorites";
import {
  FAVORITES_ROUTE,
  HOME_ROUTE,
  TEACHERS_ROUTE,
} from "./constants/routes";

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
