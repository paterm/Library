import React, { Children, FC, isValidElement } from 'react'
import { IfComponent } from './types'
import Else from './Else'
import ElseIf from './ElseIf'


const If: FC<IfComponent> = ({
  condition,
  children,
}) => {
  let hasPositiveElseIf = false

  return (
    <>
      {Children.map(children, (child) => {
        const isElse = isValidElement(child) && child.type === Else
        const isElseIf = isValidElement(child) && child.type === ElseIf

        if (!hasPositiveElseIf && isElseIf) {
          hasPositiveElseIf = isValidElement(child) && Boolean(child.props.condition)
        }

        const hasElse = (isElse && !hasPositiveElseIf) || isElseIf

        return Boolean(condition) !== hasElse ? child : null
      })}
    </>
  )
}

export default If
