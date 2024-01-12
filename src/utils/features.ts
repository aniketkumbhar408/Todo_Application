export const saveTodos = (todos: TodoItemType[]): void => {
    localStorage.setItem("mytodos", JSON.stringify(todos));
};

export const getTodos = (): TodoItemType[] => {
    const todos = localStorage.getItem('todos');

    return todos ? JSON.parse(todos) : [];
}