import './About.css'
import pic from '../../assets/images/About.jpg'
import Testimonial from '../Testimonials/Testimonial';

// import Admin from '../Admin/Admin';
// import Hero from '../Home/Hero';




function About() {
  
    return (
      <>
        {/* <Hero /> */}
        {/* <Admin/> */}
       
        <div className="about-container">
          <h2 className="title-1">About</h2>
          <div className="about">
            <article className="card">
              <div className="temporary_img">
                <img src={pic} alt="" />
              </div>
              <div className="card_content">
                <span className="card_title">About MentorPro</span>
                <span className="card_subtitle">
                  Empowering individuals to achieve their goals
                </span>
                <p className="card_description">
                  MentorPro is a comprehensive mentorship platform that connects
                  aspiring individuals with experienced mentors. Our platform
                  aims to facilitate meaningful mentorship relationships,
                  empowering mentees to achieve personal and professional
                  growth.
                </p>
              </div>
            </article>

            <article className="card">
              <div className="temporary_img">
                <img src={pic} alt="" />
              </div>
              <div className="card_content">
                <span className="card_title">How It Works</span>
                <span className="card_subtitle">
                  Create an Account Don`t be left back{" "}
                </span>
                <p className="card_description">
                  Start by registering an account on our platform. Provide your
                  basic information and set up your profile. This will help us
                  understand your interests and goals, and match you with the
                  right mentor, in your field of interest, to help you achieve
                  your goals.
                </p>
              </div>
            </article>

            <article className="card">
              <div className="temporary_img">
                <img src={pic} alt="" />
              </div>
              <div className="card_content">
                <span className="card_title">What Next</span>
                <span className="card_subtitle">
                  Begin Mentorship, a Journey to success
                </span>
                <p className="card_description">
                  Once you`ve created your profile we will do a matchup for
                  mentees with mentors to march their interests, start your
                  mentorship journey. Schedule meetings, engage in discussions,
                  and collaborate with one another to achieve your objectives,
                  and grow personally
                </p>
              </div>
            </article>

            <article className="card">
              <div className="temporary_img">
                <img src={pic} alt="" />
              </div>
              <div className="card_content">
                <span className="card_title">You`re ready to go</span>
                <span className="card_subtitle">
                  Additional Steps and Requirements
                </span>
                <p className="card_description">
                  Please note that our platform may have additional steps and
                  requirements to ensure a smooth mentorship experience. These
                  may include completing your profile, agreeing to our code of
                  conduct, and respecting the privacy and confidentiality of all
                  participants.
                </p>
              </div>
            </article>
          </div>
        </div>
        <Testimonial />
      </>
    );
    }
export default About
