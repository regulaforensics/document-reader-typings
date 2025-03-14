/**
* Locale id. Used to tag same typed fields declared in several languages.
* For example: name can be provided in both native and latin variants.
* Based on Microsoft locale id (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-lcid/70feba9f-294e-491e-b6eb-56532684c37f).
* @enum {number}
*/
export enum eLCID {
  /**
  * Latin
  */
  LATIN = 0,

  /**
  * Afrikaans
  */
  AFRIKAANS = 1078,

  /**
  * Albanian
  */
  ALBANIAN = 1052,

  /**
  * Arabic (Algeria)
  */
  ARABIC_ALGERIA = 5121,

  /**
  * Arabic (Bahrain)
  */
  ARABIC_BAHRAIN = 15361,

  /**
  * Arabic (Egypt)
  */
  ARABIC_EGYPT = 3073,

  /**
  * Arabic (Iraq)
  */
  ARABIC_IRAQ = 2049,

  /**
  * Arabic (Jordan)
  */
  ARABIC_JORDAN = 11265,

  /**
  * Arabic (Kuwait)
  */
  ARABIC_KUWAIT = 13313,

  /**
  * Arabic (Lebanon)
  */
  ARABIC_LEBANON = 12289,

  /**
  * Arabic (Libya)
  */
  ARABIC_LIBYA = 4097,

  /**
  * Arabic (Morocco)
  */
  ARABIC_MOROCCO = 6145,

  /**
  * Arabic (Oman)
  */
  ARABIC_OMAN = 8193,

  /**
  * Arabic (Qatar)
  */
  ARABIC_QATAR = 16385,

  /**
  * Arabic (Saudi Arabia)
  */
  ARABIC_SAUDI_ARABIA = 1025,

  /**
  * Arabic (Syria)
  */
  ARABIC_SYRIA = 10241,

  /**
  * Arabic (Tunisia)
  */
  ARABIC_TUNISIA = 7169,

  /**
  * Arabic (U.A.E.)
  */
  ARABIC_UAE = 14337,

  /**
  * Arabic (Yemen)
  */
  ARABIC_YEMEN = 9217,

  /**
  * Armenian
  */
  ARABIC_ARMENIAN = 1067,

  /**
  * Azeri (Cyrillic)
  */
  AZERI_CYRILIC = 2092,

  /**
  * Azeri (Latin)
  */
  AZERI_LATIN = 1068,

  /**
  * Basque
  */
  BASQUE = 1069,

  /**
  * Belarusian
  */
  BELARUSIAN = 1059,

  /**
  * Bulgarian
  */
  BULGARIAN = 1026,

  /**
  * Burmese
  */
  BURMESE = 1109,

  /**
  * Catalan
  */
  CATALAN = 1027,

  /**
  * Chinese (HongKong S.A.R.)
  */
  CHINESE_HONGKONG_SAR = 3076,

  /**
  * Chinese (Macao S.A.R.)
  */
  CHINESE_MACAO_SAR = 5124,

  /**
  * Chinese
  */
  CHINESE = 2052,

  /**
  * Chinese (Singapore)
  */
  CHINESE_SINGAPORE = 4100,

  /**
  * Chinese (Taiwan)
  */
  CHINESE_TAIWAN = 1028,

  /**
  * Croatian
  */
  CROATIAN = 1050,

  /**
  * Czech
  */
  CZECH = 1029,

  /**
  * Danish
  */
  DANISH = 1030,

  /**
  * Divehi
  */
  DIVEHI = 1125,

  /**
  * Dutch (Belgium)
  */
  DUTCH_BELGIUM = 2067,

  /**
  * Dutch (Netherlands)
  */
  DUTCH_NETHERLANDS = 1043,

  /**
  * English (Australia)
  */
  ENGLISH_AUSTRALIA = 3081,

  /**
  * English (Belize)
  */
  ENGLISH_BELIZE = 10249,

  /**
  * English (Canada)
  */
  ENGLISH_CANADA = 4105,

  /**
  * English (Caribbean)
  */
  ENGLISH_CARRIBEAN = 9225,

  /**
  * English (Ireland)
  */
  ENGLISH_IRELAND = 6153,

  /**
  * English (Jamaica)
  */
  ENGLISH_JAMAICA = 8201,

  /**
  * English (New Zealand)
  */
  ENGLISH_NEW_ZEALAND = 5129,

  /**
  * English (Philippines)
  */
  ENGLISH_PHILIPPINES = 13321,

  /**
  * English (South Africa)
  */
  ENGLISH_SOUTH_AFRICA = 7177,

  /**
  * English (Trinidad)
  */
  ENGLISH_TRINIDAD = 11273,

  /**
  * English (United Kingdom)
  */
  ENGLISH_UK = 2057,

  /**
  * English (United States)
  */
  ENGLISH_US = 1033,

  /**
  * English (Zimbabwe)
  */
  ENGLISH_ZIMBABWE = 12297,

