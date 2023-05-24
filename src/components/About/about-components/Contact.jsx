const Contact = () => {
  const contacts = [
    {
      label: 'Email',
      link: 'mailto:gthnmp@gmail.com'
    },
    {
      label: 'Linkedin',
      link: 'https://www.linkedin.com/in/gathan-mahesa-4a0789248/'
    },
    {
      label: 'Github',
      link: 'https://github.com/gthnmp'
    },
    {
      label: 'Twitter',
      link: 'https://twitter.com/viograce_'
    },
    {
      label: 'Instagram',
      link: 'https://www.instagram.com/_viograce/'
    },
    {
      label: 'YouTube',
      link: 'https://www.youtube.com/channel/UCplR9ZnGkweAR6E28T4E36Q'
    }
  ];

  return (
    <div className="section contacts">
      <h1>Get In Touch</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <a href={contact.link} target="_blank" rel="noreferrer">{contact.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
