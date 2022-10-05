import React from 'react'
import './ColorPallette.css';

const ColorPallette = ({ block, setColor}) => {
  return (
    <div className={block ? 'btn-container block' : 'btn-container'}>
        <button onClick={() => setColor({color: '#00ff00', "--changingColor": '#00ff00', "--hoverColor": '#00ff00'})}>Green
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <button onClick={() => setColor({color: '#00ffff', "--changingColor": '#00ffff', "--hoverColor": '#00ffff'})}>Blue
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <button onClick={() => setColor({color: '#ff00c8', "--changingColor": '#ff00c8', "--hoverColor": '#ff00c8'})}>Pink
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <button onClick={() => setColor({color: '#ffff00', "--changingColor": '#ffff00', "--hoverColor": '#ffff00'})}>Yellow
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <button onClick={() => setColor({color: '#ffa500', "--changingColor": '#ffa500', "--hoverColor": '#ffa500'})}>Orange
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <button onClick={() => setColor({color: '#ff0000', "--changingColor": '#ff0000', "--hoverColor": '#ff0000'})}>Red
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
  )
}

export default ColorPallette
