// import React, { useState, useEffect } from "react";

// const List = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const getDatas = async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
//       const data = await res.json();
//       setTodos(data);
//     };
//     getDatas();
//   }, [todos]);

//   return (
//     <div>
//       {todos.map((todo) => (
//         <ul key={todo.id}>
//           <li style={{ background: todo.completed ? "green" : "red" }}>
//             {todo.title}
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// };

// export default List;

import React from "react";

const todos = [
  {
    title: "Todo 1",
    content: "This is the first todo",
    isComplete: true,
    id: 1,
  },
  {
    title: "Todo 2",
    content: "This is the second todo",
    isComplete: false,
    id: 2,
  },
  {
    title: "Todo 3",
    content: "This is the third todo",
    isComplete: true,
    id: 3,
  },
];

const List = () => {
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{ background: todo.isComplete ? "green" : "red" }}
        >
          <h2>{todo.title}</h2>
          <p>{todo.content}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
