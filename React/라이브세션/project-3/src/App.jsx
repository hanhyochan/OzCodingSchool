import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contents from "./pages/Contents";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import Layout from "./component/Layout";
import User from "./component/User";
import ContentsDetail from "./pages/ContentsDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contents" element={<Contents />}>
          <Route path="/:id" element={<ContentsDetail />} />
        </Route> */}
          <Route path="/contents" element={<Contents />} />
          <Route path="/contents/:id" element={<ContentsDetail />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/user/:userId" element={<User />} />
        </Route>
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
