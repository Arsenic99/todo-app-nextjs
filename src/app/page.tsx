import { getTasksAPI } from "@/api/api";
import { AddTask } from "@/components/addTask";
import { Tasks } from "@/components/tasks";

export default async function Home() {
  const tasks = await getTasksAPI();
  return (
    <main className="max-w-2xl mx-auto px-2">
      <h1 className="text-center m-4">Todo app</h1>
      <AddTask />
      {tasks.length>0 && <Tasks tasks={tasks}/>}
    </main>
  )
}
