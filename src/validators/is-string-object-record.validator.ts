import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator'

import { isObject } from '~/src/helpers'


export const IsStringObjectRecord = (validationOptions?: ValidationOptions): PropertyDecorator =>
  (object: Record<string, any>, propertyName: string | symbol): void => {
    registerDecorator({
      name: 'IsStringObjectRecord',
      target: object.constructor,
      propertyName: String(propertyName),
      constraints: [],
      options: {
        message: `${String(propertyName)} must be a Record<string, object>`,
        ...validationOptions,
      },
      validator: {
        validate(value: Record<string, any>, args: ValidationArguments): boolean {
          if (!isObject(value)) {
            return false
          }

          if (Object.keys(value).length === 0) {
            return true
          }

          const keys = Object.keys(value)

          return keys.every(key => {
            if (typeof key !== 'string') {
              return false
            }

            if (!isObject(value[key])) {
              return false
            }

            return true
          })
        },
      },
    })
  }
