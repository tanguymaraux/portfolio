import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import About from '../../vues/About'
import Github from '../../vues/Github'
import Intro from '../../vues/Introduction'
import Tech from '../../vues/Technologies'

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