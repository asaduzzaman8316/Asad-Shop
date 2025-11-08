
import AboutTitle from '../../../../Compomemts/Share/AboutTitle'
import TeamLeft from './TeamLeft'
import TeamRight from './TeamRight'

function Team() {
    return (
        <div className='w-[70%] mx-auto pb-20'>
            <AboutTitle title='Our Team' />
            <div className='grid lg:grid-cols-3 gap-10 pt-10 '>
                <TeamLeft />
                <TeamRight src='/about-6.png' title='H. Merinda' bio='CEO & Co-Founder' />
                <TeamRight src='/about-8.png' title='Dilan Specter' bio='Head Engineer' />
            </div>
        </div>
    )
}

export default Team
