export default function Skills() {
  const skills = [
    {
      icon: 'fa-solid fa-c',
      title: 'C-lang',
      desc: 'Strong command on basics',
    },
    {
      icon: 'fa-brands fa-python',
      title: 'Python',
      desc: 'Proficient with Python and libraries',
    },
    {
      icon: 'fa-brands fa-java',
      title: 'Java',
      desc: 'Good at Java programming',
    },
    {
      icon: 'fa-solid fa-code',
      title: 'Front end',
      desc: 'HTML, CSS, JS, React.js',
    },
    {
      icon: 'fa-brands fa-js',
      title: 'Back end',
      desc: 'Node.js, Express, Django',
    },
    {
      icon: 'fa-solid fa-angles-right',
      title: 'Specializations',
      desc: 'Machine learning, AI, Data Science',
    },
  ];

  return (
    <>
      <h1 className='myself sk' style={{ color: 'rgb(161, 161, 159)' }}>
        My <span style={{ color: 'rgb(63, 175, 175)' }}>Skills</span>
      </h1>
      <div className='skills'>
        {skills.map((skill, i) => (
          <div className='oo' key={i}>
            <h1>
              <i className={skill.icon}></i>
            </h1>
            <h2>{skill.title}</h2>
            <p className='para-2'>{skill.desc}</p>
            <button className='btn btn-primary btn-sm'>
              <b>Know more</b>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
