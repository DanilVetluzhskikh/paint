import React, { FC } from 'react'
import { ToolProps } from '@interfaces/tool'

export const Button: FC<ToolProps> = ({
  src,
  className,
  name,
  callback
}) => (
  <button onClick={callback} className={`button toolbar-${className}`}>
    <img src={src} alt={name} />
  </button>
)