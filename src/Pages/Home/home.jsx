import React from "react";
import { useForm } from "react-hook-form";
import { TodoContext } from "../../todo-providers";
import { Add_User } from "../../todo-providers/todo-types";
import { nanoid } from "nanoid";
import { TextInterface } from "../../components/Text-interface";

export const Home = () => {
  const { register, handleSubmit, reset } = useForm();
  const { dispatch, data } = React.useContext(TodoContext);

  const submit = (data) => {
    dispatch({ type: Add_User, value: { id: nanoid(), ...data } });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div className="input">
          <input {...register("first_name")} type="text" />
        </div>
        <div className="btnBlock">
          <button className="send" type="submit">
            Send
          </button>
        </div>
      </form>

      <TextInterface />
    </>
  );
};
