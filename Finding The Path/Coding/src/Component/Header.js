import { useEffect, useState } from 'react'
import ResturantLogo from '../Images/ResturantLogo.jpg'
import { Link } from 'react-router-dom'



const Header = () => {

    const [buttonName, setbuttonName] = useState('Login')
    console.log('header rendered')
    useEffect(()=> {
        console.log('use effect called')
    },[])

    return (
        <div className="header">
            <div className='logo_container'>
                <img className='logo' src={ResturantLogo}></img>
                <h1>Food Villa</h1>
            </div>
            <div className='nav_items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
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