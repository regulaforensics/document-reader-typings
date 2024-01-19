import { iPoint, Point } from '../../../point';
/**
* Structure serves for storage areas
*/
export interface iPointArray {
    /**
    * Array of coordinates of points
    * @type {iPoint[]}
    */
    PointsList: iPoint[];
}
/**
* Structure serves for storage areas
*/
export declare class PointArray implements iPointArray {
    /**
    * Array of coordinates of points
    * @type {Point[]}
    */
    PointsList: Point[];
}
