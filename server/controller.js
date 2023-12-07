import * as model from "./model.js";

export const getTodos = async (req, res) => {
  const todos = await model.getAllTodos();
  console.log("Got todos");
  res.json(todos);
};

export const createTodo = async (req, res) => {
  await model.createTodo(req.body.text);
  console.log("Created todo");
  res.status(201).json({ message: "Todo created" });
};
