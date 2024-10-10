import { useState } from "react";
import './App.css';

const Project = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  function handleSubmit() {
    alert(`${userName}님 안녕하세요. 나이는 ${userAge}살이시군요~?`);
  }

  function userNamehandleChange(e) {
    e.preventDefault();
    setUserName(e.target.value);
    console.log(userName);
  }

  function userAgehandleChange(e) {
    e.preventDefault();
    setUserAge(e.target.value);
    console.log(userAge);
  }

  return (
    <>
      <img
        src="https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg"
        alt=""
      />

      <form onSubmit={handleSubmit}>
        <label for="name">이름</label>
        <input
          id="name"
          type="text"
          value={userName}
          onChange={userNamehandleChange}
          placeholder="이름을 입력하세요"
          autoComplete="off"
        />
        <div>
          <label for="age">나이</label>
          <input
            id="age"
            type="number"
            value={userAge}
            onChange={userAgehandleChange}
            placeholder="나이를 입력하세요"
            autoComplete="off"
          />
          <button>사용자 추가</button>
        </div>
      </form>
    </>
  );
};

export default Project;
