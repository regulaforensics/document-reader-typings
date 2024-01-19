import { AuthenticityCheckListContainer, DocBarCodeInfoContainer, DocGraphicsInfoContainer, RawImageContainer, BoundsResultContainer, EncryptedRCLContainer, iAuthenticityCheckListContainer, iDocBarCodeInfoContainer, iDocGraphicsInfoContainer, iRawImageContainer, iBoundsResultContainer, iEncryptedRCLContainer, iImageQualityCheckListContainer, iImagesResultContainer, iLicenseContainer, iListVerifiedFieldContainer, ImageQualityCheckListContainer, ImagesResultContainer, iOneCandidateContainer, iStatusContainer, iDocVisualExtendedInfoContainer, iTextResultContainer, LicenseContainer, ListVerifiedFieldContainer, OneCandidateContainer, StatusContainer, DocVisualExtendedInfoContainer, TextResultContainer } from './members';
/**
* Union of all containers
*/
export type uContainer = 
/**
* List of authenticity checks
*/
AuthenticityCheckListContainer | 
/**
* List of barcodes found on the document
*/
DocBarCodeInfoContainer | 
/**
* List of graphic fields found on the document
*/
DocGraphicsInfoContainer | 
/**
* Document image
*/
RawImageContainer | 
/**
* Document position on the image
*/
BoundsResultContainer | 
/**
* Encrypted RCL container
*/
EncryptedRCLContainer | 
/**
* List of image quality checks
*/
ImageQualityCheckListContainer | 
/**
* List of images found on the document
*/
ImagesResultContainer | 
/**
* License container
*/
LicenseContainer | 
/**
* List of verified fields
*/
ListVerifiedFieldContainer | 
/**
* One candidate
*/
OneCandidateContainer | 
/**
* Status
*/
StatusContainer | 
/**
* Text data
*/
DocVisualExtendedInfoContainer | 
/**
* Text result
*/
TextResultContainer;
/**
* Union of all interfaces of containers
*/
export type iuContainer = 
/**
* List of authenticity checks
*/
iAuthenticityCheckListContainer | 
/**
* List of barcodes found on the document
*/
iDocBarCodeInfoContainer | 
/**
* List of graphic fields found on the document
*/
iDocGraphicsInfoContainer | 
/**
* Document image
*/
iRawImageContainer | 
/**
* Document position on the image
*/
iBoundsResultContainer | 
/**
* Encrypted RCL container
*/
iEncryptedRCLContainer | 
/**
* List of image quality checks
*/
iImageQualityCheckListContainer | 
/**
* List of images found on the document
*/
iImagesResultContainer | 
/**
* License container
*/
iLicenseContainer | 
/**
* List of verified fields
*/
iListVerifiedFieldContainer | 
/**
* One candidate
*/
iOneCandidateContainer | 
/**
* Status
*/
iStatusContainer | 
/**
* Text data
*/
iDocVisualExtendedInfoContainer | 
/**
* Text result
*/
iTextResultContainer;
export declare namespace uContainer {
    /**
    * Transform list of unknown items to list of containers
    * @internal
    * @param {unknown[]} items - list of unknown items
    * @returns {uContainer[]} - list of containers
    */
    const transformList: (items: unknown[]) => uContainer[];
}
