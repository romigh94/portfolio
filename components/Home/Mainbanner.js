import { useRouter } from "next/router"
import { useEffect } from "react";

const Mainbanner = () => {

    const router = useRouter()  




    return (
      <div className='imgbanner-container'>
  
      <img src="/images/hero-banner.png" alt='Image' />
  
  
          <div className='img-caption text-center mx-auto'>
  
              <h1>
                  Hi, my name is Romina
              </h1>

              <p>I’m a Fullstack developer from Sweden. 
                During my education I have learned to build and design software with different technologies.
                It's a big passion for me.</p>
  
                      <div className="pt-3 d-flex justify-content-center">
                        <div className="px-2">
                          <button 
                              className='primary-button'
                              onClick={() => router.push('https://github.com/romigh94')}
                              >
                              Contact me here
                          </button>
                          </div>
                      </div>
  
          </div>
  
      </div>
    )
  }
  
  export default Mainbanner