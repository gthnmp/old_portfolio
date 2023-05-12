import './Home.css';
import './About.css';
import pfp from '../assets/profilepict.JPG';

function About() {
  return (
    <>
      <section className = "About">
        <div className = "About-children about-text">
          <h1>Me, Myself, <br></br>and I</h1>
          <p>
          </p>
        </div>
        <div className = "About-children about-image">
          {/* <img src = {pfp} alt="pfp"/> */}
        </div>
      </section>
    </>
  );
}

export default About;
