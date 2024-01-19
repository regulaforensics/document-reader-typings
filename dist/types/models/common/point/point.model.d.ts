/**
* Point coordinates
*/
export interface iPoint {
    /**
    * X coordinate
    * @type {number}
    */
    x: number;
    /**
    * Y coordinate
    * @type {number}
    */
    y: number;
}
/**
* Point coordinates
*/
export declare class Point implements iPoint {
    /**
    * X coordinate
    * @param {number} [x=0]
    */
    x: number;
    /**
    * Y coordinate
    * @param {number} [y=0]
    */
    y: number;
}
