import { iRect, Rect } from '../../../../../../../rect';
import { iSymbolCandidate, SymbolCandidate } from './children';
/**
* Structure describes the recognition result of one character from the document text field
*/
export interface iSymbolResult {
    /**
    * Borders of area occupied by the symbol on the image
    * @type {iRect}
    */
    SymbolRect: iRect;
    /**
    * Number of significant elements of ListOfCandidates array
    * @type {number}
    */
    CandidatesCount: number;
    /**
    * Array of candidate symbols. Sorted by descending of probability
    * of recognition (the first element has the highest probability)
    * @type {iSymbolCandidate[]}
    */
    ListOfCandidates: iSymbolCandidate[];
    /**
    * @internal
    * @type {unknown}
    */
    Reserved?: unknown;
}
/**
* Structure describes the recognition result of one character from the document text field
*/
export declare class SymbolResult implements iSymbolResult {
    /**
    * Borders of area occupied by the symbol on the image
    * @type {Rect}
    */
    SymbolRect: Rect;
    /**
    * Number of significant elements of ListOfCandidates array
    * @type {number}
    */
    CandidatesCount: number;
    /**
    * Array of candidate symbols. Sorted by descending of probability
    * of recognition (the first element has the highest probability)
    * @type {SymbolCandidate[]}
    */
    ListOfCandidates: SymbolCandidate[];
    /**
    * @internal
    * @type {unknown}
    */
    Reserved?: unknown;
}
