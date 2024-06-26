import { useState } from "react"

export function CreateTodo({createTheTodo})  {
    const [title, setTitle] = useState("");
    const  [description, setDescription] = useState("");

    return  (
        <div className="flex justify-center items-center w-full p-10">
            <div className="border-2 w-full p-4 rounded-l">
                <label className="text-medium font-semibold p-2 block ">Title</label>
                <input className="border-2 rounded p-1" onChange={(e) => {setTitle(e.target.value)}} value={title} type="text" placeholder="title"></input>
                <br></br>
                <label className="text-medium font-semibold p-2 block">Description</label>
                <input className="border-2 rounded p-1" onChange={(e) => {setDescription(e.target.value)}} value={description} type="text" placeholder="description"></input>
                <br></br>
                <button className="border-2 bg-blue-500 p-2 rounded-md my-4 " onClick={() => {
                    createTheTodo(title, description);
                    setTitle("");
                    setDescription("");
                }}>Add Todo</button>
            </div>
        </div>
    )
}