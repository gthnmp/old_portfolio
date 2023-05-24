const Certification = () => {
  const certifications = [
    {
      title: 'Certified Sysadmin',
      organization: 'Linux Foundation',
      year: '2023'
    },
    {
      title: 'Python Skill Certification',
      organization: 'Hackerrank',
      year: '2023'
    },
    {
      title: 'MikroTik Certified Network Associate',
      organization: 'MikroTik',
      year: '2022'
    }
  ];

  return (
    <div className="section recognition">
      <h1>Certifications & Recognitions</h1>
      <ul>
        {certifications.map((certification, index) => (
          <li key={index}>
            <h2>{certification.title}</h2>
            <p>{certification.organization}<br/>{certification.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certification;
