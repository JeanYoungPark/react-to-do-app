import React from "react";

export default function List({ todoData, setTodoData }) {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const listStyle = (complated) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: complated ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleComplateChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.complated = !data.complated;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div style={listStyle(data.complated)} key={data.id}>
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={() => handleComplateChange(data.id)}
          />
          {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}
