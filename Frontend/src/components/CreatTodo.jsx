import { useState } from "react";

export function CreatTodo() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return <div>
    <input type="text" placeholder="title" style={{
      padding: 10,
      margin: 10
    }}
      onChange={(e) => {
        const value = e.target.value;
        setTitle(value)
      }} ></input> <br />



    <input type="text" placeholder="description" style={{
      padding: 10,
      margin: 10
    }} onChange={(e) => {
      setDescription(e.target.value)
    }}></input> <br />

        
        <button onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                description: description
              })
      }).then(async (res) => {
        const json = await res.json();
        alert("Todo added")
      })
    }} >Add a todo</button>
  </div>
}
