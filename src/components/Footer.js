import React from 'react'

const Footer = () => {
  return(
    <footer className="footer">
      <div className="container">
      <div className="row">
          <div className="col-md-4">
            <h2>Hindustan Daily</h2>
            <span className="text-muted">One stop for information</span>
            <span className="text-muted">Headlines source: News Api</span>
          </div>
          <div className="col-md-4">
            <h5>Useful links</h5>
            <div>
              <a href="/">Home</a>
            </div>
            <div>
            <a href="/news">News</a>
            </div>
            <div>
            <a href="/entertainment">Entertainment</a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <div>
            <a href="/">Home</a>
            </div>
            <div>
            <a href="/news">News</a>
            </div>
            <div>
            <a href="/entertainment">Entertainment</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
