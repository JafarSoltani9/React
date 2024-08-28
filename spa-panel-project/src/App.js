import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/home/Home'
import About from './pages/about/About'
import Article from './pages/article/Article'
import Login from './pages/login/Login'
import Panel from './pages/panel/Panel'
import Course from './pages/course/Course'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/article" element={<Article/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/panel" element={<Panel/>} />
        <Route path="/course/:courseId" element={<Course/>} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App