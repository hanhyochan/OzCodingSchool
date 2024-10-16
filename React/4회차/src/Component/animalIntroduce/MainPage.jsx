import React, { useState, useEffect } from "react";
import Main from "./component/Main";
import { saveToLocalStorage, getFromLocalStorage } from "./component/localStorage";

const initialForm = getFromLocalStorage("storedForm") || [];

function MainPage() {
  const [form, setForm] = useState({
    name: "",
    feature: "",
  });
  const { name, feature } = form;
  const [formList, setFormList] = useState(initialForm);

  useEffect(() => {
    saveToLocalStorage("storedForm", formList);
  }, [formList]);

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleClickBtn() {
    const finInfo = { ...form, id: Number(new Date()) };
    setFormList((prev) => [...prev, finInfo]);
    setForm({ name: "", feature: "" });
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
            name="feature"
            value={feature}
            onChange={handleChangeInput}
            autoComplete="off"
          />
          <button onClick={handleClickBtn}>제출</button>
        </div>
        <Main formList={formList} />
      </header>
    </>
  );
}

export default MainPage;