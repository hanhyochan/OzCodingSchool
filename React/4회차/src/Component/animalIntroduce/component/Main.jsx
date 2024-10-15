import { useNavigate } from "react-router-dom";
import { saveToLocalStorage, getFromLocalStorage } from "./localStorage";
import HandleDelete from "./HandleDelete";

function Main({ formList = [] }) {
  const navigate = useNavigate();

  // 컴포넌트가 렌더링될 때 로컬 스토리지에서 데이터를 불러옴
  const storedFormList = getFromLocalStorage("storedForm") || [];

  // formList가 빈 배열이면 로컬 스토리지에서 가져온 데이터를 사용
  const displayList = formList.length > 0 ? formList : storedFormList;

  console.log(displayList);

  function LimitText(list) {
    return (
      <>
        {list.map((info) => {
          const nameText =
            info.name.length >= 10 ? info.name.slice(0, 10) + "..." : info.name;
          const featureText =
            info.feature.length >= 10
              ? info.feature.slice(0, 10) + "..."
              : info.feature;

          return (
            <div key={info.id}>
              <h2>{nameText}</h2>
              <span>{featureText}</span>
              <button
                onClick={() => {
                  // 상세 보기 버튼을 클릭할 때 로컬 스토리지에 저장
                  saveToLocalStorage("selectedItem", info);
                  navigate(`/test/${info.id}`, { state: { formList: info } });
                }}
              >
                상세보기
              </button>
              <button onClick={(formList) => HandleDelete}>삭제</button>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
      <main>
        <div>{LimitText(displayList)}</div>
      </main>
    </>
  );
}

export default Main;
