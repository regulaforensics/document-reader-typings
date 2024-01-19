import { iSymbolResult, SymbolResult } from './children';
/**
* Structure describes a result of recognition of one line of the document multiline text field
*/
export interface iStringResultSDK {
    /**
    * Number of StringResult array elements
    * @type {number}
    */
    SymbolsCount: number;
    /**
    * @internal
    * @type {unknown}
    */
    Reserved?: unknown;
    /**
    * Array of separate characters recognition results
    * @type {iSymbolResult[]}
    */
    StringResult: iSymbolResult[];
}
/**
* Structure describes a result of recognition of one line of the document multiline text field
*/
export declare class StringResultSDK implements iStringResultSDK {
    /**
    * Number of StringResult array elements
    * @type {number}
    */
    SymbolsCount: number;
    /**
    * @internal
    * @type {unknown}
    */
    Reserved?: unknown;
    /**
    * Array of separate characters recognition results
    * @type {SymbolResult[]}
    */
    StringResult: SymbolResult[];
}
