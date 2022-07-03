import { Input } from '@components/common'
import toolState from '@store/toolState'
import React, { useState } from 'react'
import picker from '@assets/toolbar/picker.png'

export const SettingBar: React.FC = () => {
  const [ value, setValue ] = useState(1)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(Number(e.target.value) > 20){
      const value = 20

      setValue(value)
      toolState.setLineWidth(value)
    }
    else if(Number(e.target.value) < 1){
      const value = 1

      setValue(value)
      toolState.setLineWidth(value)
    }
    else {
      const value = Number(e.target.value)

      setValue(value)
      toolState.setLineWidth(value)
    }

  }

  return (
    <div className='toolbar top'>
      <label htmlFor='width'>Толщина линии</label>
      <input
        id="width"
        type="number"
        value={value}
        onChange={handleChange}
      />

      <label htmlFor="color">Обводка</label>
      <Input
        id="color"
        name="stokeWidth"
        src={picker}
        className='picker'
        type='input'
      />
    </div>
  )
}