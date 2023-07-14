import { TasksInt } from "@/api/api";
import { Task } from "./task";

interface TasksProps {
    tasks: TasksInt[]
}

export const Tasks: React.FC<TasksProps> = ({tasks}) => {
    return (
        <div>
            <table className="max-[425px]:table-xs table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Task</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task)=>(
                            <Task key={task.id} id={task.id} task={task.task} isDone={task.isDone}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};