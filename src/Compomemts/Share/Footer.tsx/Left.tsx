import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function Left() {
  return (
    <div data-aos='fade-right' className="space-y-3">
      <p className="text-4xl font-[quicksand] font-semibold">Asad<span className="text-xl text-green-700">uzzaman</span></p>
      <p>Awesome grocery store website template</p>

      <div className="space-y-3 text-sm pt-5">

        <p><b>Address:</b>5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
        <p><b>Call Us:</b>(+880) 1610 839202</p>
        <p><b>Email:</b>sale@Next.com</p>
        <p><b>Hours:</b>10:00 - 18:00, Mon - Sat</p>
      </div>
    </div>
  )
}

export default Left
