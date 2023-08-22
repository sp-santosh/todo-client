import React, { Fragment, useState } from "react";
const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:8080/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1
        className="container text-center mt-5 text-white bg-dark p-3 rounded-3 shadow-sm mb-5"
        style={{ fontFamily: "cursive", fontSize: "40px" }}
      >
        Todo List
      </h1>
      <form
        className="d-flex mt-5 mb-5 p-3 rounded-3 shadow-sm bg-light"
        onSubmit={onSubmitForm}
      >
        <input
          type="text"
          placeholder="Enter Todo"
          className="form-control shadow-sm "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-primary rounded-3 ml-3 shadow-sm ">
          Let's do
        </button>
      </form>
    </>
  );
};

export default InputTodo;
