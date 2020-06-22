import React from 'react'
import { Wrapper, Up, Down, Left, Right } from './Cross.styles'

const Cross = (props) => { 
  return (
      <Wrapper>
        <Up 
        onMouseDown={(event) => props.actions('BUTTON_UP', event)} 
        onMouseUp={(event) => props.actions('BUTTON_UP', event)}
        onTouchStart={(event) => props.actions('BUTTON_UP', event)}
        onTouchEnd={(event) => props.actions('BUTTON_UP', event)}
        />
        <Down 
        onMouseDown={(event) => props.actions('BUTTON_DOWN', event)} 
        onMouseUp={(event) => props.actions('BUTTON_DOWN', event)}
        onTouchStart={(event) => props.actions('BUTTON_DOWN', event)}
        onTouchEnd={(event) => props.actions('BUTTON_DOWN', event)}
        />
        <Left 
        onMouseDown={(event) => props.actions('BUTTON_LEFT', event)} 
        onMouseUp={(event) => props.actions('BUTTON_LEFT', event)}
        onTouchStart={(event) => props.actions('BUTTON_LEFT', event)}
        onTouchEnd={(event) => props.actions('BUTTON_LEFT', event)}
        />
        <Right 
        onMouseDown={(event) => props.actions('BUTTON_RIGHT', event)} 
        onMouseUp={(event) => props.actions('BUTTON_RIGHT', event)}
        onTouchStart={(event) => props.actions('BUTTON_RIGHT', event)}
        onTouchEnd={(event) => props.actions('BUTTON_RIGHT', event)}
        />
      </Wrapper>
  )
}

export default Cross