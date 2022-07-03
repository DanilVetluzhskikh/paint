import React, {
  FC, useRef
} from 'react'
import { ToolProps } from '@interfaces/tool'
import toolState from '@store/toolState'

export const Input: FC<Omit<ToolProps, 'callback'> & Partial<HTMLInputElement>> = (props) => {
  const {
    src, className, name, id
  } = props

  const refInput = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    refInput.current?.click()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if(name === 'picker'){
      return toolState.setFillColor(value)
    }

    toolState.setStokeColor(value)
  }

  return (
    <>
      <img onClick={handleClick} className={`button toolbar-${className}`} src={src} alt={name} />
      <input id={id} onChange={handleChange} ref={refInput} type="color" style={{ opacity: 0 }} />
    </>
  )
}