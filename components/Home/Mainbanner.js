import { useRouter } from "next/router"
import { useEffect } from "react";

const Mainbanner = () => {

    const router = useRouter()  
    
    useEffect(() => {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight;
        var clientHeight = document.documentElement.clientHeight;
      
        if (scrollTop === 0) {
          // Scrolled to the top of the page
          document.body.style.overflowY = "hidden";
        } else if (scrollTop + clientHeight >= scrollHeight) {
          // Scrolled to the bottom of the page
          document.body.style.overflowY = "hidden";
        } else {
          // Scrolling within the page
          document.body.style.overflowY = "scroll";
        }
      }, []);




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
  
                      <div className="pt-3">
                          <button 
                              className='primary-button'
                              onClick={() => router.push('https://github.com/romigh94')}
                              >
                              Check out my Github
                          </button>
                      </div>
  
          </div>
  
      </div>
    )
  }
  
  export default Mainbanner