import './Home.css';
import './About.css';
import pfp from '../assets/profilepict.JPG';

function About() {
  return (
    <>
      <section className = "About">
        <div className = "container text-container">
          <h1>Me, Myself, <br></br>and I</h1>
          <p>
            Hello! My name is Jue Viole Grace as a fresh graduate majoring Software Engineering. My interest in web development started back in 2018. I am very interested in learning new things. So I started learning HTML and CSS as a first step to understanding the basics of website creation. The more I learn about it, the more my interest grows, and at the moment I am more focused on backend development.
          </p>
        </div>
        <div className = "container image-container">
          <img src = {pfp} alt="pfp"/>
        </div>
      </section>
    </>
  );
}

export default About;
