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

            <div className="p-5">
                <a href='/'>
                        <img src="/icons/RG.svg" />
                </a>
            </div>
                
                <div className='p-5'>
                        <a 
                            href="#"
                            onClick={() => setSelected(!selected)} 
                            className="BurgerMenu">
                            {selected === false ? 

                            <img 
                            src='/icons/burgermenu.svg' width={30}/> 
                            : <img src='/icons/cross.svg' width={30} />}

                        </a>

                </div>

                <div className={collapse}>
                    <ul className='ms-auto navbar text-white p-3'>
                        
                            <li className="px-3 li-item">
                                <a className="nav-item" href="#/About">
                                        About
                                </a>
                            </li>
                            
                           

                            <li className="px-3 li-item">
                                <a className="nav-item" href='#/Work'>
                                        Work
                                </a>
                            </li>

                            <li className="px-3 li-item">
                                <a className="nav-item" href='/'>
                                        Contact
                                </a>
                            </li>

                        <div className="px-3 li-item">
                            <button className="comp-button" onClick={() => router.push('/cv.pdf')}>
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