import { useRouter } from "next/router"

const Work = () => {


const router = useRouter()

  return (
    <div>
        <div className='work-container' id="/Work">
            <h1 className='pb-5 text-center'>Some things I've built</h1>

            <div className="row">
            <div className='col-md' onClick={() => router.push('https://github.com/romigh94/freelance-project')}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src="/images/Freelance.png" />
                    <div className='d-flex justify-content-center img-content'>
                    <img src="/icons/github.png" />
                    </div>
                 </div>
            </div>
            <div className='col-md px-5 d-flex align-items-center'>
                <div className="text-container">
                    <h2>Web agency</h2>
                    <p>This is a side project that I'm still working on. 
                        This app contains a contact form and content about the agency. 
                        I'm developing this app with Vue.js and designing it with CSS and Sass. 
                    </p>
                    <img src="/icons/black_github.png" onClick={() => router.push('https://github.com/romigh94/freelance-project')} />
                </div>
            </div>

        </div>

            <div className="row">
            <div className='col-md' onClick={() => router.push('https://github.com/romigh94/e-commerce-app')}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src="/images/e-commerce-app.png" />
                    <div className='d-flex justify-content-center img-content'>
                    <img src="/icons/github.png" />
                    </div>
                 </div>
            </div>
            <div className='col-md px-5 d-flex align-items-center'>
                <div className="text-container">
                    <h2>E-commerce app</h2>
                    <p>This was a side project where I developed a e-commerce app. 
                    This app contains a list of products where you can add them to a 
                    shopping cart where you can delete the products or add some more.
                    I developed this app with Reactjs and designed it with CSS</p>
                    <img src="/icons/black_github.png" onClick={() => router.push('https://github.com/romigh94/e-commerce-app')} />
                </div>
            </div>

        </div>

        <div className="row">
            <div className='col-md' onClick={() => router.push('https://github.com/romigh94/weather-app')}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src="/images/weather-app.png" />
                    <div className='d-flex justify-content-center img-content'>
                    <img src="/icons/github.png" />
                    </div>
                 </div>
            </div>

            <div className='col-md px-5 d-flex align-items-center'>
                <div className="text-container">
                <h2>Weather app</h2>
                <p>This was a side project where I developed a Weather app. This app contains a search bar where you can search for different cities and countries.
                   I developed this with a API and a filter function with help of Reactjs. I designed the app with CSS.  
                </p>
                <img src="/icons/black_github.png" onClick={() => router.push('https://github.com/romigh94/weather-app')} />
                </div>
            </div>
        </div>

        <div className='row pt-3'>
            <div className='col-md' onClick={() => router.push('https://github.com/romigh94/Tjanstformedlingssida-FE')}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src="/images/Akutraket.png" />
                    <div className='d-flex justify-content-center img-content'>
                        <img src="/icons/github.png" />
                    </div>
                 </div>
            </div>
            <div className='col-md px-5 d-flex align-items-center'>
                <div className="text-container">
                    <h2>
                        Service agency
                    </h2>
                    <p>This was a group project at my school. We developed a service agency where you could search for different
                        services, login to your own account, sign up, look for different categories etc. We created our own database in MongoDB, 
                        and developed this site with help of: Reactjs, CSS and Nodejs. We used Git actions, deployed it to Heroku and tested different functions it with Jest

                    </p>
                    <img src="/icons/black_github.png" onClick={() => router.push('https://github.com/romigh94/Tjanstformedlingssida-FE')} />
                </div>
            </div>
        </div>

        <div className="row pt-3">
        <div className='col-md' onClick={() => router.push('https://github.com/romigh94/Loginmodul')}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src="/images/Loginmodul.png" />
                    <div className='d-flex justify-content-center img-content'>
                        <img src="/icons/github.png" />
                    </div>
                </div>
            </div>

            <div className="col-md px-5 d-flex align-items-center">
                <div className="text-container">
                <h2>Login/Signup form</h2>
                <p>
                    This project was a individual project at my school. 
                    I developed a Login/Sign up form containing API, validation and authorization/authentication.
                    I created my own database in MongoDB and used Reactjs and Nodejs to develop this form.
                    </p>
                    <img src="/icons/black_github.png" onClick={() => router.push('https://github.com/romigh94/Loginmodul')} />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Work