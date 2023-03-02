import { useRouter } from "next/router"

const Work = () => {


const router = useRouter()

  return (
    <div className='bg-black'>
        <div className='work-container' id="/Work">
            <h1 className='text-white text-center pb-5'>Some things I've built</h1>


        <div className='row'>
            <div className='col-md px-2 img-wrapper' onClick={() => router.push('http://sundhundsveterinar.se/')}>
                    <img className="portfolio-Image" src="/images/Clinic-work.png" />
                    <div className='img-content'>
                        <h5>Project at my internship in Webbfabriken</h5>
                        <h3>For a vetenerian clinic</h3>
                        <p>Nextjs, Bootstrap, Sass</p>

                    </div>
            </div>


            <div className='col-md px-2 img-wrapper' onClick={() => router.push('http://www.cryosec.se/')}>
                    <img className="portfolio-Image" src="/images/Example-work.png" />
                    <div className='img-content'>
                        <h5>Project at my internship in Webbfabriken</h5>
                        <h3>For an example project</h3>
                        <p>Nextjs, Nodejs, Bootstrap, Sass</p>
                    </div>
            </div>

        </div>


        <div className='row pt-3'>
            <div className='col-md px-2 img-wrapper' onClick={() => router.push('https://github.com/romigh94/Tjanstformedlingssida-FE')}>
                    <img className="portfolio-Image" src="/images/Akutraket.png" />
                    <div className='img-content'>
                        <h5>Group project at my school in Jensen Education</h5>
                        <h3>For a service agency</h3>
                        <p>Reactjs, CSS, Nodejs, MongoDB, Jest, Husky, Git actions, Heroku</p>
                    </div>
            </div>
            <div className='col-md px-2 img-wrapper' onClick={() => router.push('https://github.com/romigh94/Loginmodul')}>
                    <img className="portfolio-Image" src="/images/Loginmodul.png" />
                    <div className='img-content'>
                        <h5>Individual project at my school in Jensen Education</h5>
                        <h3>For a login/signup form</h3>
                        <p>Reactjs, Nodejs, MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work