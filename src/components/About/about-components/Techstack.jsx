const Techstack = () => {
  const technologies = [
    'React JS',
    'Javascript',
    'Python',
    'JSON',
    'Firebase',
    'OpenAI API',
    'Three JS',
    'WebGL',
    'Apache',
    'Nginx',
    'Photoshop',
    'Illustrator',
    'Premiere'
  ];

  return (
    <div className="section techstack">
      <h1>Technologies</h1>
      <p>A brief list of technologies I frequently use</p>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
  );
}

export default Techstack;
