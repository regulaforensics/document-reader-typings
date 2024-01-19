import { iRect, Rect } from '../rect';
import { iPointArray, PointArray } from './children';
/**
* Structure serves for storage areas and contours.
*/
export interface iAreaArray {
    /**
    * Number of elements in List and Points
    * @type {number}
    */
    Count: number;
    /**
    * Array of areas
    * @type {iRect[]}
    */
    List: iRect[];
    /**
    * Array of points
    * @type {iPointArray[]}
    */
    Points: iPointArray[];
}
/**
* Structure serves for storage areas and contours.
*/
export declare class AreaArray implements iAreaArray {
    /**
    * Number of elements in List and Points
    * @type {number}
    */
    Count: number;
    /**
    * Array of areas
    * @type {Rect[]}
    */
    List: Rect[];
    /**
    * Array of points
    * @type {PointArray[]}
    */
    Points: PointArray[];
}
