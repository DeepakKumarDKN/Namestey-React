import Biryani from "../Images/Biryani.jpg"

const About =()=>{
    return(
        <div className="about_container maxWidth">
            <div className="about_page">
                <div>
                    <h2 className="about_page_heading">A Premium And Authentic</h2>
                    <h2 className="about_page_subheading">Food House</h2>
                </div>
                
                <div className="about_image_container">
                    <img src={Biryani}/>
                </div>
            </div>
        </div>
    )
}
export default About;
