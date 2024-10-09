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

  let dataUintArray: Uint8Array

  try {
    dataUintArray = pako.inflate(uintArray)
  } catch {
    dataUintArray = uintArray
  }

  return new TextDecoder('utf-8').decode(dataUintArray)
}
