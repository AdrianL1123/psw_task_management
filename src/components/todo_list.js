import TodoItem from "./todo_item";

export default function TodoList(props) {
  const { todos, setTodos } = props;

  return (
    <ul className="list-group">
      {todos.length === 0 ? (
        <li className="list-group-item">No tasks available</li>
      ) : (
        todos.map((todo) => {
          const { text, priority, dueDate, id, isCompleted } = todo;
          return (
            <TodoItem
              key={id}
              id={id}
              text={text}
              priority={priority}
              dueDate={dueDate}
              isCompleted={isCompleted}
              onCheck={(id) => {
                const updatedTodos = todos.map((t) =>
                  t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
                );
                setTodos(updatedTodos);
              }}
              onDelete={(id) => {
                setTodos(todos.filter((t) => t.id !== id));
              }}
              onEdit={(id, updatedTask) => {
                const updatedTodos = todos.map((t) =>
                  t.id === id ? { ...t, ...updatedTask } : t
                );
                setTodos(updatedTodos);
              }}
            />
          );
        })
      )}
    </ul>
  );
}
