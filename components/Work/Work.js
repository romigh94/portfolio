import { useRouter } from "next/router"
import { useState } from "react"
import WorkModal from './WorkModal'
import Link from "next/link"
//import Modal from 'react-modal';


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
        description: 'This is a side project that I am still working on. This app contains a contact form and content about the agency. I am developing this app with Vue.js and designing it with CSS and Sass.',
        images: ['/images/Freelance.png'],
        link: 'https://github.com/romigh94/freelance-project'
    },
    {
        title: 'E-commerce',
        technologies: ['HTML', 'CSS', 'React.js'],
        description: 'This was a side project where I developed a e-commerce app. This app contains a list of products where you can add to a shopping cart where you also can delete the products or add some more. I developed this app with Reactjs and designed it with CSS',
        images: ['/images/e-commerce-app.png'],
        link: 'https://github.com/romigh94/e-commerce-app'
    },
    {
        title: 'Weather app',
        technologies: ['HTML', 'CSS', 'React.js'],
        description: 'This was a side project where I developed a e-commerce app. This app contains a list of products where you can add to a shopping cart where you also can delete the products or add some more. I developed this app with Reactjs and designed it with CSS',
        images: ['/images/weather-app.png'],
        link: 'https://github.com/romigh94/weather-app'
    },
    {
         title: 'Service agency',
         technologies: ['HTML', 'CSS', 'React.js', 'NodeJS', 'MongoDB', 'Husky','Git actions', 'Jest', 'Heroku'],
         description: 'Hello',
         images: ['/images/Akutraket.png'],
         link: 'https://github.com/romigh94/Tjanstformedlingssida-FE'
    },
    {
        title: 'Login/Sign up form',
        technologies: ['HTML', 'React.js', 'NodeJS', 'MongoDB'],
        description: 'Hello',
        images: ['/images/Loginmodul.png'],
        link: 'https://github.com/romigh94/Loginmodul'
    }
]

  return (

    <div className="work-container" id="/Work">
        <h1 className="pb-5 text-center">Some things I've built</h1>
        {projects.map((project, index) => {
            return (
            <div className="row" key={index}>
            <div className='col-md pt-3' onClick={() => router.push(project.link)}>
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


                    <img src="/icons/black_github.png" className="github-icon" onClick={() => router.push(project.link)} />

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
 <div>
        <div className='work-container' id="/Work">
            <h1 className='pb-5 text-center'>Some things I've built</h1>

            <div className="row">
            <div className='col-md' onClick={() => router.push('https://github.com/romigh94/freelance-project')}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src="/images/Freelance.png" />
                    <div className='d-flex flex-column justify-content-center img-content'>
                    <img src="/icons/eye-icon.svg" />
                    VIEW PROJECT
                    </div>
                 </div>
            </div>
            <div className='col-md px-5 d-flex align-items-center'>
                <div className="text-container mt-2">
                    <h4>Web agency</h4>

                    <div className="d-flex flex-wrap py-4">
                        <div className="px-2 pt-2">
                            <div className="box">HTML</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">CSS</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">Sass</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">Bootstrap</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">Vue.js</div>
                        </div>
                    </div>

                    <img src="/icons/black_github.png" className="github-icon" onClick={() => router.push('https://github.com/romigh94/freelance-project')} />

                    <button onClick={() => setShowModal(true)}>
                        Read more  
                    <img src="/icons/arrow-icon.svg" className="fa fa-long-arrow-right arrow1" />
                    </button>

                    {showModal && 
                    <WorkModal onClose={() => setShowModal(false)} />
                    }
                    

                </div>
            </div>

        </div>

            <div className="row pt-3">
            <div className='col-md' onClick={() => router.push('https://github.com/romigh94/e-commerce-app')}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src="/images/e-commerce-app.png" />
                    <div className='d-flex flex-column justify-content-center img-content'>
                    <img src="/icons/eye-icon.svg" />
                    VIEW PROJECT
                    </div>
                 </div>
            </div>
            <div className='col-md px-5 d-flex align-items-center'>
                <div className="text-container mt-2">
                    <h4>E-commerce app</h4>

                    <div className="d-flex flex-wrap py-4">
                        <div className="px-2 pt-2">
                            <div className="box">HTML</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">CSS</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">React.js</div>
                        </div>
                    </div>

                    <img src="/icons/black_github.png" className="github-icon" onClick={() => router.push('https://github.com/romigh94/e-commerce-app')} />
                    <a href="#">Read more  <img src="/icons/arrow-icon.svg" class="fa fa-long-arrow-right arrow1" /></a>
                </div>
            </div>

        </div>

        <div className="row pt-3">
            <div className='col-md' onClick={() => router.push('https://github.com/romigh94/weather-app')}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src="/images/weather-app.png" />
                    <div className='d-flex flex-column justify-content-center img-content'>
                    <img src="/icons/eye-icon.svg" />
                    VIEW PROJECT
                    </div>
                 </div>
            </div>

            <div className='col-md px-5 d-flex align-items-center'>
                <div className="text-container mt-2">
                <h4>Weather app</h4>

                <div className="d-flex flex-wrap py-4">
                        <div className="px-2 pt-2">
                            <div className="box">HTML</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">CSS</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">React.js</div>
                        </div>
                </div>

                <img src="/icons/black_github.png" className="github-icon" onClick={() => router.push('https://github.com/romigh94/weather-app')} />
                    <a href="#">Read more  <img src="/icons/arrow-icon.svg" class="fa fa-long-arrow-right arrow1" /></a>
                </div>
            </div>
        </div>

        <div className='row pt-3'>
            <div className='col-md' onClick={() => router.push('https://github.com/romigh94/Tjanstformedlingssida-FE')}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src="/images/Akutraket.png" />
                    <div className='d-flex flex-column justify-content-center img-content'>
                    <img src="/icons/eye-icon.svg" />
                    VIEW PROJECT
                    </div>
                 </div>
            </div>
            <div className='col-md px-5 d-flex align-items-center'>
                <div className="text-container mt-2">
                    <h4>
                        Service agency
                    </h4>
                    <div className="d-flex flex-wrap py-4">
                        <div className="px-2 pt-2">
                            <div className="box">HTML</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">CSS</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">React.js</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">NodeJS</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">MongoDB</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">Husky</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">Git actions</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">Jest</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">Heroku</div>
                        </div>
                    </div>
                    <img src="/icons/black_github.png" className="github-icon" onClick={() => router.push('https://github.com/romigh94/Tjanstformedlingssida-FE')} />
                    <a href="#">Read more  <img src="/icons/arrow-icon.svg" class="fa fa-long-arrow-right arrow1" /></a>
                </div>
            </div>
        </div>

        <div className="row pt-3">
        <div className='col-md' onClick={() => router.push('https://github.com/romigh94/Loginmodul')}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src="/images/Loginmodul.png" />
                    <div className='d-flex flex-column justify-content-center img-content'>
                    <img src="/icons/eye-icon.svg" />
                    VIEW PROJECT
                    </div>
                </div>
            </div>

            <div className="col-md px-5 d-flex align-items-center">
                <div className="text-container mt-2">
                <h4>Login/Signup form</h4>
                    <div className="d-flex flex-wrap py-4">
                        <div className="px-2 pt-2">
                            <div className="box">HTML</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">React.js</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">NodeJS</div>
                        </div>
                        <div className="px-2 pt-2">
                            <div className="box">MongoDB</div>
                        </div>
                    </div>


                    <img src="/icons/black_github.png" className="github-icon" onClick={() => router.push('https://github.com/romigh94/Loginmodul')} />
                    <a href="#">Read more  <img src="/icons/arrow-icon.svg" class="fa fa-long-arrow-right arrow1" /></a>
                </div>
            </div>
        </div>
    </div>
</div>
*/


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