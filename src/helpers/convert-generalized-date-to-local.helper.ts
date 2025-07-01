import { addMinutes } from 'date-fns/addMinutes'
import { format } from 'date-fns/format'
import { parse } from 'date-fns/parse'

/**
 * Converts a generalized date string to a local date string.
 * @param {string} dateStr - Generalized date string
 * @returns {string} Local date string
 */
export const convertGeneralizedDateToLocal = (dateStr: string): string => {
  const parsedDate = parse(dateStr, 'yyMMddHHmmssX', new Date())

  const timeZoneOffsetInMinutes = new Date().getTimezoneOffset()

  const dateWithTimeZone = addMinutes(parsedDate, -timeZoneOffsetInMinutes)

  const timeZoneOffsetInHours = -timeZoneOffsetInMinutes / 60
  const timeZoneString = `GMT${timeZoneOffsetInHours >= 0 ? '+' : ''}${timeZoneOffsetInHours}`

  return format(dateWithTimeZone, `dd/MM/yyyy HH:mm:ss '${timeZoneString}'`)
}
