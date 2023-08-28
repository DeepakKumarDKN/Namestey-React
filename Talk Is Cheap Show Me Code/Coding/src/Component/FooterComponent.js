import Swiggy from '../Images/Swiggy.png'

const FooterComponenet = () =>{
    return(
        <div className="footer_component">
            <div>
                <ul>
                    <li className="SwiggyLogo">
                        <div className="Logo-container">
                        <img src={Swiggy}></img>
                        <p>Swiggy</p>
                        </div>
                        <p>© 2023 Bundl<br/> Technologies Pvt. Ltd</p>
                    </li>
                </ul>
            </div>

            <div className="company_section">
                <ul>
                    <li>Company</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                    <li>Swiggy Instamart</li>
                    <li>Swiggy Genie</li>+
                </ul>
            </div>

            <div className="contact_section">
            <ul>
                <li>Contact us</li>
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
            </ul>
            </div>

            <div className="deliverSection">
            <ul>
                <li>We deliver to:</li>
                <li>Banglore</li>
                <li>Delhi</li>
                <li>Hyderabad</li>
                <li>Delhi</li>
                <li>Mumbai</li>
                <li>Pune</li>
            </ul>
            </div>
        </div>
    )
}

export default FooterComponenet;