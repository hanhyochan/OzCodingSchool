import React from 'react';
import { saveToLocalStorage, getFromLocalStorage } from "./localStorage";

const DeleteBtn = ({ formList, id, setFormList }) => {
    // const storedFormList = getFromLocalStorage("storedForm") || [];
    // const displayList = formList.length > 0 ? formList : storedFormList;

    function handleDelete(formList, id) {
        // id가 일치하지 않는 항목만 필터링하여 새로운 배열을 반환
        const updatedList = formList.filter((list) => list.id !== id);
        // 로컬 스토리지에 업데이트된 목록 저장
        saveToLocalStorage("storedForm", updatedList); // 로컬 스토리지에 저장
        return updatedList; // 필터링된 리스트 반환
    }

    return (
        <div>
            <button 
                onClick={() => {
                    const newList = handleDelete(formList, id);
                    setFormList(newList); // 부모 컴포넌트에 상태 업데이트
                }}
            >
                삭제
            </button>
        </div>
    );
};

export default DeleteBtn;
