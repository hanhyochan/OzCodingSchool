import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Contents = () => {
  const [contents, setContents] = useState([
    {
      id: 1,
      content: "컨텐츠 1 입니다.",
    },
    {
      id: 2,
      content: "코딩 고수",
    },
    {
      id: 3,
      content: "컨텐츠 1 입니다.",
    },
  ]);
  return (
    <div>
      <ul>
        {contents.map((item, index) => (
          <li key={item.id}>
            <NavLink to={`${item.id}?content=${item.content}`}>{item.content}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contents;
