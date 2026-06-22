import Navbar from './components/Navbar'
import Product from './components/Product'
import Choose from './components/Choose'
import Experience from './components/Experience'
import Material from './components/Material'
import Client from './components/Client'
import Footer from './components/Footer'
export default function App(){
  return(
    <div className='w-full overflow-hidden'>
    <Navbar/>

    <Choose/>
    <Product/>
    <Experience/>
    <Material/>
    <Client/>
    <Footer/>
    </div>
  )
}
