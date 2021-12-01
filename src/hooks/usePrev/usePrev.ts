import React, { useEffect, useRef } from 'react'

const usePrev = <T>(value: T): React.MutableRefObject<T | undefined>['current'] => {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default usePrev
