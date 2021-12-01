import React, { createElement } from 'react'
import If from '../If'
import { IfCondition } from '../types'


const ElseIf: React.FC<IfCondition> = (props) => {
  return createElement(If, props)
}

export default ElseIf
