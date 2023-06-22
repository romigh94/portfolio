import React from 'react'

const About = () => {
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

            <button className='primary-button'>Contact</button>
            </div>

            <div className='col-md'>

        
            <div className='row second-row'>

            <h4 className='pt-5'>Some technologies I've worked with:</h4> 

                    <div className='col-xs-4 col-sm-2 col-md-2 px-2'>
                        <img src="/icons/html.png" />
                    </div>
                    <div className='col-xs-4 col-sm-2 col-md-2 px-2'>
                        <img src="/icons/css.png" />
                    </div>
                    <div className='col-xs-4 col-sm-2 col-md-2 pt-3 px-2'>
                        <img src="/icons/javascript.png" />
                    </div>
                </div>

                <div className='row second-row'>

                    <div className='col-xs-4 col-sm-2 col-md-2 pt-3 px-2'>
                        <img src="/icons/node.png" />
                    </div>
                    <div className='col-xs-4 col-sm-2 col-md-2 p-3'> 
                        <img src="/icons/figma.png" />
                    </div>

                    <div className='col-xs-4 col-sm-2 col-md-2 pt-3 px-2'>
                        <img src="/icons/reactjs.png" />
                    </div>

                </div>

                <div className='row second-row'>
                    <div className='col-xs-4 col-sm-2 col-md-2 pt-4'>
                        <img src="/icons/nextjs.png"/>
                    </div>
                    <div className='col-xs-4 col-sm-2 col-md-2 px-2'>
                        <img src="/icons/mongodb.png" />
                    </div>
                    <div className='col-xs-4 col-sm-2 col-md-2 px-2'>
                        <img src="/icons/black_github.png" />
                    </div>
                </div>

                <div className='row second-row ps-3'>
                    <div className='col-xs-4 px-2'>
                        <img src="/icons/bootstrap.png" />
                    </div>
                    <div className='col-xs-4 px-2'>
                        <img src="/icons/sass.png" />
                    </div>
                    <div className='col-xs-4 px-2'>
                        <img src="/icons/heroku.png" />
                    </div>
                    <div className='col-xs-4 px-2'>
                        <img src="/icons/vue.png" />
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About