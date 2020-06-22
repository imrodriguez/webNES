import React from 'react'
import { Wrapper, Button } from './ButtonsAb.styles'

const ButtonsAb = (props) => (
  <Wrapper>
      <Button label="A" 
      onMouseDown={(event) => props.actions('BUTTON_A', event)} 
      onMouseUp={(event) => props.actions('BUTTON_A', event)}
      onTouchStart={(event) => props.actions('BUTTON_A', event)}
      onTouchEnd={(event) => props.actions('BUTTON_A', event)}
      />
      <Button label="B" 
      onMouseDown={(event) => props.actions('BUTTON_B', event)} 
      onMouseUp={(event) => props.actions('BUTTON_B', event)}
      onTouchStart={(event) => props.actions('BUTTON_B', event)}
      onTouchEnd={(event) => props.actions('BUTTON_B', event)}
      />
  </Wrapper>
)

export default ButtonsAb
