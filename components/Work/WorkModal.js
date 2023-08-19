import React from "react"
import ReactDOM from "react-dom"
import { useRouter } from "next/router"

const WorkModal = ({onClose, title, technologies, description, images, links}) => {

    const router = useRouter()

    const handleClose = (e) => {
        if (e.target.className === "backdrop") {
            e.preventDefault()
            onClose()
        }
    }

    const handleClick = () => {
        console.log(links)
    }




const modalContent = (
<div className="backdrop" onClick={handleClose}>
    <div className="work-modal">

        <div role="button" onClick={() => onClose()} className="d-flex flex-row-reverse">
                X
        </div>


        <div className="text-center p-3">

        <h2>{title}</h2>

        <img src={images} />

        <p>{description}</p>

            <div className="d-flex flex-wrap pb-3 justify-content-center">
                    {technologies.map((tech, index) => {
                        return (
                        <div className="px-2 pt-3" key={index}>
                            <div className="box">{tech}</div>
                        </div>
                        )
                    })}
            </div>

            <button onClick={handleClick} className="primary-button">View project</button>
        </div>
    </div>
</div>
)

return ReactDOM.createPortal(
    modalContent,
    document.getElementById('modal-root')
)

}

export default WorkModal