  /**
  * Estonian
  */
  ESTONIAN = 1061,

  /**
  * Faeroese
  */
  FAEROESE = 1080,

  /**
  * Farsi
  */
  FARSI = 1065,

  /**
  * Finnish
  */
  FINNISH = 1035,

  /**
  * French (Belgium)
  */
  FRENCH_BELGIUM = 2060,

  /**
  * French (Canada)
  */
  FRENCH_CANADA = 3084,

  /**
  * French (France)
  */
  FRENCH_FRANCE = 1036,

  /**
  * French (Luxembourg)
  */
  FRENCH_LUXEMBOURG = 5132,

  /**
  * French (Monaco)
  */
  FRENCH_MONACO = 6156,

  /**
  * French (Switzerland)
  */
  FRENCH_SWITZERLAND = 4108,

  /**
  * FYRO Macedonian
  */
  FYRO_MACEDONIAN = 1071,

  /**
  * Galician
  */
  GALICIAN = 1110,

  /**
  * Sinhala
  */
  SINHALA = 1115,

  /**
  * Georgian
  */
  GEORGIAN = 1079,

  /**
  * German (Austria)
  */
  GERMAN_AUSTRIA = 3079,

  /**
  * German (Germany)
  */
  GERMAN_GERMANY = 1031,

  /**
  * German (Liechtenstein)
  */
  GERMAN_LIECHTENSTEIN = 5127,

  /**
  * German (Luxembourg)
  */
  GERMAN_LUXEMBOURG = 4103,

  /**
  * German (Switzerland)
  */
  GERMAN_SWITZERLAND = 2055,

  /**
  * Greek
  */
  GREEK = 1032,

  /**
  * Gujarati
  */
  GUJARATI = 1095,

  /**
  * Hebrew
  */
  HEBREW = 1037,

  /**
  * Hindi (India)
  */
  HINDI_INDIA = 1081,

  /**
  * Hungarian
  */
  HUNGARIAN = 1038,

  /**
  * Icelandic
  */
  ICELANDIC = 1039,

  /**
  * Indonesian
  */
  INDONESIAN = 1057,

  /**
  * Italian (Italy)
  */
  ITALIAN_ITALY = 1040,

  /**
  * Italian (Switzerland)
  */
  ITALIAN_SWITZERLAND = 2064,

  /**
  * Japanese
  */
  JAPANESE = 1041,

  /**
  * Kannada
  */
  KANNADA = 1099,

  /**
  * Kazakh
  */
  KAZAKH = 1087,

  /**
  * Khmer
  */
  KHMER = 1107,

  /**
  * Konkani
  */
  KONKANI = 1111,

  /**
  * Korean
  */
  KOREAN = 1042,

  /**
  * Kyrgyz (Cyrillic)
  */
  KYRGYZ_CYRILICK = 1088,

  /**
  * Latvian
  */
  LATVIAN = 1062,

  /**
  * Lithuanian
  */
  LITHUANIAN = 1063,

  /**
  * Malay (Malaysia)
  */
  MALAY_MALAYSIA = 1086,

  /**
  * Malay (Brunei Darussalam)
  */
  MALAY_BRUNEI_DARUSSALAM = 2110,

  /**
  * Maltese
  */
  MALTESE = 1082,

  /**
  * Marathi
  */
  MARATHI = 1102,

  /**
  * Mongolian (Cyrillic)
  */
  MONGOLIAN_CYRILIC = 1104,

  /**
  * Norwegian (Bokmal)
  */
  NORWEGIAN_BOKMAL = 1044,

  /**
  * Norwegian (Nynorsk)
  */
  NORWEGIAN_NYORSK = 2068,

  /**
  * Polish
  */
  POLISH = 1045,

  /**
  * Portuguese (Brazil)
  */
  PORTUGUESE_BRAZIL = 1046,

  /**
  * Portuguese (Portugal)
  */
  PORTUGUESE_PORTUGAL = 2070,

  /**
  * Punjabi
  */
  PUNJABI = 1094,

  /**
  * Rhaeto-Romanic
  */
  RHAETO_ROMANIC = 1047,

  /**
  * Romanian
  */
  ROMANIAN = 1048,

  /**
  * Russian
  */
  RUSSIAN = 1049,

  /**
  * Sanskrit
  */
  SANSKRIT = 1103,

  /**
  * Serbian (Cyrillic)
  */
  SERBIAN_CYRILIC = 3098,

  /**
  * Serbian (Latin)
  */
  SERBIAN_LATIN = 2074,

  /**
  * Slovak
  */
  SLOVAK = 1051,

  /**
  * Slovenian
  */
  SLOVENIAN = 1060,

  /**
  * Spanish (Argentina)
  */
  SPANISH_ARGENTINA = 11274,

  /**
  * Spanish (Bolivia)
  */
  SPANISH_BOLIVIA = 16394,

  /**
  * Spanish (Chile)
  */
  SPANISH_CHILE = 13322,

