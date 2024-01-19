/**
* Structure describes one candidate for character recognition
*/
export interface iSymbolCandidate {
    /**
    * ASCII symbol code
    * @type {number}
    */
    SymbolCode: number;
    /**
    * Symbol recognition probability (0–100, %)
    * @type {number}
    */
    SymbolProbability: number;
    /**
    * @internal
    * @type {unknown}
    */
    Reserved?: unknown;
}
/**
* Structure describes one candidate for character recognition
*/
export declare class SymbolCandidate implements iSymbolCandidate {
    /**
    * ASCII symbol code
    * @type {number}
    */
    SymbolCode: number;
    /**
    * Symbol recognition probability (0–100, %)
    * @type {number}
    */
    SymbolProbability: number;
    /**
    * @internal
    * @type {unknown}
    */
    Reserved?: unknown;
}
