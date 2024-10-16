import { Link, useLocation } from "react-router-dom";

const Test = () => {
  const location = useLocation();
  const animal = location.state?.formList; 

  if (!animal) {
    return <>동물을 찾을 수 없습니다.</>;
  }

  return (
    <>
        <Link to='/'>홈버튼</Link>
      <h1>{animal.name}</h1>
      <p>특징: {animal.feature}</p>
    </>
  );
};

export default Test;