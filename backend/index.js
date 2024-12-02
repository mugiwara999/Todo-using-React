import { createTodo, updateTodo } from "./types";
const express = require("express");
const app = express();

app.use(express.json())


//body {
//title: string;
//description: string;
//}
app.post("/todo", (req, res) => {

  const todo = req.todo;
  const parsedTodo = createTodo.safeParse(todo);
  if (!parsedTodo.success) {
    res.status(411).json({
      msg: "you sent the wrong inputs",
    })

    return;
  }


})

app.get("/todos", (req, res) => {

})

app.put("/done", (req, res) => {

  const id = req.id;
  const parsedId = updateTodo.safeParse(id);
  if (!parsedId.success) {
    res.status(411).json({
      msg: "select the correct one"
    })
  }
})

app.listen(3000);
