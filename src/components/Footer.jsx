import React from 'react'
import linkedin from "../assets/icons/linkedin.png"
import youtube from "../assets/icons/youtube.png"
import website from "../assets/icons/website.png"
import github from "../assets/icons/github.png"

function Footer() {

  const year = new Date().getFullYear()

  return (
    <div className='footer-container'>
      <div className="container">
        <footer className="text-center text-lg-start">
          <div className="container d-flex justify-content-center py-4">

            <a href="https://davidcao.xyz" target="_blank">
              <button type="button" className="btn btn-lg btn-floating mx-2">
                <img src={website}></img>
              </button>
            </a>

            <a href="https://github.com/dave-cao/Book-Chronicles" target="_blank">
              <button type="button" className="btn btn-lg btn-floating mx-2">
                <img src={github}></img>
              </button>
            </a>

            <a href="https://www.linkedin.com/in/david-cao99/" target="_blank">
              <button type="button" className="btn btn-lg btn-floating mx-2">
                <img src={linkedin}></img>
              </button>
            </a>
            <a href="https://www.youtube.com/@sirdavidcao" target="_blank">
              <button type="button" className="btn btn-lg btn-floating mx-2">
                <img src={youtube}></img>
              </button>
            </a>
          </div>
          <div className='footer-name'>Made by David Cao © {year}</div>
        </footer>
      </div >

    </div >
  )
}

export default Footer
