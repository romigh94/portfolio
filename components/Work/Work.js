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
        title: 'Contact form',
        technologies: ['HTML', 'CSS', 'Vue.js'],
        description: 'Here is a side project that I have been working on — a user friendly contact form. It makes it easy for visitors to send information and get automatic email replies.',
        images: ['/images/sell-your-photos-form.png'],
        links: 'https://sell-your-photos.vercel.app/'
    },
    {
        title: 'Chat application',
        technologies: ['HTML', 'CSS', 'Vue.js'],
        description: 'I´m currently developing this chat app. Users can sign up, pick an avatar, and engage in real-time conversations with other users. It´s all about connecting in a fun, visual way!',
        images: ['/images/chat-application.png'],
        links: 'https://chat-application-two-phi.vercel.app/'
    },
    {
        title: 'Weather app',
        technologies: ['HTML', 'CSS', 'React.js'],
        description: 'This side project combines a weather site and a search bar to find weather updates for countries or cities. It displays corresponding images based on weather conditions, creating an engaging experience.',
        images: ['/images/weather-site.png'],
        links: 'https://weather-app-gamma-inky-76.vercel.app/'
    },
    {
         title: 'Service agency',
         technologies: ['HTML', 'CSS', 'React.js', 'NodeJS', 'MongoDB', 'Husky','Git actions', 'Jest', 'Heroku'],
         description: 'This collaborative school project offers a comprehensive service search, user account management, login, signup, and category exploration. It´s a platform that simplifies service discovery',
         images: ['/images/tjanstformedlingssida.png'],
         links: 'https://github.com/romigh94/Tjanstformedlingssida-FE'
    },
    {
        title: 'E-commerce',
        technologies: ['HTML', 'CSS', 'React.js'],
        description: 'As my personal side project, I´ve created an app showcasing a group of products. It allows users to customize their shopping cart, adding or removing items effortlessly, making online shopping a breeze.',
        images: ['/images/e-commerce.png'],
        links: 'https://github.com/romigh94/e-commerce'
    }
]

  return (

    <div className="work-container" id="/Work">
        <h1 className="pb-5 text-center">Some things I've built</h1>
        {projects.map((project, index) => {
            return (
            <div className="row" key={index}>
            <div className='col-md pt-10' onClick={() => router.push(project.links)}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src={project.images} />
                 </div>
            </div>
            <div className='col-md px-5 d-flex align-items-center'>
                <div className="text-container mt-2">
                    <h4>{project.title}</h4>

                    <div className="inner-text-container">

                        <div className="d-flex flex-wrap py-5">
                            <p>{project.description}</p>
                        </div>

                        <button
                        className="primary-button"
                        onClick={() => openModal(
                            project.title,
                            project.technologies,
                            project.description,
                            project.images,
                            project.links
                        )}>
                                Case study 
                        </button>

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
            </div>
        </div>
        )
    })}
</div>
   
  )
}

export default Work
