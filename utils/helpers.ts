export function setMask (value: string | number, pattern: string) {
  let i = 0
  const valueInString = String(value).replace(/\D/g, '')

  // eslint-disable-next-line no-plusplus
  return pattern.replace(/#/g, () => valueInString[i++] || '')
}
