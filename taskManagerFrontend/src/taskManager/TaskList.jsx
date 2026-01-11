import { useState, useEffect } from 'react';
import { getAllTasks, deleteTaskById, updateTaskById } from './functions.jsx';
import { TaskElement } from './Task.jsx';


export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async function fetchTasks() {
            try {
                const data = await getAllTasks();
                setTasks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteTaskById(id);
            setTasks(tasks.filter(task => task._id !== id));
        } catch (err) {
            setError(err.message);
        }
    }

    const handleUpdate = async (updatedTask) => {
        try {
            const data = await updateTaskById(updatedTask);

            setTasks(tasks.map(task => task._id === data._id ? data : task));
        } catch (err) {
            setError(err.message);
        }
    }

    return (<div>
        {loading && <p>Loading tasks...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
            <div>
                <ul>
                    {tasks.map(task => (
                        <li key={task._id}>
                            <TaskElement
                                task={task}
                                onDelete={handleDelete}
                                onUpdate={handleUpdate}
                            />
                        </li>
                    ))}
                </ul>

            </div>
        )}
    </div>);
}
