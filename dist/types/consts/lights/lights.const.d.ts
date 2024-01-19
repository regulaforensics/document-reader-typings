/**
* Enumeration contains a set of identifiers used for identifying document
* reader possibilities, specifying lighting schemes for scanning etc.
* @enum {number}
*/
export declare enum eLights {
    /**
    * Lighting schemes are off
    */
    OFF = 0,
    /**
    * OVI scheme
    */
    OVI = 1,
    /**
    * upper/lower lighters of white light scheme
    */
    WHITE_TOP = 2,
    /**
    * side lighters of white light scheme
    */
    WHITE_SIDE = 4,
    /**
    * general white light without separate control of side and upper/lower lighters scheme
    */
    WHITE_FRONT = 8388608,
    /**
    * upper/lower lighters of IR light scheme
    */
    IR_TOP = 8,
    /**
    * side lighters of IR light scheme
    */
    IR_SIDE = 16,
    /**
    * general IR light without separate control of side and upper/lower lighters scheme
    */
    IR_FRONT = 16777216,
    /**
    * general white image converted to grayscale
    */
    WHITE_GRAY = 33554432,
    /**
    * OVD light for hologram visualization
    */
    OVD = 67108864,
    /**
    * videodetection light for internal use only
    */
    VIDEODETECTION = 134217728,
    /**
    * light IR 870 oblique
    */
    IR_870_OBL = 268435456,
    /**
    * general UV light scheme
    */
    UV = 128,
    /**
    * IR luminescence
    */
    IR_LUMINESCENCE = 256,
    /**
    * left lighter of white coaxial light scheme
    */
    AXIAL_WHITE_LEFT = 1024,
    /**
    * right lighter of white coaxial light scheme
    */
    AXIAL_WHITE_RIGHT = 2048,
    /**
    * coaxial white light without separate control of left and right lighters scheme
    */
    AXIAL_WHITE_FRONT = 512,
    /**
    * IR720
    */
    IR_720 = 4096,
    /**
    * IR940
    */
    IR_940 = 8192,
    /**
    * upper/lower and side lighters of white light scheme
    */
    WHITE_FULL = 6,
    /**
    * upper/lower and side lighters of IR light scheme
    */
    IR_FULL = 24,
    /**
    * right and left lighters of white coaxial light scheme
    */
    AXIAL_WHITE_FULL = 3072,
    /**
    * for internal use
    */
    RAW_DATA = 2147483648,
    /**
    * for internal use
    */
    RAW_DATA_GRBG = 2415919104,
    /**
    * for internal use
    */
    RAW_DATA_GBGR = 2684354560,
    /**
    * for internal use
    */
    RAW_DATA_RGGB = 2952790016,
    /**
    * for internal use
    */
    RAW_DATA_BGGR = 3221225472,
    /**
    * transmitted
    */
    TRANSMITTED = 32,
    /**
    * transmitted IR
    */
    TRANSMITTED_IR = 64,
    /**
    * transmitted AntiStokes
    */
    ANTI_STOKES = 65536,
    /**
    * transmitted IR940
    */
    TRANSMITTED_IR940 = 16384,
    /**
    * OVD right
    */
    OVD_RIGHT = 262144,
    /**
    * OVD left
    */
    OVD_LEFT = 131072,
    /**
    * IR 700
    */
    IR_700 = 32768,
    /**
    * Front IR870 (mod. 8803)
    */
    IR_870 = 16777216,
    /**
    * OVD light (hologram visualization) (mod. 8850)
    */
    HOLO = 67108864,
    /**
    * for internal use
    */
    IR_BOTTOM = 64,
    /**
    * for internal use
    */
    WHITE_BOTTOM = 32,
    /**
    * UVС 254 (mod. 88X0)
    */
    UVC = 524288,
    /**
    * UVB 313 (mod. 88X0)
    */
    UVB = 1048576,
    /**
    * White oblique light
    */
    WHITE_OBL = 2097152,
    /**
    * for internal use
    */
    WHITE_SPECIAL = 4194304
}
