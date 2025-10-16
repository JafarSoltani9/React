import Home from './pages/home/Home'
import About from './pages/about/About'
import Article from './pages/article/Article'
import Login from './pages/login/Login'
import Panel from './pages/panel/Panel'
import Course from './pages/course/Course'
import Setting from './pages/Setting'
import PrivateRoute from './components/PrivateRoute'
const routes = [
    {path: '/', element: <Home/>},
    {path: '/about', element: <About/>},
    {path: '/article/*', element: <Article/> , children : [
      {path:'react',  element: <h1>React Article</h1>},
      {path: 'js', element: <h1>Javascript Article</h1>},
      {path: 'html-css', element: <h1>HTML/CSS Article</h1>}

    ]},
    {path: '/login', element: <Login/>},
    {path: '/panel', element: <PrivateRoute><Panel/></PrivateRoute>},
    {path: '/setting', element: <PrivateRoute><Setting/></PrivateRoute>},
    {path: '/course/:courseId', element: <Course/>},
]
export default routes