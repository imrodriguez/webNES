import React from 'react'
import { Wrapper, Special } from './SpecialButtons.styles'

const SpecialButtons = (props) => (
    <Wrapper>
      <Special label="start" 
      onMouseDown={(event) => props.actions('BUTTON_START', event)} 
      onMouseUp={(event) => props.actions('BUTTON_START', event)}
      onTouchStart={(event) => props.actions('BUTTON_START', event)}
      onTouchEnd={(event) => props.actions('BUTTON_START', event)}
      />
      <Special label="select" 
      onMouseDown={(event) => props.actions('BUTTON_SELECT', event)} 
      onMouseUp={(event) => props.actions('BUTTON_SELECT', event)}
      onTouchStart={(event) => props.actions('BUTTON_SELECT', event)}
      onTouchEnd={(event) => props.actions('BUTTON_SELECT', event)}
      />
    </Wrapper>
)

export default SpecialButtons
