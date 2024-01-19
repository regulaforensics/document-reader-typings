import { eLights, eResultType } from '../../../../../consts';
export declare abstract class aContainer {
    /**
    * Lighting scheme code for the given result (used only for images)
    * @type {number}
    */
    light: number;
    /**
    * @internal
    */
    list_idx: number;
    /**
    * Page index (when working with multi-page document)
    * @type {number}
    */
    page_idx: number;
    /**
    * @internal
    */
    buf_length: number;
    /**
    * Result type stored in this container (one of ResultType identifiers)
    * @type {eResultType}
    */
    result_type: eResultType;
    /**
    * Get lighting scheme
    *
    * @param {DocumentPositionContainer|number} input - input
    * @returns {eLights[]}
    */
    static getLightingScheme: (input: aContainer | number) => eLights[];
}
