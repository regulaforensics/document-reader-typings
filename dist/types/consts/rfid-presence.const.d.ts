/**
* Determines the presence and location of an RFID chip in a document. 0 - no rfid chip; 1 - chip is located in the document data page; 2 - chip is located in the back page or inlay of the document
* @export
*/
export declare enum eRfidPresence {
    /**
    * There is no RFID chip in the document
    */
    NONE = 0,
    /**
    * The RFID chip is located in the document data page
    */
    MAIN_PAGE = 1,
    /**
    * The RFID chip is located in the back page or inlay of the document
    */
    BACK_PAGE = 2
}
