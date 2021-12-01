import { useEffect, useState } from 'react'


const useDebounce = <T>(value: T, delay = 600): T => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
      const handler = setTimeout(() => setDebouncedValue(value), delay)
      return () => {
        clearTimeout(handler)
      }
    },
    [value])

  return debouncedValue
}

export default useDebounce
