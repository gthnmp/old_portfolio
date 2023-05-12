import About from './About';
import './Home.css';
import './About.css';
import backgroundVideo from '../assets/video.mp4';



function Home() {
  return (
    <>
      <section className="Home">
        <div className='overlay'></div>
        <video src = {backgroundVideo} autoPlay loop muted></video>
        <section className="Home-section">
          <div className = "section-text">
            <h1>Hello, I am</h1>
            <h1><span>Jue</span> <span>Viole</span> <span>Grace</span></h1>
            <h3>Software Developer & Visual Editor</h3>
          </div>
          <div className = "section-button">
            <a href = "/">Let's talk</a>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
