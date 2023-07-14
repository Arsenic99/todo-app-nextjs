'use client'
import { deleteTaskAPI, editTaskAPI } from '@/api/api';
import { useRouter } from 'next/navigation';
import { FormEventHandler, useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { Alert } from './alert';
import { Modal } from './modal';

interface TaskProps {
    id: string,
    task: string,
    isDone: boolean
}

export const Task: React.FC<TaskProps> = ({ id, task, isDone }) => {
    const router = useRouter();
    const [taskValue, setTaskValue] = useState<string>(task);
    const [done, setDone] = useState<boolean>(isDone);
    const [show, setShow] = useState<boolean>(false);
    const [openEditModal, setOpenEditModal] = useState<boolean>(false);
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    const handleDone = async () => {
        await editTaskAPI({
            id: id,
            task: task,
            isDone: !done
        });
        setDone(!done)
        router.refresh();
    }
    const handleEditSubmit: FormEventHandler<HTMLElement> = async (e) => {
        e.preventDefault();
        if(taskValue.trim().length === 0){setShow(true);return;}
        setOpenEditModal(false);
        await editTaskAPI({
            id: id,
            task: taskValue,
            isDone: isDone
        });
        router.refresh();
    }
    const handleDeleteSubmit: FormEventHandler<HTMLElement> = async (e) => {
        e.preventDefault();
        setOpenDeleteModal(false)
        await deleteTaskAPI(id);
        router.refresh();
    }
    return (
        <tr>
            <td onClick={handleDone}>
                <input type="checkbox" className="checkbox" checked={done} onChange={handleDone}/>
            </td>
            <td className={`w-full break-words max-w-[146px] ${done && 'line-through'}`} onClick={handleDone}>
                {task}
            </td>
            <td className='flex items-center gap-5'>
                <AiOutlineEdit size={25} color={'green'} cursor={'pointer'} onClick={() => setOpenEditModal(true)} />
                <Modal openModal={openEditModal} setOpenModal={setOpenEditModal} value={task} setValue={setTaskValue} setShow={setShow}>
                    <form onSubmit={handleEditSubmit}>
                        <h3 className='text-center font-bold'>Edit task!</h3>
                        <div className='modal-action mb-2'>
                            <input
                                type="text"
                                placeholder="Type new task"
                                className="input input-bordered w-full max-[425px]:text-xs max-[425px]:px-2"
                                value={taskValue}
                                onChange={(e) => { setTaskValue(e.target.value) }}
                            />
                            <button type='submit' className='btn max-[425px]:text-xs max-[425px]:px-2'>Edit task</button>
                        </div>
                        <Alert show={show}/>
                    </form>
                </Modal>
                <AiOutlineDelete size={25} color={'red'} cursor={'pointer'} onClick={() => setOpenDeleteModal(true)} />
                <Modal openModal={openDeleteModal} setOpenModal={setOpenDeleteModal}>
                    <form onSubmit={handleDeleteSubmit}>
                        <h3 className='text-center font-bold'>Delete task!</h3>
                        <div className='flex justify-between items-center'>
                            <p>Are you sure, you want to delete task?</p>
                            <button type='submit' className='btn'>Yes</button>
                        </div>

                    </form>
                </Modal>
            </td>
        </tr>
    )
};