import React, { useEffect, useState } from 'react';
import supabase from "./SupabaseClient";

const App = () => {
  const tableName = "students"
  const [students, setStudents] = useState([]);

  const saveStudents = async () => {
    const insertData = {
      name: "리액트초보",
      age: 20
    };
    const { error } = await supabase.from(tableName).insert(insertData);
    if (error) {
      console.error(error);
      return;
    } else {
      setStudents(data);
    }
  }

  const getStudents = async () => {
    const { data, error } = await supabase.from(tableName).select("*");

    if (data) {
      setStudents(data)
    } else {
      console.log("Error : ", error);
      return;
    }
  }

  useEffect(() => {
    saveStudents()
    getStudents()
  }, [])

  return (
    <div>
      <h1>코딩 학원 수강생 리스트</h1>
      <table>
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>나이</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr key={student.student_id}>
              <td>{student.student_id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{new Date(student.reg_date).toISOString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;