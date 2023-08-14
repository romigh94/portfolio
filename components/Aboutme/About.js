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
            
            I'm a 28 year old IT geek who has a big passion for web development and webdesign. 
            Recently, in June 2023, I graduated as a frontend developer from Jensen Yrkeshögskola in Kista. 
            When I'm not coding, I cherish quality time spent with friends and family. 

            </p>

            <button className='primary-button' onClick={() => router.push('#/Contact')}>Contact me here</button>
            </div>

            <div className='col-md mt-5'>

        
            <div className='row second-row'>

            <h4 className='pt-5'>Some technologies I've worked with:</h4> 

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
                        Github
                        </div>
                    </div>
                    <div className='col-md mx-2 mt-3'>
                        <div className='skill-container'>
                        Heroku
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