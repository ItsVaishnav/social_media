import Header from "./Components/Header"
import Footer from "./Components/Footer"
import SideBar from "./Components/SideBar"
import './App.css';
function App() {
  return (
    <div className="app_container">
        <SideBar></SideBar>
        <div className="content">
        <Header></Header>
        <Footer></Footer>
        </div>
    </div>
  )
}

export default App
