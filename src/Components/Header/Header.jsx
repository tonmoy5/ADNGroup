import React from 'react'
import './Header.css'
import img from '../../Media/ImageHeaderPhoto.png'

const Header = () => {
  return (
    <section className="header">
      <div className="wrapper">


        <div className="left">
          <div className="top">
            <div className="text">DONATE</div>
          </div>

          <div className="bottom">
            <h1 className="heading">
              Making a donation for Nature.
            </h1>
            <p className="paragraph">
              When you donate, you’re supporting effective solutions to big environmental challenges—an investment in the future of our planet.
            </p>
            <button className="btn">
              Donate now
            </button>
          </div>
        </div>


        <div className="right">
          <img src={img} alt="" className='photo' />
        </div>
      </div>
    </section>
  )
}

export default Header