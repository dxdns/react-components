import "./style.css"

type Props = React.PropsWithChildren & {
    title: string
    open: boolean
    onClose: () => void
}

export default function Modal({ title, children, open, onClose }: Props) {
    return (
        <div id="modal-container" className={`${open && "show"}`}>
            <div className="modal-background">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>{title}</h2>
                        <span className="btn-close" onClick={onClose}>&times;</span>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    {/* <div className="modal-footer">
                        <h3>Modal Footer</h3>
                    </div> */}
                </div>
            </div>
        </div>
    )
}