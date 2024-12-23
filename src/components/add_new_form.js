import { useState } from "react";

export default function AddTodoForm(props) {
  const { setTodos } = props;
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.random(),
        text: taskName,
        priority,
        dueDate,
        isCompleted: false,
      },
    ]);

    setTaskName("");
    setPriority("Low");
    setDueDate("");
  };

  return (
    <div className="mt-4">
      <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="taskName" className="form-label">
            Task Name
          </label>
          <input
            type="text"
            id="taskName"
            className="form-control"
            placeholder="Enter task name"
            required
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="priority" className="form-label">
            Priority
          </label>
          <select
            id="priority"
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            className="form-control"
            required
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-sm rounded">
          Add Task
        </button>
      </form>
    </div>
  );
}
