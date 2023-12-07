import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/todos", { text: todo });
      console.log("Submitted:", todo);
      setTodo("");
      onAddTodo();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a to-do item"
      />
      <button type="submit">Add</button>
    </form>
  );
};

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodo;
