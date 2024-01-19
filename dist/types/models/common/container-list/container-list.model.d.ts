import { iuContainer, uContainer } from './children';
export interface iContainerList {
    /**
    * Number of containers with results
    * @type {number}
    */
    Count: number;
    /**
    * List of containers with results
    * @type {iuContainer[]}
    */
    List: iuContainer[];
}
export declare class ContainerList implements iContainerList {
    Count: number;
    /**
    * List of containers with results
    * @type {uContainer[]}
    */
    List: uContainer[];
}
