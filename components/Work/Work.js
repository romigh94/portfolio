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
        title: 'Web agency',
        technologies: ['HTML', 'CSS', 'Sass', 'Bootstrap', 'Vue.js'],
        description: 'This is a side project that I am still working on. This app contains a contact form and content about the agency.',
        images: ['/images/Freelance.png'],
        links: 'https://github.com/romigh94/freelance-project'
    },
    {
        title: 'E-commerce app',
        technologies: ['HTML', 'CSS', 'React.js'],
        description: 'This was a side project. This app contains a list of products. You can add them to a shopping cart where you also can delete the products or add some more.',
        images: ['/images/e-commerce-app.png'],
        links: 'https://github.com/romigh94/e-commerce-app'
    },
    {
        title: 'Weather app',
        technologies: ['HTML', 'CSS', 'React.js'],
        description: 'Hello',
        images: ['/images/weather-app.png'],
        links: 'https://github.com/romigh94/weather-app'
    },
    {
         title: 'Service agency',
         technologies: ['HTML', 'CSS', 'React.js', 'NodeJS', 'MongoDB', 'Husky','Git actions', 'Jest', 'Heroku'],
         description: 'Hello',
         images: ['/images/Akutraket.png'],
         links: 'https://github.com/romigh94/Tjanstformedlingssida-FE'
    },
    {
        title: 'Login/Sign up form',
        technologies: ['HTML', 'React.js', 'NodeJS', 'MongoDB'],
        description: 'Hello',
        images: ['/images/Loginmodul.png'],
        links: 'https://github.com/romigh94/Loginmodul'
    }
]

  return (

    <div className="work-container" id="/Work">
        <h1 className="pb-5 text-center">Some things I've built</h1>
        {projects.map((project, index) => {
            return (
            <div className="row" key={index}>
            <div className='col-md pt-3' onClick={() => router.push(project.links)}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src={project.images} />
                    <div className='d-flex flex-column justify-content-center img-content'>
                    <img src="/icons/eye-icon.svg" />
                    VIEW PROJECT
                    </div>
                 </div>
            </div>
            <div className='col-md px-5 d-flex align-items-center'>
                <div className="text-container mt-2">
                    <h4>{project.title}</h4>

                    <div className="d-flex flex-wrap py-4">
                    {project.technologies.map((tech, index) => {
                        return (
                        <div className="px-2 pt-3" key={index}>
                            <div className="box">{tech}</div>
                        </div>
                        )
                    })}
                    </div>


                    <img src="/icons/black_github.png" className="github-icon" onClick={() => router.push(project.links)} />

                    <a href='#' onClick={() => openModal(
                        project.title,
                        project.technologies,
                        project.description,
                        project.images
                    )}>
                            Read more  
                        <img src="/icons/arrow-icon.svg" className="fa fa-long-arrow-right arrow1" />
                    </a>

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
        )
    })}
</div>
   
  )
}

export default Work



/*

                    <p>This is a side project that I'm still working on. 
                        This app contains a contact form and content about the agency. 
                        I'm developing this app with Vue.js and designing it with CSS and Sass. 
                    </p>
                    <p>This was a side project where I developed a e-commerce app. 
                    This app contains a list of products where you can add them to a 
                    shopping cart where you can delete the products or add some more.
                    I developed this app with Reactjs and designed it with CSS</p>
                <p>This was a side project where I developed a Weather app. This app contains a search bar where you can search for different cities and countries.
                   I developed this with a API and a filter function with help of Reactjs. I designed the app with CSS.  
                </p>
                    <p>This was a group project at my school. We developed a service agency where you could search for different
                        services, login to your own account, sign up, look for different categories etc. We created our own database in MongoDB, 
                        and developed this site with help of: Reactjs, CSS and Nodejs. We used Git actions, deployed it to Heroku and tested different functions it with Jest

                    </p>
<p>
This project was a individual project at my school. 
I developed a Login/Sign up form containing API, validation and authorization/authentication.
I created my own database in MongoDB and used Reactjs and Nodejs to develop this form.
</p>
*/