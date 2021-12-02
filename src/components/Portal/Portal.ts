import { FC } from 'react'

import { createPortal } from 'react-dom'

import { PortalComponent } from './types'


const Portal: FC<PortalComponent> = ({
  children,
  container = document.body,
}) => (
  createPortal(children, container)
)

export default Portal
