import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h1 className='footer-h1'>Task Tracker </h1>
      </div>
      <div className='footer-p'>
        <p>
          © 2025 Task Manager Inc. | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Terms of Service</a>
        </p>
        <p>
          Follow us :
          <span 
            style={{
              marginLeft: "10px",
              gap: "10px",
            }}
         >
            <a href="https://facebook.com">Facebook</a> |
            <a href="https://twitter.com">Twitter</a> |
            <a href="https://instagram.com">Instagram</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer
