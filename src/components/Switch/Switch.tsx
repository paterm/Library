import React, { Children, ReactNode } from 'react'

import Case from './Case'
import Default from './Default'
import { SwitchComponent } from './types'


const Switch: React.FC<SwitchComponent> = ({
  expression,
  children,
}) => {
  const count = Children.count(children)
  let match: ReactNode = null

  Children.forEach(children, (Child, index) => {
    if (match) return

    if (React.isValidElement(Child) && Child.type !== Case && Child.type !== Default) {
      throw new TypeError('<Switch> requires a child of type <Case>, <Default>, or null.')
    }

    if (index + 1 === count) {
      if (React.isValidElement(Child) && Child.type === Default) {
        match = Child
      }
    } else {
      if (React.isValidElement(Child) && Child.type === Default) {
        throw new TypeError('<Default> is required to be the last node if present.')
      }
    }

    if (React.isValidElement(Child) && Child.props.value === expression) {
      match = Child;
    }
  })

  return <>{match}</>
}

export default Switch
