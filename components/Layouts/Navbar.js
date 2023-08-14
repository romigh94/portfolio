import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {

    const router = useRouter()

    const [selected, setSelected] = useState(false)


            const collapse = 
                    selected === false 
                    ? 
                    'collapse navbar-collapse' 
                    : 'collapse navbar-collapse show burger';



  return (
<div className="navbar-container">
        <div className='inner-container'>
            <nav className='navbar navbar-expand-md'>

            <div className="img-logo pt-3 pb-5 ps-3">
                <a href='#'>
                        <img src="/icons/RG.svg" />
                </a>
            </div>
                
                <div className="burger-icon-container" onClick={(e) => e.preventDefault()}>
                        <a 
                            href="#"
                            onClick={() => setSelected(!selected)} 
                            className="BurgerMenu">
                            {selected === false ? 

                            <img
                            src='/icons/burgermenu.svg' width={25}/> 
                            : <img className="me-3 mb-4 cross-icon" src='/icons/cross.svg' width={30} />}

                        </a>

                </div>

                <div className={collapse}>
                    <ul className='ms-auto navbar text-white pt-4'>
                        
                            <li className="pb-5 px-3">
                                <a className="nav-item" onClick={() => setSelected(!selected)} href="#/About">
                                        About
                                </a>
                            </li>
                            
                           

                            <li className="pb-5 px-3">
                                <a className="nav-item" onClick={() => setSelected(!selected)} href='#/Work'>
                                        Work
                                </a>
                            </li>

                            <li className="pb-5 px-3" >
                                <a className="nav-item" onClick={() => setSelected(!selected)} href='#/Contact'>
                                        Contact
                                </a>
                            </li>

                        <div className="resume-btn px-3">
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