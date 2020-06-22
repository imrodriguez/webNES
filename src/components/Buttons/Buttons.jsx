import React from 'react'
import { Wrapper } from './Buttons.styles'
import Cross from '../Cross'
import SpecialButtons from '../SpecialButtons'
import ButtonsAB from '../ButtonsAb'

const Buttons = (props) => {
  const actions = (action, event) => {
    let numButton = window.jsnes.Controller[action]

    if (event.type === 'mousedown' || event.type === 'touchstart') {
      window.nes.buttonDown(1,numButton)
    } else if (event.type === 'mouseup' || event.type === 'touchend') {
      window.nes.buttonUp(1,numButton)
    }
  }

  return (
    <>
    <Wrapper>
      <Cross actions={actions}/>
      <ButtonsAB actions={actions}/>
    </Wrapper>
    <SpecialButtons actions={actions}/>
    </>
  )
}

export default Buttons;
