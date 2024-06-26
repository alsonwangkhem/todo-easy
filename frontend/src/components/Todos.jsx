

export function Todos({todos, markCompleted, deleteTodo}) {
    return <div>
       {todos.map(function(todo, index) {
               return <div className="flex justify-between border-2 rounded-lg m-2 p-2" key={index}>
                   <div>
                       <div className="text-2xl font-bold">{todo.title}</div>
                       <div>{todo.description}</div>
                   </div>
                   <div>
                       <button className="border-2 rounded-lg p-2 bg-green-400 mx-2" onClick={() => {
                           markCompleted(todo._id)
                       }}>{todo.completed? "completed" : "mark as completed"}</button>
                       <button className="border-2 rounded-lg p-2 bg-red-400 mx-2" onClick={() => {
                        console.log("deletecalled");
                        deleteTodo(todo._id);
                       }}>Delete</button>
                   </div>
               </div>
           })}
    </div>
}