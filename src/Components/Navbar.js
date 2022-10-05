import React from 'react'
import BackgroundChanger from './BackgroundChanger'
import './ColorPallette.css'

const Navbar = ({setColor}) => {
  return (
      <ul>
        <li>
            <BackgroundChanger setColor={setColor} />
        </li>
        <li className='dropdown'>
            PALLETTE
            <div className='btn-container'>
                <button onClick={() => setColor({color: '#00ff00', "--changingColor": '#00ff00', "--hoverColor": '#00ff00'})}>Green
                </button>
                <button onClick={() => setColor({color: '#00ffff', "--changingColor": '#00ffff', "--hoverColor": '#00ffff'})}>Blue
                </button>
                <button onClick={() => setColor({color: '#ff00c8', "--changingColor": '#ff00c8', "--hoverColor": '#ff00c8'})}>Pink
                </button>
                <button onClick={() => setColor({color: '#ffff00', "--changingColor": '#ffff00', "--hoverColor": '#ffff00'})}>Yellow
                </button>
                <button onClick={() => setColor({color: '#ffa500', "--changingColor": '#ffa500', "--hoverColor": '#ffa500'})}>Orange
                </button>
                <button onClick={() => setColor({color: '#ff0000', "--changingColor": '#ff0000', "--hoverColor": '#ff0000'})}>Red
                </button>
            </div>
        </li>
      </ul>
  )
}

export default Navbar
