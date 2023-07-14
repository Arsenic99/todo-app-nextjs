interface ModalProps {
    openModal: boolean,
    setOpenModal: (openModal: boolean) => boolean | void,
    children: React.ReactNode,
    value?: string,
    setValue?: (value: any) => any,
    setShow?: (show: boolean) => boolean | void,
}

export const Modal: React.FC<ModalProps> = ({openModal, setOpenModal, children, value, setValue, setShow}) => {
    const handleClick = () => {
        setOpenModal(false);
        setShow && setShow(false);
        setValue && setValue(value);
    }
    return (
        <div className={`modal ${openModal && 'modal-open'}`}>
            <div className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClick}>✕</button>
                {children}
            </div>
        </div>
    )
};
