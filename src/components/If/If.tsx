import React, { Children, FC } from 'react'
import { IfCondition } from './types'
import Else from './Else'
import ElseIf from './ElseIf'


const If: FC<IfCondition> = ({
  condition,
  children,
}) => {
  return (
    <>
      {Children.map(children, (Child) => {
        let hasElse = Child && React.isValidElement(Child) && (Child.type === Else || Child.type === ElseIf)
        return Boolean(condition) !== hasElse ? Child : null;
      })}
    </>
  )
}

export default If
