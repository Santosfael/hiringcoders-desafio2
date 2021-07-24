function Modal({ children }: any) {
    return (
        <div className="container-modal">
            <div className="content-modal">
                {children}
            </div>
        </div>
    )
}

export default Modal;