import './Navbar.css'; // optional if separate css, or merge styles in App.css

export default function Navbar() {
  return (
    <nav className='navbar-container'>
      <div className='logo'>
        my<span className='portfolio'>portfolio.</span>
      </div>
      <ul className='nav-links'>
        {['Home', 'About', 'My Skills', 'Portfolio', 'Contact'].map(
          (item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase().replace(/\s/g, '')}`}>{item}</a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
