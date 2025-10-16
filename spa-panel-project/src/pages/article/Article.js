import { Link, Outlet } from 'react-router-dom'
import MyNavbar from '../../components/navbar/Navbar'
import './Article.css'
function Article () {
    return (
        <div className='articleWrapper'>
            <MyNavbar />
            <h1>Article page</h1>
            <hr />

            <div className='btn-container'>
                <Link to='react' className='linkBtn'>React Article</Link>
                <Link to='js' className='linkBtn'>Javascript Article</Link>
                <Link to='html-css' className='linkBtn'>HTML/CSS Article</Link>
            </div>
            <hr />

            <Outlet/>
        </div>
    )
}

export default Article