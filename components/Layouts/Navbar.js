import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {

    const router = useRouter()

    const [stickyClass, setStickyClass] = useState('navbar-container')
    const [selected, setSelected] = useState(false)


            const collapse = 
                    selected === false 
                    ? 
                    'collapse navbar-collapse ' 
                    : 'collapse navbar-collapse show burger';




            const stickyNavbar = () => {
                if (window !== undefined) {
                    let screenHeight = window.scrollY
                    
                    if (screenHeight > 100) {
                        setStickyClass('sticky')
                    } else {
                        setStickyClass('navbar-container')
                    }
        
                }
            }



            useEffect(() => {

                window.addEventListener('scroll', stickyNavbar)
        
                return () => {
                    window.removeEventListener('scroll', stickyNavbar)
                }
        
            }, [])


  return (
<div className={stickyClass}>
        <div className='inner-container'>
            <nav className='navbar navbar-expand-md'>

            <div className={stickyClass === "sticky" ? "img-logo pb-4 ps-3 pt-1" : "img-logo pt-3 pb-5 ps-3"}>
                <a href='#'>
                        <img src="/icons/RG.svg" />
                </a>
            </div>
                
                <div onClick={(e) => e.preventDefault()}>
                        <a 
                            href="#"
                            onClick={() => setSelected(!selected)} 
                            className="BurgerMenu">
                            {selected === false ? 

                            <img className="me-2 mb-4"
                            src='/icons/burgermenu.svg' width={20}/> 
                            : <img className="me-3 mb-4" src='/icons/cross.svg' width={20} />}

                        </a>

                </div>

                <div className={collapse}>
                    <ul className={stickyClass === "sticky" ? 'ms-auto navbar text-white' : 'ms-auto navbar text-white pt-4'}>
                        
                            <li className={stickyClass === "sticky" ? "sticky-item px-3" : "pb-5 px-3"}>
                                <a className="nav-item" href="#/About">
                                        About
                                </a>
                            </li>
                            
                           

                            <li className={stickyClass === "sticky" ? "sticky-item px-3" : "pb-5 px-3"}>
                                <a className="nav-item" href='#/Work'>
                                        Work
                                </a>
                            </li>

                            <li className={stickyClass === "sticky" ? "sticky-item px-3" : "pb-5 px-3"} >
                                <a className="nav-item" href='#/Contact'>
                                        Contact
                                </a>
                            </li>

                        <div className={stickyClass === "sticky" ? "sticky-item px-3 li-item" : "resume-btn px-3"}>
                            <button className="primary-button" onClick={() => router.push('/cv.pdf')}>
                                Resume
                            </button>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar