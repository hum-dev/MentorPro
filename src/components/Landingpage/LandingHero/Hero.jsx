import './Hero.css'
import pic from '../../../assets/images/prompt 1.jpg'

function Hero() {
  return (
    <section className="landing-page">
    <div className="landing-page-left">
        <h2 className="landing-page-left--heading">
        Unlock your potential with MentorPro for tech excellence
        </h2>
        <p className="landing-page-left--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora et sed quas aspernatur, perspiciatis repudiandae quasi molestiae explicabo ducimus?
        </p>
        <a href="" className="landing-page-left--link">SignUp</a>
    </div>
      <div className="landing-page-right">
        <img src={pic} alt="" className="landing-page-right-image img-abs" />
        <img src={pic} alt="" className="landing-page-right-image img-2" />
      </div>
    
    
</section>
  )
}

export default Hero
