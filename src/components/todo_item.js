import React, { useState } from "react";

export default function TodoItem(props) {
  const {
    text,
    priority,
    dueDate,
    isCompleted,
    id,
    onDelete,
    onCheck,
    onEdit,
  } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const [newPriority, setNewPriority] = useState(priority);
  const [newDueDate, setNewDueDate] = useState(dueDate);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(id, { text: newText, priority: newPriority, dueDate: newDueDate });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewText(text);
    setNewPriority(priority);
    setNewDueDate(dueDate);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <div className="d-flex flex-column w-100">
          <div className="mb-2">
            <label className="form-label">Task Name</label>
            <input
              type="text"
              className="form-control"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Priority</label>
            <select
              className="form-select"
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="mb-2">
            <label className="form-label">Due Date</label>
            <input
              type="date"
              className="form-control"
              value={newDueDate}
              onChange={(e) => setNewDueDate(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-sm btn-success" onClick={handleSave}>
              Save <i className="bi bi-check-circle"></i>
            </button>
            <div className="px-3"></div>
            <button className="btn btn-sm btn-secondary" onClick={handleCancel}>
              Cancel <i className="bi bi-x-circle"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-between w-100">
          <div>
            <button
              className={`me-2 btn btn-sm ${
                isCompleted ? "btn-success" : "btn-light"
              }`}
              onClick={() => onCheck(id)}
            >
              {isCompleted ? (
                <i className="bi bi-check-square"></i>
              ) : (
                <i className="bi bi-square"></i>
              )}
            </button>
            {isCompleted ? (
              <span className="text-decoration-line-through">
                {newText} - (Priority: {newPriority}) (Due Date: {newDueDate})
              </span>
            ) : (
              <span>
                {newText} -(Priority: {newPriority}) (Due Date: {newDueDate})
              </span>
            )}
          </div>
        </div>
      )}

      <div className="d-flex align-items-center">
        {!isEditing && (
          <button className="btn btn-sm btn-primary me-2" onClick={handleEdit}>
            <i className="bi bi-pen-fill"></i>
          </button>
        )}
        {isEditing ? (
          <></>
        ) : (
          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(id)}
          >
            <i className="bi bi-trash"></i>
          </button>
        )}
      </div>
    </li>
  );
}
