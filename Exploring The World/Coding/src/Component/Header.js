import { useState } from 'react'
import ResturantLogo from '../Images/ResturantLogo.jpg'


const Header = () => {

    const [buttonName, setbuttonName] = useState('Login')

    return (
        <div className="header">
            <div className='logo_container'>
                <img className='logo' src={ResturantLogo}></img>
                <h1>Food Villa</h1>
            </div>
            <div className='nav_items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login_logout" 
                    onClick={()=> {
                        buttonName === "Login" ? setbuttonName('Logout') : setbuttonName('Login')
                    }}>{buttonName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;