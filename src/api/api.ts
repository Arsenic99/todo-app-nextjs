const baseURL = 'https://todo-kwem.onrender.com'

export interface TasksInt{
    id: string,
    task: string,
    isDone: boolean
}

export const getTasksAPI = async (): Promise<TasksInt[]> => {
    const responce = await fetch (`${baseURL}/tasks`, {cache: 'no-store'});
    const res = await responce.json();
    return res;
}

export const addTaskAPI = async (task:TasksInt): Promise<TasksInt> => {
    const responce = await fetch (`${baseURL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    const newTask = await responce.json();
    return newTask;
}

export const editTaskAPI = async (task:TasksInt): Promise<TasksInt> => {
    const responce = await fetch (`${baseURL}/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task),
        cache: 'no-store'
    });
    const editTask = await responce.json();
    return editTask;
}

export const deleteTaskAPI = async (id:string) => {
    await fetch (`${baseURL}/tasks/${id}`,{
        method: 'DELETE'
    })
}