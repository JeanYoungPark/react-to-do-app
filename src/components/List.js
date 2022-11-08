import React, { useState } from "react";

const List = React.memo(
  ({
    id,
    title,
    complated,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, seteditedTitle] = useState(title);

    const handleComplateChange = (id) => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.complated = !data.complated;
        }
        return data;
      });
      setTodoData(newTodoData);
    };

    const handleEditChange = (event) => {
      seteditedTitle(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editedTitle;
        }
        return data;
      });

      setTodoData(newTodoData);
      setIsEditing(false);
    };

    if (isEditing) {
      return (
        <div
          className={
            "flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded"
          }
        >
          <div className="items-center">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={editedTitle}
                className="w-full px-3 py-2 mr-4 text-gray-500"
                onChange={handleEditChange}
              />
            </form>
          </div>
          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(false)}
            >
              x
            </button>
            <button
              className="px-4 py-2 float-right"
              type="submit"
              onClick={handleSubmit}
            >
              save
            </button>
          </div>
        </div>
      );
    } else {
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
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(true)}
            >
              edit
            </button>
          </div>
        </div>
      );
    }
  }
);

export default List;
