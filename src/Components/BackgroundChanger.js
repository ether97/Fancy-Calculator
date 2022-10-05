import React from 'react'
import './BackgroundChanger.css'
import { useState } from 'react';
import { useEffect } from 'react';

// const bigContainer = document.querySelector('.big-container');

const BackgroundChanger = ({setColor}) => {
    const [click, setClick] = useState(false);

    useEffect(() => {
        if (click)  {
            document.body.style.backgroundColor = 'white'
            setColor({color: 'white', "--changingColor": 'black', "--hoverColor": 'white'})
        }
        else {
            document.body.style.backgroundColor = '#181818'
            setColor({color: 'white', "--changingColor": 'white', "--hoverColor": 'white'})
        }
    }, [click]);

  return (
        <button className='lightdark' onClick={() => setClick(!click)}>{click ? 'DARK MODE' : 'LIGHT MODE'} </button>
  );
}

export default BackgroundChanger
