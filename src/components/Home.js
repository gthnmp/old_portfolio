import './Home.css';
import backgroundVideo from '../assets/video.mp4';

function Home() {
  return (
    <div className="Home">
      <div className='overlay'></div>
      <video src = {backgroundVideo} autoPlay loop muted></video>
      <section className="Home-section">
        <div className = "section-text">
          <h1>Hello, <span>I am</span></h1>
          <h1>Jue Viole Grace</h1>
          <p>Software Developer & Visual Editor</p>
        </div>
        <div className = "section-button">
          <a href = "/">Let's talk</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
