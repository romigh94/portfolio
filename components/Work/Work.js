import { useRouter } from "next/router"

const Work = () => {


const router = useRouter()

  return (
    <div>
        <div className='work-container' id="/Work">
            <h1 className='text-center pb-5'>Some things I've built</h1>


        <div className='row'>
            <div className='col-md px-2' onClick={() => router.push('http://sundhundsveterinar.se/')}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src="/images/Clinic-work.png" />
                    <div className='img-content'>
                        <h5>Project at my internship in Webbfabriken</h5>
                        <h3>Vetenerian clinic</h3>
                        <p>Nextjs, Bootstrap, Sass</p>
                    </div>
                </div>
            </div>


            <div className='col-md px-2' onClick={() => router.push('http://www.cryosec.se/')}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src="/images/Example-work.png" />
                    <div className='img-content'>
                        <h5>Project at my internship in Webbfabriken</h5>
                        <h3>Example project</h3>
                        <p>Nextjs, Nodejs, Bootstrap, Sass</p>
                    </div>
                </div>
            </div>

        </div>


        <div className='row pt-3'>
            <div className='col-md px-2' onClick={() => router.push('https://github.com/romigh94/Tjanstformedlingssida-FE')}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src="/images/Akutraket.png" />
                    <div className='img-content'>
                        <h5>Group project at my school in Jensen Education</h5>
                        <h3>Service agency</h3>
                        <p>Reactjs, CSS, Nodejs, MongoDB, Jest, Husky, Git actions, Heroku</p>
                    </div>
                 </div>
            </div>
            <div className='col-md px-2' onClick={() => router.push('https://github.com/romigh94/Loginmodul')}>
                <div className="img-wrapper">
                    <img className="portfolio-Image" src="/images/Loginmodul.png" />
                    <div className='img-content'>
                        <h5>Individual project at my school in Jensen Education</h5>
                        <h3>Login/signup form</h3>
                        <p>Reactjs, Nodejs, MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Work