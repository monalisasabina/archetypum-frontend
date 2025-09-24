import {  Outlet } from 'react-router-dom'
import NavBar from './Components/NavBar'
import './App.css'
import Footer from './Components/Footer'

function App() {

  return (
    <div>
      <NavBar/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}

export default App