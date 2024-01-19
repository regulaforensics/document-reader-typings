import { ValidationError } from 'class-validator';
export declare class DocReaderTypeError extends TypeError {
    errors: ValidationError[];
    constructor(message: string, errors: ValidationError[]);
}
