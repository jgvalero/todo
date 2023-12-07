import { useState } from "react";
import "./App.css";
import AddTodo from "./components/addTodo.jsx";
import ViewTodos from "./components/viewTodos.jsx";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <main>
      <div className="window">
        <ViewTodos refresh={refresh} />
        <AddTodo onAddTodo={handleRefresh} />
      </div>
    </main>
  );
}

export default App;
