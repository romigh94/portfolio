const Mainbanner = () => {
    return (
      <div className='imgbanner-container'>
  
      <img src="/images/hero-banner.jpg" alt='Image' />
  
  
          <div className='img-caption text-center mx-auto'>
  
              <h1>
                  Hi, my name is Romina
              </h1>

              <p>I’m a soon to be frontend developer from Sweden. 
                During my education I have learned to build and design software.
                It's a big passion for me.</p>

  
                      <div className="pt-3">
                          <button 
                              className='primary-button'
                              >
                              Check out my Github
                          </button>
                      </div>
  
          </div>
  
      </div>
    )
  }
  
  export default Mainbanner