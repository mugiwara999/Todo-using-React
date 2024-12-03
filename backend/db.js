const mongoose = require("mongoose")

// mongodb + srv://rahulkoyye123:xDHYewYfyCcF4qIE@cluster0.zyw27.mongodb.net/todos
//

mongoose.connect("mongodb+srv://rahulkoyye123:xDHYewYfyCcF4qIE@cluster0.zyw27.mongodb.net/todos");
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
  todo
}
