
import { Outlet } from "react-router"
import Header from "./Compomemts/Share/Header/Header"
import Footer from "./Compomemts/Share/Footer.tsx/Footer"
// import Name from "./Compomemts/Share/Name"
import { store } from './Redux/store'
import { Provider } from "react-redux"


function App() {
  return (
    <Provider store={store}>
      <div className="overflow-hidden relative w-full">
        <Header />
        <main className="">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
  )
}

export default App
