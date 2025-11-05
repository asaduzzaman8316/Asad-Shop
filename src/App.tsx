
import { Outlet } from "react-router"
import Header from "./Compomemts/Share/Header/Header"
import Footer from "./Compomemts/Share/Footer.tsx/Footer"
import Name from "./Compomemts/Share/Name"


function App() {
  return (
    <div className="relative">
      <Header />
      <Name />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
