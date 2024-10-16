import React from "react";
import { TodoContext } from "../../todo-providers";
import { Delete_User, Edit_User } from "../../todo-providers/todo-types";

export const TextInterface = () => {
  const { data, dispatch } = React.useContext(TodoContext);

  const DeleteUser = (id) => {
    dispatch({ type: Delete_User, id });
  };
  const EditUser = (id) => {
    const UserEdit = prompt("qwertyu");
    if (EditUser) {
      dispatch({ type: Edit_User, id, value: { first_name: UserEdit } });
    }
  };

  return (
    <>
      {data?.users?.map((item) => (
        <div className="block" key={item.id}>
          <h1 className="title">{item.first_name}</h1>
          <div className="delBtnBlock">
            <button className="del" onClick={() => DeleteUser(item.id)}>
              Delete
            </button>
            <button  className="edit" onClick={() => EditUser(item.id)}>
              Edit
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
