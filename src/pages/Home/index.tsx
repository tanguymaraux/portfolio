import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import About from '../../views/About'
import Github from '../../views/Github'
import Intro from '../../views/Introduction'
import Tech from '../../views/Technologies'

export default function Home () {
    return(
       <div>
            <Header/>
            <Navbar/>
            <Intro/>
            <About/>
            <Tech/>
            <Github/>
            <Footer/>
       </div>  
    )
}