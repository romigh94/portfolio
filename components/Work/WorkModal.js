import React from "react"
import ReactDOM from "react-dom"
import { useRouter } from "next/router"

const WorkModal = ({onClose, title, technologies, description, images, links}) => {
    const router = useRouter()

    const handleClose = (e) => {
        if (e.target.className.includes("backdrop")) {
            e.preventDefault()
            onClose()
        }
    }

    const modalContent = (
        <div className="backdrop fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={handleClose}>
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-800 font-kanit">{title}</h2>
                    <button 
                        onClick={() => onClose()} 
                        className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-full"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Image */}
                    <div className="mb-8">
                        <img 
                            src={images} 
                            alt={title}
                            className="w-full h-auto rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <p className="text-lg text-gray-700 leading-relaxed font-k2d">
                            {description}
                        </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 font-kanit">Technologies Used</h3>
                        <div className="flex flex-wrap gap-3">
                            {technologies.map((tech, index) => (
                                <span 
                                    key={index}
                                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium font-k2d"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => router.push(links)} 
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-k2d"
                        >
                            View Project
                        </button>
                        
                        <button 
                            onClick={() => onClose()} 
                            className="px-8 py-4 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 font-semibold rounded-full transition-all duration-300 font-k2d"
                        >
                            Close
                        </button>
                    </div>
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