import React from "react";
import { useState } from "react";
import { Main } from "./Main";

function Header() {
  const [form, setForm] = useState({
    name: "",
    feature: "",
  });
  const { name, feature } = form;
  const [formList, setFormList] = useState([]);

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleClickBtn() {
    const finInfo = {...form, id: Number(new Date())}
    setFormList((prev) => [...prev, finInfo]);
    console.log(formList);
  }

  return (
    <>
      <header>
        <h1>동물 도감</h1>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeInput}
            autoComplete="off"
          />
          <input
            type="text"
            name="feature" // name 속성 추가
            value={feature}
            onChange={handleChangeInput}
            autoComplete="off"
          />
          <button onClick={handleClickBtn}>제출</button>
        </div>
        <input />
        <button>검색</button>
        <Main formList={formList}/>
      </header>
    </>
  );
}
export default Header;
