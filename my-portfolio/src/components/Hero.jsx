export default function Hero() {
  return (
    <div className='hero-section' id='home'>
      <div className='profile-pic'>
        <img src='/myself.jpg' alt='Vijay Vaddi' />
      </div>
      <div className='intro-text'>
        <h2>
          I'm <span className='name'>Vijay Vaddi</span>
        </h2>
        <p>
          Hello and welcome to my corner of the web! I'm Vijay, a passionate
          student with a keen interest in{' '}
          <span className='highlight'>web development</span>. Here, you'll find
          a glimpse into my journey, projects, and aspirations in the world of
          technology.
        </p>
        <div className='social-icons'>
          <a href='#'>
            <i className='fa-brands fa-square-instagram'></i>
          </a>
          <a href='#'>
            <i className='fa-brands fa-square-github'></i>
          </a>
          <a href='#'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a href='#'>
            <i className='fa-brands fa-square-facebook'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
