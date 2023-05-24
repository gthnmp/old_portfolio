const Techstack = () => {
  const technologies = [
    'React JS',
    'Javascript',
    'Python',
    'Firebase',
    'JSON',
    'OpenAI API',
    'Three JS',
    'WebGL',
    'Apache',
    'Linode',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe Premiere'
  ];

  return (
    <div className="section techstack">
      <h1>Technologies</h1>
      <p>A brief list of technologies I use</p>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
  );
}

export default Techstack;
