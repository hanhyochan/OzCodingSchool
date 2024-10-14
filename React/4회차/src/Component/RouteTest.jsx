import React from "react";
import {
  Link,
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams
} from "react-router-dom";

const RouteTest = () => {
  const navigate = useNavigate();
  {
    /* useLocation */
  }
  const location = useLocation();
  console.log(location);
  console.log(location.pathname);
  console.log(location.search);

  return (
    <div>
      {/* 그냥 라우터 */}
      {/* <Link to="/main"> 메인</Link>
      <Link to="/myPage"> 마이페이지</Link>
      <Link to="/test"> 테스트</Link> */}

      {/* useNavigate */}
      <div>
        <button onClick={() => navigate("/main")}>메인페이지</button>
        <button onClick={() => navigate("/myPage")}>마이페이지</button>
        <button onClick={() => navigate("/test")}>테스트페이지</button>
      </div>
      <button onClick={() => navigate(-1)}>{`<- 뒤로가기`}</button>
      <button onClick={() => navigate(1)}>{`<- 뒤로가기`}</button>

      <Routes>
        <Route path="/main/:name" element={<Main />} />
        <Route path="/myPage" element={<div>마이페이지</div>} />
        <Route path="/test" element={<div>테스트 페이지</div>} />
      </Routes>
    </div>
  );

};

function Main() {
  const params = useParams();
  console.log(params.name);

  const location = useLocation();
  console.log(location.search)
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('name'))
  console.log(searchParams.get('school'))
  return <div>메인페이지</div>;
}

export default RouteTest;
