import React from 'react'
// lib
import { useNavigate } from 'react-router-dom'
// interface
import { TColor, TFontColor, TSize } from 'styled-components'
// styles
import Buttons from './Button.styles'

export type ButtonType = 'BasicButton' | 'RoundButton'

interface IProps {
  type?: ButtonType
  size: TSize
  fontColor?: TFontColor
  bgColor?: TColor
  marginY?: TSize<'zero'>
  marginX?: TSize<'zero'>
  text: string
  link: string
}

const LinkButton: React.FC<IProps> = ({
  type = 'BasicButton',
  size,
  fontColor,
  bgColor,
  marginY,
  marginX,
  text,
  link,
}) => {
  const navigate = useNavigate()
  const onLink = () => {
    navigate(link)
  }
  const ButtonEl = Buttons[type]
  return (
    <ButtonEl
      size={size}
      fontColor={fontColor}
      bgColor={bgColor}
      marginY={marginY}
      marginX={marginX}
      onClick={onLink}
    >
      {text}
    </ButtonEl>
  )
}

LinkButton.defaultProps = {
  type: 'BasicButton',
  fontColor: 'black',
  bgColor: 'white',
  marginY: undefined,
  marginX: undefined,
}

export default LinkButton
