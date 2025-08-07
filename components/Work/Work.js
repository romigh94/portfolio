import { useRouter } from "next/router"
import { useState } from "react"
import WorkModal from './WorkModal'

const Work = () => {
    const router = useRouter()

    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState({
        title: '',
        technologies: [],
        description: '',
        images: [],
        links: ''
    })

    const openModal = (title, technologies, description, images, links) => {
        setModalContent({
            title,
            technologies,
            description,
            images,
            links
        })
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const projects = [

                {
            title: 'Biljett.se',
            technologies: ['HTML', 'CSS', 'Tailwind', 'Vue.js', 'Vite', 'NodeJS', 'MongoDB'],
            description: "A comprehensive online platform for managing ticket sales and event information. It allows users to create, manage, and sell tickets for various events, providing a seamless experience for both organizers and attendees.",
            images: ['/images/biljett-se.png'],
            links: 'https://biljett-se.vercel.app'
        },

        {
            title: 'Mindful Learning',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'Vue.js', 'Vite', 'NodeJS', 'MongoDB'],
            description: "A comprehensive online platform used by both school staff and students to manage core academic processes—such as grade submissions, course information, scheduling, and communication—all in one centralized place.",
            images: ['/images/mindful-learning.png'],
            links: 'https://mindfullearning.se'
        },
        {
            title: 'The Indian Brasserie',
            technologies: ['Wordpress', 'HTML', 'CSS'],
            description: 'A website I created for a restaurant called The Indian Brasserie. This website contains a home page, about page and menu pages',
            images: ['/images/theindianbrasserie.png'],
            links: 'https://theindianbrasserie.se'
        },
        {
            title: 'Sigges husman',
            technologies: ['Wordpress', 'HTML', 'CSS'],
            description: "A website I created for a restaurant called Sigges husman. This website contains a home page, menu page and a contact form page.",
            images: ['/images/sigges-husman.png'],
            links: 'https://siggeshusman.se'
        },
        {
            title: 'The Lounge Bar',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'Vue.js', 'PHP', 'MySQL'],
            description: 'This is a website that I created for a restaurant/bar called The Lounge Bar. This website contains a home page, menu page, and a contact form page.',
            images: ['/images/lounge-bar.png'],
            links: 'https://theloungebar.se'
        },
        {
            title: 'On going project',
            technologies: ['HTML', 'CSS', 'Tailwind', 'Vue.js'],
            description: "This is an ongoing project",
            images: ['/images/cyber-creative.png'],
            links: "https://cyber-creative.vercel.app/"
        },
        {
            title: 'For a Restaurant/bar',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'Vue.js', 'NodeJS', 'Sendgrid'],
            description: "This is a website that I've created for a restaurant/bar - The Lobby. This website contains a home page, menu page and a contact form page.",
            images: ['/images/thelobby.png'],
            links: "https://thelobbysthlm.nu"
        },

        {
            title: 'Chat application',
            technologies: ['HTML', 'CSS', 'Vue.js'],
            description: 'I´m currently developing this chat app. Users can sign up, pick an avatar, and engage in real-time conversations with other users. It´s all about connecting in a fun, visual way!',
            images: ['/images/chat-application.png'],
            links: 'https://chat-application-two-phi.vercel.app/'
        },
        {
            title: 'Weather site',
            technologies: ['HTML', 'CSS', 'React.js'],
            description: 'This side project combines a weather site and a search bar to find weather updates for countries or cities. It displays corresponding images based on weather conditions, creating an engaging experience.',
            images: ['/images/weather-site.png'],
            links: 'https://weather-app-gamma-inky-76.vercel.app/'
        },

    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4" id="/Work">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6 font-kanit">
                        Some things I've built
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-k2d">
                        Here are some of my recent projects. Each one represents a unique challenge and learning experience.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className={`bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border border-gray-100`}>
                            <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                {/* Project Image */}
                                <div className={`relative group cursor-pointer ${index % 2 === 1 ? 'lg:col-start-2' : ''}`} onClick={() => router.push(project.links)}>
                                    <div className="relative overflow-hidden">
                                        <img 
                                            src={project.images} 
                                            alt={project.title}
                                            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-sm font-medium">View Project</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                    <div className="mb-6">
                                        <h3 className="text-3xl font-bold text-gray-800 mb-4 font-kanit">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-lg text-gray-600 leading-relaxed mb-6 font-k2d">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Technologies */}
                                    <div className="mb-8">
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 font-kanit">
                                            Technologies Used
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span 
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium font-k2d"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-k2d flex items-center justify-center"
                                            onClick={() => openModal(
                                                project.title,
                                                project.technologies,
                                                project.description,
                                                project.images,
                                                project.links
                                            )}
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            Case Study
                                        </button>
                                        
                                        <button
                                            className="px-8 py-3 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 font-semibold rounded-full transition-all duration-300 font-k2d flex items-center justify-center"
                                            onClick={() => router.push(project.links)}
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20">
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 font-kanit">
                            Interested in working together?
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 font-k2d">
                            Let's discuss your next project and see how we can bring your ideas to life.
                        </p>
                        <button 
                            onClick={() => router.push('#/Contact')}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-k2d"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>

                {showModal && 
                    <WorkModal 
                        onClose={closeModal} 
                        title={modalContent.title}
                        technologies={modalContent.technologies}
                        description={modalContent.description}
                        images={modalContent.images}
                        links={modalContent.links}
                    />
                }
            </div>
        </div>
    )
}

export default Work
