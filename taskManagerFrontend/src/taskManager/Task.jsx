const TaskElement = ({ task, onUpdate, onDelete }) => {
    return (
        <div className="task-element">
            <span>{task.title}</span>
            <span>{task.description}</span>
            <span>{task.progress}</span>
            <span>{new Date(task.dueDate).toLocaleDateString()}</span>
            <button onClick={() => onUpdate(task)}>Update</button>
            <button onClick={() => onDelete(task._id)}>Delete</button>
        </div>
    )
}

export { TaskElement };

