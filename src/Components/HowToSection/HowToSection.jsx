import React from 'react'
import Tabs from '../Tabs/Tabs'
import './HowToSection.css'

const HowToSection = () => {
  return (
    <div className="howto">
      <div className="Howto_wrapper">
        <div className="left">
          <h1 className="howtotitle">
            How you can contribute to protect Earth
          </h1>
          <p className="hotoSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
        <div className="right">
          <Tabs />
        </div>
      </div>
    </div>
  )
}

export default HowToSection