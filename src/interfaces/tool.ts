import React from 'react'

export type Tool = {
    name: string,
    className: string,
    src: string,
    type: 'input' | 'button'
}

export type ToolProps = Tool & {
    callback: () => void
}
