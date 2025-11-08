
import AboutHero from './components/AboutHero'
import Sixbox from './components/Sixbox'
import Performance from './components/Performance Sec/Performance'
import Status from './components/Status/Status'
import Team from './components/OurTeam/Team'
import SubScribe from '../../Compomemts/Share/Subscribe'
import LastService from '../../Compomemts/Share/LastService'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()

const page = () => {
    return (
        <div data-aos='fade-down' className='container mx-auto'>
            <AboutHero />
            <Sixbox />
            <Performance />
            <Status />
            <Team />
            <SubScribe src={'/banner-13.png'} />
            <LastService />
        </div>
    )
}

export default page
