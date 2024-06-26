const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { createTodoSchema, updateTodoSchema } = require("./types");
const { todo } = require("./db");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

// create todo
app.post("/createTodo",async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodoSchema.safeParse(createPayload);
    if (!parsedPayload.success) {
        return res.status(400).json({
            error: "error while creating the todo"
        })
    }
    const createdTodo = await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    return res.status(200).json({
        message: "todo created"
    })
})

// get todo
app.get("/todos", async (req, res) => {
    const allTodos = await todo.find({});
    return res.status(200).json(allTodos);
})

// mark completed
app.put("/mark", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodoSchema.safeParse(updatePayload);
    if (!parsedPayload.success) {
        return res.status(400).json({
            error: "error occured while updating your todo"
        })
    }
    const updatedTodo = await todo.updateOne({
        _id: req.body._id
    }, {
        completed: true
    })
    return res.status(200).json({
        message: "todo updated"
    })
})

// delete the todo
app.delete("/delete", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodoSchema.safeParse(updatePayload);
    if (!parsedPayload.success) {
        return res.status(400).json({
            error: "error occured while updating your todo"
        })
    }
    await todo.findOneAndDelete({
        _id: req.body._id
    })
    return res.status(200).json({
        message: "todo deleted"
    })
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})