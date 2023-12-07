import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ViewTodos = ({ refresh }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/todos");
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [refresh]);

  return (
    <div>
      <h1>View Todos</h1>
      {todos.length === 0 ? (
        <p>No todos available. Please add some.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

ViewTodos.propTypes = {
  refresh: PropTypes.bool.isRequired,
};

export default ViewTodos;
