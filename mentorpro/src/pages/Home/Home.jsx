import './Home.css'
import pic from '../../assets/images/ment-1.jpg'
// import { Link } from "react-router-dom"





function Home() {

  // const navigate = useNavigate()
  return (
    <div >
  
    <section className="landing-page">
    <div className="landing-page-left">
        <h2 className="landing-page-left--heading">
        Unlock your potential with MentorPro for tech excellence
        </h2>
        <p className="landing-page-left--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora et sed quas aspernatur, perspiciatis repudiandae quasi molestiae explicabo ducimus?
        </p>
        
       
       
    </div>
      <div className="landing-page-right">
        <img src={pic} alt="" className="landing-page-right-image img-abs" />
        <img src={pic} alt="" className="landing-page-right-image img-2" />
      </div>
    
    
</section>

    </div>
      
  )
}

export default Home
