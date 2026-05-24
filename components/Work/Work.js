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
    title: 'Ticket System',
    technologies: ['HTML', 'CSS', 'Vanilla JavaScript', 'MongoDB', 'NodeJS'],
    description: 'A full-stack ticket management platform built for event organizers and attendees. Users can browse upcoming events, purchase tickets securely, and receive digital confirmations. The system includes an advanced admin dashboard where organizers can create and manage events, monitor ticket sales in real time, update schedules, and scan tickets directly at the entrance for smooth event check-ins. The project focuses on usability, performance, and scalable backend functionality using MongoDB and Node.js.',
    images: ['/images/exoplanet.png'],
    links: 'https://exoplanet.se'
},
{
    title: 'Website for a Cleaning Company',
    technologies: ['Wordpress', 'PHP'],
    description: 'A professional business website developed for Renfix AB during my time at Webbfabriken. The website was designed to strengthen the company’s online presence and make it easier for customers to explore services and request quotes. It features a modern homepage, detailed service sections, an interactive price calculator for instant estimates, and a contact form that allows visitors to communicate directly with the company. The focus was on responsive design, accessibility, and creating a clean user experience tailored for both desktop and mobile users.',
    links: 'https://renfixab.se',
},
{
    title: 'Biljett.se',
    technologies: ['HTML', 'CSS', 'Tailwind', 'Vue.js', 'Vite', 'NodeJS', 'MongoDB'],
    description: 'An event and ticketing platform developed to simplify the process of creating, managing, and selling tickets online. Organizers can publish events, track attendance, and manage ticket inventory, while users can easily browse events and complete purchases through a modern and responsive interface. Built with Vue.js and Tailwind CSS on the frontend and powered by a Node.js and MongoDB backend, the platform was designed with scalability, performance, and user experience in mind.',
    images: ['/images/biljett-se.png'],
    links: 'https://biljett-se.vercel.app'
},
{
    title: 'Mindful Learning',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Vue.js', 'Vite', 'NodeJS', 'MongoDB'],
    description: 'A complete educational platform designed for schools, teachers, and students to manage academic workflows in one centralized system. The platform includes features such as grade management, course administration, scheduling, announcements, and communication tools between staff and students. The project focused on creating a clean and intuitive user interface while building scalable backend functionality capable of handling multiple user roles and large amounts of educational data.',
    images: ['/images/mindful-learning.png'],
    links: 'https://mindfullearning.se'
},
{
    title: 'The Indian Brasserie',
    technologies: ['Wordpress', 'HTML', 'CSS'],
    description: 'A modern restaurant website created for The Indian Brasserie to showcase the restaurant’s brand, menu, and atmosphere online. The site includes a visually engaging homepage, an about section introducing the restaurant, and multiple menu pages that present dishes in a clear and attractive way. The design was built to provide a smooth browsing experience across all devices while reflecting the restaurant’s identity and style.',
    images: ['/images/theindianbrasserie.png'],
    links: 'https://theindianbrasserie.se'
},
{
    title: 'Sigges Husman',
    technologies: ['Wordpress', 'HTML', 'CSS'],
    description: 'A restaurant website built for Sigges Husman with a focus on simplicity, accessibility, and easy navigation. The website features a welcoming homepage, a structured menu section, and a contact page where visitors can quickly get in touch with the restaurant. The project emphasized responsive design and clean layouts to ensure a user-friendly experience on both desktop and mobile devices.',
    images: ['/images/sigges-husman.png'],
    links: 'https://siggeshusman.se'
},
{
    title: 'The Lounge Bar',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Vue.js', 'PHP', 'MySQL'],
    description: 'A responsive and modern website developed for The Lounge Bar to promote the venue and provide visitors with essential information. The site includes a stylish homepage, food and drink menus, and a contact form connected to a backend system using PHP and MySQL. The goal of the project was to create an engaging digital experience that matched the atmosphere of the restaurant and bar while ensuring fast performance and easy content management.',
    images: ['/images/lounge-bar.png'],
    links: 'https://theloungebar.se'
},
{
    title: 'Ongoing Project',
    technologies: ['HTML', 'CSS', 'Tailwind', 'Vue.js'],
    description: 'An ongoing creative web project currently under active development. The project focuses on building a modern and visually appealing digital experience using Vue.js and Tailwind CSS. Current work includes improving UI/UX design, implementing responsive layouts, and developing reusable frontend components with a strong focus on performance and scalability.',
    images: ['/images/cyber-creative.png'],
    links: 'https://cyber-creative.vercel.app/'
},
{
    title: 'The Lobby',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Vue.js', 'NodeJS', 'Sendgrid'],
    description: 'A custom website created for The Lobby restaurant and bar, featuring a modern design and responsive user interface. The site includes a homepage, menu pages, and a fully functional contact form integrated with SendGrid for email handling. The project focused on creating a seamless browsing experience while providing the business with a professional online presence that reflects the venue’s atmosphere and branding.',
    images: ['/images/thelobby.png'],
    links: 'https://thelobbysthlm.nu'
},
{
    title: 'Chat Application',
    technologies: ['HTML', 'CSS', 'Vue.js'],
    description: 'A real-time chat application currently under development where users can create accounts, customize profiles with avatars, and communicate instantly with other users. The project focuses on building an interactive and engaging social experience with a modern interface, smooth real-time updates, and scalable frontend architecture using Vue.js.',
    images: ['/images/chat-application.png'],
    links: 'https://chat-application-two-phi.vercel.app/'
},
{
    title: 'Weather Site',
    technologies: ['HTML', 'CSS', 'React.js'],
    description: 'A weather application built with React.js that allows users to search for cities or countries and instantly view current weather conditions. The application dynamically displays images and visuals based on the weather, creating a more immersive user experience. The project combines API integration, responsive design, and interactive frontend functionality to deliver accurate weather information in an engaging format.',
    images: ['/images/weather-site.png'],
    links: 'https://weather-app-gamma-inky-76.vercel.app/'
}

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
                        <div key={index} className={`bg-white rounded-3xl shadow-xl overflow-hidden  duration-500  border border-gray-100`}>
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
                                                    className="px-3 py-1 bg-stone-300 text-black rounded-full text-sm font-medium font-k2d"
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
