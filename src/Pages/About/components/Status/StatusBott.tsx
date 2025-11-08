
import { useEffect, useState } from 'react'
import MiniBox from './MiniBox'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function StatusBott() {
  const [first, setFirst] = useState(0)
  const [sec, setSec] = useState(0)
  const [third, setThird] = useState(0)
  const [four, setFour] = useState(0)
  const [five, setFive] = useState(0)

  useEffect(() => {
    const i1 = setInterval(() => {
      setFirst(prev => {
        if (prev >= 14) {
          clearInterval(i1)
          return prev
        }
        return prev + 1
      })
    }, 500)

    const i2 = setInterval(() => {
      setSec(prev => {
        if (prev >= 24) {
          clearInterval(i2)
          return prev
        }
        return prev + 1
      })
    }, 300)

    const i3 = setInterval(() => {
      setThird(prev => {
        if (prev >= 9) {
          clearInterval(i3)
          return prev
        }
        return prev + 1
      })
    }, 700)

    const i4 = setInterval(() => {
      setFour(prev => {
        if (prev >= 10) {
          clearInterval(i4)
          return prev
        }
        return prev + 1
      })
    }, 700)

    const i5 = setInterval(() => {
      setFive(prev => {
        if (prev >= 120) {
          clearInterval(i5)
          return prev
        }
        return prev + 1
      })
    }, 100)

    return () => {
      clearInterval(i1)
      clearInterval(i2)
      clearInterval(i3)
      clearInterval(i4)
      clearInterval(i5)
    }
  }, [])

  return (
    <div data-aos='fade-down ' className='hidden lg:block'>
      <div className='h-70 rounded-md mt-10 relative container mx-auto overflow-hidden'>
        <img
          className='absolute top-0 bottom-0 z-10'
          width={3500}
          height={10}
          src='/about-9.png'
          alt='bg-banner'
        />
        <img
          className='absolute top-0 bottom-0 backdrop-blur-sm z-30'
          width={3500}
          height={10}
          src='/banner-10.png'
          alt='bg-banner'
        />
        <div  className='flex items-center px-20 h-70 justify-between'>
          <MiniBox title={`${first}+`} para='Glorious years' />
          <MiniBox title={`${sec}+`} para='Happy clients' />
          <MiniBox title={`${third}+`} para='Project complete' />
          <MiniBox title={`${four}+`} para='Team advisor' />
          <MiniBox title={`${five}+`} para='Products sale' />
        </div>
      </div>
    </div>
  )
}

export default StatusBott
