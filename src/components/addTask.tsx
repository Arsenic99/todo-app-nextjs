'use client'
import { addTaskAPI } from '@/api/api';
import { FormEventHandler, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import { Modal } from './modal';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
import { Alert } from './alert';

export const AddTask = () => {
    const router = useRouter();
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>('');
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        if(newTaskValue.trim().length === 0){setShow(true);return;}
            setOpenModal(false);
            await addTaskAPI({
                id: uuidv4(),
                task: newTaskValue,
                isDone: false
            });
            setNewTaskValue('');
            setShow(false);
            router.refresh();
    }
    return (
        <div className='w-full mb-4'>
            <button className="btn btn-primary w-full" onClick={() => setOpenModal(true)}>Add new task <AiOutlinePlus /> </button>
            <Modal openModal={openModal} setOpenModal={setOpenModal} value={''} setValue={setNewTaskValue} setShow={setShow}>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center font-bold'>Add new task!</h3>
                    <div className='modal-action mb-2'>
                        <input
                            type="text"
                            placeholder="Type new task"
                            className="input input-bordered w-full max-[425px]:text-xs max-[425px]:px-2"
                            value={newTaskValue}
                            onChange={(e) => { setNewTaskValue(e.target.value) }}
                            autoFocus
                        />
                        <button type='submit' className='btn max-[425px]:text-xs max-[425px]:px-2'>Add task</button>
                    </div>
                    <Alert show={show}/>
                </form>
            </Modal>
        </div>
    )
};