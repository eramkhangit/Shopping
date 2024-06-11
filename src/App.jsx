import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import List from './Components/List'
import About from './Components/About'
// import Login from './Components/Login'
import MoreAboutStyle from './Components/Pages/MoreAboutStyle'
import MoreAboutABC from './Components/Pages/MoreAboutABC'
import ProductDetail from './Components/ProductDetail'
import { createContext } from 'react'
import Log from './Components/Log/MainLog'
// import Login from './Components/Login'
const logInContext = createContext(0)

function App() {


  return (
    <>
     {/* <div> */}
     {/* <logInContext.Provider > */}
     <BrowserRouter>
     <Navbar />
       <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/list' element={<List/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/moreaboutstyle' element={<MoreAboutStyle/>} />
        <Route path='/moreaboutabc' element={<MoreAboutABC/>}/>
        <Route path='/productdetail'  element={<ProductDetail/> } />
        <Route path='/login' element={<Log />} />
       </Routes>
        <Footer />
     </BrowserRouter>
     {/* </logInContext.Provider> */}
     {/* </div> */}
   
    </>
  )
}

export default App
