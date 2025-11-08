
import TeamSocial from './TeamSocial'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function TeamRight({ src, title, bio }: { src: string, title: string, bio: string }) {
    return (
        <div data-aos='zoom-in-left' className='relative group mb-24 lg:mb-0'>
            <div>
                <img
                    className='rounded-lg'
                    width={420}
                    height={300}
                    alt='profile01'
                    src={src}
                />
            </div>
            <div
                className='text-center shadow-md  absolute duration-500  w-[80%] right-10 py-8 rounded-lg -bottom-20 bg-white group-hover:-translate-y-2'
            >
                <p className='text-2xl font-semibold'>{title}</p>
                <p className='text-gray-600 pb-4'>{bio}</p>
                <TeamSocial />
            </div>
        </div>
    )
}

export default TeamRight
