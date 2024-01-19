/**
* Enumeration contains a set of identifiers used for identifying document
* reader possibilities, specifying lighting schemes for scanning etc.
* @enum {number}
*/
export enum eLights {
  /**
  * Lighting schemes are off
  */
  OFF = 0x00000000,

  /**
  * OVI scheme
  */
  OVI = 0x00000001,

  /**
  * upper/lower lighters of white light scheme
  */
  WHITE_TOP = 0x00000002,

  /**
  * side lighters of white light scheme
  */
  WHITE_SIDE = 0x00000004,

  /**
  * general white light without separate control of side and upper/lower lighters scheme
  */
  WHITE_FRONT = 0x00800000,

  /**
  * upper/lower lighters of IR light scheme
  */
  IR_TOP = 0x00000008,

  /**
  * side lighters of IR light scheme
  */
  IR_SIDE = 0x00000010,

  /**
  * general IR light without separate control of side and upper/lower lighters scheme
  */
  IR_FRONT = 0x01000000,

  /**
  * general white image converted to grayscale
  */
  WHITE_GRAY = 0x02000000,

  /**
  * OVD light for hologram visualization
  */
  OVD = 0x04000000,

  /**
  * videodetection light for internal use only
  */
  VIDEODETECTION = 0x08000000,

  /**
  * light IR 870 oblique
  */
  IR_870_OBL = 0x10000000,

  /**
  * general UV light scheme
  */
  UV = 0x00000080,

  /**
  * IR luminescence
  */
  IR_LUMINESCENCE = 0x000000100,

  /**
  * left lighter of white coaxial light scheme
  */
  AXIAL_WHITE_LEFT = 0x00000400,

  /**
  * right lighter of white coaxial light scheme
  */
  AXIAL_WHITE_RIGHT = 0x00000800,

  /**
  * coaxial white light without separate control of left and right lighters scheme
  */
  AXIAL_WHITE_FRONT = 0x00000200,

  /**
  * IR720
  */
  IR_720 = 0x00001000,

  /**
  * IR940
  */
  IR_940 = 0x00002000,

  /**
  * upper/lower and side lighters of white light scheme
  */
  WHITE_FULL = WHITE_TOP | WHITE_SIDE,

  /**
  * upper/lower and side lighters of IR light scheme
  */
  IR_FULL = IR_TOP | IR_SIDE,

  /**
  * right and left lighters of white coaxial light scheme
  */
  AXIAL_WHITE_FULL = AXIAL_WHITE_LEFT | AXIAL_WHITE_RIGHT,

  /**
  * for internal use
  */
  RAW_DATA = 0x80000000,

  /**
  * for internal use
  */
  RAW_DATA_GRBG = 0x90000000,

  /**
  * for internal use
  */
  RAW_DATA_GBGR = 0xA0000000,

  /**
  * for internal use
  */
  RAW_DATA_RGGB = 0xB0000000,

  /**
  * for internal use
  */
  RAW_DATA_BGGR = 0xC0000000,

  /**
  * transmitted
  */
  TRANSMITTED = 0x00000020,

  /**
  * transmitted IR
  */
  TRANSMITTED_IR = 0x00000040,

  /**
  * transmitted AntiStokes
  */
  ANTI_STOKES = 0x00010000,

  /**
  * transmitted IR940
  */
  TRANSMITTED_IR940 = 0x00004000,

  /**
  * OVD right
  */
  OVD_RIGHT = 0x00040000,

  /**
  * OVD left
  */
  OVD_LEFT = 0x00020000,

  /**
  * IR 700
  */
  IR_700 = 0x00008000,

  /**
  * Front IR870 (mod. 8803)
  */
  IR_870 = IR_FRONT,

  /**
  * OVD light (hologram visualization) (mod. 8850)
  */
  HOLO = OVD,

  /**
  * for internal use
  */
  IR_BOTTOM = TRANSMITTED_IR,

  /**
  * for internal use
  */
  WHITE_BOTTOM = TRANSMITTED,

  /**
  * UVС 254 (mod. 88X0)
  */
  UVC = 0x00080000,

  /**
  * UVB 313 (mod. 88X0)
  */
  UVB = 0x00100000,

  /**
  * White oblique light
  */
  WHITE_OBL = 0x00200000,

  /**
  * for internal use
  */
  WHITE_SPECIAL = 0x00400000,
}
