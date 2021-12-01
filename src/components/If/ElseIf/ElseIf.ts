import React, { createElement } from 'react'
import If from '../If'
import { IfComponent } from '../types'


const ElseIf: React.FC<IfComponent> = (props) => {
  return createElement(If, props)
}

export default ElseIf
