import { eDocFormat } from '../../../consts';
import { Point } from '../point';
/**
* Structure is used for storing document bounds detection result
*/
export interface iBoundsResult {
    /**
    * Document format
    * @type {eDocFormat}
    */
    docFormat: eDocFormat;
    /**
    * Document width
    * @type {number}
    */
    Width: number;
    /**
    * Document height
    * @type {number}
    */
    Height: number;
    /**
    * Document center coordinates
    * @type {Point}
    */
    Center: Point;
    /**
    * Document rotation angle
    * @type {number}
    */
    Angle: number;
    /**
    * Document left bottom corner coordinates
    * @type {Point}
    */
    LeftBottom: Point;
    /**
    * Document left top corner coordinates
    * @type {Point}
    */
    LeftTop: Point;
    /**
    * Document right bottom corner coordinates
    * @type {Point}
    */
    RightBottom: Point;
    /**
    * Document right top corner coordinates
    * @type {Point}
    */
    RightTop: Point;
    /**
    * Resolution in dots per inch
    * @type {number}
    */
    Dpi: number;
}
/**
* This model is used for storing document bounds detection result
*/
export declare class BoundsResult implements iBoundsResult {
    /**
    * Document format
    * @type {eDocFormat}
    */
    docFormat: eDocFormat;
    /**
    * Document width
    * @type {number}
    */
    Width: number;
    /**
    * Document height
    * @type {number}
    */
    Height: number;
    /**
    * Document center coordinates
    * @type {Point}
    */
    Center: Point;
    /**
    * Document rotation angle
    * @type {number}
    */
    Angle: number;
    /**
    * Document left bottom corner coordinates
    * @type {Point}
    */
    LeftBottom: Point;
    /**
    * Document left top corner coordinates
    * @type {Point}
    */
    LeftTop: Point;
    /**
    * Document right bottom corner coordinates
    * @type {Point}
    */
    RightBottom: Point;
    /**
    * Document right top corner coordinates
    * @type {Point}
    */
    RightTop: Point;
    /**
    * Resolution in dots per inch
    * @type {number}
    */
    Dpi: number;
}
