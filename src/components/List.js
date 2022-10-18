import React from "react";

const List = React.memo(
  ({ id, title, complated, todoData, setTodoData, provided, snapshot }) => {
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
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
      >
        <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={() => handleComplateChange(id)}
          />
          <span className={`${complated ? "line-through" : ""} pl-2`}>
            {title}
          </span>
        </div>
        <div className="items-center">
          <button
            className="px-4 py-2 float-right"
            onClick={() => handleClick(id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }
);

export default List;
