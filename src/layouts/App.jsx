import {  Outlet } from 'react-router-dom'
import NavBar from '../Components/public/NavBar'
import './App.css'
// import Footer from './Components/public/Footer'

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