  /**
  * Spanish (Colombia)
  */
  SPANICH_COLOMBIA = 9226,

  /**
  * Spanish (Costa Rica)
  */
  SPANISH_COSTA_RICA = 5130,

  /**
  * Spanish (Dominican Republic)
  */
  SPANISH_DOMINICAN_REPUBLIC = 7178,

  /**
  * Spanish (Ecuador)
  */
  SPANISH_ECUADOR = 12298,

  /**
  * Spanish (El Salvador)
  */
  SPANISH_EL_SALVADOR = 17418,

  /**
  * Spanish (Guatemala)
  */
  SPANISH_GUATEMALA = 4106,

  /**
  * Spanish (Honduras)
  */
  SPANISH_HONDURAS = 18442,

  /**
  * Spanish (Mexico)
  */
  SPANISH_MEXICO = 2058,

  /**
  * Spanish (Nicaragua)
  */
  SPANISH_NICARAGUA = 19466,

  /**
  * Spanish (Panama)
  */
  SPANISH_PANAMA = 6154,

  /**
  * Spanish (Paraguay)
  */
  SPANISH_PARAGUAY = 15370,

  /**
  * Spanish (Peru)
  */
  SPANISH_PERU = 10250,

  /**
  * Spanish (Puerto Rico)
  */
  SPANISH_PUERTO_RICO = 20490,

  /**
  * Spanish (Traditional Sort)
  */
  SPANISH_TRADITIONAL_SORT = 1034,

  /**
  * Spanish (International Sort)
  */
  SPANISH_INTERNATIONAL_SORT = 3082,

  /**
  * Spanish (Uruguay)
  */
  SPANISH_URUGUAY = 14346,

  /**
  * Spanish (Venezuela)
  */
  SPANISH_VENEZUELA = 8202,

  /**
  * Swahili
  */
  SWAHILI = 1089,

  /**
  * Swedish
  */
  SWEDISH = 1053,

  /**
  * Swedish (Finland)
  */
  SWEDISH_FINLAND = 2077,

  /**
  * Syriac
  */
  SYRIAC = 1114,

  /**
  * Tamil
  */
  TAMIL = 1097,

  /**
  * Tatar
  */
  TATAR = 1092,

  /**
  * Telugu
  */
  TELUGU = 1098,

  /**
  * Thai (Thailand)
  */
  THAI_THAILAND = 1054,

  /**
  * Turkish
  */
  TURKISH = 1055,

  /**
  * Tajik (Cyrillic)
  */
  TAJIK_CYRILLIC = 1064,

  /**
  * Turkmen
  */
  TURKMEN = 1090,

  /**
  * Ukrainian
  */
  UKRAINIAN = 1058,

  /**
  * Urdu
  */
  URDU = 1056,

  /**
  * Uzbek (Cyrillic)
  */
  UZBEK_CYRILIC = 2115,

  /**
  * Uzbek (Latin)
  */
  UZBEK_LATIN = 1091,

  /**
  * Vietnamese
  */
  VIETNAMESE = 1066,

  /**
  * CTC Simplified
  */
  CTC_SIMPLIFIED = 50001,

  /**
  * CTC Traditional
  */
  CTC_TRADITIONAL = 50002,

  /**
  * Bengali (Bangladesh)
  */
  BENGALI_BANGLADESH = 2117,

  /**
  * BengaliIndia
  */
  BENGALI_INDIA = 1093,

  /**
  * Assamese
  */
  ASSAMESE = 1101,

  /**
  * Oriya
  */
  ORIYA = 1096,

  /**
  * Malayalam
  */
  MALAYALAM = 1100,

  /**
  * Lao
  */
  LAO = 1108,

  /**
  * Sindhi (India)
  */
  SINDHI_INDIA = 1113,

  /**
  * Amharic
  */
  AMHARIC = 1118,

  /**
  * Kashmiri
  */
  KASHMIRI = 1120,

  /**
  * Nepali
  */
  NEPALI = 1121,

  /**
  * Pashto
  */
  PASHTO = 1123,

  /**
  * Sindhi
  */
  SINDHI = 2137,

  /**
  * Arabic (World)
  */
  ARABIC = 4096,

  /**
  * Bank Card Number
  */
  BANK_CARD_NUMBER = 10000,

  /**
  * Bank Card Expiry Date
  */
  BANK_CARD_EXPIRY_DATE = 10001,

  /**
  * Bank Card Name
  */
  BANK_CARD_NAME = 10002,

  /**
  * Bank Card
  */
  BANK_CARD = 10003,

  /**
  * Bank Card CVV2
  */
  BANK_CARD_CVV2 = 10004,

  /**
  * Abkhazian (Cyrillic)
  */
  ABKHAZIAN = 10011,

  /**
  * Karakalpak (Latin)
  */
  KARAKALPAK = 10012,

  /**
  * Urdu Detection
  */
  URDU_DETECTION = 10560,

  /**
   * Custom
   */
  CUSTOM = 9999
}
