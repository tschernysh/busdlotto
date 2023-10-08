export const formatNumber = (string) => {
  string = string.toString()
  let a = string.split('.')[0]
  let b = string.split('.')[1]

  let formatResult = a.split('').reverse().join('')
    .match(/\d{0,3}/g).join(' ')
    .split('').reverse().join('').trim()

  if (b) {
    return formatResult + '.' + b
  }
  return formatResult
}
