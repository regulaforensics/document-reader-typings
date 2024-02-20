import pako from 'pako'


/**
* Decode the packed data
* @param {string} data - packed data
* @returns {string} - unpacked data
*/
export const decode = (data: string): string => {
  const decoded = typeof atob !== 'undefined' ? atob(data) : Buffer.from(data, 'base64').toString('binary')

  const uintArray = new Uint8Array(decoded.length)
  for (let i = 0; i < decoded.length; i++) {
    uintArray[i] = decoded.charCodeAt(i)
  }

  let dataUintArray

  try {
    const currentDataUintArray = pako.inflate(uintArray)

    dataUintArray = currentDataUintArray.length > uintArray.length ? currentDataUintArray : uintArray
  } catch {
    dataUintArray = uintArray
  }

  const uintArraySize = dataUintArray.length
  const step = 10000
  const result = []

  const convertedUnitArray = Array.from(dataUintArray)

  for (let i = 0; i < uintArraySize; i += step) {
    const chunk = String.fromCharCode.apply(null, convertedUnitArray.slice(i, i + step))
    result.push(chunk)
  }

  return result.join('')
}
