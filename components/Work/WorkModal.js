import React from "react"
import ReactDOM from "react-dom"

const WorkModal = ({onClose, title, technologies, description, images, links}) => {

    const handleClose = (e) => {
        if (e.target.className === "backdrop") {
            e.preventDefault()
            onClose()
        }
    }


const modalContent = (
<div className="backdrop" onClick={handleClose}>
    <div className="work-modal text-center">

        <a href onClick={onClose}>
        CLOSE
        </a> 

        <h2>{title}</h2>

        <img src={images} />

        <p>{description}</p>

    </div>
</div>
)

return ReactDOM.createPortal(
    modalContent,
    document.getElementById('modal-root')
)

}

export default WorkModal