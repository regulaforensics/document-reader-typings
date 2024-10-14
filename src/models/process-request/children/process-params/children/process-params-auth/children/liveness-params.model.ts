import { IsBoolean, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'


/**
 * Authenticity parameters
 */
export interface iLivenessParams {
    /**
     * This parameter is used to enable OVI check
     * Default true
     * @type {boolean|undefined}
     */
    checkOVI?: boolean

    /**
     * This parameter is used to enable MLI check
     * Default true
     * @type {boolean|undefined}
     */
    checkMLI?: boolean

    /**
     * This parameter is used to enable Hologram detection
     * Default true
     * @type {boolean|undefined}
     */
    checkHolo?: boolean

    /**
     * This parameter is used to enable Electronic device detection
     * Default true
     * @type {boolean|undefined}
     */
    checkED?: boolean
}

/**
 * Params for the RFID chip data reprocessing
 */
export class LivenessParams implements iLivenessParams {
    /**
     * This parameter is used to enable OVI check
     * Default true
     * @type {boolean|undefined}
     */
    @Expose()
    @IsOptional()
    @IsBoolean()
    checkOVI?: boolean

    /**
     * This parameter is used to enable MLI check
     * Default true
     * @type {boolean|undefined}
     */
    @Expose()
    @IsOptional()
    @IsBoolean()
    checkMLI?: boolean

    /**
     * This parameter is used to enable Hologram detection
     * Default true
     * @type {boolean|undefined}
     */
    @Expose()
    @IsOptional()
    @IsBoolean()
    checkHolo?: boolean

    /**
     * This parameter is used to enable Electronic device detection
     * Default true
     * @type {boolean|undefined}
     */
    @Expose()
    @IsOptional()
    @IsBoolean()
    checkED?: boolean
}
