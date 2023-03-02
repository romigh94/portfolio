import 'bootstrap/dist/css/bootstrap.css'
import '../styles/styles.css'
import '../styles/responsive.css'
import Navbar from '../components/Layouts/Navbar'


export default function App({ Component, pageProps }) {
  return (
      <>
      <Navbar />
      <Component {...pageProps} />
      </>
  )
}
