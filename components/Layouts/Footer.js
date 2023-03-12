import { useRouter } from "next/router"

const Footer = () => {

const router = useRouter()


  return (
    <footer className='footer-container p-3'>
        <div className='footer-inner-container'>
        <div className='row justify-content-between border-bottom-white'>
            <div className='col-lg-4'>
            <p className='text-white pt-3'>&#169; 2023 | Built and designed by Romina Ghaderi.</p>
            </div>
            <div className='col-lg-2 d-flex pb-3'>
                <div className='px-3'>
                    <img width={60} onClick={() => router.push('https://github.com/romigh94')} src="/icons/github.png" />
                </div>

                <div>
                    <img width={60} onClick={() => router.push('https://www.linkedin.com/in/romina-ghaderi-8b6074232/')} src="/icons/linkedin.png" />
                </div>
            </div>
        </div>

        </div>
    </footer>
  )
}

export default Footer