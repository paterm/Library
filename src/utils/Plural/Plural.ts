import { PluralUtil } from './types'

const Plural: PluralUtil = (n, words) => {
  const number = Math.abs(n)
  let resultWord

  if (number % 100 > 10 && number % 100 < 20) {
    resultWord = words[2]
  } else if (number % 10 === 1) {
    resultWord = words[0]
  } else if (number % 10 >= 2 && number % 10 <= 4) {
    resultWord = words[1]
  } else {
    resultWord = words[2]
  }

  return `${n} ${resultWord}`
}

export default Plural
