
//Fetch all tasks from the backend 

const API_URL = 'http://localhost:4001/tasks';

export async function getAllTasks() {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Failed to list all tasks");
    } else {
        return data;
    }
}

//Fetch a single task by ID from the backend
export async function getTaskById(id) {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Failed to get the requested task");
    } else {
        return data;
    }
}

//Create a new task in the backend
export async function createTask(task) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Failed to create the task");
    } else {
        return data;
    }
}

//Update an existing task in the backend
export async function updateTaskById(id, updatedTask) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Failed to update the task you have chosen");
    } else {
        return data;
    }
}
//Delete a task by ID from the backend
export async function deleteTaskById(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Failed to delete the task you have chosen");
    }
}

