import { useNavigate } from "react";

export function Main({formList}) {
  const navigate = useNavigate()

  return (
    <>
      <main>
        <div>
        {formList.map((info) => (
          <div key={info.id}>
            <p>{info.name}</p> <p>{info.feature}</p>
            <button onClick={() => useNavigate()}>상세보기</button>
          </div>
        ))}
        </div>
      </main>
    </>
  );
}
