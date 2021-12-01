import React from 'react'

import { SwitchExpressionValue } from '../types'


const Case: React.FC<{ value: SwitchExpressionValue }> = (props) => {
  const { children } = props

  if (!props.hasOwnProperty('value')) {
    throw new TypeError('<Case> requires an `value` prop.')
  }

  return (
    <>{children}</>
  )
}

export default Case
