import { createTodo, updateTodo } from "./types.js";
import { todo } from "./db.js"
import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json())
app.use(cors())


//body {
//title: string;
//description: string;
//}

app.post("/todo", async (req, res) => {

  // console.log(req)
  const createPayLoad = req.body;
  console.log(createPayLoad)
  const parsedPayLoad = createTodo.safeParse(createPayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "you sent the wrong inputs",
    })

    return;
  }

  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false
  })

  res.json({
    msg: "Todo created"
  })



})


app.get("/", (req, res) => {
  res.send("fuck you")
})


app.get("/todos", async (req, res) => {

  const todos = await todo.find();
  res.json(todos);

})


app.put("/done", async (req, res) => {

  const updatePayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "select the correct one"
    })
  }

  await todo.update({
    _id: req.body.id
  }, {
    completed: true
  })

  res.json({
    msg: "Todo marked as done"
  })
})

app.listen(3000);

