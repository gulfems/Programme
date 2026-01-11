import createTask from './functions.jsx';

export function TaskCreateForm({ onTaskCreated }) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newTask = {
            title: formData.get('title'),
            description: formData.get('description'),
            completed: false
        };

        try {
            const createdTask = await createTask(newTask);
            onTaskCreated(createdTask);
            event.target.reset();
        } catch (err) {
            console.error('Error creating task:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Title:
                    <input type="text" name="title" required />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <textarea name="description" required></textarea>
                </label>
            </div>
            <button type="submit">Create Task</button>
        </form>
    );
}

import { updateTaskById } from './functions.jsx';

export function TaskUpdateForm({ task, onTaskUpdated }) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const updatedTask = {
            ...task,
            title: formData.get('title'),
            description: formData.get('description'),
            completed: formData.get('completed') === 'on'
        };

        try {
            const result = await updateTaskById(task._id, updatedTask);
            onTaskUpdated(result);
        } catch (err) {
            console.error('Error updating task:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Title:
                    <input type="text" name="title" defaultValue={task.title} required />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <textarea name="description" defaultValue={task.description} required></textarea>
                </label>
            </div>
            <div>
                <label>
                    Completed:
                    <input type="checkbox" name="completed" defaultChecked={task.completed} />
                </label>
            </div>
            <button type="submit">Update Task</button>
        </form>
    );
}           