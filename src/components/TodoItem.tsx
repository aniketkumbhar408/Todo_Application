import {
  Button,
  Checkbox,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

type PropsType = {
  todo: TodoItemType;
  completeHandler: (id: string) => void;
  deleteHandler: (id: string) => void;
  editHandler: (id: string, newTitle: string) => void;
};

const TodoItem = ({
  todo,
  completeHandler,
  deleteHandler,
  editHandler,
}: PropsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [textVal, setTextVal] = useState<TodoItemType["title"]>(todo.title);

  const editOnClickHandler = () => {
    setEditActive((prev) => !prev)
    if(editActive === true) {
      editHandler(todo.id, textVal);
    }
  }

  return (
    <div>
      <Paper
        sx={{
          padding: "1rem",
        }}
      >
        <Stack direction={"row"} alignItems={"center"}>
          {editActive ? (
            <TextField
              value={textVal}
              onChange={(e) => setTextVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && textVal !== "") {
                  editHandler(todo.id, textVal);
                  setEditActive(false);
                };
              }}
            />
          ) : (
            <Typography marginRight={"auto"}>{todo.title}</Typography>
          )}
          <Checkbox
            checked={todo.isCompleted}
            onChange={() => completeHandler(todo.id)}
          />
          <Button onClick={editOnClickHandler}>{editActive ? "DONE" : "EDIT"}</Button>
          <Button onClick={() => deleteHandler(todo.id)}>Delete</Button>
        </Stack>
      </Paper>
    </div>
  );
};

export default TodoItem;
