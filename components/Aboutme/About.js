import React from 'react'

const About = () => {
  return (
    <div className='bg-black'>
    <div className='about-container mx-auto text-center text-white' id="/About">


        <div className='pb-5'>
            <h1>About me</h1>
        </div>

        <div className='pb-5'>
            <img src="/images/profile-img.jpg" className='profile-img' />
        </div>
            <p className='pt-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed vitae velit mauris. Aenean nunc odio, porta ac tincidunt aliquet, 
                aliquam ac lacus. Morbi et magna vitae leo consequat pretium. 
                Nam accumsan finibus sem finibus feugiat. Maecenas accumsan lacinia urna 
                non luctus. Cras ullamcorper lectus eu nibh.
            </p>


            <h3 className='pt-5'>Some technologies I've worked with:</h3> 

                <div className='row pt-3'>
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

                <div className='row'>

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

                <div className='row'>
                    <div className='col-xs-4 col-sm-2 col-md-2 pt-4'>
                        <img src="/icons/nextjs.png"/>
                    </div>
                    <div className='col-xs-4 col-sm-2 col-md-2 px-2'>
                        <img src="/icons/mongodb.png" />
                    </div>
                    <div className='col-xs-4 col-sm-2 col-md-2 px-2'>
                        <img src="/icons/github.png" />
                    </div>
                </div>

                <div className='row me-auto ps-3'>
                    <div className='col-xs-4 px-2'>
                        <img src="/icons/bootstrap.png" />
                    </div>
                    <div className='col-xs-4 px-2'>
                        <img src="/icons/sass.png" />
                    </div>
                    <div className='col-xs-4 px-2'>
                        <img src="/icons/heroku.png" />
                    </div>
                    
                </div>


            </div>

    </div>
  )
}

export default About