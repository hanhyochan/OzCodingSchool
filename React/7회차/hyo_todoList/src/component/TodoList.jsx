const TodoList = ({ todo, handleCheckTodo, handleDeleteTodo }) => {

  return (
    <>
      <ul>
        {todo.map((el) => (
          <li className="todo" key={el.id}>
            <input
              type="checkbox"
              checked={el.checked}
              onChange={() => handleCheckTodo(el.id)}
            />
            {el.content}
            <button onClick={() => handleDeleteTodo(el.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
