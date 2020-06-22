import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Wrapper, Center, Grid } from './App.styles'
import Buttons from '../Buttons'
import { useDropzone } from 'react-dropzone'
import { useTranslation } from 'react-i18next'
import data from '../../data/games'

const App = (props) => {
  const [rom, setRom] = useState()
  const canvasEl = useRef()
  const { t } = useTranslation()
  
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles[0].name.includes('.nes')) {
      setRom(URL.createObjectURL(acceptedFiles[0]))
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const loadRom = (rom) => {
    setRom(window.location.href + rom)
  }

  useEffect(() => {
    if (rom) window.nes_load_url(canvasEl.current, rom)
  }, [rom])

  if (!rom) {
    return (
      <Wrapper>
        <h1><img src="images/logoinvert.png" alt="webnes"/></h1>
        
        <Center>
        <Grid>
          <div>
            <h2>{t(`Select a example ROM`)}</h2>
            <ul>
              {data.games.map((game, index) => {
                return <li key={index} onClick={() => loadRom(`/roms/${game}`)}>{game}</li>
              })}
            </ul>
          </div>
          <div {...getRootProps()}>
            <h2>{t(`Or use your own ROM here`)}</h2>
            <i className='bx bx-upload'></i>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p className="text" >{t(`Drop the files here ...`)}</p> :
                <p className="text">{t(`Drag 'n' drop some files here, or click to select files`)}</p>
            }
          </div>
        </Grid>
        </Center>
        <footer>
          <a href="https://imrodriguez.com">imrodriguez.com</a> 
        </footer>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <canvas id="gameCanvas" width="256" height="240" ref={canvasEl}></canvas>
      <Buttons/>
    </Wrapper>
  )
}

export default App
