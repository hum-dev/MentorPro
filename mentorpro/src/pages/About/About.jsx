import './About.css'
import pic from '../../assets/images/prompt 1.jpg'

function About() {
  
    return (
      <div className="about">
        <article className="card">
          <div className="temporary_img"><img src={pic} alt="" /></div>
          <div className="card_content">
            <span className="card_title">About MentorPro</span>
            <span className="card_subtitle">
              Empowering individuals to achieve their goals
            </span>
            <p className="card_description">
              MentorPro is a comprehensive mentorship platform that connects
              aspiring individuals with experienced mentors. Our platform aims
              to facilitate meaningful mentorship relationships, empowering
              mentees to achieve personal and professional growth.
            </p>
          </div>
        </article>

        <article className="card">
          <div className="temporary_img"><img src={pic} alt="" /></div>
          <div className="card_content">
            <span className="card_title">How It Works</span>
            <span className="card_subtitle">Create an Account</span>
            <p className="card_description">
              Start by registering an account on our platform. Provide your
              basic information and set up your profile. This will help us
                understand your interests and goals, and match you with the right
                mentor.

            </p>
          </div>
        </article>

        <article className="card">
          <div className="temporary_img"><img src={pic} alt="" /></div>
          <div className="card_content">
            <span className="card_title">What Next</span>
            <span className="card_subtitle">Begin Mentorship Journey</span>
            <p className="card_description">
              Once you`ve created your profile we will do a matchup for mentees
              with mentors to march their interests, start your mentorship
              journey. Schedule meetings, engage in discussions, and collaborate
              with one another to achieve your objectives.
            </p>
          </div>
        </article>

        <article className="card">
          <div className="temporary_img"><img src={pic} alt="" /></div>
          <div className="card_content">
            <span className="card_title">You`re ready to go</span>
            <span className="card_subtitle">
              Additional Steps and Requirements
            </span>
            <p className="card_description">
              Please note that our platform may have additional steps and
              requirements to ensure a smooth mentorship experience. These may
              include completing your profile, agreeing to our code of conduct,
              and respecting the privacy and confidentiality of all
              participants.
            </p>
          </div>
        </article>
      </div>
    );
    }
export default About
