import React from 'react'
import { useRouter } from 'next/router'

const About = () => {

const router = useRouter()

  return (
    <div className='about-outer-container'>
    <div className='about-container mx-auto text-center' id="/About">

        <h1 className='text-center'>About me</h1>
        
        <div className='row first-row pt-3'>

        <div className='col-md'>



        <div className='pb-5 pt-5 text-center'>
            <img src="/images/profile-image.jpg" className='profile-img' />
        </div>
            <p className='pt-3'>
            
            Hello there! I'm a passionate Frontend Developer with experience in both frontend and backend development. I love working with different technologies and am always eager to learn.

            I'm great at creating user-friendly designs using different technologies that helps me make websites that look good and work well. I enjoy learning new technologies and I'm a problem-solving enthusiast.

            When I decide to do something, I go all in with confidence and a cheerful attitude. Let's work together to create awesome things!

            </p>

            <button className='primary-button' onClick={() => router.push('#/Contact')}>Contact me</button>
            </div>

            <div className='col-md mt-5'>
                <div className='row second-row'>

                <h4 className='pt-5'>Some technologies/things I've been working with:</h4> 

                        <div className='pt-3 col-md px-2'>
                            <div className='skill-container'>
                                HTML
                            </div>
                        </div>
                        <div className='pt-3 col-md  px-2'>
                            <div className='skill-container'>
                                CSS/Sass
                            </div>
                        </div>
                        <div className='pt-3 col-md px-2'>
                            <div className='skill-container'>
                                JavaScript
                            </div>
                        </div>
                    </div>

                    <div className='row second-row'>

                        <div className='col-md px-2 pt-3'>
                            <div className='skill-container'>
                            NodeJS
                            </div>
                        </div>
                        <div className='col-md px-2 pt-3'> 
                            <div className='skill-container'>    
                            Figma
                            </div>
                        </div>

                        <div className='col-md px-2 pt-3'>
                            <div className='skill-container'>
                            React.js
                            </div>
                        </div>

                    </div>

                    <div className='row second-row'>
                        <div className='col-md px-2 pt-3'>
                            <div className='skill-container'>
                            Next.js
                            </div>
                        </div>
                        <div className='col-md px-2 pt-3'>
                            <div className='skill-container'>
                            Vue.js
                            </div>
                        </div>
                        <div className='col-md px-2 pt-3'>
                            <div className='skill-container'>
                            MongoDB
                            </div>
                        </div>
                    </div>

                    <div className='row second-row'>
                        <div className='col-md px-2 pt-3'>
                            <div className='skill-container'>
                            Bootstrap
                            </div>
                        </div>
                        <div className='col-md px-2 pt-3'>
                            <div className='skill-container'>
                            Tailwind
                            </div>
                        </div>
                        <div className='col-md mx-2 mt-3'>
                            <div className='skill-container'>
                            Git/Github
                            </div>
                        </div>

                    </div>

                    <div className='row second-row'>
                        <div className='col-md px-2 pt-3'>
                            <div className='skill-container'>
                            Responsive design
                            </div>
                        </div>
                        <div className='col-md px-2 pt-3'>
                            <div className='skill-container'>
                            REST API
                            </div>
                        </div>
                        <div className='col-md mx-2 mt-3'>
                            <div className='skill-container'>
                            Agile workflows
                            </div>
                        </div>
                    </div>               
            </div>
        </div>
    </div>
</div>
  )
}

export default About