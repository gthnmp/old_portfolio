import { Intro, Experiences, Certification, Techstack, Contact } from './about-components';

const Main = () => {
  return (
    <main className = 'main' style = {{ padding:"40px", gridArea : "content"}}>
      <Intro/>
      <Experiences/>
      <Certification/>
      <Techstack/>
      <Contact/>
    </main>
  )
}

export default Main;  