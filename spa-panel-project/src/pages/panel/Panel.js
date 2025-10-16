import MyNavbar from '../../components/navbar/Navbar'


function Panel() {

    return (

        <div >
            <MyNavbar/>
            <h1 style={{textAlign: 'center'}} className='py-3'>Panel Page</h1>
            <h2 style={{textAlign: 'center'}} className='py-4'>Welcome to Your Dashboard!</h2>
            <p style={{textAlign: 'center'}}>We're glad to have you back. Explore your panel to manage your tasks, view updates, and customize your settings. If you need any assistance, don't hesitate to reach out. Enjoy your time here!</p>
        </div>
    )
}
export default Panel