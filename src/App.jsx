import {BrowserRouter} from "react-router-dom"
import {About,Contact,Experience,Blogs,Hero,Navbar,Tech,Works,Footer} from "./components"

const  App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gray-900"> 
        <div className="">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Tech/>
        <Experience/>
        <Works/>
        {/* <Blogs/> */}
        <Contact/>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  )
}

export default App
