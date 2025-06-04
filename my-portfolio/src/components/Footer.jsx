export default function Footer() {
  return (
    <div style={{ backgroundColor: 'rgb(28, 78, 78)' }} className='main-footer'>
      <div className='footer-1'>
        <h5>Follow me on social media:</h5>
        <a href='#' className='insta col'>
          <i className='fa-brands fa-square-instagram'></i>
        </a>
        <a href='#' className='github col'>
          <i className='fa-brands fa-square-github'></i>
        </a>
        <a href='#' className='linkedin col'>
          <i className='fa-brands fa-linkedin'></i>
        </a>
        <a href='#' className='facebook col'>
          <i className='fa-brands fa-square-facebook'></i>
        </a>
      </div>
      <div className='footer-2'>
        <h1>Help</h1>
        <ul>
          <li>
            <a href='#'>Contact us</a>
          </li>
          <li>
            <a href='#'>Privacy policy</a>
          </li>
          <li>
            <a href='#'>Site map</a>
          </li>
          <li>
            <a href='#'>Bug report</a>
          </li>
        </ul>
      </div>
      <div className='footer-3'>
        <footer>
          <p>©2024 Myportfolio. Developed by @vijay__vaddi</p>
        </footer>
      </div>
    </div>
  );
}
