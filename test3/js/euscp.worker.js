//===============================================================================

function getURLParameter(url, name, defaultValue) {
  if (!url) return defaultValue;

  if (url.indexOf("?") == -1) return defaultValue;

  var param = defaultValue;
  var paramsString = url.substring(url.indexOf("?") + 1, url.length);
  var params = paramsString.split("&");
  for (var i = 0; i < params.length; i++) {
    if (params[i].indexOf(name + "=") != 0) continue;

    param = params[i].substring((name + "=").length, params[i].length);
    break;
  }

  return param;
}

var EU_MAX_DATA_SIZE_MB =
  typeof EU_MAX_DATA_SIZE_MB != "undefined"
    ? EU_MAX_DATA_SIZE_MB
    : parseInt(getURLParameter(location.href, "maxDataSize", "5"));
var EU_LOG_EVENTS =
  getURLParameter(location.href, "log", "false") == "true" ? true : false;
var EU_DEBUG =
  getURLParameter(location.href, "debug", "false") == "true" ? true : false;

//===============================================================================

//./src/ExtLibrary/euscp/euscpt.js
//=============================================================================

if (typeof navigator == "undefined") {
  navigator = {
    userAgent: "",
  };
}

if (!Uint8Array.prototype.slice) {
  Uint8Array.prototype.slice = Uint8Array.prototype.subarray;
}

//=============================================================================

var EU_ONE_MB = 1024 * 1024;
var EU_MAX_DATA_SIZE_MB =
  typeof EU_MAX_DATA_SIZE_MB != "undefined" ? EU_MAX_DATA_SIZE_MB : 5;

var EU_MAX_P7S_CONTAINER_SIZE = 100 * EU_ONE_MB;
var EU_MAX_P7E_CONTAINER_SIZE = 100 * EU_ONE_MB;

//-----------------------------------------------------------------------------

var EU_DEFAULT_LANG = 0;
var EU_UA_LANG = 1;
var EU_RU_LANG = 2;
var EU_EN_LANG = 3;

//-----------------------------------------------------------------------------

var EU_CP_ACP_ENCODING = 0;
var EU_CP_1251_ENCODING = 1251;
var EU_UTF8_ENCODING = 65001;

//-----------------------------------------------------------------------------

var EU_SUBJECT_TYPE_UNDIFFERENCED = 0;
var EU_SUBJECT_TYPE_CA = 1;
var EU_SUBJECT_TYPE_CA_SERVER = 2;
var EU_SUBJECT_TYPE_RA_ADMINISTRATOR = 3;
var EU_SUBJECT_TYPE_END_USER = 4;

var EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED = 0;
var EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP = 1;
var EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP = 2;
var EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP = 3;

//-----------------------------------------------------------------------------

var EU_CERT_KEY_TYPE_UNKNOWN = 0x00;
var EU_CERT_KEY_TYPE_DSTU4145 = 0x01;
var EU_CERT_KEY_TYPE_RSA = 0x02;
var EU_CERT_KEY_TYPE_ECDSA = 0x04;

//-----------------------------------------------------------------------------

var EU_CERT_HASH_TYPE_UNKNOWN = 0x00;
var EU_CERT_HASH_TYPE_GOST34311 = 0x01;
var EU_CERT_HASH_TYPE_SHA1 = 0x02;
var EU_CERT_HASH_TYPE_SHA224 = 0x03;
var EU_CERT_HASH_TYPE_SHA256 = 0x04;
var EU_CERT_HASH_TYPE_SHA384 = 0x05;
var EU_CERT_HASH_TYPE_SHA512 = 0x06;
var EU_CERT_HASH_TYPE_DSTU7564_256 = 0x07;
var EU_CERT_HASH_TYPE_DSTU7564_384 = 0x08;
var EU_CERT_HASH_TYPE_DSTU7564_512 = 0x09;

//-----------------------------------------------------------------------------

var EU_KEY_USAGE_UNKNOWN = 0x0000;
var EU_KEY_USAGE_DIGITAL_SIGNATURE = 0x0001;
var EU_KEY_USAGE_NON_REPUDATION = 0x0002;
var EU_KEY_USAGE_KEY_AGREEMENT = 0x0010;

//-----------------------------------------------------------------------------

var EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL = 1;
var EU_RECIPIENT_APPEND_TYPE_BY_KEY_ID = 2;

//-----------------------------------------------------------------------------

var EU_RECIPIENT_INFO_TYPE_ISSUER_SERIAL = 1;
var EU_RECIPIENT_INFO_TYPE_KEY_ID = 2;

//-----------------------------------------------------------------------------

var EU_CTX_HASH_ALGO_UNKNOWN = 0;
var EU_CTX_HASH_ALGO_GOST34311 = 1;
var EU_CTX_HASH_ALGO_SHA160 = 2;
var EU_CTX_HASH_ALGO_SHA224 = 3;
var EU_CTX_HASH_ALGO_SHA256 = 4;
var EU_CTX_HASH_ALGO_SHA384 = 5;
var EU_CTX_HASH_ALGO_SHA512 = 6;
var EU_CTX_HASH_ALGO_DSTU7564_256 = 7;
var EU_CTX_HASH_ALGO_DSTU7564_384 = 8;
var EU_CTX_HASH_ALGO_DSTU7564_512 = 9;

//-----------------------------------------------------------------------------

var EU_CTX_SIGN_UNKNOWN = 0;
var EU_CTX_SIGN_DSTU4145_WITH_GOST34311 = 1;
var EU_CTX_SIGN_RSA_WITH_SHA = 2;
var EU_CTX_SIGN_ECDSA_WITH_SHA = 3;
var EU_CTX_SIGN_DSTU4145_WITH_DSTU7564 = 4;

//-----------------------------------------------------------------------------

var EU_CCS_TYPE_REVOKE = 1;
var EU_CCS_TYPE_HOLD = 2;

//-----------------------------------------------------------------------------

var EU_REVOCATION_REASON_UNKNOWN = 0;
var EU_REVOCATION_REASON_KEY_COMPROMISE = 1;
var EU_REVOCATION_REASON_NEW_ISSUED = 2;

//-----------------------------------------------------------------------------

var EU_ERROR_NONE = 0x0000;
var EU_ERROR_UNKNOWN = 0xffff;
var EU_ERROR_NOT_SUPPORTED = 0xfffe;

var EU_ERROR_NOT_INITIALIZED = 0x0001;
var EU_ERROR_BAD_PARAMETER = 0x0002;
var EU_ERROR_LIBRARY_LOAD = 0x0003;
var EU_ERROR_READ_SETTINGS = 0x0004;
var EU_ERROR_TRANSMIT_REQUEST = 0x0005;
var EU_ERROR_MEMORY_ALLOCATION = 0x0006;
var EU_WARNING_END_OF_ENUM = 0x0007;
var EU_ERROR_PROXY_NOT_AUTHORIZED = 0x0008;
var EU_ERROR_NO_GUI_DIALOGS = 0x0009;
var EU_ERROR_DOWNLOAD_FILE = 0x000a;
var EU_ERROR_WRITE_SETTINGS = 0x000b;
var EU_ERROR_CANCELED_BY_GUI = 0x000c;
var EU_ERROR_OFFLINE_MODE = 0x000d;

var EU_ERROR_KEY_MEDIAS_FAILED = 0x0011;
var EU_ERROR_KEY_MEDIAS_ACCESS_FAILED = 0x0012;
var EU_ERROR_KEY_MEDIAS_READ_FAILED = 0x0013;
var EU_ERROR_KEY_MEDIAS_WRITE_FAILED = 0x0014;
var EU_WARNING_KEY_MEDIAS_READ_ONLY = 0x0015;
var EU_ERROR_KEY_MEDIAS_DELETE = 0x0016;
var EU_ERROR_KEY_MEDIAS_CLEAR = 0x0017;
var EU_ERROR_BAD_PRIVATE_KEY = 0x0018;

var EU_ERROR_PKI_FORMATS_FAILED = 0x0021;
var EU_ERROR_CSP_FAILED = 0x0022;
var EU_ERROR_BAD_SIGNATURE = 0x0023;
var EU_ERROR_AUTH_FAILED = 0x0024;
var EU_ERROR_NOT_RECEIVER = 0x0025;

var EU_ERROR_STORAGE_FAILED = 0x0031;
var EU_ERROR_BAD_CERT = 0x0032;
var EU_ERROR_CERT_NOT_FOUND = 0x0033;
var EU_ERROR_INVALID_CERT_TIME = 0x0034;
var EU_ERROR_CERT_IN_CRL = 0x0035;
var EU_ERROR_BAD_CRL = 0x0036;
var EU_ERROR_NO_VALID_CRLS = 0x0037;

var EU_ERROR_GET_TIME_STAMP = 0x0041;
var EU_ERROR_BAD_TSP_RESPONSE = 0x0042;
var EU_ERROR_TSP_SERVER_CERT_NOT_FOUND = 0x0043;
var EU_ERROR_TSP_SERVER_CERT_INVALID = 0x0044;

var EU_ERROR_GET_OCSP_STATUS = 0x0051;
var EU_ERROR_BAD_OCSP_RESPONSE = 0x0052;
var EU_ERROR_CERT_BAD_BY_OCSP = 0x0053;
var EU_ERROR_OCSP_SERVER_CERT_NOT_FOUND = 0x0054;
var EU_ERROR_OCSP_SERVER_CERT_INVALID = 0x0055;

var EU_ERROR_LDAP_ERROR = 0x0061;

var EU_ERROR_JS_ERRORS = 0x10000;
var EU_ERROR_JS_BROWSER_NOT_SUPPORTED = 0x10001;
var EU_ERROR_JS_LIBRARY_NOT_INITIALIZED = 0x10002;
var EU_ERROR_JS_LIBRARY_LOAD = 0x10003;
var EU_ERROR_JS_LIBRARY_ERROR = 0x10004;

var EU_ERROR_JS_OPEN_FILE = 0x10010;
var EU_ERROR_JS_READ_FILE = 0x10011;
var EU_ERROR_JS_WRITE_FILE = 0x10012;

//=============================================================================

var EU_SYSTEMTIME_SIZE = 16;

var EU_CERT_OWNER_INFO_SIZE = 72;
var EU_SIGN_INFO_SIZE = 96;
var EU_SENDER_INFO_SIZE = 96;
var EU_CRL_INFO_SIZE = 48;
var EU_CERT_INFO_SIZE = 228;
var EU_CRL_DETAILED_INFO_SIZE = 60;
var EU_TIME_INFO_SIZE = 8 + EU_SYSTEMTIME_SIZE;

var EU_KEY_MEDIA_SIZE = 73;
var EU_USER_INFO_SIZE = 1554;
var EU_SYSTEMTIME_SIZE = 16;

var EU_PASS_MAX_LENGTH = 65;
var EU_PATH_MAX_LENGTH = 257;

var EU_COMMON_NAME_MAX_LENGTH = 65;
var EU_LOCALITY_MAX_LENGTH = 129;
var EU_STATE_MAX_LENGTH = 129;
var EU_ORGANIZATION_MAX_LENGTH = 65;
var EU_ORG_UNIT_MAX_LENGTH = 65;
var EU_TITLE_MAX_LENGTH = 65;
var EU_STREET_MAX_LENGTH = 129;
var EU_PHONE_MAX_LENGTH = 33;
var EU_SURNAME_MAX_LENGTH = 41;
var EU_GIVENNAME_MAX_LENGTH = 33;
var EU_EMAIL_MAX_LENGTH = 129;
var EU_ADDRESS_MAX_LENGTH = 257;
var EU_EDRPOU_MAX_LENGTH = 11;
var EU_DRFO_MAX_LENGTH = 11;
var EU_NBU_MAX_LENGTH = 7;
var EU_SPFM_MAX_LENGTH = 7;
var EU_O_CODE_MAX_LENGTH = 33;
var EU_OU_CODE_MAX_LENGTH = 33;
var EU_USER_CODE_MAX_LENGTH = 33;
var EU_UPN_MAX_LENGTH = 257;
var EU_COUNTRY_MAX_LENGTH = 3;
var EU_UNZR_MAX_LENGTH = 15;
var EU_INFORMATION_MAX_LENGTH = 513;
var EU_PASS_PHRASE_MAX_LENGTH = 129;

var EU_TSL_MAX_LENGTH = 2561;

var EU_KEYS_TYPE_NONE = 0;
var EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOST = 1;
var EU_KEYS_TYPE_RSA_WITH_SHA = 2;
var EU_KEYS_TYPE_ECDSA_WITH_SHA = 4;
var EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_DSTU = 8;

var EU_KEYS_LENGTH_DS_UA_191 = 1;
var EU_KEYS_LENGTH_DS_UA_257 = 2;
var EU_KEYS_LENGTH_DS_UA_307 = 3;
var EU_KEYS_LENGTH_DS_UA_FILE = 4;
var EU_KEYS_LENGTH_DS_UA_CERT = 5;

var EU_KEYS_LENGTH_KEP_UA_257 = 1;
var EU_KEYS_LENGTH_KEP_UA_431 = 2;
var EU_KEYS_LENGTH_KEP_UA_571 = 3;
var EU_KEYS_LENGTH_KEP_UA_FILE = 4;
var EU_KEYS_LENGTH_KEP_UA_CERT = 5;

var EU_KEYS_LENGTH_DS_RSA_1024 = 1;
var EU_KEYS_LENGTH_DS_RSA_2048 = 2;
var EU_KEYS_LENGTH_DS_RSA_3072 = 3;
var EU_KEYS_LENGTH_DS_RSA_4096 = 4;
var EU_KEYS_LENGTH_DS_RSA_FILE = 5;
var EU_KEYS_LENGTH_DS_RSA_CERT = 6;

var EU_KEYS_LENGTH_DS_ECDSA_192 = 1;
var EU_KEYS_LENGTH_DS_ECDSA_256 = 2;
var EU_KEYS_LENGTH_DS_ECDSA_384 = 3;
var EU_KEYS_LENGTH_DS_ECDSA_521 = 4;
var EU_KEYS_LENGTH_DS_ECDSA_FILE = 5;
var EU_KEYS_LENGTH_DS_ECDSA_CERT = 6;

var EU_CONTENT_ENC_ALGO_DEFAULT = 0;
var EU_CONTENT_ENC_ALGO_GOST28147_CFB = 2;
var EU_CONTENT_ENC_ALGO_TDES_CBC = 4;
var EU_CONTENT_ENC_ALGO_AES_128_CBC = 5;
var EU_CONTENT_ENC_ALGO_AES_192_CBC = 6;
var EU_CONTENT_ENC_ALGO_AES_256_CBC = 7;
var EU_CONTENT_ENC_ALGO_DSTU7624_256_OFB = 8;
var EU_CONTENT_ENC_ALGO_DSTU7624_256_CFB = 9;

var EU_HEADER_CA_TYPE = "UA1";
var EU_HEADER_PART_TYPE_SIGNED = 1;
var EU_HEADER_PART_TYPE_ENCRYPTED = 2;
var EU_HEADER_PART_TYPE_STAMPED = 3;
var EU_HEADER_PART_TYPE_CERTCRYPT = 4;

var EU_HEADER_MAX_CA_TYPE_SIZE = 3;

var EU_KEY_ID_ACCOUNTANT = 1;
var EU_KEY_ID_DIRECTOR = 2;
var EU_KEY_ID_STAMP = 3;

var EU_SIGN_TYPE_UNKNOWN = 0;
var EU_SIGN_TYPE_CADES_BES = 1;
var EU_SIGN_TYPE_CADES_T = 4;
var EU_SIGN_TYPE_CADES_C = 8;
var EU_SIGN_TYPE_CADES_X_LONG = 16;
var EU_SIGN_TYPE_CADES_X_LONG_TRUSTED = 128;

var EU_KEYS_REQUEST_TYPE_UA_DS = 1;
var EU_KEYS_REQUEST_TYPE_UA_KEP = 2;
var EU_KEYS_REQUEST_TYPE_INTERNATIONAL = 3;

var EU_ASIC_TYPE_UNKNOWN = 0;
var EU_ASIC_TYPE_S = 1;
var EU_ASIC_TYPE_E = 2;

var EU_ASIC_SIGN_TYPE_UNKNOWN = 0;
var EU_ASIC_SIGN_TYPE_CADES = 1;
var EU_ASIC_SIGN_TYPE_XADES = 2;

var EU_XADES_TYPE_UNKNOWN = 0;
var EU_XADES_TYPE_DETACHED = 1;
var EU_XADES_TYPE_ENVELOPING = 2;
var EU_XADES_TYPE_ENVELOPED = 3;

var EU_XADES_SIGN_LEVEL_UNKNOWN = 0;
var EU_XADES_SIGN_LEVEL_B_B = 1;
var EU_XADES_SIGN_LEVEL_B_T = 4;
var EU_XADES_SIGN_LEVEL_B_LT = 16;
var EU_XADES_SIGN_LEVEL_B_LTA = 32;

var EU_PADES_SIGN_LEVEL_UNKNOWN = 0;
var EU_PADES_SIGN_LEVEL_B_B = 1;
var EU_PADES_SIGN_LEVEL_B_T = 4;
var EU_PADES_SIGN_LEVEL_B_LT = 16;
var EU_PADES_SIGN_LEVEL_B_LTA = 32;

//=============================================================================

var EU_RESOLVE_OIDS_PARAMETER = "ResolveOIDs";
var EU_MAKE_PKEY_PFX_CONTAINER_PARAMETER = "MakePKeyPFXContainer";
var EU_SIGN_INCLUDE_CONTENT_TIME_STAMP_PARAMETER =
  "SignIncludeContentTimeStamp";
var EU_SIGN_TYPE_PARAMETER = "SignType";
var EU_SIGN_INCLUDE_CA_CERTIFICATES_PARAMETER = "SignIncludeCACertificates";
var EU_FORCE_USE_TSP_FROM_SETTINGS_PARAMETER = "ForceUseTSPFromSettings";
var EU_STRING_ENCODING_PARAMETER = "StringEncoding";
var EU_CHECK_CERT_CHAIN_ON_SIGN_TIME_PARAMETER = "CheckCertChainOnSignTime";
var EU_CONNECTIONS_TIMEOUT_PARAMETER = "ConnectionsTimeout";

var UA_OID_EXT_KEY_USAGE_STAMP = "1.2.804.2.1.1.1.3.9";

var EU_CHECK_PRIVATE_KEY_CONTEXT_PARAMETER = "CheckPrivateKey";
var EU_RESOLVE_OIDS_CONTEXT_PARAMETER = "ResolveOIDs";
var EU_EXPORATABLE_CONTEXT_CONTEXT_PARAMETER = "ExportableContext";
var EU_ENCODE_ECDSA_SIGN_VALUE_CONTEXT_PARAMETER = "EncodeECDSASignValue";

//=============================================================================

var CP1251Table = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12,
  13: 13,
  14: 14,
  15: 15,
  16: 16,
  17: 17,
  18: 18,
  19: 19,
  20: 20,
  21: 21,
  22: 22,
  23: 23,
  24: 24,
  25: 25,
  26: 26,
  27: 27,
  28: 28,
  29: 29,
  30: 30,
  31: 31,
  32: 32,
  33: 33,
  34: 34,
  35: 35,
  36: 36,
  37: 37,
  38: 38,
  39: 39,
  40: 40,
  41: 41,
  42: 42,
  43: 43,
  44: 44,
  45: 45,
  46: 46,
  47: 47,
  48: 48,
  49: 49,
  50: 50,
  51: 51,
  52: 52,
  53: 53,
  54: 54,
  55: 55,
  56: 56,
  57: 57,
  58: 58,
  59: 59,
  60: 60,
  61: 61,
  62: 62,
  63: 63,
  64: 64,
  65: 65,
  66: 66,
  67: 67,
  68: 68,
  69: 69,
  70: 70,
  71: 71,
  72: 72,
  73: 73,
  74: 74,
  75: 75,
  76: 76,
  77: 77,
  78: 78,
  79: 79,
  80: 80,
  81: 81,
  82: 82,
  83: 83,
  84: 84,
  85: 85,
  86: 86,
  87: 87,
  88: 88,
  89: 89,
  90: 90,
  91: 91,
  92: 92,
  93: 93,
  94: 94,
  95: 95,
  96: 96,
  97: 97,
  98: 98,
  99: 99,
  100: 100,
  101: 101,
  102: 102,
  103: 103,
  104: 104,
  105: 105,
  106: 106,
  107: 107,
  108: 108,
  109: 109,
  110: 110,
  111: 111,
  112: 112,
  113: 113,
  114: 114,
  115: 115,
  116: 116,
  117: 117,
  118: 118,
  119: 119,
  120: 120,
  121: 121,
  122: 122,
  123: 123,
  124: 124,
  125: 125,
  126: 126,
  127: 127,
  1027: 129,
  8225: 135,
  1046: 198,
  8222: 132,
  1047: 199,
  1168: 165,
  1048: 200,
  1113: 154,
  1049: 201,
  1045: 197,
  1050: 202,
  1028: 170,
  160: 160,
  1040: 192,
  1051: 203,
  164: 164,
  166: 166,
  167: 167,
  169: 169,
  171: 171,
  172: 172,
  173: 173,
  174: 174,
  1053: 205,
  176: 176,
  177: 177,
  1114: 156,
  181: 181,
  182: 182,
  183: 183,
  8221: 148,
  187: 187,
  1029: 189,
  1056: 208,
  1057: 209,
  1058: 210,
  8364: 136,
  1112: 188,
  1115: 158,
  1059: 211,
  1060: 212,
  1030: 178,
  1061: 213,
  1062: 214,
  1063: 215,
  1116: 157,
  1064: 216,
  1065: 217,
  1031: 175,
  1066: 218,
  1067: 219,
  1068: 220,
  1069: 221,
  1070: 222,
  1032: 163,
  8226: 149,
  1071: 223,
  1072: 224,
  8482: 153,
  1073: 225,
  8240: 137,
  1118: 162,
  1074: 226,
  1110: 179,
  8230: 133,
  1075: 227,
  1033: 138,
  1076: 228,
  1077: 229,
  8211: 150,
  1078: 230,
  1119: 159,
  1079: 231,
  1042: 194,
  1080: 232,
  1034: 140,
  1025: 168,
  1081: 233,
  1082: 234,
  8212: 151,
  1083: 235,
  1169: 180,
  1084: 236,
  1052: 204,
  1085: 237,
  1035: 142,
  1086: 238,
  1087: 239,
  1088: 240,
  1089: 241,
  1090: 242,
  1036: 141,
  1041: 193,
  1091: 243,
  1092: 244,
  8224: 134,
  1093: 245,
  8470: 185,
  1094: 246,
  1054: 206,
  1095: 247,
  1096: 248,
  8249: 139,
  1097: 249,
  1098: 250,
  1044: 196,
  1099: 251,
  1111: 191,
  1055: 207,
  1100: 252,
  1038: 161,
  8220: 147,
  1101: 253,
  8250: 155,
  1102: 254,
  8216: 145,
  1103: 255,
  1043: 195,
  1105: 184,
  1039: 143,
  1026: 128,
  1106: 144,
  8218: 130,
  1107: 131,
  8217: 146,
  1108: 186,
  1109: 190,
};

var UTF8Table = unescape(
  "%u0402%u0403%u201A%u0453%u201E%u2026%u2020%u2021%u20AC%u2030%u0409%u2039%u040A%u040C%u040B%u040F" +
    "%u0452%u2018%u2019%u201C%u201D%u2022%u2013%u2014%u0000%u2122%u0459%u203A%u045A%u045C%u045B%u045F" +
    "%u00A0%u040E%u045E%u0408%u00A4%u0490%u00A6%u00A7%u0401%u00A9%u0404%u00AB%u00AC%u00AD%u00AE%u0407" +
    "%u00B0%u00B1%u0406%u0456%u0491%u00B5%u00B6%u00B7%u0451%u2116%u0454%u00BB%u0458%u0405%u0455%u0457",
);

//=============================================================================

var EU_ERRORS_STRINGS = [];
var EU_ERRORS_STRINGS_UA = [];
var EU_ERRORS_STRINGS_RU = [];
var EU_ERRORS_STRINGS_EN = [];

EU_ERRORS_STRINGS_UA[EU_ERROR_JS_LIBRARY_LOAD] =
  "Виникла помилка при завантаженні криптографічної бібліотеки";
EU_ERRORS_STRINGS_UA[EU_ERROR_JS_BROWSER_NOT_SUPPORTED] =
  "Браузер не підтримується";
EU_ERRORS_STRINGS_UA[EU_ERROR_JS_LIBRARY_NOT_INITIALIZED] =
  "Криптографічна бібліотека не ініціалізована";
EU_ERRORS_STRINGS_UA[EU_ERROR_JS_LIBRARY_ERROR] =
  "Виникла помилка при взаємодії з криптографічною бібліотекою. Будь ласка, перезавантажте web-сторінку";
EU_ERRORS_STRINGS_UA[EU_ERROR_JS_OPEN_FILE] =
  "Виникла помилка при відкритті файлу";
EU_ERRORS_STRINGS_UA[EU_ERROR_JS_READ_FILE] =
  "Виникла помилка при зчитуванні файлу";
EU_ERRORS_STRINGS_UA[EU_ERROR_JS_WRITE_FILE] =
  "Виникла помилка при записі файлу";

EU_ERRORS_STRINGS_RU[EU_ERROR_JS_LIBRARY_LOAD] =
  "Возникла ошибка при загрузке криптографической библиотеки";
EU_ERRORS_STRINGS_RU[EU_ERROR_JS_BROWSER_NOT_SUPPORTED] =
  "Браузер не поддерживается";
EU_ERRORS_STRINGS_RU[EU_ERROR_JS_LIBRARY_NOT_INITIALIZED] =
  "Криптографическая библиотека не инициализирована";
EU_ERRORS_STRINGS_RU[EU_ERROR_JS_LIBRARY_ERROR] =
  "Возникла ошибка при взаимодействии с криптографической библиотекой. Пожалуйста, перезагрузите web-страницу";
EU_ERRORS_STRINGS_RU[EU_ERROR_JS_OPEN_FILE] =
  "Возникла ошибка при открытии файла";
EU_ERRORS_STRINGS_RU[EU_ERROR_JS_READ_FILE] =
  "Возникла ошибка при чтении файла";
EU_ERRORS_STRINGS_RU[EU_ERROR_JS_WRITE_FILE] =
  "Возникла ошибка при записи файла";

EU_ERRORS_STRINGS_EN[EU_ERROR_JS_LIBRARY_LOAD] =
  "Error at cryptographic library load";
EU_ERRORS_STRINGS_EN[EU_ERROR_JS_BROWSER_NOT_SUPPORTED] =
  "Browser is not supported";
EU_ERRORS_STRINGS_EN[EU_ERROR_JS_LIBRARY_NOT_INITIALIZED] =
  "Cryptographic library not initialized";
EU_ERRORS_STRINGS_EN[EU_ERROR_JS_LIBRARY_ERROR] =
  "Error at comunication with cryptographic library. Please, reload web page";
EU_ERRORS_STRINGS_EN[EU_ERROR_JS_OPEN_FILE] = "Error at open file";
EU_ERRORS_STRINGS_EN[EU_ERROR_JS_READ_FILE] = "Error at read file";
EU_ERRORS_STRINGS_EN[EU_ERROR_JS_WRITE_FILE] = "Error at write file";

EU_ERRORS_STRINGS[EU_DEFAULT_LANG] = EU_ERRORS_STRINGS_UA;
EU_ERRORS_STRINGS[EU_UA_LANG] = EU_ERRORS_STRINGS_UA;
EU_ERRORS_STRINGS[EU_RU_LANG] = EU_ERRORS_STRINGS_RU;
EU_ERRORS_STRINGS[EU_EN_LANG] = EU_ERRORS_STRINGS_EN;

//=============================================================================

eu_wait = function (first) {
  return new (function () {
    var self = this;
    var callback = function () {
      var args;
      if (self.deferred.length) {
        args = [].slice.call(arguments);
        args.unshift(callback);
        self.deferred[0].apply(self, args);
        self.deferred.shift();
      }
    };
    this.deferred = [];
    this.eu_wait = function (run) {
      this.deferred.push(run);
      return self;
    };
    first(callback);
  })();
};

//=============================================================================

function StringToCString(s) {
  var strLen = s.length;
  var arr = new Uint8Array(strLen + 1);
  for (var i = 0; i < strLen; i++) arr[i] = s.charCodeAt(i);
  arr[strLen] = 0;
  return arr;
}

function StringToArray(s) {
  var utf8 = unescape(encodeURIComponent(s));

  var arr = [];
  for (var i = 0; i < utf8.length; i++) {
    arr.push(utf8.charCodeAt(i));
  }
  return arr;
}

function ArrayToString(arr) {
  var ret = [];

  var length = arr.length;
  if (length > 0 && arr[length - 1] == 0) {
    length -= 1;
  }

  for (var i = 0; i < length; i++) {
    var chr = arr[i];
    if (chr > 0xff) {
      chr &= 0xff;
    }

    ret.push(String.fromCharCode(chr));
  }

  return decodeURIComponent(escape(ret.join("")));
}

function UTF8ToCP1251Array(s, normalize) {
  if (typeof normalize == "undefined") normalize = true;

  var L = [];
  if (s.normalize && normalize) s = s.normalize();

  for (var i = 0; i < s.length; i++) {
    var ord = s.charCodeAt(i);
    if (!(ord in CP1251Table))
      throw "Character " + s.charAt(i) + " isn't supported by win1251!";
    L.push(CP1251Table[ord]);
  }

  L.push(0);

  return L;
}

function UTF8ToUTF8Array(s, normalize) {
  if (typeof normalize == "undefined") normalize = true;

  var L = [];
  if (s.normalize && normalize) s = s.normalize();

  var utf8 = unescape(encodeURIComponent(s));
  for (var i = 0; i < utf8.length; i++) {
    L.push(utf8.charCodeAt(i));
  }

  L.push(0);

  return L;
}

function CP1251PointerToUTF8(ptr) {
  var t;
  var i = 0;
  var ret = "";

  if (ptr == 0) return "";

  var code2char = function (code) {
    if (code >= 0xc0 && code <= 0xff)
      return String.fromCharCode(code - 0xc0 + 0x0410);
    if (code >= 0x80 && code <= 0xbf) return UTF8Table.charAt(code - 0x80);
    return String.fromCharCode(code);
  };

  while (1) {
    t = HEAPU8[(ptr + i) | 0];
    if (t == 0) break;
    ret += code2char(t);
    i++;
  }

  return ret;
}

function UTF8PointerToUTF8(ptr) {
  var t;
  var i = 0;
  var ret = [];

  if (ptr == 0) return "";

  while (1) {
    t = HEAPU8[(ptr + i) | 0];
    if (t == 0) break;
    ret.push(t);
    i++;
  }

  return ArrayToString(ret);
}

function StringToUTF16LEArray(str, zero, normalize) {
  if (typeof normalize == "undefined") normalize = true;

  var L = [];
  var c;

  if (str.normalize && normalize) str = str.normalize();

  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i);
    L.push(c & 0xff);
    L.push((c & 0xff00) >> 8);
  }

  if (zero) {
    L.push(0);
    L.push(0);
  }

  return L;
}

function UTF16LEArrayToString(arr) {
  var i = 0;
  var ret = "";
  var length;

  if (arr.length % 2 != 0) return null;

  length = arr.length;
  if (length > 0 && arr[length - 2] == 0 && arr[length - 1] == 0) {
    length -= 2;
  }

  while (i < length) {
    ret += String.fromCharCode(arr[i] | (arr[i + 1] << 8));
    i += 2;
  }

  return ret;
}

//=============================================================================

var StringEncoder = function (charset, javaCompliant) {
  charset = charset.toUpperCase();

  this.charset = charset;
  this.javaCompliant = javaCompliant;

  if (!StringEncoder.isSupported(charset))
    throw Error("String charset not supported");

  if (charset == "UTF-16LE") {
    this.encode = function (str) {
      return StringToUTF16LEArray(str, !javaCompliant);
    };
    this.decode = UTF16LEArrayToString;
  } else if (charset == "UTF-8") {
    if (javaCompliant) this.encode = StringToArray;
    else {
      this.encode = function (str) {
        var arr = StringToArray(str);
        arr.push(0);
        return arr;
      };
    }
    this.decode = ArrayToString;
  }
};

StringEncoder.isSupported = function (charset) {
  if (charset != "UTF-16LE" && charset != "UTF-8") {
    return false;
  }

  return true;
};

//=============================================================================

var LibraryStringEncoder = function (charset) {
  if (charset == EU_CP_ACP_ENCODING) charset = EU_CP_1251_ENCODING;

  if (charset != EU_CP_1251_ENCODING && charset != EU_UTF8_ENCODING) {
    throw Error("Library charset not supported");
  }

  this.charset = charset;
};

LibraryStringEncoder.prototype.encode = function (val) {
  if (this.charset == EU_CP_1251_ENCODING) return UTF8ToCP1251Array(val);
  else if (this.charset == EU_UTF8_ENCODING) return UTF8ToUTF8Array(val, false);
  else throw Error("Library charset not supported");
};

LibraryStringEncoder.prototype.decodePointer = function (val) {
  if (this.charset == EU_CP_1251_ENCODING) return CP1251PointerToUTF8(val);
  else if (this.charset == EU_UTF8_ENCODING) return UTF8PointerToUTF8(val);
  else throw Error("Library charset not supported");
};

//=============================================================================

function SetClassID(className, classVersion, classPtr) {
  classPtr["Vendor"] = "JSC IIT";
  classPtr["ClassVersion"] = classVersion;
  classPtr["ClassName"] = className;
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function intArrayFromStrings(strArr, encoder) {
  if (strArr.length == 0) return [0, 0];

  var resArray = [];
  for (var i = 0; i < strArr.length; i++) {
    var tmpStrArr = encoder
      ? encoder.encode(strArr[i])
      : UTF8ToCP1251Array(strArr[i]);
    resArray = resArray.concat(tmpStrArr);
  }

  resArray.push(0);

  return resArray;
}

function SystemTimeToDate(time) {
  function getWord() {
    var wordVal = Module.getValue(time, "i16");
    time += 2;
    return wordVal;
  }

  var year = getWord();
  var month = getWord() - 1;
  var dayOfWeek = getWord();
  var day = getWord();
  var hour = getWord();
  var minute = getWord();
  var second = getWord();
  var milliseconds = getWord();

  return new Date(year, month, day, hour, minute, second, milliseconds);
}

function DateToSystemTime(date, pTimePtr) {
  function setWord(value) {
    Module.setValue(pTimePtr, value | 0, "i16");
    pTimePtr += 2;
  }

  setWord(date.getFullYear());
  setWord(date.getMonth() + 1);
  setWord(date.getDay());
  setWord(date.getDate());
  setWord(date.getHours());
  setWord(date.getMinutes());
  setWord(date.getSeconds());
  setWord(date.getMilliseconds());
}

function IsStructureFilled(classPtr, structPtr, variables) {
  return Module.getValue(structPtr, "i32") == EU_TRUE ? true : false;
}

function ClassSetDefaultValues(classPtr, variables) {
  for (var key in variables) {
    if (variables[key] == "string") {
      classPtr[key] = "";
    } else if (
      variables[key] == "word" ||
      variables[key] == "int" ||
      variables[key] == "long"
    ) {
      classPtr[key] = 0;
    } else if (variables[key] == "boolean") {
      classPtr[key] = false;
    } else {
      classPtr[key] = null;
    }
  }
}

function StructureToClass(classPtr, structPtr, variables, encoder) {
  try {
    for (var key in variables) {
      if (variables[key] == "string") {
        var tmpPtr = Module.getValue(structPtr, "i8*");
        classPtr[key] = encoder
          ? encoder.decodePointer(tmpPtr)
          : CP1251PointerToUTF8(tmpPtr);
        structPtr += EU_PTR_SIZE;
      } else if (variables[key] == "word") {
        classPtr[key] = Module.getValue(structPtr, "i16") | 0;
        structPtr += 2;
      } else if (variables[key] == "int") {
        classPtr[key] = Module.getValue(structPtr, "i32") | 0;
        structPtr += 4;
      } else if (variables[key] == "long") {
        classPtr[key] = Module.getValue(structPtr, "i32") | 0;
        structPtr += 4;
      } else if (variables[key] == "boolean") {
        classPtr[key] =
          Module.getValue(structPtr, "i32") == EU_TRUE ? true : false;
        structPtr += 4;
      } else if (variables[key] == "time") {
        classPtr[key] = SystemTimeToDate(structPtr);
        structPtr += EU_SYSTEMTIME_SIZE;
      } else if (variables[key] == "ownerInfo") {
        classPtr[key] = new EndUserOwnerInfo(structPtr);
        structPtr += EU_CERT_OWNER_INFO_SIZE;
      } else if (variables[key] == "timeInfo") {
        var timeInfo = new EndUserTimeInfo(null);
        timeInfo.version = 1;
        timeInfo.isTimeAvail =
          Module.getValue(structPtr, "i32") == EU_TRUE ? true : false;
        timeInfo.isTimeStamp =
          Module.getValue(structPtr + 4, "i32") == EU_TRUE ? true : false;
        timeInfo.time = timeInfo.isTimeAvail
          ? SystemTimeToDate(structPtr + 8)
          : null;

        classPtr[key] = timeInfo;
        structPtr += EU_TIME_INFO_SIZE;
      } else {
        console.error("Invalid type: " + variables[key] + "for key: " + key);
      }
    }
  } catch (e) {
    console.error(
      "Error: function: %s class: %s ex: %s",
      "StructureToClass",
      classPtr.className,
      e.toString(),
    );
    classPtr.isFilled = false;
  }
}

//-----------------------------------------------------------------------------

var MakeClass = function () {
  return function (args) {
    if (this instanceof arguments.callee) {
      if (typeof this.__construct == "function")
        this.__construct.apply(this, args);
    } else return new arguments.callee(arguments);
  };
};

var NewClass = function (variables, constructor, functions) {
  var retn = MakeClass();
  var key;
  for (key in variables) {
    retn.prototype[key] = variables[key];
  }
  for (key in functions) {
    retn.prototype[key] = functions[key];
  }
  retn.prototype.__construct = constructor;
  return retn;
};

//=============================================================================

function ObjectToTransferableObject(classPtr, obj, variables) {
  try {
    for (var key in variables) {
      if (classPtr[key] && classPtr[key].GetTransferableObject)
        obj[key] = classPtr[key].GetTransferableObject();
      else obj[key] = classPtr[key];
    }

    return obj;
  } catch (e) {
    return null;
  }
}

//-----------------------------------------------------------------------------

function TransferableObjectToClass(classPtr, obj, variables) {
  try {
    for (var key in variables) {
      if (variables[key] == "time") {
        classPtr[key] = new Date(obj[key]);
      } else if (variables[key] == "ownerInfo") {
        classPtr[key] = new EndUserOwnerInfo(null);
        classPtr[key].SetTransferableObject(obj[key]);
      } else if (variables[key] == "timeInfo") {
        classPtr[key] = new EndUserTimeInfo(null);
        classPtr[key].SetTransferableObject(obj[key]);
      } else if (variables[key] == "EndUserCertificateInfoEx") {
        classPtr[key] = new EndUserCertificateInfoEx(null);
        classPtr[key].SetTransferableObject(obj[key]);
      } else {
        classPtr[key] = obj[key];
      }
    }
  } catch (e) {
    classPtr.isFilled = false;
  }
}

//-----------------------------------------------------------------------------

function EndUserInitFromTransferableObject(obj, objConstructor) {
  var newObj = new objConstructor();
  newObj.SetTransferableObject(obj);
  return newObj;
}

//=============================================================================

var EndUserFileFields = {
  file: "File",
  data: "array",
};

//-----------------------------------------------------------------------------

var EndUserFile = function () {
  SetClassID("EndUserFile", "1.0.1", this);
};

//-----------------------------------------------------------------------------

EndUserFile.prototype.GetFile = function () {
  return this.file;
};

//-----------------------------------------------------------------------------

EndUserFile.prototype.GetData = function () {
  return this.data;
};

//-----------------------------------------------------------------------------

EndUserFile.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserFileFields);
};

//-----------------------------------------------------------------------------

EndUserFile.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserFileFields);
};

//=============================================================================

var EndUserOwnerInfoFields = {
  isFilled: "boolean",
  issuer: "string",
  issuerCN: "string",
  serial: "string",
  subject: "string",
  subjCN: "string",
  subjOrg: "string",
  subjOrgUnit: "string",
  subjTitle: "string",
  subjState: "string",
  subjLocality: "string",
  subjFullName: "string",
  subjAddress: "string",
  subjPhone: "string",
  subjEMail: "string",
  subjDNS: "string",
  subjEDRPOUCode: "string",
  subjDRFOCode: "string",
};

//-----------------------------------------------------------------------------

var EndUserOwnerInfo = function (pInfo) {
  SetClassID("EndUserOwnerInfo", "1.0.1", this);

  if (
    typeof pInfo != "undefined" &&
    pInfo != null &&
    IsStructureFilled(this, pInfo, EndUserOwnerInfoFields)
  ) {
    StructureToClass(this, pInfo, EndUserOwnerInfoFields);
  } else {
    ClassSetDefaultValues(this, EndUserOwnerInfoFields);
  }
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.IsFilled = function () {
  return this.isFilled;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetIssuer = function () {
  return this.issuer;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetIssuerCN = function () {
  return this.issuerCN;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetSerial = function () {
  return this.serial;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetSubject = function () {
  return this.subject;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetSubjCN = function () {
  return this.subjCN;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetSubjOrg = function () {
  return this.subjOrg;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetSubjOrgUnit = function () {
  return this.subjOrgUnit;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetSubjTitle = function () {
  return this.subjTitle;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetSubjState = function () {
  return this.subjState;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetSubjLocality = function () {
  return this.subjLocality;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetSubjFullName = function () {
  return this.subjFullName;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetSubjAddress = function () {
  return this.subjAddress;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetSubjPhone = function () {
  return this.subjPhone;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetSubjEMail = function () {
  return this.subjEMail;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetSubjDNS = function () {
  return this.subjDNS;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetSubjEDRPOUCode = function () {
  return this.subjEDRPOUCode;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetSubjDRFOCode = function () {
  return this.subjDRFOCode;
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserOwnerInfoFields);
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserOwnerInfoFields);
};

//=============================================================================

var EndUserTimeInfoFields = {
  version: "long",
  isTimeAvail: "boolean",
  isTimeStamp: "boolean",
  time: "time",
  isSignTimeStampAvail: "boolean",
  signTimeStamp: "time",
};

//-----------------------------------------------------------------------------

var EndUserTimeInfo = function (pInfo) {
  SetClassID("EndUserTimeInfo", "1.0.2", this);

  if (typeof pInfo != "undefined" && pInfo != null) {
    StructureToClass(this, pInfo, EndUserTimeInfoFields);
  } else {
    ClassSetDefaultValues(this, EndUserTimeInfoFields);
  }
};

//-----------------------------------------------------------------------------

EndUserTimeInfo.prototype.GetVersion = function () {
  return this.version;
};

//-----------------------------------------------------------------------------

EndUserTimeInfo.prototype.IsTimeAvail = function () {
  return this.isTimeAvail;
};

//-----------------------------------------------------------------------------

EndUserTimeInfo.prototype.IsTimeStamp = function () {
  return this.isTimeStamp;
};

//-----------------------------------------------------------------------------

EndUserTimeInfo.prototype.GetTime = function () {
  return this.time;
};

//-----------------------------------------------------------------------------

EndUserTimeInfo.prototype.IsSignTimeStampAvail = function () {
  return this.isSignTimeStampAvail;
};

//-----------------------------------------------------------------------------

EndUserTimeInfo.prototype.GetSignTimeStamp = function () {
  return this.signTimeStamp;
};

//-----------------------------------------------------------------------------

EndUserTimeInfo.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserTimeInfoFields);
};

//-----------------------------------------------------------------------------

EndUserTimeInfo.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserTimeInfoFields);
};

//=============================================================================

var EndUserSignInfoFields = {
  ownerInfo: "ownerInfo",
  timeInfo: "timeInfo",
};

//-----------------------------------------------------------------------------

var EndUserSignInfo = function (pInfo, data, timeInfo) {
  SetClassID("EndUserSignInfo", "1.0.1", this);

  if (
    typeof pInfo != "undefined" &&
    pInfo != null &&
    IsStructureFilled(this, pInfo, EndUserSignInfoFields)
  ) {
    StructureToClass(this, pInfo, EndUserSignInfoFields);
  } else {
    ClassSetDefaultValues(this, EndUserSignInfoFields);
  }

  this.data = data;
  if (timeInfo) this.timeInfo = timeInfo;
};

//-----------------------------------------------------------------------------

EndUserSignInfo.prototype.GetOwnerInfo = function () {
  return this.ownerInfo;
};

//-----------------------------------------------------------------------------

EndUserSignInfo.prototype.GetTimeInfo = function () {
  return this.timeInfo;
};

//-----------------------------------------------------------------------------

EndUserSignInfo.prototype.GetData = function () {
  return this.data;
};

//-----------------------------------------------------------------------------

EndUserSignInfo.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserSignInfoFields);
  TransferableObjectToClass(this, obj, { data: "array" });
};

//-----------------------------------------------------------------------------

EndUserSignInfo.prototype.GetTransferableObject = function () {
  var obj = ObjectToTransferableObject(this, {}, EndUserSignInfoFields);
  return ObjectToTransferableObject(this, obj, { data: "array" });
};

//=============================================================================

var EndUserSenderInfoFields = {
  ownerInfo: "ownerInfo",
  timeInfo: "timeInfo",
};

//-----------------------------------------------------------------------------

var EndUserSenderInfo = function (pInfo, data) {
  SetClassID("EndUserSenderInfo", "1.0.1", this);

  if (
    typeof pInfo != "undefined" &&
    pInfo != null &&
    IsStructureFilled(this, pInfo, EndUserSenderInfoFields)
  ) {
    StructureToClass(this, pInfo, EndUserSenderInfoFields);
  } else {
    ClassSetDefaultValues(this, EndUserSenderInfoFields);
  }

  this.data = data;
};

//-----------------------------------------------------------------------------

EndUserSenderInfo.prototype.GetOwnerInfo = function () {
  return this.ownerInfo;
};

//-----------------------------------------------------------------------------

EndUserSenderInfo.prototype.GetTimeInfo = function () {
  return this.timeInfo;
};

//-----------------------------------------------------------------------------

EndUserSenderInfo.prototype.GetData = function () {
  return this.data;
};

//-----------------------------------------------------------------------------

EndUserSenderInfo.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserSenderInfoFields);
  TransferableObjectToClass(this, obj, { data: "array" });
};

//-----------------------------------------------------------------------------

EndUserSenderInfo.prototype.GetTransferableObject = function () {
  var obj = ObjectToTransferableObject(this, {}, EndUserSenderInfoFields);
  return ObjectToTransferableObject(this, obj, { data: "array" });
};

//-----------------------------------------------------------------------------

var EndUserCertificateInfoFields = {
  isFilled: "boolean",

  version: "long",

  issuer: "string",
  issuerCN: "string",
  serial: "string",

  subject: "string",
  subjCN: "string",
  subjOrg: "string",
  subjOrgUnit: "string",
  subjTitle: "string",
  subjState: "string",
  subjLocality: "string",
  subjFullName: "string",
  subjAddress: "string",
  subjPhone: "string",
  subjEMail: "string",
  subjDNS: "string",
  subjEDRPOUCode: "string",
  subjDRFOCode: "string",

  subjNBUCode: "string",
  subjSPFMCode: "string",
  subjOCode: "string",
  subjOUCode: "string",
  subjUserCode: "string",

  certBeginTime: "time",
  certEndTime: "time",
  isPrivKeyTimesAvail: "boolean",
  privKeyBeginTime: "time",
  privKeyEndTime: "time",

  publicKeyBits: "long",
  publicKey: "string",
  publicKeyID: "string",

  isECDHPublicKeyAvail: "boolean",
  ECDHPublicKeyBits: "long",
  ECDHPublicKey: "string",
  ECDHPublicKeyID: "string",

  issuerPublicKeyID: "string",

  keyUsage: "string",
  extKeyUsages: "string",
  policies: "string",

  crlDistribPoint1: "string",
  crlDistribPoint2: "string",

  isPowerCert: "boolean",

  isSubjTypeAvail: "boolean",
  isSubjCA: "boolean",
};

//-----------------------------------------------------------------------------

var EndUserCertificateInfo = function (pInfo) {
  SetClassID("EndUserCertificateInfo", "1.0.1", this);

  if (
    typeof pInfo != "undefined" &&
    pInfo != null &&
    IsStructureFilled(this, pInfo, EndUserCertificateInfoFields)
  ) {
    StructureToClass(this, pInfo, EndUserCertificateInfoFields);
  } else {
    ClassSetDefaultValues(this, EndUserCertificateInfoFields);
  }
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.IsFilled = function () {
  return this.isFilled;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetVersion = function () {
  return this.version;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetIssuer = function () {
  return this.issuer;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetIssuerCN = function () {
  return this.issuerCN;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSerial = function () {
  return this.serial;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubject = function () {
  return this.subject;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjCN = function () {
  return this.subjCN;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjOrg = function () {
  return this.subjOrg;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjOrgUnit = function () {
  return this.subjOrgUnit;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjTitle = function () {
  return this.subjTitle;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjState = function () {
  return this.subjState;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjLocality = function () {
  return this.subjLocality;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjFullName = function () {
  return this.subjFullName;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjAddress = function () {
  return this.subjAddress;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjPhone = function () {
  return this.subjPhone;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjEMail = function () {
  return this.subjEMail;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjDNS = function () {
  return this.subjDNS;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjEDRPOUCode = function () {
  return this.subjEDRPOUCode;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjDRFOCode = function () {
  return this.subjDRFOCode;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjNBUCode = function () {
  return this.subjNBUCode;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjSPFMCode = function () {
  return this.subjSPFMCode;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjOCode = function () {
  return this.subjOCode;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjOUCode = function () {
  return this.subjOUCode;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetSubjUserCode = function () {
  return this.subjUserCode;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetCertBeginTime = function () {
  return this.certBeginTime;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetCertEndTime = function () {
  return this.certEndTime;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.IsPrivKeyTimesAvail = function () {
  return this.isPrivKeyTimesAvail;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetPrivKeyBeginTime = function () {
  return this.privKeyBeginTime;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetPrivKeyEndTime = function () {
  return this.privKeyEndTime;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetPublicKeyBits = function () {
  return this.publicKeyBits;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetPublicKey = function () {
  return this.publicKey;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetPublicKeyID = function () {
  return this.publicKeyID;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.IsECDHPublicKeyAvail = function () {
  return this.isECDHPublicKeyAvail;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetECDHPublicKeyBits = function () {
  return this.ECDHPublicKeyBits;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetECDHPublicKey = function () {
  return this.ECDHPublicKey;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetECDHPublicKeyID = function () {
  return this.ECDHPublicKeyID;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetIssuerPublicKeyID = function () {
  return this.issuerPublicKeyID;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetKeyUsage = function () {
  return this.keyUsage;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetExtKeyUsages = function () {
  return this.extKeyUsages;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetPolicies = function () {
  return this.policies;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetCrlDistribPoint1 = function () {
  return this.crlDistribPoint1;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetCrlDistribPoint2 = function () {
  return this.crlDistribPoint2;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.IsPowerCert = function () {
  return this.isPowerCert;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.IsSubjTypeAvail = function () {
  return this.isSubjTypeAvail;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.IsSubjCA = function () {
  return this.isSubjCA;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserCertificateInfoFields);
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserCertificateInfoFields);
};

//-----------------------------------------------------------------------------

var EndUserCertificateInfoExFields = {
  isFilled: "boolean",

  version: "long",

  issuer: "string",
  issuerCN: "string",
  serial: "string",

  subject: "string",
  subjCN: "string",
  subjOrg: "string",
  subjOrgUnit: "string",
  subjTitle: "string",
  subjState: "string",
  subjLocality: "string",
  subjFullName: "string",
  subjAddress: "string",
  subjPhone: "string",
  subjEMail: "string",
  subjDNS: "string",
  subjEDRPOUCode: "string",
  subjDRFOCode: "string",

  subjNBUCode: "string",
  subjSPFMCode: "string",
  subjOCode: "string",
  subjOUCode: "string",
  subjUserCode: "string",

  certBeginTime: "time",
  certEndTime: "time",
  isPrivKeyTimesAvail: "boolean",
  privKeyBeginTime: "time",
  privKeyEndTime: "time",

  publicKeyBits: "long",
  publicKey: "string",
  publicKeyID: "string",

  issuerPublicKeyID: "string",

  keyUsage: "string",
  extKeyUsages: "string",
  policies: "string",

  crlDistribPoint1: "string",
  crlDistribPoint2: "string",

  isPowerCert: "boolean",

  isSubjTypeAvail: "boolean",
  isSubjCA: "boolean",
  chainLength: "int",

  UPN: "string",

  publicKeyType: "long",
  keyUsageType: "long",

  RSAModul: "string",
  RSAExponent: "string",

  OCSPAccessInfo: "string",
  issuerAccessInfo: "string",
  TSPAccessInfo: "string",

  isLimitValueAvailable: "boolean",
  limitValue: "long",
  limitValueCurrency: "string",

  subjType: "long",
  subjSubType: "long",

  subjUNZR: "string",

  subjCountry: "string",

  fingerprint: "string",

  isQSCD: "boolean",

  subjUserID: "string",

  certHashType: "long",
};

//-----------------------------------------------------------------------------

var EndUserCertificateInfoEx = function (pInfo, encoder) {
  SetClassID("EndUserCertificateInfoEx", "1.0.9", this);

  if (
    typeof pInfo != "undefined" &&
    pInfo != null &&
    IsStructureFilled(this, pInfo, EndUserCertificateInfoExFields)
  ) {
    StructureToClass(this, pInfo, EndUserCertificateInfoExFields, encoder);
  } else {
    ClassSetDefaultValues(this, EndUserCertificateInfoExFields);
  }
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.IsFilled = function () {
  return this.isFilled;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetVersion = function () {
  return this.version;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetIssuer = function () {
  return this.issuer;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetIssuerCN = function () {
  return this.issuerCN;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSerial = function () {
  return this.serial;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubject = function () {
  return this.subject;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjCN = function () {
  return this.subjCN;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjOrg = function () {
  return this.subjOrg;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjOrgUnit = function () {
  return this.subjOrgUnit;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjTitle = function () {
  return this.subjTitle;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjState = function () {
  return this.subjState;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjLocality = function () {
  return this.subjLocality;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjFullName = function () {
  return this.subjFullName;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjAddress = function () {
  return this.subjAddress;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjPhone = function () {
  return this.subjPhone;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjEMail = function () {
  return this.subjEMail;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjDNS = function () {
  return this.subjDNS;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjEDRPOUCode = function () {
  return this.subjEDRPOUCode;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjDRFOCode = function () {
  return this.subjDRFOCode;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjNBUCode = function () {
  return this.subjNBUCode;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjSPFMCode = function () {
  return this.subjSPFMCode;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjOCode = function () {
  return this.subjOCode;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjOUCode = function () {
  return this.subjOUCode;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjUserCode = function () {
  return this.subjUserCode;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetCertBeginTime = function () {
  return this.certBeginTime;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetCertEndTime = function () {
  return this.certEndTime;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.IsPrivKeyTimesAvail = function () {
  return this.isPrivKeyTimesAvail;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetPrivKeyBeginTime = function () {
  return this.privKeyBeginTime;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetPrivKeyEndTime = function () {
  return this.privKeyEndTime;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetPublicKeyBits = function () {
  return this.publicKeyBits;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetPublicKey = function () {
  return this.publicKey;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetPublicKeyID = function () {
  return this.publicKeyID;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetIssuerPublicKeyID = function () {
  return this.issuerPublicKeyID;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetKeyUsage = function () {
  return this.keyUsage;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetExtKeyUsages = function () {
  return this.extKeyUsages;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetPolicies = function () {
  return this.policies;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetCrlDistribPoint1 = function () {
  return this.crlDistribPoint1;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetCrlDistribPoint2 = function () {
  return this.crlDistribPoint2;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.IsPowerCert = function () {
  return this.isPowerCert;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.IsSubjTypeAvail = function () {
  return this.isSubjTypeAvail;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.IsSubjCA = function () {
  return this.isSubjCA;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetChainLength = function () {
  return this.chainLength;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetUPN = function () {
  return this.UPN;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetPublicKeyType = function () {
  return this.publicKeyType;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetKeyUsageType = function () {
  return this.keyUsageType;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetRSAModul = function () {
  return this.RSAModul;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetRSAExponent = function () {
  return this.RSAExponent;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetOCSPAccessInfo = function () {
  return this.OCSPAccessInfo;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetIssuerAccessInfo = function () {
  return this.issuerAccessInfo;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetTSPAccessInfo = function () {
  return this.TSPAccessInfo;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.IsLimitValueAvailable = function () {
  return this.isLimitValueAvailable;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetLimitValue = function () {
  return this.limitValue;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetLimitValueCurrency = function () {
  return this.limitValueCurrency;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjType = function () {
  return this.subjType;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjSubType = function () {
  return this.subjSubType;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjUNZR = function () {
  return this.subjUNZR;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjCountry = function () {
  return this.subjCountry;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetFingerprint = function () {
  return this.fingerprint;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.IsQSCD = function () {
  return this.isQSCD;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetSubjUserID = function () {
  return this.subjUserID;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetCertHashType = function () {
  return this.certHashType;
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserCertificateInfoExFields);
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserCertificateInfoExFields);
};

//-----------------------------------------------------------------------------

var EndUserRequestInfoFields = {
  isFilled: "boolean",

  version: "long",

  isSimple: "boolean",

  subject: "string",
  subjCN: "string",
  subjOrg: "string",
  subjOrgUnit: "string",
  subjTitle: "string",
  subjState: "string",
  subjLocality: "string",
  subjFullName: "string",
  subjAddress: "string",
  subjPhone: "string",
  subjEMail: "string",
  subjDNS: "string",
  subjEDRPOUCode: "string",
  subjDRFOCode: "string",
  subjNBUCode: "string",
  subjSPFMCode: "string",
  subjOCode: "string",
  subjOUCode: "string",
  subjUserCode: "string",

  isCertTimesAvail: "boolean",
  certBeginTime: "time",
  certEndTime: "time",
  isPrivKeyTimesAvail: "boolean",
  privKeyBeginTime: "time",
  privKeyEndTime: "time",

  publicKeyType: "long",

  publicKeyBits: "long",
  publicKey: "string",
  RSAModul: "string",
  RSAExponent: "string",
  publicKeyID: "string",

  extKeyUsages: "string",

  crlDistribPoint1: "string",
  crlDistribPoint2: "string",

  isSubjTypeAvail: "boolean",
  subjType: "long",
  subjSubType: "long",

  isSelfSigned: "boolean",
  signIssuer: "string",
  signSerial: "string",

  subjUNZR: "string",

  subjCountry: "string",

  isQSCD: "boolean",
};

//-----------------------------------------------------------------------------

var EndUserRequestInfo = function (pInfo) {
  SetClassID("EndUserRequestInfo", "1.0.4", this);

  if (
    typeof pInfo != "undefined" &&
    pInfo != null &&
    IsStructureFilled(this, pInfo, EndUserRequestInfoFields)
  ) {
    StructureToClass(this, pInfo, EndUserRequestInfoFields);
  } else {
    ClassSetDefaultValues(this, EndUserRequestInfoFields);
  }
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.IsFilled = function () {
  return this.isFilled;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetVersion = function () {
  return this.version;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.IsSimple = function () {
  return this.isSimple;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubject = function () {
  return this.subject;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjCN = function () {
  return this.subjCN;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjOrg = function () {
  return this.subjOrg;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjOrgUnit = function () {
  return this.subjOrgUnit;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjTitle = function () {
  return this.subjTitle;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjState = function () {
  return this.subjState;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjLocality = function () {
  return this.subjLocality;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjFullName = function () {
  return this.subjFullName;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjAddress = function () {
  return this.subjAddress;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjPhone = function () {
  return this.subjPhone;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjEMail = function () {
  return this.subjEMail;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjDNS = function () {
  return this.subjDNS;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjEDRPOUCode = function () {
  return this.subjEDRPOUCode;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjDRFOCode = function () {
  return this.subjDRFOCode;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjNBUCode = function () {
  return this.subjNBUCode;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjSPFMCode = function () {
  return this.subjSPFMCode;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjOCode = function () {
  return this.subjOCode;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjOUCode = function () {
  return this.subjOUCode;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjUserCode = function () {
  return this.subjUserCode;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.IsCertTimesAvail = function () {
  return this.isCertTimesAvail;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetCertBeginTime = function () {
  return this.certBeginTime;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetCertEndTime = function () {
  return this.certEndTime;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.IsPrivKeyTimesAvail = function () {
  return this.isPrivKeyTimesAvail;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetPrivKeyBeginTime = function () {
  return this.privKeyBeginTime;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetPrivKeyEndTime = function () {
  return this.privKeyEndTime;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetPublicKeyType = function () {
  return this.publicKeyType;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetPublicKeyBits = function () {
  return this.publicKeyBits;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetPublicKey = function () {
  return this.publicKey;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetRSAModul = function () {
  return this.RSAModul;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetRSAExponent = function () {
  return this.RSAExponent;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetPublicKeyID = function () {
  return this.publicKeyID;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetExtKeyUsages = function () {
  return this.extKeyUsages;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetCrlDistribPoint1 = function () {
  return this.crlDistribPoint1;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetCrlDistribPoint2 = function () {
  return this.crlDistribPoint2;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.IsSubjTypeAvail = function () {
  return this.isSubjTypeAvail;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjType = function () {
  return this.subjType;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjSubType = function () {
  return this.subjSubType;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.IsSelfSigned = function () {
  return this.isSelfSigned;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSignIssuer = function () {
  return this.signIssuer;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSignSerial = function () {
  return this.signSerial;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjUNZR = function () {
  return this.subjUNZR;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetSubjCountry = function () {
  return this.subjCountry;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.IsQSCD = function () {
  return this.isQSCD;
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserRequestInfoFields);
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserRequestInfoFields);
};

//-----------------------------------------------------------------------------

var EndUserFileStoreSettings = NewClass(
  {
    Vendor: "JSC IIT",
    ClassVersion: "1.0.0",
    ClassName: "EndUserFileStoreSettings",
    path: "",
    checkCRLs: "false",
    autoRefresh: "false",
    ownCRLsOnly: "false",
    fullAndDeltaCRLs: "false",
    autoDownloadCRLs: "false",
    saveLoadedCerts: "false",
    expireTime: "3600",
  },
  function (
    path,
    checkCRLs,
    autoRefresh,
    ownCRLsOnly,
    fullAndDeltaCRLs,
    autoDownloadCRLs,
    saveLoadedCerts,
    expireTime,
  ) {
    this.path = path;
    this.checkCRLs = checkCRLs;
    this.autoRefresh = autoRefresh;
    this.ownCRLsOnly = ownCRLsOnly;
    this.fullAndDeltaCRLs = fullAndDeltaCRLs;
    this.autoDownloadCRLs = autoDownloadCRLs;
    this.saveLoadedCerts = saveLoadedCerts;
    this.expireTime = expireTime;
  },
  {
    GetPath: function () {
      return this.path;
    },
    SetPath: function (path) {
      this.path = path;
    },
    GetCheckCRLs: function () {
      return this.checkCRLs;
    },
    SetCheckCRLs: function (checkCRLs) {
      this.checkCRLs = checkCRLs;
    },
    GetAutoRefresh: function () {
      return this.autoRefresh;
    },
    SetAutoRefresh: function (autoRefresh) {
      this.autoRefresh = autoRefresh;
    },
    GetOwnCRLsOnly: function () {
      return this.ownCRLsOnly;
    },
    SetOwnCRLsOnly: function (ownCRLsOnly) {
      this.ownCRLsOnly = ownCRLsOnly;
    },
    GetFullAndDeltaCRLs: function () {
      return this.fullAndDeltaCRLs;
    },
    SetFullAndDeltaCRLs: function (fullAndDeltaCRLs) {
      this.fullAndDeltaCRLs = fullAndDeltaCRLs;
    },
    GetAutoDownloadCRLs: function () {
      return this.autoDownloadCRLs;
    },
    SetAutoDownloadCRLs: function (autoDownloadCRLs) {
      this.autoDownloadCRLs = autoDownloadCRLs;
    },
    GetSaveLoadedCerts: function () {
      return this.saveLoadedCerts;
    },
    SetSaveLoadedCerts: function (saveLoadedCerts) {
      this.saveLoadedCerts = saveLoadedCerts;
    },
    GetExpireTime: function () {
      return this.expireTime;
    },
    SetExpireTime: function (expireTime) {
      this.expireTime = expireTime;
    },
  },
);

//-----------------------------------------------------------------------------

var EndUserProxySettings = NewClass(
  {
    Vendor: "JSC IIT",
    ClassVersion: "1.0.0",
    ClassName: "EndUserProxySettings",
    useProxy: "false",
    anonymous: "true",
    address: "",
    port: "3128",
    user: "",
    password: "",
    savePassword: "false",
  },
  function (useProxy, anonymous, address, port, user, password, savePassword) {
    this.useProxy = useProxy;
    this.anonymous = anonymous;
    this.address = address;
    this.port = port;
    this.user = user;
    this.password = password;
    this.savePassword = savePassword;
  },
  {
    GetUseProxy: function () {
      return this.useProxy;
    },
    SetUseProxy: function (useProxy) {
      this.useProxy = useProxy;
    },
    GetAnonymous: function () {
      return this.anonymous;
    },
    SetAnonymous: function (anonymous) {
      this.anonymous = anonymous;
    },
    GetAddress: function () {
      return this.address;
    },
    SetAddress: function (address) {
      this.address = address;
    },
    GetPort: function () {
      return this.port;
    },
    SetPort: function (port) {
      this.port = port;
    },
    GetUser: function () {
      return this.user;
    },
    SetUser: function (user) {
      this.user = user;
    },
    GetPassword: function () {
      return this.password;
    },
    SetPassword: function (password) {
      this.password = password;
    },
    GetSavePassword: function () {
      return this.savePassword;
    },
    SetSavePassword: function (savePassword) {
      this.savePassword = savePassword;
    },
  },
);

//-----------------------------------------------------------------------------

var EndUserTSPSettings = NewClass(
  {
    Vendor: "JSC IIT",
    ClassVersion: "1.0.0",
    ClassName: "EndUserTSPSettings",
    getStamps: "false",
    address: "",
    port: "80",
  },
  function (getStamps, address, port) {
    this.getStamps = getStamps;
    this.address = address;
    this.port = port;
  },
  {
    GetGetStamps: function () {
      return this.getStamps;
    },
    SetGetStamps: function (getStamps) {
      this.getStamps = getStamps;
    },
    GetAddress: function () {
      return this.address;
    },
    SetAddress: function (address) {
      this.address = address;
    },
    GetPort: function () {
      return this.port;
    },
    SetPort: function (port) {
      this.port = port;
    },
  },
);

//-----------------------------------------------------------------------------

var EndUserOCSPSettings = NewClass(
  {
    Vendor: "JSC IIT",
    ClassVersion: "1.0.0",
    ClassName: "EndUserOCSPSettings",
    useOCSP: "false",
    beforeStore: "false",
    address: "",
    port: "80",
  },
  function (useOCSP, beforeStore, address, port) {
    this.useOCSP = useOCSP;
    this.beforeStore = beforeStore;
    this.address = address;
    this.port = port;
  },
  {
    GetUseOCSP: function () {
      return this.useOCSP;
    },
    SetUseOCSP: function (useOCSP) {
      this.useOCSP = useOCSP;
    },
    GetBeforeStore: function () {
      return this.beforeStore;
    },
    SetBeforeStore: function (beforeStore) {
      this.beforeStore = beforeStore;
    },
    GetAddress: function () {
      return this.address;
    },
    SetAddress: function (address) {
      this.address = address;
    },
    GetPort: function () {
      return this.port;
    },
    SetPort: function (port) {
      this.port = port;
    },
  },
);

//-----------------------------------------------------------------------------

var EndUserCMPSettings = NewClass(
  {
    Vendor: "JSC IIT",
    ClassVersion: "1.0.0",
    ClassName: "EndUserCMPSettings",
    useCMP: "false",
    address: "",
    port: "80",
    commonName: "",
  },
  function (useCMP, address, port, commonName) {
    this.useCMP = useCMP;
    this.address = address;
    this.port = port;
    this.commonName = commonName;
  },
  {
    GetUseCMP: function () {
      return this.useCMP;
    },
    SetUseCMP: function (useCMP) {
      this.useCMP = useCMP;
    },
    GetAddress: function () {
      return this.address;
    },
    SetAddress: function (address) {
      this.address = address;
    },
    GetPort: function () {
      return this.port;
    },
    SetPort: function (port) {
      this.port = port;
    },
    GetCommonName: function () {
      return this.commonName;
    },
    SetCommonName: function (commonName) {
      this.commonName = commonName;
    },
  },
);

//-----------------------------------------------------------------------------

var EndUserLDAPSettings = NewClass(
  {
    Vendor: "JSC IIT",
    ClassVersion: "1.0.0",
    ClassName: "EndUserLDAPSettings",
    useLDAP: "false",
    address: "",
    port: "80",
    anonymous: "true",
    user: "",
    password: "",
  },
  function (useLDAP, address, port, anonymous, user, password) {
    this.useLDAP = useLDAP;
    this.address = address;
    this.port = port;
    this.anonymous = anonymous;
    this.user = user;
    this.password = password;
  },
  {
    GetUseLDAP: function () {
      return this.useLDAP;
    },
    SetUseLDAP: function (useLDAP) {
      this.useLDAP = useLDAP;
    },
    GetAddress: function () {
      return this.address;
    },
    SetAddress: function (address) {
      this.address = address;
    },
    GetPort: function () {
      return this.port;
    },
    SetPort: function (port) {
      this.port = port;
    },
    GetAnonymous: function () {
      return this.anonymous;
    },
    SetAnonymous: function (anonymous) {
      this.anonymous = anonymous;
    },
    GetUser: function () {
      return this.user;
    },
    SetUser: function (user) {
      this.user = user;
    },
    GetPassword: function () {
      return this.password;
    },
    SetPassword: function (password) {
      this.password = password;
    },
  },
);

//-----------------------------------------------------------------------------

var EndUserModeSettings = NewClass(
  {
    Vendor: "JSC IIT",
    ClassVersion: "1.0.0",
    ClassName: "EndUserModeSettings",
    offlineMode: "false",
  },
  function (offlineMode) {
    this.offlineMode = offlineMode;
  },
  {
    GetOfflineMode: function () {
      return this.offlineMode;
    },
    SetOfflineMode: function (offlineMode) {
      this.offlineMode = offlineMode;
    },
  },
);

//-----------------------------------------------------------------------------

var EndUserOCSPAccessInfoModeSettings = NewClass(
  {
    Vendor: "JSC IIT",
    ClassVersion: "1.0.0",
    ClassName: "EndUserOCSPAccessInfoModeSettings",
    enabled: "false",
  },
  function (enabled) {
    this.enabled = enabled;
  },
  {
    GetEnabled: function () {
      return this.enabled;
    },
    SetEnabled: function (enabled) {
      this.enabled = enabled;
    },
  },
);

//-----------------------------------------------------------------------------

var EndUserOCSPAccessInfoSettings = NewClass(
  {
    Vendor: "JSC IIT",
    ClassVersion: "1.0.0",
    ClassName: "EndUserOCSPAccessInfoSettings",
    issuerCN: "",
    address: "",
    port: "",
  },
  function (issuerCN, address, port) {
    this.issuerCN = issuerCN;
    this.address = address;
    this.port = port;
  },
  {
    GetIssuerCN: function () {
      return this.issuerCN;
    },
    SetIssuerCN: function (issuerCN) {
      this.issuerCN = issuerCN;
    },
    GetAddress: function () {
      return this.address;
    },
    SetAddress: function (address) {
      this.address = address;
    },
    GetPort: function () {
      return this.port;
    },
    SetPort: function (port) {
      this.port = port;
    },
  },
);

//=============================================================================

var EndUserInfoFields = {
  version: "long",
  commonName: "string",
  locality: "string",
  state: "string",
  organization: "string",
  orgUnit: "string",
  title: "string",
  street: "string",
  phone: "string",
  surname: "string",
  givenname: "string",
  EMail: "string",
  DNS: "string",
  EDRPOUCode: "string",
  DRFOCode: "string",
  NBUCode: "string",
  SPFMCode: "string",
  OCode: "string",
  OUCode: "string",
  userCode: "string",
  UPN: "string",
  UNZR: "string",
  country: "string",
};

//-----------------------------------------------------------------------------

var _EndUserInfo = function () {
  SetClassID("EndUserInfo", "1.0.3", this);

  ClassSetDefaultValues(this, EndUserInfoFields);

  this.version = 3;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetVersion = function () {
  return this.version;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetVersion = function (version) {
  this.version = version;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetCommonName = function () {
  return this.commonName;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetCommonName = function (commonName) {
  this.commonName = commonName;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetLocality = function () {
  return this.locality;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetLocality = function (locality) {
  this.locality = locality;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetState = function () {
  return this.state;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetState = function (state) {
  this.state = state;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetOrganization = function () {
  return this.organization;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetOrganization = function (organization) {
  this.organization = organization;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetOrgUnit = function () {
  return this.orgUnit;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetOrgUnit = function (orgUnit) {
  this.orgUnit = orgUnit;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetTitle = function () {
  return this.title;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetTitle = function (title) {
  this.title = title;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetStreet = function () {
  return this.street;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetStreet = function (street) {
  this.street = street;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetPhone = function () {
  return this.phone;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetPhone = function (phone) {
  this.phone = phone;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetSurname = function () {
  return this.surname;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetSurname = function (surname) {
  this.surname = surname;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetGivenname = function () {
  return this.givenname;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetGivenname = function (givenname) {
  this.givenname = givenname;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetEMail = function () {
  return this.EMail;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetEMail = function (EMail) {
  this.EMail = EMail;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetDNS = function () {
  return this.DNS;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetDNS = function (DNS) {
  this.DNS = DNS;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetEDRPOUCode = function () {
  return this.EDRPOUCode;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetEDRPOUCode = function (EDRPOUCode) {
  this.EDRPOUCode = EDRPOUCode;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetDRFOCode = function () {
  return this.DRFOCode;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetDRFOCode = function (DRFOCode) {
  this.DRFOCode = DRFOCode;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetNBUCode = function () {
  return this.NBUCode;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetNBUCode = function (NBUCode) {
  this.NBUCode = NBUCode;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetSPFMCode = function () {
  return this.SPFMCode;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetSPFMCode = function (SPFMCode) {
  this.SPFMCode = SPFMCode;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetOCode = function () {
  return this.OCode;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetOCode = function (OCode) {
  this.OCode = OCode;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetOUCode = function () {
  return this.OUCode;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetOUCode = function (OUCode) {
  this.OUCode = OUCode;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetUserCode = function () {
  return this.userCode;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetUserCode = function (userCode) {
  this.userCode = userCode;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetUPN = function () {
  return this.UPN;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetUPN = function (UPN) {
  this.UPN = UPN;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetUNZR = function () {
  return this.UNZR;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetUNZR = function (UNZR) {
  this.UNZR = UNZR;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetCountry = function () {
  return this.country;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetCountry = function (country) {
  this.country = country;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserInfoFields);
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserInfoFields);
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetOrganiztion = function () {
  return this.organization;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetOrganiztion = function (organization) {
  this.organization = organization;
};

//-----------------------------------------------------------------------------

function EndUserInfo() {
  return new _EndUserInfo();
}

//=============================================================================

var EndUserParamsFields = {
  SN: "int",
  commonName: "string",
  locality: "string",
  state: "string",
  organization: "string",
  orgUnit: "string",
  title: "string",
  street: "string",
  phone: "string",
  surname: "string",
  givenname: "string",
  EMail: "string",
  DNS: "string",
  EDRPOUCode: "string",
  DRFOCode: "string",
  NBUCode: "string",
  SPFMCode: "string",
  information: "string",
  passPhrase: "string",
  isPublishCertificate: "boolean",
  RAAdminSN: "int",
};

//-----------------------------------------------------------------------------

var EndUserParams = function (pParams) {
  SetClassID("EndUserParams", "1.0.1", this);

  ClassSetDefaultValues(this, EndUserParamsFields);

  if (typeof pParams != "undefined" && pParams != null) {
    var pCurPtr = pParams | 0;

    var GetInt = function () {
      var val = Module.getValue(pCurPtr, "i32") | 0;
      pCurPtr += 4;
      return val;
    };
    var GetBoolean = function () {
      var val = Module.getValue(pCurPtr, "i32") == EU_TRUE ? true : false;
      pCurPtr += 4;
      return val;
    };

    var GetString = function (maxLength) {
      var val = CP1251PointerToUTF8(pCurPtr);
      pCurPtr += maxLength;
      return val;
    };

    this.SN = GetInt();
    this.commonName = GetString(EU_COMMON_NAME_MAX_LENGTH);
    this.locality = GetString(EU_LOCALITY_MAX_LENGTH);
    this.state = GetString(EU_STATE_MAX_LENGTH);
    this.organization = GetString(EU_ORGANIZATION_MAX_LENGTH);
    this.orgUnit = GetString(EU_ORG_UNIT_MAX_LENGTH);
    this.title = GetString(EU_TITLE_MAX_LENGTH);
    this.street = GetString(EU_STREET_MAX_LENGTH);
    this.phone = GetString(EU_PHONE_MAX_LENGTH);
    this.surname = GetString(EU_SURNAME_MAX_LENGTH);
    this.givenname = GetString(EU_GIVENNAME_MAX_LENGTH);
    this.EMail = GetString(EU_EMAIL_MAX_LENGTH);
    this.DNS = GetString(EU_ADDRESS_MAX_LENGTH);
    this.EDRPOUCode = GetString(EU_EDRPOU_MAX_LENGTH);
    this.DRFOCode = GetString(EU_DRFO_MAX_LENGTH);
    this.NBUCode = GetString(EU_NBU_MAX_LENGTH);
    this.SPFMCode = GetString(EU_SPFM_MAX_LENGTH);
    this.information = GetString(EU_INFORMATION_MAX_LENGTH);
    this.passPhrase = GetString(EU_PASS_PHRASE_MAX_LENGTH);
    this.publishCertificate = GetBoolean();
    this.RAAdminSN = GetInt();
  }
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetSN = function () {
  return this.SN;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetSN = function (SN) {
  this.SN = SN;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetCommonName = function () {
  return this.commonName;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetCommonName = function (commonName) {
  this.commonName = commonName;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetLocality = function () {
  return this.locality;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetLocality = function (locality) {
  this.locality = locality;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetState = function () {
  return this.state;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetState = function (state) {
  this.state = state;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetOrganization = function () {
  return this.organization;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetOrganization = function (organization) {
  this.organization = organization;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetOrgUnit = function () {
  return this.orgUnit;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetOrgUnit = function (orgUnit) {
  this.orgUnit = orgUnit;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetTitle = function () {
  return this.title;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetTitle = function (title) {
  this.title = title;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetStreet = function () {
  return this.street;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetStreet = function (street) {
  this.street = street;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetPhone = function () {
  return this.phone;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetPhone = function (phone) {
  this.phone = phone;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetSurname = function () {
  return this.surname;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetSurname = function (surname) {
  this.surname = surname;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetGivenname = function () {
  return this.givenname;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetGivenname = function (givenname) {
  this.givenname = givenname;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetEMail = function () {
  return this.EMail;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetEMail = function (EMail) {
  this.EMail = EMail;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetDNS = function () {
  return this.DNS;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetDNS = function (DNS) {
  this.DNS = DNS;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetEDRPOUCode = function () {
  return this.EDRPOUCode;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetEDRPOUCode = function (EDRPOUCode) {
  this.EDRPOUCode = EDRPOUCode;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetDRFOCode = function () {
  return this.DRFOCode;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetDRFOCode = function (DRFOCode) {
  this.DRFOCode = DRFOCode;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetNBUCode = function () {
  return this.NBUCode;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetNBUCode = function (NBUCode) {
  this.NBUCode = NBUCode;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetSPFMCode = function () {
  return this.SPFMCode;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetSPFMCode = function (SPFMCode) {
  this.SPFMCode = SPFMCode;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetInformation = function () {
  return this.information;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetInformation = function (information) {
  this.information = information;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetPassPhrase = function () {
  return this.passPhrase;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetPassPhrase = function (passPhrase) {
  this.passPhrase = passPhrase;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.IsPublishCertificate = function () {
  return this.isPublishCertificate;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.IsPublishCertificate = function (isPublishCertificate) {
  this.isPublishCertificate = isPublishCertificate;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetRAAdminSN = function () {
  return this.RAAdminSN;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetRAAdminSN = function (RAAdminSN) {
  this.RAAdminSN = RAAdminSN;
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserParamsFields);
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserParamsFields);
};

//=============================================================================

var EndUserPrivateKeyFields = {
  privateKey: "array",
  privateKeyName: "string",
  privateKeyInfo: "array",
  privateKeyInfoName: "string",
  uaRequest: "array",
  uaRequestName: "string",
  uaKEPRequest: "array",
  uaKEPRequestName: "string",
  rsaRequest: "array",
  rsaRequestName: "string",
  ecdsaRequest: "array",
  ecdsaRequestName: "string",
};

//-----------------------------------------------------------------------------

var EndUserPrivateKey = function (
  privateKey,
  privateKeyInfo,
  uaRequest,
  uaRequestName,
  uaKEPRequest,
  uaKEPRequestName,
  rsaRequest,
  rsaRequestName,
  ecdsaRequest,
  ecdsaRequestName,
) {
  SetClassID("EndUserPrivateKey", "1.0.1", this);

  this.privateKey = privateKey;
  this.privateKeyName = "Key-6.pfx";
  this.privateKeyInfo = privateKeyInfo;
  this.privateKeyInfoName = "Key-11.dat";
  this.uaRequest = uaRequest;
  this.uaRequestName = uaRequestName;
  this.uaKEPRequest = uaKEPRequest;
  this.uaKEPRequestName = uaKEPRequestName;
  this.rsaRequest = rsaRequest;
  this.rsaRequestName = rsaRequestName;
  this.ecdsaRequest = ecdsaRequest;
  this.ecdsaRequestName = ecdsaRequestName;

  /**
   * @deprecated
   */
  this.internationalRequest = rsaRequest;
  this.internationalRequestName = rsaRequestName;
};

//-----------------------------------------------------------------------------

EndUserPrivateKey.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserPrivateKeyFields);
};

//-----------------------------------------------------------------------------

EndUserPrivateKey.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserPrivateKeyFields);
};

//-----------------------------------------------------------------------------

EndUserPrivateKey.prototype.GetPrivateKey = function () {
  return this.privateKey;
};

//-----------------------------------------------------------------------------

EndUserPrivateKey.prototype.GetPrivateKeyName = function () {
  return this.privateKeyName;
};

//-----------------------------------------------------------------------------

EndUserPrivateKey.prototype.GetPrivateKeyInfo = function () {
  return this.privateKeyInfo;
};

//-----------------------------------------------------------------------------

EndUserPrivateKey.prototype.GetPrivateKeyInfoName = function () {
  return this.privateKeyInfoName;
};

//-----------------------------------------------------------------------------

EndUserPrivateKey.prototype.GetUARequest = function () {
  return this.uaRequest;
};

//-----------------------------------------------------------------------------

EndUserPrivateKey.prototype.GetUARequestName = function () {
  return this.uaRequestName;
};

//-----------------------------------------------------------------------------

EndUserPrivateKey.prototype.GetUAKEPRequest = function () {
  return this.uaKEPRequest;
};

//-----------------------------------------------------------------------------

EndUserPrivateKey.prototype.GetUAKEPRequestName = function () {
  return this.uaKEPRequestName;
};

//-----------------------------------------------------------------------------

/**
 * @deprecated. Use GetRSARequest()
 */
EndUserPrivateKey.prototype.GetInternationalRequest = function () {
  return this.rsaRequest;
};

//-----------------------------------------------------------------------------

/**
 * @deprecated. Use GetRSARequestName()
 */
EndUserPrivateKey.prototype.GetInternationalRequestName = function () {
  return this.rsaRequestName;
};

//-----------------------------------------------------------------------------

EndUserPrivateKey.prototype.GetRSARequest = function () {
  return this.rsaRequest;
};

//-----------------------------------------------------------------------------

EndUserPrivateKey.prototype.GetRSARequestName = function () {
  return this.rsaRequestName;
};

//-----------------------------------------------------------------------------

EndUserPrivateKey.prototype.GetECDSARequest = function () {
  return this.ecdsaRequest;
};

//-----------------------------------------------------------------------------

EndUserPrivateKey.prototype.GetECDSARequestName = function () {
  return this.ecdsaRequestName;
};

//=============================================================================

var EndUserContextFields = {
  context: "long",
};

//-----------------------------------------------------------------------------

var EndUserContext = function (context) {
  SetClassID("EndUserContext", "1.0.1", this);

  this.context = context;
};

//-----------------------------------------------------------------------------

EndUserContext.prototype.GetContext = function () {
  return this.context;
};

//-----------------------------------------------------------------------------

EndUserContext.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserContextFields);
};

//-----------------------------------------------------------------------------

EndUserContext.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserContextFields);
};

//=============================================================================

var EndUserPrivateKeyContextFields = {
  context: "long",
  ownerInfo: "ownerInfo",
};

//-----------------------------------------------------------------------------

var EndUserPrivateKeyContext = function (context, ownerInfo) {
  SetClassID("EndUserPrivateKeyContext", "1.0.1", this);

  this.context = context;
  this.ownerInfo = ownerInfo;
};

//-----------------------------------------------------------------------------

EndUserPrivateKeyContext.prototype.GetContext = function () {
  return this.context;
};

//-----------------------------------------------------------------------------

EndUserPrivateKeyContext.prototype.GetOwnerInfo = function () {
  return this.ownerInfo;
};

//-----------------------------------------------------------------------------

EndUserPrivateKeyContext.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserPrivateKeyContextFields);
};

//-----------------------------------------------------------------------------

EndUserPrivateKeyContext.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserPrivateKeyContextFields);
};

//=============================================================================

var EndUserPrivateKeyInfo = NewClass(
  {
    Vendor: "JSC IIT",
    ClassVersion: "1.0.0",
    ClassName: "EndUserPrivateKeyInfo",
    keyType: 0,
    keyUsage: 0,
    keyIDs: [],
    isTrustedKeyIDs: false,
  },
  function (keyType, keyUsage, keyIDs) {
    this.keyType = keyType;
    this.keyUsage = keyUsage;
    this.keyIDs = keyIDs;
    this.isTrustedKeyIDs = keyIDs.length == 1;
  },
  {
    GetKeyType: function () {
      return this.keyType;
    },
    GetKeyUsage: function () {
      return this.keyUsage;
    },
    GetKeyIDs: function () {
      return this.keyIDs;
    },
    GetIsTrustedKeyIDs: function () {
      return this.isTrustedKeyIDs;
    },
  },
);

//-----------------------------------------------------------------------------

var EndUserHashContext = NewClass(
  {
    Vendor: "JSC IIT",
    ClassVersion: "1.0.0",
    ClassName: "EndUserHashContext",
    context: 0,
  },
  function (context) {
    this.context = context;
  },
  {
    GetContext: function () {
      return this.context;
    },
  },
);

//-----------------------------------------------------------------------------

var EndUserCertificateFields = {
  infoEx: "EndUserCertificateInfoEx",
  data: "array",
};

//-----------------------------------------------------------------------------

var EndUserCertificate = function (infoEx, data) {
  SetClassID("EndUserCertificate", "1.0.1", this);

  this.infoEx = infoEx;
  this.data = data;
};

//-----------------------------------------------------------------------------

EndUserCertificate.prototype.GetInfoEx = function () {
  return this.infoEx;
};

//-----------------------------------------------------------------------------

EndUserCertificate.prototype.GetData = function () {
  return this.data;
};

//-----------------------------------------------------------------------------

EndUserCertificate.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserCertificateFields);
};

//-----------------------------------------------------------------------------

EndUserCertificate.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserCertificateFields);
};

//-----------------------------------------------------------------------------

var EndUserSenderInfoEx = NewClass(
  {
    Vendor: "JSC IIT",
    ClassVersion: "1.0.0",
    ClassName: "EndUserSenderInfoEx",
    isDynamicKey: 0,
    certInfoEx: 0,
    certificate: 0,
  },
  function (isDynamicKey, certInfoEx, certificate) {
    this.isDynamicKey = isDynamicKey;
    this.certInfoEx = certInfoEx;
    this.certificate = certificate;
  },
  {
    GetIsDynamic: function () {
      return this.isDynamicKey;
    },
    GetCertInfoEx: function () {
      return this.certInfoEx;
    },
    GetCertificate: function () {
      return this.certificate;
    },
  },
);

//-----------------------------------------------------------------------------

var EndUserRecipientInfo = NewClass(
  {
    Vendor: "JSC IIT",
    ClassVersion: "1.0.0",
    ClassName: "EndUserRecipientInfo",
    infoType: 0,
    issuer: 0,
    serial: 0,
    publicKeyID: 0,
  },
  function (infoType, issuer, serial, publicKeyID) {
    this.infoType = infoType;
    this.issuer = issuer;
    this.serial = serial;
    this.publicKeyID = publicKeyID;
  },
  {
    GetInfoType: function () {
      return this.infoType;
    },
    GetIssuer: function () {
      return this.issuer;
    },
    GetSerial: function () {
      return this.serial;
    },
    GetPublicKeyID: function () {
      return this.publicKeyID;
    },
  },
);

//=============================================================================

var EndUserSessionFields = {
  handle: "long",
  data: "array",
};

//-----------------------------------------------------------------------------

var EndUserSession = function (handle, data) {
  SetClassID("EndUserSession", "1.0.1", this);

  this.handle = handle;
  this.data = data;
};

//-----------------------------------------------------------------------------

EndUserSession.prototype.GetHandle = function () {
  return this.handle;
};

//-----------------------------------------------------------------------------

EndUserSession.prototype.SetHandle = function (handle) {
  this.handle = handle;
};

//-----------------------------------------------------------------------------

EndUserSession.prototype.GetData = function () {
  return this.data;
};

//-----------------------------------------------------------------------------

EndUserSession.prototype.SetData = function (data) {
  this.data = data;
};

//-----------------------------------------------------------------------------

EndUserSession.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserSessionFields);
};

//-----------------------------------------------------------------------------

EndUserSession.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserSessionFields);
};

//=============================================================================

var EndUserTransportHeaderFields = {
  receiptNumber: "long",
  cryptoData: "array",
};

//-----------------------------------------------------------------------------

var EndUserTransportHeader = function (receiptNumber, cryptoData) {
  SetClassID("EndUserTransportHeader", "1.0.1", this);

  this.receiptNumber = receiptNumber;
  this.cryptoData = cryptoData;
};

//-----------------------------------------------------------------------------

EndUserTransportHeader.prototype.GetReceiptNumber = function () {
  return this.receiptNumber;
};

//-----------------------------------------------------------------------------

EndUserTransportHeader.prototype.GetCryptoData = function () {
  return this.cryptoData;
};

//-----------------------------------------------------------------------------

EndUserTransportHeader.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserTransportHeader);
};

//-----------------------------------------------------------------------------

EndUserTransportHeader.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserTransportHeader);
};

//=============================================================================

var EndUserCryptoHeaderFields = {
  CAType: "string",
  headerType: "long",
  headerSize: "long",
  cryptoData: "array",
};

//-----------------------------------------------------------------------------

var EndUserCryptoHeader = function (
  caType,
  headerType,
  headerSize,
  cryptoData,
) {
  SetClassID("EndUserCryptoHeader", "1.0.1", this);

  this.CAType = caType;
  this.headerType = headerType;
  this.headerSize = headerSize;
  this.cryptoData = cryptoData;
};

//-----------------------------------------------------------------------------

EndUserCryptoHeader.prototype.GetCAType = function () {
  return this.CAType;
};

//-----------------------------------------------------------------------------

EndUserCryptoHeader.prototype.GetHeaderType = function () {
  return this.headerType;
};

//-----------------------------------------------------------------------------

EndUserCryptoHeader.prototype.GetHeaderSize = function () {
  return this.headerSize;
};

//-----------------------------------------------------------------------------

EndUserCryptoHeader.prototype.GetCryptoData = function () {
  return this.cryptoData;
};

//-----------------------------------------------------------------------------

EndUserCryptoHeader.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserCryptoHeaderFields);
};

//-----------------------------------------------------------------------------

EndUserCryptoHeader.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserCryptoHeaderFields);
};

//=============================================================================

var EndUserJKSPrivateKeyFields = {
  privateKey: "array",
  certificates: "array",
};

//-----------------------------------------------------------------------------

var EndUserJKSPrivateKey = function (privateKey, certificates) {
  SetClassID("EndUserJKSPrivateKey", "1.0.1", this);

  this.privateKey = privateKey;
  this.certificates = certificates;
};

//-----------------------------------------------------------------------------

EndUserJKSPrivateKey.prototype.GetPrivateKey = function () {
  return this.privateKey;
};

//-----------------------------------------------------------------------------

EndUserJKSPrivateKey.prototype.GetCertificatesCount = function () {
  return this.certificates.length;
};

//-----------------------------------------------------------------------------

EndUserJKSPrivateKey.prototype.GetCertificate = function (index) {
  if (index < 0 || index >= this.certificates.length) return null;

  return this.certificates[index];
};

//-----------------------------------------------------------------------------

EndUserJKSPrivateKey.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserJKSPrivateKeyFields);
};

//-----------------------------------------------------------------------------

EndUserJKSPrivateKey.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserJKSPrivateKeyFields);
};

//=============================================================================

var EndUserSSSignHashResultFields = {
  version: "long",
  error: "long",
  hash: "string",
  signature: "string",
  statusCode: "long",
  status: "string",
};

//-----------------------------------------------------------------------------

var EndUserSSSignHashResult = function (pInfo) {
  SetClassID("EndUserSSSignHashResult", "1.0.1", this);

  if (typeof pInfo != "undefined" && pInfo != null) {
    StructureToClass(this, pInfo, EndUserSSSignHashResultFields);
  } else {
    ClassSetDefaultValues(this, EndUserSSSignHashResultFields);
  }
};

//-----------------------------------------------------------------------------

EndUserSSSignHashResult.prototype.GetVersion = function () {
  return this.version;
};

//-----------------------------------------------------------------------------

EndUserSSSignHashResult.prototype.GetError = function () {
  return this.error;
};

//-----------------------------------------------------------------------------

EndUserSSSignHashResult.prototype.GetHash = function () {
  return this.hash;
};

//-----------------------------------------------------------------------------

EndUserSSSignHashResult.prototype.GetSignature = function () {
  return this.signature;
};

//-----------------------------------------------------------------------------

EndUserSSSignHashResult.prototype.GetStatusCode = function () {
  return this.statusCode;
};

//-----------------------------------------------------------------------------

EndUserSSSignHashResult.prototype.GetStatus = function () {
  return this.status;
};

//-----------------------------------------------------------------------------

EndUserSSSignHashResult.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserSSSignHashResultFields);
};

//-----------------------------------------------------------------------------

EndUserSSSignHashResult.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserSSSignHashResultFields);
};

//=============================================================================

var EndUserReferenceFields = {
  name: "string",
  data: "array",
};

//-----------------------------------------------------------------------------

var EndUserReference = function (name, data) {
  SetClassID("EndUserReference", "1.0.1", this);

  this.name = name;
  this.data = data;
};

//-----------------------------------------------------------------------------

EndUserReference.prototype.GetName = function () {
  return this.name;
};

//-----------------------------------------------------------------------------

EndUserReference.prototype.SetName = function (name) {
  this.name = name;
};

//-----------------------------------------------------------------------------

EndUserReference.prototype.GetData = function () {
  return this.data;
};

//-----------------------------------------------------------------------------

EndUserReference.prototype.SetData = function (data) {
  this.data = data;
};

//-----------------------------------------------------------------------------

EndUserReference.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserReferenceFields);
};

//-----------------------------------------------------------------------------

EndUserReference.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserReferenceFields);
};

//=============================================================================

var EndUserTSLSettingsFields = {
  useTSL: "boolean",
  autoDownloadTSL: "boolean",
  tslAddress: "string",
};

//-----------------------------------------------------------------------------

var EndUserTSLSettings = function (useTSL, autoDownloadTSL, tslAddress) {
  SetClassID("EndUserTSLSettings", "1.0.1", this);

  this.useTSL = useTSL;
  this.autoDownloadTSL = autoDownloadTSL;
  this.tslAddress = tslAddress;
};

//-----------------------------------------------------------------------------

EndUserTSLSettings.prototype.GetUseTSL = function () {
  return this.useTSL;
};

//-----------------------------------------------------------------------------

EndUserTSLSettings.prototype.SetUseTSL = function (useTSL) {
  this.useTSL = useTSL;
};

//-----------------------------------------------------------------------------

EndUserTSLSettings.prototype.GetAutoDownloadTSL = function () {
  return this.autoDownloadTSL;
};

//-----------------------------------------------------------------------------

EndUserTSLSettings.prototype.SetAutoDownloadTSL = function (autoDownloadTSL) {
  this.autoDownloadTSL = autoDownloadTSL;
};

//-----------------------------------------------------------------------------

EndUserTSLSettings.prototype.GetTSLAddress = function () {
  return this.tslAddress;
};

//-----------------------------------------------------------------------------

EndUserTSLSettings.prototype.SetTSLAddress = function (tslAddress) {
  this.tslAddress = tslAddress;
};

//-----------------------------------------------------------------------------

EndUserTSLSettings.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserTSLSettingsFields);
};

//-----------------------------------------------------------------------------

EndUserTSLSettings.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserTSLSettingsFields);
};

//=============================================================================

var EndUserSignerFields = {
  unsignedSigner: "array",
  attrsHash: "array",
};

//-----------------------------------------------------------------------------

var EndUserSigner = function (unsignedSigner, attrsHash) {
  SetClassID("EndUserSigner", "1.0.1", this);

  this.unsignedSigner = unsignedSigner;
  this.attrsHash = attrsHash;
};

//-----------------------------------------------------------------------------

EndUserSigner.prototype.GetUnsignedSigner = function () {
  return this.unsignedSigner;
};

//-----------------------------------------------------------------------------

EndUserSigner.prototype.GetAttrsHash = function () {
  return this.attrsHash;
};

//-----------------------------------------------------------------------------

EndUserSigner.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserSignerFields);
};

//-----------------------------------------------------------------------------

EndUserSigner.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserSignerFields);
};

//=============================================================================

var EndUserASiCSignerFields = {
  signatureReference: "string",
  attrsHash: "array",
  asicData: "array",
};

//-----------------------------------------------------------------------------

var EndUserASiCSigner = function (signatureReference, attrsHash, asicData) {
  SetClassID("EndUserASiCSigner", "1.0.1", this);

  this.signatureReference = signatureReference;
  this.attrsHash = attrsHash;
  this.asicData = asicData;
};

//-----------------------------------------------------------------------------

EndUserASiCSigner.prototype.GetSignatureReference = function () {
  return this.signatureReference;
};

//-----------------------------------------------------------------------------

EndUserASiCSigner.prototype.GetAttrsHash = function () {
  return this.attrsHash;
};

//-----------------------------------------------------------------------------

EndUserASiCSigner.prototype.GetASiCData = function () {
  return this.asicData;
};

//-----------------------------------------------------------------------------

EndUserASiCSigner.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserASiCSignerFields);
};

//-----------------------------------------------------------------------------

EndUserASiCSigner.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserASiCSignerFields);
};

//=============================================================================

var EndUserPDFSignerFields = {
  signatureReference: "string",
  attrsHash: "array",
  asicData: "array",
};

//-----------------------------------------------------------------------------

var EndUserPDFSigner = function (signatureReference, attrsHash, pdfData) {
  SetClassID("EndUserPDFSigner", "1.0.1", this);

  this.signatureReference = signatureReference;
  this.attrsHash = attrsHash;
  this.pdfData = pdfData;
};

//-----------------------------------------------------------------------------

EndUserPDFSigner.prototype.GetSignatureReference = function () {
  return this.signatureReference;
};

//-----------------------------------------------------------------------------

EndUserPDFSigner.prototype.GetAttrsHash = function () {
  return this.attrsHash;
};

//-----------------------------------------------------------------------------

EndUserPDFSigner.prototype.GetPDFData = function () {
  return this.pdfData;
};

//-----------------------------------------------------------------------------

EndUserPDFSigner.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserPDFSignerFields);
};

//-----------------------------------------------------------------------------

EndUserPDFSigner.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserPDFSignerFields);
};

//=============================================================================

var EndUserXAdESSignerFields = {
  signatureReference: "string",
  attrsHash: "array",
  xadesData: "array",
};

//-----------------------------------------------------------------------------

var EndUserXAdESSigner = function (signatureReference, attrsHash, xadesData) {
  SetClassID("EndUserXAdESSigner", "1.0.1", this);

  this.signatureReference = signatureReference;
  this.attrsHash = attrsHash;
  this.xadesData = xadesData;
};

//-----------------------------------------------------------------------------

EndUserXAdESSigner.prototype.GetSignatureReference = function () {
  return this.signatureReference;
};

//-----------------------------------------------------------------------------

EndUserXAdESSigner.prototype.GetAttrsHash = function () {
  return this.attrsHash;
};

//-----------------------------------------------------------------------------

EndUserXAdESSigner.prototype.GetXAdESData = function () {
  return this.xadesData;
};

//-----------------------------------------------------------------------------

EndUserXAdESSigner.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserXAdESSignerFields);
};

//-----------------------------------------------------------------------------

EndUserXAdESSigner.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserXAdESSignerFields);
};

//=============================================================================

var EndUserMakeCertificateResultFields = {
  privateKey: "array",
  certificates: "array",
  cmpRequest: "array",
};

//-----------------------------------------------------------------------------

var EndUserMakeCertificateResult = function (
  privateKey,
  certificates,
  cmpRequest,
) {
  SetClassID("EndUserMakeCertificateResult", "1.0.1", this);

  this.privateKey = privateKey;
  this.certificates = certificates;
  this.cmpRequest = cmpRequest;
};

//-----------------------------------------------------------------------------

EndUserMakeCertificateResult.prototype.GetPrivateKey = function () {
  return this.privateKey;
};

//-----------------------------------------------------------------------------

EndUserMakeCertificateResult.prototype.GetCertificatesCount = function () {
  return this.certificates.length;
};

//-----------------------------------------------------------------------------

EndUserMakeCertificateResult.prototype.GetCertificate = function (index) {
  if (index < 0 || index >= this.certificates.length) return null;

  return this.certificates[index];
};

//-----------------------------------------------------------------------------

EndUserMakeCertificateResult.prototype.GetCMPRequest = function () {
  return this.cmpRequest;
};

//-----------------------------------------------------------------------------

EndUserMakeCertificateResult.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserMakeCertificateResult);
};

//-----------------------------------------------------------------------------

EndUserMakeCertificateResult.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserMakeCertificateResult);
};

//=============================================================================

var EndUserDataHashFields = {
  hashAlgo: "number",
  hash: "array",
};

//-----------------------------------------------------------------------------

var EndUserDataHash = function (hashAlgo, hash) {
  SetClassID("EndUserDataHash", "1.0.1", this);

  this.hashAlgo = hashAlgo;
  this.hash = hash;
};

//-----------------------------------------------------------------------------

EndUserDataHash.prototype.GetHashAlgo = function () {
  return this.hashAlgo;
};

//-----------------------------------------------------------------------------

EndUserDataHash.prototype.GetHash = function () {
  return this.hash;
};

//-----------------------------------------------------------------------------

EndUserDataHash.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserDataHashFields);
};

//-----------------------------------------------------------------------------

EndUserDataHash.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserDataHashFields);
};

//=============================================================================

// WARNING! Next items are depracated.

/**
 * Use EU_SIGN_TYPE_CADES_* for CAdES
 * Use EU_XADES_SIGN_LEVEL_* for XAdES
 */
var EU_ASIC_SIGN_LEVEL_BES = 1;
var EU_ASIC_SIGN_LEVEL_T = 4;

/**
 * Use EU_XADES_SIGN_LEVEL_B_B for EU_XADES_SIGN_LEVEL_BES
 * Use EU_XADES_SIGN_LEVEL_B_T for EU_XADES_SIGN_LEVEL_T
 */
var EU_XADES_SIGN_LEVEL_BES = EU_XADES_SIGN_LEVEL_B_B;
var EU_XADES_SIGN_LEVEL_T = EU_XADES_SIGN_LEVEL_B_T; //=============================================================================

//=============================================================================
//./src/ExtLibrary/euscp/euscpm.js
var EU_PTR_SIZE = 4;
var EU_INT_SIZE = 4;
var EU_DWORD_SIZE = 4;
var EU_BOOL_SIZE = 4;

var EU_TRUE = 1;
var EU_FALSE = 0;

//=============================================================================

var XMLHTTPProxyService = "";
var XMLHTTPDirectAccess = false;
var XMLHTTPDirectAccessAddresses = [];
var XMLHTTPTempDir = "";

//=============================================================================

function EUSignCPException(errorCode, message, messageEx) {
  this.errorCode = errorCode;
  this.message = message;
  this.messageEx = messageEx || "";

  this.toString = function () {
    return this.message + "(" + errorCode + ")";
  };

  this.GetErrorCode = function () {
    return this.errorCode;
  };

  this.GetMessage = function () {
    return this.message;
  };

  this.toStringEx = function () {
    return (
      this.toString() + (this.messageEx != "" ? ". " + this.messageEx : "")
    );
  };

  this.GetMessageEx = function () {
    return this.messageEx;
  };
}

//=============================================================================

function EUPointerConstructor(size, isArray, moduleFreeFunc, context) {
  this.ptr = Module._malloc(size);
  Module.setValue(this.ptr, 0);

  this.isArray = isArray;
  if (isArray) {
    this.lengthPtr = Module._malloc(EU_PTR_SIZE);
    Module.setValue(this.lengthPtr, 0);
  } else {
    this.lengthPtr = 0;
  }

  this.moduleFreeFunc = moduleFreeFunc;
  this.context = context;

  this.toPtr = function () {
    var pPtr = 0;
    try {
      pPtr = Module.getValue(this.ptr, "i8*");
    } catch (e) {
      this.raiseError(e);
    }

    this.free();

    return pPtr;
  };
  this.toNumber = function () {
    var number = null;
    try {
      number = Module.getValue(this.ptr, "i32");
    } catch (e) {
      this.raiseError(e);
    }

    this.free();

    return number;
  };
  this.toBoolean = function () {
    return this.toNumber() != EU_FALSE;
  };
  this.toString = function (checkEmpty, encoder) {
    var string = null;
    try {
      var strPtr = this.toPtr();
      if (strPtr | 0) {
        string = encoder
          ? encoder.decodePointer(strPtr)
          : CP1251PointerToUTF8(strPtr);
        if (context != null) Module._EUCtxFreeMemory(context | 0, strPtr);
        else Module._EUFreeMemory(strPtr);
      }

      if (checkEmpty) {
        if (string == "") throw "Decoded string is empty";
      }
    } catch (e) {
      this.raiseError(e);
    }

    this.free();

    return string;
  };
  this.toStringArray = function (encoder) {
    var strings = null;
    try {
      var strPtr = this.toPtr();
      if (strPtr | 0) {
        strings = [];
        var tmpStrPtr = strPtr;
        while (1) {
          var str = encoder
            ? encoder.decodePointer(tmpStrPtr)
            : CP1251PointerToUTF8(tmpStrPtr);
          strings.push(str);
          while (HEAPU8[tmpStrPtr | 0] != 0) tmpStrPtr += 1;

          if (HEAPU8[(tmpStrPtr + 1) | 0] == 0) break;

          tmpStrPtr = (tmpStrPtr + 1) | 0;
        }

        if (context != null) Module._EUCtxFreeMemory(context | 0, strPtr);
        else Module._EUFreeMemory(strPtr);
      }
    } catch (e) {
      this.raiseError(e);
    }

    this.free();

    return strings;
  };
  this.toArray = function () {
    var array = null;
    try {
      var arrPtr = Module.getValue(this.ptr, "i8*");
      var arrLength = Module.getValue(this.lengthPtr, "i32");
      var arrBuffer = new ArrayBuffer(arrLength);

      array = new Uint8Array(arrBuffer);
      array.set(new Uint8Array(Module.HEAPU8.buffer, arrPtr, arrLength));

      if (context != null) Module._EUCtxFreeMemory(context | 0, arrPtr | 0);
      else Module._EUFreeMemory(arrPtr | 0);
    } catch (e) {
      this.raiseError(e);
    }

    this.free();

    return array;
  };
  this.toArrayOfByteArrays = function (count) {
    if (count == 0) return [];

    var array = [];
    try {
      var arraysPtr = Module.getValue(this.ptr, "i32*");
      var arraysLengthsPtr = Module.getValue(this.lengthPtr, "i32");

      for (var i = 0; i < count; i++) {
        var pCurPtr = (arraysPtr + i * EU_PTR_SIZE) | 0;
        var arrPtr = Module.getValue(pCurPtr, "i8*");
        var arrLength = Module.getValue(
          arraysLengthsPtr + i * EU_INT_SIZE,
          "i32*",
        );

        var arrBuffer = new ArrayBuffer(arrLength);

        var tmpArr = new Uint8Array(arrBuffer);
        tmpArr.set(new Uint8Array(Module.HEAPU8.buffer, arrPtr, arrLength));
        array.push(tmpArr);
      }

      Module._EUFreeCertificatesArray(count, arraysPtr, arraysLengthsPtr);
    } catch (e) {
      this.raiseError(e);
    }

    this.free();

    return array;
  };
  this.free = function () {
    try {
      if (this.moduleFreeFunc != null) this.moduleFreeFunc(this);

      if (this.ptr != 0) Module._free(this.ptr);
      if (this.lengthPtr != 0) Module._free(this.lengthPtr);
    } catch (e) {}

    this.ptr = 0;
    this.lengthPtr = 0;
    this.moduleFreeFunc = null;
  };
  this.raiseError = function (msg) {
    var error = EU_ERROR_JS_LIBRARY_ERROR;
    var message = EU_ERRORS_STRINGS[Module.errorLangCode][error];

    this.free();

    throw new EUSignCPException(error, message, msg);
  };
}

function EUPointer(context) {
  if (context === undefined) context = null;

  return new EUPointerConstructor(EU_PTR_SIZE, false, null, context);
}

function EUPointerBool() {
  return new EUPointerConstructor(EU_BOOL_SIZE, false, null, null);
}

function EUPointerInt() {
  return new EUPointerConstructor(EU_INT_SIZE, false, null, null);
}

function EUPointerDWORD() {
  return new EUPointerConstructor(EU_DWORD_SIZE, false, null, null);
}

function EUPointerArray(context) {
  if (context === undefined) context = null;

  return new EUPointerConstructor(EU_PTR_SIZE, true, null, context);
}

function EUPointerStaticArray(array) {
  var arrayLength = array.length;
  var pPtr = new EUPointerConstructor(arrayLength, false, null, null);

  try {
    Module.writeArrayToMemory(array, pPtr.ptr | 0);
    pPtr.toArray = function () {
      var array = null;
      try {
        var arrBuffer = new ArrayBuffer(arrayLength);
        array = new Uint8Array(arrBuffer);
        array.set(new Uint8Array(Module.HEAPU8.buffer, this.ptr, arrayLength));
      } catch (e) {}

      this.free();

      return array;
    };
  } catch (e) {
    pPtr.raiseError(e);
    return null;
  }

  return pPtr;
}

function EUPointerCertOwnerInfo(context) {
  if (context === undefined) context = null;

  return new EUPointerConstructor(
    EU_CERT_OWNER_INFO_SIZE,
    false,
    function (pPtr) {
      if ((pPtr.ptr | 0) != 0) {
        if (context != null) {
          Module._EUCtxFreeCertOwnerInfo(context | 0, pPtr.ptr);
        } else Module._EUFreeCertOwnerInfo(pPtr.ptr);
      }
    },
    context,
  );
}

function EUPointerSignerInfo(context) {
  if (context === undefined) context = null;

  return new EUPointerConstructor(
    EU_SIGN_INFO_SIZE,
    false,
    function (pPtr) {
      if ((pPtr.ptr | 0) != 0) {
        if (context != null) {
          Module._EUCtxFreeSignInfo(context | 0, pPtr.ptr);
        } else Module._EUFreeSignInfo(pPtr.ptr);
      }
    },
    context,
  );
}

function EUPointerSenderInfo(context) {
  if (context === undefined) context = null;

  return new EUPointerConstructor(
    EU_SENDER_INFO_SIZE,
    false,
    function (pPtr) {
      if ((pPtr.ptr | 0) != 0) {
        if (context != null) {
          Module._EUCtxFreeSenderInfo(context | 0, pPtr.ptr);
        } else Module._EUFreeSenderInfo(pPtr.ptr);
      }
    },
    context,
  );
}

function EUPointerCertificateInfo() {
  return new EUPointerConstructor(
    EU_CERT_INFO_SIZE,
    false,
    function (pPtr) {
      if ((pPtr.ptr | 0) != 0) Module._EUFreeCertificateInfo(pPtr.ptr);
    },
    null,
  );
}

function EUPointerKeyMedia(typeIndex, devIndex, password) {
  var pPtr = new EUPointerConstructor(EU_KEY_MEDIA_SIZE, false, null, null);

  try {
    var pCurPtr = pPtr.ptr | 0;

    Module.setValue(pCurPtr, typeIndex | 0, "i32");
    pCurPtr += EU_INT_SIZE;
    Module.setValue(pCurPtr, devIndex | 0, "i32");
    pCurPtr += EU_INT_SIZE;

    var strArr = UTF8ToCP1251Array(password);
    if (strArr.length > EU_PASS_MAX_LENGTH)
      throw { message: "Invalid parameter" };
    Module.writeArrayToMemory(strArr, pCurPtr);
  } catch (e) {
    pPtr.raiseError(e);
    return null;
  }

  return pPtr;
}

function EUPointerEndUserInfo(euInfo) {
  var pPtr = new EUPointerConstructor(EU_USER_INFO_SIZE, false, null, null);

  try {
    var pCurPtr = pPtr.ptr | 0;

    var SetString = function (str, strMaxLength) {
      var strArr = UTF8ToCP1251Array(str);
      if (strArr.length > strMaxLength) {
        throw { message: "Invalid parameter" };
      }

      Module.writeArrayToMemory(strArr, pCurPtr);
      pCurPtr += strMaxLength;
    };

    Module.setValue(pCurPtr, euInfo.GetVersion() | 0, "i32");
    pCurPtr += EU_INT_SIZE;

    SetString(euInfo.GetCommonName(), EU_COMMON_NAME_MAX_LENGTH);
    SetString(euInfo.GetLocality(), EU_LOCALITY_MAX_LENGTH);
    SetString(euInfo.GetState(), EU_STATE_MAX_LENGTH);
    SetString(euInfo.GetOrganization(), EU_ORGANIZATION_MAX_LENGTH);
    SetString(euInfo.GetOrgUnit(), EU_ORG_UNIT_MAX_LENGTH);
    SetString(euInfo.GetTitle(), EU_TITLE_MAX_LENGTH);
    SetString(euInfo.GetStreet(), EU_STREET_MAX_LENGTH);
    SetString(euInfo.GetPhone(), EU_PHONE_MAX_LENGTH);
    SetString(euInfo.GetSurname(), EU_SURNAME_MAX_LENGTH);
    SetString(euInfo.GetGivenname(), EU_GIVENNAME_MAX_LENGTH);
    SetString(euInfo.GetEMail(), EU_EMAIL_MAX_LENGTH);
    SetString(euInfo.GetDNS(), EU_ADDRESS_MAX_LENGTH);
    SetString(euInfo.GetEDRPOUCode(), EU_EDRPOU_MAX_LENGTH);
    SetString(euInfo.GetDRFOCode(), EU_DRFO_MAX_LENGTH);
    SetString(euInfo.GetNBUCode(), EU_NBU_MAX_LENGTH);
    SetString(euInfo.GetSPFMCode(), EU_SPFM_MAX_LENGTH);
    SetString(euInfo.GetOCode(), EU_O_CODE_MAX_LENGTH);
    SetString(euInfo.GetOUCode(), EU_OU_CODE_MAX_LENGTH);
    SetString(euInfo.GetUserCode(), EU_USER_CODE_MAX_LENGTH);
    SetString(euInfo.GetUPN(), EU_UPN_MAX_LENGTH);
    SetString(euInfo.GetUNZR(), EU_UNZR_MAX_LENGTH);
    SetString(euInfo.GetCountry(), EU_COUNTRY_MAX_LENGTH);
  } catch (e) {
    pPtr.raiseError(e);
    return null;
  }

  return pPtr;
}

function EUPointerMemory(size) {
  return new EUPointerConstructor(size, false, null, null);
}

function EUArrayFromArrayOfArray(array) {
  this.count = array.length;
  this.arraysPtr = 0;
  this.arraysLengthPtr = 0;

  try {
    this.arraysPtr = Module._malloc(EU_PTR_SIZE * array.length);
    this.arraysLengthPtr = Module._malloc(EU_INT_SIZE * array.length);

    for (var i = 0; i < array.length; i++) {
      Module.setValue((this.arraysPtr + i * EU_PTR_SIZE) | 0, 0);
    }

    for (var i = 0; i < array.length; i++) {
      var pCurPtr = (this.arraysPtr + i * EU_PTR_SIZE) | 0;

      var buffer = _malloc(array[i].length);
      Module.writeArrayToMemory(array[i], buffer);

      setValue(pCurPtr, buffer, "i32*");
      setValue(this.arraysLengthPtr + i * EU_INT_SIZE, array[i].length, "i32");
    }
  } catch (e) {
    this.free();
  }

  this.free = function () {
    if (this.arraysPtr == 0) return;

    try {
      for (var i = 0; i < this.count; i++) {
        var pCurPtr = Module.getValue(
          (this.arraysPtr + i * EU_PTR_SIZE) | 0,
          "i32*",
        );
        if (pCurPtr != 0) Module._free(pCurPtr);
      }

      Module._free(this.arraysPtr);
      Module._free(this.arraysLengthPtr);
    } catch (e) {}

    this.count = 0;
    this.arraysPtr = 0;
    this.arraysLengthPtr = 0;
  };
}

function EUPointerIntArray(array) {
  var pPtr = new EUPointerConstructor(
    EU_INT_SIZE * array.length,
    false,
    null,
    null,
  );

  try {
    var pCurPtr = pPtr.ptr | 0;

    for (var i = 0; i < array.length; i++) {
      Module.setValue(pCurPtr, array[i] | 0, "i32");
      pCurPtr += EU_INT_SIZE;
    }
  } catch (e) {
    pPtr.raiseError(e);
    return null;
  }

  return pPtr;
}

function EUPointerSystemtime(date) {
  var pPtr = new EUPointerConstructor(EU_SYSTEMTIME_SIZE, false, null, null);

  try {
    DateToSystemTime(date, pPtr.ptr | 0);
  } catch (e) {
    pPtr.raiseError(e);
    return null;
  }

  return pPtr;
}

function IntFromBool(boolValue) {
  return boolValue == true ? 1 : 0;
}

function ParseServersArray(serversArray) {
  var servers = {
    addresses: [],
    ports: [],
  };

  var length = serversArray.length;
  for (var i = 0; i < length; i++) {
    var res = serversArray[i].split(":");
    if (res.length == 2) {
      servers.addresses.push(res[0]);
      servers.ports.push(res[1]);
    } else {
      servers.addresses.push(serversArray[i]);
      servers.ports.push("80");
    }
  }

  return servers;
}

function IsFileSyncSupported() {
  try {
    return !!FileReaderSync;
  } catch (e) {
    return false;
  }
}

function IsFileASyncSupported() {
  try {
    return !!FileReader;
  } catch (e) {
    return false;
  }
}

function MakeUID(length) {
  var uid = "";
  var uid_chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    uid += uid_chars.charAt(Math.floor(Math.random() * uid_chars.length));
  }

  return uid;
}

//=============================================================================

var EU_MODULE_INITIALIZE_ON_LOAD =
  typeof EU_MODULE_INITIALIZE_ON_LOAD != "undefined"
    ? EU_MODULE_INITIALIZE_ON_LOAD
    : true;

//-----------------------------------------------------------------------------

function EUSignCPModuleInitialize() {
  Module.setStatus.last = null;
  Module["setStatus"]("(ініціалізація...)");
  setTimeout(function () {
    var isInitialized = false;
    try {
      var error = Module._EUInitialize();
      if (error != EU_ERROR_NONE) Module.setStatus("(не ініціалізовано)");
      else {
        Module.setStatus("(ініціалізовано)");
        isInitialized = true;
      }
    } catch (e) {
      Module.setStatus("(не ініціалізовано)");
    }

    try {
      if (typeof EUSignCPModuleInitialized == "function")
        EUSignCPModuleInitialized(isInitialized);
    } catch (e) {}
  }, 100);
}

//-----------------------------------------------------------------------------

/* These constants are specified by compiler and cannot be changed */
var EU_LIBRARY_SERVICE_MEMORY_MB = 1;
var EU_MEMORY_GROWING_STEP_MB = EU_MAX_DATA_SIZE_MB <= 2 ? 1 : 16;
var EU_MAX_LIBRARY_STACK_MB = EU_MEMORY_GROWING_STEP_MB * 8;
var EU_TOTAL_MEMORY_MB = EU_MAX_LIBRARY_STACK_MB + EU_MAX_DATA_SIZE_MB * 8;
if (
  EU_MAX_DATA_SIZE_MB >
  EU_MAX_LIBRARY_STACK_MB - EU_LIBRARY_SERVICE_MEMORY_MB
) {
  throw (
    "The EU_MAX_DATA_SIZE_MB (" +
    EU_MAX_DATA_SIZE_MB +
    " MB) constant is too big. Please set it less then " +
    (EU_MAX_LIBRARY_STACK_MB - EU_LIBRARY_SERVICE_MEMORY_MB) +
    " MB"
  );
}

if (EU_TOTAL_MEMORY_MB < EU_MAX_LIBRARY_STACK_MB)
  EU_TOTAL_MEMORY_MB = EU_MAX_LIBRARY_STACK_MB + EU_MEMORY_GROWING_STEP_MB;
if (EU_TOTAL_MEMORY_MB % EU_MEMORY_GROWING_STEP_MB != 0) {
  EU_TOTAL_MEMORY_MB =
    Math.ceil(EU_TOTAL_MEMORY_MB / EU_MEMORY_GROWING_STEP_MB) *
    EU_MEMORY_GROWING_STEP_MB;
}

//-----------------------------------------------------------------------------

var Module = {
  preRun: [],
  postRun: [
    function () {
      setTimeout(function () {
        try {
          if (typeof EUSignCPModuleLoaded == "function") EUSignCPModuleLoaded();

          if (EU_MODULE_INITIALIZE_ON_LOAD) EUSignCPModuleInitialize();
        } catch (e) {}
      }, 100);
    },
  ],
  print: (function () {
    return function (text) {
      if (typeof EU_LOG_EVENTS != "undefined" && EU_LOG_EVENTS) {
        console.log(text);
      }
    };
  })(),
  printErr: function (text) {
    if (typeof EU_LOG_EVENTS != "undefined" && EU_LOG_EVENTS) {
      if (console.error) console.error(text);
      else console.log(text);
    }
  },
  setStatus: function (text) {
    if (text == "") return;

    try {
      if (!Module.setStatus.last)
        Module.setStatus.last = { time: Date.now(), text: "" };

      if (text === Module.setStatus.text) return;

      var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
      var now = Date.now();
      if (m && now - Date.now() < 30) return;

      var statusElement = document.getElementById("status");
      var progressElement = document.getElementById("progress");
      if (!statusElement || !progressElement) return;

      if (m) {
        text = m[1];
        progressElement.value = parseInt(m[2]) * 100;
        progressElement.max = parseInt(m[4]) * 100;
        progressElement.hidden = false;
        statusElement.hidden = false;
      } else {
        progressElement.value = 0;
        progressElement.max = 100;
        progressElement.hidden = true;
      }

      statusElement.innerHTML = text;
    } catch (e) {}
  },
  totalDependencies: 0,
  monitorRunDependencies: function (left) {
    this.totalDependencies = Math.max(this.totalDependencies, left);
    Module.setStatus(
      left
        ? "Підготовка... (" +
            (this.totalDependencies - left) +
            "/" +
            this.totalDependencies +
            ")"
        : "Всі завантаження завершено.",
    );
  },
  errorLangCode: EU_DEFAULT_LANG,
  MAX_DATA_SIZE: EU_MAX_DATA_SIZE_MB * EU_ONE_MB,
  TOTAL_MEMORY: EU_TOTAL_MEMORY_MB * EU_ONE_MB,
};

if (EU_MAX_DATA_SIZE_MB <= 2)
  Module["TOTAL_STACK"] = EU_MAX_LIBRARY_STACK_MB * EU_ONE_MB;

//=============================================================================

var EUSignCP = NewClass(
  {
    Vendor: "JSC IIT",
    ClassVersion: "1.3.75",
    ClassName: "EUSignCP",
    BaseLibraryVersion: "1.3.1.224",
    errorLangCode: EU_DEFAULT_LANG,
    privKeyOwnerInfo: null,
    isFileSyncAPISupported: false,
    isFileASyncAPISupported: false,
    stringEncoder: new StringEncoder("UTF-8", false),
    fieldsEncoder: new LibraryStringEncoder(1251),
  },
  function () {},
  {
    //-----------------------------------------------------------------------------
    _GetFileSignTimeInfoSync: function (signIndex, signedFile) {
      if (!EUFS.link(signedFile)) {
        this.RaiseError(EU_ERROR_JS_READ_FILE);
      }

      var pTimeInfoPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUGetFileSignTimeInfo",
          "number",
          ["number", "array", "number"],
          [
            signIndex,
            UTF8ToCP1251Array(EUFS.getFilePath(signedFile)),
            pTimeInfoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pTimeInfoPtr.free();
        EUFS.unlink(signedFile);

        this.RaiseError(error);
      }

      EUFS.unlink(signedFile);

      var timeInfoPtr, timeInfo;

      timeInfoPtr = pTimeInfoPtr.toPtr();
      timeInfo = new EndUserTimeInfo(timeInfoPtr);
      Module._EUFreeTimeInfo(timeInfoPtr);

      return timeInfo;
    },
    //-----------------------------------------------------------------------------
    GetErrorDescription: function (errorCode, langCode) {
      try {
        if ((errorCode & EU_ERROR_JS_ERRORS) == EU_ERROR_JS_ERRORS) {
          if (arguments.length == 2) {
            return EU_ERRORS_STRINGS[langCode][errorCode];
          } else {
            return EU_ERRORS_STRINGS[this.errorLangCode][errorCode];
          }
        }

        var strPtr = 0;

        if (arguments.length == 2) {
          strPtr = Module._EUGetErrorLangDesc(errorCode, langCode);
        } else {
          strPtr = Module._EUGetErrorLangDesc(errorCode, this.errorLangCode);
        }

        return CP1251PointerToUTF8(strPtr);
      } catch (e) {
        return null;
      }
    },
    MakeError: function (errorCode) {
      var errorMsg = this.GetErrorDescription(errorCode);
      if (errorMsg == null) errorMsg = "";

      return new EUSignCPException(errorCode, errorMsg, "");
    },
    RaiseError: function (errorCode) {
      throw this.MakeError(errorCode);
    },
    //-----------------------------------------------------------------------------
    GetVersion: function () {
      return this.ClassVersion + "(" + this.BaseLibraryVersion + ")";
    },
    //-----------------------------------------------------------------------------
    Initialize: function () {
      var error;

      try {
        this.isFileSyncAPISupported = IsFileSyncSupported() & EUFS.staticInit();
        this.isFileASyncAPISupported = IsFileASyncSupported();

        error = Module._EUInitialize();
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);

      return EU_ERROR_NONE;
    },
    Finalize: function () {
      var error;

      try {
        Module._EUFinalize();
        error = EU_ERROR_NONE;
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      this.privKeyOwnerInfo = null;

      if (error != EU_ERROR_NONE) this.RaiseError(error);

      return EU_ERROR_NONE;
    },
    IsInitialized: function () {
      var isInitialized;

      try {
        isInitialized = Module._EUIsInitialized() != EU_FALSE;
      } catch (e) {
        isInitialized = false;
      }

      return isInitialized;
    },
    SetErrorMessageLanguage: function (langCode) {
      if (typeof langCode == "string") {
        langCode = langCode.toLocaleLowerCase();
        switch (langCode) {
          case "en":
            langCode = EU_EN_LANG;
            break;
          case "ru":
            langCode = EU_RU_LANG;
            break;

          case "uk":
          case "ua":
          default:
            langCode = EU_UA_LANG;
            break;
        }
      }
      this.errorLangCode = langCode;
      Module.errorLanguage = langCode;
    },
    GetErrorDesc: function (errorCode, langCode) {
      var errorDesc = this.GetErrorDescription(errorCode, langCode);

      if (errorDesc == null) this.RaiseError(EU_ERROR_JS_LIBRARY_LOAD);

      return errorDesc;
    },
    //-----------------------------------------------------------------------------
    CheckMaxDataSize: function (data) {
      var length = typeof data == "number" ? data : data.length;
      if (length > Module.MAX_DATA_SIZE)
        this.RaiseError(EU_ERROR_BAD_PARAMETER);
    },
    Base64Encode: function (data) {
      this.CheckMaxDataSize(data);

      var strPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUBASE64Encode",
          "number",
          ["array", "number", "number"],
          [data, data.length, strPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        strPtr.free();
        this.RaiseError(error);
      }

      return strPtr.toString();
    },
    Base64Decode: function (data) {
      this.CheckMaxDataSize(data);

      var arrPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUBASE64Decode",
          "number",
          ["array", "number", "number"],
          [StringToCString(data), arrPtr.ptr, arrPtr.lengthPtr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        arrPtr.free();
        this.RaiseError(error);
      }

      return arrPtr.toArray();
    },
    SetJavaStringCompliant: function (compliant) {
      this.stringEncoder = new StringEncoder(
        this.stringEncoder.charset,
        compliant,
      );
    },
    SetCharset: function (charset) {
      try {
        var encoder = new StringEncoder(
          charset,
          this.stringEncoder.javaCompliant,
        );
        this.stringEncoder = encoder;
      } catch (e) {
        this.RaiseError(EU_ERROR_BAD_PARAMETER);
      }
    },
    GetCharset: function () {
      if (this.stringEncoder == null) this.RaiseError(EU_ERROR_BAD_PARAMETER);

      return this.stringEncoder.charset;
    },
    StringToArray: function (data) {
      try {
        return this.stringEncoder.encode(data);
      } catch (e) {
        this.RaiseError(EU_ERROR_BAD_PARAMETER);
      }
    },
    ArrayToString: function (data) {
      try {
        return this.stringEncoder.decode(data);
      } catch (e) {
        this.RaiseError(EU_ERROR_BAD_PARAMETER);
      }
    },
    ReadFile: function (file, onSuccess, onError) {
      var useASyncAPI = arguments.length == 3;

      if (file == null) {
        if (useASyncAPI) {
          onError(this.MakeError(EU_ERROR_BAD_PARAMETER));
          return;
        }

        this.RaiseError(EU_ERROR_BAD_PARAMETER);
        return;
      }

      if (!this.isFileSyncAPISupported && !this.isFileASyncAPISupported) {
        if (useASyncAPI) {
          onError(this.MakeError(EU_ERROR_NOT_SUPPORTED));
          return;
        }

        this.RaiseError(EU_ERROR_NOT_SUPPORTED);
        return;
      }

      if (useASyncAPI) {
        var pThis = this;
        var _onSuccess = function (evt) {
          if (evt.target.readyState != FileReader.DONE) return;

          try {
            var loadedFile = new EndUserFile();

            loadedFile.SetTransferableObject({
              file: file,
              data: new Uint8Array(evt.target.result),
            });

            onSuccess(loadedFile);
          } catch (e) {
            onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          }
        };

        var _onError = function (e) {
          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        };

        var fileReader = new FileReader();
        fileReader.onloadend = _onSuccess;
        fileReader.onerror = _onError;
        fileReader.readAsArrayBuffer(file);
        return;
      }

      try {
        var fileReader = new FileReaderSync();
        var fileData = fileReader.readAsArrayBuffer(file);
        var loadedFile = new EndUserFile();

        loadedFile.SetTransferableObject({
          file: file,
          data: new Uint8Array(fileData),
        });

        return loadedFile;
      } catch (e) {
        this.RaiseError(EU_ERROR_JS_READ_FILE);
      }
    },
    ReadFiles: function (files, onSuccess, onError) {
      var useASyncAPI = arguments.length == 3;

      if (files.length <= 0) {
        if (useASyncAPI) {
          onError(this.MakeError(EU_ERROR_BAD_PARAMETER));
          return;
        }

        this.RaiseError(EU_ERROR_BAD_PARAMETER);
        return;
      }

      if (useASyncAPI) {
        var curIndex = 0;
        var processedFiles = [];

        var pThis = this;
        var _onSuccess = function (readedFile) {
          processedFiles.push(readedFile);
          curIndex++;

          if (curIndex < files.length) {
            pThis.ReadFile(files[curIndex], _onSuccess, onError);
            return;
          }

          onSuccess(processedFiles);
        };

        pThis.ReadFile(files[curIndex], _onSuccess, onError);
        return;
      }

      var processedFiles = [];
      for (var i = 0; i < files.length; i++) {
        processedFiles.push(this.ReadFile(files[i]));
      }

      return processedFiles;
    },
    LoadDataFromServer: function (path, onSuccess, onError, asByteArray) {
      var pThis = this;
      try {
        var httpRequest;
        var url;

        if (XMLHttpRequest) httpRequest = new XMLHttpRequest();
        else httpRequest = new ActiveXObject("Microsoft.XMLHTTP");

        httpRequest.onload = function () {
          if (httpRequest.readyState != 4) return;

          if (httpRequest.status == 200) {
            if (asByteArray) {
              onSuccess(new Uint8Array(this.response));
            } else {
              onSuccess(httpRequest.responseText);
            }
          } else {
            onError(pThis.MakeError(EU_ERROR_DOWNLOAD_FILE));
          }
        };

        httpRequest.onerror = function () {
          onError(pThis.MakeError(EU_ERROR_DOWNLOAD_FILE));
        };

        if (
          path.indexOf("http://") != 0 &&
          path.indexOf("https://") != 0 &&
          path.indexOf("/") == 0
        ) {
          if (!location.origin) {
            location.origin =
              location.protocol +
              "//" +
              location.hostname +
              (location.port ? ":" + location.port : "");
          }

          url = location.origin + path;
        } else {
          url = path;
        }

        httpRequest.open("GET", url, true);
        if (asByteArray) httpRequest.responseType = "arraybuffer";
        httpRequest.send();
      } catch (e) {
        onError(pThis.MakeError(EU_ERROR_DOWNLOAD_FILE));
      }
    },
    //-----------------------------------------------------------------------------
    DoesNeedSetSettings: function () {
      try {
        return Module._EUDoesNeedSetSettings() != EU_FALSE;
      } catch (e) {
        this.RaiseError(EU_ERROR_UNKNOWN);
      }
    },
    SetXMLHTTPProxyService: function (proxyServicePath) {
      XMLHTTPProxyService = proxyServicePath;
    },
    SetXMLHTTPDirectAccess: function (directAccess) {
      XMLHTTPDirectAccess = directAccess;
    },
    AddXMLHTTPDirectAccessAddress: function (address) {
      XMLHTTPDirectAccessAddresses.push(address);
    },
    SetXMLHTTPTempDir: function (path) {
      if (path == null) {
        this.RaiseError(EU_ERROR_BAD_PARAMETER);
      }
      XMLHTTPTempDir = path;
    },
    InitializeMandatorySettings: function () {
      var fs = this.CreateFileStoreSettings();
      this.SetFileStoreSettings(fs);

      var proxy = this.CreateProxySettings();
      this.SetProxySettings(proxy);

      var tsp = this.CreateTSPSettings();
      this.SetTSPSettings(tsp);

      var ocsp = this.CreateOCSPSettings();
      this.SetOCSPSettings(ocsp);

      var ldap = this.CreateLDAPSettings();
      this.SetLDAPSettings(ldap);
    },
    CreateFileStoreSettings: function () {
      return EndUserFileStoreSettings(
        "/certificates",
        false,
        false,
        false,
        false,
        false,
        false,
        3600,
      );
    },
    SetFileStoreSettings: function (settings) {
      var error;

      try {
        error = Module.ccall(
          "EUSetFileStoreSettings",
          "number",
          [
            "array",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            UTF8ToCP1251Array(settings.path),
            IntFromBool(settings.checkCRLs),
            IntFromBool(settings.autoRefresh),
            IntFromBool(settings.ownCRLsOnly),
            IntFromBool(settings.fullAndDeltaCRLs),
            IntFromBool(settings.autoDownloadCRLs),
            IntFromBool(settings.saveLoadedCerts),
            settings.expireTime,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    CreateProxySettings: function () {
      return EndUserProxySettings(false, true, "", "3128", "", "", false);
    },
    SetProxySettings: function (settings) {
      var error;

      try {
        error = Module.ccall(
          "EUSetProxySettings",
          "number",
          ["number", "number", "array", "array", "array", "array", "number"],
          [
            IntFromBool(settings.useProxy),
            IntFromBool(settings.anonymous),
            StringToCString(settings.address),
            StringToCString(settings.port),
            StringToCString(settings.user),
            StringToCString(settings.password),
            IntFromBool(settings.savePassword),
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    CreateTSPSettings: function () {
      return EndUserTSPSettings(false, "", "80");
    },
    SetTSPSettings: function (settings) {
      var error;

      try {
        error = Module.ccall(
          "EUSetTSPSettings",
          "number",
          ["number", "array", "array"],
          [
            IntFromBool(settings.getStamps),
            StringToCString(settings.address),
            StringToCString(settings.port),
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    CreateOCSPSettings: function () {
      return EndUserOCSPSettings(false, false, "", "80");
    },
    SetOCSPSettings: function (settings) {
      var error;

      try {
        error = Module.ccall(
          "EUSetOCSPSettings",
          "number",
          ["number", "number", "array", "array"],
          [
            IntFromBool(settings.useOCSP),
            IntFromBool(settings.beforeStore),
            StringToCString(settings.address),
            StringToCString(settings.port),
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    CreateCMPSettings: function () {
      return EndUserCMPSettings(false, "", "80", "");
    },
    SetCMPSettings: function (settings) {
      var error;

      try {
        error = Module.ccall(
          "EUSetCMPSettings",
          "number",
          ["number", "array", "array", "array"],
          [
            IntFromBool(settings.useCMP),
            StringToCString(settings.address),
            StringToCString(settings.port),
            UTF8ToCP1251Array(settings.commonName),
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    CreateLDAPSettings: function () {
      return EndUserLDAPSettings(false, "", "80", true, "", "");
    },
    SetLDAPSettings: function (settings) {
      var error;

      try {
        error = Module.ccall(
          "EUSetLDAPSettings",
          "number",
          ["number", "array", "array", "number", "array", "array"],
          [
            IntFromBool(settings.useLDAP),
            StringToCString(settings.address),
            StringToCString(settings.port),
            IntFromBool(settings.anonymous),
            StringToCString(settings.user),
            StringToCString(settings.password),
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    CreateModeSettings: function () {
      return EndUserModeSettings(false);
    },
    SetModeSettings: function (settings) {
      var error;

      try {
        error = Module.ccall(
          "EUSetModeSettings",
          "number",
          ["number"],
          [IntFromBool(settings.offlineMode)],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    CreateOCSPAccessInfoModeSettings: function () {
      return EndUserOCSPAccessInfoModeSettings(false);
    },
    SetOCSPAccessInfoModeSettings: function (settings) {
      var error;

      try {
        error = Module.ccall(
          "EUSetOCSPAccessInfoModeSettings",
          "number",
          ["number"],
          [IntFromBool(settings.enabled)],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    CreateOCSPAccessInfoSettings: function () {
      return EndUserOCSPAccessInfoSettings("", "", "");
    },
    SetOCSPAccessInfoSettings: function (settings) {
      var error;

      try {
        error = Module.ccall(
          "EUSetOCSPAccessInfoSettings",
          "number",
          ["array", "array", "array"],
          [
            UTF8ToCP1251Array(settings.issuerCN),
            StringToCString(settings.address),
            StringToCString(settings.port),
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    SetRuntimeParameter: function (name, value) {
      var error;
      if (typeof value != "boolean" && typeof value != "number") {
        this.RaiseError(EU_ERROR_BAD_PARAMETER);
      }

      if (typeof value == "boolean") value = IntFromBool(value);

      var intPtr = EUPointerInt();

      try {
        Module.setValue(intPtr.ptr, value | 0, "i32");

        error = Module.ccall(
          "EUSetRuntimeParameter",
          "number",
          ["array", "number", "number"],
          [UTF8ToCP1251Array(name), intPtr.ptr, EU_INT_SIZE],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
        intPtr.free();
      }

      if (error != EU_ERROR_NONE) {
        this.RaiseError(error);
      }

      if (name == EU_STRING_ENCODING_PARAMETER) {
        this.fieldsEncoder = new LibraryStringEncoder(value);
      }

      intPtr.free();
    },
    SetOCSPResponseExpireTime: function (expireTime) {
      var error;

      try {
        error = Module.ccall(
          "EUSetOCSPResponseExpireTime",
          "number",
          ["number"],
          [expireTime],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    CreateTSLSettings: function () {
      return new EndUserTSLSettings(false, false, "");
    },
    SetTSLSettings: function (settings) {
      var error;

      try {
        error = Module.ccall(
          "EUSetTSLSettings",
          "number",
          ["number", "number", "array"],
          [
            IntFromBool(settings.useTSL),
            IntFromBool(settings.autoDownloadTSL),
            UTF8ToCP1251Array(settings.tslAddress),
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    //-----------------------------------------------------------------------------
    SaveCertificate: function (certificate) {
      var error;

      this.CheckMaxDataSize(certificate);

      try {
        error = Module.ccall(
          "EUSaveCertificate",
          "number",
          ["array", "number"],
          [certificate, certificate.length],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    SaveCertificates: function (certificates) {
      var error;

      this.CheckMaxDataSize(certificates);

      try {
        error = Module.ccall(
          "EUSaveCertificates",
          "number",
          ["array", "number"],
          [certificates, certificates.length],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    SaveCertificatesEx: function (certificates, trustedStore) {
      var error;

      this.CheckMaxDataSize(certificates);
      if (trustedStore) this.CheckMaxDataSize(trustedStore);

      try {
        error = Module.ccall(
          "EUSaveCertificatesEx",
          "number",
          ["array", "number", trustedStore ? "array" : "number", "number"],
          [
            certificates,
            certificates.length,
            trustedStore ? trustedStore : 0,
            trustedStore ? trustedStore.length : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    SaveCRL: function (isFullCRL, crl) {
      var error;

      this.CheckMaxDataSize(crl);

      try {
        error = Module.ccall(
          "EUSaveCRL",
          "number",
          ["number", "array", "number"],
          [IntFromBool(isFullCRL), crl, crl.length],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    SaveTSL: function (tsl) {
      var error;

      this.CheckMaxDataSize(tsl);

      try {
        error = Module.ccall(
          "EUSaveTSL",
          "number",
          ["array", "number"],
          [tsl, tsl.length],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    GetCertificate: function (issuer, serial, asBase64String) {
      var pPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUGetCertificate",
          "number",
          ["array", "array", "number", "number", "number"],
          [
            UTF8ToCP1251Array(issuer),
            UTF8ToCP1251Array(serial),
            asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return pPtr.toString(true);
      else return pPtr.toArray();
    },
    GetCertificates: function () {
      var pPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUGetCertificates",
          "number",
          ["number", "number"],
          [pPtr.ptr, pPtr.lengthPtr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      return pPtr.toArray();
    },
    GetCertificatesByKeyInfo: function (keyInfo, cmpServers) {
      this.CheckMaxDataSize(keyInfo);

      var pPtr = EUPointerArray();
      var error;

      var servers = ParseServersArray(cmpServers);
      var addressesArray = intArrayFromStrings(servers.addresses);
      var portsArray = intArrayFromStrings(servers.ports);

      try {
        error = Module.ccall(
          "EUGetCertificatesByKeyInfo",
          "number",
          ["array", "number", "array", "array", "number", "number"],
          [
            keyInfo,
            keyInfo.length,
            addressesArray,
            portsArray,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      return pPtr.toArray();
    },
    ParseCertificate: function (certificate) {
      this.CheckMaxDataSize(certificate);

      var infoPtr = EUPointerCertificateInfo();
      var error;

      try {
        error = Module.ccall(
          "EUParseCertificate",
          "number",
          ["array", "number", "number"],
          [certificate, certificate.length, infoPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      var info = new EndUserCertificateInfo(infoPtr.ptr);
      infoPtr.free();

      return info;
    },
    ParseCertificateEx: function (certificate) {
      this.CheckMaxDataSize(certificate);

      var pPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUParseCertificateEx",
          "number",
          ["array", "number", "number"],
          [certificate, certificate.length, pPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      var infoPtr = pPtr.toPtr();
      var info = new EndUserCertificateInfoEx(infoPtr, this.fieldsEncoder);
      Module._EUFreeCertificateInfoEx(infoPtr);

      return info;
    },
    GetCRInfo: function (request) {
      this.CheckMaxDataSize(request);

      var pPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUGetCRInfo",
          "number",
          ["array", "number", "number"],
          [request, request.length, pPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      var infoPtr = pPtr.toPtr();
      var info = new EndUserRequestInfo(infoPtr);
      Module._EUFreeCRInfo(infoPtr);

      return info;
    },
    CheckCertificate: function (certificate) {
      this.CheckMaxDataSize(certificate);

      var infoPtr = EUPointerCertificateInfo();
      var error;

      try {
        error = Module.ccall(
          "EUCheckCertificate",
          "number",
          ["array", "number"],
          [certificate, certificate.length],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      return true;
    },
    EnumCertificatesEx: function (
      subjectType,
      subjectSubType,
      certKeyType,
      keyUsage,
      index,
    ) {
      var pCertInfoExPtr = EUPointer();
      var certArrPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUEnumCertificatesEx",
          "number",
          [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            subjectType,
            subjectSubType,
            certKeyType,
            keyUsage,
            index,
            pCertInfoExPtr.ptr,
            certArrPtr.ptr,
            certArrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pCertInfoExPtr.free();
        certArrPtr.free();

        if (error == EU_WARNING_END_OF_ENUM) return null;

        this.RaiseError(error);
      }

      var certInfoExPtr, certInfoEx;

      certInfoExPtr = pCertInfoExPtr.toPtr();
      certInfoEx = new EndUserCertificateInfoEx(
        certInfoExPtr,
        this.fieldsEncoder,
      );
      Module._EUFreeCertificateInfoEx(certInfoExPtr);

      return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
    },
    //-----------------------------------------------------------------------------
    IsPrivateKeyReaded: function () {
      var error = EU_ERROR_NONE;
      var isReaded;

      try {
        isReaded = Module._EUIsPrivateKeyReaded() != EU_FALSE;
        error = EU_ERROR_NONE;
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
        isReaded = false;
      }

      if (error != EU_ERROR_NONE) {
        this.RaiseError(error);
      }

      return isReaded;
    },
    ReadPrivateKeyBinary: function (privateKey, password) {
      this.CheckMaxDataSize(privateKey);

      var infoPtr = EUPointerCertOwnerInfo();
      var error;

      try {
        error = Module.ccall(
          "EUReadPrivateKeyBinary",
          "number",
          ["array", "number", "array", "number"],
          [
            privateKey,
            privateKey.length,
            UTF8ToCP1251Array(password),
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      this.privKeyOwnerInfo = new EndUserOwnerInfo(infoPtr.ptr);
      infoPtr.free();

      return this.privKeyOwnerInfo;
    },
    ResetPrivateKey: function () {
      try {
        Module.ccall("EUResetPrivateKey", "", [], []);
      } catch (e) {}

      this.privKeyOwnerInfo = null;
    },
    GetPrivateKeyOwnerInfo: function () {
      var error = EU_ERROR_NONE;
      try {
        if (Module._EUIsPrivateKeyReaded() == EU_FALSE) {
          this.privKeyOwnerInfo = null;
          error = EU_ERROR_UNKNOWN;
        }
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        this.RaiseError(error);
      }

      return this.privKeyOwnerInfo;
    },
    GetKeyInfoBinary: function (privateKey, password) {
      this.CheckMaxDataSize(privateKey);

      var arrPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUGetKeyInfoBinary",
          "number",
          ["array", "number", "array", "number", "number"],
          [
            privateKey,
            privateKey.length,
            UTF8ToCP1251Array(password),
            arrPtr.ptr,
            arrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        arrPtr.free();
        this.RaiseError(error);
      }

      return arrPtr.toArray();
    },
    EnumOwnCertificates: function (index) {
      var pPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUEnumOwnCertificates",
          "number",
          ["number", "number"],
          [index, pPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();

        if (error == EU_WARNING_END_OF_ENUM) return null;

        this.RaiseError(error);
      }

      var infoPtr = pPtr.toPtr();
      var info = new EndUserCertificateInfoEx(infoPtr, this.fieldsEncoder);
      Module._EUFreeCertificateInfoEx(infoPtr);

      return info;
    },
    GetOwnCertificate: function (keyType, keyUsage) {
      var pThis = this;
      var index = 0;
      var certInfoEx = null;
      while (true) {
        certInfoEx = pThis.EnumOwnCertificates(index);
        if (certInfoEx == null) break;

        if (
          certInfoEx.GetPublicKeyType() == keyType &&
          (certInfoEx.GetKeyUsageType() & keyUsage) == keyUsage
        ) {
          break;
        }

        index++;
      }

      if (certInfoEx == null) return null;

      var cert = pThis.GetCertificate(
        certInfoEx.GetIssuer(),
        certInfoEx.GetSerial(),
      );

      return new EndUserCertificate(certInfoEx, cert);
    },
    GeneratePrivateKey: function (
      password,
      uaKeysType,
      uaDSKeysSpec,
      useDSKeyAsKEP,
      uaKEPKeysSpec,
      internationalKeysType,
      internationalKeysSpec,
      userInfo,
      extKeyUsages,
    ) {
      return this.GeneratePrivateKey2(
        password,
        uaKeysType,
        uaDSKeysSpec,
        useDSKeyAsKEP,
        uaKEPKeysSpec,
        internationalKeysType,
        internationalKeysSpec,
        0,
        userInfo,
        extKeyUsages,
      );
    },
    GeneratePrivateKey2: function (
      password,
      uaKeysType,
      uaDSKeysSpec,
      useDSKeyAsKEP,
      uaKEPKeysSpec,
      internationalKeysType,
      rsaKeysSpec,
      ecdsaKeysSpec,
      userInfo,
      extKeyUsages,
    ) {
      var error;

      var kmPtr = EUPointerKeyMedia(0, 0, password);
      if (kmPtr == null) this.RaiseError(EU_ERROR_BAD_PARAMETER);

      var userInfoPtr = null;
      if (userInfo != null) {
        userInfoPtr = EUPointerEndUserInfo(userInfo);
        if (userInfoPtr == null) {
          kmPtr.free();
          this.RaiseError(EU_ERROR_BAD_PARAMETER);
        }
      }

      var pkPtr = EUPointerArray();
      var pkInfoPtr = EUPointerArray();

      var uaReqPtr = null,
        uaReqNamePtr = null,
        uaKEPReqPtr = null,
        uaKEPReqNamePtr = null;
      if (uaKeysType != EU_KEYS_TYPE_NONE) {
        uaReqPtr = EUPointerArray();
        uaReqNamePtr = EUPointerMemory(EU_PATH_MAX_LENGTH);

        if (!useDSKeyAsKEP) {
          uaKEPReqPtr = EUPointerArray();
          uaKEPReqNamePtr = EUPointerMemory(EU_PATH_MAX_LENGTH);
        }
      }

      var rsaReqPtr = null,
        rsaReqNamePtr = null;
      if (internationalKeysType & EU_KEYS_TYPE_RSA_WITH_SHA) {
        rsaReqPtr = EUPointerArray();
        rsaReqNamePtr = EUPointerMemory(EU_PATH_MAX_LENGTH);
      }

      var ecdsaReqPtr = null,
        ecdsaReqNamePtr = null;
      if (internationalKeysType & EU_KEYS_TYPE_ECDSA_WITH_SHA) {
        ecdsaReqPtr = EUPointerArray();
        ecdsaReqNamePtr = EUPointerMemory(EU_PATH_MAX_LENGTH);
      }

      var _free = function () {
        kmPtr.free();
        pkPtr.free();
        pkInfoPtr.free();
        if (userInfoPtr != null) userInfoPtr.free();
        if (uaReqPtr != null) uaReqPtr.free();
        if (uaReqNamePtr != null) uaReqNamePtr.free();
        if (uaKEPReqPtr != null) uaKEPReqPtr.free();
        if (uaKEPReqNamePtr != null) uaKEPReqNamePtr.free();
        if (rsaReqPtr != null) rsaReqPtr.free();
        if (rsaReqNamePtr != null) rsaReqNamePtr.free();
        if (ecdsaReqPtr != null) ecdsaReqPtr.free();
        if (ecdsaReqNamePtr != null) ecdsaReqNamePtr.free();
      };

      try {
        error = Module.ccall(
          "EUGeneratePrivateKey2",
          "number",
          [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            extKeyUsages != null ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            kmPtr.ptr,
            EU_FALSE,
            uaKeysType,
            uaDSKeysSpec,
            uaKEPKeysSpec,
            null,
            internationalKeysType,
            rsaKeysSpec,
            null,
            ecdsaKeysSpec,
            null,
            userInfo != null ? userInfoPtr.ptr : null,
            extKeyUsages != null ? UTF8ToCP1251Array(extKeyUsages) : null,
            pkPtr.ptr,
            pkPtr.lengthPtr,
            pkInfoPtr.ptr,
            pkInfoPtr.lengthPtr,
            uaReqPtr != null ? uaReqPtr.ptr : null,
            uaReqPtr != null ? uaReqPtr.lengthPtr : null,
            uaReqNamePtr != null ? uaReqNamePtr.ptr : null,
            uaKEPReqPtr != null ? uaKEPReqPtr.ptr : null,
            uaKEPReqPtr != null ? uaKEPReqPtr.lengthPtr : null,
            uaKEPReqNamePtr != null ? uaKEPReqNamePtr.ptr : null,
            rsaReqPtr != null ? rsaReqPtr.ptr : null,
            rsaReqPtr != null ? rsaReqPtr.lengthPtr : null,
            rsaReqNamePtr != null ? rsaReqNamePtr.ptr : null,
            ecdsaReqPtr != null ? ecdsaReqPtr.ptr : null,
            ecdsaReqPtr != null ? ecdsaReqPtr.lengthPtr : null,
            ecdsaReqNamePtr != null ? ecdsaReqNamePtr.ptr : null,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        _free();
        this.RaiseError(error);
      }

      var _toString = function (strPtr) {
        var str = CP1251PointerToUTF8(strPtr);
        var lastInd = str.lastIndexOf("/");
        if (lastInd < 0) return str;

        return str.substring(lastInd + 1, str.length);
      };

      var euPrivateKey = new EndUserPrivateKey(
        pkPtr.toArray(),
        pkInfoPtr.toArray(),
        uaReqPtr != null ? uaReqPtr.toArray() : null,
        uaReqNamePtr != null ? _toString(uaReqNamePtr.ptr) : null,
        uaKEPReqPtr != null ? uaKEPReqPtr.toArray() : null,
        uaKEPReqNamePtr != null ? _toString(uaKEPReqNamePtr.ptr) : null,
        rsaReqPtr != null ? rsaReqPtr.toArray() : null,
        rsaReqNamePtr != null ? _toString(rsaReqNamePtr.ptr) : null,
        ecdsaReqPtr != null ? ecdsaReqPtr.toArray() : null,
        ecdsaReqNamePtr != null ? _toString(ecdsaReqNamePtr.ptr) : null,
      );

      _free();

      return euPrivateKey;
    },
    MakeNewCertificate: function (
      privateKey,
      password,
      uaKeysType,
      uaDSKeysSpec,
      useDSKeyAsKEP,
      uaKEPKeysSpec,
      internationalKeysType,
      internationalKeysSpec,
      newPrivateKeyPassword,
    ) {
      this.CheckMaxDataSize(privateKey);

      var pkPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUMakeNewCertificate",
          "number",
          [
            "number",
            "array",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "array",
            "number",
            "number",
          ],
          [
            null,
            privateKey,
            privateKey.length,
            UTF8ToCP1251Array(password),
            uaKeysType,
            uaDSKeysSpec,
            IntFromBool(useDSKeyAsKEP),
            uaKEPKeysSpec,
            null,
            internationalKeysType,
            internationalKeysSpec,
            null,
            null,
            UTF8ToCP1251Array(newPrivateKeyPassword),
            pkPtr.ptr,
            pkPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pkPtr.free();
        this.RaiseError(error);
      }

      return pkPtr.toArray();
    },
    MakeNewCertificateEx: function (
      privateKey,
      password,
      uaKeysType,
      uaDSKeysSpec,
      useDSKeyAsKEP,
      uaKEPKeysSpec,
      internationalKeysType,
      rsaKeysSpec,
      ecdsaKeysSpec,
      newPrivateKeyPassword,
    ) {
      this.CheckMaxDataSize(privateKey);

      var pkPtr = EUPointerArray();
      var uaCertPtr = null,
        uaKEPCertPtr = null;
      var rsaCertPtr = null,
        ecdsaCertPtr = null;
      var cmpRequestPtr = EUPointerArray();
      var error;

      if (uaKeysType != EU_KEYS_TYPE_NONE) {
        uaCertPtr = EUPointerArray();
        if (!useDSKeyAsKEP) uaKEPCertPtr = EUPointerArray();
      }
      if (internationalKeysType & EU_KEYS_TYPE_RSA_WITH_SHA)
        rsaCertPtr = EUPointerArray();
      if (internationalKeysType & EU_KEYS_TYPE_ECDSA_WITH_SHA)
        ecdsaCertPtr = EUPointerArray();

      var _free = function () {
        pkPtr.free();
        if (uaCertPtr != null) uaCertPtr.free();
        if (uaKEPCertPtr != null) uaKEPCertPtr.free();
        if (rsaCertPtr != null) rsaCertPtr.free();
        if (ecdsaCertPtr != null) ecdsaCertPtr.free();
        cmpRequestPtr.free();
      };

      try {
        error = Module.ccall(
          "EUMakeNewCertificateEx",
          "number",
          [
            "number",
            "array",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            null,
            privateKey,
            privateKey.length,
            UTF8ToCP1251Array(password),
            uaKeysType,
            uaDSKeysSpec,
            IntFromBool(useDSKeyAsKEP),
            uaKEPKeysSpec,
            null,
            internationalKeysType,
            rsaKeysSpec,
            null,
            ecdsaKeysSpec,
            null,
            null,
            UTF8ToCP1251Array(newPrivateKeyPassword),
            pkPtr.ptr,
            pkPtr.lengthPtr,
            uaCertPtr != null ? uaCertPtr.ptr : null,
            uaCertPtr != null ? uaCertPtr.lengthPtr : null,
            uaKEPCertPtr != null ? uaKEPCertPtr.ptr : null,
            uaKEPCertPtr != null ? uaKEPCertPtr.lengthPtr : null,
            rsaCertPtr != null ? rsaCertPtr.ptr : null,
            rsaCertPtr != null ? rsaCertPtr.lengthPtr : null,
            ecdsaCertPtr != null ? ecdsaCertPtr.ptr : null,
            ecdsaCertPtr != null ? ecdsaCertPtr.lengthPtr : null,
            cmpRequestPtr.ptr,
            cmpRequestPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        _free();
        this.RaiseError(error);
      }

      var certificates = [];
      if (uaCertPtr != null) certificates.push(uaCertPtr.toArray());
      if (uaKEPCertPtr != null) certificates.push(uaKEPCertPtr.toArray());
      if (rsaCertPtr != null) certificates.push(rsaCertPtr.toArray());
      if (ecdsaCertPtr != null) certificates.push(ecdsaCertPtr.toArray());

      var makeCertResult = new EndUserMakeCertificateResult(
        pkPtr.toArray(),
        certificates,
        cmpRequestPtr.toArray(),
      );

      _free();

      return makeCertResult;
    },
    ChangeSoftwarePrivateKeyPassword: function (
      privateKey,
      oldPassword,
      newPassword,
    ) {
      this.CheckMaxDataSize(privateKey);

      var arrPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUChangeSoftwarePrivateKeyPassword",
          "number",
          ["array", "number", "array", "array", "number", "number"],
          [
            privateKey,
            privateKey.length,
            UTF8ToCP1251Array(oldPassword),
            UTF8ToCP1251Array(newPassword),
            arrPtr.ptr,
            arrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        arrPtr.free();
        this.RaiseError(error);
      }

      return arrPtr.toArray();
    },
    EnumJKSPrivateKeys: function (container, index) {
      this.CheckMaxDataSize(container);

      var keyAliasPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUEnumJKSPrivateKeys",
          "number",
          ["array", "number", "number", "number"],
          [container, container.length, index, keyAliasPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        keyAliasPtr.free();
        this.RaiseError(error);
      }

      return keyAliasPtr.toString();
    },
    GetJKSPrivateKey: function (container, keyAlias) {
      this.CheckMaxDataSize(container);

      var keyPtr = EUPointerArray();
      var certsCountPtr = EUPointerDWORD();
      var certsPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUGetJKSPrivateKey",
          "number",
          [
            "array",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            container,
            container.length,
            UTF8ToCP1251Array(keyAlias),
            keyPtr.ptr,
            keyPtr.lengthPtr,
            certsCountPtr.ptr,
            certsPtr.ptr,
            certsPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        keyPtr.free();
        certsCountPtr.free();
        certsPtr.free();
        this.RaiseError(error);
      }

      var count = certsCountPtr.toNumber();

      return new EndUserJKSPrivateKey(
        keyPtr.toArray(),
        certsPtr.toArrayOfByteArrays(count),
      );
    },
    ChangeOwnCertificatesStatus: function (requestType, revocationReason) {
      var error;

      try {
        error = Module.ccall(
          "EUChangeOwnCertificatesStatus",
          "number",
          ["number", "number"],
          [requestType, revocationReason],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        this.RaiseError(error);
      }
    },
    CtxReadPrivateKeyBinary: function (context, privateKey, password) {
      this.CheckMaxDataSize(privateKey);

      var pkCtxPtr = EUPointer();
      var infoPtr = EUPointerCertOwnerInfo(context.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxReadPrivateKeyBinary",
          "number",
          ["number", "array", "number", "array", "number", "number"],
          [
            context.GetContext(),
            privateKey,
            privateKey.length,
            UTF8ToCP1251Array(password),
            pkCtxPtr.ptr,
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pkCtxPtr.free();
        infoPtr.free();
        this.RaiseError(error);
      }

      var privateKeyContext = new EndUserPrivateKeyContext(
        pkCtxPtr.toPtr(),
        new EndUserOwnerInfo(infoPtr.ptr),
      );
      infoPtr.free();

      return privateKeyContext;
    },
    CtxFreePrivateKey: function (privateKeyContext) {
      try {
        Module._EUCtxFreePrivateKey(privateKeyContext.GetContext() | 0);
      } catch (e) {}
    },
    CtxGetOwnCertificate: function (privateKeyContext, certKeyType, keyUsage) {
      var pkCtx = privateKeyContext.GetContext();
      var pCertInfoExPtr = EUPointer();
      var certArrPtr = EUPointerArray(pkCtx);
      var error;

      try {
        error = Module.ccall(
          "EUCtxGetOwnCertificate",
          "number",
          ["number", "number", "number", "number", "number", "number"],
          [
            pkCtx,
            certKeyType,
            keyUsage,
            pCertInfoExPtr.ptr,
            certArrPtr.ptr,
            certArrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pCertInfoExPtr.free();
        certArrPtr.free();

        this.RaiseError(error);
      }

      var certInfoExPtr, certInfoEx;

      certInfoExPtr = pCertInfoExPtr.toPtr();
      certInfoEx = new EndUserCertificateInfoEx(
        certInfoExPtr,
        this.fieldsEncoder,
      );
      Module._EUCtxFreeCertificateInfoEx(pkCtx | 0, certInfoExPtr);

      return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
    },
    CtxEnumOwnCertificates: function (privateKeyContext, index) {
      var pkCtx = privateKeyContext.GetContext();
      var pCertInfoExPtr = EUPointer();
      var certArrPtr = EUPointerArray(pkCtx);
      var error;

      try {
        error = Module.ccall(
          "EUCtxEnumOwnCertificates",
          "number",
          ["number", "number", "number", "number", "number"],
          [
            pkCtx,
            index,
            pCertInfoExPtr.ptr,
            certArrPtr.ptr,
            certArrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pCertInfoExPtr.free();
        certArrPtr.free();

        if (error == EU_WARNING_END_OF_ENUM) return null;

        this.RaiseError(error);
      }

      var certInfoExPtr, certInfoEx;

      certInfoExPtr = pCertInfoExPtr.toPtr();
      certInfoEx = new EndUserCertificateInfoEx(
        certInfoExPtr,
        this.fieldsEncoder,
      );
      Module._EUCtxFreeCertificateInfoEx(pkCtx | 0, certInfoExPtr);

      return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
    },
    CtxEnumPrivateKeyInfo: function (privateKeyContext, index) {
      var dwordKeyTypePtr = EUPointerDWORD();
      var dwordKeyUsagePtr = EUPointerDWORD();
      var dwordKeyIDsCountPtr = EUPointerDWORD();
      var keyIDsPtr = EUPointer(privateKeyContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxEnumPrivateKeyInfo",
          "number",
          ["number", "number", "number", "number", "number", "number"],
          [
            privateKeyContext.GetContext() | 0,
            index,
            dwordKeyTypePtr.ptr,
            dwordKeyUsagePtr.ptr,
            dwordKeyIDsCountPtr.ptr,
            keyIDsPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        dwordKeyTypePtr.free();
        dwordKeyUsagePtr.free();
        dwordKeyIDsCountPtr.free();
        keyIDsPtr.free();

        if (error == EU_WARNING_END_OF_ENUM) return null;

        this.RaiseError(error);
      }

      var keyType = dwordKeyTypePtr.toNumber();
      var keyUsage = dwordKeyUsagePtr.toNumber();
      var keyIDsCount = dwordKeyIDsCountPtr.toNumber();
      var keyIDs = keyIDsPtr.toStringArray();
      if (keyIDsCount != keyIDs.length) this.RaiseError(EU_ERROR_BAD_PARAMETER);

      return EndUserPrivateKeyInfo(keyType, keyUsage, keyIDs);
    },
    CtxExportPrivateKeyContainer: function (
      privateKeyContext,
      password,
      keyID,
      asBase64String,
    ) {
      var pPtr = EUPointerArray(privateKeyContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxExportPrivateKeyContainer",
          "number",
          ["number", "array", "array", "number", "number"],
          [
            privateKeyContext.GetContext(),
            UTF8ToCP1251Array(password),
            UTF8ToCP1251Array(keyID),
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxExportPrivateKeyPFXContainer: function (
      privateKeyContext,
      password,
      exportCerts,
      trustedKeyIDs,
      keyIDs,
      asBase64String,
    ) {
      var pPtr = EUPointerArray(privateKeyContext.GetContext());
      var error;

      var trustedKeyIDsArray = [];
      for (var i = 0; i < trustedKeyIDs.length; i++) {
        trustedKeyIDsArray.push(IntFromBool(exportCerts));
      }

      try {
        var trustedKeyIDsPtr = EUPointerIntArray(trustedKeyIDsArray);
        error = Module.ccall(
          "EUCtxExportPrivateKeyPFXContainer",
          "number",
          [
            "number",
            "array",
            "number",
            "number",
            "number",
            "array",
            "number",
            "number",
          ],
          [
            privateKeyContext.GetContext(),
            UTF8ToCP1251Array(password),
            IntFromBool(exportCerts),
            keyIDs.length,
            trustedKeyIDsPtr.ptr,
            intArrayFromStrings(keyIDs),
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxGetCertificateFromPrivateKey: function (privateKeyContext, keyID) {
      var pCertInfoExPtr = EUPointer();
      var certArrPtr = EUPointerArray(privateKeyContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxGetCertificateFromPrivateKey",
          "number",
          ["number", "array", "number", "number", "number"],
          [
            privateKeyContext.GetContext(),
            UTF8ToCP1251Array(keyID),
            pCertInfoExPtr.ptr,
            certArrPtr.ptr,
            certArrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pCertInfoExPtr.free();
        certArrPtr.free();

        this.RaiseError(error);
      }

      var certInfoExPtr, certInfoEx;

      certInfoExPtr = pCertInfoExPtr.toPtr();
      certInfoEx = new EndUserCertificateInfoEx(
        certInfoExPtr,
        this.fieldsEncoder,
      );
      Module._EUCtxFreeCertificateInfoEx(
        privateKeyContext.GetContext() | 0,
        certInfoExPtr,
      );

      return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
    },
    CtxChangeOwnCertificatesStatus: function (
      privateKeyContext,
      requestType,
      revocationReason,
    ) {
      var error;

      try {
        error = Module.ccall(
          "EUCtxChangeOwnCertificatesStatus",
          "number",
          ["number", "number", "number"],
          [privateKeyContext.GetContext(), requestType, revocationReason],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        this.RaiseError(error);
      }
    },
    CtxGetOwnEUserParams: function (privateKeyContext) {
      var pPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUCtxGetOwnEUserParams",
          "number",
          ["number", "number"],
          [privateKeyContext.GetContext(), pPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      var paramsPtr = pPtr.toPtr();
      var info = new EndUserParams(paramsPtr);

      Module._EUCtxFreeEUserParams(
        privateKeyContext.GetContext() | 0,
        paramsPtr,
      );

      return info;
    },
    CtxModifyOwnEUserParams: function (privateKeyContext, phone, email) {
      var pPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUCtxModifyOwnEUserParams",
          "number",
          ["number", "array", "array"],
          [
            privateKeyContext.GetContext(),
            UTF8ToCP1251Array(phone),
            UTF8ToCP1251Array(email),
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }
    },
    CtxMakeDeviceCertificate: function (
      privateKeyContext,
      deviceName,
      uaRequest,
      uaKEPRequest,
      internationalRequest,
      ecdsaRequest,
      cmpAddress,
      cmpPort,
    ) {
      var pkCtx = privateKeyContext.GetContext();
      var uaCertPtr = null,
        uaKEPCertPtr = null,
        intCertPtr = null,
        ecdsaCertPtr = null;

      if (uaRequest != null) uaCertPtr = EUPointerArray(pkCtx);
      if (uaKEPRequest != null) uaKEPCertPtr = EUPointerArray(pkCtx);
      if (internationalRequest != null) intCertPtr = EUPointerArray(pkCtx);
      if (ecdsaRequest != null) ecdsaCertPtr = EUPointerArray(pkCtx);

      try {
        error = Module.ccall(
          "EUCtxMakeDeviceCertificate",
          "number",
          [
            "number",
            "array",
            uaRequest != null ? "array" : "number",
            "number",
            uaKEPRequest != null ? "array" : "number",
            "number",
            internationalRequest != null ? "array" : "number",
            "number",
            ecdsaRequest != null ? "array" : "number",
            "number",
            cmpAddress != null ? "array" : "number",
            cmpPort != null ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            pkCtx,
            UTF8ToCP1251Array(deviceName),
            uaRequest != null ? uaRequest : 0,
            uaRequest != null ? uaRequest.length : 0,
            uaKEPRequest != null ? uaKEPRequest : 0,
            uaKEPRequest != null ? uaKEPRequest.length : 0,
            internationalRequest != null ? internationalRequest : 0,
            internationalRequest != null ? internationalRequest.length : 0,
            ecdsaRequest != null ? ecdsaRequest : 0,
            ecdsaRequest != null ? ecdsaRequest.length : 0,
            cmpAddress != null ? UTF8ToCP1251Array(cmpAddress) : 0,
            cmpPort != null ? UTF8ToCP1251Array(cmpPort) : 0,
            uaCertPtr != null ? uaCertPtr.ptr : 0,
            uaCertPtr != null ? uaCertPtr.lengthPtr : 0,
            uaKEPCertPtr != null ? uaKEPCertPtr.ptr : 0,
            uaKEPCertPtr != null ? uaKEPCertPtr.lengthPtr : 0,
            intCertPtr != null ? intCertPtr.ptr : 0,
            intCertPtr != null ? intCertPtr.lengthPtr : 0,
            ecdsaCertPtr != null ? ecdsaCertPtr.ptr : 0,
            ecdsaCertPtr != null ? ecdsaCertPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        if (uaCertPtr != null) uaCertPtr.free();
        if (uaKEPCertPtr != null) uaKEPCertPtr.free();
        if (intCertPtr != null) intCertPtr.free();
        if (ecdsaCertPtr != null) ecdsaCertPtr.free();
        this.RaiseError(error);
      }

      var certificates = [];
      if (uaCertPtr != null) certificates.push(uaCertPtr.toArray());
      if (uaKEPCertPtr != null) certificates.push(uaKEPCertPtr.toArray());
      if (intCertPtr != null) certificates.push(intCertPtr.toArray());
      if (ecdsaCertPtr != null) certificates.push(ecdsaCertPtr.toArray());

      return certificates;
    },
    CtxMakeNewOwnCertificateWithCR: function (
      privateKeyContext,
      uaRequest,
      uaKEPRequest,
      rsaRequest,
      ecdsaRequest,
    ) {
      var pkCtx = privateKeyContext.GetContext();

      try {
        error = Module.ccall(
          "EUCtxMakeNewOwnCertificateWithCR",
          "number",
          [
            "number",
            uaRequest != null ? "array" : "number",
            "number",
            uaKEPRequest != null ? "array" : "number",
            "number",
            rsaRequest != null ? "array" : "number",
            "number",
            ecdsaRequest != null ? "array" : "number",
            "number",
          ],
          [
            pkCtx,
            uaRequest != null ? uaRequest : 0,
            uaRequest != null ? uaRequest.length : 0,
            uaKEPRequest != null ? uaKEPRequest : 0,
            uaKEPRequest != null ? uaKEPRequest.length : 0,
            rsaRequest != null ? rsaRequest : 0,
            rsaRequest != null ? rsaRequest.length : 0,
            ecdsaRequest != null ? ecdsaRequest : 0,
            ecdsaRequest != null ? ecdsaRequest.length : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        this.RaiseError(error);
      }
    },
    //-----------------------------------------------------------------------------
    HashData: function (data, asBase64String) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var pPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUHashData",
          "number",
          ["array", "number", "number", "number", "number"],
          [
            data,
            data.length,
            asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return pPtr.toString(true);
      else return pPtr.toArray();
    },
    CtxHashData: function (
      context,
      hashAlgo,
      certificate,
      data,
      asBase64String,
    ) {
      if (typeof data == "string") data = this.StringToArray(data);

      if (certificate != null) this.CheckMaxDataSize(certificate);

      var hashContext = null;

      try {
        var hash = null;
        var chunkMaxSize = EU_MAX_DATA_SIZE_MB * EU_ONE_MB;
        var offset = 0;

        hashContext = this.CtxHashDataBegin(context, hashAlgo, certificate);

        while (true) {
          var chunkSize = data.length - offset;
          if (chunkSize > chunkMaxSize) chunkSize = chunkMaxSize;

          var chunk = data.slice(offset, offset + chunkSize);
          this.CtxHashDataContinue(hashContext, chunk);
          offset += chunkSize;
          if (offset < data.length) continue;
          break;
        }

        hash = this.CtxHashDataEnd(hashContext, asBase64String);

        this.CtxFreeHash(hashContext);
        hashContext = null;

        return hash;
      } catch (e) {
        if (hashContext != null) this.CtxFreeHash(hashContext);
        throw e;
      }
    },
    CtxHashDataBegin: function (context, hashAlgo, certificate) {
      if (certificate != null) this.CheckMaxDataSize(certificate);

      var hashCtxPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUCtxHashDataBegin",
          "number",
          [
            "number",
            "number",
            certificate != null ? "array" : "number",
            "number",
            "number",
          ],
          [
            context.GetContext(),
            hashAlgo,
            certificate != null ? certificate : 0,
            certificate != null ? certificate.length : 0,
            hashCtxPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        hashCtxPtr.free();
        this.RaiseError(error);
      }

      return EndUserHashContext(hashCtxPtr.toPtr());
    },
    CtxHashDataContinue: function (hashContext, data) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var error;

      try {
        error = Module.ccall(
          "EUCtxHashDataContinue",
          "number",
          ["number", "array", "number"],
          [hashContext.GetContext(), data, data.length],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        this.RaiseError(error);
      }
    },
    CtxHashDataEnd: function (hashContext, asBase64String) {
      var pPtr = EUPointerArray(hashContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxHashDataEnd",
          "number",
          ["number", "number", "number"],
          [hashContext.GetContext(), pPtr.ptr, pPtr.lengthPtr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxFreeHash: function (hashContext) {
      try {
        Module._EUCtxFreeHash(hashContext.GetContext() | 0);
      } catch (e) {}
    },
    CtxHashFile: function (
      context,
      hashAlgo,
      certificate,
      file,
      onSuccess,
      onError,
      asBase64String,
    ) {
      var pThis = this;

      if (certificate != null) pThis.CheckMaxDataSize(certificate);

      if (pThis.isFileSyncAPISupported) {
        if (!EUFS.link(file)) {
          setTimeout(function () {
            onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          }, 1);
          return;
        }

        var pPtr = EUPointerArray(context.GetContext());
        var error;

        try {
          error = Module.ccall(
            "EUCtxHashFile",
            "number",
            [
              "number",
              "number",
              certificate != null ? "array" : "number",
              "number",
              "array",
              "number",
              "number",
            ],
            [
              context.GetContext(),
              hashAlgo,
              certificate != null ? certificate : 0,
              certificate != null ? certificate.length : 0,
              UTF8ToCP1251Array(EUFS.getFilePath(file)),
              pPtr.ptr,
              pPtr.lengthPtr,
            ],
          );
        } catch (e) {
          error = EU_ERROR_UNKNOWN;
        }

        if (error != EU_ERROR_NONE) {
          EUFS.unlink(file);
          pPtr.free();

          setTimeout(function () {
            onError(pThis.MakeError(error));
          }, 1);
          return;
        }

        EUFS.unlink(file);

        try {
          var data = asBase64String
            ? pThis.Base64Encode(pPtr.toArray())
            : pPtr.toArray();
          setTimeout(function () {
            onSuccess(data);
          }, 1);
        } catch (e) {
          setTimeout(function () {
            onError(e);
          }, 1);
        }
      } else {
        var _onSuccess = function (fileReaded) {
          try {
            var data = pThis.CtxHashData(
              context,
              hashAlgo,
              certificate,
              fileReaded.data,
              asBase64String,
            );

            onSuccess(data);
          } catch (e) {
            onError(e);
          }
        };

        pThis.ReadFile(file, _onSuccess, onError);
      }
    },
    //-----------------------------------------------------------------------------
    CheckDataStruct: function (data) {
      this.CheckMaxDataSize(data);

      if (typeof data == "string") data = this.Base64Decode(data);

      var error;

      try {
        error = Module.ccall(
          "EUCheckDataStruct",
          "number",
          ["array", "number"],
          [data, data.length],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);
    },
    CheckFileStruct: function (file, onSuccess, onError) {
      var pThis = this;

      if (pThis.isFileSyncAPISupported) {
        if (!EUFS.link(file)) {
          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }

        var error;

        try {
          error = Module.ccall(
            "EUCheckFileStruct",
            "number",
            ["array"],
            [UTF8ToCP1251Array(EUFS.getFilePath(file))],
          );
        } catch (e) {
          error = EU_ERROR_UNKNOWN;
        }

        if (error != EU_ERROR_NONE) {
          EUFS.unlink(file);

          onError(pThis.MakeError(error));
          return;
        }

        EUFS.unlink(file);

        onSuccess();
      } else {
        var _onSuccess = function (fileReaded) {
          try {
            pThis.CheckDataStruct(fileReaded.data);
            onSuccess();
          } catch (e) {
            onError(e);
          }
        };

        pThis.ReadFile(file, _onSuccess, onError);
      }
    },
    GetSignType: function (signIndex, sign) {
      this.CheckMaxDataSize(sign);

      var isSignStr = typeof sign == "string";
      var intPtr = EUPointerDWORD();
      var error;

      try {
        error = Module.ccall(
          "EUGetSignType",
          "number",
          [
            "number",
            isSignStr ? "array" : "number",
            !isSignStr ? "array" : "number",
            "number",
            "number",
          ],
          [
            signIndex,
            isSignStr ? StringToCString(sign) : 0,
            !isSignStr ? sign : 0,
            !isSignStr ? sign.length : 0,
            intPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();

        this.RaiseError(error);
      }

      return intPtr.toNumber();
    },
    GetFileSignType: function (signIndex, signedFile, onSuccess, onError) {
      var pThis = this;

      if (pThis.isFileSyncAPISupported) {
        if (!EUFS.link(signedFile)) {
          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }

        var intPtr = EUPointerDWORD();
        var error;

        try {
          error = Module.ccall(
            "EUGetFileSignType",
            "number",
            ["number", "array", "number"],
            [
              signIndex,
              UTF8ToCP1251Array(EUFS.getFilePath(signedFile)),
              intPtr.ptr,
            ],
          );
        } catch (e) {
          error = EU_ERROR_UNKNOWN;
        }

        if (error != EU_ERROR_NONE) {
          intPtr.free();
          EUFS.unlink(signedFile);

          onError(pThis.MakeError(error));
          return;
        }

        EUFS.unlink(signedFile);

        onSuccess(intPtr.toNumber());
      } else {
        var _onSuccess = function (fileReaded) {
          try {
            var signType = pThis.GetSignType(signIndex, fileReaded.data);
            onSuccess(signType);
          } catch (e) {
            onError(e);
          }
        };

        pThis.ReadFile(signedFile, _onSuccess, onError);
      }
    },
    IsDataInSignedDataAvailable: function (sign) {
      this.CheckMaxDataSize(sign);

      var isSignStr = typeof sign == "string";
      var intPtr = EUPointerInt();
      var error;

      try {
        error = Module.ccall(
          "EUIsDataInSignedDataAvailable",
          "number",
          [
            isSignStr ? "array" : "number",
            !isSignStr ? "array" : "number",
            "number",
            "number",
          ],
          [
            isSignStr ? StringToCString(sign) : 0,
            !isSignStr ? sign : 0,
            !isSignStr ? sign.length : 0,
            intPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        this.RaiseError(error);
      }

      return intPtr.toBoolean();
    },
    GetDataFromSignedData: function (signedData) {
      this.CheckMaxDataSize(signedData);

      var isSignStr = typeof signedData == "string";
      var arrPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUGetDataFromSignedData",
          "number",
          [
            isSignStr ? "array" : "number",
            !isSignStr ? "array" : "number",
            "number",
            "number",
            "number",
          ],
          [
            isSignStr ? StringToCString(signedData) : 0,
            !isSignStr ? signedData : 0,
            !isSignStr ? signedData.length : 0,
            arrPtr.ptr,
            arrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        arrPtr.free();
        this.RaiseError(error);
      }

      return arrPtr.toArray();
    },
    GetDataHashFromSignedDataEx: function (signIndex, signedData) {
      this.CheckMaxDataSize(signedData);

      var isSignStr = typeof signedData == "string";
      var intPtr = EUPointerDWORD();
      var arrPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUGetDataHashFromSignedDataEx",
          "number",
          [
            "number",
            isSignStr ? "array" : "number",
            !isSignStr ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            signIndex,
            isSignStr ? StringToCString(signedData) : 0,
            !isSignStr ? signedData : 0,
            !isSignStr ? signedData.length : 0,
            intPtr.ptr,
            0,
            arrPtr.ptr,
            arrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        arrPtr.free();
        this.RaiseError(error);
      }

      var hashAlgo = intPtr.toNumber();
      var hash = arrPtr.toArray();

      return new EndUserDataHash(hashAlgo, hash);
    },
    GetSignTimeInfo: function (signIndex, sign) {
      this.CheckMaxDataSize(sign);

      var isSignStr = typeof sign == "string";
      var pTimeInfoPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUGetSignTimeInfo",
          "number",
          [
            "number",
            isSignStr ? "array" : "number",
            !isSignStr ? "array" : "number",
            "number",
            "number",
          ],
          [
            signIndex,
            isSignStr ? StringToCString(sign) : 0,
            !isSignStr ? sign : 0,
            !isSignStr ? sign.length : 0,
            pTimeInfoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pTimeInfoPtr.free();

        this.RaiseError(error);
      }

      var timeInfoPtr, timeInfo;

      timeInfoPtr = pTimeInfoPtr.toPtr();
      timeInfo = new EndUserTimeInfo(timeInfoPtr);
      Module._EUFreeTimeInfo(timeInfoPtr);

      return timeInfo;
    },
    GetFileSignTimeInfo: function (signIndex, signedFile, onSuccess, onError) {
      var pThis = this;

      if (pThis.isFileSyncAPISupported) {
        try {
          var timeInfo = pThis._GetFileSignTimeInfoSync(signIndex, signedFile);
          onSuccess(timeInfo);
          return;
        } catch (e) {
          onError(e);
          return;
        }
      } else {
        var _onSuccess = function (fileReaded) {
          try {
            var signTimeInfo = pThis.GetSignTimeInfo(
              signIndex,
              fileReaded.data,
            );
            onSuccess(signTimeInfo);
          } catch (e) {
            onError(e);
          }
        };

        pThis.ReadFile(signedFile, _onSuccess, onError);
      }
    },
    SignData: function (data, asBase64String) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var pPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUSignData",
          "number",
          ["array", "number", "number", "number", "number"],
          [
            data,
            data.length,
            asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return pPtr.toString(true);
      else return pPtr.toArray();
    },
    VerifyData: function (data, sign) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckDataStruct(sign);

      this.CheckMaxDataSize(data);
      this.CheckMaxDataSize(sign);

      var isSignStr = typeof sign == "string";
      var infoPtr = EUPointerSignerInfo();
      var signTimeInfo = null;
      var error;

      try {
        error = Module.ccall(
          "EUVerifyData",
          "number",
          [
            "array",
            "number",
            isSignStr ? "array" : "number",
            !isSignStr ? "array" : "number",
            "number",
            "number",
          ],
          [
            data,
            data.length,
            isSignStr ? StringToCString(sign) : 0,
            !isSignStr ? sign : 0,
            !isSignStr ? sign.length : 0,
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      try {
        signTimeInfo = this.GetSignTimeInfo(0, sign);
      } catch (e) {
        infoPtr.free();
        throw e;
      }

      var info = new EndUserSignInfo(infoPtr.ptr, data, signTimeInfo);
      infoPtr.free();

      return info;
    },
    VerifyDataOnTimeEx: function (
      data,
      signIndex,
      sign,
      onTime,
      offline,
      noCRL,
    ) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckDataStruct(sign);

      this.CheckMaxDataSize(data);
      this.CheckMaxDataSize(sign);

      var isSignStr = typeof sign == "string";
      var onTimePtr = onTime != null ? EUPointerSystemtime(onTime) : 0;
      var infoPtr = EUPointerSignerInfo();
      var signTimeInfo = null;
      var error;

      try {
        error = Module.ccall(
          "EUVerifyDataOnTimeEx",
          "number",
          [
            "array",
            "number",
            "number",
            isSignStr ? "array" : "number",
            !isSignStr ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            data,
            data.length,
            signIndex,
            isSignStr ? StringToCString(sign) : 0,
            !isSignStr ? sign : 0,
            !isSignStr ? sign.length : 0,
            onTime != null ? onTimePtr.ptr : 0,
            IntFromBool(offline),
            IntFromBool(noCRL),
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (onTime != null) onTimePtr.free();

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      try {
        signTimeInfo = this.GetSignTimeInfo(signIndex, sign);
      } catch (e) {
        infoPtr.free();
        throw e;
      }

      var info = new EndUserSignInfo(infoPtr.ptr, data, signTimeInfo);
      infoPtr.free();

      return info;
    },
    SignDataInternal: function (appendCert, data, asBase64String) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var pPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUSignDataInternal",
          "number",
          ["number", "array", "number", "number", "number", "number"],
          [
            IntFromBool(appendCert),
            data,
            data.length,
            asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return pPtr.toString(true);
      else return pPtr.toArray();
    },
    VerifyDataInternal: function (sign) {
      this.CheckMaxDataSize(sign);

      this.CheckDataStruct(sign);

      var isSignStr = typeof sign == "string";
      var infoPtr = EUPointerSignerInfo();
      var arrPtr = EUPointerArray();
      var signTimeInfo = null;
      var error;

      try {
        error = Module.ccall(
          "EUVerifyDataInternal",
          "number",
          [
            isSignStr ? "array" : "number",
            !isSignStr ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            isSignStr ? StringToCString(sign) : 0,
            !isSignStr ? sign : 0,
            !isSignStr ? sign.length : 0,
            arrPtr.ptr,
            arrPtr.lengthPtr,
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        arrPtr.free();
        this.RaiseError(error);
      }

      try {
        signTimeInfo = this.GetSignTimeInfo(0, sign);
      } catch (e) {
        infoPtr.free();
        arrPtr.free();
        throw e;
      }

      var info = new EndUserSignInfo(
        infoPtr.ptr,
        arrPtr.toArray(),
        signTimeInfo,
      );
      infoPtr.free();

      return info;
    },
    VerifyDataInternalOnTimeEx: function (
      signIndex,
      sign,
      onTime,
      offline,
      noCRL,
    ) {
      this.CheckMaxDataSize(sign);

      this.CheckDataStruct(sign);

      var isSignStr = typeof sign == "string";
      var onTimePtr = onTime != null ? EUPointerSystemtime(onTime) : 0;
      var infoPtr = EUPointerSignerInfo();
      var arrPtr = EUPointerArray();
      var signTimeInfo = null;
      var error;

      try {
        error = Module.ccall(
          "EUVerifyDataInternalOnTimeEx",
          "number",
          [
            "number",
            isSignStr ? "array" : "number",
            !isSignStr ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            signIndex,
            isSignStr ? StringToCString(sign) : 0,
            !isSignStr ? sign : 0,
            !isSignStr ? sign.length : 0,
            onTime != null ? onTimePtr.ptr : 0,
            IntFromBool(offline),
            IntFromBool(noCRL),
            arrPtr.ptr,
            arrPtr.lengthPtr,
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (onTime != null) onTimePtr.free();

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        arrPtr.free();
        this.RaiseError(error);
      }

      try {
        signTimeInfo = this.GetSignTimeInfo(signIndex, sign);
      } catch (e) {
        infoPtr.free();
        arrPtr.free();
        throw e;
      }

      var info = new EndUserSignInfo(
        infoPtr.ptr,
        arrPtr.toArray(),
        signTimeInfo,
      );
      infoPtr.free();

      return info;
    },
    SignHash: function (hash, asBase64String) {
      this.CheckMaxDataSize(hash);

      var isHashStr = typeof hash == "string";
      var pPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUSignHash",
          "number",
          [
            isHashStr ? "array" : "number",
            !isHashStr ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            isHashStr ? StringToCString(hash) : 0,
            !isHashStr ? hash : 0,
            !isHashStr ? hash.length : 0,
            asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return pPtr.toString(true);
      else return pPtr.toArray();
    },
    VerifyHash: function (hash, sign) {
      this.CheckMaxDataSize(hash);
      this.CheckMaxDataSize(sign);

      this.CheckDataStruct(sign);

      var isHashStr = typeof hash == "string";
      var isSignStr = typeof sign == "string";
      var infoPtr = EUPointerSignerInfo();
      var signTimeInfo = null;
      var error;

      try {
        error = Module.ccall(
          "EUVerifyHash",
          "number",
          [
            isHashStr ? "array" : "number",
            !isHashStr ? "array" : "number",
            "number",
            isSignStr ? "array" : "number",
            !isSignStr ? "array" : "number",
            "number",
            "number",
          ],
          [
            isHashStr ? StringToCString(hash) : 0,
            !isHashStr ? hash : 0,
            !isHashStr ? hash.length : 0,
            isSignStr ? StringToCString(sign) : 0,
            !isSignStr ? sign : 0,
            !isSignStr ? sign.length : 0,
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      try {
        signTimeInfo = this.GetSignTimeInfo(0, sign);
      } catch (e) {
        infoPtr.free();
        throw e;
      }

      var info = new EndUserSignInfo(infoPtr.ptr, null, signTimeInfo);
      infoPtr.free();

      return info;
    },
    VerifyHashOnTimeEx: function (
      hash,
      signIndex,
      sign,
      onTime,
      offline,
      noCRL,
    ) {
      this.CheckMaxDataSize(hash);
      this.CheckMaxDataSize(sign);

      this.CheckDataStruct(sign);

      var isHashStr = typeof hash == "string";
      var isSignStr = typeof sign == "string";
      var infoPtr = EUPointerSignerInfo();
      var onTimePtr = onTime != null ? EUPointerSystemtime(onTime) : 0;
      var signTimeInfo = null;
      var error;

      try {
        error = Module.ccall(
          "EUVerifyHashOnTimeEx",
          "number",
          [
            isHashStr ? "array" : "number",
            !isHashStr ? "array" : "number",
            "number",
            "number",
            isSignStr ? "array" : "number",
            !isSignStr ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            isHashStr ? StringToCString(hash) : 0,
            !isHashStr ? hash : 0,
            !isHashStr ? hash.length : 0,
            signIndex,
            isSignStr ? StringToCString(sign) : 0,
            !isSignStr ? sign : 0,
            !isSignStr ? sign.length : 0,
            onTime != null ? onTimePtr.ptr : 0,
            IntFromBool(offline),
            IntFromBool(noCRL),
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (onTime != null) onTimePtr.free();

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      try {
        signTimeInfo = this.GetSignTimeInfo(signIndex, sign);
      } catch (e) {
        infoPtr.free();
        throw e;
      }

      var info = new EndUserSignInfo(infoPtr.ptr, null, signTimeInfo);
      infoPtr.free();

      return info;
    },
    SignHashRSA: function (hash, asBase64String) {
      this.CheckMaxDataSize(hash);

      var isHashStr = typeof hash == "string";
      var pPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUSignHashRSA",
          "number",
          [
            isHashStr ? "array" : "number",
            !isHashStr ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            isHashStr ? StringToCString(hash) : 0,
            !isHashStr ? hash : 0,
            !isHashStr ? hash.length : 0,
            asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return pPtr.toString(true);
      else return pPtr.toArray();
    },
    SignDataRSA: function (data, appendCert, externalSgn, asBase64String) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var pPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUSignDataRSA",
          "number",
          ["array", "number", "number", "number", "number", "number", "number"],
          [
            data,
            data.length,
            IntFromBool(appendCert),
            IntFromBool(externalSgn),
            asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return pPtr.toString(true);
      else return pPtr.toArray();
    },
    IsDataInSignedFileAvailable: function (signedFile, onSuccess, onError) {
      var pThis = this;

      if (pThis.isFileSyncAPISupported) {
        if (!EUFS.link(signedFile)) {
          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }

        var intPtr = EUPointerInt();
        var error;

        try {
          error = Module.ccall(
            "EUIsDataInSignedFileAvailable",
            "number",
            ["array", "number"],
            [UTF8ToCP1251Array(EUFS.getFilePath(signedFile)), intPtr.ptr],
          );
        } catch (e) {
          error = EU_ERROR_UNKNOWN;
        }

        if (error != EU_ERROR_NONE) {
          intPtr.free();
          EUFS.unlink(signedFile);

          onError(pThis.MakeError(error));
          return;
        }

        EUFS.unlink(signedFile);

        onSuccess(intPtr.toBoolean());
      } else {
        var _onSuccess = function (fileReaded) {
          try {
            var isAvailable = pThis.IsDataInSignedDataAvailable(
              fileReaded.data,
            );
            onSuccess(isAvailable);
          } catch (e) {
            onError(e);
          }
        };

        pThis.ReadFile(signedFile, _onSuccess, onError);
      }
    },
    GetDataFromSignedFile: function (signedFile, onSuccess, onError) {
      var pThis = this;

      if (pThis.isFileSyncAPISupported) {
        var file = signedFile.name + MakeUID(10);

        if (!EUFS.link(signedFile)) {
          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }

        if (!EUFS.link(file)) {
          EUFS.unlink(signedFile);

          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }

        var error;

        try {
          error = Module.ccall(
            "EUGetDataFromSignedFile",
            "number",
            ["array", "array"],
            [
              UTF8ToCP1251Array(EUFS.getFilePath(signedFile)),
              UTF8ToCP1251Array(EUFS.getFilePath(file)),
            ],
          );
        } catch (e) {
          error = EU_ERROR_UNKNOWN;
        }

        if (error != EU_ERROR_NONE) {
          EUFS.unlink(file);
          EUFS.unlink(signedFile);

          onError(pThis.MakeError(error));
          return;
        }

        var data = EUFS.readFileAsUint8Array(file);

        EUFS.unlink(file);
        EUFS.unlink(signedFile);

        onSuccess(data);
      } else {
        var _onSuccess = function (fileReaded) {
          try {
            var data = pThis.GetDataFromSignedData(fileReaded.data);

            onSuccess(data);
          } catch (e) {
            onError(e);
          }
        };

        pThis.ReadFile(signedFile, _onSuccess, onError);
      }
    },
    VerifyFileWithExternalSign: function (
      file,
      fileWithSign,
      onSuccess,
      onError,
    ) {
      var pThis = this;

      if (pThis.isFileSyncAPISupported) {
        if (!EUFS.link(file)) {
          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }

        if (!EUFS.link(fileWithSign)) {
          EUFS.unlink(file);

          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }

        var infoPtr = EUPointerSignerInfo();
        var timeInfo = null;
        var error;

        try {
          error = Module.ccall(
            "EUCheckFileStruct",
            "number",
            ["array"],
            [UTF8ToCP1251Array(EUFS.getFilePath(fileWithSign))],
          );
          if (error == EU_ERROR_NONE) {
            error = Module.ccall(
              "EUVerifyFile",
              "number",
              ["array", "array", "number"],
              [
                UTF8ToCP1251Array(EUFS.getFilePath(fileWithSign)),
                UTF8ToCP1251Array(EUFS.getFilePath(file)),
                infoPtr.ptr,
              ],
            );
          }
        } catch (e) {
          error = EU_ERROR_UNKNOWN;
        }

        if (error != EU_ERROR_NONE) {
          EUFS.unlink(fileWithSign);
          EUFS.unlink(file);

          onError(pThis.MakeError(error));
          return;
        }

        EUFS.unlink(fileWithSign);
        EUFS.unlink(file);

        try {
          timeInfo = pThis._GetFileSignTimeInfoSync(0, fileWithSign);
        } catch (e) {
          onError(e);
          return;
        }

        var info = new EndUserSignInfo(infoPtr.ptr, null, timeInfo);
        infoPtr.free();

        onSuccess(info);
      } else {
        var _onSuccess = function (files) {
          try {
            var info = pThis.VerifyData(files[0].data, files[1].data);
            info.data = null;

            onSuccess(info);
          } catch (e) {
            onError(e);
          }
        };

        pThis.ReadFiles([file, fileWithSign], _onSuccess, onError);
      }
    },
    VerifyFileWithInternalSign: function (
      signedFile,
      dataFile,
      onSuccess,
      onError,
    ) {
      var pThis = this;

      if (pThis.isFileSyncAPISupported) {
        var file;

        file = dataFile != null ? dataFile : signedFile.name + MakeUID(10);

        if (!EUFS.link(file, dataFile == null)) {
          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }

        if (!EUFS.link(signedFile)) {
          EUFS.unlink(file);

          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }

        var infoPtr = EUPointerSignerInfo();
        var timeInfo;
        var error;

        try {
          error = Module.ccall(
            "EUCheckFileStruct",
            "number",
            ["array"],
            [UTF8ToCP1251Array(EUFS.getFilePath(signedFile))],
          );
          if (error == EU_ERROR_NONE) {
            error = Module.ccall(
              "EUVerifyFile",
              "number",
              ["array", "array", "number"],
              [
                UTF8ToCP1251Array(EUFS.getFilePath(signedFile)),
                UTF8ToCP1251Array(EUFS.getFilePath(file)),
                infoPtr.ptr,
              ],
            );
          }
        } catch (e) {
          error = EU_ERROR_UNKNOWN;
        }

        if (error != EU_ERROR_NONE) {
          EUFS.unlink(signedFile);
          EUFS.unlink(file);

          onError(pThis.MakeError(error));
          return;
        }

        var data = dataFile != null ? EUFS.readFileAsUint8Array(file) : null;

        EUFS.unlink(file);
        EUFS.unlink(signedFile);

        try {
          timeInfo = pThis._GetFileSignTimeInfoSync(0, signedFile);
        } catch (e) {
          onError(e);
          return;
        }

        var info = new EndUserSignInfo(infoPtr.ptr, data, timeInfo);
        infoPtr.free();

        onSuccess(info);
      } else {
        var _onSuccess = function (fileReaded) {
          try {
            var info = pThis.VerifyDataInternal(fileReaded.data);

            if (dataFile == null) info.data = null;

            onSuccess(info);
          } catch (e) {
            onError(e);
          }
        };

        pThis.ReadFile(signedFile, _onSuccess, onError);
      }
    },
    VerifyFileOnTimeEx: function (
      signIndex,
      fileWithSign,
      file,
      onTime,
      offline,
      noCRL,
      onSuccess,
      onError,
    ) {
      var pThis = this;

      var internal = file == null || typeof file === "string";

      if (pThis.isFileSyncAPISupported) {
        var dataFile = file != null ? file : fileWithSign.name + MakeUID(10);

        if (internal) {
          if (!EUFS.link(dataFile, file == null)) {
            onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
            return;
          }
        } else {
          if (!EUFS.link(dataFile)) {
            onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
            return;
          }
        }

        if (!EUFS.link(fileWithSign)) {
          EUFS.unlink(dataFile);

          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }

        var onTimePtr = onTime != null ? EUPointerSystemtime(onTime) : 0;
        var infoPtr = EUPointerSignerInfo();
        var timeInfo;
        var error;

        try {
          error = Module.ccall(
            "EUCheckFileStruct",
            "number",
            ["array"],
            [UTF8ToCP1251Array(EUFS.getFilePath(fileWithSign))],
          );
          if (error == EU_ERROR_NONE) {
            error = Module.ccall(
              "EUVerifyFileOnTimeEx",
              "number",
              [
                "number",
                "array",
                "array",
                "number",
                "number",
                "number",
                "number",
              ],
              [
                signIndex,
                UTF8ToCP1251Array(EUFS.getFilePath(fileWithSign)),
                UTF8ToCP1251Array(EUFS.getFilePath(dataFile)),
                onTime != null ? onTimePtr.ptr : 0,
                IntFromBool(offline),
                IntFromBool(noCRL),
                infoPtr.ptr,
              ],
            );
          }
        } catch (e) {
          error = EU_ERROR_UNKNOWN;
        }

        if (onTime != null) onTimePtr.free();

        if (error != EU_ERROR_NONE) {
          EUFS.unlink(fileWithSign);
          EUFS.unlink(dataFile);

          onError(pThis.MakeError(error));
          return;
        }

        var data =
          internal && file != null ? EUFS.readFileAsUint8Array(dataFile) : null;

        EUFS.unlink(fileWithSign);
        EUFS.unlink(dataFile);

        try {
          timeInfo = pThis._GetFileSignTimeInfoSync(signIndex, fileWithSign);
        } catch (e) {
          onError(e);
          return;
        }

        var info = new EndUserSignInfo(infoPtr.ptr, data, timeInfo);
        infoPtr.free();

        onSuccess(info);
      } else {
        var _onSuccess = function (files) {
          try {
            var info;

            if (internal) {
              info = pThis.VerifyDataInternalOnTimeEx(
                signIndex,
                files[0].data,
                onTime,
                offline,
                noCRL,
              );
              if (file == null) info.data = null;
            } else {
              info = pThis.VerifyDataOnTimeEx(
                files[0].data,
                signIndex,
                files[1].data,
                onTime,
                offline,
                noCRL,
              );
              info.data = null;
            }

            onSuccess(info);
          } catch (e) {
            onError(e);
          }
        };

        var files = [];
        if (!internal) files.push(file);
        files.push(fileWithSign);

        pThis.ReadFiles(files, _onSuccess, onError);
      }
    },
    CreateEmptySign: function (data, asBase64String) {
      var isInternalSign = data != null;
      if (isInternalSign) this.CheckMaxDataSize(data);
      if (isInternalSign) {
        if (typeof data == "string") data = this.StringToArray(data);
      }

      var signPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUCreateEmptySign",
          "number",
          [
            isInternalSign ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            isInternalSign ? data : 0,
            isInternalSign ? data.length : 0,
            asBase64String ? signPtr.ptr : 0,
            !asBase64String ? signPtr.ptr : 0,
            !asBase64String ? signPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        signPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return signPtr.toString(true);
      else return signPtr.toArray();
    },
    CreateSigner: function (hash, asBase64String) {
      this.CheckMaxDataSize(hash);

      var isHashStr = typeof hash == "string";
      var signerPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUCreateSigner",
          "number",
          [
            isHashStr ? "array" : "number",
            !isHashStr ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            isHashStr ? StringToCString(hash) : 0,
            !isHashStr ? hash : 0,
            !isHashStr ? hash.length : 0,
            asBase64String ? signerPtr.ptr : 0,
            !asBase64String ? signerPtr.ptr : 0,
            !asBase64String ? signerPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        signerPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return signerPtr.toString(true);
      else return signerPtr.toArray();
    },
    CreateSignerBeginEx: function (
      signerCert,
      hash,
      noSigningTime,
      noContentTimeStamp,
    ) {
      this.CheckMaxDataSize(signerCert);
      this.CheckMaxDataSize(hash);

      if (typeof hash == "string") hash = this.Base64Decode(hash);

      var pSignerPtr = EUPointerArray();
      var pAttrsHashPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUCreateSignerBeginEx",
          "number",
          [
            "array",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            signerCert,
            signerCert.length,
            hash,
            hash.length,
            IntFromBool(noSigningTime),
            IntFromBool(noContentTimeStamp),
            pSignerPtr.ptr,
            pSignerPtr.lengthPtr,
            pAttrsHashPtr.ptr,
            pAttrsHashPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pSignerPtr.free();
        pAttrsHashPtr.free();
        this.RaiseError(error);
      }

      return new EndUserSigner(pSignerPtr.toArray(), pAttrsHashPtr.toArray());
    },
    CreateSignerEnd: function (unsignedSigner, signature, asBase64String) {
      this.CheckMaxDataSize(unsignedSigner);
      this.CheckMaxDataSize(signature);

      if (typeof unsignedSigner == "string")
        unsignedSigner = this.Base64Decode(unsignedSigner);

      if (typeof signature == "string")
        signature = this.Base64Decode(signature);

      var pPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUCreateSignerEnd",
          "number",
          ["array", "number", "array", "number", "number", "number"],
          [
            unsignedSigner,
            unsignedSigner.length,
            signature,
            signature.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    AppendSigner: function (signer, certificate, prevSign, asBase64String) {
      this.CheckMaxDataSize(signer);
      if (certificate != null) this.CheckMaxDataSize(certificate);
      this.CheckMaxDataSize(prevSign);

      var isSignerStr = typeof signer == "string";
      var isPrevSignStr = typeof prevSign == "string";
      var signPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUAppendSigner",
          "number",
          [
            isSignerStr ? "array" : "number",
            !isSignerStr ? "array" : "number",
            "number",
            certificate != null ? "array" : "number",
            "number",
            isPrevSignStr ? "array" : "number",
            !isPrevSignStr ? "array" : "numer",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            isSignerStr ? StringToCString(signer) : 0,
            !isSignerStr ? signer : 0,
            !isSignerStr ? signer.length : 0,
            certificate != null ? certificate : 0,
            certificate != null ? certificate.length : 0,
            isPrevSignStr ? StringToCString(prevSign) : 0,
            !isPrevSignStr ? prevSign : 0,
            !isPrevSignStr ? prevSign.length : 0,
            asBase64String ? signPtr.ptr : 0,
            !asBase64String ? signPtr.ptr : 0,
            !asBase64String ? signPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        signPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return signPtr.toString(true);
      else return signPtr.toArray();
    },
    GetSigner: function (signIndex, sign, asBase64String) {
      this.CheckMaxDataSize(sign);

      var isSignStr = typeof sign == "string";
      var signerPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUGetSigner",
          "number",
          [
            "number",
            isSignStr ? "array" : "number",
            !isSignStr ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            signIndex,
            isSignStr ? StringToCString(sign) : 0,
            !isSignStr ? sign : 0,
            !isSignStr ? sign.length : 0,
            asBase64String ? signerPtr.ptr : 0,
            !asBase64String ? signerPtr.ptr : 0,
            !asBase64String ? signerPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        signerPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return signerPtr.toString(true);
      else return signerPtr.toArray();
    },
    AppendValidationDataToSigner: function (
      prevSigner,
      certificate,
      asBase64String,
    ) {
      this.CheckMaxDataSize(prevSigner);
      if (certificate != null) this.CheckMaxDataSize(certificate);

      var isPrevSignerStr = typeof prevSigner == "string";
      var signerPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUAppendValidationDataToSigner",
          "number",
          [
            isPrevSignerStr ? "array" : "number",
            !isPrevSignerStr ? "array" : "number",
            "number",
            certificate != null ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            isPrevSignerStr ? StringToCString(prevSigner) : 0,
            !isPrevSignerStr ? prevSigner : 0,
            !isPrevSignerStr ? prevSigner.length : 0,
            certificate != null ? certificate : 0,
            certificate != null ? certificate.length : 0,
            asBase64String ? signerPtr.ptr : 0,
            !asBase64String ? signerPtr.ptr : 0,
            !asBase64String ? signerPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        signerPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return signerPtr.toString(true);
      else return signerPtr.toArray();
    },
    RawSignData: function (data, asBase64String) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var pPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EURawSignData",
          "number",
          ["array", "number", "number", "number", "number"],
          [
            data,
            data.length,
            asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return pPtr.toString(true);
      else return pPtr.toArray();
    },
    RawVerifyDataEx: function (cert, data, sign) {
      if (typeof data == "string") data = this.StringToArray(data);

      if (cert != null) this.CheckMaxDataSize(cert);

      this.CheckMaxDataSize(data);
      this.CheckMaxDataSize(sign);

      var isSignStr = typeof sign == "string";
      var infoPtr = EUPointerSignerInfo();
      var error;

      try {
        error = Module.ccall(
          "EURawVerifyDataEx",
          "number",
          [
            cert ? "array" : "numer",
            "number",
            "array",
            "number",
            isSignStr ? "array" : "number",
            !isSignStr ? "array" : "number",
            "number",
            "number",
          ],
          [
            cert != null ? cert : 0,
            cert != null ? cert.length : 0,
            data,
            data.length,
            isSignStr ? StringToCString(sign) : 0,
            !isSignStr ? sign : 0,
            !isSignStr ? sign.length : 0,
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      var info = new EndUserSignInfo(infoPtr.ptr, data);
      infoPtr.free();

      return info;
    },
    RawSignHash: function (hash, asBase64String) {
      this.CheckMaxDataSize(hash);

      var isHashStr = typeof hash == "string";
      var pPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EURawSignHash",
          "number",
          [
            isHashStr ? "array" : "number",
            !isHashStr ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            isHashStr ? StringToCString(hash) : 0,
            !isHashStr ? hash : 0,
            !isHashStr ? hash.length : 0,
            asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return pPtr.toString(true);
      else return pPtr.toArray();
    },
    RawVerifyHash: function (hash, sign) {
      this.CheckMaxDataSize(hash);
      this.CheckMaxDataSize(sign);

      var isHashStr = typeof hash == "string";
      var isSignStr = typeof sign == "string";
      var infoPtr = EUPointerSignerInfo();
      var error;

      try {
        error = Module.ccall(
          "EURawVerifyHash",
          "number",
          [
            isHashStr ? "array" : "number",
            !isHashStr ? "array" : "number",
            "number",
            isSignStr ? "array" : "number",
            !isSignStr ? "array" : "number",
            "number",
            "number",
          ],
          [
            isHashStr ? StringToCString(hash) : 0,
            !isHashStr ? hash : 0,
            !isHashStr ? hash.length : 0,
            isSignStr ? StringToCString(sign) : 0,
            !isSignStr ? sign : 0,
            !isSignStr ? sign.length : 0,
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      var info = new EndUserSignInfo(infoPtr.ptr, null);
      infoPtr.free();

      return info;
    },
    CtxSignHash: function (
      privateKeyContext,
      signAlgo,
      hashContext,
      appendCert,
      asBase64String,
    ) {
      var pPtr = EUPointerArray(privateKeyContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxSignHash",
          "number",
          ["number", "number", "number", "number", "number", "number"],
          [
            privateKeyContext.GetContext(),
            signAlgo,
            hashContext.GetContext(),
            IntFromBool(appendCert),
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxVerifyHash: function (hashContext, signIndex, sign) {
      this.CheckDataStruct(sign);

      this.CheckMaxDataSize(sign);

      if (typeof sign == "string") sign = this.Base64Decode(sign);

      var infoPtr = EUPointerSignerInfo(hashContext.GetContext());
      var signTimeInfo = null;
      var error;

      try {
        error = Module.ccall(
          "EUCtxVerifyHash",
          "number",
          ["number", "number", "array", "number", "number"],
          [hashContext.GetContext(), signIndex, sign, sign.length, infoPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      try {
        signTimeInfo = this.GetSignTimeInfo(signIndex, sign);
      } catch (e) {
        infoPtr.free();
        throw e;
      }

      var info = new EndUserSignInfo(infoPtr.ptr, null, signTimeInfo);
      infoPtr.free();

      return info;
    },
    CtxSignHashValue: function (
      privateKeyContext,
      signAlgo,
      hash,
      appendCert,
      asBase64String,
    ) {
      if (typeof hash == "string") hash = this.Base64Decode(hash);

      var pPtr = EUPointerArray(privateKeyContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxSignHashValue",
          "number",
          ["number", "number", "array", "number", "number", "number", "number"],
          [
            privateKeyContext.GetContext(),
            signAlgo,
            hash,
            hash.length,
            IntFromBool(appendCert),
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxVerifyHashValue: function (context, hash, signIndex, sign) {
      this.CheckDataStruct(sign);

      this.CheckMaxDataSize(hash);
      this.CheckMaxDataSize(sign);

      if (typeof hash == "string") hash = this.Base64Decode(hash);

      if (typeof sign == "string") sign = this.Base64Decode(sign);

      var infoPtr = EUPointerSignerInfo(context.GetContext());
      var signTimeInfo = null;
      var error;

      try {
        error = Module.ccall(
          "EUCtxVerifyHashValue",
          "number",
          ["number", "array", "number", "number", "array", "number", "number"],
          [
            context.GetContext(),
            hash,
            hash.length,
            signIndex,
            sign,
            sign.length,
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      try {
        signTimeInfo = this.GetSignTimeInfo(signIndex, sign);
      } catch (e) {
        infoPtr.free();
        throw e;
      }

      var info = new EndUserSignInfo(infoPtr.ptr, null, signTimeInfo);
      infoPtr.free();

      return info;
    },
    CtxSignData: function (
      privateKeyContext,
      signAlgo,
      data,
      external,
      appendCert,
      asBase64String,
    ) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var pPtr = EUPointerArray(privateKeyContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxSignData",
          "number",
          [
            "number",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            privateKeyContext.GetContext(),
            signAlgo,
            data,
            data.length,
            IntFromBool(external),
            IntFromBool(appendCert),
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxVerifyData: function (context, data, signIndex, sign) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckDataStruct(sign);

      this.CheckMaxDataSize(data);
      this.CheckMaxDataSize(sign);

      if (typeof sign == "string") sign = this.Base64Decode(sign);

      var infoPtr = EUPointerSignerInfo(context.GetContext());
      var signTimeInfo = null;
      var error;

      try {
        error = Module.ccall(
          "EUCtxVerifyData",
          "number",
          ["number", "array", "number", "number", "array", "number", "number"],
          [
            context.GetContext(),
            data,
            data.length,
            signIndex,
            sign,
            sign.length,
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      try {
        signTimeInfo = this.GetSignTimeInfo(signIndex, sign);
      } catch (e) {
        infoPtr.free();
        throw e;
      }

      var info = new EndUserSignInfo(infoPtr.ptr, data, signTimeInfo);
      infoPtr.free();

      return info;
    },
    CtxVerifyDataInternal: function (context, signIndex, sign) {
      this.CheckMaxDataSize(sign);

      if (typeof sign == "string") sign = this.Base64Decode(sign);

      this.CheckDataStruct(sign);

      var arrPtr = EUPointerArray(context.GetContext());
      var infoPtr = EUPointerSignerInfo(context.GetContext());
      var signTimeInfo = null;
      var error;

      try {
        error = Module.ccall(
          "EUCtxVerifyDataInternal",
          "number",
          ["number", "number", "array", "number", "number", "number", "number"],
          [
            context.GetContext(),
            signIndex,
            sign,
            sign.length,
            arrPtr.ptr,
            arrPtr.lengthPtr,
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        arrPtr.free();
        infoPtr.free();
        this.RaiseError(error);
      }

      try {
        signTimeInfo = this.GetSignTimeInfo(signIndex, sign);
      } catch (e) {
        arrPtr.free();
        infoPtr.free();
        throw e;
      }

      var info = new EndUserSignInfo(
        infoPtr.ptr,
        arrPtr.toArray(),
        signTimeInfo,
      );
      infoPtr.free();

      return info;
    },
    CtxSignFile: function (
      privateKeyContext,
      signAlgo,
      file,
      external,
      appendCert,
      fileWithSign,
      onSuccess,
      onError,
    ) {
      var pThis = this;

      if (pThis.isFileSyncAPISupported) {
        var signFile;

        signFile =
          fileWithSign != null ? fileWithSign : file.name + MakeUID(10);

        if (!EUFS.link(signFile, signFile == null)) {
          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }

        if (!EUFS.link(file)) {
          EUFS.unlink(signFile);

          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }

        var error;

        try {
          error = Module.ccall(
            "EUCtxSignFile",
            "number",
            ["number", "number", "array", "number", "number", "array"],
            [
              privateKeyContext.GetContext(),
              signAlgo,
              UTF8ToCP1251Array(EUFS.getFilePath(file)),
              IntFromBool(external),
              IntFromBool(appendCert),
              UTF8ToCP1251Array(EUFS.getFilePath(signFile)),
            ],
          );
        } catch (e) {
          error = EU_ERROR_UNKNOWN;
        }

        if (error != EU_ERROR_NONE) {
          EUFS.unlink(file);
          EUFS.unlink(signFile);

          onError(pThis.MakeError(error));
          return;
        }

        var sign = file != null ? EUFS.readFileAsUint8Array(signFile) : null;

        EUFS.unlink(signFile);
        EUFS.unlink(file);

        onSuccess(sign);
      } else {
        var _onSuccess = function (fileReaded) {
          try {
            var signedData;

            signedData = pThis.CtxSignData(
              privateKeyContext,
              signAlgo,
              fileReaded.data,
              external,
              appendCert,
            );

            onSuccess(signedData);
          } catch (e) {
            onError(e);
          }
        };

        pThis.ReadFile(file, _onSuccess, onError);
      }
    },
    CtxIsAlreadySigned: function (privateKeyContext, signAlgo, sign) {
      this.CheckMaxDataSize(sign);

      if (typeof sign == "string") sign = this.Base64Decode(sign);

      var intPtr = EUPointerInt();
      var error;

      try {
        error = Module.ccall(
          "EUCtxIsAlreadySigned",
          "number",
          ["number", "number", "array", "number", "number"],
          [
            privateKeyContext.GetContext(),
            signAlgo,
            sign,
            sign.length,
            intPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        this.RaiseError(error);
      }

      return intPtr.toBoolean();
    },
    CtxAppendSignHash: function (
      privateKeyContext,
      signAlgo,
      hashContext,
      previousSign,
      appendCert,
      asBase64String,
    ) {
      this.CheckMaxDataSize(previousSign);

      if (typeof previousSign == "string")
        previousSign = this.Base64Decode(previousSign);

      this.CheckDataStruct(previousSign);

      var pPtr = EUPointerArray(privateKeyContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxAppendSignHash",
          "number",
          [
            "number",
            "number",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            privateKeyContext.GetContext(),
            signAlgo,
            hashContext.GetContext(),
            previousSign,
            previousSign.length,
            IntFromBool(appendCert),
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxAppendSignHashValue: function (
      privateKeyContext,
      signAlgo,
      hash,
      previousSign,
      appendCert,
      asBase64String,
    ) {
      this.CheckMaxDataSize(hash);
      this.CheckMaxDataSize(previousSign);

      if (typeof hash == "string") hash = this.Base64Decode(hash);

      if (typeof previousSign == "string")
        previousSign = this.Base64Decode(previousSign);

      this.CheckDataStruct(previousSign);

      var pPtr = EUPointerArray(privateKeyContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxAppendSignHashValue",
          "number",
          [
            "number",
            "number",
            "array",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            privateKeyContext.GetContext(),
            signAlgo,
            hash,
            hash.length,
            previousSign,
            previousSign.length,
            IntFromBool(appendCert),
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxAppendSign: function (
      privateKeyContext,
      signAlgo,
      data,
      previousSign,
      appendCert,
      asBase64String,
    ) {
      if (data != null && typeof data == "string")
        data = this.StringToArray(data);

      if (data != null) this.CheckMaxDataSize(data);
      this.CheckMaxDataSize(previousSign);

      if (typeof previousSign == "string")
        previousSign = this.Base64Decode(previousSign);

      this.CheckDataStruct(previousSign);

      var pPtr = EUPointerArray(privateKeyContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxAppendSign",
          "number",
          [
            "number",
            "number",
            data ? "array" : "number",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            privateKeyContext.GetContext(),
            signAlgo,
            data != null ? data : 0,
            data != null ? data.length : 0,
            previousSign,
            previousSign.length,
            IntFromBool(appendCert),
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxCreateEmptySign: function (
      context,
      signAlgo,
      data,
      certificate,
      asBase64String,
    ) {
      if (data != null && typeof data == "string")
        data = this.StringToArray(data);

      if (data != null) this.CheckMaxDataSize(data);
      this.CheckMaxDataSize(certificate);

      var pPtr = EUPointerArray(context.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxCreateEmptySign",
          "number",
          [
            "number",
            "number",
            data ? "array" : "number",
            "number",
            "array",
            "number",
            "number",
            "number",
          ],
          [
            context.GetContext(),
            signAlgo,
            data != null ? data : 0,
            data != null ? data.length : 0,
            certificate,
            certificate.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxCreateSignerBegin: function (
      context,
      signAlgo,
      signerCert,
      hash,
      noSigningTime,
      noContentTimeStamp,
    ) {
      this.CheckMaxDataSize(signerCert);
      this.CheckMaxDataSize(hash);

      if (typeof hash == "string") hash = this.Base64Decode(hash);

      var pSignerPtr = EUPointerArray(context.GetContext());
      var pAttrsHashPtr = EUPointerArray(context.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxCreateSignerBegin",
          "number",
          [
            "number",
            "number",
            "array",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            context.GetContext(),
            signAlgo,
            signerCert,
            signerCert.length,
            hash,
            hash.length,
            IntFromBool(noSigningTime),
            IntFromBool(noContentTimeStamp),
            pSignerPtr.ptr,
            pSignerPtr.lengthPtr,
            pAttrsHashPtr.ptr,
            pAttrsHashPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pSignerPtr.free();
        pAttrsHashPtr.free();
        this.RaiseError(error);
      }

      return new EndUserSigner(pSignerPtr.toArray(), pAttrsHashPtr.toArray());
    },
    CtxCreateSigner: function (
      privateKeyContext,
      signAlgo,
      hash,
      asBase64String,
    ) {
      this.CheckMaxDataSize(hash);

      if (typeof hash == "string") hash = this.Base64Decode(hash);

      var pPtr = EUPointerArray(privateKeyContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxCreateSigner",
          "number",
          ["number", "number", "array", "number", "number", "number"],
          [
            privateKeyContext.GetContext(),
            signAlgo,
            hash,
            hash.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxAppendSigner: function (
      context,
      signAlgo,
      signer,
      certificate,
      previousSign,
      asBase64String,
    ) {
      this.CheckMaxDataSize(signer);
      if (certificate != null) this.CheckMaxDataSize(certificate);
      this.CheckMaxDataSize(previousSign);

      if (typeof signer == "string") signer = this.Base64Decode(signer);

      if (typeof previousSign == "string")
        previousSign = this.Base64Decode(previousSign);

      var pPtr = EUPointerArray(context.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxAppendSigner",
          "number",
          [
            "number",
            "number",
            "array",
            "number",
            certificate != null ? "array" : "number",
            "number",
            "array",
            "number",
            "number",
            "number",
          ],
          [
            context.GetContext(),
            signAlgo,
            signer,
            signer.length,
            certificate != null ? certificate : 0,
            certificate != null ? certificate.length : 0,
            previousSign,
            previousSign.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxGetSignValue: function (
      privateKeyContext,
      signAlgo,
      hash,
      asBase64String,
    ) {
      this.CheckMaxDataSize(hash);

      if (typeof hash == "string") hash = this.Base64Decode(hash);

      var pPtr = EUPointerArray(privateKeyContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxGetSignValue",
          "number",
          ["number", "number", "array", "number", "number", "number"],
          [
            privateKeyContext.GetContext(),
            signAlgo,
            hash,
            hash.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxGetSignsCount: function (context, sign) {
      this.CheckMaxDataSize(sign);

      if (typeof sign == "string") sign = this.Base64Decode(sign);

      var intPtr = EUPointerDWORD();
      var error;

      try {
        error = Module.ccall(
          "EUCtxGetSignsCount",
          "number",
          ["number", "array", "number", "number"],
          [context.GetContext(), sign, sign.length, intPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        this.RaiseError(error);
      }

      return intPtr.toNumber();
    },
    CtxGetSignerInfo: function (context, signIndex, sign) {
      this.CheckMaxDataSize(sign);

      if (typeof sign == "string") sign = this.Base64Decode(sign);

      var pCertInfoExPtr = EUPointer();
      var certArrPtr = EUPointerArray(context.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxGetSignerInfo",
          "number",
          ["number", "number", "array", "number", "number", "number", "number"],
          [
            context.GetContext(),
            signIndex,
            sign,
            sign.length,
            pCertInfoExPtr.ptr,
            certArrPtr.ptr,
            certArrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pCertInfoExPtr.free();
        certArrPtr.free();

        this.RaiseError(error);
      }

      var certInfoExPtr, certInfoEx;

      certInfoExPtr = pCertInfoExPtr.toPtr();
      certInfoEx = new EndUserCertificateInfoEx(
        certInfoExPtr,
        this.fieldsEncoder,
      );
      Module._EUCtxFreeCertificateInfoEx(
        context.GetContext() | 0,
        certInfoExPtr,
      );

      return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
    },
    CtxGetFileSignsCount: function (context, signFile, onSuccess, onError) {
      var pThis = this;

      if (pThis.isFileSyncAPISupported) {
        if (!EUFS.link(signFile)) {
          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }

        var intPtr = EUPointerDWORD();
        var error;
        try {
          error = Module.ccall(
            "EUCtxGetFileSignsCount",
            "number",
            ["number", "array", "number"],
            [
              context.GetContext(),
              UTF8ToCP1251Array(EUFS.getFilePath(signFile)),
              intPtr.ptr,
            ],
          );
        } catch (e) {
          error = EU_ERROR_UNKNOWN;
        }

        if (error != EU_ERROR_NONE) {
          intPtr.free();

          onError(pThis.MakeError(error));
          return;
        }

        EUFS.unlink(signFile);

        onSuccess(intPtr.toNumber());
      } else {
        var _onSuccess = function (fileReaded) {
          try {
            var signsCount;

            signsCount = pThis.CtxGetSignsCount(context, fileReaded.data);

            onSuccess(signsCount);
          } catch (e) {
            onError(e);
          }
        };

        pThis.ReadFile(signFile, _onSuccess, onError);
      }
    },
    CtxGetFileSignerInfo: function (
      context,
      signIndex,
      signFile,
      onSuccess,
      onError,
    ) {
      var pThis = this;

      if (pThis.isFileSyncAPISupported) {
        if (!EUFS.link(signFile)) {
          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }

        var pCertInfoExPtr = EUPointer();
        var certArrPtr = EUPointerArray(context.GetContext());
        var error;
        try {
          error = Module.ccall(
            "EUCtxGetFileSignerInfo",
            "number",
            ["number", "number", "array", "number", "number", "number"],
            [
              context.GetContext(),
              signIndex,
              UTF8ToCP1251Array(EUFS.getFilePath(signFile)),
              pCertInfoExPtr.ptr,
              certArrPtr.ptr,
              certArrPtr.lengthPtr,
            ],
          );
        } catch (e) {
          error = EU_ERROR_UNKNOWN;
        }

        if (error != EU_ERROR_NONE) {
          EUFS.unlink(signFile);
          pCertInfoExPtr.free();
          certArrPtr.free();

          onError(pThis.MakeError(error));
          return;
        }

        EUFS.unlink(signFile);

        var certInfoExPtr, certInfoEx;

        certInfoExPtr = pCertInfoExPtr.toPtr();
        certInfoEx = new EndUserCertificateInfoEx(
          certInfoExPtr,
          this.fieldsEncoder,
        );
        Module._EUCtxFreeCertificateInfoEx(
          context.GetContext() | 0,
          certInfoExPtr,
        );

        onSuccess(new EndUserCertificate(certInfoEx, certArrPtr.toArray()));
      } else {
        var _onSuccess = function (fileReaded) {
          try {
            var signerInfo;

            signerInfo = pThis.CtxGetSignerInfo(
              context,
              signIndex,
              fileReaded.data,
            );

            onSuccess(signerInfo);
          } catch (e) {
            onError(e);
          }
        };

        pThis.ReadFile(signFile, _onSuccess, onError);
      }
    },
    CtxVerifyFile: function (
      context,
      signIndex,
      fileWithSign,
      file,
      onSuccess,
      onError,
    ) {
      var pThis = this;

      var internal = file == null || typeof file === "string";

      if (pThis.isFileSyncAPISupported) {
        var dataFile = file != null ? file : fileWithSign.name + MakeUID(10);

        if (internal) {
          if (!EUFS.link(dataFile, file == null)) {
            onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
            return;
          }
        } else {
          if (!EUFS.link(dataFile)) {
            onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
            return;
          }
        }

        if (!EUFS.link(fileWithSign)) {
          EUFS.unlink(dataFile);

          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }

        var infoPtr = EUPointerSignerInfo();
        var timeInfo;
        var error;

        try {
          error = Module.ccall(
            "EUCheckFileStruct",
            "number",
            ["array"],
            [UTF8ToCP1251Array(EUFS.getFilePath(fileWithSign))],
          );
          if (error == EU_ERROR_NONE) {
            error = Module.ccall(
              "EUCtxVerifyFile",
              "number",
              ["number", "number", "array", "array", "number"],
              [
                context.GetContext(),
                signIndex,
                UTF8ToCP1251Array(EUFS.getFilePath(fileWithSign)),
                UTF8ToCP1251Array(EUFS.getFilePath(dataFile)),
                infoPtr.ptr,
              ],
            );
          }
        } catch (e) {
          error = EU_ERROR_UNKNOWN;
        }

        if (error != EU_ERROR_NONE) {
          EUFS.unlink(fileWithSign);
          EUFS.unlink(dataFile);

          onError(pThis.MakeError(error));
          return;
        }

        var data =
          internal && file != null ? EUFS.readFileAsUint8Array(dataFile) : null;

        EUFS.unlink(fileWithSign);
        EUFS.unlink(dataFile);

        try {
          timeInfo = pThis._GetFileSignTimeInfoSync(signIndex, fileWithSign);
        } catch (e) {
          onError(e);
          return;
        }

        var info = new EndUserSignInfo(infoPtr.ptr, data, timeInfo);
        infoPtr.free();

        onSuccess(info);
      } else {
        var _onSuccess = function (files) {
          try {
            var info;

            if (internal) {
              info = pThis.CtxVerifyDataInternal(
                context,
                signIndex,
                files[0].data,
              );
              if (file == null) info.data = null;
            } else {
              info = pThis.CtxVerifyData(
                context,
                files[0].data,
                signIndex,
                files[1].data,
              );
              info.data = null;
            }

            onSuccess(info);
          } catch (e) {
            onError(e);
          }
        };

        var files = [];
        if (!internal) files.push(file);
        files.push(fileWithSign);

        pThis.ReadFiles(files, _onSuccess, onError);
      }
    },
    GetTSPByAccessInfo: function (
      hashAlgo,
      hash,
      accessInfo,
      accessInfoPort,
      asBase64String,
    ) {
      this.CheckMaxDataSize(hash);

      var isHashStr = typeof hash == "string";
      var pPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUGetTSPByAccessInfo",
          "number",
          [
            "number",
            isHashStr ? "array" : "number",
            !isHashStr ? "array" : "number",
            "number",
            accessInfo ? "array" : "number",
            accessInfoPort ? "array" : "number",
            "number",
            "number",
          ],
          [
            hashAlgo,
            isHashStr ? StringToCString(hash) : 0,
            !isHashStr ? hash : 0,
            !isHashStr ? hash.length : 0,
            accessInfo ? UTF8ToCP1251Array(accessInfo) : 0,
            accessInfoPort ? UTF8ToCP1251Array(accessInfoPort) : 0,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CheckTSP: function (tsp, hashAlgo, hash) {
      var error;

      this.CheckMaxDataSize(tsp);
      tsp = typeof tsp == "string" ? this.Base64Decode(tsp) : tsp;

      if (hash) {
        this.CheckMaxDataSize(hash);
        hash = typeof hash == "string" ? this.Base64Decode(hash) : hash;
      }

      try {
        error = Module.ccall(
          "EUCheckTSP",
          "number",
          [
            "array",
            "number",
            "number",
            "number",
            hash ? "array" : "number",
            "number",
          ],
          [
            tsp,
            tsp.length,
            hashAlgo,
            0,
            hash ? hash : 0,
            hash ? hash.length : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        this.RaiseError(error);
      }
    },
    //-----------------------------------------------------------------------------
    IsEnvelopedData: function (enveloped) {
      this.CheckMaxDataSize(enveloped);

      if (typeof enveloped == "string")
        enveloped = this.Base64Decode(enveloped);

      var isEnveloped = false;
      var error;

      try {
        isEnveloped =
          Module.ccall(
            "EUIsEnvelopedData",
            "number",
            ["array", "number"],
            [enveloped, enveloped.length],
          ) != EU_FALSE;
        error = EU_ERROR_NONE;
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        this.RaiseError(error);
      }

      return isEnveloped;
    },
    EnvelopDataEx: function (
      recipientCertIssuers,
      recipientCertSerials,
      signData,
      data,
      asBase64String,
    ) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var envDataPtr = asBase64String ? EUPointer() : EUPointerArray();
      var issuers = intArrayFromStrings(recipientCertIssuers);
      var serials = intArrayFromStrings(recipientCertSerials);
      var error;

      try {
        error = Module.ccall(
          "EUEnvelopDataEx",
          "number",
          [
            "array",
            "array",
            "number",
            data ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            issuers,
            serials,
            IntFromBool(signData),
            data != null ? data : 0,
            data != null ? data.length : 0,
            asBase64String ? envDataPtr.ptr : 0,
            !asBase64String ? envDataPtr.ptr : 0,
            !asBase64String ? envDataPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        envDataPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return envDataPtr.toString(true);
      else return envDataPtr.toArray();
    },
    DevelopData: function (data) {
      this.CheckMaxDataSize(data);

      var isDataStr = typeof data == "string";
      var devDataPtr = EUPointerArray();
      var infoPtr = EUPointerSenderInfo();
      var error;

      try {
        error = Module.ccall(
          "EUDevelopData",
          "number",
          [
            isDataStr ? "array" : "number",
            !isDataStr ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            isDataStr ? StringToCString(data) : 0,
            !isDataStr ? data : 0,
            !isDataStr ? data.length : 0,
            devDataPtr.ptr,
            devDataPtr.lengthPtr,
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        devDataPtr.free();
        infoPtr.free();
        this.RaiseError(error);
      }

      var info = new EndUserSenderInfo(infoPtr.ptr, devDataPtr.toArray());
      devDataPtr.free();

      return info;
    },
    EnvelopDataToRecipientsWithDynamicKey: function (
      recipientCertificates,
      signData,
      appendCert,
      data,
      asBase64String,
    ) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var envDataPtr = asBase64String ? EUPointer() : EUPointerArray();

      var recipientCertsArray = new EUArrayFromArrayOfArray(
        recipientCertificates,
      );
      var error;

      try {
        error = Module.ccall(
          "EUEnvelopDataToRecipientsWithDynamicKey",
          "number",
          [
            "number",
            "number",
            "number",
            "number",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            recipientCertsArray.count,
            recipientCertsArray.arraysPtr,
            recipientCertsArray.arraysLengthPtr,
            IntFromBool(signData),
            IntFromBool(appendCert),
            data,
            data.length,
            asBase64String ? envDataPtr.ptr : 0,
            !asBase64String ? envDataPtr.ptr : 0,
            !asBase64String ? envDataPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        recipientCertsArray.free();
        envDataPtr.free();
        this.RaiseError(error);
      }

      recipientCertsArray.free();

      if (asBase64String) return envDataPtr.toString(true);
      else return envDataPtr.toArray();
    },
    EnvelopDataRSAEx: function (
      contentEncAlgoType,
      recipientCertIssuers,
      recipientCertSerials,
      signData,
      data,
      asBase64String,
    ) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var envDataPtr = asBase64String ? EUPointer() : EUPointerArray();
      var issuers = intArrayFromStrings(recipientCertIssuers);
      var serials = intArrayFromStrings(recipientCertSerials);
      var error;

      try {
        error = Module.ccall(
          "EUEnvelopDataRSAEx",
          "number",
          [
            "number",
            "array",
            "array",
            "number",
            data ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            contentEncAlgoType,
            issuers,
            serials,
            IntFromBool(signData),
            data != null ? data : 0,
            data != null ? data.length : 0,
            asBase64String ? envDataPtr.ptr : 0,
            !asBase64String ? envDataPtr.ptr : 0,
            !asBase64String ? envDataPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        envDataPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return envDataPtr.toString(true);
      else return envDataPtr.toArray();
    },
    CtxEnvelopData: function (
      privateKeyContext,
      recipientCertificates,
      recipientAppendType,
      signData,
      appendCert,
      data,
      asBase64String,
    ) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var pPtr = EUPointerArray(privateKeyContext.GetContext());
      var recipientCertsArray = new EUArrayFromArrayOfArray(
        recipientCertificates,
      );
      var error;

      try {
        error = Module.ccall(
          "EUCtxEnvelopData",
          "number",
          [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "array",
            "number",
            "number",
            "number",
          ],
          [
            privateKeyContext.GetContext(),
            recipientCertsArray.count,
            recipientCertsArray.arraysPtr,
            recipientCertsArray.arraysLengthPtr,
            recipientAppendType,
            IntFromBool(signData),
            IntFromBool(appendCert),
            data,
            data.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        recipientCertsArray.free();
        pPtr.free();
        this.RaiseError(error);
      }

      recipientCertsArray.free();

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxDevelopData: function (privateKeyContext, data, senderCert) {
      this.CheckMaxDataSize(data);
      if (senderCert != null) this.CheckMaxDataSize(senderCert);

      var isEnvDataStr = typeof data == "string";
      var devDataPtr = EUPointerArray(privateKeyContext.GetContext());
      var infoPtr = EUPointerSenderInfo();
      var error;

      try {
        error = Module.ccall(
          "EUCtxDevelopData",
          "number",
          [
            "number",
            isEnvDataStr ? "array" : "number",
            !isEnvDataStr ? "array" : "number",
            "number",
            senderCert ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            privateKeyContext.GetContext(),
            isEnvDataStr ? StringToCString(data) : 0,
            !isEnvDataStr ? data : 0,
            !isEnvDataStr ? data.length : 0,
            senderCert != null ? senderCert : 0,
            senderCert != null ? senderCert.length : 0,
            devDataPtr.ptr,
            devDataPtr.lengthPtr,
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        devDataPtr.free();
        infoPtr.free();
        this.RaiseError(error);
      }

      var info = new EndUserSenderInfo(infoPtr.ptr, devDataPtr.toArray());
      devDataPtr.free();

      return info;
    },
    CtxEnvelopDataWithDynamicKey: function (
      privateKeyContext,
      recipientCertificates,
      recipientAppendType,
      signData,
      appendCert,
      data,
      asBase64String,
    ) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var pPtr = EUPointerArray(privateKeyContext.GetContext());
      var recipientCertsArray = new EUArrayFromArrayOfArray(
        recipientCertificates,
      );
      var error;

      try {
        error = Module.ccall(
          "EUCtxEnvelopDataWithDynamicKey",
          "number",
          [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "array",
            "number",
            "number",
            "number",
          ],
          [
            privateKeyContext.GetContext(),
            recipientCertsArray.count,
            recipientCertsArray.arraysPtr,
            recipientCertsArray.arraysLengthPtr,
            recipientAppendType,
            IntFromBool(signData),
            IntFromBool(appendCert),
            data,
            data.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        recipientCertsArray.free();
        pPtr.free();
        this.RaiseError(error);
      }

      recipientCertsArray.free();

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxEnvelopDataWithSettings2: function (
      privateKeyContext,
      useDynamicKey,
      contentEncAlgoType,
      recipientCertificates,
      recipientAppendType,
      checkRecipientCertsOffline,
      checkRecipientCertsNoCRL,
      noRecipientCertsCertCheck,
      signData,
      noTSP,
      appendCert,
      data,
      asBase64String,
    ) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var pPtr = EUPointerArray(privateKeyContext.GetContext());
      var recipientCertsArray = new EUArrayFromArrayOfArray(
        recipientCertificates,
      );
      var error;

      try {
        error = Module.ccall(
          "EUCtxEnvelopDataWithSettings2",
          "number",
          [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "array",
            "number",
            "number",
            "number",
          ],
          [
            privateKeyContext.GetContext(),
            IntFromBool(useDynamicKey),
            contentEncAlgoType,
            recipientCertsArray.count,
            recipientCertsArray.arraysPtr,
            recipientCertsArray.arraysLengthPtr,
            recipientAppendType,
            IntFromBool(checkRecipientCertsOffline),
            IntFromBool(checkRecipientCertsNoCRL),
            IntFromBool(noRecipientCertsCertCheck),
            IntFromBool(signData),
            IntFromBool(noTSP),
            IntFromBool(appendCert),
            data,
            data.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        recipientCertsArray.free();
        pPtr.free();
        this.RaiseError(error);
      }

      recipientCertsArray.free();

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxEnvelopDataRSA: function (
      privateKeyContext,
      recipientCertificates,
      contentEncAlgoType,
      signData,
      appendCert,
      data,
      asBase64String,
    ) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var pPtr = EUPointerArray(privateKeyContext.GetContext());
      var recipientCertsArray = new EUArrayFromArrayOfArray(
        recipientCertificates,
      );
      var error;

      try {
        error = Module.ccall(
          "EUCtxEnvelopDataRSA",
          "number",
          [
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "array",
            "number",
            "number",
            "number",
          ],
          [
            privateKeyContext.GetContext(),
            recipientCertsArray.count,
            recipientCertsArray.arraysPtr,
            recipientCertsArray.arraysLengthPtr,
            contentEncAlgoType,
            IntFromBool(signData),
            IntFromBool(appendCert),
            data,
            data.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        recipientCertsArray.free();
        pPtr.free();
        this.RaiseError(error);
      }

      recipientCertsArray.free();

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxGetSenderInfo: function (context, data, recipientCert) {
      this.CheckMaxDataSize(data);

      if (typeof data == "string") data = this.Base64Decode(data);

      var isDynamicKeyPtr = EUPointerInt();
      var pCertInfoExPtr = EUPointer();
      var certArrPtr = EUPointerArray(context.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxGetSenderInfo",
          "number",
          [
            "number",
            "array",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            context.GetContext(),
            data,
            data.length,
            recipientCert,
            recipientCert.length,
            isDynamicKeyPtr.ptr,
            pCertInfoExPtr.ptr,
            certArrPtr.ptr,
            certArrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        isDynamicKeyPtr.free();
        pCertInfoExPtr.free();
        certArrPtr.free();

        this.RaiseError(error);
      }

      var certInfoExPtr, certInfoEx;

      certInfoExPtr = pCertInfoExPtr.toPtr();
      certInfoEx = new EndUserCertificateInfoEx(
        certInfoExPtr,
        this.fieldsEncoder,
      );
      Module._EUCtxFreeCertificateInfoEx(
        context.GetContext() | 0,
        certInfoExPtr,
      );

      return EndUserSenderInfoEx(
        isDynamicKeyPtr.toBoolean(),
        certInfoEx,
        certArrPtr.toArray(),
      );
    },
    CtxGetRecipientsCount: function (context, envelopedData) {
      this.CheckMaxDataSize(envelopedData);

      if (typeof envelopedData == "string")
        envelopedData = this.Base64Decode(envelopedData);

      var intPtr = EUPointerDWORD();
      var error;

      try {
        error = Module.ccall(
          "EUCtxGetRecipientsCount",
          "number",
          ["number", "array", "number", "number"],
          [
            context.GetContext(),
            envelopedData,
            envelopedData.length,
            intPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();

        this.RaiseError(error);
      }

      return intPtr.toNumber();
    },
    CtxGetRecipientInfo: function (context, recipientIndex, envelopedData) {
      this.CheckMaxDataSize(envelopedData);

      if (typeof envelopedData == "string")
        envelopedData = this.Base64Decode(envelopedData);

      var infoTypePtr = EUPointerDWORD();
      var pIssuerPtr = EUPointer(context.GetContext());
      var pSerialPtr = EUPointer(context.GetContext());
      var pPublicKeyIDPtr = EUPointer(context.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxGetRecipientInfo",
          "number",
          [
            "number",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            context.GetContext(),
            recipientIndex,
            envelopedData,
            envelopedData.length,
            infoTypePtr.ptr,
            pIssuerPtr.ptr,
            pSerialPtr.ptr,
            pPublicKeyIDPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoTypePtr.free();
        pIssuerPtr.free();
        pSerialPtr.free();
        pPublicKeyIDPtr.free();

        this.RaiseError(error);
      }

      return EndUserRecipientInfo(
        infoTypePtr.toNumber(),
        pIssuerPtr.toString(),
        pSerialPtr.toString(),
        pPublicKeyIDPtr.toString(),
      );
    },
    AppendRecipient: function (prevEnvData, recipient, asBase64String) {
      this.CheckMaxDataSize(prevEnvData);
      this.CheckMaxDataSize(recipient);

      var isPrevEnvDataStr = typeof prevEnvData == "string";
      var isRecipientStr = typeof recipient == "string";
      var envDataPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUAppendRecipient",
          "number",
          [
            isPrevEnvDataStr ? "array" : "number",
            !isPrevEnvDataStr ? "array" : "number",
            "number",
            isRecipientStr ? "array" : "number",
            !isRecipientStr ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            isPrevEnvDataStr ? StringToCString(prevEnvData) : 0,
            !isPrevEnvDataStr ? prevEnvData : 0,
            !isPrevEnvDataStr ? prevEnvData.length : 0,
            isRecipientStr ? StringToCString(recipient) : 0,
            !isRecipientStr ? recipient : 0,
            !isRecipientStr ? recipient.length : 0,
            asBase64String ? envDataPtr.ptr : 0,
            !asBase64String ? envDataPtr.ptr : 0,
            !asBase64String ? envDataPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        envDataPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return envDataPtr.toString(true);
      else return envDataPtr.toArray();
    },
    GetRecipient: function (envData, recipientCert, asBase64String) {
      this.CheckMaxDataSize(envData);
      this.CheckMaxDataSize(recipientCert);

      var isEnvDataStr = typeof envData == "string";
      var recipientPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUGetRecipient",
          "number",
          [
            isEnvDataStr ? "array" : "number",
            !isEnvDataStr ? "array" : "number",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            isEnvDataStr ? StringToCString(envData) : 0,
            !isEnvDataStr ? envData : 0,
            !isEnvDataStr ? envData.length : 0,
            recipientCert,
            recipientCert.length,
            asBase64String ? recipientPtr.ptr : 0,
            !asBase64String ? recipientPtr.ptr : 0,
            !asBase64String ? recipientPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        recipientPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return recipientPtr.toString(true);
      else return recipientPtr.toArray();
    },
    PasswordRecipientDevelopData: function (
      envData,
      passwordRecipient,
      password,
    ) {
      this.CheckMaxDataSize(envData);
      this.CheckMaxDataSize(passwordRecipient);

      var isEnvDataStr = typeof envData == "string";
      var isPasswordRecipientStr = typeof passwordRecipient == "string";
      var devDataPtr = EUPointerArray();
      var infoPtr = EUPointerSenderInfo();
      var error;

      try {
        error = Module.ccall(
          "EUPasswordRecipientDevelopData",
          "number",
          [
            isEnvDataStr ? "array" : "number",
            !isEnvDataStr ? "array" : "number",
            "number",
            isPasswordRecipientStr ? "array" : "number",
            !isPasswordRecipientStr ? "array" : "number",
            "number",
            "array",
            "number",
            "number",
            "number",
          ],
          [
            isEnvDataStr ? StringToCString(envData) : 0,
            !isEnvDataStr ? envData : 0,
            !isEnvDataStr ? envData.length : 0,
            isPasswordRecipientStr ? StringToCString(passwordRecipient) : 0,
            !isPasswordRecipientStr ? passwordRecipient : 0,
            !isPasswordRecipientStr ? passwordRecipient.length : 0,
            UTF8ToCP1251Array(password),
            devDataPtr.ptr,
            devDataPtr.lengthPtr,
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        devDataPtr.free();
        infoPtr.free();
        this.RaiseError(error);
      }

      var info = new EndUserSenderInfo(infoPtr.ptr, devDataPtr.toArray());
      devDataPtr.free();

      return info;
    },
    //-----------------------------------------------------------------------------
    ClientSessionCreateStep1: function (expireTime) {
      var pPtr = EUPointer();
      var error;

      var dataPtr = EUPointerArray();

      try {
        error = Module.ccall(
          "EUClientSessionCreateStep1",
          "number",
          ["number", "number", "number", "number"],
          [expireTime, pPtr.ptr, dataPtr.ptr, dataPtr.lengthPtr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        dataPtr.free();
        this.RaiseError(error);
      }

      return new EndUserSession(pPtr.toPtr(), dataPtr.toArray());
    },
    ServerSessionCreateStep1: function (expireTime, clientData) {
      var pPtr = EUPointer();
      var error;

      var dataPtr = EUPointerArray();

      try {
        error = Module.ccall(
          "EUServerSessionCreateStep1",
          "number",
          ["number", "array", "number", "number", "number", "number"],
          [
            expireTime,
            clientData,
            clientData.length,
            pPtr.ptr,
            dataPtr.ptr,
            dataPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        dataPtr.free();
        this.RaiseError(error);
      }

      return new EndUserSession(pPtr.toPtr(), dataPtr.toArray());
    },
    ClientSessionCreateStep2: function (session, serverData) {
      var error;

      var dataPtr = EUPointerArray();

      try {
        error = Module.ccall(
          "EUClientSessionCreateStep2",
          "number",
          ["number", "array", "number", "number", "number"],
          [
            session.GetHandle() | 0,
            serverData,
            serverData.length,
            dataPtr.ptr,
            dataPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        dataPtr.free();
        this.RaiseError(error);
      }

      session.SetData(dataPtr.toArray());
    },
    ServerSessionCreateStep2: function (session, clientData) {
      var error;

      try {
        error = Module.ccall(
          "EUServerSessionCreateStep2",
          "number",
          ["number", "array", "number"],
          [session.GetHandle() | 0, clientData, clientData.length],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        this.RaiseError(error);
      }
    },
    SessionClose: function (session) {
      var error = EU_ERROR_NONE;

      try {
        Module.ccall(
          "EUSessionDestroy",
          "number",
          ["number"],
          [session.GetHandle() | 0],
        );
        error = EU_ERROR_NONE;
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        this.RaiseError(error);
      }
    },
    SessionIsInitialized: function (session) {
      var isInitialized;
      var error = EU_ERROR_NONE;

      try {
        isInitialized = Module.ccall(
          "EUSessionIsInitialized",
          "number",
          ["number"],
          [session.GetHandle() | 0],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        this.RaiseError(error);
      }

      return isInitialized != EU_FALSE;
    },
    SessionCheckCertificates: function (session) {
      var error = EU_ERROR_NONE;

      try {
        error = Module.ccall(
          "EUSessionCheckCertificates",
          "number",
          ["number"],
          [session.GetHandle() | 0],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        this.RaiseError(error);
      }

      return true;
    },
    SessionGetPeerCertificateInfo: function (session) {
      var infoPtr = EUPointerCertificateInfo();
      var error;

      try {
        error = Module.ccall(
          "EUSessionGetPeerCertificateInfo",
          "number",
          ["number", "number"],
          [session.GetHandle() | 0, infoPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      var info = new EndUserCertificateInfo(infoPtr.ptr);
      infoPtr.free();

      return info;
    },
    SessionSave: function (session) {
      var error;

      var dataPtr = EUPointerArray();

      try {
        error = Module.ccall(
          "EUSessionSave",
          "number",
          ["number", "number", "number"],
          [session.GetHandle() | 0, dataPtr.ptr, dataPtr.lengthPtr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        dataPtr.free();
        this.RaiseError(error);
      }

      return dataPtr.toArray();
    },
    SessionLoad: function (sessionData) {
      var pPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUSessionLoad",
          "number",
          ["array", "number", "number"],
          [sessionData, sessionData.length, pPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      return new EndUserSession(pPtr.toPtr(), null);
    },
    ClientDynamicKeySessionCreate: function (
      expireTime,
      serverCertIssuer,
      serverCertSerial,
    ) {
      var isCertData = arguments.length == 2;

      var pPtr = EUPointer();
      var error;

      var dataPtr = EUPointerArray();

      try {
        error = Module.ccall(
          "EUClientDynamicKeySessionCreate",
          "number",
          [
            "number",
            isCertData ? "number" : "array",
            isCertData ? "number" : "array",
            isCertData ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            expireTime,
            isCertData ? 0 : UTF8ToCP1251Array(serverCertIssuer),
            isCertData ? 0 : UTF8ToCP1251Array(serverCertSerial),
            isCertData ? serverCertIssuer : 0,
            isCertData ? serverCertIssuer.length : 0,
            pPtr.ptr,
            dataPtr.ptr,
            dataPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        dataPtr.free();
        this.RaiseError(error);
      }

      return new EndUserSession(pPtr.toPtr(), dataPtr.toArray());
    },
    ServerDynamicKeySessionCreate: function (expireTime, clientData) {
      var pPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUServerDynamicKeySessionCreate",
          "number",
          ["number", "array", "number", "number"],
          [expireTime, clientData, clientData.length, pPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      return new EndUserSession(pPtr.toPtr(), null);
    },
    ClientDynamicKeySessionLoad: function (sessionData) {
      var pPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUClientDynamicKeySessionLoad",
          "number",
          ["array", "number", "number"],
          [sessionData, sessionData.length, pPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      return new EndUserSession(pPtr.toPtr(), null);
    },
    SessionEncrypt: function (session, data, asBase64String) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var pPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUSessionEncrypt",
          "number",
          ["number", "array", "number", "number", "number"],
          [
            session.GetHandle() | 0,
            data,
            data.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    SessionDecrypt: function (session, encryptedData) {
      if (typeof encryptedData == "string")
        encryptedData = this.Base64Decode(encryptedData);

      this.CheckMaxDataSize(encryptedData);

      var pPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUSessionDecrypt",
          "number",
          ["number", "array", "number", "number", "number"],
          [
            session.GetHandle() | 0,
            encryptedData,
            encryptedData.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      return pPtr.toArray();
    },
    SessionEncryptContinue: function (session, data, asBase64String) {
      if (typeof data == "string") data = this.StringToArray(data);

      this.CheckMaxDataSize(data);

      var pPtr = EUPointerStaticArray(data);
      var error;

      try {
        error = Module.ccall(
          "EUSessionEncryptContinue",
          "number",
          ["number", "number", "number"],
          [session.GetHandle() | 0, pPtr.ptr, pPtr.lengthPtr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    SessionDecryptContinue: function (session, encryptedData) {
      if (typeof encryptedData == "string")
        encryptedData = this.Base64Decode(encryptedData);

      this.CheckMaxDataSize(encryptedData);

      var pPtr = EUPointerStaticArray(encryptedData);
      var error;

      try {
        error = Module.ccall(
          "EUSessionDecryptContinue",
          "number",
          ["number", "number", "number"],
          [session.GetHandle() | 0, pPtr.ptr, pPtr.lengthPtr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      return pPtr.toArray();
    },
    //-----------------------------------------------------------------------------
    CtxCreate: function () {
      var pPtr = EUPointer();
      var error;

      try {
        error = Module.ccall("EUCtxCreate", "number", ["number"], [pPtr.ptr]);
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      var context = new EndUserContext(pPtr.toPtr());

      return context;
    },
    CtxFree: function (context) {
      try {
        Module._EUCtxFree(context.GetContext() | 0);
      } catch (e) {}
    },
    CtxSetParameter: function (context, name, value) {
      var error;
      var intPtr = EUPointerBool();
      if (typeof value != "boolean") {
        this.RaiseError(EU_ERROR_BAD_PARAMETER);
      }

      try {
        Module.setValue(intPtr.ptr, IntFromBool(value) | 0, "i32");

        error = Module.ccall(
          "EUCtxSetParameter",
          "number",
          ["number", "array", "number", "number"],
          [
            context.GetContext() | 0,
            UTF8ToCP1251Array(name),
            intPtr.ptr,
            EU_BOOL_SIZE,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
        intPtr.free();
      }

      if (error != EU_ERROR_NONE) {
        this.RaiseError(error);
      }

      intPtr.free();
    },
    //-----------------------------------------------------------------------------
    ProtectDataByPassword: function (data, password, asBase64String) {
      if (typeof data == "string") data = UTF8ToCP1251Array(data);

      this.CheckMaxDataSize(data);

      var protDataPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUProtectDataByPassword",
          "number",
          [
            "array",
            "number",
            password ? "array" : "number",
            "number",
            "number",
            "number",
          ],
          [
            data,
            data.length,
            password != null ? UTF8ToCP1251Array(password) : 0,
            asBase64String ? protDataPtr.ptr : 0,
            !asBase64String ? protDataPtr.ptr : 0,
            !asBase64String ? protDataPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        protDataPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return protDataPtr.toString();
      else return protDataPtr.toArray();
    },
    UnprotectDataByPassword: function (data, password, asString) {
      this.CheckMaxDataSize(data);

      var isDataStr = typeof data == "string";
      var unprotDataPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUUnprotectDataByPassword",
          "number",
          [
            isDataStr ? "array" : "number",
            !isDataStr ? "array" : "number",
            "number",
            password ? "array" : "number",
            "number",
            "number",
          ],
          [
            isDataStr ? StringToCString(data) : 0,
            !isDataStr ? data : 0,
            !isDataStr ? data.length : 0,
            password != null ? UTF8ToCP1251Array(password) : 0,
            unprotDataPtr.ptr,
            unprotDataPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        unprotDataPtr.free();
        this.RaiseError(error);
      }

      if (asString) {
        return unprotDataPtr.toString();
      } else {
        return unprotDataPtr.toArray();
      }
    },
    //-----------------------------------------------------------------------------
    QRCodeEncode: function (data, scale) {
      var arrPtr = null;
      var arrLenPtr = null;
      var imgArray = null;
      var error = EU_ERROR_NONE;

      this.CheckMaxDataSize(data);

      scale = scale || 1;

      var _free = function () {
        try {
          if (arrPtr != null) Module._free(arrPtr);

          if (arrLenPtr != null) Module._free(arrLenPtr);
        } catch (e) {}
      };

      try {
        arrPtr = Module._malloc(4);
        arrLenPtr = Module._malloc(4);

        Module.setValue(arrPtr, 0);
        Module.setValue(arrLenPtr, 0);

        var isSuccess = Module.ccall(
          "QRCodeEncode",
          "number",
          ["array", "number", "number", "number", "number"],
          [data, data.length, scale, arrPtr, arrLenPtr],
        );
        if (isSuccess) {
          var imgData = Module.getValue(arrPtr, "i8*");
          var imgDataLength = Module.getValue(arrLenPtr, "i32");
          var imgBuffer = new ArrayBuffer(imgDataLength);

          imgArray = new Uint8Array(imgBuffer);
          imgArray.set(
            new Uint8Array(Module.HEAPU8.buffer, imgData, imgDataLength),
          );

          Module._QRCodeFreeMemory(imgData);
        } else {
          error = EU_ERROR_BAD_PARAMETER;
        }

        _free();
      } catch (e) {
        _free();
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) this.RaiseError(error);

      return imgArray;
    },
    //-----------------------------------------------------------------------------
    AppendTransportHeader: function (
      caType,
      fileName,
      clientEMail,
      clientCert,
      data,
    ) {
      return this.AppendTransportHeaderEx(
        caType,
        null,
        null,
        null,
        fileName,
        clientEMail,
        clientCert,
        data,
      );
    },
    //-----------------------------------------------------------------------------
    AppendTransportHeaderEx: function (
      caType,
      programName,
      programVersion,
      sendDate,
      fileName,
      clientEMail,
      clientCert,
      data,
    ) {
      this.CheckMaxDataSize(data);

      var resultDataPtr = EUPointerArray();
      var sendDatePtr = sendDate != null ? EUPointerSystemtime(sendDate) : 0;
      var error;

      try {
        error = Module.ccall(
          "EUAppendTransportHeaderEx",
          "number",
          [
            "array",
            programName ? "array" : "number",
            programVersion ? "array" : "number",
            "number",
            "array",
            "array",
            "array",
            "number",
            "array",
            "number",
            "number",
            "number",
          ],
          [
            UTF8ToCP1251Array(caType),
            programName ? UTF8ToCP1251Array(programName) : 0,
            programVersion ? UTF8ToCP1251Array(programVersion) : 0,
            sendDate ? sendDatePtr.ptr : 0,
            UTF8ToCP1251Array(fileName),
            UTF8ToCP1251Array(clientEMail),
            clientCert,
            clientCert.length,
            data,
            data.length,
            resultDataPtr.ptr,
            resultDataPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (sendDate != null) sendDatePtr.free();

      if (error != EU_ERROR_NONE) {
        resultDataPtr.free();
        this.RaiseError(error);
      }

      return resultDataPtr.toArray();
    },
    //-----------------------------------------------------------------------------
    ParseTransportHeader: function (data) {
      if (typeof data == "string") data = this.Base64Decode(data);

      this.CheckMaxDataSize(data);

      var intPtr = EUPointerDWORD();
      var resultDataPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUParseTransportHeader",
          "number",
          ["array", "number", "number", "number", "number"],
          [
            data,
            data.length,
            intPtr.ptr,
            resultDataPtr.ptr,
            resultDataPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        resultDataPtr.free();
        this.RaiseError(error);
      }

      return new EndUserTransportHeader(
        intPtr.toNumber(),
        resultDataPtr.toArray(),
      );
    },
    //-----------------------------------------------------------------------------
    AppendCryptoHeader: function (caType, headerType, data) {
      this.CheckMaxDataSize(data);

      var resultDataPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUAppendCryptoHeader",
          "number",
          ["array", "number", "array", "number", "number", "number"],
          [
            UTF8ToCP1251Array(caType),
            headerType,
            data,
            data.length,
            resultDataPtr.ptr,
            resultDataPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        resultDataPtr.free();
        this.RaiseError(error);
      }

      return resultDataPtr.toArray();
    },
    //-----------------------------------------------------------------------------
    ParseCryptoHeader: function (data) {
      if (typeof data == "string") data = this.Base64Decode(data);

      this.CheckMaxDataSize(data);

      var caTypePtr = EUPointerMemory(EU_HEADER_MAX_CA_TYPE_SIZE + 1);
      var headerTypePtr = EUPointerDWORD();
      var headerSizePtr = EUPointerDWORD();
      var resultDataPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUParseCryptoHeader",
          "number",
          ["array", "number", "number", "number", "number", "number", "number"],
          [
            data,
            data.length,
            caTypePtr.ptr,
            headerTypePtr.ptr,
            headerSizePtr.ptr,
            resultDataPtr.ptr,
            resultDataPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        caTypePtr.free();
        headerTypePtr.free();
        headerSizePtr.free();
        resultDataPtr.free();
        this.RaiseError(error);
      }

      var caType = CP1251PointerToUTF8(caTypePtr.ptr);
      caTypePtr.free();

      return new EndUserCryptoHeader(
        caType,
        headerTypePtr.toNumber(),
        headerSizePtr.toNumber(),
        resultDataPtr.toArray(),
      );
    },
    //-----------------------------------------------------------------------------
    SServerClientSignHashAsync: function (
      serverAddress,
      serverPort,
      clientID,
      originatorDescription,
      hashDescription,
      hash,
      signAlgorithmName,
    ) {
      var isPort = serverPort != null && serverPort != "";
      var isHashStr = typeof hash == "string";
      var pPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUSServerClientSignHashAsync",
          "number",
          [
            "array",
            isPort ? "array" : "number",
            "array",
            originatorDescription ? "array" : "number",
            "array",
            isHashStr ? "array" : "number",
            !isHashStr ? "array" : "number",
            "number",
            "array",
            "number",
          ],
          [
            UTF8ToCP1251Array(serverAddress),
            isPort ? UTF8ToCP1251Array(serverPort) : 0,
            UTF8ToCP1251Array(clientID),
            originatorDescription
              ? UTF8ToCP1251Array(originatorDescription)
              : 0,
            UTF8ToCP1251Array(hashDescription),
            isHashStr ? StringToCString(hash) : 0,
            !isHashStr ? hash : 0,
            !isHashStr ? hash.length : 0,
            UTF8ToCP1251Array(signAlgorithmName),
            pPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      return pPtr.toString(true);
    },
    SServerClientCheckSignHashStatus: function (
      serverAddress,
      serverPort,
      clientID,
      operationID,
      asBase64String,
    ) {
      var isPort = serverPort != null && serverPort != "";
      var pPtr = asBase64String ? EUPointer() : EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUSServerClientCheckSignHashStatus",
          "number",
          [
            "array",
            isPort ? "array" : "number",
            "array",
            "array",
            "number",
            "number",
            "number",
          ],
          [
            UTF8ToCP1251Array(serverAddress),
            isPort ? UTF8ToCP1251Array(serverPort) : 0,
            UTF8ToCP1251Array(clientID),
            UTF8ToCP1251Array(operationID),
            asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.ptr : 0,
            !asBase64String ? pPtr.lengthPtr : 0,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      var sign = asBase64String ? pPtr.toString(true) : pPtr.toArray();
      return sign && sign.length > 0 ? sign : null;
    },
    SServerClientSignHashesAsync: function (
      serverAddress,
      serverPort,
      clientID,
      originatorDescription,
      operationDescription,
      hashesDescriptions,
      hashes,
      signAlgorithmName,
    ) {
      var isPort = serverPort != null && serverPort != "";
      var hashesDescr =
        hashesDescriptions != null
          ? intArrayFromStrings(hashesDescriptions)
          : 0;
      var isHashesStr = typeof hashes[0] == "string";
      var hashesValues = isHashesStr
        ? intArrayFromStrings(hashes)
        : new EUArrayFromArrayOfArray(hashes);

      var pPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUSServerClientSignHashesAsync",
          "number",
          [
            "array",
            isPort ? "array" : "number",
            "array",
            originatorDescription ? "array" : "number",
            "array",
            hashesDescr ? "array" : "number",
            isHashesStr ? "array" : "number",
            "number",
            "number",
            "number",
            "array",
            "number",
          ],
          [
            UTF8ToCP1251Array(serverAddress),
            isPort ? UTF8ToCP1251Array(serverPort) : 0,
            UTF8ToCP1251Array(clientID),
            originatorDescription
              ? UTF8ToCP1251Array(originatorDescription)
              : 0,
            UTF8ToCP1251Array(operationDescription),
            hashesDescr ? hashesDescr : 0,
            isHashesStr ? hashesValues : 0,
            !isHashesStr ? hashesValues.count : 0,
            !isHashesStr ? hashesValues.arraysPtr : 0,
            !isHashesStr ? hashesValues.arraysLengthPtr : 0,
            UTF8ToCP1251Array(signAlgorithmName),
            pPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      return pPtr.toString(true);
    },
    SServerClientCheckSignHashesStatus: function (
      serverAddress,
      serverPort,
      clientID,
      operationID,
    ) {
      var isPort = serverPort != null && serverPort != "";
      var pPtr = EUPointer();
      var intPtr = EUPointerDWORD();
      var error;
      try {
        error = Module.ccall(
          "EUSServerClientCheckSignHashesStatus",
          "number",
          [
            "array",
            isPort ? "array" : "number",
            "array",
            "array",
            "number",
            "number",
          ],
          [
            UTF8ToCP1251Array(serverAddress),
            isPort ? UTF8ToCP1251Array(serverPort) : 0,
            UTF8ToCP1251Array(clientID),
            UTF8ToCP1251Array(operationID),
            pPtr.ptr,
            intPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        intPtr.free();
        this.RaiseError(error);
      }

      var itemsPtr = pPtr.toPtr();
      var itemsCount = intPtr.toNumber();
      var results = [];
      try {
        for (var i = 0; i < itemsCount; i++) {
          var pCurPtr = Module.getValue(
            (itemsPtr + i * EU_PTR_SIZE) | 0,
            "i8*",
          );

          results.push(new EndUserSSSignHashResult(pCurPtr));
        }
      } catch (e) {
        Module._EUSServerClientFreeSignHashesResults(itemsPtr);
        this.RaiseError(EU_ERROR_UNKNOWN);
      }

      Module._EUSServerClientFreeSignHashesResults(itemsPtr);

      return results;
    },
    SServerClientGeneratePrivateKeyAsync: function (
      serverAddress,
      serverPort,
      clientID,
      originatorDescription,
      privateKeyDescription,
      uaAlgorithmName,
      uaDSKeyLength,
      useDSKeyAsKEP,
      uaKEPKeyLength,
      internationalAlgorithmName,
      internationalKeyLength,
    ) {
      var isPort = serverPort != null && serverPort != "";
      var isUAAlgorithmName = typeof uaAlgorithmName == "string";
      var isIntAlgorithmName = typeof internationalAlgorithmName == "string";
      var pPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUSServerClientGeneratePrivateKeyAsync",
          "number",
          [
            "array",
            isPort ? "array" : "number",
            "array",
            originatorDescription ? "array" : "number",
            "array",
            isUAAlgorithmName ? "array" : "number",
            "number",
            "number",
            "number",
            isIntAlgorithmName ? "array" : "number",
            "number",
            "number",
          ],
          [
            UTF8ToCP1251Array(serverAddress),
            isPort ? UTF8ToCP1251Array(serverPort) : 0,
            UTF8ToCP1251Array(clientID),
            originatorDescription
              ? UTF8ToCP1251Array(originatorDescription)
              : 0,
            UTF8ToCP1251Array(privateKeyDescription),
            isUAAlgorithmName ? UTF8ToCP1251Array(uaAlgorithmName) : 0,
            uaDSKeyLength,
            useDSKeyAsKEP ? 1 : 0,
            uaKEPKeyLength,
            isIntAlgorithmName
              ? UTF8ToCP1251Array(internationalAlgorithmName)
              : 0,
            internationalKeyLength,
            pPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      return pPtr.toString(true);
    },
    SServerClientCheckGeneratePrivateKeyStatus: function (
      serverAddress,
      serverPort,
      clientID,
      operationID,
    ) {
      var isPort = serverPort != null && serverPort != "";
      var uaReqPtr = EUPointerArray();
      var uaReqNamePtr = EUPointerMemory(EU_PATH_MAX_LENGTH);
      var uaKEPReqPtr = EUPointerArray();
      var uaKEPReqNamePtr = EUPointerMemory(EU_PATH_MAX_LENGTH);
      var intReqPtr = EUPointerArray();
      var intReqNamePtr = EUPointerMemory(EU_PATH_MAX_LENGTH);
      var error;

      var _free = function () {
        uaReqPtr.free();
        uaReqNamePtr.free();
        uaKEPReqPtr.free();
        uaKEPReqNamePtr.free();
        intReqPtr.free();
        intReqNamePtr.free();
      };

      try {
        error = Module.ccall(
          "EUSServerClientCheckGeneratePrivateKeyStatus",
          "number",
          [
            "array",
            isPort ? "array" : "number",
            "array",
            "array",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            UTF8ToCP1251Array(serverAddress),
            isPort ? UTF8ToCP1251Array(serverPort) : 0,
            UTF8ToCP1251Array(clientID),
            UTF8ToCP1251Array(operationID),
            uaReqPtr.ptr,
            uaReqPtr.lengthPtr,
            uaReqNamePtr.ptr,
            uaKEPReqPtr.ptr,
            uaKEPReqPtr.lengthPtr,
            uaKEPReqNamePtr.ptr,
            intReqPtr.ptr,
            intReqPtr.lengthPtr,
            intReqNamePtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        _free();
        this.RaiseError(error);
      }

      var _toString = function (strPtr) {
        var str = CP1251PointerToUTF8(strPtr);
        var lastInd = str.lastIndexOf("/");
        if (lastInd < 0) return str;

        return str.substring(lastInd + 1, str.length);
      };

      var _toArray = function (arrPtr) {
        var arr = arrPtr.toArray();
        return arr && arr.length > 0 ? arr : null;
      };

      var uaReq = _toArray(uaReqPtr);
      var uaReqName = _toString(uaReqNamePtr.ptr);
      var uaKEPReq = _toArray(uaKEPReqPtr);
      var uaKEPReqName = _toString(uaKEPReqNamePtr.ptr);
      var intReq = _toArray(intReqPtr);
      var intReqName = _toString(intReqNamePtr.ptr);

      if (uaReq == null && uaKEPReq == null && intReq == null) {
        return null;
      }

      var euPrivateKey = new EndUserPrivateKey(
        null,
        null,
        uaReq,
        uaReqName,
        uaKEPReq,
        uaKEPReqName,
        intReq,
        intReqName,
        null,
        null,
      );

      _free();

      return euPrivateKey;
    },
    ASiCGetASiCType: function (asicData) {
      this.CheckMaxDataSize(asicData);

      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var intPtr = EUPointerDWORD();
      var error;

      try {
        error = Module.ccall(
          "EUASiCGetASiCType",
          "number",
          ["array", "number", "number"],
          [asicData, asicData.length, intPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        this.RaiseError(error);
      }

      return intPtr.toNumber();
    },
    ASiCGetSignType: function (asicData) {
      this.CheckMaxDataSize(asicData);

      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var intPtr = EUPointerDWORD();
      var error;

      try {
        error = Module.ccall(
          "EUASiCGetSignType",
          "number",
          ["array", "number", "number"],
          [asicData, asicData.length, intPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        this.RaiseError(error);
      }

      return intPtr.toNumber();
    },
    ASiCGetSignsCount: function (asicData) {
      this.CheckMaxDataSize(asicData);

      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var intPtr = EUPointerDWORD();
      var error;

      try {
        error = Module.ccall(
          "EUASiCGetSignsCount",
          "number",
          ["array", "number", "number"],
          [asicData, asicData.length, intPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        this.RaiseError(error);
      }

      return intPtr.toNumber();
    },
    ASiCGetSignerInfo: function (signIndex, asicData) {
      this.CheckMaxDataSize(asicData);

      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var pCertInfoExPtr = EUPointer();
      var certArrPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUASiCGetSignerInfo",
          "number",
          ["number", "array", "number", "number", "number", "number"],
          [
            signIndex,
            asicData,
            asicData.length,
            pCertInfoExPtr.ptr,
            certArrPtr.ptr,
            certArrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pCertInfoExPtr.free();
        certArrPtr.free();

        this.RaiseError(error);
      }

      var certInfoExPtr, certInfoEx;

      certInfoExPtr = pCertInfoExPtr.toPtr();
      certInfoEx = new EndUserCertificateInfoEx(
        certInfoExPtr,
        this.fieldsEncoder,
      );
      Module._EUFreeCertificateInfoEx(certInfoExPtr);

      return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
    },
    ASiCGetSignTimeInfo: function (signIndex, asicData) {
      this.CheckMaxDataSize(asicData);

      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var pTimeInfoPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUASiCGetSignTimeInfo",
          "number",
          ["number", "array", "number", "number"],
          [signIndex, asicData, asicData.length, pTimeInfoPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pTimeInfoPtr.free();

        this.RaiseError(error);
      }

      var timeInfoPtr, timeInfo;

      timeInfoPtr = pTimeInfoPtr.toPtr();
      timeInfo = new EndUserTimeInfo(timeInfoPtr);
      Module._EUFreeTimeInfo(timeInfoPtr);

      return timeInfo;
    },
    ASiCGetSignReferences: function (signIndex, asicData) {
      this.CheckMaxDataSize(asicData);

      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var pPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUASiCGetSignReferences",
          "number",
          ["number", "array", "number", "number"],
          [signIndex, asicData, asicData.length, pPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();

        this.RaiseError(error);
      }

      return pPtr.toStringArray(this.fieldsEncoder);
    },
    ASiCGetReference: function (asicData, referenceName) {
      this.CheckMaxDataSize(asicData);

      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var arrPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUASiCGetReference",
          "number",
          ["array", "number", "array", "number", "number"],
          [
            asicData,
            asicData.length,
            this.fieldsEncoder.encode(referenceName),
            arrPtr.ptr,
            arrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        arrPtr.free();
        this.RaiseError(error);
      }

      return arrPtr.toArray();
    },
    ASiCSignData: function (
      asicType,
      signType,
      signLevel,
      references,
      asBase64String,
    ) {
      var refNames = [];
      var refData = [];
      var refDataSize = 0;
      for (var i = 0; i < references.length; i++) {
        refNames.push(references[i].GetName());
        refData.push(references[i].GetData());
        refDataSize += references[i].GetData().length;
      }

      this.CheckMaxDataSize(refDataSize);

      var refNamesString = intArrayFromStrings(refNames, this.fieldsEncoder);
      var refDataArray = new EUArrayFromArrayOfArray(refData);

      var pPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUASiCSignData",
          "number",
          [
            "number",
            "number",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            asicType,
            signType,
            signLevel,
            refNamesString,
            refDataArray.arraysPtr,
            refDataArray.arraysLengthPtr,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    ASiCAppendSign: function (
      signLevel,
      referencesNames,
      asicData,
      asBase64String,
    ) {
      this.CheckMaxDataSize(asicData);

      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var refNamesString =
        referencesNames != null
          ? intArrayFromStrings(referencesNames, this.fieldsEncoder)
          : 0;

      var pPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUASiCAppendSign",
          "number",
          [
            "number",
            refNamesString ? "array" : "number",
            "array",
            "number",
            "number",
            "number",
          ],
          [
            signLevel,
            refNamesString,
            asicData,
            asicData.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    ASiCVerifyData: function (signIndex, asicData) {
      this.CheckMaxDataSize(asicData);

      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var infoPtr = EUPointerSignerInfo();
      var signTimeInfo = null;
      var error;

      try {
        error = Module.ccall(
          "EUASiCVerifyData",
          "number",
          ["number", "array", "number", "number"],
          [signIndex, asicData, asicData.length, infoPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      try {
        signTimeInfo = this.ASiCGetSignTimeInfo(signIndex, asicData);
      } catch (e) {
        infoPtr.free();
        throw e;
      }

      var info = new EndUserSignInfo(infoPtr.ptr, null, signTimeInfo);
      infoPtr.free();

      return info;
    },
    CtxASiCSignData: function (
      pkContext,
      signAlgo,
      asicType,
      signType,
      signLevel,
      references,
      asBase64String,
    ) {
      var refNames = [];
      var refData = [];
      var refDataSize = 0;
      for (var i = 0; i < references.length; i++) {
        refNames.push(references[i].GetName());
        refData.push(references[i].GetData());
        refDataSize += references[i].GetData().length;
      }

      this.CheckMaxDataSize(refDataSize);

      var refNamesString = intArrayFromStrings(refNames, this.fieldsEncoder);
      var refDataArray = new EUArrayFromArrayOfArray(refData);

      var pPtr = EUPointerArray(pkContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxASiCSignData",
          "number",
          [
            "number",
            "number",
            "number",
            "number",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            pkContext.GetContext(),
            signAlgo,
            asicType,
            signType,
            signLevel,
            refNamesString,
            refDataArray.arraysPtr,
            refDataArray.arraysLengthPtr,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxASiCAppendSign: function (
      pkContext,
      signAlgo,
      signLevel,
      referencesNames,
      asicData,
      asBase64String,
    ) {
      this.CheckMaxDataSize(asicData);

      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var refNamesString =
        referencesNames != null
          ? intArrayFromStrings(referencesNames, this.fieldsEncoder)
          : 0;

      var pPtr = EUPointerArray(pkContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxASiCAppendSign",
          "number",
          [
            "number",
            "number",
            "number",
            refNamesString ? "array" : "number",
            "array",
            "number",
            "number",
            "number",
          ],
          [
            pkContext.GetContext(),
            signAlgo,
            signLevel,
            refNamesString,
            asicData,
            asicData.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    ASiCGetSignLevel: function (signIndex, asicData) {
      this.CheckMaxDataSize(asicData);

      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var intPtr = EUPointerDWORD();
      var error;

      try {
        error = Module.ccall(
          "EUASiCGetSignLevel",
          "number",
          ["number", "array", "number", "number"],
          [signIndex, asicData, asicData.length, intPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        this.RaiseError(error);
      }

      return intPtr.toNumber();
    },
    CtxASiCGetSignerInfo: function (context, signIndex, asicData) {
      this.CheckMaxDataSize(asicData);

      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var pCertInfoExPtr = EUPointer();
      var certArrPtr = EUPointerArray(context.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxASiCGetSignerInfo",
          "number",
          ["number", "number", "array", "number", "number", "number", "number"],
          [
            context.GetContext(),
            signIndex,
            asicData,
            asicData.length,
            pCertInfoExPtr.ptr,
            certArrPtr.ptr,
            certArrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pCertInfoExPtr.free();
        certArrPtr.free();

        this.RaiseError(error);
      }

      var certInfoExPtr, certInfoEx;

      certInfoExPtr = pCertInfoExPtr.toPtr();
      certInfoEx = new EndUserCertificateInfoEx(
        certInfoExPtr,
        this.fieldsEncoder,
      );
      Module._EUCtxFreeCertificateInfoEx(
        context.GetContext() | 0,
        certInfoExPtr,
      );

      return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
    },
    ASiCIsAllContentCovered: function (signIndex, asicData) {
      this.CheckMaxDataSize(asicData);

      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var intPtr = EUPointerInt();
      var error;

      try {
        error = Module.ccall(
          "EUASiCIsAllContentCovered",
          "number",
          ["number", "array", "number", "number"],
          [signIndex, asicData, asicData.length, intPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        this.RaiseError(error);
      }

      return intPtr.toBoolean();
    },
    ASiCCreateEmptySign: function (
      asicType,
      signType,
      references,
      asBase64String,
    ) {
      var refNames = [];
      var refData = [];
      var refDataSize = 0;
      for (var i = 0; i < references.length; i++) {
        refNames.push(references[i].GetName());
        refData.push(references[i].GetData());
        refDataSize += references[i].GetData().length;
      }

      this.CheckMaxDataSize(refDataSize);

      var refNamesString = intArrayFromStrings(refNames, this.fieldsEncoder);
      var refDataArray = new EUArrayFromArrayOfArray(refData);

      var pPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUASiCCreateEmptySign",
          "number",
          ["number", "number", "array", "number", "number", "number", "number"],
          [
            asicType,
            signType,
            refNamesString,
            refDataArray.arraysPtr,
            refDataArray.arraysLengthPtr,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    ASiCCreateSignerBegin: function (
      signAlgo,
      asicType,
      signType,
      referencesNames,
      asicData,
    ) {
      this.CheckMaxDataSize(asicData);

      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var refNamesString =
        referencesNames != null
          ? intArrayFromStrings(referencesNames, this.fieldsEncoder)
          : 0;

      var pSignRefPtr = EUPointer();
      var pAttrsHashPtr = EUPointerArray();
      var pASiCDataPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUASiCCreateSignerBegin",
          "number",
          [
            "number",
            "number",
            "number",
            refNamesString ? "array" : "number",
            "array",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            signAlgo,
            asicType,
            signType,
            refNamesString,
            asicData,
            asicData.length,
            pSignRefPtr.ptr,
            pAttrsHashPtr.ptr,
            pAttrsHashPtr.lengthPtr,
            pASiCDataPtr.ptr,
            pASiCDataPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pSignRefPtr.free();
        pAttrsHashPtr.free();
        pASiCDataPtr.free();
        this.RaiseError(error);
      }

      return new EndUserASiCSigner(
        pSignRefPtr.toString(false, this.fieldsEncoder),
        pAttrsHashPtr.toArray(),
        pASiCDataPtr.toArray(),
      );
    },
    ASiCCreateSignerBeginEx: function (
      signerCert,
      signAlgo,
      asicType,
      signType,
      referencesNames,
      asicData,
    ) {
      if (signerCert != null) this.CheckMaxDataSize(signerCert);
      this.CheckMaxDataSize(asicData);

      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var refNamesString =
        referencesNames != null
          ? intArrayFromStrings(referencesNames, this.fieldsEncoder)
          : 0;

      var pSignRefPtr = EUPointer();
      var pAttrsHashPtr = EUPointerArray();
      var pASiCDataPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUASiCCreateSignerBeginEx",
          "number",
          [
            signerCert ? "array" : "number",
            "number",
            "number",
            "number",
            "number",
            refNamesString ? "array" : "number",
            "array",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            signerCert ? signerCert : 0,
            signerCert ? signerCert.length : 0,
            signAlgo,
            asicType,
            signType,
            refNamesString,
            asicData,
            asicData.length,
            pSignRefPtr.ptr,
            pAttrsHashPtr.ptr,
            pAttrsHashPtr.lengthPtr,
            pASiCDataPtr.ptr,
            pASiCDataPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pSignRefPtr.free();
        pAttrsHashPtr.free();
        pASiCDataPtr.free();
        this.RaiseError(error);
      }

      return new EndUserASiCSigner(
        pSignRefPtr.toString(false, this.fieldsEncoder),
        pAttrsHashPtr.toArray(),
        pASiCDataPtr.toArray(),
      );
    },
    ASiCCreateSignerEnd: function (
      asicType,
      signType,
      signLevel,
      signatureReference,
      signature,
      asicData,
      asBase64String,
    ) {
      this.CheckMaxDataSize(signature);
      this.CheckMaxDataSize(asicData);

      if (typeof signature == "string")
        signature = this.Base64Decode(signature);
      if (typeof asicData == "string") asicData = this.Base64Decode(asicData);

      var pPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUASiCCreateSignerEnd",
          "number",
          [
            "number",
            "number",
            "number",
            "array",
            "array",
            "number",
            "array",
            "number",
            "number",
            "number",
          ],
          [
            asicType,
            signType,
            signLevel,
            this.fieldsEncoder.encode(signatureReference),
            signature,
            signature.length,
            asicData,
            asicData.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    PDFGetSignType: function (signIndex, signedPDFData) {
      this.CheckMaxDataSize(signedPDFData);

      if (typeof signedPDFData == "string")
        signedPDFData = this.Base64Decode(signedPDFData);

      var intPtr = EUPointerDWORD();
      var error;

      try {
        error = Module.ccall(
          "EUPDFGetSignType",
          "number",
          ["number", "array", "number", "number"],
          [signIndex, signedPDFData, signedPDFData.length, intPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        this.RaiseError(error);
      }

      return intPtr.toNumber();
    },
    PDFGetSignsCount: function (signedPDFData) {
      this.CheckMaxDataSize(signedPDFData);

      if (typeof signedPDFData == "string")
        signedPDFData = this.Base64Decode(signedPDFData);

      var intPtr = EUPointerDWORD();
      var error;

      try {
        error = Module.ccall(
          "EUPDFGetSignsCount",
          "number",
          ["array", "number", "number"],
          [signedPDFData, signedPDFData.length, intPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        this.RaiseError(error);
      }

      return intPtr.toNumber();
    },
    PDFGetSignerInfo: function (signIndex, signedPDFData) {
      this.CheckMaxDataSize(signedPDFData);

      if (typeof signedPDFData == "string")
        signedPDFData = this.Base64Decode(signedPDFData);

      var pCertInfoExPtr = EUPointer();
      var certArrPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUPDFGetSignerInfo",
          "number",
          ["number", "array", "number", "number", "number", "number"],
          [
            signIndex,
            signedPDFData,
            signedPDFData.length,
            pCertInfoExPtr.ptr,
            certArrPtr.ptr,
            certArrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pCertInfoExPtr.free();
        certArrPtr.free();

        this.RaiseError(error);
      }

      var certInfoExPtr, certInfoEx;

      certInfoExPtr = pCertInfoExPtr.toPtr();
      certInfoEx = new EndUserCertificateInfoEx(
        certInfoExPtr,
        this.fieldsEncoder,
      );
      Module._EUFreeCertificateInfoEx(certInfoExPtr);

      return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
    },
    CtxPDFGetSignerInfo: function (context, signIndex, signedPDFData) {
      this.CheckMaxDataSize(signedPDFData);

      if (typeof signedPDFData == "string")
        signedPDFData = this.Base64Decode(signedPDFData);

      var pCertInfoExPtr = EUPointer();
      var certArrPtr = EUPointerArray(context.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxPDFGetSignerInfo",
          "number",
          ["number", "number", "array", "number", "number", "number", "number"],
          [
            context.GetContext(),
            signIndex,
            signedPDFData,
            signedPDFData.length,
            pCertInfoExPtr.ptr,
            certArrPtr.ptr,
            certArrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pCertInfoExPtr.free();
        certArrPtr.free();

        this.RaiseError(error);
      }

      var certInfoExPtr, certInfoEx;

      certInfoExPtr = pCertInfoExPtr.toPtr();
      certInfoEx = new EndUserCertificateInfoEx(
        certInfoExPtr,
        this.fieldsEncoder,
      );
      Module._EUCtxFreeCertificateInfoEx(
        context.GetContext() | 0,
        certInfoExPtr,
      );

      return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
    },
    PDFGetSignTimeInfo: function (signIndex, signedPDFData) {
      this.CheckMaxDataSize(signedPDFData);

      if (typeof signedPDFData == "string")
        signedPDFData = this.Base64Decode(signedPDFData);

      var pTimeInfoPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUPDFGetSignTimeInfo",
          "number",
          ["number", "array", "number", "number"],
          [signIndex, signedPDFData, signedPDFData.length, pTimeInfoPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pTimeInfoPtr.free();

        this.RaiseError(error);
      }

      var timeInfoPtr, timeInfo;

      timeInfoPtr = pTimeInfoPtr.toPtr();
      timeInfo = new EndUserTimeInfo(timeInfoPtr);
      Module._EUFreeTimeInfo(timeInfoPtr);

      return timeInfo;
    },
    PDFSignData: function (pdfData, signType, asBase64String) {
      this.CheckMaxDataSize(pdfData);

      var pPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUPDFSignData",
          "number",
          ["array", "number", "number", "number", "number"],
          [pdfData, pdfData.length, signType, pPtr.ptr, pPtr.lengthPtr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    PDFVerifyData: function (signIndex, signedPDFData) {
      this.CheckMaxDataSize(signedPDFData);

      if (typeof signedPDFData == "string")
        signedPDFData = this.Base64Decode(signedPDFData);

      var infoPtr = EUPointerSignerInfo();
      var signTimeInfo = null;
      var error;

      try {
        error = Module.ccall(
          "EUPDFVerifyData",
          "number",
          ["number", "array", "number", "number"],
          [signIndex, signedPDFData, signedPDFData.length, infoPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      try {
        signTimeInfo = this.PDFGetSignTimeInfo(signIndex, signedPDFData);
      } catch (e) {
        infoPtr.free();
        throw e;
      }

      var info = new EndUserSignInfo(infoPtr.ptr, null, signTimeInfo);
      infoPtr.free();

      return info;
    },
    CtxPDFSignData: function (
      pkContext,
      signAlgo,
      pdfData,
      signType,
      asBase64String,
    ) {
      this.CheckMaxDataSize(pdfData);

      var pPtr = EUPointerArray(pkContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxPDFSignData",
          "number",
          ["number", "number", "array", "number", "number", "number", "number"],
          [
            pkContext.GetContext(),
            signAlgo,
            pdfData,
            pdfData.length,
            signType,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    PDFCreateSignerBegin: function (signAlgo, pdfData) {
      this.CheckMaxDataSize(pdfData);

      var pSignRefPtr = EUPointer();
      var pAttrsHashPtr = EUPointerArray();
      var pPDFDataPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUPDFCreateSignerBegin",
          "number",
          [
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            signAlgo,
            pdfData,
            pdfData.length,
            pSignRefPtr.ptr,
            pAttrsHashPtr.ptr,
            pAttrsHashPtr.lengthPtr,
            pPDFDataPtr.ptr,
            pPDFDataPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pSignRefPtr.free();
        pAttrsHashPtr.free();
        pPDFDataPtr.free();
        this.RaiseError(error);
      }

      return new EndUserPDFSigner(
        pSignRefPtr.toString(false, this.fieldsEncoder),
        pAttrsHashPtr.toArray(),
        pPDFDataPtr.toArray(),
      );
    },
    PDFCreateSignerEnd: function (
      pdfData,
      signType,
      signatureReference,
      signature,
      asBase64String,
    ) {
      this.CheckMaxDataSize(pdfData);
      this.CheckMaxDataSize(signature);

      if (typeof pdfData == "string") pdfData = this.Base64Decode(pdfData);
      if (typeof signature == "string")
        signature = this.Base64Decode(signature);

      var pPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUPDFCreateSignerEnd",
          "number",
          [
            "array",
            "number",
            "number",
            "array",
            "array",
            "number",
            "number",
            "number",
          ],
          [
            pdfData,
            pdfData.length,
            signType,
            this.fieldsEncoder.encode(signatureReference),
            signature,
            signature.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    XAdESGetType: function (xadesData) {
      this.CheckMaxDataSize(xadesData);

      if (typeof xadesData == "string")
        xadesData = this.Base64Decode(xadesData);

      var intPtr = EUPointerDWORD();
      var error;

      try {
        error = Module.ccall(
          "EUXAdESGetType",
          "number",
          ["array", "number", "number"],
          [xadesData, xadesData.length, intPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        this.RaiseError(error);
      }

      return intPtr.toNumber();
    },
    XAdESGetSignsCount: function (xadesData) {
      this.CheckMaxDataSize(xadesData);

      if (typeof xadesData == "string")
        xadesData = this.Base64Decode(xadesData);

      var intPtr = EUPointerDWORD();
      var error;

      try {
        error = Module.ccall(
          "EUXAdESGetSignsCount",
          "number",
          ["array", "number", "number"],
          [xadesData, xadesData.length, intPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        this.RaiseError(error);
      }

      return intPtr.toNumber();
    },
    XAdESGetSignLevel: function (signIndex, xadesData) {
      this.CheckMaxDataSize(xadesData);

      if (typeof xadesData == "string")
        xadesData = this.Base64Decode(xadesData);

      var intPtr = EUPointerDWORD();
      var error;

      try {
        error = Module.ccall(
          "EUXAdESGetSignLevel",
          "number",
          ["number", "array", "number", "number"],
          [signIndex, xadesData, xadesData.length, intPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        this.RaiseError(error);
      }

      return intPtr.toNumber();
    },
    XAdESGetSignerInfo: function (signIndex, xadesData) {
      this.CheckMaxDataSize(xadesData);

      if (typeof xadesData == "string")
        xadesData = this.Base64Decode(xadesData);

      var pCertInfoExPtr = EUPointer();
      var certArrPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUXAdESGetSignerInfo",
          "number",
          ["number", "array", "number", "number", "number", "number"],
          [
            signIndex,
            xadesData,
            xadesData.length,
            pCertInfoExPtr.ptr,
            certArrPtr.ptr,
            certArrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pCertInfoExPtr.free();
        certArrPtr.free();

        this.RaiseError(error);
      }

      var certInfoExPtr, certInfoEx;

      certInfoExPtr = pCertInfoExPtr.toPtr();
      certInfoEx = new EndUserCertificateInfoEx(
        certInfoExPtr,
        this.fieldsEncoder,
      );
      Module._EUFreeCertificateInfoEx(certInfoExPtr);

      return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
    },
    XAdESGetSignTimeInfo: function (signIndex, xadesData) {
      this.CheckMaxDataSize(xadesData);

      if (typeof xadesData == "string")
        xadesData = this.Base64Decode(xadesData);

      var pTimeInfoPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUXAdESGetSignTimeInfo",
          "number",
          ["number", "array", "number", "number"],
          [signIndex, xadesData, xadesData.length, pTimeInfoPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pTimeInfoPtr.free();

        this.RaiseError(error);
      }

      var timeInfoPtr, timeInfo;

      timeInfoPtr = pTimeInfoPtr.toPtr();
      timeInfo = new EndUserTimeInfo(timeInfoPtr);
      Module._EUFreeTimeInfo(timeInfoPtr);

      return timeInfo;
    },
    XAdESGetSignReferences: function (signIndex, xadesData) {
      this.CheckMaxDataSize(xadesData);

      if (typeof xadesData == "string")
        xadesData = this.Base64Decode(xadesData);

      var pPtr = EUPointer();
      var error;

      try {
        error = Module.ccall(
          "EUXAdESGetSignReferences",
          "number",
          ["number", "array", "number", "number"],
          [signIndex, xadesData, xadesData.length, pPtr.ptr],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();

        this.RaiseError(error);
      }

      return pPtr.toStringArray(this.fieldsEncoder);
    },
    XAdESGetReference: function (xadesData, referenceName) {
      this.CheckMaxDataSize(xadesData);

      if (typeof xadesData == "string")
        xadesData = this.Base64Decode(xadesData);

      var arrPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUXAdESGetReference",
          "number",
          ["array", "number", "array", "number", "number"],
          [
            xadesData,
            xadesData.length,
            this.fieldsEncoder.encode(referenceName),
            arrPtr.ptr,
            arrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        arrPtr.free();
        this.RaiseError(error);
      }

      return arrPtr.toArray();
    },
    XAdESSignData: function (xadesType, signLevel, references, asBase64String) {
      var refNames = [];
      var refData = [];
      var refDataSize = 0;
      for (var i = 0; i < references.length; i++) {
        refNames.push(references[i].GetName());
        refData.push(references[i].GetData());
        refDataSize += references[i].GetData().length;
      }

      this.CheckMaxDataSize(refDataSize);

      var refNamesString = intArrayFromStrings(refNames, this.fieldsEncoder);
      var refDataArray = new EUArrayFromArrayOfArray(refData);

      var pPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUXAdESSignData",
          "number",
          ["number", "number", "array", "number", "number", "number", "number"],
          [
            xadesType,
            signLevel,
            refNamesString,
            refDataArray.arraysPtr,
            refDataArray.arraysLengthPtr,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    XAdESVerifyData: function (references, signIndex, xadesData) {
      var refNamesString = null;
      var refDataArray = null;

      if (references != null) {
        var refNames = [];
        var refData = [];
        var refDataSize = 0;
        for (var i = 0; i < references.length; i++) {
          refNames.push(references[i].GetName());
          refData.push(references[i].GetData());
          refDataSize += references[i].GetData().length;
        }

        this.CheckMaxDataSize(refDataSize);

        refNamesString = intArrayFromStrings(refNames, this.fieldsEncoder);
        refDataArray = new EUArrayFromArrayOfArray(refData);
      }

      this.CheckMaxDataSize(xadesData);

      if (typeof xadesData == "string")
        xadesData = this.Base64Decode(xadesData);

      var infoPtr = EUPointerSignerInfo();
      var signTimeInfo = null;
      var error;

      try {
        error = Module.ccall(
          "EUXAdESVerifyData",
          "number",
          [
            refNamesString != null ? "array" : "number",
            "number",
            "number",
            "number",
            "array",
            "number",
            "number",
          ],
          [
            refNamesString,
            refDataArray != null ? refDataArray.arraysPtr : 0,
            refDataArray != null ? refDataArray.arraysLengthPtr : 0,
            signIndex,
            xadesData,
            xadesData.length,
            infoPtr.ptr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        infoPtr.free();
        this.RaiseError(error);
      }

      try {
        signTimeInfo = this.XAdESGetSignTimeInfo(signIndex, xadesData);
      } catch (e) {
        infoPtr.free();
        throw e;
      }

      var info = new EndUserSignInfo(infoPtr.ptr, null, signTimeInfo);
      infoPtr.free();

      return info;
    },
    CtxXAdESSignData: function (
      pkContext,
      signAlgo,
      xadesType,
      signLevel,
      references,
      asBase64String,
    ) {
      var refNames = [];
      var refData = [];
      var refDataSize = 0;
      for (var i = 0; i < references.length; i++) {
        refNames.push(references[i].GetName());
        refData.push(references[i].GetData());
        refDataSize += references[i].GetData().length;
      }

      this.CheckMaxDataSize(refDataSize);

      var refNamesString = intArrayFromStrings(refNames, this.fieldsEncoder);
      var refDataArray = new EUArrayFromArrayOfArray(refData);

      var pPtr = EUPointerArray(pkContext.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxXAdESSignData",
          "number",
          [
            "number",
            "number",
            "number",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            pkContext.GetContext(),
            signAlgo,
            xadesType,
            signLevel,
            refNamesString,
            refDataArray.arraysPtr,
            refDataArray.arraysLengthPtr,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
    CtxXAdESGetSignerInfo: function (context, signIndex, xadesData) {
      this.CheckMaxDataSize(xadesData);

      if (typeof xadesData == "string")
        xadesData = this.Base64Decode(xadesData);

      var pCertInfoExPtr = EUPointer();
      var certArrPtr = EUPointerArray(context.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxXAdESGetSignerInfo",
          "number",
          ["number", "number", "array", "number", "number", "number", "number"],
          [
            context.GetContext(),
            signIndex,
            xadesData,
            xadesData.length,
            pCertInfoExPtr.ptr,
            certArrPtr.ptr,
            certArrPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pCertInfoExPtr.free();
        certArrPtr.free();

        this.RaiseError(error);
      }

      var certInfoExPtr, certInfoEx;

      certInfoExPtr = pCertInfoExPtr.toPtr();
      certInfoEx = new EndUserCertificateInfoEx(
        certInfoExPtr,
        this.fieldsEncoder,
      );
      Module._EUCtxFreeCertificateInfoEx(
        context.GetContext() | 0,
        certInfoExPtr,
      );

      return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
    },
    XAdESCreateSignerBegin: function (
      signerCert,
      signAlgo,
      xadesType,
      references,
    ) {
      var refNames = [];
      var refData = [];
      var refDataSize = 0;
      for (var i = 0; i < references.length; i++) {
        refNames.push(references[i].GetName());
        refData.push(references[i].GetData());
        refDataSize += references[i].GetData().length;
      }
      this.CheckMaxDataSize(signerCert);
      this.CheckMaxDataSize(refDataSize);

      var refNamesString = intArrayFromStrings(refNames, this.fieldsEncoder);
      var refDataArray = new EUArrayFromArrayOfArray(refData);

      var pSignRefPtr = EUPointer();
      var pAttrsHashPtr = EUPointerArray();
      var pXAdESDataPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUXAdESCreateSignerBegin",
          "number",
          [
            "array",
            "number",
            "number",
            "number",
            "array",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
            "number",
          ],
          [
            signerCert,
            signerCert.length,
            signAlgo,
            xadesType,
            refNamesString,
            refDataArray.arraysPtr,
            refDataArray.arraysLengthPtr,
            pSignRefPtr.ptr,
            pAttrsHashPtr.ptr,
            pAttrsHashPtr.lengthPtr,
            pXAdESDataPtr.ptr,
            pXAdESDataPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pSignRefPtr.free();
        pAttrsHashPtr.free();
        pXAdESDataPtr.free();
        this.RaiseError(error);
      }

      return new EndUserXAdESSigner(
        pSignRefPtr.toString(false, this.fieldsEncoder),
        pAttrsHashPtr.toArray(),
        pXAdESDataPtr.toArray(),
      );
    },
    XAdESCreateSignerEnd: function (
      signLevel,
      signatureReference,
      signature,
      xadesData,
      asBase64String,
    ) {
      this.CheckMaxDataSize(signature);
      this.CheckMaxDataSize(xadesData);

      if (typeof signature == "string")
        signature = this.Base64Decode(signature);
      if (typeof xadesData == "string")
        xadesData = this.Base64Decode(xadesData);

      var pPtr = EUPointerArray();
      var error;

      try {
        error = Module.ccall(
          "EUXAdESCreateSignerEnd",
          "number",
          [
            "number",
            "array",
            "array",
            "number",
            "array",
            "number",
            "number",
            "number",
          ],
          [
            signLevel,
            this.fieldsEncoder.encode(signatureReference),
            signature,
            signature.length,
            xadesData,
            xadesData.length,
            pPtr.ptr,
            pPtr.lengthPtr,
          ],
        );
      } catch (e) {
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        pPtr.free();
        this.RaiseError(error);
      }

      if (asBase64String) return this.Base64Encode(pPtr.toArray());
      else return pPtr.toArray();
    },
  },
);

//=============================================================================
//./src/ExtLibrary/euscp/euscp.wasm.ex.js
var Module = typeof Module !== "undefined" ? Module : {};
var EUFS = {
  ops_table: null,
  linkedFileNodes: [],
  mount_path: "/eufs_mount",
  initialized: false,
  mount: function (mount) {
    return EUFS.createNode(null, "/eufs_mount", 16384 | 511, 0);
  },
  createNode: function (parent, name, mode, dev) {
    if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
      throw new FS.ErrnoError(ERRNO_CODES.EPERM);
    }
    if (!EUFS.ops_table) {
      EUFS.ops_table = {
        dir: {
          node: {
            getattr: EUFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
            lookup: EUFS.node_ops.lookup,
            mknod: EUFS.node_ops.mknod,
            rename: MEMFS.node_ops.rename,
            unlink: MEMFS.node_ops.unlink,
            rmdir: MEMFS.node_ops.rmdir,
            readdir: MEMFS.node_ops.readdir,
            symlink: MEMFS.node_ops.symlink,
          },
          stream: { llseek: MEMFS.stream_ops.llseek },
        },
        file: {
          node: {
            getattr: EUFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
          },
          stream: {
            llseek: EUFS.stream_ops.llseek,
            read: EUFS.stream_ops.read,
            write: EUFS.stream_ops.write,
            allocate: EUFS.stream_ops.allocate,
            mmap: EUFS.stream_ops.mmap,
          },
        },
        link: MEMFS.ops_table.link,
        chrdev: MEMFS.ops_table.chrdev,
      };
    }
    var node = FS.createNode(parent, name, mode, dev);
    if (FS.isDir(node.mode)) {
      node.node_ops = EUFS.ops_table.dir.node;
      node.stream_ops = EUFS.ops_table.dir.stream;
      node.contents = {};
    } else if (FS.isFile(node.mode)) {
      var filePath = FS.getPath(node);
      var fileNode = EUFS.linkedFileNodes[filePath];
      if (fileNode === undefined || fileNode == null) {
        throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
      }
      node.node_ops = EUFS.ops_table.file.node;
      node.stream_ops = EUFS.ops_table.file.stream;
      node.contents = new Uint8Array(0);
      node.usedBytes = 0;
      node.file = fileNode.file;
      node.simulateWritting = fileNode.simulateWritting;
      fileNode.node = node;
    } else if (FS.isLink(node.mode)) {
      node.node_ops = EUFS.ops_table.link.node;
      node.stream_ops = EUFS.ops_table.link.stream;
    } else if (FS.isChrdev(node.mode)) {
      node.node_ops = EUFS.ops_table.chrdev.node;
      node.stream_ops = EUFS.ops_table.chrdev.stream;
    }
    node.timestamp = Date.now();
    if (parent) {
      parent.contents[name] = node;
    }
    return node;
  },
  sliceFile: function (file, start, end) {
    var blob;
    if (file.slice) {
      blob = file.slice(start, end);
    } else if (file.webkitSlice) {
      blob = file.webkitSlice(start, end);
    } else if (file.mozSlice) {
      blob = file.mozSlice(start, end);
    }
    return blob;
  },
  node_ops: {
    getattr: function (node) {
      var attr = {};
      attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
      attr.ino = node.id;
      attr.mode = node.mode;
      attr.nlink = 1;
      attr.uid = 0;
      attr.gid = 0;
      attr.rdev = node.rdev;
      if (FS.isDir(node.mode)) {
        attr.size = 4096;
      } else if (FS.isFile(node.mode)) {
        attr.size = node.file.size;
      } else if (FS.isLink(node.mode)) {
        attr.size = node.link.length;
      } else {
        attr.size = 0;
      }
      attr.atime = new Date(node.timestamp);
      attr.mtime = new Date(node.timestamp);
      attr.ctime = new Date(node.timestamp);
      attr.blksize = 4096;
      attr.blocks = Math.ceil(attr.size / attr.blksize);
      return attr;
    },
    setattr: function (node, attr) {
      if (attr.mode !== undefined) {
        node.mode = attr.mode;
      }
      if (attr.timestamp !== undefined) {
        node.timestamp = attr.timestamp;
      }
    },
    lookup: function (parent, name) {
      throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
    },
    mknod: function (parent, name, mode, dev) {
      return EUFS.createNode(parent, name, mode, dev);
    },
  },
  stream_ops: {
    read: function (stream, buffer, offset, length, position) {
      if (!length) return 0;
      var file = stream.node.file;
      if (position >= file.size) return 0;
      var fileReader = new FileReaderSync();
      var size = Math.min(file.size - position, length);
      var blob = EUFS.sliceFile(file, position, position + size);
      var arrayBuffer = fileReader.readAsArrayBuffer(blob);
      var array = new Uint8Array(arrayBuffer);
      if (size > 8 && array.subarray) {
        buffer.set(array, offset);
      } else {
        for (var i = 0; i < size; i++) buffer[offset + i] = array[i];
      }
      return size;
    },
    write: function (stream, buffer, offset, length, position, canOwn) {
      if (!length) return 0;
      var node = stream.node;
      node.timestamp = Date.now();
      if (node.usedBytes === 0 && position === 0) {
        if (!node.simulateWritting) {
          node.contentsABuf = new ArrayBuffer(length);
          node.contents = new Uint8Array(node.contentsABuf);
          node.contents.set(buffer.subarray(offset, offset + length), 0);
        }
        node.usedBytes = length;
      } else if (position + length <= node.usedBytes) {
        if (!node.simulateWritting) {
          node.contents.set(buffer.subarray(offset, offset + length), position);
        }
      } else {
        var fileSize = position + length;
        if (!node.simulateWritting) {
          if (fileSize > node.contentsABuf.byteLength) {
            var fileBufferSize;
            var fileBuffer = null;
            fileBufferSize =
              fileSize < 50 * 1024 * 1024
                ? fileSize * 2
                : fileSize + 10 * 1024 * 1024;
            while (1) {
              try {
                fileBuffer = new ArrayBuffer(fileBufferSize);
              } catch (e) {
                fileBuffer = null;
              }
              if (fileBuffer != null) break;
              fileBufferSize -= fileSize / 2;
              if (fileBufferSize < fileSize) return -1;
            }
            node.contentsABuf = fileBuffer;
            var contents = new Uint8Array(fileBuffer);
            contents.set(node.contents, 0);
            node.contents = contents;
            fileBuffer = null;
            contents = null;
          }
          node.contents.set(buffer.subarray(offset, offset + length), position);
        }
        node.usedBytes = fileSize;
      }
      return length;
    },
    llseek: function (stream, offset, whence) {
      var position = offset;
      if (whence === 1) {
        position += stream.position;
      } else if (whence === 2) {
        if (FS.isFile(stream.node.mode)) {
          position += stream.node.usedBytes;
        }
      }
      if (position < 0) {
        throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
      }
      return position;
    },
    allocate: function (stream, offset, length) {
      throw FS.genericErrors[ERRNO_CODES.ENOENT];
    },
    mmap: function (stream, buffer, offset, length, position, prot, flags) {
      throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
    },
  },
  readFileAsUint8Array: function (file) {
    var filePath = EUFS.getFilePath(file);
    var fileNode = EUFS.linkedFileNodes[filePath];
    if (!fileNode) return null;
    if (
      fileNode.node.usedBytes == 0 ||
      !fileNode.node.contents ||
      fileNode.simulateWritting
    ) {
      return new Uint8Array(0);
    }
    return new Uint8Array(
      fileNode.node.contentsABuf,
      0,
      fileNode.node.usedBytes,
    );
  },
  getFilePath: function (file) {
    var fileName = typeof file == "string" ? file : file.name;
    if (fileName.normalize) fileName = fileName.normalize();
    return EUFS.mount_path + "/" + fileName;
  },
  link: function (file, simulateWritting) {
    try {
      var filePath = EUFS.getFilePath(file);
      if (EUFS.linkedFileNodes[filePath]) return false;
      if (typeof file == "string") file = { name: file, size: 0 };
      EUFS.linkedFileNodes[filePath] = {
        file: file,
        node: null,
        simulateWritting: !!simulateWritting,
      };
      var fd = FS.open(filePath, "w");
      FS.close(fd);
      return true;
    } catch (e) {}
    return false;
  },
  unlink: function (file) {
    try {
      var filePath = EUFS.getFilePath(file);
      var fileNode = EUFS.linkedFileNodes[filePath];
      if (fileNode) {
        fileNode.node.contentsABuf = null;
        fileNode.node.contents = null;
        fileNode = null;
        delete EUFS.linkedFileNodes[filePath];
        FS.unlink(filePath);
      }
    } catch (e) {}
  },
  staticInit: function () {
    try {
      if (EUFS.initialized) return true;
      FS.mkdir(EUFS.mount_path);
      FS.mount(EUFS, null, EUFS.mount_path);
      EUFS.initialized = true;
      return true;
    } catch (e) {
      return false;
    }
  },
};
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}
Module["arguments"] = [];
Module["thisProgram"] = "./this.program";
Module["quit"] = function (status, toThrow) {
  throw toThrow;
};
Module["preRun"] = [];
Module["postRun"] = [];
var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === "object";
ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
ENVIRONMENT_IS_NODE =
  typeof process === "object" &&
  typeof require === "function" &&
  !ENVIRONMENT_IS_WEB &&
  !ENVIRONMENT_IS_WORKER;
ENVIRONMENT_IS_SHELL =
  !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
var scriptDirectory = "";
function locateFile(path) {
  if (Module["locateFile"]) {
    return Module["locateFile"](path, scriptDirectory);
  } else {
    return scriptDirectory + path;
  }
}
if (ENVIRONMENT_IS_NODE) {
  scriptDirectory = __dirname + "/";
  var nodeFS;
  var nodePath;
  Module["read"] = function shell_read(filename, binary) {
    var ret;
    if (!nodeFS) nodeFS = require("fs");
    if (!nodePath) nodePath = require("path");
    filename = nodePath["normalize"](filename);
    ret = nodeFS["readFileSync"](filename);
    return binary ? ret : ret.toString();
  };
  Module["readBinary"] = function readBinary(filename) {
    var ret = Module["read"](filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    assert(ret.buffer);
    return ret;
  };
  if (process["argv"].length > 1) {
    Module["thisProgram"] = process["argv"][1].replace(/\\/g, "/");
  }
  Module["arguments"] = process["argv"].slice(2);
  if (typeof module !== "undefined") {
    module["exports"] = Module;
  }
  process["on"]("uncaughtException", function (ex) {
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });
  process["on"]("unhandledRejection", abort);
  Module["quit"] = function (status) {
    process["exit"](status);
  };
  Module["inspect"] = function () {
    return "[Emscripten Module object]";
  };
} else if (ENVIRONMENT_IS_SHELL) {
  if (typeof read != "undefined") {
    Module["read"] = function shell_read(f) {
      return read(f);
    };
  }
  Module["readBinary"] = function readBinary(f) {
    var data;
    if (typeof readbuffer === "function") {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, "binary");
    assert(typeof data === "object");
    return data;
  };
  if (typeof scriptArgs != "undefined") {
    Module["arguments"] = scriptArgs;
  } else if (typeof arguments != "undefined") {
    Module["arguments"] = arguments;
  }
  if (typeof quit === "function") {
    Module["quit"] = function (status) {
      quit(status);
    };
  }
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = self.location.href;
  } else if (document.currentScript) {
    scriptDirectory = document.currentScript.src;
  }
  if (scriptDirectory.indexOf("blob:") !== 0) {
    scriptDirectory = scriptDirectory.substr(
      0,
      scriptDirectory.lastIndexOf("/") + 1,
    );
  } else {
    scriptDirectory = "";
  }
  Module["read"] = function shell_read(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    return xhr.responseText;
  };
  if (ENVIRONMENT_IS_WORKER) {
    Module["readBinary"] = function readBinary(url) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, false);
      xhr.responseType = "arraybuffer";
      xhr.send(null);
      return new Uint8Array(xhr.response);
    };
  }
  Module["readAsync"] = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };
  Module["setWindowTitle"] = function (title) {
    document.title = title;
  };
} else {
}
var out =
  Module["print"] ||
  (typeof console !== "undefined"
    ? console.log.bind(console)
    : typeof print !== "undefined"
      ? print
      : null);
var err =
  Module["printErr"] ||
  (typeof printErr !== "undefined"
    ? printErr
    : (typeof console !== "undefined" && console.warn.bind(console)) || out);
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
moduleOverrides = undefined;
function dynamicAlloc(size) {
  var ret = HEAP32[DYNAMICTOP_PTR >> 2];
  var end = (ret + size + 15) & -16;
  if (end <= _emscripten_get_heap_size()) {
    HEAP32[DYNAMICTOP_PTR >> 2] = end;
  } else {
    var success = _emscripten_resize_heap(end);
    if (!success) return 0;
  }
  return ret;
}
function getNativeTypeSize(type) {
  switch (type) {
    case "i1":
    case "i8":
      return 1;
    case "i16":
      return 2;
    case "i32":
      return 4;
    case "i64":
      return 8;
    case "float":
      return 4;
    case "double":
      return 8;
    default: {
      if (type[type.length - 1] === "*") {
        return 4;
      } else if (type[0] === "i") {
        var bits = parseInt(type.substr(1));
        assert(
          bits % 8 === 0,
          "getNativeTypeSize invalid bits " + bits + ", type " + type,
        );
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}
var asm2wasmImports = {
  "f64-rem": function (x, y) {
    return x % y;
  },
  debugger: function () {
    debugger;
  },
};
var functionPointers = new Array(0);
var tempRet0 = 0;
var setTempRet0 = function (value) {
  tempRet0 = value;
};
var getTempRet0 = function () {
  return tempRet0;
};
if (typeof WebAssembly !== "object") {
  err("no native wasm support detected");
}
function getValue(ptr, type, noSafe) {
  type = type || "i8";
  if (type.charAt(type.length - 1) === "*") type = "i32";
  switch (type) {
    case "i1":
      return HEAP8[ptr >> 0];
    case "i8":
      return HEAP8[ptr >> 0];
    case "i16":
      return HEAP16[ptr >> 1];
    case "i32":
      return HEAP32[ptr >> 2];
    case "i64":
      return HEAP32[ptr >> 2];
    case "float":
      return HEAPF32[ptr >> 2];
    case "double":
      return HEAPF64[ptr >> 3];
    default:
      abort("invalid type for getValue: " + type);
  }
  return null;
}
var wasmMemory;
var wasmTable;
var ABORT = false;
var EXITSTATUS = 0;
function assert(condition, text) {
  if (!condition) {
    abort("Assertion failed: " + text);
  }
}
function getCFunc(ident) {
  var func = Module["_" + ident];
  assert(
    func,
    "Cannot call unknown function " + ident + ", make sure it is exported",
  );
  return func;
}
function ccall(ident, returnType, argTypes, args, opts) {
  var toC = {
    string: function (str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) {
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    array: function (arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    },
  };
  function convertReturnValue(ret) {
    if (returnType === "string") return UTF8ToString(ret);
    if (returnType === "boolean") return Boolean(ret);
    return ret;
  }
  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);
  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}
function setValue(ptr, value, type, noSafe) {
  type = type || "i8";
  if (type.charAt(type.length - 1) === "*") type = "i32";
  switch (type) {
    case "i1":
      HEAP8[ptr >> 0] = value;
      break;
    case "i8":
      HEAP8[ptr >> 0] = value;
      break;
    case "i16":
      HEAP16[ptr >> 1] = value;
      break;
    case "i32":
      HEAP32[ptr >> 2] = value;
      break;
    case "i64":
      ((tempI64 = [
        value >>> 0,
        ((tempDouble = value),
        +Math_abs(tempDouble) >= 1
          ? tempDouble > 0
            ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) |
                0) >>>
              0
            : ~~+Math_ceil(
                (tempDouble - +(~~tempDouble >>> 0)) / 4294967296,
              ) >>> 0
          : 0),
      ]),
        (HEAP32[ptr >> 2] = tempI64[0]),
        (HEAP32[(ptr + 4) >> 2] = tempI64[1]));
      break;
    case "float":
      HEAPF32[ptr >> 2] = value;
      break;
    case "double":
      HEAPF64[ptr >> 3] = value;
      break;
    default:
      abort("invalid type for setValue: " + type);
  }
}
var ALLOC_NORMAL = 0;
var ALLOC_NONE = 3;
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === "number") {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }
  var singleType = typeof types === "string" ? types : null;
  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [_malloc, stackAlloc, dynamicAlloc][allocator](
      Math.max(size, singleType ? 1 : types.length),
    );
  }
  if (zeroinit) {
    var stop;
    ptr = ret;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[ptr >> 2] = 0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[ptr++ >> 0] = 0;
    }
    return ret;
  }
  if (singleType === "i8") {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(slab, ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }
  var i = 0,
    type,
    typeSize,
    previousType;
  while (i < size) {
    var curr = slab[i];
    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    if (type == "i64") type = "i32";
    setValue(ret + i, curr, type);
    if (previousType !== type) {
      typeSize = getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }
  return ret;
}
function getMemory(size) {
  if (!runtimeInitialized) return dynamicAlloc(size);
  return _malloc(size);
}
var UTF8Decoder =
  typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  while (u8Array[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
  } else {
    var str = "";
    while (idx < endPtr) {
      var u0 = u8Array[idx++];
      if (!(u0 & 128)) {
        str += String.fromCharCode(u0);
        continue;
      }
      var u1 = u8Array[idx++] & 63;
      if ((u0 & 224) == 192) {
        str += String.fromCharCode(((u0 & 31) << 6) | u1);
        continue;
      }
      var u2 = u8Array[idx++] & 63;
      if ((u0 & 240) == 224) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (u8Array[idx++] & 63);
      }
      if (u0 < 65536) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 65536;
        str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
      }
    }
  }
  return str;
}
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
}
function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) return 0;
  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1;
  for (var i = 0; i < str.length; ++i) {
    var u = str.charCodeAt(i);
    if (u >= 55296 && u <= 57343) {
      var u1 = str.charCodeAt(++i);
      u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
    }
    if (u <= 127) {
      if (outIdx >= endIdx) break;
      outU8Array[outIdx++] = u;
    } else if (u <= 2047) {
      if (outIdx + 1 >= endIdx) break;
      outU8Array[outIdx++] = 192 | (u >> 6);
      outU8Array[outIdx++] = 128 | (u & 63);
    } else if (u <= 65535) {
      if (outIdx + 2 >= endIdx) break;
      outU8Array[outIdx++] = 224 | (u >> 12);
      outU8Array[outIdx++] = 128 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 128 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      outU8Array[outIdx++] = 240 | (u >> 18);
      outU8Array[outIdx++] = 128 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 128 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 128 | (u & 63);
    }
  }
  outU8Array[outIdx] = 0;
  return outIdx - startIdx;
}
function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
}
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    var u = str.charCodeAt(i);
    if (u >= 55296 && u <= 57343)
      u = (65536 + ((u & 1023) << 10)) | (str.charCodeAt(++i) & 1023);
    if (u <= 127) ++len;
    else if (u <= 2047) len += 2;
    else if (u <= 65535) len += 3;
    else len += 4;
  }
  return len;
}
var UTF16Decoder =
  typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}
function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[buffer++ >> 0] = str.charCodeAt(i);
  }
  if (!dontAddNull) HEAP8[buffer >> 0] = 0;
}
function demangle(func) {
  return func;
}
function demangleAll(text) {
  var regex = /__Z[\w\d_]+/g;
  return text.replace(regex, function (x) {
    var y = demangle(x);
    return x === y ? x : y + " [" + x + "]";
  });
}
function jsStackTrace() {
  var err = new Error();
  if (!err.stack) {
    try {
      throw new Error(0);
    } catch (e) {
      err = e;
    }
    if (!err.stack) {
      return "(no stack trace available)";
    }
  }
  return err.stack.toString();
}
function stackTrace() {
  var js = jsStackTrace();
  if (Module["extraStackTrace"]) js += "\n" + Module["extraStackTrace"]();
  return demangleAll(js);
}
var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;
function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}
var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
function updateGlobalBufferViews() {
  Module["HEAP8"] = HEAP8 = new Int8Array(buffer);
  Module["HEAP16"] = HEAP16 = new Int16Array(buffer);
  Module["HEAP32"] = HEAP32 = new Int32Array(buffer);
  Module["HEAPU8"] = HEAPU8 = new Uint8Array(buffer);
  Module["HEAPU16"] = HEAPU16 = new Uint16Array(buffer);
  Module["HEAPU32"] = HEAPU32 = new Uint32Array(buffer);
  Module["HEAPF32"] = HEAPF32 = new Float32Array(buffer);
  Module["HEAPF64"] = HEAPF64 = new Float64Array(buffer);
}
var DYNAMIC_BASE = 136481408,
  DYNAMICTOP_PTR = 2263648;
var TOTAL_STACK = 134217728;
var INITIAL_TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 268435456;
if (INITIAL_TOTAL_MEMORY < TOTAL_STACK)
  err(
    "TOTAL_MEMORY should be larger than TOTAL_STACK, was " +
      INITIAL_TOTAL_MEMORY +
      "! (TOTAL_STACK=" +
      TOTAL_STACK +
      ")",
  );
if (Module["buffer"]) {
  buffer = Module["buffer"];
} else {
  if (
    typeof WebAssembly === "object" &&
    typeof WebAssembly.Memory === "function"
  ) {
    wasmMemory = new WebAssembly.Memory({
      initial: INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE,
      maximum: 536870912 / WASM_PAGE_SIZE,
    });
    buffer = wasmMemory.buffer;
  } else {
    buffer = new ArrayBuffer(INITIAL_TOTAL_MEMORY);
  }
}
updateGlobalBufferViews();
HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
function callRuntimeCallbacks(callbacks) {
  while (callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == "function") {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === "number") {
      if (callback.arg === undefined) {
        Module["dynCall_v"](func);
      } else {
        Module["dynCall_vi"](func, callback.arg);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}
var __ATPRERUN__ = [];
var __ATINIT__ = [];
var __ATMAIN__ = [];
var __ATPOSTRUN__ = [];
var runtimeInitialized = false;
var runtimeExited = false;
function preRun() {
  if (Module["preRun"]) {
    if (typeof Module["preRun"] == "function")
      Module["preRun"] = [Module["preRun"]];
    while (Module["preRun"].length) {
      addOnPreRun(Module["preRun"].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}
function ensureInitRuntime() {
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
  TTY.init();
  SOCKFS.root = FS.mount(SOCKFS, {}, null);
  callRuntimeCallbacks(__ATINIT__);
}
function preMain() {
  FS.ignorePermissions = false;
  callRuntimeCallbacks(__ATMAIN__);
}
function exitRuntime() {
  runtimeExited = true;
}
function postRun() {
  if (Module["postRun"]) {
    if (typeof Module["postRun"] == "function")
      Module["postRun"] = [Module["postRun"]];
    while (Module["postRun"].length) {
      addOnPostRun(Module["postRun"].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}
function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
var Math_abs = Math.abs;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_min = Math.min;
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null;
function getUniqueRunDependency(id) {
  return id;
}
function addRunDependency(id) {
  runDependencies++;
  if (Module["monitorRunDependencies"]) {
    Module["monitorRunDependencies"](runDependencies);
  }
}
function removeRunDependency(id) {
  runDependencies--;
  if (Module["monitorRunDependencies"]) {
    Module["monitorRunDependencies"](runDependencies);
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback();
    }
  }
}
Module["preloadedImages"] = {};
Module["preloadedAudios"] = {};
var dataURIPrefix = "data:application/octet-stream;base64,";
function isDataURI(filename) {
  return String.prototype.startsWith
    ? filename.startsWith(dataURIPrefix)
    : filename.indexOf(dataURIPrefix) === 0;
}
var wasmBinaryFile = "euscp.wasm.ex.wasm";
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}
function getBinary() {
  try {
    if (Module["wasmBinary"]) {
      return new Uint8Array(Module["wasmBinary"]);
    }
    if (Module["readBinary"]) {
      return Module["readBinary"](wasmBinaryFile);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  } catch (err) {
    abort(err);
  }
}
function getBinaryPromise() {
  if (
    !Module["wasmBinary"] &&
    (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) &&
    typeof fetch === "function"
  ) {
    return fetch(wasmBinaryFile, { credentials: "same-origin" })
      .then(function (response) {
        if (!response["ok"]) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response["arrayBuffer"]();
      })
      .catch(function () {
        return getBinary();
      });
  }
  return new Promise(function (resolve, reject) {
    resolve(getBinary());
  });
}
function createWasm(env) {
  var info = {
    env: env,
    global: { NaN: NaN, Infinity: Infinity },
    "global.Math": Math,
    asm2wasm: asm2wasmImports,
  };
  function receiveInstance(instance, module) {
    var exports = instance.exports;
    Module["asm"] = exports;
    removeRunDependency("wasm-instantiate");
  }
  addRunDependency("wasm-instantiate");
  if (Module["instantiateWasm"]) {
    try {
      return Module["instantiateWasm"](info, receiveInstance);
    } catch (e) {
      err("Module.instantiateWasm callback failed with error: " + e);
      return false;
    }
  }
  function receiveInstantiatedSource(output) {
    receiveInstance(output["instance"]);
  }
  function instantiateArrayBuffer(receiver) {
    getBinaryPromise()
      .then(function (binary) {
        return WebAssembly.instantiate(binary, info);
      })
      .then(receiver, function (reason) {
        err("failed to asynchronously prepare wasm: " + reason);
        abort(reason);
      });
  }
  if (
    !Module["wasmBinary"] &&
    typeof WebAssembly.instantiateStreaming === "function" &&
    !isDataURI(wasmBinaryFile) &&
    typeof fetch === "function"
  ) {
    WebAssembly.instantiateStreaming(
      fetch(wasmBinaryFile, { credentials: "same-origin" }),
      info,
    ).then(receiveInstantiatedSource, function (reason) {
      err("wasm streaming compile failed: " + reason);
      err("falling back to ArrayBuffer instantiation");
      instantiateArrayBuffer(receiveInstantiatedSource);
    });
  } else {
    instantiateArrayBuffer(receiveInstantiatedSource);
  }
  return {};
}
Module["asm"] = function (global, env, providedBuffer) {
  env["memory"] = wasmMemory;
  env["table"] = wasmTable = new WebAssembly.Table({
    initial: 23154,
    maximum: 23154,
    element: "anyfunc",
  });
  env["__memory_base"] = 1024;
  env["__table_base"] = 0;
  var exports = createWasm(env);
  return exports;
};
__ATINIT__.push({
  func: function () {
    globalCtors();
  },
});
function _TSCGCryptoRand() {
  var buffer = new Uint32Array(1);
  crypto.getRandomValues(buffer);
  return buffer[0] | 0;
}
function _TSCGFreeMemory(data) {
  data = data | 0;
  if (data != 0) _free(data);
}
function _TSCGGetBrowserInfo(pInfo) {
  setValue(pInfo, 0, "i32*");
  var info =
    navigator.appName +
    navigator.appVersion +
    navigator.platform +
    navigator.userAgent +
    (typeof preloadStartTime !== "undefined" ? preloadStartTime : new Date());
  var _setString = function (string, pString) {
    try {
      var stringArr = intArrayFromString(string);
      var stringBuf = _malloc(stringArr.length);
      writeArrayToMemory(stringArr, stringBuf);
      setValue(pString, stringBuf, "i32*");
      return 1 | 0;
    } catch (e) {
      return 0 | 0;
    }
  };
  if (_setString(info, pInfo) != 1) return 0 | 0;
  return 1 | 0;
}
function _TSCGIsCryptoRandSupported() {
  return (typeof crypto !== "undefined") | 0;
}
function _XMLHTTPFreeMemory(data) {
  data = data | 0;
  if (data != 0) _free(data);
}
function _XMLHTTPTransmitOperation(
  address,
  contentType,
  timeout,
  request,
  response,
) {
  if (typeof _XMLHTTPDirectAccessIsBrowserSupported == "undefined") {
    _XMLHTTPDirectAccessIsBrowserSupported = (function () {
      var browsers = [];
      browsers["IE"] = 11;
      browsers["Opera"] = 35;
      browsers["Chrome"] = 50;
      browsers["Firefox"] = 41;
      browsers["Safari"] = 4294967295;
      browsers["Edge"] = 4294967295;
      var _getBrowserInfo = function () {
        var ua = navigator.userAgent,
          tem;
        var M =
          ua.match(
            /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i,
          ) || [];
        if (/trident/i.test(M[1])) {
          tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
          return { name: "IE", version: parseInt(tem[1]) };
        }
        if (M[1] === "Chrome") {
          tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
          if (tem != null) {
            return {
              name: tem[1].replace("OPR", "Opera"),
              version: parseInt(tem[2]),
            };
          }
        }
        M = M[2]
          ? [M[1], M[2]]
          : [navigator.appName, navigator.appVersion, "-?"];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
        return { name: M[0], version: parseInt(M[1]) };
      };
      try {
        var info = _getBrowserInfo();
        if (browsers[info.name] && info.version >= browsers[info.name]) {
          return true;
        }
      } catch (e) {}
      return false;
    })();
  }
  _EUUseNodeJS_XMLHttpRequest = typeof XMLHttpRequest == "undefined";
  _EUXMLHttpRequest = _EUUseNodeJS_XMLHttpRequest ? null : XMLHttpRequest;
  if (typeof global != "undefined" && typeof require === "function") {
    global.Buffer = global.Buffer || require("buffer").Buffer;
    if (typeof btoa === "undefined") {
      global.btoa = function (str) {
        var result = new Buffer(str, "binary").toString("base64");
        return result;
      };
    }
    if (typeof atob === "undefined") {
      global.atob = function (b64Encoded) {
        var result = new Buffer(b64Encoded, "base64").toString("binary");
        return result;
      };
    }
  }
  if (_EUUseNodeJS_XMLHttpRequest) {
    _EUXMLHttpRequest = function () {
      "use strict";
      var self = this;
      var http = require("http");
      var https = require("https");
      var path = require("path");
      var Url = require("url");
      var spawn = require("child_process").spawn;
      var fs = require("fs");
      var sleep = null;
      try {
        require.resolve("sleep");
        sleep = require("sleep");
      } catch (e) {
        console.log(
          "XMLHttpRequest: please install sleep module: nmp install sleep",
        );
      }
      var request;
      var response;
      var settings = {};
      var disableHeaderCheck = false;
      var defaultHeaders = {
        "User-Agent": "node-XMLHttpRequest",
        Accept: "*/*",
      };
      var headers = {};
      var headersCase = {};
      var forbiddenRequestHeaders = [
        "accept-charset",
        "accept-encoding",
        "access-control-request-headers",
        "access-control-request-method",
        "connection",
        "content-length",
        "content-transfer-encoding",
        "cookie",
        "cookie2",
        "date",
        "expect",
        "host",
        "keep-alive",
        "origin",
        "referer",
        "te",
        "trailer",
        "transfer-encoding",
        "upgrade",
        "via",
      ];
      var forbiddenRequestMethods = ["TRACE", "TRACK", "CONNECT"];
      var sendFlag = false;
      var errorFlag = false;
      var listeners = {};
      this.UNSENT = 0;
      this.OPENED = 1;
      this.HEADERS_RECEIVED = 2;
      this.LOADING = 3;
      this.DONE = 4;
      this.timeout = 90 * 1e3;
      this.readyState = this.UNSENT;
      this.onreadystatechange = null;
      this.responseText = "";
      this.responseXML = "";
      this.status = null;
      this.statusText = null;
      this.withCredentials = false;
      var isAllowedHttpHeader = function (header) {
        return (
          disableHeaderCheck ||
          (header &&
            forbiddenRequestHeaders.indexOf(header.toLowerCase()) === -1)
        );
      };
      var isAllowedHttpMethod = function (method) {
        return method && forbiddenRequestMethods.indexOf(method) === -1;
      };
      this.open = function (method, url, async, user, password) {
        this.abort();
        errorFlag = false;
        if (!isAllowedHttpMethod(method)) {
          throw new Error("SecurityError: Request method not allowed");
        }
        settings = {
          method: method,
          url: url.toString(),
          async: typeof async !== "boolean" ? true : async,
          user: user || null,
          password: password || null,
        };
        setState(this.OPENED);
      };
      this.setDisableHeaderCheck = function (state) {
        disableHeaderCheck = state;
      };
      this.setRequestHeader = function (header, value) {
        if (this.readyState !== this.OPENED) {
          throw new Error(
            "INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN",
          );
        }
        if (!isAllowedHttpHeader(header)) {
          console.warn('Refused to set unsafe header "' + header + '"');
          return;
        }
        if (sendFlag) {
          throw new Error("INVALID_STATE_ERR: send flag is true");
        }
        header = headersCase[header.toLowerCase()] || header;
        headersCase[header.toLowerCase()] = header;
        headers[header] = headers[header]
          ? headers[header] + ", " + value
          : value;
      };
      this.getResponseHeader = function (header) {
        if (
          typeof header === "string" &&
          this.readyState > this.OPENED &&
          response &&
          response.headers &&
          response.headers[header.toLowerCase()] &&
          !errorFlag
        ) {
          return response.headers[header.toLowerCase()];
        }
        return null;
      };
      this.getAllResponseHeaders = function () {
        if (this.readyState < this.HEADERS_RECEIVED || errorFlag) {
          return "";
        }
        var result = "";
        for (var i in response.headers) {
          if (i !== "set-cookie" && i !== "set-cookie2") {
            result += i + ": " + response.headers[i] + "\r\n";
          }
        }
        return result.substr(0, result.length - 2);
      };
      this.getRequestHeader = function (name) {
        if (typeof name === "string" && headersCase[name.toLowerCase()]) {
          return headers[headersCase[name.toLowerCase()]];
        }
        return "";
      };
      this.send = function (data) {
        if (this.readyState !== this.OPENED) {
          throw new Error(
            "INVALID_STATE_ERR: connection must be opened before send() is called",
          );
        }
        if (sendFlag) {
          throw new Error("INVALID_STATE_ERR: send has already been called");
        }
        var ssl = false;
        var url = Url.parse(settings.url);
        var host;
        switch (url.protocol) {
          case "https:":
            ssl = true;
          case "http:":
            host = url.hostname;
            break;
          default:
            throw new Error("Protocol not supported.");
        }
        var port = url.port || (ssl ? 443 : 80);
        var uri = url.pathname + (url.search ? url.search : "");
        for (var name in defaultHeaders) {
          if (!headersCase[name.toLowerCase()]) {
            headers[name] = defaultHeaders[name];
          }
        }
        headers.Host = host;
        if (url.host[0] === "[") {
          headers.Host = "[" + headers.Host + "]";
        }
        if (!((ssl && port === 443) || port === 80)) {
          headers.Host += ":" + url.port;
        }
        if (settings.user) {
          if (typeof settings.password === "undefined") {
            settings.password = "";
          }
          var authBuf = new Buffer(settings.user + ":" + settings.password);
          headers.Authorization = "Basic " + authBuf.toString("base64");
        }
        if (settings.method === "GET" || settings.method === "HEAD") {
          data = null;
        } else if (data) {
          headers["Content-Length"] = Buffer.isBuffer(data)
            ? data.length
            : Buffer.byteLength(data);
          if (!this.getRequestHeader("Content-Type")) {
            headers["Content-Type"] = "text/plain;charset=UTF-8";
          }
        } else if (settings.method === "POST") {
          headers["Content-Length"] = 0;
        }
        var options = {
          host: host,
          port: port,
          path: uri,
          method: settings.method,
          headers: headers,
          agent: false,
          withCredentials: self.withCredentials,
        };
        errorFlag = false;
        if (settings.async) {
          var doRequest = ssl ? https.request : http.request;
          sendFlag = true;
          self.dispatchEvent("readystatechange");
          var responseHandler = function responseHandler(resp) {
            response = resp;
            if (
              response.statusCode === 301 ||
              response.statusCode === 302 ||
              response.statusCode === 303 ||
              response.statusCode === 307
            ) {
              settings.url = response.headers.location;
              var url = Url.parse(settings.url);
              host = url.hostname;
              var newOptions = {
                hostname: url.hostname,
                port: url.port,
                path: url.path,
                method: response.statusCode === 303 ? "GET" : settings.method,
                headers: headers,
                withCredentials: self.withCredentials,
              };
              request = doRequest(newOptions, responseHandler).on(
                "error",
                errorHandler,
              );
              request.end();
              return;
            }
            response.setEncoding("utf8");
            setState(self.HEADERS_RECEIVED);
            self.status = response.statusCode;
            response.on("data", function (chunk) {
              if (chunk) {
                self.responseText += chunk;
              }
              if (sendFlag) {
                setState(self.LOADING);
              }
            });
            response.on("end", function () {
              if (sendFlag) {
                setState(self.DONE);
                sendFlag = false;
              }
            });
            response.on("error", function (error) {
              self.handleError(error);
            });
          };
          var errorHandler = function errorHandler(error) {
            self.handleError(error);
          };
          request = doRequest(options, responseHandler).on(
            "error",
            errorHandler,
          );
          if (data) {
            request.write(data);
          }
          request.end();
          self.dispatchEvent("loadstart");
        } else {
          var contentFile = path
            .join(
              XMLHTTPTempDir,
              ".node-xmlhttprequest-content-" +
                process.pid +
                "-" +
                Math.random(),
            )
            .replaceAll("\\", "\\\\");
          var syncFile = path
            .join(
              XMLHTTPTempDir,
              ".node-xmlhttprequest-sync-" + process.pid + "-" + Math.random(),
            )
            .replaceAll("\\", "\\\\");
          fs.writeFileSync(syncFile, "", "utf8");
          var encodedData = "";
          if (data) {
            data = new Uint8Array(data);
            for (var i = 0; i < data.length; i++) {
              encodedData += ("0" + (data[i] & 255).toString(16)).slice(-2);
            }
          }
          var execString =
            "var http = require('http'), https = require('https'), fs = require('fs');" +
            "var doRequest = http" +
            (ssl ? "s" : "") +
            ".request;" +
            "var options = " +
            JSON.stringify(options) +
            ";" +
            "var responseText = '';" +
            "var data = '" +
            (data ? encodedData : "") +
            "';" +
            "if (data) {var dataTmp = new Uint8Array(data.length/2);for (var i=0, j=0; i < data.length; i+=2, j++){dataTmp[j] = parseInt(data.substr(i,2),16)} data = dataTmp;}" +
            "var req = doRequest(options, function(response) {" +
            "response.setEncoding('binary');" +
            "response.on('data', function(chunk) {" +
            "\tresponseText += chunk;" +
            "});" +
            "response.on('end', function() {" +
            "if (!fs.existsSync('" +
            syncFile +
            "')) return;" +
            "fs.writeFileSync('" +
            contentFile +
            "', JSON.stringify({err: null, data: {statusCode: response.statusCode, headers: response.headers, text: responseText}}), 'utf8');" +
            "fs.unlinkSync('" +
            syncFile +
            "');" +
            "});" +
            "response.on('error', function(error) {" +
            "if (!fs.existsSync('" +
            syncFile +
            "')) return;" +
            "fs.writeFileSync('" +
            contentFile +
            "', JSON.stringify({err: error}), 'utf8');" +
            "fs.unlinkSync('" +
            syncFile +
            "');" +
            "});" +
            "}).on('error', function(error) {" +
            "if (!fs.existsSync('" +
            syncFile +
            "')) return;" +
            "fs.writeFileSync('" +
            contentFile +
            "', JSON.stringify({err: error}), 'utf8');" +
            "fs.unlinkSync('" +
            syncFile +
            "');" +
            "});" +
            "req.write(new Buffer(data));" +
            "req.end();";
          var syncProc = spawn(process.argv[0], ["-e", execString]);
          var startDate = new Date().getTime();
          while (fs.existsSync(syncFile)) {
            if (sleep) sleep.msleep(5);
            var stopDate = new Date().getTime();
            if (stopDate - startDate > this.timeout) {
              try {
                syncProc.stdin.end();
              } catch (e) {}
              try {
                fs.unlinkSync(syncFile);
              } catch (e) {}
              try {
                fs.unlinkSync(contentFile);
              } catch (e) {}
              throw new Error("XMLHttpRequest: timeout");
            }
          }
          var resp = JSON.parse(fs.readFileSync(contentFile, "utf8"));
          syncProc.stdin.end();
          fs.unlinkSync(contentFile);
          if (resp.err) {
            self.handleError(resp.err);
          } else {
            response = resp.data;
            self.status = resp.data.statusCode;
            if (this.responseType == "arraybuffer") {
              var str = resp.data.text;
              var array = new Uint8Array(str.length);
              for (var i = 0; i < str.length; i++) {
                array[i] = str.charCodeAt(i);
              }
              self.response = array.buffer;
            } else {
              self.responseText = resp.data.text;
            }
            setState(self.DONE);
          }
        }
      };
      this.handleError = function (error) {
        this.status = 0;
        this.statusText = error;
        this.responseText = error.stack;
        errorFlag = true;
        setState(this.DONE);
        this.dispatchEvent("error");
      };
      this.abort = function () {
        if (request) {
          request.abort();
          request = null;
        }
        headers = defaultHeaders;
        this.status = 0;
        this.responseText = "";
        this.responseXML = "";
        errorFlag = true;
        if (
          this.readyState !== this.UNSENT &&
          (this.readyState !== this.OPENED || sendFlag) &&
          this.readyState !== this.DONE
        ) {
          sendFlag = false;
          setState(this.DONE);
        }
        this.readyState = this.UNSENT;
        this.dispatchEvent("abort");
      };
      this.addEventListener = function (event, callback) {
        if (!(event in listeners)) {
          listeners[event] = [];
        }
        listeners[event].push(callback);
      };
      this.removeEventListener = function (event, callback) {
        if (event in listeners) {
          listeners[event] = listeners[event].filter(function (ev) {
            return ev !== callback;
          });
        }
      };
      this.dispatchEvent = function (event) {
        if (typeof self["on" + event] === "function") {
          self["on" + event]();
        }
        if (event in listeners) {
          for (var i = 0, len = listeners[event].length; i < len; i++) {
            listeners[event][i].call(self);
          }
        }
      };
      var setState = function (state) {
        if (state == self.LOADING || self.readyState !== state) {
          self.readyState = state;
          if (
            settings.async ||
            self.readyState < self.OPENED ||
            self.readyState === self.DONE
          ) {
            self.dispatchEvent("readystatechange");
          }
          if (self.readyState === self.DONE && !errorFlag) {
            self.dispatchEvent("load");
            self.dispatchEvent("loadend");
          }
        }
      };
    };
  }
  try {
    if (!(typeof _EUXMLHttpRequest != "undefined")) return 0;
    if (
      !XMLHTTPProxyService &&
      !XMLHTTPDirectAccess &&
      !_EUUseNodeJS_XMLHttpRequest
    )
      return 0;
    var requestType = "GET";
    var requestString = null;
    var directAccess = _EUUseNodeJS_XMLHttpRequest;
    if ((request | 0) != 0) {
      requestType = "POST";
      requestString = CP1251PointerToUTF8(request);
    }
    address = CP1251PointerToUTF8(address);
    if ((contentType | 0) != 0) {
      contentType = CP1251PointerToUTF8(contentType);
    } else {
      contentType = "";
    }
    if (!_EUUseNodeJS_XMLHttpRequest) {
      if (
        XMLHTTPDirectAccess &&
        XMLHTTPDirectAccessAddresses.length > 0 &&
        _XMLHTTPDirectAccessIsBrowserSupported
      ) {
        try {
          var domain;
          if (address.indexOf("://") > -1) {
            domain = address.split("/")[2];
          } else {
            domain = address.split("/")[0];
          }
          domain = domain.split(":")[0];
          directAccess = XMLHTTPDirectAccessAddresses.indexOf(domain) > -1;
        } catch (e) {}
      }
    }
    var responseArray;
    var responseBuffer;
    if (directAccess) {
      var protocol = null;
      if (address.startsWith("http://")) protocol = "http://";
      else if (address.startsWith("https://")) protocol = "https://";
      else protocol = null;
      if (protocol) {
        address = address.substring(address.indexOf("://") + 3);
      }
      if (address.split("/")[0].indexOf(":") > -1) {
        var port = address.split("/")[0].split(":")[1];
        address = address.replace(":" + port, "");
      }
      if (!protocol || !_EUUseNodeJS_XMLHttpRequest)
        protocol = _EUUseNodeJS_XMLHttpRequest ? "http://" : "https://";
      address = protocol + address;
      if (!contentType || contentType == "") contentType = "text/plain";
      if (requestString) {
        var tmp = atob(requestString);
        var arrBuffer = new ArrayBuffer(tmp.length);
        var requestData = new Uint8Array(arrBuffer);
        for (var i = 0; i < tmp.length; i++) requestData[i] = tmp.charCodeAt(i);
        requestString = arrBuffer;
      }
      var xmlHttp = new _EUXMLHttpRequest();
      xmlHttp.open(requestType, address, false);
      if (_EUUseNodeJS_XMLHttpRequest) xmlHttp.timeout = timeout;
      xmlHttp.responseType = "arraybuffer";
      xmlHttp.setRequestHeader("Content-Type", contentType);
      xmlHttp.send(requestString);
      if (xmlHttp.status != 200) return 0;
      var responseData = new Uint8Array(xmlHttp.response);
      var tmpStr = "";
      for (var i = 0; i < responseData.length; i++)
        tmpStr += String.fromCharCode(responseData[i]);
      responseArray = intArrayFromString(btoa(tmpStr));
    } else {
      var url =
        XMLHTTPProxyService +
        "?address=" +
        address +
        "&contentType=" +
        contentType;
      var xmlHttp = new _EUXMLHttpRequest();
      xmlHttp.open(requestType, url, false);
      xmlHttp.setRequestHeader("Content-Type", "X-user/base64-data");
      xmlHttp.send(requestString);
      if (xmlHttp.status != 200) return 0;
      responseArray = intArrayFromString(xmlHttp.response);
    }
    var responseBuffer = _malloc(responseArray.length);
    writeArrayToMemory(responseArray, responseBuffer);
    setValue(response, responseBuffer, "i32*");
    return 1;
  } catch (e) {
    return 0;
  }
}
function ___assert_fail(condition, filename, line, func) {
  abort(
    "Assertion failed: " +
      UTF8ToString(condition) +
      ", at: " +
      [
        filename ? UTF8ToString(filename) : "unknown filename",
        line,
        func ? UTF8ToString(func) : "unknown function",
      ],
  );
}
var ENV = {};
function ___buildEnvironment(environ) {
  var MAX_ENV_VALUES = 64;
  var TOTAL_ENV_SIZE = 1024;
  var poolPtr;
  var envPtr;
  if (!___buildEnvironment.called) {
    ___buildEnvironment.called = true;
    ENV["USER"] = ENV["LOGNAME"] = "web_user";
    ENV["PATH"] = "/";
    ENV["PWD"] = "/";
    ENV["HOME"] = "/home/web_user";
    ENV["LANG"] = "C.UTF-8";
    ENV["_"] = Module["thisProgram"];
    poolPtr = getMemory(TOTAL_ENV_SIZE);
    envPtr = getMemory(MAX_ENV_VALUES * 4);
    HEAP32[envPtr >> 2] = poolPtr;
    HEAP32[environ >> 2] = envPtr;
  } else {
    envPtr = HEAP32[environ >> 2];
    poolPtr = HEAP32[envPtr >> 2];
  }
  var strings = [];
  var totalSize = 0;
  for (var key in ENV) {
    if (typeof ENV[key] === "string") {
      var line = key + "=" + ENV[key];
      strings.push(line);
      totalSize += line.length;
    }
  }
  if (totalSize > TOTAL_ENV_SIZE) {
    throw new Error("Environment size exceeded TOTAL_ENV_SIZE!");
  }
  var ptrSize = 4;
  for (var i = 0; i < strings.length; i++) {
    var line = strings[i];
    writeAsciiToMemory(line, poolPtr);
    HEAP32[(envPtr + i * ptrSize) >> 2] = poolPtr;
    poolPtr += line.length + 1;
  }
  HEAP32[(envPtr + strings.length * ptrSize) >> 2] = 0;
}
function ___cxa_allocate_exception(size) {
  return _malloc(size);
}
function ___cxa_free_exception(ptr) {
  try {
    return _free(ptr);
  } catch (e) {}
}
var EXCEPTIONS = {
  last: 0,
  caught: [],
  infos: {},
  deAdjust: function (adjusted) {
    if (!adjusted || EXCEPTIONS.infos[adjusted]) return adjusted;
    for (var key in EXCEPTIONS.infos) {
      var ptr = +key;
      var adj = EXCEPTIONS.infos[ptr].adjusted;
      var len = adj.length;
      for (var i = 0; i < len; i++) {
        if (adj[i] === adjusted) {
          return ptr;
        }
      }
    }
    return adjusted;
  },
  addRef: function (ptr) {
    if (!ptr) return;
    var info = EXCEPTIONS.infos[ptr];
    info.refcount++;
  },
  decRef: function (ptr) {
    if (!ptr) return;
    var info = EXCEPTIONS.infos[ptr];
    assert(info.refcount > 0);
    info.refcount--;
    if (info.refcount === 0 && !info.rethrown) {
      if (info.destructor) {
        Module["dynCall_vi"](info.destructor, ptr);
      }
      delete EXCEPTIONS.infos[ptr];
      ___cxa_free_exception(ptr);
    }
  },
  clearRef: function (ptr) {
    if (!ptr) return;
    var info = EXCEPTIONS.infos[ptr];
    info.refcount = 0;
  },
};
function ___cxa_begin_catch(ptr) {
  var info = EXCEPTIONS.infos[ptr];
  if (info && !info.caught) {
    info.caught = true;
    __ZSt18uncaught_exceptionv.uncaught_exception--;
  }
  if (info) info.rethrown = false;
  EXCEPTIONS.caught.push(ptr);
  EXCEPTIONS.addRef(EXCEPTIONS.deAdjust(ptr));
  return ptr;
}
function ___cxa_call_unexpected(exception) {
  err("Unexpected exception thrown, this is not properly supported - aborting");
  ABORT = true;
  throw exception;
}
function ___cxa_end_catch() {
  _setThrew(0);
  var ptr = EXCEPTIONS.caught.pop();
  if (ptr) {
    EXCEPTIONS.decRef(EXCEPTIONS.deAdjust(ptr));
    EXCEPTIONS.last = 0;
  }
}
function ___cxa_find_matching_catch_2() {
  return ___cxa_find_matching_catch.apply(null, arguments);
}
function ___cxa_find_matching_catch_3() {
  return ___cxa_find_matching_catch.apply(null, arguments);
}
function ___cxa_find_matching_catch_4() {
  return ___cxa_find_matching_catch.apply(null, arguments);
}
function ___cxa_find_matching_catch_5() {
  return ___cxa_find_matching_catch.apply(null, arguments);
}
function ___cxa_find_matching_catch_6() {
  return ___cxa_find_matching_catch.apply(null, arguments);
}
function ___cxa_find_matching_catch_7() {
  return ___cxa_find_matching_catch.apply(null, arguments);
}
function ___cxa_get_exception_ptr(ptr) {
  return ptr;
}
function ___cxa_pure_virtual() {
  ABORT = true;
  throw "Pure virtual function called!";
}
function ___cxa_rethrow() {
  var ptr = EXCEPTIONS.caught.pop();
  ptr = EXCEPTIONS.deAdjust(ptr);
  if (!EXCEPTIONS.infos[ptr].rethrown) {
    EXCEPTIONS.caught.push(ptr);
    EXCEPTIONS.infos[ptr].rethrown = true;
  }
  EXCEPTIONS.last = ptr;
  throw ptr;
}
function ___resumeException(ptr) {
  if (!EXCEPTIONS.last) {
    EXCEPTIONS.last = ptr;
  }
  throw ptr;
}
function ___cxa_find_matching_catch() {
  var thrown = EXCEPTIONS.last;
  if (!thrown) {
    return (setTempRet0(0), 0) | 0;
  }
  var info = EXCEPTIONS.infos[thrown];
  var throwntype = info.type;
  if (!throwntype) {
    return (setTempRet0(0), thrown) | 0;
  }
  var typeArray = Array.prototype.slice.call(arguments);
  var pointer = Module["___cxa_is_pointer_type"](throwntype);
  if (!___cxa_find_matching_catch.buffer)
    ___cxa_find_matching_catch.buffer = _malloc(4);
  HEAP32[___cxa_find_matching_catch.buffer >> 2] = thrown;
  thrown = ___cxa_find_matching_catch.buffer;
  for (var i = 0; i < typeArray.length; i++) {
    if (
      typeArray[i] &&
      Module["___cxa_can_catch"](typeArray[i], throwntype, thrown)
    ) {
      thrown = HEAP32[thrown >> 2];
      info.adjusted.push(thrown);
      return (setTempRet0(typeArray[i]), thrown) | 0;
    }
  }
  thrown = HEAP32[thrown >> 2];
  return (setTempRet0(throwntype), thrown) | 0;
}
function ___cxa_throw(ptr, type, destructor) {
  EXCEPTIONS.infos[ptr] = {
    ptr: ptr,
    adjusted: [ptr],
    type: type,
    destructor: destructor,
    refcount: 0,
    caught: false,
    rethrown: false,
  };
  EXCEPTIONS.last = ptr;
  if (!("uncaught_exception" in __ZSt18uncaught_exceptionv)) {
    __ZSt18uncaught_exceptionv.uncaught_exception = 1;
  } else {
    __ZSt18uncaught_exceptionv.uncaught_exception++;
  }
  throw ptr;
}
function ___cxa_uncaught_exception() {
  return !!__ZSt18uncaught_exceptionv.uncaught_exception;
}
function ___lock() {}
function ___setErrNo(value) {
  if (Module["___errno_location"])
    HEAP32[Module["___errno_location"]() >> 2] = value;
  return value;
}
function ___map_file(pathname, size) {
  ___setErrNo(1);
  return -1;
}
var PATH = {
  splitPath: function (filename) {
    var splitPathRe =
      /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    return splitPathRe.exec(filename).slice(1);
  },
  normalizeArray: function (parts, allowAboveRoot) {
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
      var last = parts[i];
      if (last === ".") {
        parts.splice(i, 1);
      } else if (last === "..") {
        parts.splice(i, 1);
        up++;
      } else if (up) {
        parts.splice(i, 1);
        up--;
      }
    }
    if (allowAboveRoot) {
      for (; up; up--) {
        parts.unshift("..");
      }
    }
    return parts;
  },
  normalize: function (path) {
    var isAbsolute = path.charAt(0) === "/",
      trailingSlash = path.substr(-1) === "/";
    path = PATH.normalizeArray(
      path.split("/").filter(function (p) {
        return !!p;
      }),
      !isAbsolute,
    ).join("/");
    if (!path && !isAbsolute) {
      path = ".";
    }
    if (path && trailingSlash) {
      path += "/";
    }
    return (isAbsolute ? "/" : "") + path;
  },
  dirname: function (path) {
    var result = PATH.splitPath(path),
      root = result[0],
      dir = result[1];
    if (!root && !dir) {
      return ".";
    }
    if (dir) {
      dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
  },
  basename: function (path) {
    if (path === "/") return "/";
    var lastSlash = path.lastIndexOf("/");
    if (lastSlash === -1) return path;
    return path.substr(lastSlash + 1);
  },
  extname: function (path) {
    return PATH.splitPath(path)[3];
  },
  join: function () {
    var paths = Array.prototype.slice.call(arguments, 0);
    return PATH.normalize(paths.join("/"));
  },
  join2: function (l, r) {
    return PATH.normalize(l + "/" + r);
  },
};
var PATH_FS = {
  resolve: function () {
    var resolvedPath = "",
      resolvedAbsolute = false;
    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = i >= 0 ? arguments[i] : FS.cwd();
      if (typeof path !== "string") {
        throw new TypeError("Arguments to path.resolve must be strings");
      } else if (!path) {
        return "";
      }
      resolvedPath = path + "/" + resolvedPath;
      resolvedAbsolute = path.charAt(0) === "/";
    }
    resolvedPath = PATH.normalizeArray(
      resolvedPath.split("/").filter(function (p) {
        return !!p;
      }),
      !resolvedAbsolute,
    ).join("/");
    return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
  },
  relative: function (from, to) {
    from = PATH_FS.resolve(from).substr(1);
    to = PATH_FS.resolve(to).substr(1);
    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== "") break;
      }
      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== "") break;
      }
      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }
    var fromParts = trim(from.split("/"));
    var toParts = trim(to.split("/"));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push("..");
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join("/");
  },
};
var TTY = {
  ttys: [],
  init: function () {},
  shutdown: function () {},
  register: function (dev, ops) {
    TTY.ttys[dev] = { input: [], output: [], ops: ops };
    FS.registerDevice(dev, TTY.stream_ops);
  },
  stream_ops: {
    open: function (stream) {
      var tty = TTY.ttys[stream.node.rdev];
      if (!tty) {
        throw new FS.ErrnoError(19);
      }
      stream.tty = tty;
      stream.seekable = false;
    },
    close: function (stream) {
      stream.tty.ops.flush(stream.tty);
    },
    flush: function (stream) {
      stream.tty.ops.flush(stream.tty);
    },
    read: function (stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.get_char) {
        throw new FS.ErrnoError(6);
      }
      var bytesRead = 0;
      for (var i = 0; i < length; i++) {
        var result;
        try {
          result = stream.tty.ops.get_char(stream.tty);
        } catch (e) {
          throw new FS.ErrnoError(5);
        }
        if (result === undefined && bytesRead === 0) {
          throw new FS.ErrnoError(11);
        }
        if (result === null || result === undefined) break;
        bytesRead++;
        buffer[offset + i] = result;
      }
      if (bytesRead) {
        stream.node.timestamp = Date.now();
      }
      return bytesRead;
    },
    write: function (stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.put_char) {
        throw new FS.ErrnoError(6);
      }
      try {
        for (var i = 0; i < length; i++) {
          stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
        }
      } catch (e) {
        throw new FS.ErrnoError(5);
      }
      if (length) {
        stream.node.timestamp = Date.now();
      }
      return i;
    },
  },
  default_tty_ops: {
    get_char: function (tty) {
      if (!tty.input.length) {
        var result = null;
        if (ENVIRONMENT_IS_NODE) {
          var BUFSIZE = 256;
          var buf = new Buffer(BUFSIZE);
          var bytesRead = 0;
          var isPosixPlatform = process.platform != "win32";
          var fd = process.stdin.fd;
          if (isPosixPlatform) {
            var usingDevice = false;
            try {
              fd = fs.openSync("/dev/stdin", "r");
              usingDevice = true;
            } catch (e) {}
          }
          try {
            bytesRead = fs.readSync(fd, buf, 0, BUFSIZE, null);
          } catch (e) {
            if (e.toString().indexOf("EOF") != -1) bytesRead = 0;
            else throw e;
          }
          if (usingDevice) {
            fs.closeSync(fd);
          }
          if (bytesRead > 0) {
            result = buf.slice(0, bytesRead).toString("utf-8");
          } else {
            result = null;
          }
        } else if (
          typeof window != "undefined" &&
          typeof window.prompt == "function"
        ) {
          result = window.prompt("Input: ");
          if (result !== null) {
            result += "\n";
          }
        } else if (typeof readline == "function") {
          result = readline();
          if (result !== null) {
            result += "\n";
          }
        }
        if (!result) {
          return null;
        }
        tty.input = intArrayFromString(result, true);
      }
      return tty.input.shift();
    },
    put_char: function (tty, val) {
      if (val === null || val === 10) {
        out(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    flush: function (tty) {
      if (tty.output && tty.output.length > 0) {
        out(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      }
    },
  },
  default_tty1_ops: {
    put_char: function (tty, val) {
      if (val === null || val === 10) {
        err(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    flush: function (tty) {
      if (tty.output && tty.output.length > 0) {
        err(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      }
    },
  },
};
var MEMFS = {
  ops_table: null,
  mount: function (mount) {
    return MEMFS.createNode(null, "/", 16384 | 511, 0);
  },
  createNode: function (parent, name, mode, dev) {
    if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
      throw new FS.ErrnoError(1);
    }
    if (!MEMFS.ops_table) {
      MEMFS.ops_table = {
        dir: {
          node: {
            getattr: MEMFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
            lookup: MEMFS.node_ops.lookup,
            mknod: MEMFS.node_ops.mknod,
            rename: MEMFS.node_ops.rename,
            unlink: MEMFS.node_ops.unlink,
            rmdir: MEMFS.node_ops.rmdir,
            readdir: MEMFS.node_ops.readdir,
            symlink: MEMFS.node_ops.symlink,
          },
          stream: { llseek: MEMFS.stream_ops.llseek },
        },
        file: {
          node: {
            getattr: MEMFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
          },
          stream: {
            llseek: MEMFS.stream_ops.llseek,
            read: MEMFS.stream_ops.read,
            write: MEMFS.stream_ops.write,
            allocate: MEMFS.stream_ops.allocate,
            mmap: MEMFS.stream_ops.mmap,
            msync: MEMFS.stream_ops.msync,
          },
        },
        link: {
          node: {
            getattr: MEMFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
            readlink: MEMFS.node_ops.readlink,
          },
          stream: {},
        },
        chrdev: {
          node: {
            getattr: MEMFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
          },
          stream: FS.chrdev_stream_ops,
        },
      };
    }
    var node = FS.createNode(parent, name, mode, dev);
    if (FS.isDir(node.mode)) {
      node.node_ops = MEMFS.ops_table.dir.node;
      node.stream_ops = MEMFS.ops_table.dir.stream;
      node.contents = {};
    } else if (FS.isFile(node.mode)) {
      node.node_ops = MEMFS.ops_table.file.node;
      node.stream_ops = MEMFS.ops_table.file.stream;
      node.usedBytes = 0;
      node.contents = null;
    } else if (FS.isLink(node.mode)) {
      node.node_ops = MEMFS.ops_table.link.node;
      node.stream_ops = MEMFS.ops_table.link.stream;
    } else if (FS.isChrdev(node.mode)) {
      node.node_ops = MEMFS.ops_table.chrdev.node;
      node.stream_ops = MEMFS.ops_table.chrdev.stream;
    }
    node.timestamp = Date.now();
    if (parent) {
      parent.contents[name] = node;
    }
    return node;
  },
  getFileDataAsRegularArray: function (node) {
    if (node.contents && node.contents.subarray) {
      var arr = [];
      for (var i = 0; i < node.usedBytes; ++i) arr.push(node.contents[i]);
      return arr;
    }
    return node.contents;
  },
  getFileDataAsTypedArray: function (node) {
    if (!node.contents) return new Uint8Array();
    if (node.contents.subarray)
      return node.contents.subarray(0, node.usedBytes);
    return new Uint8Array(node.contents);
  },
  expandFileStorage: function (node, newCapacity) {
    var prevCapacity = node.contents ? node.contents.length : 0;
    if (prevCapacity >= newCapacity) return;
    var CAPACITY_DOUBLING_MAX = 1024 * 1024;
    newCapacity = Math.max(
      newCapacity,
      (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125)) | 0,
    );
    if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
    var oldContents = node.contents;
    node.contents = new Uint8Array(newCapacity);
    if (node.usedBytes > 0)
      node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
    return;
  },
  resizeFileStorage: function (node, newSize) {
    if (node.usedBytes == newSize) return;
    if (newSize == 0) {
      node.contents = null;
      node.usedBytes = 0;
      return;
    }
    if (!node.contents || node.contents.subarray) {
      var oldContents = node.contents;
      node.contents = new Uint8Array(new ArrayBuffer(newSize));
      if (oldContents) {
        node.contents.set(
          oldContents.subarray(0, Math.min(newSize, node.usedBytes)),
        );
      }
      node.usedBytes = newSize;
      return;
    }
    if (!node.contents) node.contents = [];
    if (node.contents.length > newSize) node.contents.length = newSize;
    else while (node.contents.length < newSize) node.contents.push(0);
    node.usedBytes = newSize;
  },
  node_ops: {
    getattr: function (node) {
      var attr = {};
      attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
      attr.ino = node.id;
      attr.mode = node.mode;
      attr.nlink = 1;
      attr.uid = 0;
      attr.gid = 0;
      attr.rdev = node.rdev;
      if (FS.isDir(node.mode)) {
        attr.size = 4096;
      } else if (FS.isFile(node.mode)) {
        attr.size = node.usedBytes;
      } else if (FS.isLink(node.mode)) {
        attr.size = node.link.length;
      } else {
        attr.size = 0;
      }
      attr.atime = new Date(node.timestamp);
      attr.mtime = new Date(node.timestamp);
      attr.ctime = new Date(node.timestamp);
      attr.blksize = 4096;
      attr.blocks = Math.ceil(attr.size / attr.blksize);
      return attr;
    },
    setattr: function (node, attr) {
      if (attr.mode !== undefined) {
        node.mode = attr.mode;
      }
      if (attr.timestamp !== undefined) {
        node.timestamp = attr.timestamp;
      }
      if (attr.size !== undefined) {
        MEMFS.resizeFileStorage(node, attr.size);
      }
    },
    lookup: function (parent, name) {
      throw FS.genericErrors[2];
    },
    mknod: function (parent, name, mode, dev) {
      return MEMFS.createNode(parent, name, mode, dev);
    },
    rename: function (old_node, new_dir, new_name) {
      if (FS.isDir(old_node.mode)) {
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {}
        if (new_node) {
          for (var i in new_node.contents) {
            throw new FS.ErrnoError(39);
          }
        }
      }
      delete old_node.parent.contents[old_node.name];
      old_node.name = new_name;
      new_dir.contents[new_name] = old_node;
      old_node.parent = new_dir;
    },
    unlink: function (parent, name) {
      delete parent.contents[name];
    },
    rmdir: function (parent, name) {
      var node = FS.lookupNode(parent, name);
      for (var i in node.contents) {
        throw new FS.ErrnoError(39);
      }
      delete parent.contents[name];
    },
    readdir: function (node) {
      var entries = [".", ".."];
      for (var key in node.contents) {
        if (!node.contents.hasOwnProperty(key)) {
          continue;
        }
        entries.push(key);
      }
      return entries;
    },
    symlink: function (parent, newname, oldpath) {
      var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
      node.link = oldpath;
      return node;
    },
    readlink: function (node) {
      if (!FS.isLink(node.mode)) {
        throw new FS.ErrnoError(22);
      }
      return node.link;
    },
  },
  stream_ops: {
    read: function (stream, buffer, offset, length, position) {
      var contents = stream.node.contents;
      if (position >= stream.node.usedBytes) return 0;
      var size = Math.min(stream.node.usedBytes - position, length);
      if (size > 8 && contents.subarray) {
        buffer.set(contents.subarray(position, position + size), offset);
      } else {
        for (var i = 0; i < size; i++)
          buffer[offset + i] = contents[position + i];
      }
      return size;
    },
    write: function (stream, buffer, offset, length, position, canOwn) {
      canOwn = false;
      if (!length) return 0;
      var node = stream.node;
      node.timestamp = Date.now();
      if (buffer.subarray && (!node.contents || node.contents.subarray)) {
        if (canOwn) {
          node.contents = buffer.subarray(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (node.usedBytes === 0 && position === 0) {
          node.contents = new Uint8Array(
            buffer.subarray(offset, offset + length),
          );
          node.usedBytes = length;
          return length;
        } else if (position + length <= node.usedBytes) {
          node.contents.set(buffer.subarray(offset, offset + length), position);
          return length;
        }
      }
      MEMFS.expandFileStorage(node, position + length);
      if (node.contents.subarray && buffer.subarray)
        node.contents.set(buffer.subarray(offset, offset + length), position);
      else {
        for (var i = 0; i < length; i++) {
          node.contents[position + i] = buffer[offset + i];
        }
      }
      node.usedBytes = Math.max(node.usedBytes, position + length);
      return length;
    },
    llseek: function (stream, offset, whence) {
      var position = offset;
      if (whence === 1) {
        position += stream.position;
      } else if (whence === 2) {
        if (FS.isFile(stream.node.mode)) {
          position += stream.node.usedBytes;
        }
      }
      if (position < 0) {
        throw new FS.ErrnoError(22);
      }
      return position;
    },
    allocate: function (stream, offset, length) {
      MEMFS.expandFileStorage(stream.node, offset + length);
      stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
    },
    mmap: function (stream, buffer, offset, length, position, prot, flags) {
      if (!FS.isFile(stream.node.mode)) {
        throw new FS.ErrnoError(19);
      }
      var ptr;
      var allocated;
      var contents = stream.node.contents;
      if (
        !(flags & 2) &&
        (contents.buffer === buffer || contents.buffer === buffer.buffer)
      ) {
        allocated = false;
        ptr = contents.byteOffset;
      } else {
        if (position > 0 || position + length < stream.node.usedBytes) {
          if (contents.subarray) {
            contents = contents.subarray(position, position + length);
          } else {
            contents = Array.prototype.slice.call(
              contents,
              position,
              position + length,
            );
          }
        }
        allocated = true;
        ptr = _malloc(length);
        if (!ptr) {
          throw new FS.ErrnoError(12);
        }
        buffer.set(contents, ptr);
      }
      return { ptr: ptr, allocated: allocated };
    },
    msync: function (stream, buffer, offset, length, mmapFlags) {
      if (!FS.isFile(stream.node.mode)) {
        throw new FS.ErrnoError(19);
      }
      if (mmapFlags & 2) {
        return 0;
      }
      var bytesWritten = MEMFS.stream_ops.write(
        stream,
        buffer,
        0,
        length,
        offset,
        false,
      );
      return 0;
    },
  },
};
var IDBFS = {
  dbs: {},
  indexedDB: function () {
    if (typeof indexedDB !== "undefined") return indexedDB;
    var ret = null;
    if (typeof window === "object")
      ret =
        window.indexedDB ||
        window.mozIndexedDB ||
        window.webkitIndexedDB ||
        window.msIndexedDB;
    assert(ret, "IDBFS used, but indexedDB not supported");
    return ret;
  },
  DB_VERSION: 21,
  DB_STORE_NAME: "FILE_DATA",
  mount: function (mount) {
    return MEMFS.mount.apply(null, arguments);
  },
  syncfs: function (mount, populate, callback) {
    IDBFS.getLocalSet(mount, function (err, local) {
      if (err) return callback(err);
      IDBFS.getRemoteSet(mount, function (err, remote) {
        if (err) return callback(err);
        var src = populate ? remote : local;
        var dst = populate ? local : remote;
        IDBFS.reconcile(src, dst, callback);
      });
    });
  },
  getDB: function (name, callback) {
    var db = IDBFS.dbs[name];
    if (db) {
      return callback(null, db);
    }
    var req;
    try {
      req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
    } catch (e) {
      return callback(e);
    }
    if (!req) {
      return callback("Unable to connect to IndexedDB");
    }
    req.onupgradeneeded = function (e) {
      var db = e.target.result;
      var transaction = e.target.transaction;
      var fileStore;
      if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
        fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
      } else {
        fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
      }
      if (!fileStore.indexNames.contains("timestamp")) {
        fileStore.createIndex("timestamp", "timestamp", { unique: false });
      }
    };
    req.onsuccess = function () {
      db = req.result;
      IDBFS.dbs[name] = db;
      callback(null, db);
    };
    req.onerror = function (e) {
      callback(this.error);
      e.preventDefault();
    };
  },
  getLocalSet: function (mount, callback) {
    var entries = {};
    function isRealDir(p) {
      return p !== "." && p !== "..";
    }
    function toAbsolute(root) {
      return function (p) {
        return PATH.join2(root, p);
      };
    }
    var check = FS.readdir(mount.mountpoint)
      .filter(isRealDir)
      .map(toAbsolute(mount.mountpoint));
    while (check.length) {
      var path = check.pop();
      var stat;
      try {
        stat = FS.stat(path);
      } catch (e) {
        return callback(e);
      }
      if (FS.isDir(stat.mode)) {
        check.push.apply(
          check,
          FS.readdir(path).filter(isRealDir).map(toAbsolute(path)),
        );
      }
      entries[path] = { timestamp: stat.mtime };
    }
    return callback(null, { type: "local", entries: entries });
  },
  getRemoteSet: function (mount, callback) {
    var entries = {};
    IDBFS.getDB(mount.mountpoint, function (err, db) {
      if (err) return callback(err);
      try {
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], "readonly");
        transaction.onerror = function (e) {
          callback(this.error);
          e.preventDefault();
        };
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
        var index = store.index("timestamp");
        index.openKeyCursor().onsuccess = function (event) {
          var cursor = event.target.result;
          if (!cursor) {
            return callback(null, { type: "remote", db: db, entries: entries });
          }
          entries[cursor.primaryKey] = { timestamp: cursor.key };
          cursor.continue();
        };
      } catch (e) {
        return callback(e);
      }
    });
  },
  loadLocalEntry: function (path, callback) {
    var stat, node;
    try {
      var lookup = FS.lookupPath(path);
      node = lookup.node;
      stat = FS.stat(path);
    } catch (e) {
      return callback(e);
    }
    if (FS.isDir(stat.mode)) {
      return callback(null, { timestamp: stat.mtime, mode: stat.mode });
    } else if (FS.isFile(stat.mode)) {
      node.contents = MEMFS.getFileDataAsTypedArray(node);
      return callback(null, {
        timestamp: stat.mtime,
        mode: stat.mode,
        contents: node.contents,
      });
    } else {
      return callback(new Error("node type not supported"));
    }
  },
  storeLocalEntry: function (path, entry, callback) {
    try {
      if (FS.isDir(entry.mode)) {
        FS.mkdir(path, entry.mode);
      } else if (FS.isFile(entry.mode)) {
        FS.writeFile(path, entry.contents, { canOwn: true });
      } else {
        return callback(new Error("node type not supported"));
      }
      FS.chmod(path, entry.mode);
      FS.utime(path, entry.timestamp, entry.timestamp);
    } catch (e) {
      return callback(e);
    }
    callback(null);
  },
  removeLocalEntry: function (path, callback) {
    try {
      var lookup = FS.lookupPath(path);
      var stat = FS.stat(path);
      if (FS.isDir(stat.mode)) {
        FS.rmdir(path);
      } else if (FS.isFile(stat.mode)) {
        FS.unlink(path);
      }
    } catch (e) {
      return callback(e);
    }
    callback(null);
  },
  loadRemoteEntry: function (store, path, callback) {
    var req = store.get(path);
    req.onsuccess = function (event) {
      callback(null, event.target.result);
    };
    req.onerror = function (e) {
      callback(this.error);
      e.preventDefault();
    };
  },
  storeRemoteEntry: function (store, path, entry, callback) {
    var req = store.put(entry, path);
    req.onsuccess = function () {
      callback(null);
    };
    req.onerror = function (e) {
      callback(this.error);
      e.preventDefault();
    };
  },
  removeRemoteEntry: function (store, path, callback) {
    var req = store.delete(path);
    req.onsuccess = function () {
      callback(null);
    };
    req.onerror = function (e) {
      callback(this.error);
      e.preventDefault();
    };
  },
  reconcile: function (src, dst, callback) {
    var total = 0;
    var create = [];
    Object.keys(src.entries).forEach(function (key) {
      var e = src.entries[key];
      var e2 = dst.entries[key];
      if (!e2 || e.timestamp > e2.timestamp) {
        create.push(key);
        total++;
      }
    });
    var remove = [];
    Object.keys(dst.entries).forEach(function (key) {
      var e = dst.entries[key];
      var e2 = src.entries[key];
      if (!e2) {
        remove.push(key);
        total++;
      }
    });
    if (!total) {
      return callback(null);
    }
    var errored = false;
    var completed = 0;
    var db = src.type === "remote" ? src.db : dst.db;
    var transaction = db.transaction([IDBFS.DB_STORE_NAME], "readwrite");
    var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
    function done(err) {
      if (err) {
        if (!done.errored) {
          done.errored = true;
          return callback(err);
        }
        return;
      }
      if (++completed >= total) {
        return callback(null);
      }
    }
    transaction.onerror = function (e) {
      done(this.error);
      e.preventDefault();
    };
    create.sort().forEach(function (path) {
      if (dst.type === "local") {
        IDBFS.loadRemoteEntry(store, path, function (err, entry) {
          if (err) return done(err);
          IDBFS.storeLocalEntry(path, entry, done);
        });
      } else {
        IDBFS.loadLocalEntry(path, function (err, entry) {
          if (err) return done(err);
          IDBFS.storeRemoteEntry(store, path, entry, done);
        });
      }
    });
    remove
      .sort()
      .reverse()
      .forEach(function (path) {
        if (dst.type === "local") {
          IDBFS.removeLocalEntry(path, done);
        } else {
          IDBFS.removeRemoteEntry(store, path, done);
        }
      });
  },
};
var NODEFS = {
  isWindows: false,
  staticInit: function () {
    NODEFS.isWindows = !!process.platform.match(/^win/);
    var flags = process["binding"]("constants");
    if (flags["fs"]) {
      flags = flags["fs"];
    }
    NODEFS.flagsForNodeMap = {
      1024: flags["O_APPEND"],
      64: flags["O_CREAT"],
      128: flags["O_EXCL"],
      0: flags["O_RDONLY"],
      2: flags["O_RDWR"],
      4096: flags["O_SYNC"],
      512: flags["O_TRUNC"],
      1: flags["O_WRONLY"],
    };
  },
  bufferFrom: function (arrayBuffer) {
    return Buffer.alloc ? Buffer.from(arrayBuffer) : new Buffer(arrayBuffer);
  },
  mount: function (mount) {
    assert(ENVIRONMENT_IS_NODE);
    return NODEFS.createNode(null, "/", NODEFS.getMode(mount.opts.root), 0);
  },
  createNode: function (parent, name, mode, dev) {
    if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
      throw new FS.ErrnoError(22);
    }
    var node = FS.createNode(parent, name, mode);
    node.node_ops = NODEFS.node_ops;
    node.stream_ops = NODEFS.stream_ops;
    return node;
  },
  getMode: function (path) {
    var stat;
    try {
      stat = fs.lstatSync(path);
      if (NODEFS.isWindows) {
        stat.mode = stat.mode | ((stat.mode & 292) >> 2);
      }
    } catch (e) {
      if (!e.code) throw e;
      throw new FS.ErrnoError(-e.errno);
    }
    return stat.mode;
  },
  realPath: function (node) {
    var parts = [];
    while (node.parent !== node) {
      parts.push(node.name);
      node = node.parent;
    }
    parts.push(node.mount.opts.root);
    parts.reverse();
    return PATH.join.apply(null, parts);
  },
  flagsForNode: function (flags) {
    flags &= ~2097152;
    flags &= ~2048;
    flags &= ~32768;
    flags &= ~524288;
    var newFlags = 0;
    for (var k in NODEFS.flagsForNodeMap) {
      if (flags & k) {
        newFlags |= NODEFS.flagsForNodeMap[k];
        flags ^= k;
      }
    }
    if (!flags) {
      return newFlags;
    } else {
      throw new FS.ErrnoError(22);
    }
  },
  node_ops: {
    getattr: function (node) {
      var path = NODEFS.realPath(node);
      var stat;
      try {
        stat = fs.lstatSync(path);
      } catch (e) {
        if (!e.code) throw e;
        throw new FS.ErrnoError(-e.errno);
      }
      if (NODEFS.isWindows && !stat.blksize) {
        stat.blksize = 4096;
      }
      if (NODEFS.isWindows && !stat.blocks) {
        stat.blocks = ((stat.size + stat.blksize - 1) / stat.blksize) | 0;
      }
      return {
        dev: stat.dev,
        ino: stat.ino,
        mode: stat.mode,
        nlink: stat.nlink,
        uid: stat.uid,
        gid: stat.gid,
        rdev: stat.rdev,
        size: stat.size,
        atime: stat.atime,
        mtime: stat.mtime,
        ctime: stat.ctime,
        blksize: stat.blksize,
        blocks: stat.blocks,
      };
    },
    setattr: function (node, attr) {
      var path = NODEFS.realPath(node);
      try {
        if (attr.mode !== undefined) {
          fs.chmodSync(path, attr.mode);
          node.mode = attr.mode;
        }
        if (attr.timestamp !== undefined) {
          var date = new Date(attr.timestamp);
          fs.utimesSync(path, date, date);
        }
        if (attr.size !== undefined) {
          fs.truncateSync(path, attr.size);
        }
      } catch (e) {
        if (!e.code) throw e;
        throw new FS.ErrnoError(-e.errno);
      }
    },
    lookup: function (parent, name) {
      var path = PATH.join2(NODEFS.realPath(parent), name);
      var mode = NODEFS.getMode(path);
      return NODEFS.createNode(parent, name, mode);
    },
    mknod: function (parent, name, mode, dev) {
      var node = NODEFS.createNode(parent, name, mode, dev);
      var path = NODEFS.realPath(node);
      try {
        if (FS.isDir(node.mode)) {
          fs.mkdirSync(path, node.mode);
        } else {
          fs.writeFileSync(path, "", { mode: node.mode });
        }
      } catch (e) {
        if (!e.code) throw e;
        throw new FS.ErrnoError(-e.errno);
      }
      return node;
    },
    rename: function (oldNode, newDir, newName) {
      var oldPath = NODEFS.realPath(oldNode);
      var newPath = PATH.join2(NODEFS.realPath(newDir), newName);
      try {
        fs.renameSync(oldPath, newPath);
      } catch (e) {
        if (!e.code) throw e;
        throw new FS.ErrnoError(-e.errno);
      }
    },
    unlink: function (parent, name) {
      var path = PATH.join2(NODEFS.realPath(parent), name);
      try {
        fs.unlinkSync(path);
      } catch (e) {
        if (!e.code) throw e;
        throw new FS.ErrnoError(-e.errno);
      }
    },
    rmdir: function (parent, name) {
      var path = PATH.join2(NODEFS.realPath(parent), name);
      try {
        fs.rmdirSync(path);
      } catch (e) {
        if (!e.code) throw e;
        throw new FS.ErrnoError(-e.errno);
      }
    },
    readdir: function (node) {
      var path = NODEFS.realPath(node);
      try {
        return fs.readdirSync(path);
      } catch (e) {
        if (!e.code) throw e;
        throw new FS.ErrnoError(-e.errno);
      }
    },
    symlink: function (parent, newName, oldPath) {
      var newPath = PATH.join2(NODEFS.realPath(parent), newName);
      try {
        fs.symlinkSync(oldPath, newPath);
      } catch (e) {
        if (!e.code) throw e;
        throw new FS.ErrnoError(-e.errno);
      }
    },
    readlink: function (node) {
      var path = NODEFS.realPath(node);
      try {
        path = fs.readlinkSync(path);
        path = NODEJS_PATH.relative(
          NODEJS_PATH.resolve(node.mount.opts.root),
          path,
        );
        return path;
      } catch (e) {
        if (!e.code) throw e;
        throw new FS.ErrnoError(-e.errno);
      }
    },
  },
  stream_ops: {
    open: function (stream) {
      var path = NODEFS.realPath(stream.node);
      try {
        if (FS.isFile(stream.node.mode)) {
          stream.nfd = fs.openSync(path, NODEFS.flagsForNode(stream.flags));
        }
      } catch (e) {
        if (!e.code) throw e;
        throw new FS.ErrnoError(-e.errno);
      }
    },
    close: function (stream) {
      try {
        if (FS.isFile(stream.node.mode) && stream.nfd) {
          fs.closeSync(stream.nfd);
        }
      } catch (e) {
        if (!e.code) throw e;
        throw new FS.ErrnoError(-e.errno);
      }
    },
    read: function (stream, buffer, offset, length, position) {
      if (length === 0) return 0;
      try {
        return fs.readSync(
          stream.nfd,
          NODEFS.bufferFrom(buffer.buffer),
          offset,
          length,
          position,
        );
      } catch (e) {
        throw new FS.ErrnoError(-e.errno);
      }
    },
    write: function (stream, buffer, offset, length, position) {
      try {
        return fs.writeSync(
          stream.nfd,
          NODEFS.bufferFrom(buffer.buffer),
          offset,
          length,
          position,
        );
      } catch (e) {
        throw new FS.ErrnoError(-e.errno);
      }
    },
    llseek: function (stream, offset, whence) {
      var position = offset;
      if (whence === 1) {
        position += stream.position;
      } else if (whence === 2) {
        if (FS.isFile(stream.node.mode)) {
          try {
            var stat = fs.fstatSync(stream.nfd);
            position += stat.size;
          } catch (e) {
            throw new FS.ErrnoError(-e.errno);
          }
        }
      }
      if (position < 0) {
        throw new FS.ErrnoError(22);
      }
      return position;
    },
  },
};
var WORKERFS = {
  DIR_MODE: 16895,
  FILE_MODE: 33279,
  reader: null,
  mount: function (mount) {
    assert(ENVIRONMENT_IS_WORKER);
    if (!WORKERFS.reader) WORKERFS.reader = new FileReaderSync();
    var root = WORKERFS.createNode(null, "/", WORKERFS.DIR_MODE, 0);
    var createdParents = {};
    function ensureParent(path) {
      var parts = path.split("/");
      var parent = root;
      for (var i = 0; i < parts.length - 1; i++) {
        var curr = parts.slice(0, i + 1).join("/");
        if (!createdParents[curr]) {
          createdParents[curr] = WORKERFS.createNode(
            parent,
            parts[i],
            WORKERFS.DIR_MODE,
            0,
          );
        }
        parent = createdParents[curr];
      }
      return parent;
    }
    function base(path) {
      var parts = path.split("/");
      return parts[parts.length - 1];
    }
    Array.prototype.forEach.call(mount.opts["files"] || [], function (file) {
      WORKERFS.createNode(
        ensureParent(file.name),
        base(file.name),
        WORKERFS.FILE_MODE,
        0,
        file,
        file.lastModifiedDate,
      );
    });
    (mount.opts["blobs"] || []).forEach(function (obj) {
      WORKERFS.createNode(
        ensureParent(obj["name"]),
        base(obj["name"]),
        WORKERFS.FILE_MODE,
        0,
        obj["data"],
      );
    });
    (mount.opts["packages"] || []).forEach(function (pack) {
      pack["metadata"].files.forEach(function (file) {
        var name = file.filename.substr(1);
        WORKERFS.createNode(
          ensureParent(name),
          base(name),
          WORKERFS.FILE_MODE,
          0,
          pack["blob"].slice(file.start, file.end),
        );
      });
    });
    return root;
  },
  createNode: function (parent, name, mode, dev, contents, mtime) {
    var node = FS.createNode(parent, name, mode);
    node.mode = mode;
    node.node_ops = WORKERFS.node_ops;
    node.stream_ops = WORKERFS.stream_ops;
    node.timestamp = (mtime || new Date()).getTime();
    assert(WORKERFS.FILE_MODE !== WORKERFS.DIR_MODE);
    if (mode === WORKERFS.FILE_MODE) {
      node.size = contents.size;
      node.contents = contents;
    } else {
      node.size = 4096;
      node.contents = {};
    }
    if (parent) {
      parent.contents[name] = node;
    }
    return node;
  },
  node_ops: {
    getattr: function (node) {
      return {
        dev: 1,
        ino: undefined,
        mode: node.mode,
        nlink: 1,
        uid: 0,
        gid: 0,
        rdev: undefined,
        size: node.size,
        atime: new Date(node.timestamp),
        mtime: new Date(node.timestamp),
        ctime: new Date(node.timestamp),
        blksize: 4096,
        blocks: Math.ceil(node.size / 4096),
      };
    },
    setattr: function (node, attr) {
      if (attr.mode !== undefined) {
        node.mode = attr.mode;
      }
      if (attr.timestamp !== undefined) {
        node.timestamp = attr.timestamp;
      }
    },
    lookup: function (parent, name) {
      throw new FS.ErrnoError(2);
    },
    mknod: function (parent, name, mode, dev) {
      throw new FS.ErrnoError(1);
    },
    rename: function (oldNode, newDir, newName) {
      throw new FS.ErrnoError(1);
    },
    unlink: function (parent, name) {
      throw new FS.ErrnoError(1);
    },
    rmdir: function (parent, name) {
      throw new FS.ErrnoError(1);
    },
    readdir: function (node) {
      var entries = [".", ".."];
      for (var key in node.contents) {
        if (!node.contents.hasOwnProperty(key)) {
          continue;
        }
        entries.push(key);
      }
      return entries;
    },
    symlink: function (parent, newName, oldPath) {
      throw new FS.ErrnoError(1);
    },
    readlink: function (node) {
      throw new FS.ErrnoError(1);
    },
  },
  stream_ops: {
    read: function (stream, buffer, offset, length, position) {
      if (position >= stream.node.size) return 0;
      var chunk = stream.node.contents.slice(position, position + length);
      var ab = WORKERFS.reader.readAsArrayBuffer(chunk);
      buffer.set(new Uint8Array(ab), offset);
      return chunk.size;
    },
    write: function (stream, buffer, offset, length, position) {
      throw new FS.ErrnoError(5);
    },
    llseek: function (stream, offset, whence) {
      var position = offset;
      if (whence === 1) {
        position += stream.position;
      } else if (whence === 2) {
        if (FS.isFile(stream.node.mode)) {
          position += stream.node.size;
        }
      }
      if (position < 0) {
        throw new FS.ErrnoError(22);
      }
      return position;
    },
  },
};
var FS = {
  root: null,
  mounts: [],
  devices: {},
  streams: [],
  nextInode: 1,
  nameTable: null,
  currentPath: "/",
  initialized: false,
  ignorePermissions: true,
  trackingDelegate: {},
  tracking: { openFlags: { READ: 1, WRITE: 2 } },
  ErrnoError: null,
  genericErrors: {},
  filesystems: null,
  syncFSRequests: 0,
  handleFSError: function (e) {
    if (!(e instanceof FS.ErrnoError)) throw e + " : " + stackTrace();
    return ___setErrNo(e.errno);
  },
  lookupPath: function (path, opts) {
    path = PATH_FS.resolve(FS.cwd(), path);
    opts = opts || {};
    if (!path) return { path: "", node: null };
    var defaults = { follow_mount: true, recurse_count: 0 };
    for (var key in defaults) {
      if (opts[key] === undefined) {
        opts[key] = defaults[key];
      }
    }
    if (opts.recurse_count > 8) {
      throw new FS.ErrnoError(40);
    }
    var parts = PATH.normalizeArray(
      path.split("/").filter(function (p) {
        return !!p;
      }),
      false,
    );
    var current = FS.root;
    var current_path = "/";
    for (var i = 0; i < parts.length; i++) {
      var islast = i === parts.length - 1;
      if (islast && opts.parent) {
        break;
      }
      current = FS.lookupNode(current, parts[i]);
      current_path = PATH.join2(current_path, parts[i]);
      if (FS.isMountpoint(current)) {
        if (!islast || (islast && opts.follow_mount)) {
          current = current.mounted.root;
        }
      }
      if (!islast || opts.follow) {
        var count = 0;
        while (FS.isLink(current.mode)) {
          var link = FS.readlink(current_path);
          current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
          var lookup = FS.lookupPath(current_path, {
            recurse_count: opts.recurse_count,
          });
          current = lookup.node;
          if (count++ > 40) {
            throw new FS.ErrnoError(40);
          }
        }
      }
    }
    return { path: current_path, node: current };
  },
  getPath: function (node) {
    var path;
    while (true) {
      if (FS.isRoot(node)) {
        var mount = node.mount.mountpoint;
        if (!path) return mount;
        return mount[mount.length - 1] !== "/"
          ? mount + "/" + path
          : mount + path;
      }
      path = path ? node.name + "/" + path : node.name;
      node = node.parent;
    }
  },
  hashName: function (parentid, name) {
    var hash = 0;
    for (var i = 0; i < name.length; i++) {
      hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
    }
    return ((parentid + hash) >>> 0) % FS.nameTable.length;
  },
  hashAddNode: function (node) {
    var hash = FS.hashName(node.parent.id, node.name);
    node.name_next = FS.nameTable[hash];
    FS.nameTable[hash] = node;
  },
  hashRemoveNode: function (node) {
    var hash = FS.hashName(node.parent.id, node.name);
    if (FS.nameTable[hash] === node) {
      FS.nameTable[hash] = node.name_next;
    } else {
      var current = FS.nameTable[hash];
      while (current) {
        if (current.name_next === node) {
          current.name_next = node.name_next;
          break;
        }
        current = current.name_next;
      }
    }
  },
  lookupNode: function (parent, name) {
    var err = FS.mayLookup(parent);
    if (err) {
      throw new FS.ErrnoError(err, parent);
    }
    var hash = FS.hashName(parent.id, name);
    for (var node = FS.nameTable[hash]; node; node = node.name_next) {
      var nodeName = node.name;
      if (node.parent.id === parent.id && nodeName === name) {
        return node;
      }
    }
    return FS.lookup(parent, name);
  },
  createNode: function (parent, name, mode, rdev) {
    if (!FS.FSNode) {
      FS.FSNode = function (parent, name, mode, rdev) {
        if (!parent) {
          parent = this;
        }
        this.parent = parent;
        this.mount = parent.mount;
        this.mounted = null;
        this.id = FS.nextInode++;
        this.name = name;
        this.mode = mode;
        this.node_ops = {};
        this.stream_ops = {};
        this.rdev = rdev;
      };
      FS.FSNode.prototype = {};
      var readMode = 292 | 73;
      var writeMode = 146;
      Object.defineProperties(FS.FSNode.prototype, {
        read: {
          get: function () {
            return (this.mode & readMode) === readMode;
          },
          set: function (val) {
            val ? (this.mode |= readMode) : (this.mode &= ~readMode);
          },
        },
        write: {
          get: function () {
            return (this.mode & writeMode) === writeMode;
          },
          set: function (val) {
            val ? (this.mode |= writeMode) : (this.mode &= ~writeMode);
          },
        },
        isFolder: {
          get: function () {
            return FS.isDir(this.mode);
          },
        },
        isDevice: {
          get: function () {
            return FS.isChrdev(this.mode);
          },
        },
      });
    }
    var node = new FS.FSNode(parent, name, mode, rdev);
    FS.hashAddNode(node);
    return node;
  },
  destroyNode: function (node) {
    FS.hashRemoveNode(node);
  },
  isRoot: function (node) {
    return node === node.parent;
  },
  isMountpoint: function (node) {
    return !!node.mounted;
  },
  isFile: function (mode) {
    return (mode & 61440) === 32768;
  },
  isDir: function (mode) {
    return (mode & 61440) === 16384;
  },
  isLink: function (mode) {
    return (mode & 61440) === 40960;
  },
  isChrdev: function (mode) {
    return (mode & 61440) === 8192;
  },
  isBlkdev: function (mode) {
    return (mode & 61440) === 24576;
  },
  isFIFO: function (mode) {
    return (mode & 61440) === 4096;
  },
  isSocket: function (mode) {
    return (mode & 49152) === 49152;
  },
  flagModes: {
    r: 0,
    rs: 1052672,
    "r+": 2,
    w: 577,
    wx: 705,
    xw: 705,
    "w+": 578,
    "wx+": 706,
    "xw+": 706,
    a: 1089,
    ax: 1217,
    xa: 1217,
    "a+": 1090,
    "ax+": 1218,
    "xa+": 1218,
  },
  modeStringToFlags: function (str) {
    var flags = FS.flagModes[str];
    if (typeof flags === "undefined") {
      throw new Error("Unknown file open mode: " + str);
    }
    return flags;
  },
  flagsToPermissionString: function (flag) {
    var perms = ["r", "w", "rw"][flag & 3];
    if (flag & 512) {
      perms += "w";
    }
    return perms;
  },
  nodePermissions: function (node, perms) {
    if (FS.ignorePermissions) {
      return 0;
    }
    if (perms.indexOf("r") !== -1 && !(node.mode & 292)) {
      return 13;
    } else if (perms.indexOf("w") !== -1 && !(node.mode & 146)) {
      return 13;
    } else if (perms.indexOf("x") !== -1 && !(node.mode & 73)) {
      return 13;
    }
    return 0;
  },
  mayLookup: function (dir) {
    var err = FS.nodePermissions(dir, "x");
    if (err) return err;
    if (!dir.node_ops.lookup) return 13;
    return 0;
  },
  mayCreate: function (dir, name) {
    try {
      var node = FS.lookupNode(dir, name);
      return 17;
    } catch (e) {}
    return FS.nodePermissions(dir, "wx");
  },
  mayDelete: function (dir, name, isdir) {
    var node;
    try {
      node = FS.lookupNode(dir, name);
    } catch (e) {
      return e.errno;
    }
    var err = FS.nodePermissions(dir, "wx");
    if (err) {
      return err;
    }
    if (isdir) {
      if (!FS.isDir(node.mode)) {
        return 20;
      }
      if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
        return 16;
      }
    } else {
      if (FS.isDir(node.mode)) {
        return 21;
      }
    }
    return 0;
  },
  mayOpen: function (node, flags) {
    if (!node) {
      return 2;
    }
    if (FS.isLink(node.mode)) {
      return 40;
    } else if (FS.isDir(node.mode)) {
      if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
        return 21;
      }
    }
    return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
  },
  MAX_OPEN_FDS: 4096,
  nextfd: function (fd_start, fd_end) {
    fd_start = fd_start || 0;
    fd_end = fd_end || FS.MAX_OPEN_FDS;
    for (var fd = fd_start; fd <= fd_end; fd++) {
      if (!FS.streams[fd]) {
        return fd;
      }
    }
    throw new FS.ErrnoError(24);
  },
  getStream: function (fd) {
    return FS.streams[fd];
  },
  createStream: function (stream, fd_start, fd_end) {
    if (!FS.FSStream) {
      FS.FSStream = function () {};
      FS.FSStream.prototype = {};
      Object.defineProperties(FS.FSStream.prototype, {
        object: {
          get: function () {
            return this.node;
          },
          set: function (val) {
            this.node = val;
          },
        },
        isRead: {
          get: function () {
            return (this.flags & 2097155) !== 1;
          },
        },
        isWrite: {
          get: function () {
            return (this.flags & 2097155) !== 0;
          },
        },
        isAppend: {
          get: function () {
            return this.flags & 1024;
          },
        },
      });
    }
    var newStream = new FS.FSStream();
    for (var p in stream) {
      newStream[p] = stream[p];
    }
    stream = newStream;
    var fd = FS.nextfd(fd_start, fd_end);
    stream.fd = fd;
    FS.streams[fd] = stream;
    return stream;
  },
  closeStream: function (fd) {
    FS.streams[fd] = null;
  },
  chrdev_stream_ops: {
    open: function (stream) {
      var device = FS.getDevice(stream.node.rdev);
      stream.stream_ops = device.stream_ops;
      if (stream.stream_ops.open) {
        stream.stream_ops.open(stream);
      }
    },
    llseek: function () {
      throw new FS.ErrnoError(29);
    },
  },
  major: function (dev) {
    return dev >> 8;
  },
  minor: function (dev) {
    return dev & 255;
  },
  makedev: function (ma, mi) {
    return (ma << 8) | mi;
  },
  registerDevice: function (dev, ops) {
    FS.devices[dev] = { stream_ops: ops };
  },
  getDevice: function (dev) {
    return FS.devices[dev];
  },
  getMounts: function (mount) {
    var mounts = [];
    var check = [mount];
    while (check.length) {
      var m = check.pop();
      mounts.push(m);
      check.push.apply(check, m.mounts);
    }
    return mounts;
  },
  syncfs: function (populate, callback) {
    if (typeof populate === "function") {
      callback = populate;
      populate = false;
    }
    FS.syncFSRequests++;
    if (FS.syncFSRequests > 1) {
      console.log(
        "warning: " +
          FS.syncFSRequests +
          " FS.syncfs operations in flight at once, probably just doing extra work",
      );
    }
    var mounts = FS.getMounts(FS.root.mount);
    var completed = 0;
    function doCallback(err) {
      FS.syncFSRequests--;
      return callback(err);
    }
    function done(err) {
      if (err) {
        if (!done.errored) {
          done.errored = true;
          return doCallback(err);
        }
        return;
      }
      if (++completed >= mounts.length) {
        doCallback(null);
      }
    }
    mounts.forEach(function (mount) {
      if (!mount.type.syncfs) {
        return done(null);
      }
      mount.type.syncfs(mount, populate, done);
    });
  },
  mount: function (type, opts, mountpoint) {
    var root = mountpoint === "/";
    var pseudo = !mountpoint;
    var node;
    if (root && FS.root) {
      throw new FS.ErrnoError(16);
    } else if (!root && !pseudo) {
      var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
      mountpoint = lookup.path;
      node = lookup.node;
      if (FS.isMountpoint(node)) {
        throw new FS.ErrnoError(16);
      }
      if (!FS.isDir(node.mode)) {
        throw new FS.ErrnoError(20);
      }
    }
    var mount = { type: type, opts: opts, mountpoint: mountpoint, mounts: [] };
    var mountRoot = type.mount(mount);
    mountRoot.mount = mount;
    mount.root = mountRoot;
    if (root) {
      FS.root = mountRoot;
    } else if (node) {
      node.mounted = mount;
      if (node.mount) {
        node.mount.mounts.push(mount);
      }
    }
    return mountRoot;
  },
  unmount: function (mountpoint) {
    var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
    if (!FS.isMountpoint(lookup.node)) {
      throw new FS.ErrnoError(22);
    }
    var node = lookup.node;
    var mount = node.mounted;
    var mounts = FS.getMounts(mount);
    Object.keys(FS.nameTable).forEach(function (hash) {
      var current = FS.nameTable[hash];
      while (current) {
        var next = current.name_next;
        if (mounts.indexOf(current.mount) !== -1) {
          FS.destroyNode(current);
        }
        current = next;
      }
    });
    node.mounted = null;
    var idx = node.mount.mounts.indexOf(mount);
    node.mount.mounts.splice(idx, 1);
  },
  lookup: function (parent, name) {
    return parent.node_ops.lookup(parent, name);
  },
  mknod: function (path, mode, dev) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    if (!name || name === "." || name === "..") {
      throw new FS.ErrnoError(22);
    }
    var err = FS.mayCreate(parent, name);
    if (err) {
      throw new FS.ErrnoError(err);
    }
    if (!parent.node_ops.mknod) {
      throw new FS.ErrnoError(1);
    }
    return parent.node_ops.mknod(parent, name, mode, dev);
  },
  create: function (path, mode) {
    mode = mode !== undefined ? mode : 438;
    mode &= 4095;
    mode |= 32768;
    return FS.mknod(path, mode, 0);
  },
  mkdir: function (path, mode) {
    mode = mode !== undefined ? mode : 511;
    mode &= 511 | 512;
    mode |= 16384;
    return FS.mknod(path, mode, 0);
  },
  mkdirTree: function (path, mode) {
    var dirs = path.split("/");
    var d = "";
    for (var i = 0; i < dirs.length; ++i) {
      if (!dirs[i]) continue;
      d += "/" + dirs[i];
      try {
        FS.mkdir(d, mode);
      } catch (e) {
        if (e.errno != 17) throw e;
      }
    }
  },
  mkdev: function (path, mode, dev) {
    if (typeof dev === "undefined") {
      dev = mode;
      mode = 438;
    }
    mode |= 8192;
    return FS.mknod(path, mode, dev);
  },
  symlink: function (oldpath, newpath) {
    if (!PATH_FS.resolve(oldpath)) {
      throw new FS.ErrnoError(2);
    }
    var lookup = FS.lookupPath(newpath, { parent: true });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(2);
    }
    var newname = PATH.basename(newpath);
    var err = FS.mayCreate(parent, newname);
    if (err) {
      throw new FS.ErrnoError(err);
    }
    if (!parent.node_ops.symlink) {
      throw new FS.ErrnoError(1);
    }
    return parent.node_ops.symlink(parent, newname, oldpath);
  },
  rename: function (old_path, new_path) {
    var old_dirname = PATH.dirname(old_path);
    var new_dirname = PATH.dirname(new_path);
    var old_name = PATH.basename(old_path);
    var new_name = PATH.basename(new_path);
    var lookup, old_dir, new_dir;
    try {
      lookup = FS.lookupPath(old_path, { parent: true });
      old_dir = lookup.node;
      lookup = FS.lookupPath(new_path, { parent: true });
      new_dir = lookup.node;
    } catch (e) {
      throw new FS.ErrnoError(16);
    }
    if (!old_dir || !new_dir) throw new FS.ErrnoError(2);
    if (old_dir.mount !== new_dir.mount) {
      throw new FS.ErrnoError(18);
    }
    var old_node = FS.lookupNode(old_dir, old_name);
    var relative = PATH_FS.relative(old_path, new_dirname);
    if (relative.charAt(0) !== ".") {
      throw new FS.ErrnoError(22);
    }
    relative = PATH_FS.relative(new_path, old_dirname);
    if (relative.charAt(0) !== ".") {
      throw new FS.ErrnoError(39);
    }
    var new_node;
    try {
      new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {}
    if (old_node === new_node) {
      return;
    }
    var isdir = FS.isDir(old_node.mode);
    var err = FS.mayDelete(old_dir, old_name, isdir);
    if (err) {
      throw new FS.ErrnoError(err);
    }
    err = new_node
      ? FS.mayDelete(new_dir, new_name, isdir)
      : FS.mayCreate(new_dir, new_name);
    if (err) {
      throw new FS.ErrnoError(err);
    }
    if (!old_dir.node_ops.rename) {
      throw new FS.ErrnoError(1);
    }
    if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
      throw new FS.ErrnoError(16);
    }
    if (new_dir !== old_dir) {
      err = FS.nodePermissions(old_dir, "w");
      if (err) {
        throw new FS.ErrnoError(err);
      }
    }
    try {
      if (FS.trackingDelegate["willMovePath"]) {
        FS.trackingDelegate["willMovePath"](old_path, new_path);
      }
    } catch (e) {
      console.log(
        "FS.trackingDelegate['willMovePath']('" +
          old_path +
          "', '" +
          new_path +
          "') threw an exception: " +
          e.message,
      );
    }
    FS.hashRemoveNode(old_node);
    try {
      old_dir.node_ops.rename(old_node, new_dir, new_name);
    } catch (e) {
      throw e;
    } finally {
      FS.hashAddNode(old_node);
    }
    try {
      if (FS.trackingDelegate["onMovePath"])
        FS.trackingDelegate["onMovePath"](old_path, new_path);
    } catch (e) {
      console.log(
        "FS.trackingDelegate['onMovePath']('" +
          old_path +
          "', '" +
          new_path +
          "') threw an exception: " +
          e.message,
      );
    }
  },
  rmdir: function (path) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var err = FS.mayDelete(parent, name, true);
    if (err) {
      throw new FS.ErrnoError(err);
    }
    if (!parent.node_ops.rmdir) {
      throw new FS.ErrnoError(1);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(16);
    }
    try {
      if (FS.trackingDelegate["willDeletePath"]) {
        FS.trackingDelegate["willDeletePath"](path);
      }
    } catch (e) {
      console.log(
        "FS.trackingDelegate['willDeletePath']('" +
          path +
          "') threw an exception: " +
          e.message,
      );
    }
    parent.node_ops.rmdir(parent, name);
    FS.destroyNode(node);
    try {
      if (FS.trackingDelegate["onDeletePath"])
        FS.trackingDelegate["onDeletePath"](path);
    } catch (e) {
      console.log(
        "FS.trackingDelegate['onDeletePath']('" +
          path +
          "') threw an exception: " +
          e.message,
      );
    }
  },
  readdir: function (path) {
    var lookup = FS.lookupPath(path, { follow: true });
    var node = lookup.node;
    if (!node.node_ops.readdir) {
      throw new FS.ErrnoError(20);
    }
    return node.node_ops.readdir(node);
  },
  unlink: function (path) {
    var lookup = FS.lookupPath(path, { parent: true });
    var parent = lookup.node;
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var err = FS.mayDelete(parent, name, false);
    if (err) {
      throw new FS.ErrnoError(err);
    }
    if (!parent.node_ops.unlink) {
      throw new FS.ErrnoError(1);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(16);
    }
    try {
      if (FS.trackingDelegate["willDeletePath"]) {
        FS.trackingDelegate["willDeletePath"](path);
      }
    } catch (e) {
      console.log(
        "FS.trackingDelegate['willDeletePath']('" +
          path +
          "') threw an exception: " +
          e.message,
      );
    }
    parent.node_ops.unlink(parent, name);
    FS.destroyNode(node);
    try {
      if (FS.trackingDelegate["onDeletePath"])
        FS.trackingDelegate["onDeletePath"](path);
    } catch (e) {
      console.log(
        "FS.trackingDelegate['onDeletePath']('" +
          path +
          "') threw an exception: " +
          e.message,
      );
    }
  },
  readlink: function (path) {
    var lookup = FS.lookupPath(path);
    var link = lookup.node;
    if (!link) {
      throw new FS.ErrnoError(2);
    }
    if (!link.node_ops.readlink) {
      throw new FS.ErrnoError(22);
    }
    return PATH_FS.resolve(
      FS.getPath(link.parent),
      link.node_ops.readlink(link),
    );
  },
  stat: function (path, dontFollow) {
    var lookup = FS.lookupPath(path, { follow: !dontFollow });
    var node = lookup.node;
    if (!node) {
      throw new FS.ErrnoError(2);
    }
    if (!node.node_ops.getattr) {
      throw new FS.ErrnoError(1);
    }
    return node.node_ops.getattr(node);
  },
  lstat: function (path) {
    return FS.stat(path, true);
  },
  chmod: function (path, mode, dontFollow) {
    var node;
    if (typeof path === "string") {
      var lookup = FS.lookupPath(path, { follow: !dontFollow });
      node = lookup.node;
    } else {
      node = path;
    }
    if (!node.node_ops.setattr) {
      throw new FS.ErrnoError(1);
    }
    node.node_ops.setattr(node, {
      mode: (mode & 4095) | (node.mode & ~4095),
      timestamp: Date.now(),
    });
  },
  lchmod: function (path, mode) {
    FS.chmod(path, mode, true);
  },
  fchmod: function (fd, mode) {
    var stream = FS.getStream(fd);
    if (!stream) {
      throw new FS.ErrnoError(9);
    }
    FS.chmod(stream.node, mode);
  },
  chown: function (path, uid, gid, dontFollow) {
    var node;
    if (typeof path === "string") {
      var lookup = FS.lookupPath(path, { follow: !dontFollow });
      node = lookup.node;
    } else {
      node = path;
    }
    if (!node.node_ops.setattr) {
      throw new FS.ErrnoError(1);
    }
    node.node_ops.setattr(node, { timestamp: Date.now() });
  },
  lchown: function (path, uid, gid) {
    FS.chown(path, uid, gid, true);
  },
  fchown: function (fd, uid, gid) {
    var stream = FS.getStream(fd);
    if (!stream) {
      throw new FS.ErrnoError(9);
    }
    FS.chown(stream.node, uid, gid);
  },
  truncate: function (path, len) {
    if (len < 0) {
      throw new FS.ErrnoError(22);
    }
    var node;
    if (typeof path === "string") {
      var lookup = FS.lookupPath(path, { follow: true });
      node = lookup.node;
    } else {
      node = path;
    }
    if (!node.node_ops.setattr) {
      throw new FS.ErrnoError(1);
    }
    if (FS.isDir(node.mode)) {
      throw new FS.ErrnoError(21);
    }
    if (!FS.isFile(node.mode)) {
      throw new FS.ErrnoError(22);
    }
    var err = FS.nodePermissions(node, "w");
    if (err) {
      throw new FS.ErrnoError(err);
    }
    node.node_ops.setattr(node, { size: len, timestamp: Date.now() });
  },
  ftruncate: function (fd, len) {
    var stream = FS.getStream(fd);
    if (!stream) {
      throw new FS.ErrnoError(9);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(22);
    }
    FS.truncate(stream.node, len);
  },
  utime: function (path, atime, mtime) {
    var lookup = FS.lookupPath(path, { follow: true });
    var node = lookup.node;
    node.node_ops.setattr(node, { timestamp: Math.max(atime, mtime) });
  },
  open: function (path, flags, mode, fd_start, fd_end) {
    if (path === "") {
      throw new FS.ErrnoError(2);
    }
    flags = typeof flags === "string" ? FS.modeStringToFlags(flags) : flags;
    mode = typeof mode === "undefined" ? 438 : mode;
    if (flags & 64) {
      mode = (mode & 4095) | 32768;
    } else {
      mode = 0;
    }
    var node;
    if (typeof path === "object") {
      node = path;
    } else {
      path = PATH.normalize(path);
      try {
        var lookup = FS.lookupPath(path, { follow: !(flags & 131072) });
        node = lookup.node;
      } catch (e) {}
    }
    var created = false;
    if (flags & 64) {
      if (node) {
        if (flags & 128) {
          throw new FS.ErrnoError(17);
        }
      } else {
        node = FS.mknod(path, mode, 0);
        created = true;
      }
    }
    if (!node) {
      throw new FS.ErrnoError(2);
    }
    if (FS.isChrdev(node.mode)) {
      flags &= ~512;
    }
    if (flags & 65536 && !FS.isDir(node.mode)) {
      throw new FS.ErrnoError(20);
    }
    if (!created) {
      var err = FS.mayOpen(node, flags);
      if (err) {
        throw new FS.ErrnoError(err);
      }
    }
    if (flags & 512) {
      FS.truncate(node, 0);
    }
    flags &= ~(128 | 512);
    var stream = FS.createStream(
      {
        node: node,
        path: FS.getPath(node),
        flags: flags,
        seekable: true,
        position: 0,
        stream_ops: node.stream_ops,
        ungotten: [],
        error: false,
      },
      fd_start,
      fd_end,
    );
    if (stream.stream_ops.open) {
      stream.stream_ops.open(stream);
    }
    if (Module["logReadFiles"] && !(flags & 1)) {
      if (!FS.readFiles) FS.readFiles = {};
      if (!(path in FS.readFiles)) {
        FS.readFiles[path] = 1;
        console.log("FS.trackingDelegate error on read file: " + path);
      }
    }
    try {
      if (FS.trackingDelegate["onOpenFile"]) {
        var trackingFlags = 0;
        if ((flags & 2097155) !== 1) {
          trackingFlags |= FS.tracking.openFlags.READ;
        }
        if ((flags & 2097155) !== 0) {
          trackingFlags |= FS.tracking.openFlags.WRITE;
        }
        FS.trackingDelegate["onOpenFile"](path, trackingFlags);
      }
    } catch (e) {
      console.log(
        "FS.trackingDelegate['onOpenFile']('" +
          path +
          "', flags) threw an exception: " +
          e.message,
      );
    }
    return stream;
  },
  close: function (stream) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(9);
    }
    if (stream.getdents) stream.getdents = null;
    try {
      if (stream.stream_ops.close) {
        stream.stream_ops.close(stream);
      }
    } catch (e) {
      throw e;
    } finally {
      FS.closeStream(stream.fd);
    }
    stream.fd = null;
  },
  isClosed: function (stream) {
    return stream.fd === null;
  },
  llseek: function (stream, offset, whence) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(9);
    }
    if (!stream.seekable || !stream.stream_ops.llseek) {
      throw new FS.ErrnoError(29);
    }
    if (whence != 0 && whence != 1 && whence != 2) {
      throw new FS.ErrnoError(22);
    }
    stream.position = stream.stream_ops.llseek(stream, offset, whence);
    stream.ungotten = [];
    return stream.position;
  },
  read: function (stream, buffer, offset, length, position) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(22);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(9);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(9);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(21);
    }
    if (!stream.stream_ops.read) {
      throw new FS.ErrnoError(22);
    }
    var seeking = typeof position !== "undefined";
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(29);
    }
    var bytesRead = stream.stream_ops.read(
      stream,
      buffer,
      offset,
      length,
      position,
    );
    if (!seeking) stream.position += bytesRead;
    return bytesRead;
  },
  write: function (stream, buffer, offset, length, position, canOwn) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(22);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(9);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(9);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(21);
    }
    if (!stream.stream_ops.write) {
      throw new FS.ErrnoError(22);
    }
    if (stream.flags & 1024) {
      FS.llseek(stream, 0, 2);
    }
    var seeking = typeof position !== "undefined";
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(29);
    }
    var bytesWritten = stream.stream_ops.write(
      stream,
      buffer,
      offset,
      length,
      position,
      canOwn,
    );
    if (!seeking) stream.position += bytesWritten;
    try {
      if (stream.path && FS.trackingDelegate["onWriteToFile"])
        FS.trackingDelegate["onWriteToFile"](stream.path);
    } catch (e) {
      console.log(
        "FS.trackingDelegate['onWriteToFile']('" +
          stream.path +
          "') threw an exception: " +
          e.message,
      );
    }
    return bytesWritten;
  },
  allocate: function (stream, offset, length) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(9);
    }
    if (offset < 0 || length <= 0) {
      throw new FS.ErrnoError(22);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(9);
    }
    if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(19);
    }
    if (!stream.stream_ops.allocate) {
      throw new FS.ErrnoError(95);
    }
    stream.stream_ops.allocate(stream, offset, length);
  },
  mmap: function (stream, buffer, offset, length, position, prot, flags) {
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(13);
    }
    if (!stream.stream_ops.mmap) {
      throw new FS.ErrnoError(19);
    }
    return stream.stream_ops.mmap(
      stream,
      buffer,
      offset,
      length,
      position,
      prot,
      flags,
    );
  },
  msync: function (stream, buffer, offset, length, mmapFlags) {
    if (!stream || !stream.stream_ops.msync) {
      return 0;
    }
    return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
  },
  munmap: function (stream) {
    return 0;
  },
  ioctl: function (stream, cmd, arg) {
    if (!stream.stream_ops.ioctl) {
      throw new FS.ErrnoError(25);
    }
    return stream.stream_ops.ioctl(stream, cmd, arg);
  },
  readFile: function (path, opts) {
    opts = opts || {};
    opts.flags = opts.flags || "r";
    opts.encoding = opts.encoding || "binary";
    if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
      throw new Error('Invalid encoding type "' + opts.encoding + '"');
    }
    var ret;
    var stream = FS.open(path, opts.flags);
    var stat = FS.stat(path);
    var length = stat.size;
    var buf = new Uint8Array(length);
    FS.read(stream, buf, 0, length, 0);
    if (opts.encoding === "utf8") {
      ret = UTF8ArrayToString(buf, 0);
    } else if (opts.encoding === "binary") {
      ret = buf;
    }
    FS.close(stream);
    return ret;
  },
  writeFile: function (path, data, opts) {
    opts = opts || {};
    opts.flags = opts.flags || "w";
    var stream = FS.open(path, opts.flags, opts.mode);
    if (typeof data === "string") {
      var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
      var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
      FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
    } else if (ArrayBuffer.isView(data)) {
      FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
    } else {
      throw new Error("Unsupported data type");
    }
    FS.close(stream);
  },
  cwd: function () {
    return FS.currentPath;
  },
  chdir: function (path) {
    var lookup = FS.lookupPath(path, { follow: true });
    if (lookup.node === null) {
      throw new FS.ErrnoError(2);
    }
    if (!FS.isDir(lookup.node.mode)) {
      throw new FS.ErrnoError(20);
    }
    var err = FS.nodePermissions(lookup.node, "x");
    if (err) {
      throw new FS.ErrnoError(err);
    }
    FS.currentPath = lookup.path;
  },
  createDefaultDirectories: function () {
    FS.mkdir("/tmp");
    FS.mkdir("/home");
    FS.mkdir("/home/web_user");
  },
  createDefaultDevices: function () {
    FS.mkdir("/dev");
    FS.registerDevice(FS.makedev(1, 3), {
      read: function () {
        return 0;
      },
      write: function (stream, buffer, offset, length, pos) {
        return length;
      },
    });
    FS.mkdev("/dev/null", FS.makedev(1, 3));
    TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
    TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
    FS.mkdev("/dev/tty", FS.makedev(5, 0));
    FS.mkdev("/dev/tty1", FS.makedev(6, 0));
    var random_device;
    if (
      typeof crypto === "object" &&
      typeof crypto["getRandomValues"] === "function"
    ) {
      var randomBuffer = new Uint8Array(1);
      random_device = function () {
        crypto.getRandomValues(randomBuffer);
        return randomBuffer[0];
      };
    } else if (ENVIRONMENT_IS_NODE) {
      try {
        var crypto_module = require("crypto");
        random_device = function () {
          return crypto_module["randomBytes"](1)[0];
        };
      } catch (e) {}
    } else {
    }
    if (!random_device) {
      random_device = function () {
        abort("random_device");
      };
    }
    FS.createDevice("/dev", "random", random_device);
    FS.createDevice("/dev", "urandom", random_device);
    FS.mkdir("/dev/shm");
    FS.mkdir("/dev/shm/tmp");
  },
  createSpecialDirectories: function () {
    FS.mkdir("/proc");
    FS.mkdir("/proc/self");
    FS.mkdir("/proc/self/fd");
    FS.mount(
      {
        mount: function () {
          var node = FS.createNode("/proc/self", "fd", 16384 | 511, 73);
          node.node_ops = {
            lookup: function (parent, name) {
              var fd = +name;
              var stream = FS.getStream(fd);
              if (!stream) throw new FS.ErrnoError(9);
              var ret = {
                parent: null,
                mount: { mountpoint: "fake" },
                node_ops: {
                  readlink: function () {
                    return stream.path;
                  },
                },
              };
              ret.parent = ret;
              return ret;
            },
          };
          return node;
        },
      },
      {},
      "/proc/self/fd",
    );
  },
  createStandardStreams: function () {
    if (Module["stdin"]) {
      FS.createDevice("/dev", "stdin", Module["stdin"]);
    } else {
      FS.symlink("/dev/tty", "/dev/stdin");
    }
    if (Module["stdout"]) {
      FS.createDevice("/dev", "stdout", null, Module["stdout"]);
    } else {
      FS.symlink("/dev/tty", "/dev/stdout");
    }
    if (Module["stderr"]) {
      FS.createDevice("/dev", "stderr", null, Module["stderr"]);
    } else {
      FS.symlink("/dev/tty1", "/dev/stderr");
    }
    var stdin = FS.open("/dev/stdin", "r");
    var stdout = FS.open("/dev/stdout", "w");
    var stderr = FS.open("/dev/stderr", "w");
  },
  ensureErrnoError: function () {
    if (FS.ErrnoError) return;
    FS.ErrnoError = function ErrnoError(errno, node) {
      this.node = node;
      this.setErrno = function (errno) {
        this.errno = errno;
      };
      this.setErrno(errno);
      this.message = "FS error";
      if (this.stack)
        Object.defineProperty(this, "stack", {
          value: new Error().stack,
          writable: true,
        });
    };
    FS.ErrnoError.prototype = new Error();
    FS.ErrnoError.prototype.constructor = FS.ErrnoError;
    [2].forEach(function (code) {
      FS.genericErrors[code] = new FS.ErrnoError(code);
      FS.genericErrors[code].stack = "<generic error, no stack>";
    });
  },
  staticInit: function () {
    FS.ensureErrnoError();
    FS.nameTable = new Array(4096);
    FS.mount(MEMFS, {}, "/");
    FS.createDefaultDirectories();
    FS.createDefaultDevices();
    FS.createSpecialDirectories();
    FS.filesystems = {
      MEMFS: MEMFS,
      IDBFS: IDBFS,
      NODEFS: NODEFS,
      WORKERFS: WORKERFS,
    };
  },
  init: function (input, output, error) {
    FS.init.initialized = true;
    FS.ensureErrnoError();
    Module["stdin"] = input || Module["stdin"];
    Module["stdout"] = output || Module["stdout"];
    Module["stderr"] = error || Module["stderr"];
    FS.createStandardStreams();
  },
  quit: function () {
    FS.init.initialized = false;
    var fflush = Module["_fflush"];
    if (fflush) fflush(0);
    for (var i = 0; i < FS.streams.length; i++) {
      var stream = FS.streams[i];
      if (!stream) {
        continue;
      }
      FS.close(stream);
    }
  },
  getMode: function (canRead, canWrite) {
    var mode = 0;
    if (canRead) mode |= 292 | 73;
    if (canWrite) mode |= 146;
    return mode;
  },
  joinPath: function (parts, forceRelative) {
    var path = PATH.join.apply(null, parts);
    if (forceRelative && path[0] == "/") path = path.substr(1);
    return path;
  },
  absolutePath: function (relative, base) {
    return PATH_FS.resolve(base, relative);
  },
  standardizePath: function (path) {
    return PATH.normalize(path);
  },
  findObject: function (path, dontResolveLastLink) {
    var ret = FS.analyzePath(path, dontResolveLastLink);
    if (ret.exists) {
      return ret.object;
    } else {
      ___setErrNo(ret.error);
      return null;
    }
  },
  analyzePath: function (path, dontResolveLastLink) {
    try {
      var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
      path = lookup.path;
    } catch (e) {}
    var ret = {
      isRoot: false,
      exists: false,
      error: 0,
      name: null,
      path: null,
      object: null,
      parentExists: false,
      parentPath: null,
      parentObject: null,
    };
    try {
      var lookup = FS.lookupPath(path, { parent: true });
      ret.parentExists = true;
      ret.parentPath = lookup.path;
      ret.parentObject = lookup.node;
      ret.name = PATH.basename(path);
      lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
      ret.exists = true;
      ret.path = lookup.path;
      ret.object = lookup.node;
      ret.name = lookup.node.name;
      ret.isRoot = lookup.path === "/";
    } catch (e) {
      ret.error = e.errno;
    }
    return ret;
  },
  createFolder: function (parent, name, canRead, canWrite) {
    var path = PATH.join2(
      typeof parent === "string" ? parent : FS.getPath(parent),
      name,
    );
    var mode = FS.getMode(canRead, canWrite);
    return FS.mkdir(path, mode);
  },
  createPath: function (parent, path, canRead, canWrite) {
    parent = typeof parent === "string" ? parent : FS.getPath(parent);
    var parts = path.split("/").reverse();
    while (parts.length) {
      var part = parts.pop();
      if (!part) continue;
      var current = PATH.join2(parent, part);
      try {
        FS.mkdir(current);
      } catch (e) {}
      parent = current;
    }
    return current;
  },
  createFile: function (parent, name, properties, canRead, canWrite) {
    var path = PATH.join2(
      typeof parent === "string" ? parent : FS.getPath(parent),
      name,
    );
    var mode = FS.getMode(canRead, canWrite);
    return FS.create(path, mode);
  },
  createDataFile: function (parent, name, data, canRead, canWrite, canOwn) {
    var path = name
      ? PATH.join2(
          typeof parent === "string" ? parent : FS.getPath(parent),
          name,
        )
      : parent;
    var mode = FS.getMode(canRead, canWrite);
    var node = FS.create(path, mode);
    if (data) {
      if (typeof data === "string") {
        var arr = new Array(data.length);
        for (var i = 0, len = data.length; i < len; ++i)
          arr[i] = data.charCodeAt(i);
        data = arr;
      }
      FS.chmod(node, mode | 146);
      var stream = FS.open(node, "w");
      FS.write(stream, data, 0, data.length, 0, canOwn);
      FS.close(stream);
      FS.chmod(node, mode);
    }
    return node;
  },
  createDevice: function (parent, name, input, output) {
    var path = PATH.join2(
      typeof parent === "string" ? parent : FS.getPath(parent),
      name,
    );
    var mode = FS.getMode(!!input, !!output);
    if (!FS.createDevice.major) FS.createDevice.major = 64;
    var dev = FS.makedev(FS.createDevice.major++, 0);
    FS.registerDevice(dev, {
      open: function (stream) {
        stream.seekable = false;
      },
      close: function (stream) {
        if (output && output.buffer && output.buffer.length) {
          output(10);
        }
      },
      read: function (stream, buffer, offset, length, pos) {
        var bytesRead = 0;
        for (var i = 0; i < length; i++) {
          var result;
          try {
            result = input();
          } catch (e) {
            throw new FS.ErrnoError(5);
          }
          if (result === undefined && bytesRead === 0) {
            throw new FS.ErrnoError(11);
          }
          if (result === null || result === undefined) break;
          bytesRead++;
          buffer[offset + i] = result;
        }
        if (bytesRead) {
          stream.node.timestamp = Date.now();
        }
        return bytesRead;
      },
      write: function (stream, buffer, offset, length, pos) {
        for (var i = 0; i < length; i++) {
          try {
            output(buffer[offset + i]);
          } catch (e) {
            throw new FS.ErrnoError(5);
          }
        }
        if (length) {
          stream.node.timestamp = Date.now();
        }
        return i;
      },
    });
    return FS.mkdev(path, mode, dev);
  },
  createLink: function (parent, name, target, canRead, canWrite) {
    var path = PATH.join2(
      typeof parent === "string" ? parent : FS.getPath(parent),
      name,
    );
    return FS.symlink(target, path);
  },
  forceLoadFile: function (obj) {
    if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
    var success = true;
    if (typeof XMLHttpRequest !== "undefined") {
      throw new Error(
        "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
      );
    } else if (Module["read"]) {
      try {
        obj.contents = intArrayFromString(Module["read"](obj.url), true);
        obj.usedBytes = obj.contents.length;
      } catch (e) {
        success = false;
      }
    } else {
      throw new Error("Cannot load without read() or XMLHttpRequest.");
    }
    if (!success) ___setErrNo(5);
    return success;
  },
  createLazyFile: function (parent, name, url, canRead, canWrite) {
    function LazyUint8Array() {
      this.lengthKnown = false;
      this.chunks = [];
    }
    LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
      if (idx > this.length - 1 || idx < 0) {
        return undefined;
      }
      var chunkOffset = idx % this.chunkSize;
      var chunkNum = (idx / this.chunkSize) | 0;
      return this.getter(chunkNum)[chunkOffset];
    };
    LazyUint8Array.prototype.setDataGetter =
      function LazyUint8Array_setDataGetter(getter) {
        this.getter = getter;
      };
    LazyUint8Array.prototype.cacheLength =
      function LazyUint8Array_cacheLength() {
        var xhr = new XMLHttpRequest();
        xhr.open("HEAD", url, false);
        xhr.send(null);
        if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
          throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
        var datalength = Number(xhr.getResponseHeader("Content-length"));
        var header;
        var hasByteServing =
          (header = xhr.getResponseHeader("Accept-Ranges")) &&
          header === "bytes";
        var usesGzip =
          (header = xhr.getResponseHeader("Content-Encoding")) &&
          header === "gzip";
        var chunkSize = 1024 * 1024;
        if (!hasByteServing) chunkSize = datalength;
        var doXHR = function (from, to) {
          if (from > to)
            throw new Error(
              "invalid range (" + from + ", " + to + ") or no bytes requested!",
            );
          if (to > datalength - 1)
            throw new Error(
              "only " + datalength + " bytes available! programmer error!",
            );
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          if (datalength !== chunkSize)
            xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
          if (typeof Uint8Array != "undefined")
            xhr.responseType = "arraybuffer";
          if (xhr.overrideMimeType) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
          }
          xhr.send(null);
          if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
            throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          if (xhr.response !== undefined) {
            return new Uint8Array(xhr.response || []);
          } else {
            return intArrayFromString(xhr.responseText || "", true);
          }
        };
        var lazyArray = this;
        lazyArray.setDataGetter(function (chunkNum) {
          var start = chunkNum * chunkSize;
          var end = (chunkNum + 1) * chunkSize - 1;
          end = Math.min(end, datalength - 1);
          if (typeof lazyArray.chunks[chunkNum] === "undefined") {
            lazyArray.chunks[chunkNum] = doXHR(start, end);
          }
          if (typeof lazyArray.chunks[chunkNum] === "undefined")
            throw new Error("doXHR failed!");
          return lazyArray.chunks[chunkNum];
        });
        if (usesGzip || !datalength) {
          chunkSize = datalength = 1;
          datalength = this.getter(0).length;
          chunkSize = datalength;
          console.log(
            "LazyFiles on gzip forces download of the whole file when length is accessed",
          );
        }
        this._length = datalength;
        this._chunkSize = chunkSize;
        this.lengthKnown = true;
      };
    if (typeof XMLHttpRequest !== "undefined") {
      if (!ENVIRONMENT_IS_WORKER)
        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
      var lazyArray = new LazyUint8Array();
      Object.defineProperties(lazyArray, {
        length: {
          get: function () {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._length;
          },
        },
        chunkSize: {
          get: function () {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._chunkSize;
          },
        },
      });
      var properties = { isDevice: false, contents: lazyArray };
    } else {
      var properties = { isDevice: false, url: url };
    }
    var node = FS.createFile(parent, name, properties, canRead, canWrite);
    if (properties.contents) {
      node.contents = properties.contents;
    } else if (properties.url) {
      node.contents = null;
      node.url = properties.url;
    }
    Object.defineProperties(node, {
      usedBytes: {
        get: function () {
          return this.contents.length;
        },
      },
    });
    var stream_ops = {};
    var keys = Object.keys(node.stream_ops);
    keys.forEach(function (key) {
      var fn = node.stream_ops[key];
      stream_ops[key] = function forceLoadLazyFile() {
        if (!FS.forceLoadFile(node)) {
          throw new FS.ErrnoError(5);
        }
        return fn.apply(null, arguments);
      };
    });
    stream_ops.read = function stream_ops_read(
      stream,
      buffer,
      offset,
      length,
      position,
    ) {
      if (!FS.forceLoadFile(node)) {
        throw new FS.ErrnoError(5);
      }
      var contents = stream.node.contents;
      if (position >= contents.length) return 0;
      var size = Math.min(contents.length - position, length);
      if (contents.slice) {
        for (var i = 0; i < size; i++) {
          buffer[offset + i] = contents[position + i];
        }
      } else {
        for (var i = 0; i < size; i++) {
          buffer[offset + i] = contents.get(position + i);
        }
      }
      return size;
    };
    node.stream_ops = stream_ops;
    return node;
  },
  createPreloadedFile: function (
    parent,
    name,
    url,
    canRead,
    canWrite,
    onload,
    onerror,
    dontCreateFile,
    canOwn,
    preFinish,
  ) {
    Browser.init();
    var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
    var dep = getUniqueRunDependency("cp " + fullname);
    function processData(byteArray) {
      function finish(byteArray) {
        if (preFinish) preFinish();
        if (!dontCreateFile) {
          FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
        }
        if (onload) onload();
        removeRunDependency(dep);
      }
      var handled = false;
      Module["preloadPlugins"].forEach(function (plugin) {
        if (handled) return;
        if (plugin["canHandle"](fullname)) {
          plugin["handle"](byteArray, fullname, finish, function () {
            if (onerror) onerror();
            removeRunDependency(dep);
          });
          handled = true;
        }
      });
      if (!handled) finish(byteArray);
    }
    addRunDependency(dep);
    if (typeof url == "string") {
      Browser.asyncLoad(
        url,
        function (byteArray) {
          processData(byteArray);
        },
        onerror,
      );
    } else {
      processData(url);
    }
  },
  indexedDB: function () {
    return (
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB
    );
  },
  DB_NAME: function () {
    return "EM_FS_" + window.location.pathname;
  },
  DB_VERSION: 20,
  DB_STORE_NAME: "FILE_DATA",
  saveFilesToDB: function (paths, onload, onerror) {
    onload = onload || function () {};
    onerror = onerror || function () {};
    var indexedDB = FS.indexedDB();
    try {
      var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
    } catch (e) {
      return onerror(e);
    }
    openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
      console.log("creating db");
      var db = openRequest.result;
      db.createObjectStore(FS.DB_STORE_NAME);
    };
    openRequest.onsuccess = function openRequest_onsuccess() {
      var db = openRequest.result;
      var transaction = db.transaction([FS.DB_STORE_NAME], "readwrite");
      var files = transaction.objectStore(FS.DB_STORE_NAME);
      var ok = 0,
        fail = 0,
        total = paths.length;
      function finish() {
        if (fail == 0) onload();
        else onerror();
      }
      paths.forEach(function (path) {
        var putRequest = files.put(FS.analyzePath(path).object.contents, path);
        putRequest.onsuccess = function putRequest_onsuccess() {
          ok++;
          if (ok + fail == total) finish();
        };
        putRequest.onerror = function putRequest_onerror() {
          fail++;
          if (ok + fail == total) finish();
        };
      });
      transaction.onerror = onerror;
    };
    openRequest.onerror = onerror;
  },
  loadFilesFromDB: function (paths, onload, onerror) {
    onload = onload || function () {};
    onerror = onerror || function () {};
    var indexedDB = FS.indexedDB();
    try {
      var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
    } catch (e) {
      return onerror(e);
    }
    openRequest.onupgradeneeded = onerror;
    openRequest.onsuccess = function openRequest_onsuccess() {
      var db = openRequest.result;
      try {
        var transaction = db.transaction([FS.DB_STORE_NAME], "readonly");
      } catch (e) {
        onerror(e);
        return;
      }
      var files = transaction.objectStore(FS.DB_STORE_NAME);
      var ok = 0,
        fail = 0,
        total = paths.length;
      function finish() {
        if (fail == 0) onload();
        else onerror();
      }
      paths.forEach(function (path) {
        var getRequest = files.get(path);
        getRequest.onsuccess = function getRequest_onsuccess() {
          if (FS.analyzePath(path).exists) {
            FS.unlink(path);
          }
          FS.createDataFile(
            PATH.dirname(path),
            PATH.basename(path),
            getRequest.result,
            true,
            true,
            true,
          );
          ok++;
          if (ok + fail == total) finish();
        };
        getRequest.onerror = function getRequest_onerror() {
          fail++;
          if (ok + fail == total) finish();
        };
      });
      transaction.onerror = onerror;
    };
    openRequest.onerror = onerror;
  },
};
var SYSCALLS = {
  DEFAULT_POLLMASK: 5,
  mappings: {},
  umask: 511,
  calculateAt: function (dirfd, path) {
    if (path[0] !== "/") {
      var dir;
      if (dirfd === -100) {
        dir = FS.cwd();
      } else {
        var dirstream = FS.getStream(dirfd);
        if (!dirstream) throw new FS.ErrnoError(9);
        dir = dirstream.path;
      }
      path = PATH.join2(dir, path);
    }
    return path;
  },
  doStat: function (func, path, buf) {
    try {
      var stat = func(path);
    } catch (e) {
      if (
        e &&
        e.node &&
        PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))
      ) {
        return -20;
      }
      throw e;
    }
    HEAP32[buf >> 2] = stat.dev;
    HEAP32[(buf + 4) >> 2] = 0;
    HEAP32[(buf + 8) >> 2] = stat.ino;
    HEAP32[(buf + 12) >> 2] = stat.mode;
    HEAP32[(buf + 16) >> 2] = stat.nlink;
    HEAP32[(buf + 20) >> 2] = stat.uid;
    HEAP32[(buf + 24) >> 2] = stat.gid;
    HEAP32[(buf + 28) >> 2] = stat.rdev;
    HEAP32[(buf + 32) >> 2] = 0;
    ((tempI64 = [
      stat.size >>> 0,
      ((tempDouble = stat.size),
      +Math_abs(tempDouble) >= 1
        ? tempDouble > 0
          ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>>
            0
          : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>>
            0
        : 0),
    ]),
      (HEAP32[(buf + 40) >> 2] = tempI64[0]),
      (HEAP32[(buf + 44) >> 2] = tempI64[1]));
    HEAP32[(buf + 48) >> 2] = 4096;
    HEAP32[(buf + 52) >> 2] = stat.blocks;
    HEAP32[(buf + 56) >> 2] = (stat.atime.getTime() / 1e3) | 0;
    HEAP32[(buf + 60) >> 2] = 0;
    HEAP32[(buf + 64) >> 2] = (stat.mtime.getTime() / 1e3) | 0;
    HEAP32[(buf + 68) >> 2] = 0;
    HEAP32[(buf + 72) >> 2] = (stat.ctime.getTime() / 1e3) | 0;
    HEAP32[(buf + 76) >> 2] = 0;
    ((tempI64 = [
      stat.ino >>> 0,
      ((tempDouble = stat.ino),
      +Math_abs(tempDouble) >= 1
        ? tempDouble > 0
          ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>>
            0
          : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>>
            0
        : 0),
    ]),
      (HEAP32[(buf + 80) >> 2] = tempI64[0]),
      (HEAP32[(buf + 84) >> 2] = tempI64[1]));
    return 0;
  },
  doMsync: function (addr, stream, len, flags) {
    var buffer = new Uint8Array(HEAPU8.subarray(addr, addr + len));
    FS.msync(stream, buffer, 0, len, flags);
  },
  doMkdir: function (path, mode) {
    path = PATH.normalize(path);
    if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
    FS.mkdir(path, mode, 0);
    return 0;
  },
  doMknod: function (path, mode, dev) {
    switch (mode & 61440) {
      case 32768:
      case 8192:
      case 24576:
      case 4096:
      case 49152:
        break;
      default:
        return -22;
    }
    FS.mknod(path, mode, dev);
    return 0;
  },
  doReadlink: function (path, buf, bufsize) {
    if (bufsize <= 0) return -22;
    var ret = FS.readlink(path);
    var len = Math.min(bufsize, lengthBytesUTF8(ret));
    var endChar = HEAP8[buf + len];
    stringToUTF8(ret, buf, bufsize + 1);
    HEAP8[buf + len] = endChar;
    return len;
  },
  doAccess: function (path, amode) {
    if (amode & ~7) {
      return -22;
    }
    var node;
    var lookup = FS.lookupPath(path, { follow: true });
    node = lookup.node;
    var perms = "";
    if (amode & 4) perms += "r";
    if (amode & 2) perms += "w";
    if (amode & 1) perms += "x";
    if (perms && FS.nodePermissions(node, perms)) {
      return -13;
    }
    return 0;
  },
  doDup: function (path, flags, suggestFD) {
    var suggest = FS.getStream(suggestFD);
    if (suggest) FS.close(suggest);
    return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
  },
  doReadv: function (stream, iov, iovcnt, offset) {
    var ret = 0;
    for (var i = 0; i < iovcnt; i++) {
      var ptr = HEAP32[(iov + i * 8) >> 2];
      var len = HEAP32[(iov + (i * 8 + 4)) >> 2];
      var curr = FS.read(stream, HEAP8, ptr, len, offset);
      if (curr < 0) return -1;
      ret += curr;
      if (curr < len) break;
    }
    return ret;
  },
  doWritev: function (stream, iov, iovcnt, offset) {
    var ret = 0;
    for (var i = 0; i < iovcnt; i++) {
      var ptr = HEAP32[(iov + i * 8) >> 2];
      var len = HEAP32[(iov + (i * 8 + 4)) >> 2];
      var curr = FS.write(stream, HEAP8, ptr, len, offset);
      if (curr < 0) return -1;
      ret += curr;
    }
    return ret;
  },
  varargs: 0,
  get: function (varargs) {
    SYSCALLS.varargs += 4;
    var ret = HEAP32[(SYSCALLS.varargs - 4) >> 2];
    return ret;
  },
  getStr: function () {
    var ret = UTF8ToString(SYSCALLS.get());
    return ret;
  },
  getStreamFromFD: function () {
    var stream = FS.getStream(SYSCALLS.get());
    if (!stream) throw new FS.ErrnoError(9);
    return stream;
  },
  get64: function () {
    var low = SYSCALLS.get(),
      high = SYSCALLS.get();
    return low;
  },
  getZero: function () {
    SYSCALLS.get();
  },
};
function ___syscall10(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var path = SYSCALLS.getStr();
    FS.unlink(path);
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
var ERRNO_CODES = {
  EPERM: 1,
  ENOENT: 2,
  ESRCH: 3,
  EINTR: 4,
  EIO: 5,
  ENXIO: 6,
  E2BIG: 7,
  ENOEXEC: 8,
  EBADF: 9,
  ECHILD: 10,
  EAGAIN: 11,
  EWOULDBLOCK: 11,
  ENOMEM: 12,
  EACCES: 13,
  EFAULT: 14,
  ENOTBLK: 15,
  EBUSY: 16,
  EEXIST: 17,
  EXDEV: 18,
  ENODEV: 19,
  ENOTDIR: 20,
  EISDIR: 21,
  EINVAL: 22,
  ENFILE: 23,
  EMFILE: 24,
  ENOTTY: 25,
  ETXTBSY: 26,
  EFBIG: 27,
  ENOSPC: 28,
  ESPIPE: 29,
  EROFS: 30,
  EMLINK: 31,
  EPIPE: 32,
  EDOM: 33,
  ERANGE: 34,
  ENOMSG: 42,
  EIDRM: 43,
  ECHRNG: 44,
  EL2NSYNC: 45,
  EL3HLT: 46,
  EL3RST: 47,
  ELNRNG: 48,
  EUNATCH: 49,
  ENOCSI: 50,
  EL2HLT: 51,
  EDEADLK: 35,
  ENOLCK: 37,
  EBADE: 52,
  EBADR: 53,
  EXFULL: 54,
  ENOANO: 55,
  EBADRQC: 56,
  EBADSLT: 57,
  EDEADLOCK: 35,
  EBFONT: 59,
  ENOSTR: 60,
  ENODATA: 61,
  ETIME: 62,
  ENOSR: 63,
  ENONET: 64,
  ENOPKG: 65,
  EREMOTE: 66,
  ENOLINK: 67,
  EADV: 68,
  ESRMNT: 69,
  ECOMM: 70,
  EPROTO: 71,
  EMULTIHOP: 72,
  EDOTDOT: 73,
  EBADMSG: 74,
  ENOTUNIQ: 76,
  EBADFD: 77,
  EREMCHG: 78,
  ELIBACC: 79,
  ELIBBAD: 80,
  ELIBSCN: 81,
  ELIBMAX: 82,
  ELIBEXEC: 83,
  ENOSYS: 38,
  ENOTEMPTY: 39,
  ENAMETOOLONG: 36,
  ELOOP: 40,
  EOPNOTSUPP: 95,
  EPFNOSUPPORT: 96,
  ECONNRESET: 104,
  ENOBUFS: 105,
  EAFNOSUPPORT: 97,
  EPROTOTYPE: 91,
  ENOTSOCK: 88,
  ENOPROTOOPT: 92,
  ESHUTDOWN: 108,
  ECONNREFUSED: 111,
  EADDRINUSE: 98,
  ECONNABORTED: 103,
  ENETUNREACH: 101,
  ENETDOWN: 100,
  ETIMEDOUT: 110,
  EHOSTDOWN: 112,
  EHOSTUNREACH: 113,
  EINPROGRESS: 115,
  EALREADY: 114,
  EDESTADDRREQ: 89,
  EMSGSIZE: 90,
  EPROTONOSUPPORT: 93,
  ESOCKTNOSUPPORT: 94,
  EADDRNOTAVAIL: 99,
  ENETRESET: 102,
  EISCONN: 106,
  ENOTCONN: 107,
  ETOOMANYREFS: 109,
  EUSERS: 87,
  EDQUOT: 122,
  ESTALE: 116,
  ENOTSUP: 95,
  ENOMEDIUM: 123,
  EILSEQ: 84,
  EOVERFLOW: 75,
  ECANCELED: 125,
  ENOTRECOVERABLE: 131,
  EOWNERDEAD: 130,
  ESTRPIPE: 86,
};
var SOCKFS = {
  mount: function (mount) {
    Module["websocket"] =
      Module["websocket"] && "object" === typeof Module["websocket"]
        ? Module["websocket"]
        : {};
    Module["websocket"]._callbacks = {};
    Module["websocket"]["on"] = function (event, callback) {
      if ("function" === typeof callback) {
        this._callbacks[event] = callback;
      }
      return this;
    };
    Module["websocket"].emit = function (event, param) {
      if ("function" === typeof this._callbacks[event]) {
        this._callbacks[event].call(this, param);
      }
    };
    return FS.createNode(null, "/", 16384 | 511, 0);
  },
  createSocket: function (family, type, protocol) {
    var streaming = type == 1;
    if (protocol) {
      assert(streaming == (protocol == 6));
    }
    var sock = {
      family: family,
      type: type,
      protocol: protocol,
      server: null,
      error: null,
      peers: {},
      pending: [],
      recv_queue: [],
      sock_ops: SOCKFS.websocket_sock_ops,
    };
    var name = SOCKFS.nextname();
    var node = FS.createNode(SOCKFS.root, name, 49152, 0);
    node.sock = sock;
    var stream = FS.createStream({
      path: name,
      node: node,
      flags: FS.modeStringToFlags("r+"),
      seekable: false,
      stream_ops: SOCKFS.stream_ops,
    });
    sock.stream = stream;
    return sock;
  },
  getSocket: function (fd) {
    var stream = FS.getStream(fd);
    if (!stream || !FS.isSocket(stream.node.mode)) {
      return null;
    }
    return stream.node.sock;
  },
  stream_ops: {
    poll: function (stream) {
      var sock = stream.node.sock;
      return sock.sock_ops.poll(sock);
    },
    ioctl: function (stream, request, varargs) {
      var sock = stream.node.sock;
      return sock.sock_ops.ioctl(sock, request, varargs);
    },
    read: function (stream, buffer, offset, length, position) {
      var sock = stream.node.sock;
      var msg = sock.sock_ops.recvmsg(sock, length);
      if (!msg) {
        return 0;
      }
      buffer.set(msg.buffer, offset);
      return msg.buffer.length;
    },
    write: function (stream, buffer, offset, length, position) {
      var sock = stream.node.sock;
      return sock.sock_ops.sendmsg(sock, buffer, offset, length);
    },
    close: function (stream) {
      var sock = stream.node.sock;
      sock.sock_ops.close(sock);
    },
  },
  nextname: function () {
    if (!SOCKFS.nextname.current) {
      SOCKFS.nextname.current = 0;
    }
    return "socket[" + SOCKFS.nextname.current++ + "]";
  },
  websocket_sock_ops: {
    createPeer: function (sock, addr, port) {
      var ws;
      if (typeof addr === "object") {
        ws = addr;
        addr = null;
        port = null;
      }
      if (ws) {
        if (ws._socket) {
          addr = ws._socket.remoteAddress;
          port = ws._socket.remotePort;
        } else {
          var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
          if (!result) {
            throw new Error(
              "WebSocket URL must be in the format ws(s)://address:port",
            );
          }
          addr = result[1];
          port = parseInt(result[2], 10);
        }
      } else {
        try {
          var runtimeConfig =
            Module["websocket"] && "object" === typeof Module["websocket"];
          var url = "ws:#".replace("#", "//");
          if (runtimeConfig) {
            if ("string" === typeof Module["websocket"]["url"]) {
              url = Module["websocket"]["url"];
            }
          }
          if (url === "ws://" || url === "wss://") {
            var parts = addr.split("/");
            url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/");
          }
          var subProtocols = "binary";
          if (runtimeConfig) {
            if ("string" === typeof Module["websocket"]["subprotocol"]) {
              subProtocols = Module["websocket"]["subprotocol"];
            }
          }
          subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
          var opts = ENVIRONMENT_IS_NODE
            ? { protocol: subProtocols.toString() }
            : subProtocols;
          if (runtimeConfig && null === Module["websocket"]["subprotocol"]) {
            subProtocols = "null";
            opts = undefined;
          }
          var WebSocketConstructor;
          if (ENVIRONMENT_IS_NODE) {
            WebSocketConstructor = require("ws");
          } else if (ENVIRONMENT_IS_WEB) {
            WebSocketConstructor = window["WebSocket"];
          } else {
            WebSocketConstructor = WebSocket;
          }
          ws = new WebSocketConstructor(url, opts);
          ws.binaryType = "arraybuffer";
        } catch (e) {
          throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
        }
      }
      var peer = { addr: addr, port: port, socket: ws, dgram_send_queue: [] };
      SOCKFS.websocket_sock_ops.addPeer(sock, peer);
      SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
      if (sock.type === 2 && typeof sock.sport !== "undefined") {
        peer.dgram_send_queue.push(
          new Uint8Array([
            255,
            255,
            255,
            255,
            "p".charCodeAt(0),
            "o".charCodeAt(0),
            "r".charCodeAt(0),
            "t".charCodeAt(0),
            (sock.sport & 65280) >> 8,
            sock.sport & 255,
          ]),
        );
      }
      return peer;
    },
    getPeer: function (sock, addr, port) {
      return sock.peers[addr + ":" + port];
    },
    addPeer: function (sock, peer) {
      sock.peers[peer.addr + ":" + peer.port] = peer;
    },
    removePeer: function (sock, peer) {
      delete sock.peers[peer.addr + ":" + peer.port];
    },
    handlePeerEvents: function (sock, peer) {
      var first = true;
      var handleOpen = function () {
        Module["websocket"].emit("open", sock.stream.fd);
        try {
          var queued = peer.dgram_send_queue.shift();
          while (queued) {
            peer.socket.send(queued);
            queued = peer.dgram_send_queue.shift();
          }
        } catch (e) {
          peer.socket.close();
        }
      };
      function handleMessage(data) {
        assert(typeof data !== "string" && data.byteLength !== undefined);
        if (data.byteLength == 0) {
          return;
        }
        data = new Uint8Array(data);
        var wasfirst = first;
        first = false;
        if (
          wasfirst &&
          data.length === 10 &&
          data[0] === 255 &&
          data[1] === 255 &&
          data[2] === 255 &&
          data[3] === 255 &&
          data[4] === "p".charCodeAt(0) &&
          data[5] === "o".charCodeAt(0) &&
          data[6] === "r".charCodeAt(0) &&
          data[7] === "t".charCodeAt(0)
        ) {
          var newport = (data[8] << 8) | data[9];
          SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          peer.port = newport;
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          return;
        }
        sock.recv_queue.push({ addr: peer.addr, port: peer.port, data: data });
        Module["websocket"].emit("message", sock.stream.fd);
      }
      if (ENVIRONMENT_IS_NODE) {
        peer.socket.on("open", handleOpen);
        peer.socket.on("message", function (data, flags) {
          if (!flags.binary) {
            return;
          }
          handleMessage(new Uint8Array(data).buffer);
        });
        peer.socket.on("close", function () {
          Module["websocket"].emit("close", sock.stream.fd);
        });
        peer.socket.on("error", function (error) {
          sock.error = ERRNO_CODES.ECONNREFUSED;
          Module["websocket"].emit("error", [
            sock.stream.fd,
            sock.error,
            "ECONNREFUSED: Connection refused",
          ]);
        });
      } else {
        peer.socket.onopen = handleOpen;
        peer.socket.onclose = function () {
          Module["websocket"].emit("close", sock.stream.fd);
        };
        peer.socket.onmessage = function peer_socket_onmessage(event) {
          handleMessage(event.data);
        };
        peer.socket.onerror = function (error) {
          sock.error = ERRNO_CODES.ECONNREFUSED;
          Module["websocket"].emit("error", [
            sock.stream.fd,
            sock.error,
            "ECONNREFUSED: Connection refused",
          ]);
        };
      }
    },
    poll: function (sock) {
      if (sock.type === 1 && sock.server) {
        return sock.pending.length ? 64 | 1 : 0;
      }
      var mask = 0;
      var dest =
        sock.type === 1
          ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport)
          : null;
      if (
        sock.recv_queue.length ||
        !dest ||
        (dest && dest.socket.readyState === dest.socket.CLOSING) ||
        (dest && dest.socket.readyState === dest.socket.CLOSED)
      ) {
        mask |= 64 | 1;
      }
      if (!dest || (dest && dest.socket.readyState === dest.socket.OPEN)) {
        mask |= 4;
      }
      if (
        (dest && dest.socket.readyState === dest.socket.CLOSING) ||
        (dest && dest.socket.readyState === dest.socket.CLOSED)
      ) {
        mask |= 16;
      }
      return mask;
    },
    ioctl: function (sock, request, arg) {
      switch (request) {
        case 21531:
          var bytes = 0;
          if (sock.recv_queue.length) {
            bytes = sock.recv_queue[0].data.length;
          }
          HEAP32[arg >> 2] = bytes;
          return 0;
        default:
          return ERRNO_CODES.EINVAL;
      }
    },
    close: function (sock) {
      if (sock.server) {
        try {
          sock.server.close();
        } catch (e) {}
        sock.server = null;
      }
      var peers = Object.keys(sock.peers);
      for (var i = 0; i < peers.length; i++) {
        var peer = sock.peers[peers[i]];
        try {
          peer.socket.close();
        } catch (e) {}
        SOCKFS.websocket_sock_ops.removePeer(sock, peer);
      }
      return 0;
    },
    bind: function (sock, addr, port) {
      if (
        typeof sock.saddr !== "undefined" ||
        typeof sock.sport !== "undefined"
      ) {
        throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
      }
      sock.saddr = addr;
      sock.sport = port;
      if (sock.type === 2) {
        if (sock.server) {
          sock.server.close();
          sock.server = null;
        }
        try {
          sock.sock_ops.listen(sock, 0);
        } catch (e) {
          if (!(e instanceof FS.ErrnoError)) throw e;
          if (e.errno !== ERRNO_CODES.EOPNOTSUPP) throw e;
        }
      }
    },
    connect: function (sock, addr, port) {
      if (sock.server) {
        throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
      }
      if (
        typeof sock.daddr !== "undefined" &&
        typeof sock.dport !== "undefined"
      ) {
        var dest = SOCKFS.websocket_sock_ops.getPeer(
          sock,
          sock.daddr,
          sock.dport,
        );
        if (dest) {
          if (dest.socket.readyState === dest.socket.CONNECTING) {
            throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
          } else {
            throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
          }
        }
      }
      var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
      sock.daddr = peer.addr;
      sock.dport = peer.port;
      throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
    },
    listen: function (sock, backlog) {
      if (!ENVIRONMENT_IS_NODE) {
        throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
      }
      if (sock.server) {
        throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
      }
      var WebSocketServer = require("ws").Server;
      var host = sock.saddr;
      sock.server = new WebSocketServer({ host: host, port: sock.sport });
      Module["websocket"].emit("listen", sock.stream.fd);
      sock.server.on("connection", function (ws) {
        if (sock.type === 1) {
          var newsock = SOCKFS.createSocket(
            sock.family,
            sock.type,
            sock.protocol,
          );
          var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
          newsock.daddr = peer.addr;
          newsock.dport = peer.port;
          sock.pending.push(newsock);
          Module["websocket"].emit("connection", newsock.stream.fd);
        } else {
          SOCKFS.websocket_sock_ops.createPeer(sock, ws);
          Module["websocket"].emit("connection", sock.stream.fd);
        }
      });
      sock.server.on("closed", function () {
        Module["websocket"].emit("close", sock.stream.fd);
        sock.server = null;
      });
      sock.server.on("error", function (error) {
        sock.error = ERRNO_CODES.EHOSTUNREACH;
        Module["websocket"].emit("error", [
          sock.stream.fd,
          sock.error,
          "EHOSTUNREACH: Host is unreachable",
        ]);
      });
    },
    accept: function (listensock) {
      if (!listensock.server) {
        throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
      }
      var newsock = listensock.pending.shift();
      newsock.stream.flags = listensock.stream.flags;
      return newsock;
    },
    getname: function (sock, peer) {
      var addr, port;
      if (peer) {
        if (sock.daddr === undefined || sock.dport === undefined) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
        }
        addr = sock.daddr;
        port = sock.dport;
      } else {
        addr = sock.saddr || 0;
        port = sock.sport || 0;
      }
      return { addr: addr, port: port };
    },
    sendmsg: function (sock, buffer, offset, length, addr, port) {
      if (sock.type === 2) {
        if (addr === undefined || port === undefined) {
          addr = sock.daddr;
          port = sock.dport;
        }
        if (addr === undefined || port === undefined) {
          throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
        }
      } else {
        addr = sock.daddr;
        port = sock.dport;
      }
      var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
      if (sock.type === 1) {
        if (
          !dest ||
          dest.socket.readyState === dest.socket.CLOSING ||
          dest.socket.readyState === dest.socket.CLOSED
        ) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
        } else if (dest.socket.readyState === dest.socket.CONNECTING) {
          throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
        }
      }
      if (ArrayBuffer.isView(buffer)) {
        offset += buffer.byteOffset;
        buffer = buffer.buffer;
      }
      var data;
      data = buffer.slice(offset, offset + length);
      if (sock.type === 2) {
        if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
          if (
            !dest ||
            dest.socket.readyState === dest.socket.CLOSING ||
            dest.socket.readyState === dest.socket.CLOSED
          ) {
            dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          }
          dest.dgram_send_queue.push(data);
          return length;
        }
      }
      try {
        dest.socket.send(data);
        return length;
      } catch (e) {
        throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
      }
    },
    recvmsg: function (sock, length) {
      if (sock.type === 1 && sock.server) {
        throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
      }
      var queued = sock.recv_queue.shift();
      if (!queued) {
        if (sock.type === 1) {
          var dest = SOCKFS.websocket_sock_ops.getPeer(
            sock,
            sock.daddr,
            sock.dport,
          );
          if (!dest) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
          } else if (
            dest.socket.readyState === dest.socket.CLOSING ||
            dest.socket.readyState === dest.socket.CLOSED
          ) {
            return null;
          } else {
            throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
          }
        } else {
          throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
        }
      }
      var queuedLength = queued.data.byteLength || queued.data.length;
      var queuedOffset = queued.data.byteOffset || 0;
      var queuedBuffer = queued.data.buffer || queued.data;
      var bytesRead = Math.min(length, queuedLength);
      var res = {
        buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
        addr: queued.addr,
        port: queued.port,
      };
      if (sock.type === 1 && bytesRead < queuedLength) {
        var bytesRemaining = queuedLength - bytesRead;
        queued.data = new Uint8Array(
          queuedBuffer,
          queuedOffset + bytesRead,
          bytesRemaining,
        );
        sock.recv_queue.unshift(queued);
      }
      return res;
    },
  },
};
function __inet_pton4_raw(str) {
  var b = str.split(".");
  for (var i = 0; i < 4; i++) {
    var tmp = Number(b[i]);
    if (isNaN(tmp)) return null;
    b[i] = tmp;
  }
  return (b[0] | (b[1] << 8) | (b[2] << 16) | (b[3] << 24)) >>> 0;
}
function __inet_pton6_raw(str) {
  var words;
  var w, offset, z;
  var valid6regx =
    /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
  var parts = [];
  if (!valid6regx.test(str)) {
    return null;
  }
  if (str === "::") {
    return [0, 0, 0, 0, 0, 0, 0, 0];
  }
  if (str.indexOf("::") === 0) {
    str = str.replace("::", "Z:");
  } else {
    str = str.replace("::", ":Z:");
  }
  if (str.indexOf(".") > 0) {
    str = str.replace(new RegExp("[.]", "g"), ":");
    words = str.split(":");
    words[words.length - 4] =
      parseInt(words[words.length - 4]) +
      parseInt(words[words.length - 3]) * 256;
    words[words.length - 3] =
      parseInt(words[words.length - 2]) +
      parseInt(words[words.length - 1]) * 256;
    words = words.slice(0, words.length - 2);
  } else {
    words = str.split(":");
  }
  offset = 0;
  z = 0;
  for (w = 0; w < words.length; w++) {
    if (typeof words[w] === "string") {
      if (words[w] === "Z") {
        for (z = 0; z < 8 - words.length + 1; z++) {
          parts[w + z] = 0;
        }
        offset = z - 1;
      } else {
        parts[w + offset] = _htons(parseInt(words[w], 16));
      }
    } else {
      parts[w + offset] = words[w];
    }
  }
  return [
    (parts[1] << 16) | parts[0],
    (parts[3] << 16) | parts[2],
    (parts[5] << 16) | parts[4],
    (parts[7] << 16) | parts[6],
  ];
}
var DNS = {
  address_map: { id: 1, addrs: {}, names: {} },
  lookup_name: function (name) {
    var res = __inet_pton4_raw(name);
    if (res !== null) {
      return name;
    }
    res = __inet_pton6_raw(name);
    if (res !== null) {
      return name;
    }
    var addr;
    if (DNS.address_map.addrs[name]) {
      addr = DNS.address_map.addrs[name];
    } else {
      var id = DNS.address_map.id++;
      assert(id < 65535, "exceeded max address mappings of 65535");
      addr = "172.29." + (id & 255) + "." + (id & 65280);
      DNS.address_map.names[addr] = name;
      DNS.address_map.addrs[name] = addr;
    }
    return addr;
  },
  lookup_addr: function (addr) {
    if (DNS.address_map.names[addr]) {
      return DNS.address_map.names[addr];
    }
    return null;
  },
};
function __inet_ntop4_raw(addr) {
  return (
    (addr & 255) +
    "." +
    ((addr >> 8) & 255) +
    "." +
    ((addr >> 16) & 255) +
    "." +
    ((addr >> 24) & 255)
  );
}
function __inet_ntop6_raw(ints) {
  var str = "";
  var word = 0;
  var longest = 0;
  var lastzero = 0;
  var zstart = 0;
  var len = 0;
  var i = 0;
  var parts = [
    ints[0] & 65535,
    ints[0] >> 16,
    ints[1] & 65535,
    ints[1] >> 16,
    ints[2] & 65535,
    ints[2] >> 16,
    ints[3] & 65535,
    ints[3] >> 16,
  ];
  var hasipv4 = true;
  var v4part = "";
  for (i = 0; i < 5; i++) {
    if (parts[i] !== 0) {
      hasipv4 = false;
      break;
    }
  }
  if (hasipv4) {
    v4part = __inet_ntop4_raw(parts[6] | (parts[7] << 16));
    if (parts[5] === -1) {
      str = "::ffff:";
      str += v4part;
      return str;
    }
    if (parts[5] === 0) {
      str = "::";
      if (v4part === "0.0.0.0") v4part = "";
      if (v4part === "0.0.0.1") v4part = "1";
      str += v4part;
      return str;
    }
  }
  for (word = 0; word < 8; word++) {
    if (parts[word] === 0) {
      if (word - lastzero > 1) {
        len = 0;
      }
      lastzero = word;
      len++;
    }
    if (len > longest) {
      longest = len;
      zstart = word - longest + 1;
    }
  }
  for (word = 0; word < 8; word++) {
    if (longest > 1) {
      if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
        if (word === zstart) {
          str += ":";
          if (zstart === 0) str += ":";
        }
        continue;
      }
    }
    str += Number(_ntohs(parts[word] & 65535)).toString(16);
    str += word < 7 ? ":" : "";
  }
  return str;
}
function __read_sockaddr(sa, salen) {
  var family = HEAP16[sa >> 1];
  var port = _ntohs(HEAP16[(sa + 2) >> 1]);
  var addr;
  switch (family) {
    case 2:
      if (salen !== 16) {
        return { errno: 22 };
      }
      addr = HEAP32[(sa + 4) >> 2];
      addr = __inet_ntop4_raw(addr);
      break;
    case 10:
      if (salen !== 28) {
        return { errno: 22 };
      }
      addr = [
        HEAP32[(sa + 8) >> 2],
        HEAP32[(sa + 12) >> 2],
        HEAP32[(sa + 16) >> 2],
        HEAP32[(sa + 20) >> 2],
      ];
      addr = __inet_ntop6_raw(addr);
      break;
    default:
      return { errno: 97 };
  }
  return { family: family, addr: addr, port: port };
}
function __write_sockaddr(sa, family, addr, port) {
  switch (family) {
    case 2:
      addr = __inet_pton4_raw(addr);
      HEAP16[sa >> 1] = family;
      HEAP32[(sa + 4) >> 2] = addr;
      HEAP16[(sa + 2) >> 1] = _htons(port);
      break;
    case 10:
      addr = __inet_pton6_raw(addr);
      HEAP32[sa >> 2] = family;
      HEAP32[(sa + 8) >> 2] = addr[0];
      HEAP32[(sa + 12) >> 2] = addr[1];
      HEAP32[(sa + 16) >> 2] = addr[2];
      HEAP32[(sa + 20) >> 2] = addr[3];
      HEAP16[(sa + 2) >> 1] = _htons(port);
      HEAP32[(sa + 4) >> 2] = 0;
      HEAP32[(sa + 24) >> 2] = 0;
      break;
    default:
      return { errno: 97 };
  }
  return {};
}
function ___syscall102(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var call = SYSCALLS.get(),
      socketvararg = SYSCALLS.get();
    SYSCALLS.varargs = socketvararg;
    var getSocketFromFD = function () {
      var socket = SOCKFS.getSocket(SYSCALLS.get());
      if (!socket) throw new FS.ErrnoError(9);
      return socket;
    };
    var getSocketAddress = function (allowNull) {
      var addrp = SYSCALLS.get(),
        addrlen = SYSCALLS.get();
      if (allowNull && addrp === 0) return null;
      var info = __read_sockaddr(addrp, addrlen);
      if (info.errno) throw new FS.ErrnoError(info.errno);
      info.addr = DNS.lookup_addr(info.addr) || info.addr;
      return info;
    };
    switch (call) {
      case 1: {
        var domain = SYSCALLS.get(),
          type = SYSCALLS.get(),
          protocol = SYSCALLS.get();
        var sock = SOCKFS.createSocket(domain, type, protocol);
        return sock.stream.fd;
      }
      case 2: {
        var sock = getSocketFromFD(),
          info = getSocketAddress();
        sock.sock_ops.bind(sock, info.addr, info.port);
        return 0;
      }
      case 3: {
        var sock = getSocketFromFD(),
          info = getSocketAddress();
        sock.sock_ops.connect(sock, info.addr, info.port);
        return 0;
      }
      case 4: {
        var sock = getSocketFromFD(),
          backlog = SYSCALLS.get();
        sock.sock_ops.listen(sock, backlog);
        return 0;
      }
      case 5: {
        var sock = getSocketFromFD(),
          addr = SYSCALLS.get(),
          addrlen = SYSCALLS.get();
        var newsock = sock.sock_ops.accept(sock);
        if (addr) {
          var res = __write_sockaddr(
            addr,
            newsock.family,
            DNS.lookup_name(newsock.daddr),
            newsock.dport,
          );
        }
        return newsock.stream.fd;
      }
      case 6: {
        var sock = getSocketFromFD(),
          addr = SYSCALLS.get(),
          addrlen = SYSCALLS.get();
        var res = __write_sockaddr(
          addr,
          sock.family,
          DNS.lookup_name(sock.saddr || "0.0.0.0"),
          sock.sport,
        );
        return 0;
      }
      case 7: {
        var sock = getSocketFromFD(),
          addr = SYSCALLS.get(),
          addrlen = SYSCALLS.get();
        if (!sock.daddr) {
          return -107;
        }
        var res = __write_sockaddr(
          addr,
          sock.family,
          DNS.lookup_name(sock.daddr),
          sock.dport,
        );
        return 0;
      }
      case 11: {
        var sock = getSocketFromFD(),
          message = SYSCALLS.get(),
          length = SYSCALLS.get(),
          flags = SYSCALLS.get(),
          dest = getSocketAddress(true);
        if (!dest) {
          return FS.write(sock.stream, HEAP8, message, length);
        } else {
          return sock.sock_ops.sendmsg(
            sock,
            HEAP8,
            message,
            length,
            dest.addr,
            dest.port,
          );
        }
      }
      case 12: {
        var sock = getSocketFromFD(),
          buf = SYSCALLS.get(),
          len = SYSCALLS.get(),
          flags = SYSCALLS.get(),
          addr = SYSCALLS.get(),
          addrlen = SYSCALLS.get();
        var msg = sock.sock_ops.recvmsg(sock, len);
        if (!msg) return 0;
        if (addr) {
          var res = __write_sockaddr(
            addr,
            sock.family,
            DNS.lookup_name(msg.addr),
            msg.port,
          );
        }
        HEAPU8.set(msg.buffer, buf);
        return msg.buffer.byteLength;
      }
      case 14: {
        return -92;
      }
      case 15: {
        var sock = getSocketFromFD(),
          level = SYSCALLS.get(),
          optname = SYSCALLS.get(),
          optval = SYSCALLS.get(),
          optlen = SYSCALLS.get();
        if (level === 1) {
          if (optname === 4) {
            HEAP32[optval >> 2] = sock.error;
            HEAP32[optlen >> 2] = 4;
            sock.error = null;
            return 0;
          }
        }
        return -92;
      }
      case 16: {
        var sock = getSocketFromFD(),
          message = SYSCALLS.get(),
          flags = SYSCALLS.get();
        var iov = HEAP32[(message + 8) >> 2];
        var num = HEAP32[(message + 12) >> 2];
        var addr, port;
        var name = HEAP32[message >> 2];
        var namelen = HEAP32[(message + 4) >> 2];
        if (name) {
          var info = __read_sockaddr(name, namelen);
          if (info.errno) return -info.errno;
          port = info.port;
          addr = DNS.lookup_addr(info.addr) || info.addr;
        }
        var total = 0;
        for (var i = 0; i < num; i++) {
          total += HEAP32[(iov + (8 * i + 4)) >> 2];
        }
        var view = new Uint8Array(total);
        var offset = 0;
        for (var i = 0; i < num; i++) {
          var iovbase = HEAP32[(iov + (8 * i + 0)) >> 2];
          var iovlen = HEAP32[(iov + (8 * i + 4)) >> 2];
          for (var j = 0; j < iovlen; j++) {
            view[offset++] = HEAP8[(iovbase + j) >> 0];
          }
        }
        return sock.sock_ops.sendmsg(sock, view, 0, total, addr, port);
      }
      case 17: {
        var sock = getSocketFromFD(),
          message = SYSCALLS.get(),
          flags = SYSCALLS.get();
        var iov = HEAP32[(message + 8) >> 2];
        var num = HEAP32[(message + 12) >> 2];
        var total = 0;
        for (var i = 0; i < num; i++) {
          total += HEAP32[(iov + (8 * i + 4)) >> 2];
        }
        var msg = sock.sock_ops.recvmsg(sock, total);
        if (!msg) return 0;
        var name = HEAP32[message >> 2];
        if (name) {
          var res = __write_sockaddr(
            name,
            sock.family,
            DNS.lookup_name(msg.addr),
            msg.port,
          );
        }
        var bytesRead = 0;
        var bytesRemaining = msg.buffer.byteLength;
        for (var i = 0; bytesRemaining > 0 && i < num; i++) {
          var iovbase = HEAP32[(iov + (8 * i + 0)) >> 2];
          var iovlen = HEAP32[(iov + (8 * i + 4)) >> 2];
          if (!iovlen) {
            continue;
          }
          var length = Math.min(iovlen, bytesRemaining);
          var buf = msg.buffer.subarray(bytesRead, bytesRead + length);
          HEAPU8.set(buf, iovbase + bytesRead);
          bytesRead += length;
          bytesRemaining -= length;
        }
        return bytesRead;
      }
      default:
        abort("unsupported socketcall syscall " + call);
    }
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall12(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var path = SYSCALLS.getStr();
    FS.chdir(path);
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall122(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var buf = SYSCALLS.get();
    if (!buf) return -14;
    var layout = {
      sysname: 0,
      nodename: 65,
      domainname: 325,
      machine: 260,
      version: 195,
      release: 130,
      __size__: 390,
    };
    var copyString = function (element, value) {
      var offset = layout[element];
      writeAsciiToMemory(value, buf + offset);
    };
    copyString("sysname", "Emscripten");
    copyString("nodename", "emscripten");
    copyString("release", "1.0");
    copyString("version", "#1");
    copyString("machine", "x86-JS");
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall125(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall140(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(),
      offset_high = SYSCALLS.get(),
      offset_low = SYSCALLS.get(),
      result = SYSCALLS.get(),
      whence = SYSCALLS.get();
    if (
      !(offset_high == -1 && offset_low < 0) &&
      !(offset_high == 0 && offset_low >= 0)
    ) {
      return -75;
    }
    var offset = offset_low;
    FS.llseek(stream, offset, whence);
    ((tempI64 = [
      stream.position >>> 0,
      ((tempDouble = stream.position),
      +Math_abs(tempDouble) >= 1
        ? tempDouble > 0
          ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>>
            0
          : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>>
            0
        : 0),
    ]),
      (HEAP32[result >> 2] = tempI64[0]),
      (HEAP32[(result + 4) >> 2] = tempI64[1]));
    if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall145(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(),
      iov = SYSCALLS.get(),
      iovcnt = SYSCALLS.get();
    return SYSCALLS.doReadv(stream, iov, iovcnt);
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall146(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(),
      iov = SYSCALLS.get(),
      iovcnt = SYSCALLS.get();
    return SYSCALLS.doWritev(stream, iov, iovcnt);
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall183(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var buf = SYSCALLS.get(),
      size = SYSCALLS.get();
    if (size === 0) return -22;
    var cwd = FS.cwd();
    var cwdLengthInBytes = lengthBytesUTF8(cwd);
    if (size < cwdLengthInBytes + 1) return -34;
    stringToUTF8(cwd, buf, size);
    return buf;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall192(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var addr = SYSCALLS.get(),
      len = SYSCALLS.get(),
      prot = SYSCALLS.get(),
      flags = SYSCALLS.get(),
      fd = SYSCALLS.get(),
      off = SYSCALLS.get();
    off <<= 12;
    var ptr;
    var allocated = false;
    if (fd === -1) {
      ptr = _memalign(PAGE_SIZE, len);
      if (!ptr) return -12;
      _memset(ptr, 0, len);
      allocated = true;
    } else {
      var info = FS.getStream(fd);
      if (!info) return -9;
      var res = FS.mmap(info, HEAPU8, addr, len, off, prot, flags);
      ptr = res.ptr;
      allocated = res.allocated;
    }
    SYSCALLS.mappings[ptr] = {
      malloc: ptr,
      len: len,
      allocated: allocated,
      fd: fd,
      flags: flags,
    };
    return ptr;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall194(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var fd = SYSCALLS.get(),
      zero = SYSCALLS.getZero(),
      length = SYSCALLS.get64();
    FS.ftruncate(fd, length);
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall195(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var path = SYSCALLS.getStr(),
      buf = SYSCALLS.get();
    return SYSCALLS.doStat(FS.stat, path, buf);
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall197(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(),
      buf = SYSCALLS.get();
    return SYSCALLS.doStat(FS.stat, stream.path, buf);
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
var PROCINFO = { ppid: 1, pid: 42, sid: 42, pgid: 42 };
function ___syscall20(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    return PROCINFO.pid;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall220(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(),
      dirp = SYSCALLS.get(),
      count = SYSCALLS.get();
    if (!stream.getdents) {
      stream.getdents = FS.readdir(stream.path);
    }
    var struct_size = 280;
    var pos = 0;
    var off = FS.llseek(stream, 0, 1);
    var idx = Math.floor(off / struct_size);
    while (idx < stream.getdents.length && pos + struct_size <= count) {
      var id;
      var type;
      var name = stream.getdents[idx];
      if (name[0] === ".") {
        id = 1;
        type = 4;
      } else {
        var child = FS.lookupNode(stream.node, name);
        id = child.id;
        type = FS.isChrdev(child.mode)
          ? 2
          : FS.isDir(child.mode)
            ? 4
            : FS.isLink(child.mode)
              ? 10
              : 8;
      }
      ((tempI64 = [
        id >>> 0,
        ((tempDouble = id),
        +Math_abs(tempDouble) >= 1
          ? tempDouble > 0
            ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) |
                0) >>>
              0
            : ~~+Math_ceil(
                (tempDouble - +(~~tempDouble >>> 0)) / 4294967296,
              ) >>> 0
          : 0),
      ]),
        (HEAP32[(dirp + pos) >> 2] = tempI64[0]),
        (HEAP32[(dirp + pos + 4) >> 2] = tempI64[1]));
      ((tempI64 = [
        ((idx + 1) * struct_size) >>> 0,
        ((tempDouble = (idx + 1) * struct_size),
        +Math_abs(tempDouble) >= 1
          ? tempDouble > 0
            ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) |
                0) >>>
              0
            : ~~+Math_ceil(
                (tempDouble - +(~~tempDouble >>> 0)) / 4294967296,
              ) >>> 0
          : 0),
      ]),
        (HEAP32[(dirp + pos + 8) >> 2] = tempI64[0]),
        (HEAP32[(dirp + pos + 12) >> 2] = tempI64[1]));
      HEAP16[(dirp + pos + 16) >> 1] = 280;
      HEAP8[(dirp + pos + 18) >> 0] = type;
      stringToUTF8(name, dirp + pos + 19, 256);
      pos += struct_size;
      idx += 1;
    }
    FS.llseek(stream, idx * struct_size, 0);
    return pos;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall221(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(),
      cmd = SYSCALLS.get();
    switch (cmd) {
      case 0: {
        var arg = SYSCALLS.get();
        if (arg < 0) {
          return -22;
        }
        var newStream;
        newStream = FS.open(stream.path, stream.flags, 0, arg);
        return newStream.fd;
      }
      case 1:
      case 2:
        return 0;
      case 3:
        return stream.flags;
      case 4: {
        var arg = SYSCALLS.get();
        stream.flags |= arg;
        return 0;
      }
      case 12: {
        var arg = SYSCALLS.get();
        var offset = 0;
        HEAP16[(arg + offset) >> 1] = 2;
        return 0;
      }
      case 13:
      case 14:
        return 0;
      case 16:
      case 8:
        return -22;
      case 9:
        ___setErrNo(22);
        return -1;
      default: {
        return -22;
      }
    }
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall3(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(),
      buf = SYSCALLS.get(),
      count = SYSCALLS.get();
    return FS.read(stream, HEAP8, buf, count);
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall39(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var path = SYSCALLS.getStr(),
      mode = SYSCALLS.get();
    return SYSCALLS.doMkdir(path, mode);
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall4(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(),
      buf = SYSCALLS.get(),
      count = SYSCALLS.get();
    return FS.write(stream, HEAP8, buf, count);
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall40(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var path = SYSCALLS.getStr();
    FS.rmdir(path);
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall41(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var old = SYSCALLS.getStreamFromFD();
    return FS.open(old.path, old.flags, 0).fd;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall5(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var pathname = SYSCALLS.getStr(),
      flags = SYSCALLS.get(),
      mode = SYSCALLS.get();
    var stream = FS.open(pathname, flags, mode);
    return stream.fd;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall54(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(),
      op = SYSCALLS.get();
    switch (op) {
      case 21509:
      case 21505: {
        if (!stream.tty) return -25;
        return 0;
      }
      case 21510:
      case 21511:
      case 21512:
      case 21506:
      case 21507:
      case 21508: {
        if (!stream.tty) return -25;
        return 0;
      }
      case 21519: {
        if (!stream.tty) return -25;
        var argp = SYSCALLS.get();
        HEAP32[argp >> 2] = 0;
        return 0;
      }
      case 21520: {
        if (!stream.tty) return -25;
        return -22;
      }
      case 21531: {
        var argp = SYSCALLS.get();
        return FS.ioctl(stream, op, argp);
      }
      case 21523: {
        if (!stream.tty) return -25;
        return 0;
      }
      case 21524: {
        if (!stream.tty) return -25;
        return 0;
      }
      default:
        abort("bad ioctl syscall " + op);
    }
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall6(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD();
    FS.close(stream);
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall85(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var path = SYSCALLS.getStr(),
      buf = SYSCALLS.get(),
      bufsize = SYSCALLS.get();
    return SYSCALLS.doReadlink(path, buf, bufsize);
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___syscall91(which, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var addr = SYSCALLS.get(),
      len = SYSCALLS.get();
    var info = SYSCALLS.mappings[addr];
    if (!info) return 0;
    if (len === info.len) {
      var stream = FS.getStream(info.fd);
      SYSCALLS.doMsync(addr, stream, len, info.flags);
      FS.munmap(stream);
      SYSCALLS.mappings[addr] = null;
      if (info.allocated) {
        _free(info.malloc);
      }
    }
    return 0;
  } catch (e) {
    if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
}
function ___unlock() {}
function _abort() {
  Module["abort"]();
}
function _emscripten_get_now() {
  abort();
}
function _emscripten_get_now_is_monotonic() {
  return (
    0 ||
    ENVIRONMENT_IS_NODE ||
    typeof dateNow !== "undefined" ||
    (typeof performance === "object" &&
      performance &&
      typeof performance["now"] === "function")
  );
}
function _clock_gettime(clk_id, tp) {
  var now;
  if (clk_id === 0) {
    now = Date.now();
  } else if (clk_id === 1 && _emscripten_get_now_is_monotonic()) {
    now = _emscripten_get_now();
  } else {
    ___setErrNo(22);
    return -1;
  }
  HEAP32[tp >> 2] = (now / 1e3) | 0;
  HEAP32[(tp + 4) >> 2] = ((now % 1e3) * 1e3 * 1e3) | 0;
  return 0;
}
function _difftime(time1, time0) {
  return time1 - time0;
}
function _emscripten_get_heap_size() {
  return HEAP8.length;
}
function abortOnCannotGrowMemory(requestedSize) {
  abort("OOM");
}
function emscripten_realloc_buffer(size) {
  var PAGE_MULTIPLE = 65536;
  size = alignUp(size, PAGE_MULTIPLE);
  var oldSize = buffer.byteLength;
  try {
    var result = wasmMemory.grow((size - oldSize) / 65536);
    if (result !== (-1 | 0)) {
      buffer = wasmMemory.buffer;
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}
function _emscripten_resize_heap(requestedSize) {
  var oldSize = _emscripten_get_heap_size();
  var PAGE_MULTIPLE = 65536;
  var LIMIT = 2147483648 - PAGE_MULTIPLE;
  if (requestedSize > LIMIT) {
    return false;
  }
  var MIN_TOTAL_MEMORY = 16777216;
  var newSize = Math.max(oldSize, MIN_TOTAL_MEMORY);
  while (newSize < requestedSize) {
    if (newSize <= 536870912) {
      newSize = alignUp(2 * newSize, PAGE_MULTIPLE);
    } else {
      newSize = Math.min(
        alignUp((3 * newSize + 2147483648) / 4, PAGE_MULTIPLE),
        LIMIT,
      );
    }
  }
  newSize = Math.min(newSize, 536870912);
  if (newSize == oldSize) {
    return false;
  }
  if (!emscripten_realloc_buffer(newSize)) {
    return false;
  }
  updateGlobalBufferViews();
  return true;
}
function _exit(status) {
  exit(status);
}
function _getenv(name) {
  if (name === 0) return 0;
  name = UTF8ToString(name);
  if (!ENV.hasOwnProperty(name)) return 0;
  if (_getenv.ret) _free(_getenv.ret);
  _getenv.ret = allocateUTF8(ENV[name]);
  return _getenv.ret;
}
function _gethostbyname(name) {
  name = UTF8ToString(name);
  var ret = _malloc(20);
  var nameBuf = _malloc(name.length + 1);
  stringToUTF8(name, nameBuf, name.length + 1);
  HEAP32[ret >> 2] = nameBuf;
  var aliasesBuf = _malloc(4);
  HEAP32[aliasesBuf >> 2] = 0;
  HEAP32[(ret + 4) >> 2] = aliasesBuf;
  var afinet = 2;
  HEAP32[(ret + 8) >> 2] = afinet;
  HEAP32[(ret + 12) >> 2] = 4;
  var addrListBuf = _malloc(12);
  HEAP32[addrListBuf >> 2] = addrListBuf + 8;
  HEAP32[(addrListBuf + 4) >> 2] = 0;
  HEAP32[(addrListBuf + 8) >> 2] = __inet_pton4_raw(DNS.lookup_name(name));
  HEAP32[(ret + 16) >> 2] = addrListBuf;
  return ret;
}
var ___tm_current = 2263504;
var ___tm_timezone = (stringToUTF8("GMT", 2263552, 4), 2263552);
function _gmtime_r(time, tmPtr) {
  var date = new Date(HEAP32[time >> 2] * 1e3);
  HEAP32[tmPtr >> 2] = date.getUTCSeconds();
  HEAP32[(tmPtr + 4) >> 2] = date.getUTCMinutes();
  HEAP32[(tmPtr + 8) >> 2] = date.getUTCHours();
  HEAP32[(tmPtr + 12) >> 2] = date.getUTCDate();
  HEAP32[(tmPtr + 16) >> 2] = date.getUTCMonth();
  HEAP32[(tmPtr + 20) >> 2] = date.getUTCFullYear() - 1900;
  HEAP32[(tmPtr + 24) >> 2] = date.getUTCDay();
  HEAP32[(tmPtr + 36) >> 2] = 0;
  HEAP32[(tmPtr + 32) >> 2] = 0;
  var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
  var yday = ((date.getTime() - start) / (1e3 * 60 * 60 * 24)) | 0;
  HEAP32[(tmPtr + 28) >> 2] = yday;
  HEAP32[(tmPtr + 40) >> 2] = ___tm_timezone;
  return tmPtr;
}
function _gmtime(time) {
  return _gmtime_r(time, ___tm_current);
}
function _inet_addr(ptr) {
  var addr = __inet_pton4_raw(UTF8ToString(ptr));
  if (addr === null) {
    return -1;
  }
  return addr;
}
function _llvm_bswap_i64(l, h) {
  var retl = _llvm_bswap_i32(h) >>> 0;
  var reth = _llvm_bswap_i32(l) >>> 0;
  return (setTempRet0(reth), retl) | 0;
}
function _llvm_eh_typeid_for(type) {
  return type;
}
function _llvm_log10_f32(x) {
  return Math.log(x) / Math.LN10;
}
function _llvm_log10_f64(a0) {
  return _llvm_log10_f32(a0);
}
function _llvm_stackrestore(p) {
  var self = _llvm_stacksave;
  var ret = self.LLVM_SAVEDSTACKS[p];
  self.LLVM_SAVEDSTACKS.splice(p, 1);
  stackRestore(ret);
}
function _llvm_stacksave() {
  var self = _llvm_stacksave;
  if (!self.LLVM_SAVEDSTACKS) {
    self.LLVM_SAVEDSTACKS = [];
  }
  self.LLVM_SAVEDSTACKS.push(stackSave());
  return self.LLVM_SAVEDSTACKS.length - 1;
}
function _llvm_trap() {
  abort("trap!");
}
function _tzset() {
  if (_tzset.called) return;
  _tzset.called = true;
  HEAP32[__get_timezone() >> 2] = new Date().getTimezoneOffset() * 60;
  var winter = new Date(2e3, 0, 1);
  var summer = new Date(2e3, 6, 1);
  HEAP32[__get_daylight() >> 2] = Number(
    winter.getTimezoneOffset() != summer.getTimezoneOffset(),
  );
  function extractZone(date) {
    var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
    return match ? match[1] : "GMT";
  }
  var winterName = extractZone(winter);
  var summerName = extractZone(summer);
  var winterNamePtr = allocate(
    intArrayFromString(winterName),
    "i8",
    ALLOC_NORMAL,
  );
  var summerNamePtr = allocate(
    intArrayFromString(summerName),
    "i8",
    ALLOC_NORMAL,
  );
  if (summer.getTimezoneOffset() < winter.getTimezoneOffset()) {
    HEAP32[__get_tzname() >> 2] = winterNamePtr;
    HEAP32[(__get_tzname() + 4) >> 2] = summerNamePtr;
  } else {
    HEAP32[__get_tzname() >> 2] = summerNamePtr;
    HEAP32[(__get_tzname() + 4) >> 2] = winterNamePtr;
  }
}
function _localtime_r(time, tmPtr) {
  _tzset();
  var date = new Date(HEAP32[time >> 2] * 1e3);
  HEAP32[tmPtr >> 2] = date.getSeconds();
  HEAP32[(tmPtr + 4) >> 2] = date.getMinutes();
  HEAP32[(tmPtr + 8) >> 2] = date.getHours();
  HEAP32[(tmPtr + 12) >> 2] = date.getDate();
  HEAP32[(tmPtr + 16) >> 2] = date.getMonth();
  HEAP32[(tmPtr + 20) >> 2] = date.getFullYear() - 1900;
  HEAP32[(tmPtr + 24) >> 2] = date.getDay();
  var start = new Date(date.getFullYear(), 0, 1);
  var yday = ((date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24)) | 0;
  HEAP32[(tmPtr + 28) >> 2] = yday;
  HEAP32[(tmPtr + 36) >> 2] = -(date.getTimezoneOffset() * 60);
  var summerOffset = new Date(2e3, 6, 1).getTimezoneOffset();
  var winterOffset = start.getTimezoneOffset();
  var dst =
    (summerOffset != winterOffset &&
      date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
  HEAP32[(tmPtr + 32) >> 2] = dst;
  var zonePtr = HEAP32[(__get_tzname() + (dst ? 4 : 0)) >> 2];
  HEAP32[(tmPtr + 40) >> 2] = zonePtr;
  return tmPtr;
}
function _localtime(time) {
  return _localtime_r(time, ___tm_current);
}
function _emscripten_memcpy_big(dest, src, num) {
  HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
}
function _mktime(tmPtr) {
  _tzset();
  var date = new Date(
    HEAP32[(tmPtr + 20) >> 2] + 1900,
    HEAP32[(tmPtr + 16) >> 2],
    HEAP32[(tmPtr + 12) >> 2],
    HEAP32[(tmPtr + 8) >> 2],
    HEAP32[(tmPtr + 4) >> 2],
    HEAP32[tmPtr >> 2],
    0,
  );
  var dst = HEAP32[(tmPtr + 32) >> 2];
  var guessedOffset = date.getTimezoneOffset();
  var start = new Date(date.getFullYear(), 0, 1);
  var summerOffset = new Date(2e3, 6, 1).getTimezoneOffset();
  var winterOffset = start.getTimezoneOffset();
  var dstOffset = Math.min(winterOffset, summerOffset);
  if (dst < 0) {
    HEAP32[(tmPtr + 32) >> 2] = Number(
      summerOffset != winterOffset && dstOffset == guessedOffset,
    );
  } else if (dst > 0 != (dstOffset == guessedOffset)) {
    var nonDstOffset = Math.max(winterOffset, summerOffset);
    var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
    date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4);
  }
  HEAP32[(tmPtr + 24) >> 2] = date.getDay();
  var yday = ((date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24)) | 0;
  HEAP32[(tmPtr + 28) >> 2] = yday;
  return (date.getTime() / 1e3) | 0;
}
function _pthread_cond_wait() {
  return 0;
}
function _pthread_mutexattr_destroy() {}
function _pthread_mutexattr_init() {}
function _pthread_mutexattr_settype() {}
function __isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function __arraySum(array, index) {
  var sum = 0;
  for (var i = 0; i <= index; sum += array[i++]);
  return sum;
}
var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function __addDays(date, days) {
  var newDate = new Date(date.getTime());
  while (days > 0) {
    var leap = __isLeapYear(newDate.getFullYear());
    var currentMonth = newDate.getMonth();
    var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[
      currentMonth
    ];
    if (days > daysInCurrentMonth - newDate.getDate()) {
      days -= daysInCurrentMonth - newDate.getDate() + 1;
      newDate.setDate(1);
      if (currentMonth < 11) {
        newDate.setMonth(currentMonth + 1);
      } else {
        newDate.setMonth(0);
        newDate.setFullYear(newDate.getFullYear() + 1);
      }
    } else {
      newDate.setDate(newDate.getDate() + days);
      return newDate;
    }
  }
  return newDate;
}
function _strftime(s, maxsize, format, tm) {
  var tm_zone = HEAP32[(tm + 40) >> 2];
  var date = {
    tm_sec: HEAP32[tm >> 2],
    tm_min: HEAP32[(tm + 4) >> 2],
    tm_hour: HEAP32[(tm + 8) >> 2],
    tm_mday: HEAP32[(tm + 12) >> 2],
    tm_mon: HEAP32[(tm + 16) >> 2],
    tm_year: HEAP32[(tm + 20) >> 2],
    tm_wday: HEAP32[(tm + 24) >> 2],
    tm_yday: HEAP32[(tm + 28) >> 2],
    tm_isdst: HEAP32[(tm + 32) >> 2],
    tm_gmtoff: HEAP32[(tm + 36) >> 2],
    tm_zone: tm_zone ? UTF8ToString(tm_zone) : "",
  };
  var pattern = UTF8ToString(format);
  var EXPANSION_RULES_1 = {
    "%c": "%a %b %d %H:%M:%S %Y",
    "%D": "%m/%d/%y",
    "%F": "%Y-%m-%d",
    "%h": "%b",
    "%r": "%I:%M:%S %p",
    "%R": "%H:%M",
    "%T": "%H:%M:%S",
    "%x": "%m/%d/%y",
    "%X": "%H:%M:%S",
  };
  for (var rule in EXPANSION_RULES_1) {
    pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
  }
  var WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function leadingSomething(value, digits, character) {
    var str = typeof value === "number" ? value.toString() : value || "";
    while (str.length < digits) {
      str = character[0] + str;
    }
    return str;
  }
  function leadingNulls(value, digits) {
    return leadingSomething(value, digits, "0");
  }
  function compareByDay(date1, date2) {
    function sgn(value) {
      return value < 0 ? -1 : value > 0 ? 1 : 0;
    }
    var compare;
    if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
      if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
        compare = sgn(date1.getDate() - date2.getDate());
      }
    }
    return compare;
  }
  function getFirstWeekStartDate(janFourth) {
    switch (janFourth.getDay()) {
      case 0:
        return new Date(janFourth.getFullYear() - 1, 11, 29);
      case 1:
        return janFourth;
      case 2:
        return new Date(janFourth.getFullYear(), 0, 3);
      case 3:
        return new Date(janFourth.getFullYear(), 0, 2);
      case 4:
        return new Date(janFourth.getFullYear(), 0, 1);
      case 5:
        return new Date(janFourth.getFullYear() - 1, 11, 31);
      case 6:
        return new Date(janFourth.getFullYear() - 1, 11, 30);
    }
  }
  function getWeekBasedYear(date) {
    var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
    var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
    var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
    var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
    var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
    if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
      if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
        return thisDate.getFullYear() + 1;
      } else {
        return thisDate.getFullYear();
      }
    } else {
      return thisDate.getFullYear() - 1;
    }
  }
  var EXPANSION_RULES_2 = {
    "%a": function (date) {
      return WEEKDAYS[date.tm_wday].substring(0, 3);
    },
    "%A": function (date) {
      return WEEKDAYS[date.tm_wday];
    },
    "%b": function (date) {
      return MONTHS[date.tm_mon].substring(0, 3);
    },
    "%B": function (date) {
      return MONTHS[date.tm_mon];
    },
    "%C": function (date) {
      var year = date.tm_year + 1900;
      return leadingNulls((year / 100) | 0, 2);
    },
    "%d": function (date) {
      return leadingNulls(date.tm_mday, 2);
    },
    "%e": function (date) {
      return leadingSomething(date.tm_mday, 2, " ");
    },
    "%g": function (date) {
      return getWeekBasedYear(date).toString().substring(2);
    },
    "%G": function (date) {
      return getWeekBasedYear(date);
    },
    "%H": function (date) {
      return leadingNulls(date.tm_hour, 2);
    },
    "%I": function (date) {
      var twelveHour = date.tm_hour;
      if (twelveHour == 0) twelveHour = 12;
      else if (twelveHour > 12) twelveHour -= 12;
      return leadingNulls(twelveHour, 2);
    },
    "%j": function (date) {
      return leadingNulls(
        date.tm_mday +
          __arraySum(
            __isLeapYear(date.tm_year + 1900)
              ? __MONTH_DAYS_LEAP
              : __MONTH_DAYS_REGULAR,
            date.tm_mon - 1,
          ),
        3,
      );
    },
    "%m": function (date) {
      return leadingNulls(date.tm_mon + 1, 2);
    },
    "%M": function (date) {
      return leadingNulls(date.tm_min, 2);
    },
    "%n": function () {
      return "\n";
    },
    "%p": function (date) {
      if (date.tm_hour >= 0 && date.tm_hour < 12) {
        return "AM";
      } else {
        return "PM";
      }
    },
    "%S": function (date) {
      return leadingNulls(date.tm_sec, 2);
    },
    "%t": function () {
      return "\t";
    },
    "%u": function (date) {
      var day = new Date(
        date.tm_year + 1900,
        date.tm_mon + 1,
        date.tm_mday,
        0,
        0,
        0,
        0,
      );
      return day.getDay() || 7;
    },
    "%U": function (date) {
      var janFirst = new Date(date.tm_year + 1900, 0, 1);
      var firstSunday =
        janFirst.getDay() === 0
          ? janFirst
          : __addDays(janFirst, 7 - janFirst.getDay());
      var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
      if (compareByDay(firstSunday, endDate) < 0) {
        var februaryFirstUntilEndMonth =
          __arraySum(
            __isLeapYear(endDate.getFullYear())
              ? __MONTH_DAYS_LEAP
              : __MONTH_DAYS_REGULAR,
            endDate.getMonth() - 1,
          ) - 31;
        var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
        var days =
          firstSundayUntilEndJanuary +
          februaryFirstUntilEndMonth +
          endDate.getDate();
        return leadingNulls(Math.ceil(days / 7), 2);
      }
      return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00";
    },
    "%V": function (date) {
      var janFourthThisYear = new Date(date.tm_year + 1900, 0, 4);
      var janFourthNextYear = new Date(date.tm_year + 1901, 0, 4);
      var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
      var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
      var endDate = __addDays(
        new Date(date.tm_year + 1900, 0, 1),
        date.tm_yday,
      );
      if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
        return "53";
      }
      if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
        return "01";
      }
      var daysDifference;
      if (firstWeekStartThisYear.getFullYear() < date.tm_year + 1900) {
        daysDifference = date.tm_yday + 32 - firstWeekStartThisYear.getDate();
      } else {
        daysDifference = date.tm_yday + 1 - firstWeekStartThisYear.getDate();
      }
      return leadingNulls(Math.ceil(daysDifference / 7), 2);
    },
    "%w": function (date) {
      var day = new Date(
        date.tm_year + 1900,
        date.tm_mon + 1,
        date.tm_mday,
        0,
        0,
        0,
        0,
      );
      return day.getDay();
    },
    "%W": function (date) {
      var janFirst = new Date(date.tm_year, 0, 1);
      var firstMonday =
        janFirst.getDay() === 1
          ? janFirst
          : __addDays(
              janFirst,
              janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1,
            );
      var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
      if (compareByDay(firstMonday, endDate) < 0) {
        var februaryFirstUntilEndMonth =
          __arraySum(
            __isLeapYear(endDate.getFullYear())
              ? __MONTH_DAYS_LEAP
              : __MONTH_DAYS_REGULAR,
            endDate.getMonth() - 1,
          ) - 31;
        var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
        var days =
          firstMondayUntilEndJanuary +
          februaryFirstUntilEndMonth +
          endDate.getDate();
        return leadingNulls(Math.ceil(days / 7), 2);
      }
      return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00";
    },
    "%y": function (date) {
      return (date.tm_year + 1900).toString().substring(2);
    },
    "%Y": function (date) {
      return date.tm_year + 1900;
    },
    "%z": function (date) {
      var off = date.tm_gmtoff;
      var ahead = off >= 0;
      off = Math.abs(off) / 60;
      off = (off / 60) * 100 + (off % 60);
      return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
    },
    "%Z": function (date) {
      return date.tm_zone;
    },
    "%%": function () {
      return "%";
    },
  };
  for (var rule in EXPANSION_RULES_2) {
    if (pattern.indexOf(rule) >= 0) {
      pattern = pattern.replace(
        new RegExp(rule, "g"),
        EXPANSION_RULES_2[rule](date),
      );
    }
  }
  var bytes = intArrayFromString(pattern, false);
  if (bytes.length > maxsize) {
    return 0;
  }
  writeArrayToMemory(bytes, s);
  return bytes.length - 1;
}
function _strftime_l(s, maxsize, format, tm) {
  return _strftime(s, maxsize, format, tm);
}
function _time(ptr) {
  var ret = (Date.now() / 1e3) | 0;
  if (ptr) {
    HEAP32[ptr >> 2] = ret;
  }
  return ret;
}
function _timegm(tmPtr) {
  _tzset();
  var time = Date.UTC(
    HEAP32[(tmPtr + 20) >> 2] + 1900,
    HEAP32[(tmPtr + 16) >> 2],
    HEAP32[(tmPtr + 12) >> 2],
    HEAP32[(tmPtr + 8) >> 2],
    HEAP32[(tmPtr + 4) >> 2],
    HEAP32[tmPtr >> 2],
    0,
  );
  var date = new Date(time);
  HEAP32[(tmPtr + 24) >> 2] = date.getUTCDay();
  var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
  var yday = ((date.getTime() - start) / (1e3 * 60 * 60 * 24)) | 0;
  HEAP32[(tmPtr + 28) >> 2] = yday;
  return (date.getTime() / 1e3) | 0;
}
FS.staticInit();
if (ENVIRONMENT_IS_NODE) {
  var fs = require("fs");
  var NODEJS_PATH = require("path");
  NODEFS.staticInit();
}
if (ENVIRONMENT_IS_NODE) {
  _emscripten_get_now = function _emscripten_get_now_actual() {
    var t = process["hrtime"]();
    return t[0] * 1e3 + t[1] / 1e6;
  };
} else if (typeof dateNow !== "undefined") {
  _emscripten_get_now = dateNow;
} else if (
  typeof performance === "object" &&
  performance &&
  typeof performance["now"] === "function"
) {
  _emscripten_get_now = function () {
    return performance["now"]();
  };
} else {
  _emscripten_get_now = Date.now;
}
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}
function invoke_diii(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_diii(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_fiii(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_fiii(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_i(index) {
  var sp = stackSave();
  try {
    return dynCall_i(index);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_ii(index, a1) {
  var sp = stackSave();
  try {
    return dynCall_ii(index, a1);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iid(index, a1, a2) {
  var sp = stackSave();
  try {
    return dynCall_iid(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iii(index, a1, a2) {
  var sp = stackSave();
  try {
    return dynCall_iii(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiii(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_iiii(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiii(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return dynCall_iiiii(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiid(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    return dynCall_iiiiid(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiddd(index, a1, a2, a3, a4, a5, a6, a7) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiddd(index, a1, a2, a3, a4, a5, a6, a7);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    return dynCall_iiiiii(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiii(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
  a19,
  a20,
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
      a19,
      a20,
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiiiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
  a19,
  a20,
  a21,
  a22,
  a23,
  a24,
  a25,
  a26,
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
      a19,
      a20,
      a21,
      a22,
      a23,
      a24,
      a25,
      a26,
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
  a19,
  a20,
  a21,
  a22,
  a23,
  a24,
  a25,
  a26,
  a27,
  a28,
  a29,
  a30,
  a31,
  a32,
  a33,
  a34,
  a35,
  a36,
  a37,
  a38,
  a39,
  a40,
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
      a19,
      a20,
      a21,
      a22,
      a23,
      a24,
      a25,
      a26,
      a27,
      a28,
      a29,
      a30,
      a31,
      a32,
      a33,
      a34,
      a35,
      a36,
      a37,
      a38,
      a39,
      a40,
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
  a19,
  a20,
  a21,
  a22,
  a23,
  a24,
  a25,
  a26,
  a27,
  a28,
  a29,
  a30,
  a31,
  a32,
  a33,
  a34,
  a35,
  a36,
  a37,
  a38,
  a39,
  a40,
  a41,
  a42,
  a43,
  a44,
  a45,
  a46,
  a47,
  a48,
  a49,
) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
      a19,
      a20,
      a21,
      a22,
      a23,
      a24,
      a25,
      a26,
      a27,
      a28,
      a29,
      a30,
      a31,
      a32,
      a33,
      a34,
      a35,
      a36,
      a37,
      a38,
      a39,
      a40,
      a41,
      a42,
      a43,
      a44,
      a45,
      a46,
      a47,
      a48,
      a49,
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiiji(index, a1, a2, a3, a4, a5, a6, a7) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiji(index, a1, a2, a3, a4, a5, a6, a7);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiiiji(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    return dynCall_iiiiji(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iij(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    return dynCall_iij(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iiji(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return dynCall_iiji(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iijii(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    return dynCall_iijii(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iijiii(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    return dynCall_iijiii(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iijiji(index, a1, a2, a3, a4, a5, a6, a7) {
  var sp = stackSave();
  try {
    return dynCall_iijiji(index, a1, a2, a3, a4, a5, a6, a7);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_iijji(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    return dynCall_iijji(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_ji(index, a1) {
  var sp = stackSave();
  try {
    return dynCall_ji(index, a1);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_jiiii(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return dynCall_jiiii(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_jiij(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    return dynCall_jiij(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_v(index) {
  var sp = stackSave();
  try {
    dynCall_v(index);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_vi(index, a1) {
  var sp = stackSave();
  try {
    dynCall_vi(index, a1);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_vid(index, a1, a2) {
  var sp = stackSave();
  try {
    dynCall_vid(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_vidddi(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    dynCall_vidddi(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viddidd(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    dynCall_viddidd(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_vii(index, a1, a2) {
  var sp = stackSave();
  try {
    dynCall_vii(index, a1, a2);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viii(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    dynCall_viii(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiii(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    dynCall_viiii(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiii(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    dynCall_viiiii(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    dynCall_viiiiii(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
  var sp = stackSave();
  try {
    dynCall_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiiiiiiiiii(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiiiiiiiii(
      index,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
    );
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiiiiijj(
  index,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
  var sp = stackSave();
  try {
    dynCall_viiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiijji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
  var sp = stackSave();
  try {
    dynCall_viiijji(index, a1, a2, a3, a4, a5, a6, a7, a8);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viij(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    dynCall_viij(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viiji(index, a1, a2, a3, a4, a5) {
  var sp = stackSave();
  try {
    dynCall_viiji(index, a1, a2, a3, a4, a5);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viijii(index, a1, a2, a3, a4, a5, a6) {
  var sp = stackSave();
  try {
    dynCall_viijii(index, a1, a2, a3, a4, a5, a6);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viijiii(index, a1, a2, a3, a4, a5, a6, a7) {
  var sp = stackSave();
  try {
    dynCall_viijiii(index, a1, a2, a3, a4, a5, a6, a7);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viijiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  var sp = stackSave();
  try {
    dynCall_viijiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_vij(index, a1, a2, a3) {
  var sp = stackSave();
  try {
    dynCall_vij(index, a1, a2, a3);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
function invoke_viji(index, a1, a2, a3, a4) {
  var sp = stackSave();
  try {
    dynCall_viji(index, a1, a2, a3, a4);
  } catch (e) {
    stackRestore(sp);
    if (e !== e + 0 && e !== "longjmp") throw e;
    _setThrew(1, 0);
  }
}
var asmGlobalArg = {};
var asmLibraryArg = {
  F: abort,
  pa: setTempRet0,
  b: getTempRet0,
  ja: invoke_diii,
  Da: invoke_fiii,
  D: invoke_i,
  g: invoke_ii,
  $a: invoke_iid,
  i: invoke_iii,
  k: invoke_iiii,
  p: invoke_iiiii,
  Tb: invoke_iiiiid,
  Ha: invoke_iiiiiddd,
  w: invoke_iiiiii,
  y: invoke_iiiiiii,
  z: invoke_iiiiiiii,
  G: invoke_iiiiiiiii,
  E: invoke_iiiiiiiiii,
  I: invoke_iiiiiiiiiii,
  L: invoke_iiiiiiiiiiii,
  O: invoke_iiiiiiiiiiiii,
  Q: invoke_iiiiiiiiiiiiii,
  V: invoke_iiiiiiiiiiiiiii,
  Ga: invoke_iiiiiiiiiiiiiiii,
  Fa: invoke_iiiiiiiiiiiiiiiii,
  ia: invoke_iiiiiiiiiiiiiiiiii,
  Y: invoke_iiiiiiiiiiiiiiiiiii,
  hb: invoke_iiiiiiiiiiiiiiiiiiiii,
  oa: invoke_iiiiiiiiiiiiiiiiiiiiiiiiiii,
  gb: invoke_iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  Ea: invoke_iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  Db: invoke_iiiiiji,
  Cb: invoke_iiiiji,
  Bb: invoke_iij,
  Ab: invoke_iiji,
  zb: invoke_iijii,
  yb: invoke_iijiii,
  xb: invoke_iijiji,
  wb: invoke_iijji,
  vb: invoke_ji,
  ub: invoke_jiiii,
  tb: invoke_jiij,
  r: invoke_v,
  d: invoke_vi,
  X: invoke_vid,
  fb: invoke_vidddi,
  eb: invoke_viddidd,
  h: invoke_vii,
  j: invoke_viii,
  s: invoke_viiii,
  t: invoke_viiiii,
  x: invoke_viiiiii,
  C: invoke_viiiiiii,
  P: invoke_viiiiiiii,
  A: invoke_viiiiiiiii,
  N: invoke_viiiiiiiiii,
  na: invoke_viiiiiiiiiii,
  Ca: invoke_viiiiiiiiiiii,
  aa: invoke_viiiiiiiiiiiii,
  ha: invoke_viiiiiiiiiiiiiii,
  sb: invoke_viiiiiiijj,
  rb: invoke_viiiijj,
  qb: invoke_viiijji,
  pb: invoke_viij,
  ob: invoke_viiji,
  nb: invoke_viijii,
  mb: invoke_viijiii,
  lb: invoke_viijiiiiii,
  kb: invoke_vij,
  jb: invoke_viji,
  ga: _TSCGCryptoRand,
  Ba: _TSCGFreeMemory,
  db: _TSCGGetBrowserInfo,
  Aa: _TSCGIsCryptoRandSupported,
  cb: _XMLHTTPFreeMemory,
  bb: _XMLHTTPTransmitOperation,
  B: ___assert_fail,
  ab: ___buildEnvironment,
  l: ___cxa_allocate_exception,
  n: ___cxa_begin_catch,
  K: ___cxa_call_unexpected,
  q: ___cxa_end_catch,
  c: ___cxa_find_matching_catch_2,
  f: ___cxa_find_matching_catch_3,
  v: ___cxa_find_matching_catch_4,
  H: ___cxa_find_matching_catch_5,
  M: ___cxa_find_matching_catch_6,
  fa: ___cxa_find_matching_catch_7,
  m: ___cxa_free_exception,
  J: ___cxa_get_exception_ptr,
  _a: ___cxa_pure_virtual,
  za: ___cxa_rethrow,
  o: ___cxa_throw,
  Za: ___cxa_uncaught_exception,
  ca: ___lock,
  Ya: ___map_file,
  e: ___resumeException,
  ya: ___setErrNo,
  xa: ___syscall10,
  ma: ___syscall102,
  Xa: ___syscall12,
  Wa: ___syscall122,
  Va: ___syscall125,
  wa: ___syscall140,
  Ua: ___syscall145,
  va: ___syscall146,
  Ta: ___syscall183,
  Sa: ___syscall192,
  Ra: ___syscall194,
  ua: ___syscall195,
  Qa: ___syscall197,
  Pa: ___syscall20,
  Oa: ___syscall220,
  R: ___syscall221,
  Na: ___syscall3,
  Ma: ___syscall39,
  La: ___syscall4,
  Ka: ___syscall40,
  Ja: ___syscall41,
  la: ___syscall5,
  ta: ___syscall54,
  $: ___syscall6,
  Sb: ___syscall85,
  Rb: ___syscall91,
  W: ___unlock,
  Ia: _abort,
  ka: _clock_gettime,
  Qb: _difftime,
  Pb: _emscripten_get_heap_size,
  Ob: _emscripten_memcpy_big,
  Nb: _emscripten_resize_heap,
  Mb: _exit,
  U: _getenv,
  Lb: _gethostbyname,
  Kb: _gmtime,
  Jb: _inet_addr,
  ib: _llvm_bswap_i64,
  u: _llvm_eh_typeid_for,
  Ib: _llvm_log10_f64,
  _: _llvm_stackrestore,
  Z: _llvm_stacksave,
  sa: _llvm_trap,
  ra: _localtime,
  qa: _mktime,
  Hb: _pthread_cond_wait,
  ba: _pthread_mutexattr_destroy,
  ea: _pthread_mutexattr_init,
  da: _pthread_mutexattr_settype,
  Gb: _strftime,
  S: _strftime_l,
  T: _time,
  Fb: _timegm,
  Eb: abortOnCannotGrowMemory,
  a: DYNAMICTOP_PTR,
};
var asm = Module["asm"](asmGlobalArg, asmLibraryArg, buffer);
Module["asm"] = asm;
var _EUASiCAppendSign = (Module["_EUASiCAppendSign"] = function () {
  return Module["asm"]["Ub"].apply(null, arguments);
});
var _EUASiCCreateEmptySign = (Module["_EUASiCCreateEmptySign"] = function () {
  return Module["asm"]["Vb"].apply(null, arguments);
});
var _EUASiCCreateSignerBegin = (Module["_EUASiCCreateSignerBegin"] =
  function () {
    return Module["asm"]["Wb"].apply(null, arguments);
  });
var _EUASiCCreateSignerBeginEx = (Module["_EUASiCCreateSignerBeginEx"] =
  function () {
    return Module["asm"]["Xb"].apply(null, arguments);
  });
var _EUASiCCreateSignerEnd = (Module["_EUASiCCreateSignerEnd"] = function () {
  return Module["asm"]["Yb"].apply(null, arguments);
});
var _EUASiCGetASiCType = (Module["_EUASiCGetASiCType"] = function () {
  return Module["asm"]["Zb"].apply(null, arguments);
});
var _EUASiCGetReference = (Module["_EUASiCGetReference"] = function () {
  return Module["asm"]["_b"].apply(null, arguments);
});
var _EUASiCGetSignLevel = (Module["_EUASiCGetSignLevel"] = function () {
  return Module["asm"]["$b"].apply(null, arguments);
});
var _EUASiCGetSignReferences = (Module["_EUASiCGetSignReferences"] =
  function () {
    return Module["asm"]["ac"].apply(null, arguments);
  });
var _EUASiCGetSignTimeInfo = (Module["_EUASiCGetSignTimeInfo"] = function () {
  return Module["asm"]["bc"].apply(null, arguments);
});
var _EUASiCGetSignType = (Module["_EUASiCGetSignType"] = function () {
  return Module["asm"]["cc"].apply(null, arguments);
});
var _EUASiCGetSignerInfo = (Module["_EUASiCGetSignerInfo"] = function () {
  return Module["asm"]["dc"].apply(null, arguments);
});
var _EUASiCGetSignsCount = (Module["_EUASiCGetSignsCount"] = function () {
  return Module["asm"]["ec"].apply(null, arguments);
});
var _EUASiCIsAllContentCovered = (Module["_EUASiCIsAllContentCovered"] =
  function () {
    return Module["asm"]["fc"].apply(null, arguments);
  });
var _EUASiCSignData = (Module["_EUASiCSignData"] = function () {
  return Module["asm"]["gc"].apply(null, arguments);
});
var _EUASiCVerifyData = (Module["_EUASiCVerifyData"] = function () {
  return Module["asm"]["hc"].apply(null, arguments);
});
var _EUAppendCryptoHeader = (Module["_EUAppendCryptoHeader"] = function () {
  return Module["asm"]["ic"].apply(null, arguments);
});
var _EUAppendRecipient = (Module["_EUAppendRecipient"] = function () {
  return Module["asm"]["jc"].apply(null, arguments);
});
var _EUAppendSigner = (Module["_EUAppendSigner"] = function () {
  return Module["asm"]["kc"].apply(null, arguments);
});
var _EUAppendTransportHeader = (Module["_EUAppendTransportHeader"] =
  function () {
    return Module["asm"]["lc"].apply(null, arguments);
  });
var _EUAppendTransportHeaderEx = (Module["_EUAppendTransportHeaderEx"] =
  function () {
    return Module["asm"]["mc"].apply(null, arguments);
  });
var _EUAppendValidationDataToSigner = (Module[
  "_EUAppendValidationDataToSigner"
] = function () {
  return Module["asm"]["nc"].apply(null, arguments);
});
var _EUBASE64Decode = (Module["_EUBASE64Decode"] = function () {
  return Module["asm"]["oc"].apply(null, arguments);
});
var _EUBASE64Encode = (Module["_EUBASE64Encode"] = function () {
  return Module["asm"]["pc"].apply(null, arguments);
});
var _EUChangeOwnCertificatesStatus = (Module["_EUChangeOwnCertificatesStatus"] =
  function () {
    return Module["asm"]["qc"].apply(null, arguments);
  });
var _EUChangeSoftwarePrivateKeyPassword = (Module[
  "_EUChangeSoftwarePrivateKeyPassword"
] = function () {
  return Module["asm"]["rc"].apply(null, arguments);
});
var _EUCheckCertificate = (Module["_EUCheckCertificate"] = function () {
  return Module["asm"]["sc"].apply(null, arguments);
});
var _EUCheckDataStruct = (Module["_EUCheckDataStruct"] = function () {
  return Module["asm"]["tc"].apply(null, arguments);
});
var _EUCheckFileStruct = (Module["_EUCheckFileStruct"] = function () {
  return Module["asm"]["uc"].apply(null, arguments);
});
var _EUCheckTSP = (Module["_EUCheckTSP"] = function () {
  return Module["asm"]["vc"].apply(null, arguments);
});
var _EUClientDynamicKeySessionCreate = (Module[
  "_EUClientDynamicKeySessionCreate"
] = function () {
  return Module["asm"]["wc"].apply(null, arguments);
});
var _EUClientDynamicKeySessionLoad = (Module["_EUClientDynamicKeySessionLoad"] =
  function () {
    return Module["asm"]["xc"].apply(null, arguments);
  });
var _EUClientSessionCreateStep1 = (Module["_EUClientSessionCreateStep1"] =
  function () {
    return Module["asm"]["yc"].apply(null, arguments);
  });
var _EUClientSessionCreateStep2 = (Module["_EUClientSessionCreateStep2"] =
  function () {
    return Module["asm"]["zc"].apply(null, arguments);
  });
var _EUCreateEmptySign = (Module["_EUCreateEmptySign"] = function () {
  return Module["asm"]["Ac"].apply(null, arguments);
});
var _EUCreateSigner = (Module["_EUCreateSigner"] = function () {
  return Module["asm"]["Bc"].apply(null, arguments);
});
var _EUCreateSignerBeginEx = (Module["_EUCreateSignerBeginEx"] = function () {
  return Module["asm"]["Cc"].apply(null, arguments);
});
var _EUCreateSignerEnd = (Module["_EUCreateSignerEnd"] = function () {
  return Module["asm"]["Dc"].apply(null, arguments);
});
var _EUCtxASiCAppendSign = (Module["_EUCtxASiCAppendSign"] = function () {
  return Module["asm"]["Ec"].apply(null, arguments);
});
var _EUCtxASiCGetSignerInfo = (Module["_EUCtxASiCGetSignerInfo"] = function () {
  return Module["asm"]["Fc"].apply(null, arguments);
});
var _EUCtxASiCSignData = (Module["_EUCtxASiCSignData"] = function () {
  return Module["asm"]["Gc"].apply(null, arguments);
});
var _EUCtxAppendSign = (Module["_EUCtxAppendSign"] = function () {
  return Module["asm"]["Hc"].apply(null, arguments);
});
var _EUCtxAppendSignHash = (Module["_EUCtxAppendSignHash"] = function () {
  return Module["asm"]["Ic"].apply(null, arguments);
});
var _EUCtxAppendSignHashValue = (Module["_EUCtxAppendSignHashValue"] =
  function () {
    return Module["asm"]["Jc"].apply(null, arguments);
  });
var _EUCtxAppendSigner = (Module["_EUCtxAppendSigner"] = function () {
  return Module["asm"]["Kc"].apply(null, arguments);
});
var _EUCtxChangeOwnCertificatesStatus = (Module[
  "_EUCtxChangeOwnCertificatesStatus"
] = function () {
  return Module["asm"]["Lc"].apply(null, arguments);
});
var _EUCtxCreate = (Module["_EUCtxCreate"] = function () {
  return Module["asm"]["Mc"].apply(null, arguments);
});
var _EUCtxCreateEmptySign = (Module["_EUCtxCreateEmptySign"] = function () {
  return Module["asm"]["Nc"].apply(null, arguments);
});
var _EUCtxCreateSigner = (Module["_EUCtxCreateSigner"] = function () {
  return Module["asm"]["Oc"].apply(null, arguments);
});
var _EUCtxCreateSignerBegin = (Module["_EUCtxCreateSignerBegin"] = function () {
  return Module["asm"]["Pc"].apply(null, arguments);
});
var _EUCtxDevelopData = (Module["_EUCtxDevelopData"] = function () {
  return Module["asm"]["Qc"].apply(null, arguments);
});
var _EUCtxEnumOwnCertificates = (Module["_EUCtxEnumOwnCertificates"] =
  function () {
    return Module["asm"]["Rc"].apply(null, arguments);
  });
var _EUCtxEnumPrivateKeyInfo = (Module["_EUCtxEnumPrivateKeyInfo"] =
  function () {
    return Module["asm"]["Sc"].apply(null, arguments);
  });
var _EUCtxEnvelopData = (Module["_EUCtxEnvelopData"] = function () {
  return Module["asm"]["Tc"].apply(null, arguments);
});
var _EUCtxEnvelopDataRSA = (Module["_EUCtxEnvelopDataRSA"] = function () {
  return Module["asm"]["Uc"].apply(null, arguments);
});
var _EUCtxEnvelopDataWithDynamicKey = (Module[
  "_EUCtxEnvelopDataWithDynamicKey"
] = function () {
  return Module["asm"]["Vc"].apply(null, arguments);
});
var _EUCtxEnvelopDataWithSettings2 = (Module["_EUCtxEnvelopDataWithSettings2"] =
  function () {
    return Module["asm"]["Wc"].apply(null, arguments);
  });
var _EUCtxExportPrivateKeyContainer = (Module[
  "_EUCtxExportPrivateKeyContainer"
] = function () {
  return Module["asm"]["Xc"].apply(null, arguments);
});
var _EUCtxExportPrivateKeyPFXContainer = (Module[
  "_EUCtxExportPrivateKeyPFXContainer"
] = function () {
  return Module["asm"]["Yc"].apply(null, arguments);
});
var _EUCtxFree = (Module["_EUCtxFree"] = function () {
  return Module["asm"]["Zc"].apply(null, arguments);
});
var _EUCtxFreeCertOwnerInfo = (Module["_EUCtxFreeCertOwnerInfo"] = function () {
  return Module["asm"]["_c"].apply(null, arguments);
});
var _EUCtxFreeCertificateInfoEx = (Module["_EUCtxFreeCertificateInfoEx"] =
  function () {
    return Module["asm"]["$c"].apply(null, arguments);
  });
var _EUCtxFreeEUserParams = (Module["_EUCtxFreeEUserParams"] = function () {
  return Module["asm"]["ad"].apply(null, arguments);
});
var _EUCtxFreeHash = (Module["_EUCtxFreeHash"] = function () {
  return Module["asm"]["bd"].apply(null, arguments);
});
var _EUCtxFreeMemory = (Module["_EUCtxFreeMemory"] = function () {
  return Module["asm"]["cd"].apply(null, arguments);
});
var _EUCtxFreePrivateKey = (Module["_EUCtxFreePrivateKey"] = function () {
  return Module["asm"]["dd"].apply(null, arguments);
});
var _EUCtxFreeSenderInfo = (Module["_EUCtxFreeSenderInfo"] = function () {
  return Module["asm"]["ed"].apply(null, arguments);
});
var _EUCtxFreeSignInfo = (Module["_EUCtxFreeSignInfo"] = function () {
  return Module["asm"]["fd"].apply(null, arguments);
});
var _EUCtxGetCertificateFromPrivateKey = (Module[
  "_EUCtxGetCertificateFromPrivateKey"
] = function () {
  return Module["asm"]["gd"].apply(null, arguments);
});
var _EUCtxGetFileSignerInfo = (Module["_EUCtxGetFileSignerInfo"] = function () {
  return Module["asm"]["hd"].apply(null, arguments);
});
var _EUCtxGetFileSignsCount = (Module["_EUCtxGetFileSignsCount"] = function () {
  return Module["asm"]["id"].apply(null, arguments);
});
var _EUCtxGetOwnCertificate = (Module["_EUCtxGetOwnCertificate"] = function () {
  return Module["asm"]["jd"].apply(null, arguments);
});
var _EUCtxGetOwnEUserParams = (Module["_EUCtxGetOwnEUserParams"] = function () {
  return Module["asm"]["kd"].apply(null, arguments);
});
var _EUCtxGetRecipientInfo = (Module["_EUCtxGetRecipientInfo"] = function () {
  return Module["asm"]["ld"].apply(null, arguments);
});
var _EUCtxGetRecipientsCount = (Module["_EUCtxGetRecipientsCount"] =
  function () {
    return Module["asm"]["md"].apply(null, arguments);
  });
var _EUCtxGetSenderInfo = (Module["_EUCtxGetSenderInfo"] = function () {
  return Module["asm"]["nd"].apply(null, arguments);
});
var _EUCtxGetSignValue = (Module["_EUCtxGetSignValue"] = function () {
  return Module["asm"]["od"].apply(null, arguments);
});
var _EUCtxGetSignerInfo = (Module["_EUCtxGetSignerInfo"] = function () {
  return Module["asm"]["pd"].apply(null, arguments);
});
var _EUCtxGetSignsCount = (Module["_EUCtxGetSignsCount"] = function () {
  return Module["asm"]["qd"].apply(null, arguments);
});
var _EUCtxHashData = (Module["_EUCtxHashData"] = function () {
  return Module["asm"]["rd"].apply(null, arguments);
});
var _EUCtxHashDataBegin = (Module["_EUCtxHashDataBegin"] = function () {
  return Module["asm"]["sd"].apply(null, arguments);
});
var _EUCtxHashDataContinue = (Module["_EUCtxHashDataContinue"] = function () {
  return Module["asm"]["td"].apply(null, arguments);
});
var _EUCtxHashDataEnd = (Module["_EUCtxHashDataEnd"] = function () {
  return Module["asm"]["ud"].apply(null, arguments);
});
var _EUCtxHashFile = (Module["_EUCtxHashFile"] = function () {
  return Module["asm"]["vd"].apply(null, arguments);
});
var _EUCtxIsAlreadySigned = (Module["_EUCtxIsAlreadySigned"] = function () {
  return Module["asm"]["wd"].apply(null, arguments);
});
var _EUCtxMakeDeviceCertificate = (Module["_EUCtxMakeDeviceCertificate"] =
  function () {
    return Module["asm"]["xd"].apply(null, arguments);
  });
var _EUCtxMakeNewOwnCertificateWithCR = (Module[
  "_EUCtxMakeNewOwnCertificateWithCR"
] = function () {
  return Module["asm"]["yd"].apply(null, arguments);
});
var _EUCtxModifyOwnEUserParams = (Module["_EUCtxModifyOwnEUserParams"] =
  function () {
    return Module["asm"]["zd"].apply(null, arguments);
  });
var _EUCtxPDFGetSignerInfo = (Module["_EUCtxPDFGetSignerInfo"] = function () {
  return Module["asm"]["Ad"].apply(null, arguments);
});
var _EUCtxPDFSignData = (Module["_EUCtxPDFSignData"] = function () {
  return Module["asm"]["Bd"].apply(null, arguments);
});
var _EUCtxReadPrivateKeyBinary = (Module["_EUCtxReadPrivateKeyBinary"] =
  function () {
    return Module["asm"]["Cd"].apply(null, arguments);
  });
var _EUCtxSetParameter = (Module["_EUCtxSetParameter"] = function () {
  return Module["asm"]["Dd"].apply(null, arguments);
});
var _EUCtxSignData = (Module["_EUCtxSignData"] = function () {
  return Module["asm"]["Ed"].apply(null, arguments);
});
var _EUCtxSignFile = (Module["_EUCtxSignFile"] = function () {
  return Module["asm"]["Fd"].apply(null, arguments);
});
var _EUCtxSignHash = (Module["_EUCtxSignHash"] = function () {
  return Module["asm"]["Gd"].apply(null, arguments);
});
var _EUCtxSignHashValue = (Module["_EUCtxSignHashValue"] = function () {
  return Module["asm"]["Hd"].apply(null, arguments);
});
var _EUCtxVerifyData = (Module["_EUCtxVerifyData"] = function () {
  return Module["asm"]["Id"].apply(null, arguments);
});
var _EUCtxVerifyDataInternal = (Module["_EUCtxVerifyDataInternal"] =
  function () {
    return Module["asm"]["Jd"].apply(null, arguments);
  });
var _EUCtxVerifyFile = (Module["_EUCtxVerifyFile"] = function () {
  return Module["asm"]["Kd"].apply(null, arguments);
});
var _EUCtxVerifyHash = (Module["_EUCtxVerifyHash"] = function () {
  return Module["asm"]["Ld"].apply(null, arguments);
});
var _EUCtxVerifyHashValue = (Module["_EUCtxVerifyHashValue"] = function () {
  return Module["asm"]["Md"].apply(null, arguments);
});
var _EUCtxXAdESGetSignerInfo = (Module["_EUCtxXAdESGetSignerInfo"] =
  function () {
    return Module["asm"]["Nd"].apply(null, arguments);
  });
var _EUCtxXAdESSignData = (Module["_EUCtxXAdESSignData"] = function () {
  return Module["asm"]["Od"].apply(null, arguments);
});
var _EUDevelopData = (Module["_EUDevelopData"] = function () {
  return Module["asm"]["Pd"].apply(null, arguments);
});
var _EUDoesNeedSetSettings = (Module["_EUDoesNeedSetSettings"] = function () {
  return Module["asm"]["Qd"].apply(null, arguments);
});
var _EUEnumCertificatesEx = (Module["_EUEnumCertificatesEx"] = function () {
  return Module["asm"]["Rd"].apply(null, arguments);
});
var _EUEnumJKSPrivateKeys = (Module["_EUEnumJKSPrivateKeys"] = function () {
  return Module["asm"]["Sd"].apply(null, arguments);
});
var _EUEnumOwnCertificates = (Module["_EUEnumOwnCertificates"] = function () {
  return Module["asm"]["Td"].apply(null, arguments);
});
var _EUEnvelopDataEx = (Module["_EUEnvelopDataEx"] = function () {
  return Module["asm"]["Ud"].apply(null, arguments);
});
var _EUEnvelopDataRSAEx = (Module["_EUEnvelopDataRSAEx"] = function () {
  return Module["asm"]["Vd"].apply(null, arguments);
});
var _EUEnvelopDataToRecipientsWithDynamicKey = (Module[
  "_EUEnvelopDataToRecipientsWithDynamicKey"
] = function () {
  return Module["asm"]["Wd"].apply(null, arguments);
});
var _EUFinalize = (Module["_EUFinalize"] = function () {
  return Module["asm"]["Xd"].apply(null, arguments);
});
var _EUFreeCRInfo = (Module["_EUFreeCRInfo"] = function () {
  return Module["asm"]["Yd"].apply(null, arguments);
});
var _EUFreeCertOwnerInfo = (Module["_EUFreeCertOwnerInfo"] = function () {
  return Module["asm"]["Zd"].apply(null, arguments);
});
var _EUFreeCertificateInfo = (Module["_EUFreeCertificateInfo"] = function () {
  return Module["asm"]["_d"].apply(null, arguments);
});
var _EUFreeCertificateInfoEx = (Module["_EUFreeCertificateInfoEx"] =
  function () {
    return Module["asm"]["$d"].apply(null, arguments);
  });
var _EUFreeCertificatesArray = (Module["_EUFreeCertificatesArray"] =
  function () {
    return Module["asm"]["ae"].apply(null, arguments);
  });
var _EUFreeMemory = (Module["_EUFreeMemory"] = function () {
  return Module["asm"]["be"].apply(null, arguments);
});
var _EUFreeSenderInfo = (Module["_EUFreeSenderInfo"] = function () {
  return Module["asm"]["ce"].apply(null, arguments);
});
var _EUFreeSignInfo = (Module["_EUFreeSignInfo"] = function () {
  return Module["asm"]["de"].apply(null, arguments);
});
var _EUFreeTimeInfo = (Module["_EUFreeTimeInfo"] = function () {
  return Module["asm"]["ee"].apply(null, arguments);
});
var _EUGeneratePrivateKey2 = (Module["_EUGeneratePrivateKey2"] = function () {
  return Module["asm"]["fe"].apply(null, arguments);
});
var _EUGetCRInfo = (Module["_EUGetCRInfo"] = function () {
  return Module["asm"]["ge"].apply(null, arguments);
});
var _EUGetCertificate = (Module["_EUGetCertificate"] = function () {
  return Module["asm"]["he"].apply(null, arguments);
});
var _EUGetCertificates = (Module["_EUGetCertificates"] = function () {
  return Module["asm"]["ie"].apply(null, arguments);
});
var _EUGetCertificatesByKeyInfo = (Module["_EUGetCertificatesByKeyInfo"] =
  function () {
    return Module["asm"]["je"].apply(null, arguments);
  });
var _EUGetDataFromSignedData = (Module["_EUGetDataFromSignedData"] =
  function () {
    return Module["asm"]["ke"].apply(null, arguments);
  });
var _EUGetDataFromSignedFile = (Module["_EUGetDataFromSignedFile"] =
  function () {
    return Module["asm"]["le"].apply(null, arguments);
  });
var _EUGetDataHashFromSignedDataEx = (Module["_EUGetDataHashFromSignedDataEx"] =
  function () {
    return Module["asm"]["me"].apply(null, arguments);
  });
var _EUGetErrorLangDesc = (Module["_EUGetErrorLangDesc"] = function () {
  return Module["asm"]["ne"].apply(null, arguments);
});
var _EUGetFileSignTimeInfo = (Module["_EUGetFileSignTimeInfo"] = function () {
  return Module["asm"]["oe"].apply(null, arguments);
});
var _EUGetFileSignType = (Module["_EUGetFileSignType"] = function () {
  return Module["asm"]["pe"].apply(null, arguments);
});
var _EUGetJKSPrivateKey = (Module["_EUGetJKSPrivateKey"] = function () {
  return Module["asm"]["qe"].apply(null, arguments);
});
var _EUGetKeyInfoBinary = (Module["_EUGetKeyInfoBinary"] = function () {
  return Module["asm"]["re"].apply(null, arguments);
});
var _EUGetRecipient = (Module["_EUGetRecipient"] = function () {
  return Module["asm"]["se"].apply(null, arguments);
});
var _EUGetSignTimeInfo = (Module["_EUGetSignTimeInfo"] = function () {
  return Module["asm"]["te"].apply(null, arguments);
});
var _EUGetSignType = (Module["_EUGetSignType"] = function () {
  return Module["asm"]["ue"].apply(null, arguments);
});
var _EUGetSigner = (Module["_EUGetSigner"] = function () {
  return Module["asm"]["ve"].apply(null, arguments);
});
var _EUGetTSPByAccessInfo = (Module["_EUGetTSPByAccessInfo"] = function () {
  return Module["asm"]["we"].apply(null, arguments);
});
var _EUHashData = (Module["_EUHashData"] = function () {
  return Module["asm"]["xe"].apply(null, arguments);
});
var _EUInitialize = (Module["_EUInitialize"] = function () {
  return Module["asm"]["ye"].apply(null, arguments);
});
var _EUIsDataInSignedDataAvailable = (Module["_EUIsDataInSignedDataAvailable"] =
  function () {
    return Module["asm"]["ze"].apply(null, arguments);
  });
var _EUIsDataInSignedFileAvailable = (Module["_EUIsDataInSignedFileAvailable"] =
  function () {
    return Module["asm"]["Ae"].apply(null, arguments);
  });
var _EUIsEnvelopedData = (Module["_EUIsEnvelopedData"] = function () {
  return Module["asm"]["Be"].apply(null, arguments);
});
var _EUIsInitialized = (Module["_EUIsInitialized"] = function () {
  return Module["asm"]["Ce"].apply(null, arguments);
});
var _EUIsPrivateKeyReaded = (Module["_EUIsPrivateKeyReaded"] = function () {
  return Module["asm"]["De"].apply(null, arguments);
});
var _EUMakeNewCertificate = (Module["_EUMakeNewCertificate"] = function () {
  return Module["asm"]["Ee"].apply(null, arguments);
});
var _EUMakeNewCertificateEx = (Module["_EUMakeNewCertificateEx"] = function () {
  return Module["asm"]["Fe"].apply(null, arguments);
});
var _EUPDFCreateSignerBegin = (Module["_EUPDFCreateSignerBegin"] = function () {
  return Module["asm"]["Ge"].apply(null, arguments);
});
var _EUPDFCreateSignerEnd = (Module["_EUPDFCreateSignerEnd"] = function () {
  return Module["asm"]["He"].apply(null, arguments);
});
var _EUPDFGetSignTimeInfo = (Module["_EUPDFGetSignTimeInfo"] = function () {
  return Module["asm"]["Ie"].apply(null, arguments);
});
var _EUPDFGetSignType = (Module["_EUPDFGetSignType"] = function () {
  return Module["asm"]["Je"].apply(null, arguments);
});
var _EUPDFGetSignerInfo = (Module["_EUPDFGetSignerInfo"] = function () {
  return Module["asm"]["Ke"].apply(null, arguments);
});
var _EUPDFGetSignsCount = (Module["_EUPDFGetSignsCount"] = function () {
  return Module["asm"]["Le"].apply(null, arguments);
});
var _EUPDFSignData = (Module["_EUPDFSignData"] = function () {
  return Module["asm"]["Me"].apply(null, arguments);
});
var _EUPDFVerifyData = (Module["_EUPDFVerifyData"] = function () {
  return Module["asm"]["Ne"].apply(null, arguments);
});
var _EUParseCertificate = (Module["_EUParseCertificate"] = function () {
  return Module["asm"]["Oe"].apply(null, arguments);
});
var _EUParseCertificateEx = (Module["_EUParseCertificateEx"] = function () {
  return Module["asm"]["Pe"].apply(null, arguments);
});
var _EUParseCryptoHeader = (Module["_EUParseCryptoHeader"] = function () {
  return Module["asm"]["Qe"].apply(null, arguments);
});
var _EUParseTransportHeader = (Module["_EUParseTransportHeader"] = function () {
  return Module["asm"]["Re"].apply(null, arguments);
});
var _EUPasswordRecipientDevelopData = (Module[
  "_EUPasswordRecipientDevelopData"
] = function () {
  return Module["asm"]["Se"].apply(null, arguments);
});
var _EUProtectDataByPassword = (Module["_EUProtectDataByPassword"] =
  function () {
    return Module["asm"]["Te"].apply(null, arguments);
  });
var _EURawSignData = (Module["_EURawSignData"] = function () {
  return Module["asm"]["Ue"].apply(null, arguments);
});
var _EURawSignHash = (Module["_EURawSignHash"] = function () {
  return Module["asm"]["Ve"].apply(null, arguments);
});
var _EURawVerifyDataEx = (Module["_EURawVerifyDataEx"] = function () {
  return Module["asm"]["We"].apply(null, arguments);
});
var _EURawVerifyHash = (Module["_EURawVerifyHash"] = function () {
  return Module["asm"]["Xe"].apply(null, arguments);
});
var _EUReadPrivateKeyBinary = (Module["_EUReadPrivateKeyBinary"] = function () {
  return Module["asm"]["Ye"].apply(null, arguments);
});
var _EUResetPrivateKey = (Module["_EUResetPrivateKey"] = function () {
  return Module["asm"]["Ze"].apply(null, arguments);
});
var _EUSServerClientCheckGeneratePrivateKeyStatus = (Module[
  "_EUSServerClientCheckGeneratePrivateKeyStatus"
] = function () {
  return Module["asm"]["_e"].apply(null, arguments);
});
var _EUSServerClientCheckSignHashStatus = (Module[
  "_EUSServerClientCheckSignHashStatus"
] = function () {
  return Module["asm"]["$e"].apply(null, arguments);
});
var _EUSServerClientCheckSignHashesStatus = (Module[
  "_EUSServerClientCheckSignHashesStatus"
] = function () {
  return Module["asm"]["af"].apply(null, arguments);
});
var _EUSServerClientFreeSignHashesResults = (Module[
  "_EUSServerClientFreeSignHashesResults"
] = function () {
  return Module["asm"]["bf"].apply(null, arguments);
});
var _EUSServerClientGeneratePrivateKeyAsync = (Module[
  "_EUSServerClientGeneratePrivateKeyAsync"
] = function () {
  return Module["asm"]["cf"].apply(null, arguments);
});
var _EUSServerClientSignHashAsync = (Module["_EUSServerClientSignHashAsync"] =
  function () {
    return Module["asm"]["df"].apply(null, arguments);
  });
var _EUSServerClientSignHashesAsync = (Module[
  "_EUSServerClientSignHashesAsync"
] = function () {
  return Module["asm"]["ef"].apply(null, arguments);
});
var _EUSaveCRL = (Module["_EUSaveCRL"] = function () {
  return Module["asm"]["ff"].apply(null, arguments);
});
var _EUSaveCertificate = (Module["_EUSaveCertificate"] = function () {
  return Module["asm"]["gf"].apply(null, arguments);
});
var _EUSaveCertificates = (Module["_EUSaveCertificates"] = function () {
  return Module["asm"]["hf"].apply(null, arguments);
});
var _EUSaveCertificatesEx = (Module["_EUSaveCertificatesEx"] = function () {
  return Module["asm"]["jf"].apply(null, arguments);
});
var _EUSaveTSL = (Module["_EUSaveTSL"] = function () {
  return Module["asm"]["kf"].apply(null, arguments);
});
var _EUServerDynamicKeySessionCreate = (Module[
  "_EUServerDynamicKeySessionCreate"
] = function () {
  return Module["asm"]["lf"].apply(null, arguments);
});
var _EUServerSessionCreateStep1 = (Module["_EUServerSessionCreateStep1"] =
  function () {
    return Module["asm"]["mf"].apply(null, arguments);
  });
var _EUServerSessionCreateStep2 = (Module["_EUServerSessionCreateStep2"] =
  function () {
    return Module["asm"]["nf"].apply(null, arguments);
  });
var _EUSessionCheckCertificates = (Module["_EUSessionCheckCertificates"] =
  function () {
    return Module["asm"]["of"].apply(null, arguments);
  });
var _EUSessionDecrypt = (Module["_EUSessionDecrypt"] = function () {
  return Module["asm"]["pf"].apply(null, arguments);
});
var _EUSessionDecryptContinue = (Module["_EUSessionDecryptContinue"] =
  function () {
    return Module["asm"]["qf"].apply(null, arguments);
  });
var _EUSessionDestroy = (Module["_EUSessionDestroy"] = function () {
  return Module["asm"]["rf"].apply(null, arguments);
});
var _EUSessionEncrypt = (Module["_EUSessionEncrypt"] = function () {
  return Module["asm"]["sf"].apply(null, arguments);
});
var _EUSessionEncryptContinue = (Module["_EUSessionEncryptContinue"] =
  function () {
    return Module["asm"]["tf"].apply(null, arguments);
  });
var _EUSessionGetPeerCertificateInfo = (Module[
  "_EUSessionGetPeerCertificateInfo"
] = function () {
  return Module["asm"]["uf"].apply(null, arguments);
});
var _EUSessionIsInitialized = (Module["_EUSessionIsInitialized"] = function () {
  return Module["asm"]["vf"].apply(null, arguments);
});
var _EUSessionLoad = (Module["_EUSessionLoad"] = function () {
  return Module["asm"]["wf"].apply(null, arguments);
});
var _EUSessionSave = (Module["_EUSessionSave"] = function () {
  return Module["asm"]["xf"].apply(null, arguments);
});
var _EUSetCMPSettings = (Module["_EUSetCMPSettings"] = function () {
  return Module["asm"]["yf"].apply(null, arguments);
});
var _EUSetFileStoreSettings = (Module["_EUSetFileStoreSettings"] = function () {
  return Module["asm"]["zf"].apply(null, arguments);
});
var _EUSetLDAPSettings = (Module["_EUSetLDAPSettings"] = function () {
  return Module["asm"]["Af"].apply(null, arguments);
});
var _EUSetModeSettings = (Module["_EUSetModeSettings"] = function () {
  return Module["asm"]["Bf"].apply(null, arguments);
});
var _EUSetOCSPAccessInfoModeSettings = (Module[
  "_EUSetOCSPAccessInfoModeSettings"
] = function () {
  return Module["asm"]["Cf"].apply(null, arguments);
});
var _EUSetOCSPAccessInfoSettings = (Module["_EUSetOCSPAccessInfoSettings"] =
  function () {
    return Module["asm"]["Df"].apply(null, arguments);
  });
var _EUSetOCSPResponseExpireTime = (Module["_EUSetOCSPResponseExpireTime"] =
  function () {
    return Module["asm"]["Ef"].apply(null, arguments);
  });
var _EUSetOCSPSettings = (Module["_EUSetOCSPSettings"] = function () {
  return Module["asm"]["Ff"].apply(null, arguments);
});
var _EUSetProxySettings = (Module["_EUSetProxySettings"] = function () {
  return Module["asm"]["Gf"].apply(null, arguments);
});
var _EUSetRuntimeParameter = (Module["_EUSetRuntimeParameter"] = function () {
  return Module["asm"]["Hf"].apply(null, arguments);
});
var _EUSetTSLSettings = (Module["_EUSetTSLSettings"] = function () {
  return Module["asm"]["If"].apply(null, arguments);
});
var _EUSetTSPSettings = (Module["_EUSetTSPSettings"] = function () {
  return Module["asm"]["Jf"].apply(null, arguments);
});
var _EUSignData = (Module["_EUSignData"] = function () {
  return Module["asm"]["Kf"].apply(null, arguments);
});
var _EUSignDataInternal = (Module["_EUSignDataInternal"] = function () {
  return Module["asm"]["Lf"].apply(null, arguments);
});
var _EUSignDataRSA = (Module["_EUSignDataRSA"] = function () {
  return Module["asm"]["Mf"].apply(null, arguments);
});
var _EUSignHash = (Module["_EUSignHash"] = function () {
  return Module["asm"]["Nf"].apply(null, arguments);
});
var _EUSignHashRSA = (Module["_EUSignHashRSA"] = function () {
  return Module["asm"]["Of"].apply(null, arguments);
});
var _EUUnprotectDataByPassword = (Module["_EUUnprotectDataByPassword"] =
  function () {
    return Module["asm"]["Pf"].apply(null, arguments);
  });
var _EUVerifyData = (Module["_EUVerifyData"] = function () {
  return Module["asm"]["Qf"].apply(null, arguments);
});
var _EUVerifyDataInternal = (Module["_EUVerifyDataInternal"] = function () {
  return Module["asm"]["Rf"].apply(null, arguments);
});
var _EUVerifyDataInternalOnTimeEx = (Module["_EUVerifyDataInternalOnTimeEx"] =
  function () {
    return Module["asm"]["Sf"].apply(null, arguments);
  });
var _EUVerifyDataOnTimeEx = (Module["_EUVerifyDataOnTimeEx"] = function () {
  return Module["asm"]["Tf"].apply(null, arguments);
});
var _EUVerifyFile = (Module["_EUVerifyFile"] = function () {
  return Module["asm"]["Uf"].apply(null, arguments);
});
var _EUVerifyFileOnTimeEx = (Module["_EUVerifyFileOnTimeEx"] = function () {
  return Module["asm"]["Vf"].apply(null, arguments);
});
var _EUVerifyHash = (Module["_EUVerifyHash"] = function () {
  return Module["asm"]["Wf"].apply(null, arguments);
});
var _EUVerifyHashOnTimeEx = (Module["_EUVerifyHashOnTimeEx"] = function () {
  return Module["asm"]["Xf"].apply(null, arguments);
});
var _EUXAdESCreateSignerBegin = (Module["_EUXAdESCreateSignerBegin"] =
  function () {
    return Module["asm"]["Yf"].apply(null, arguments);
  });
var _EUXAdESCreateSignerEnd = (Module["_EUXAdESCreateSignerEnd"] = function () {
  return Module["asm"]["Zf"].apply(null, arguments);
});
var _EUXAdESGetReference = (Module["_EUXAdESGetReference"] = function () {
  return Module["asm"]["_f"].apply(null, arguments);
});
var _EUXAdESGetSignLevel = (Module["_EUXAdESGetSignLevel"] = function () {
  return Module["asm"]["$f"].apply(null, arguments);
});
var _EUXAdESGetSignReferences = (Module["_EUXAdESGetSignReferences"] =
  function () {
    return Module["asm"]["ag"].apply(null, arguments);
  });
var _EUXAdESGetSignTimeInfo = (Module["_EUXAdESGetSignTimeInfo"] = function () {
  return Module["asm"]["bg"].apply(null, arguments);
});
var _EUXAdESGetSignerInfo = (Module["_EUXAdESGetSignerInfo"] = function () {
  return Module["asm"]["cg"].apply(null, arguments);
});
var _EUXAdESGetSignsCount = (Module["_EUXAdESGetSignsCount"] = function () {
  return Module["asm"]["dg"].apply(null, arguments);
});
var _EUXAdESGetType = (Module["_EUXAdESGetType"] = function () {
  return Module["asm"]["eg"].apply(null, arguments);
});
var _EUXAdESSignData = (Module["_EUXAdESSignData"] = function () {
  return Module["asm"]["fg"].apply(null, arguments);
});
var _EUXAdESVerifyData = (Module["_EUXAdESVerifyData"] = function () {
  return Module["asm"]["gg"].apply(null, arguments);
});
var _QRCodeEncode = (Module["_QRCodeEncode"] = function () {
  return Module["asm"]["hg"].apply(null, arguments);
});
var _QRCodeFreeMemory = (Module["_QRCodeFreeMemory"] = function () {
  return Module["asm"]["ig"].apply(null, arguments);
});
var __ZSt18uncaught_exceptionv = (Module["__ZSt18uncaught_exceptionv"] =
  function () {
    return Module["asm"]["jg"].apply(null, arguments);
  });
var ___cxa_can_catch = (Module["___cxa_can_catch"] = function () {
  return Module["asm"]["kg"].apply(null, arguments);
});
var ___cxa_is_pointer_type = (Module["___cxa_is_pointer_type"] = function () {
  return Module["asm"]["lg"].apply(null, arguments);
});
var ___errno_location = (Module["___errno_location"] = function () {
  return Module["asm"]["mg"].apply(null, arguments);
});
var __get_daylight = (Module["__get_daylight"] = function () {
  return Module["asm"]["ng"].apply(null, arguments);
});
var __get_timezone = (Module["__get_timezone"] = function () {
  return Module["asm"]["og"].apply(null, arguments);
});
var __get_tzname = (Module["__get_tzname"] = function () {
  return Module["asm"]["pg"].apply(null, arguments);
});
var _free = (Module["_free"] = function () {
  return Module["asm"]["qg"].apply(null, arguments);
});
var _htons = (Module["_htons"] = function () {
  return Module["asm"]["rg"].apply(null, arguments);
});
var _llvm_bswap_i32 = (Module["_llvm_bswap_i32"] = function () {
  return Module["asm"]["sg"].apply(null, arguments);
});
var _malloc = (Module["_malloc"] = function () {
  return Module["asm"]["tg"].apply(null, arguments);
});
var _memalign = (Module["_memalign"] = function () {
  return Module["asm"]["ug"].apply(null, arguments);
});
var _memset = (Module["_memset"] = function () {
  return Module["asm"]["vg"].apply(null, arguments);
});
var _ntohs = (Module["_ntohs"] = function () {
  return Module["asm"]["wg"].apply(null, arguments);
});
var _setThrew = (Module["_setThrew"] = function () {
  return Module["asm"]["xg"].apply(null, arguments);
});
var globalCtors = (Module["globalCtors"] = function () {
  return Module["asm"]["Lh"].apply(null, arguments);
});
var stackAlloc = (Module["stackAlloc"] = function () {
  return Module["asm"]["Mh"].apply(null, arguments);
});
var stackRestore = (Module["stackRestore"] = function () {
  return Module["asm"]["Nh"].apply(null, arguments);
});
var stackSave = (Module["stackSave"] = function () {
  return Module["asm"]["Oh"].apply(null, arguments);
});
var dynCall_diii = (Module["dynCall_diii"] = function () {
  return Module["asm"]["yg"].apply(null, arguments);
});
var dynCall_fiii = (Module["dynCall_fiii"] = function () {
  return Module["asm"]["zg"].apply(null, arguments);
});
var dynCall_i = (Module["dynCall_i"] = function () {
  return Module["asm"]["Ag"].apply(null, arguments);
});
var dynCall_ii = (Module["dynCall_ii"] = function () {
  return Module["asm"]["Bg"].apply(null, arguments);
});
var dynCall_iid = (Module["dynCall_iid"] = function () {
  return Module["asm"]["Cg"].apply(null, arguments);
});
var dynCall_iii = (Module["dynCall_iii"] = function () {
  return Module["asm"]["Dg"].apply(null, arguments);
});
var dynCall_iiii = (Module["dynCall_iiii"] = function () {
  return Module["asm"]["Eg"].apply(null, arguments);
});
var dynCall_iiiii = (Module["dynCall_iiiii"] = function () {
  return Module["asm"]["Fg"].apply(null, arguments);
});
var dynCall_iiiiid = (Module["dynCall_iiiiid"] = function () {
  return Module["asm"]["Gg"].apply(null, arguments);
});
var dynCall_iiiiiddd = (Module["dynCall_iiiiiddd"] = function () {
  return Module["asm"]["Hg"].apply(null, arguments);
});
var dynCall_iiiiii = (Module["dynCall_iiiiii"] = function () {
  return Module["asm"]["Ig"].apply(null, arguments);
});
var dynCall_iiiiiii = (Module["dynCall_iiiiiii"] = function () {
  return Module["asm"]["Jg"].apply(null, arguments);
});
var dynCall_iiiiiiii = (Module["dynCall_iiiiiiii"] = function () {
  return Module["asm"]["Kg"].apply(null, arguments);
});
var dynCall_iiiiiiiii = (Module["dynCall_iiiiiiiii"] = function () {
  return Module["asm"]["Lg"].apply(null, arguments);
});
var dynCall_iiiiiiiiii = (Module["dynCall_iiiiiiiiii"] = function () {
  return Module["asm"]["Mg"].apply(null, arguments);
});
var dynCall_iiiiiiiiiii = (Module["dynCall_iiiiiiiiiii"] = function () {
  return Module["asm"]["Ng"].apply(null, arguments);
});
var dynCall_iiiiiiiiiiii = (Module["dynCall_iiiiiiiiiiii"] = function () {
  return Module["asm"]["Og"].apply(null, arguments);
});
var dynCall_iiiiiiiiiiiii = (Module["dynCall_iiiiiiiiiiiii"] = function () {
  return Module["asm"]["Pg"].apply(null, arguments);
});
var dynCall_iiiiiiiiiiiiii = (Module["dynCall_iiiiiiiiiiiiii"] = function () {
  return Module["asm"]["Qg"].apply(null, arguments);
});
var dynCall_iiiiiiiiiiiiiii = (Module["dynCall_iiiiiiiiiiiiiii"] = function () {
  return Module["asm"]["Rg"].apply(null, arguments);
});
var dynCall_iiiiiiiiiiiiiiii = (Module["dynCall_iiiiiiiiiiiiiiii"] =
  function () {
    return Module["asm"]["Sg"].apply(null, arguments);
  });
var dynCall_iiiiiiiiiiiiiiiii = (Module["dynCall_iiiiiiiiiiiiiiiii"] =
  function () {
    return Module["asm"]["Tg"].apply(null, arguments);
  });
var dynCall_iiiiiiiiiiiiiiiiii = (Module["dynCall_iiiiiiiiiiiiiiiiii"] =
  function () {
    return Module["asm"]["Ug"].apply(null, arguments);
  });
var dynCall_iiiiiiiiiiiiiiiiiii = (Module["dynCall_iiiiiiiiiiiiiiiiiii"] =
  function () {
    return Module["asm"]["Vg"].apply(null, arguments);
  });
var dynCall_iiiiiiiiiiiiiiiiiiiii = (Module["dynCall_iiiiiiiiiiiiiiiiiiiii"] =
  function () {
    return Module["asm"]["Wg"].apply(null, arguments);
  });
var dynCall_iiiiiiiiiiiiiiiiiiiiiiiiiii = (Module[
  "dynCall_iiiiiiiiiiiiiiiiiiiiiiiiiii"
] = function () {
  return Module["asm"]["Xg"].apply(null, arguments);
});
var dynCall_iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii = (Module[
  "dynCall_iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
] = function () {
  return Module["asm"]["Yg"].apply(null, arguments);
});
var dynCall_iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii = (Module[
  "dynCall_iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
] = function () {
  return Module["asm"]["Zg"].apply(null, arguments);
});
var dynCall_iiiiiji = (Module["dynCall_iiiiiji"] = function () {
  return Module["asm"]["_g"].apply(null, arguments);
});
var dynCall_iiiiji = (Module["dynCall_iiiiji"] = function () {
  return Module["asm"]["$g"].apply(null, arguments);
});
var dynCall_iij = (Module["dynCall_iij"] = function () {
  return Module["asm"]["ah"].apply(null, arguments);
});
var dynCall_iiji = (Module["dynCall_iiji"] = function () {
  return Module["asm"]["bh"].apply(null, arguments);
});
var dynCall_iijii = (Module["dynCall_iijii"] = function () {
  return Module["asm"]["ch"].apply(null, arguments);
});
var dynCall_iijiii = (Module["dynCall_iijiii"] = function () {
  return Module["asm"]["dh"].apply(null, arguments);
});
var dynCall_iijiji = (Module["dynCall_iijiji"] = function () {
  return Module["asm"]["eh"].apply(null, arguments);
});
var dynCall_iijji = (Module["dynCall_iijji"] = function () {
  return Module["asm"]["fh"].apply(null, arguments);
});
var dynCall_ji = (Module["dynCall_ji"] = function () {
  return Module["asm"]["gh"].apply(null, arguments);
});
var dynCall_jiiii = (Module["dynCall_jiiii"] = function () {
  return Module["asm"]["hh"].apply(null, arguments);
});
var dynCall_jiij = (Module["dynCall_jiij"] = function () {
  return Module["asm"]["ih"].apply(null, arguments);
});
var dynCall_v = (Module["dynCall_v"] = function () {
  return Module["asm"]["jh"].apply(null, arguments);
});
var dynCall_vi = (Module["dynCall_vi"] = function () {
  return Module["asm"]["kh"].apply(null, arguments);
});
var dynCall_vid = (Module["dynCall_vid"] = function () {
  return Module["asm"]["lh"].apply(null, arguments);
});
var dynCall_vidddi = (Module["dynCall_vidddi"] = function () {
  return Module["asm"]["mh"].apply(null, arguments);
});
var dynCall_viddidd = (Module["dynCall_viddidd"] = function () {
  return Module["asm"]["nh"].apply(null, arguments);
});
var dynCall_vii = (Module["dynCall_vii"] = function () {
  return Module["asm"]["oh"].apply(null, arguments);
});
var dynCall_viii = (Module["dynCall_viii"] = function () {
  return Module["asm"]["ph"].apply(null, arguments);
});
var dynCall_viiii = (Module["dynCall_viiii"] = function () {
  return Module["asm"]["qh"].apply(null, arguments);
});
var dynCall_viiiii = (Module["dynCall_viiiii"] = function () {
  return Module["asm"]["rh"].apply(null, arguments);
});
var dynCall_viiiiii = (Module["dynCall_viiiiii"] = function () {
  return Module["asm"]["sh"].apply(null, arguments);
});
var dynCall_viiiiiii = (Module["dynCall_viiiiiii"] = function () {
  return Module["asm"]["th"].apply(null, arguments);
});
var dynCall_viiiiiiii = (Module["dynCall_viiiiiiii"] = function () {
  return Module["asm"]["uh"].apply(null, arguments);
});
var dynCall_viiiiiiiii = (Module["dynCall_viiiiiiiii"] = function () {
  return Module["asm"]["vh"].apply(null, arguments);
});
var dynCall_viiiiiiiiii = (Module["dynCall_viiiiiiiiii"] = function () {
  return Module["asm"]["wh"].apply(null, arguments);
});
var dynCall_viiiiiiiiiii = (Module["dynCall_viiiiiiiiiii"] = function () {
  return Module["asm"]["xh"].apply(null, arguments);
});
var dynCall_viiiiiiiiiiii = (Module["dynCall_viiiiiiiiiiii"] = function () {
  return Module["asm"]["yh"].apply(null, arguments);
});
var dynCall_viiiiiiiiiiiii = (Module["dynCall_viiiiiiiiiiiii"] = function () {
  return Module["asm"]["zh"].apply(null, arguments);
});
var dynCall_viiiiiiiiiiiiiii = (Module["dynCall_viiiiiiiiiiiiiii"] =
  function () {
    return Module["asm"]["Ah"].apply(null, arguments);
  });
var dynCall_viiiiiiijj = (Module["dynCall_viiiiiiijj"] = function () {
  return Module["asm"]["Bh"].apply(null, arguments);
});
var dynCall_viiiijj = (Module["dynCall_viiiijj"] = function () {
  return Module["asm"]["Ch"].apply(null, arguments);
});
var dynCall_viiijji = (Module["dynCall_viiijji"] = function () {
  return Module["asm"]["Dh"].apply(null, arguments);
});
var dynCall_viij = (Module["dynCall_viij"] = function () {
  return Module["asm"]["Eh"].apply(null, arguments);
});
var dynCall_viiji = (Module["dynCall_viiji"] = function () {
  return Module["asm"]["Fh"].apply(null, arguments);
});
var dynCall_viijii = (Module["dynCall_viijii"] = function () {
  return Module["asm"]["Gh"].apply(null, arguments);
});
var dynCall_viijiii = (Module["dynCall_viijiii"] = function () {
  return Module["asm"]["Hh"].apply(null, arguments);
});
var dynCall_viijiiiiii = (Module["dynCall_viijiiiiii"] = function () {
  return Module["asm"]["Ih"].apply(null, arguments);
});
var dynCall_vij = (Module["dynCall_vij"] = function () {
  return Module["asm"]["Jh"].apply(null, arguments);
});
var dynCall_viji = (Module["dynCall_viji"] = function () {
  return Module["asm"]["Kh"].apply(null, arguments);
});
Module["asm"] = asm;
Module["ccall"] = ccall;
Module["setValue"] = setValue;
Module["getValue"] = getValue;
Module["writeArrayToMemory"] = writeArrayToMemory;
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;
dependenciesFulfilled = function runCaller() {
  if (!Module["calledRun"]) run();
  if (!Module["calledRun"]) dependenciesFulfilled = runCaller;
};
function run(args) {
  args = args || Module["arguments"];
  if (runDependencies > 0) {
    return;
  }
  preRun();
  if (runDependencies > 0) return;
  if (Module["calledRun"]) return;
  function doRun() {
    if (Module["calledRun"]) return;
    Module["calledRun"] = true;
    if (ABORT) return;
    ensureInitRuntime();
    preMain();
    if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
    postRun();
  }
  if (Module["setStatus"]) {
    Module["setStatus"]("Running...");
    setTimeout(function () {
      setTimeout(function () {
        Module["setStatus"]("");
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
}
Module["run"] = run;
function exit(status, implicit) {
  if (implicit && Module["noExitRuntime"] && status === 0) {
    return;
  }
  if (Module["noExitRuntime"]) {
  } else {
    ABORT = true;
    EXITSTATUS = status;
    exitRuntime();
    if (Module["onExit"]) Module["onExit"](status);
  }
  Module["quit"](status, new ExitStatus(status));
}
function abort(what) {
  if (Module["onAbort"]) {
    Module["onAbort"](what);
  }
  if (what !== undefined) {
    out(what);
    err(what);
    what = JSON.stringify(what);
  } else {
    what = "";
  }
  ABORT = true;
  EXITSTATUS = 1;
  throw "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
}
Module["abort"] = abort;
if (Module["preInit"]) {
  if (typeof Module["preInit"] == "function")
    Module["preInit"] = [Module["preInit"]];
  while (Module["preInit"].length > 0) {
    Module["preInit"].pop()();
  }
}
Module["noExitRuntime"] = true;
run();
//./src/ExtLibrary/euscp/euscp.ksp.js
//===============================================================================

var SS_SERVER_ORIGINATOR_DESCRIPTION = "Веб-сайт: %s";
var SS_SERVER_READ_KEY_DESCRIPTION = "Ідентифікація клієнта у системі %s";
var SS_SERVER_SIGN_HASH_DESCRIPTION = "Підпис даних у системі %s";
var SS_SERVER_GEN_KEY_DESCRIPTION = "Генерація ос. ключа у системі %s";
var SS_SERVER_QR_CODE_SCALE = 3;

//===============================================================================

var EndUserKSPKey = function (
  kspSettings,
  userId,
  keyId,
  signAlgos,
  signContainers,
  certIssuerCN,
  certs,
  ownerInfo,
) {
  this.kspSettings = kspSettings;
  this.userId = userId;
  this.keyId = keyId;
  this.signAlgos = signAlgos;
  this.signContainers = signContainers;
  this.certIssuerCN = certIssuerCN;
  this.certs = certs;
  this.ownerInfo = ownerInfo;
};

//-------------------------------------------------------------------------------

var EndUserKSPStatus = function () {
  this.code = null;
  this.message = null;
};

//-------------------------------------------------------------------------------

var EndUserKSPRequest = function (command, parameters) {
  this.command = command;
  this.parameters = parameters;
};

//-------------------------------------------------------------------------------

var EndUserKSPResponse = function () {
  this.data = null;
  this.error = null;
};

//-------------------------------------------------------------------------------

var EndUserKSPError = function (code, kspStatus) {
  this.code = code;
  this.kspStatus = kspStatus;
};

//-------------------------------------------------------------------------------

var EndUserKSPOperationConfirmation = function (onSuccess, onError) {
  this.onSuccess = onSuccess;
  this.onError = onError;
};

//-------------------------------------------------------------------------------

var EndUserKSPSignContainer = function (type, subType) {
  this.type = type;
  this.subType = subType;
};

//===============================================================================

var EndUserKSP = function (url, KSPs, euSign, context, onEvent) {
  this.m_url = url;
  this.m_KSPs = KSPs;
  this.m_euSign = euSign;
  this.m_context = context;
  this.m_keyContext = null;
  this.m_onEvent = onEvent;
  this.m_cadesLevel = EU_SIGN_TYPE_CADES_BES;
  this.m_activeOperation = false;
};

//===============================================================================

EndUserKSP.EU_KSP_KYIVSTAR = 1;
EndUserKSP.EU_KSP_VODAFONE = 2;
EndUserKSP.EU_KSP_LIFECELL = 3;
EndUserKSP.EU_KSP_IIT = 4;
EndUserKSP.EU_KSP_PB = 6;
EndUserKSP.EU_KSP_DIIA = 7;

EndUserKSP.EU_KSP_OPERATION_TYPE_READ_PK = 1;
EndUserKSP.EU_KSP_OPERATION_TYPE_SIGN_HASH = 2;

EndUserKSP.EU_KSP_CERT_ISSUER_CN_KYIVSTAR = "CA of the Justice of Ukraine";
EndUserKSP.EU_KSP_CERT_ISSUER_CN_VODAFONE = 'АЦСК "MASTERKEY" ТОВ "АРТ-МАСТЕР"';
EndUserKSP.EU_KSP_CERT_ISSUER_CN_LIFECELL = 'АЦСК "MASTERKEY" ТОВ "АРТ-МАСТЕР"';

EndUserKSP.EU_KSP_COMMAND_INITIALIZE_READ_PKEY = "initializeReadPKey";
EndUserKSP.EU_KSP_COMMAND_GET_READ_PKEY_RESULT = "getReadPKeyResult";
EndUserKSP.EU_KSP_COMMAND_INITIALIZE_SIGN_HASH = "initializeSignHash";
EndUserKSP.EU_KSP_COMMAND_GET_SIGN_HASH_RESULT = "getSignHashResult";
EndUserKSP.EU_KSP_COMMAND_INITIALIZE_SIGN_HASHES = "initializeSignHashes";
EndUserKSP.EU_KSP_COMMAND_GET_SIGN_HASHES_RESULT = "getSignHashesResult";
EndUserKSP.EU_KSP_COMMAND_INITIALIZE_USER_REGISTRATION =
  "initializeUserRegistration";
EndUserKSP.EU_KSP_COMMAND_GET_USER_REGISTRATION_RESULT =
  "getUserRegistrationResult";

EndUserKSP.EU_KSP_STATUS_REQUEST_OK = 100;
EndUserKSP.EU_KSP_STATUS_WRONG_PARAM = 101;
EndUserKSP.EU_KSP_STATUS_EXPIRED_TRANSACTION = 208;
EndUserKSP.EU_KSP_STATUS_USER_CANCEL = 401;
EndUserKSP.EU_KSP_STATUS_NO_CERT_FOUND = 422;
EndUserKSP.EU_KSP_STATUS_ERROR_CERTIFICATE = 425;
EndUserKSP.EU_KSP_STATUS_OUSTANDING_TRANSACTION = 504;
EndUserKSP.EU_KSP_STATUS_INTERNAL_ERROR = 900;

EndUserKSP.EU_KSP_COMMAND_POLLING_INTERVAL = 1;
EndUserKSP.EU_KSP_COMMAND_EXPIRE_TIME = 5 * 60;

EndUserKSP.EU_KSP_SIGN_CONTAINER_UNKNOWN = 0;
EndUserKSP.EU_KSP_SIGN_CONTAINER_CADES = 1;
EndUserKSP.EU_KSP_SIGN_CONTAINER_XADES = 2;
EndUserKSP.EU_KSP_SIGN_CONTAINER_PADES = 3;
EndUserKSP.EU_KSP_SIGN_CONTAINER_ASIC_S = 4;
EndUserKSP.EU_KSP_SIGN_CONTAINER_ASIC_E = 5;

EndUserKSP.EU_KSP_SIGN_FORMAT_UNKNOWN = 0;
EndUserKSP.EU_KSP_SIGN_FORMAT_CADES = 1;
EndUserKSP.EU_KSP_SIGN_FORMAT_XADES = 2;
EndUserKSP.EU_KSP_SIGN_FORMAT_PADES = 3;

EndUserKSP.ERROR_MAP = [];
EndUserKSP.ERROR_MAP[EndUserKSP.EU_KSP_STATUS_REQUEST_OK] = EU_ERROR_NONE;
EndUserKSP.ERROR_MAP[EndUserKSP.EU_KSP_STATUS_WRONG_PARAM] =
  EU_ERROR_BAD_PARAMETER;
EndUserKSP.ERROR_MAP[EndUserKSP.EU_KSP_STATUS_EXPIRED_TRANSACTION] =
  EU_ERROR_TRANSMIT_REQUEST;
EndUserKSP.ERROR_MAP[EndUserKSP.EU_KSP_STATUS_USER_CANCEL] =
  EU_ERROR_CANCELED_BY_GUI;
EndUserKSP.ERROR_MAP[EndUserKSP.EU_KSP_STATUS_NO_CERT_FOUND] =
  EU_ERROR_CERT_NOT_FOUND;
EndUserKSP.ERROR_MAP[EndUserKSP.EU_KSP_STATUS_ERROR_CERTIFICATE] =
  EU_ERROR_BAD_CERT;
EndUserKSP.ERROR_MAP[EndUserKSP.EU_KSP_STATUS_OUSTANDING_TRANSACTION] =
  EU_ERROR_TRANSMIT_REQUEST;
EndUserKSP.ERROR_MAP[EndUserKSP.EU_KSP_STATUS_INTERNAL_ERROR] =
  EU_ERROR_UNKNOWN;

//===============================================================================

EndUserKSP.prototype.MakeError = function (errorCode, kspStatus) {
  var pThis = this;

  if (kspStatus != null && EndUserKSP.ERROR_MAP[kspStatus.code] != undefined) {
    errorCode = EndUserKSP.ERROR_MAP[kspStatus.code];
  }

  var error = pThis.m_euSign.MakeError(errorCode);
  if (kspStatus != null) {
    var errorMessage = kspStatus.message + ". " + error.GetMessage();
    error = new EUSignCPException(errorCode, errorMessage);
  }

  return error;
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._StrToDate = function (dateStr) {
  try {
    // "YYYY-MM-DD HH:MM:SS"
    var arr = dateStr.split(" ");
    var dateArr = arr[0].split("-");
    var timeArr = arr[1].split(":");

    var yyyy = parseInt(dateArr[0]);
    var MM = parseInt(dateArr[1]) - 1;
    var dd = parseInt(dateArr[2]);
    if (dd < 0 || dd > 31 || MM < 0 || MM > 12 || yyyy < 0) {
      return null;
    }

    var HH = parseInt(timeArr[0]);
    var mm = parseInt(timeArr[1]);
    var ss = parseInt(timeArr[2]);
    if (HH < 0 || HH > 23 || mm < 0 || mm > 59 || ss < 0 || ss > 59) {
      return null;
    }

    return new Date(yyyy, MM, dd, HH, mm, ss, 0);
  } catch (e) {
    return null;
  }
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._MakeUserId = function () {
  var userId = "";
  if (typeof crypto !== "undefined") {
    userId = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
      /[018]/g,
      function (c) {
        return (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16);
      },
    );
  } else {
    userId = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      },
    );
  }

  return userId;
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.MakeURL = function (url) {
  if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
    return url;
  }

  if (url.indexOf("/") == 0 && s_origin) {
    return s_origin + url;
  }

  if (s_origin && s_pathname) {
    return (
      s_origin + s_pathname.substr(0, s_pathname.lastIndexOf("/")) + "/" + url
    );
  }

  return url;
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._GetKSPSettings = function (kspOrKSPName) {
  var pThis = this;
  var i;

  if (typeof kspOrKSPName == "string") {
    for (i = 0; i < pThis.m_KSPs.length; i++) {
      if (pThis.m_KSPs[i].name == kspOrKSPName) return pThis.m_KSPs[i];
    }

    return null;
  } else if (typeof kspOrKSPName == "number") {
    if (
      kspOrKSPName == EndUserKSP.EU_KSP_KYIVSTAR ||
      kspOrKSPName == EndUserKSP.EU_KSP_VODAFONE ||
      kspOrKSPName == EndUserKSP.EU_KSP_LIFECELL
    ) {
      return {
        name: "MobileID",
        ksp: kspOrKSPName,
      };
    }

    for (i = 0; i < pThis.m_KSPs.length; i++) {
      if (pThis.m_KSPs[i].ksp == kspOrKSPName) return pThis.m_KSPs[i];
    }

    return null;
  } else {
    return null;
  }
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._GetSystemId = function (kspSettings) {
  return typeof kspSettings.systemId === "string"
    ? kspSettings.systemId
    : (kspSettings.systemId && kspSettings.systemId.name) || s_origin;
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._GetKSPSignContainers = function (kspSettings) {
  var pThis = this;
  var signContainers = [];

  signContainers.push(
    new EndUserKSPSignContainer(
      EndUserKSP.EU_KSP_SIGN_CONTAINER_CADES,
      EndUserKSP.EU_KSP_SIGN_FORMAT_CADES,
    ),
  );
  signContainers.push(
    new EndUserKSPSignContainer(
      EndUserKSP.EU_KSP_SIGN_CONTAINER_ASIC_S,
      EndUserKSP.EU_KSP_SIGN_FORMAT_CADES,
    ),
  );
  signContainers.push(
    new EndUserKSPSignContainer(
      EndUserKSP.EU_KSP_SIGN_CONTAINER_ASIC_E,
      EndUserKSP.EU_KSP_SIGN_FORMAT_CADES,
    ),
  );

  if (kspSettings.ksp == EndUserKSP.EU_KSP_DIIA) {
    signContainers.push(
      new EndUserKSPSignContainer(
        EndUserKSP.EU_KSP_SIGN_CONTAINER_PADES,
        EndUserKSP.EU_KSP_SIGN_FORMAT_PADES,
      ),
    );
    signContainers.push(
      new EndUserKSPSignContainer(
        EndUserKSP.EU_KSP_SIGN_CONTAINER_ASIC_S,
        EndUserKSP.EU_KSP_SIGN_FORMAT_XADES,
      ),
    );
    signContainers.push(
      new EndUserKSPSignContainer(
        EndUserKSP.EU_KSP_SIGN_CONTAINER_ASIC_E,
        EndUserKSP.EU_KSP_SIGN_FORMAT_XADES,
      ),
    );
    signContainers.push(
      new EndUserKSPSignContainer(
        EndUserKSP.EU_KSP_SIGN_CONTAINER_XADES,
        EndUserKSP.EU_KSP_SIGN_FORMAT_XADES,
      ),
    );
  }

  return signContainers;
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._GetPollingInterval = function (kspSettings) {
  return kspSettings && typeof kspSettings.pollingInterval == "number"
    ? kspSettings.pollingInterval * 1000
    : EndUserKSP.EU_KSP_COMMAND_POLLING_INTERVAL * 1000;
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._MakeExpireDate = function (expireTime) {
  if (!expireTime) expireTime = EndUserKSP.EU_KSP_COMMAND_EXPIRE_TIME;
  var expireDate = new Date();
  expireDate.setTime(expireDate.getTime() + expireTime * 1000);
  return expireDate;
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._MakeConfirmationURL = function (
  kspSettings,
  operationType,
  userId,
  operationId,
) {
  var action =
    operationType == EndUserKSP.EU_KSP_OPERATION_TYPE_READ_PK ? "auth" : "sign";

  return (
    kspSettings.confirmationURL +
    "?hash=rd/kep/" +
    "{" +
    '"clientId":"' +
    userId +
    '",' +
    '"operationId":"' +
    operationId +
    '",' +
    '"action":"' +
    action +
    '"' +
    "}"
  );
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._SendConfirmationOperationEvent = function (
  kspSettings,
  confirmationURL,
  expireDate,
) {
  var pThis = this;
  var encodeURL = kspSettings.encodeConfirmationURL || false;
  var mobileAppName = kspSettings.mobileAppName;
  var qrCode = pThis.m_euSign.QRCodeEncode(
    StringToArray(encodeURL ? encodeURI(confirmationURL) : confirmationURL),
    SS_SERVER_QR_CODE_SCALE,
  );
  qrCode = pThis.m_euSign.Base64Encode(qrCode);

  var event = {
    type: EndUserEventType.ConfirmKSPOperation,
    url: confirmationURL,
    qrCode: qrCode,
    mobileAppName: mobileAppName,
    expireDate: expireDate,
  };

  pThis.m_onEvent(event);
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._SendRequest = function (
  url,
  request,
  onSuccess,
  onError,
) {
  var pThis = this;

  try {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onload = function () {
      if (httpRequest.readyState != 4) return;

      var error;

      if (httpRequest.status != 200) {
        error = pThis.MakeError(EU_ERROR_TRANSMIT_REQUEST, null);
        onError(error);
        return;
      }

      var response = null;
      try {
        response = JSON.parse(httpRequest.responseText);
      } catch (e) {
        response = null;
      }

      if (!response) {
        error = pThis.MakeError(EU_ERROR_TRANSMIT_REQUEST, null);
        onError(error);
        return;
      }

      onSuccess(response);
    };

    httpRequest.onerror = function (e) {
      var error = pThis.MakeError(EU_ERROR_TRANSMIT_REQUEST, null);
      onError(error);
    };

    httpRequest.open("POST", url);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send(request);
  } catch (e) {
    var error = pThis.MakeError(EU_ERROR_TRANSMIT_REQUEST, null);
    onError(error);
  }
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._SendKSPRequest = function (
  kspSettings,
  command,
  parameters,
  expireDate,
  onSign,
  onSuccess,
  onError,
) {
  var pThis = this;

  if (new Date() > expireDate) {
    onError(pThis.MakeError(EU_ERROR_TRANSMIT_REQUEST, null));
    return;
  }

  if (!pThis.m_activeOperation) {
    onError(pThis.MakeError(EU_ERROR_CANCELED_BY_GUI, null));
    return;
  }

  var kspURL = pThis.MakeURL(
    command == EndUserKSP.EU_KSP_COMMAND_INITIALIZE_USER_REGISTRATION ||
      command == EndUserKSP.EU_KSP_COMMAND_GET_USER_REGISTRATION_RESULT
      ? kspSettings.registrationURL
      : kspSettings.address || pThis.m_url,
  );
  var pollingInterval = pThis._GetPollingInterval(kspSettings);

  var request = new EndUserKSPRequest(command, parameters);
  request = JSON.stringify(request);

  pThis._SendRequest(
    kspURL,
    request,
    function (response) {
      var error;

      if (!response.data) {
        if (
          response.error.code != EndUserKSP.EU_KSP_STATUS_OUSTANDING_TRANSACTION
        ) {
          error = pThis.MakeError(EU_ERROR_TRANSMIT_REQUEST, response.error);
          onError(error);
          return;
        }

        setTimeout(function () {
          pThis._SendKSPRequest(
            kspSettings,
            command,
            parameters,
            expireDate,
            onSign,
            onSuccess,
            onError,
          );
        }, pollingInterval);

        return;
      }

      if (
        command == EndUserKSP.EU_KSP_COMMAND_INITIALIZE_READ_PKEY ||
        command == EndUserKSP.EU_KSP_COMMAND_INITIALIZE_SIGN_HASH ||
        command == EndUserKSP.EU_KSP_COMMAND_INITIALIZE_SIGN_HASHES ||
        command == EndUserKSP.EU_KSP_COMMAND_INITIALIZE_USER_REGISTRATION
      ) {
        if (!response.data.transactionId) {
          error = pThis.MakeError(EU_ERROR_TRANSMIT_REQUEST, null);
          onError(error);
          return;
        }

        parameters = {
          ksp: kspSettings.ksp,
          transactionId: response.data.transactionId,
        };

        switch (command) {
          case EndUserKSP.EU_KSP_COMMAND_INITIALIZE_READ_PKEY:
            command = EndUserKSP.EU_KSP_COMMAND_GET_READ_PKEY_RESULT;
            break;
          case EndUserKSP.EU_KSP_COMMAND_INITIALIZE_SIGN_HASH:
            command = EndUserKSP.EU_KSP_COMMAND_GET_SIGN_HASH_RESULT;
            break;
          case EndUserKSP.EU_KSP_COMMAND_INITIALIZE_SIGN_HASHES:
            command = EndUserKSP.EU_KSP_COMMAND_GET_SIGN_HASHES_RESULT;
            break;
          case EndUserKSP.EU_KSP_COMMAND_INITIALIZE_USER_REGISTRATION:
            if (!onSign) {
              onSuccess(response.data.transactionId);
              return;
            }

            command = EndUserKSP.EU_KSP_COMMAND_GET_USER_REGISTRATION_RESULT;

            try {
              parameters["signature"] = onSign(response.data.transactionId);
            } catch (e) {
              onError(e);
              return;
            }

            break;
        }

        if (kspSettings.ksp == EndUserKSP.EU_KSP_DIIA) {
          try {
            expireDate = pThis._MakeExpireDate(response.data.expireTime);

            pThis._SendConfirmationOperationEvent(
              kspSettings,
              response.data.confirmationURL,
              expireDate,
            );
          } catch (e) {
            onError(e);
            return;
          }
        } else {
          expireDate = pThis._MakeExpireDate(
            EndUserKSP.EU_KSP_COMMAND_EXPIRE_TIME,
          );
        }

        setTimeout(function () {
          pThis._SendKSPRequest(
            kspSettings,
            command,
            parameters,
            expireDate,
            onSign,
            onSuccess,
            onError,
          );
        }, pollingInterval);

        return;
      }

      onSuccess(response.data);
    },
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._MakeKSPKeyContext = function (
  kspSettings,
  userId,
  keyId,
  certificates,
) {
  var pThis = this;
  var signAlgos = [];
  var euCertificates = [];
  var ownerInfo = new EndUserOwnerInfo(null);

  for (var i = 0; i < certificates.length; i++) {
    var certificate = certificates[i];
    if (typeof certificate == "string")
      certificate = pThis.m_euSign.Base64Decode(certificate);
    var infoEx = pThis.m_euSign.ParseCertificateEx(certificate);
    if (
      (infoEx.GetKeyUsageType() &
        (EU_KEY_USAGE_DIGITAL_SIGNATURE | EU_KEY_USAGE_NON_REPUDATION)) !=
      0
    ) {
      switch (infoEx.GetPublicKeyType()) {
        case EU_CERT_KEY_TYPE_DSTU4145:
          if (kspSettings.signAlgos) {
            if (
              kspSettings.signAlgos.indexOf(
                EU_CTX_SIGN_DSTU4145_WITH_GOST34311,
              ) >= 0
            ) {
              signAlgos.push(EU_CTX_SIGN_DSTU4145_WITH_GOST34311);
            }

            if (
              kspSettings.signAlgos.indexOf(
                EU_CTX_SIGN_DSTU4145_WITH_DSTU7564,
              ) >= 0
            ) {
              signAlgos.push(EU_CTX_SIGN_DSTU4145_WITH_DSTU7564);
            }
          } else {
            signAlgos.push(EU_CTX_SIGN_DSTU4145_WITH_GOST34311);
          }

          break;
        case EU_CERT_KEY_TYPE_RSA:
          signAlgos.push(EU_CTX_SIGN_RSA_WITH_SHA);
          break;
        case EU_CERT_KEY_TYPE_ECDSA:
          signAlgos.push(EU_CTX_SIGN_ECDSA_WITH_SHA);
          break;
      }
    }

    var euCertificate = new EndUserCertificate(infoEx, certificate);
    euCertificates.push(euCertificate.GetTransferableObject());
    if (i == 0) {
      ownerInfo.SetTransferableObject(infoEx.GetTransferableObject());
    }
  }

  if (kspSettings.signAlgos) {
    for (var i = 0; i < kspSettings.signAlgos.length; i++) {
      var signAlgo = kspSettings.signAlgos[i];
      if (signAlgos.indexOf(signAlgo) >= 0) continue;
      signAlgos.push(signAlgo);
    }
  }

  return new EndUserKSPKey(
    kspSettings,
    userId,
    keyId,
    signAlgos,
    pThis._GetKSPSignContainers(kspSettings),
    ownerInfo.GetIssuerCN(),
    euCertificates,
    ownerInfo,
  );
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._SServerGeneratePrivateKey = function (
  keyContext,
  uaKeysType,
  uaDSKeysSpec,
  useDSKeyAsKEP,
  uaKEPKeysSpec,
  intKeysType,
  rsaKeysSpec,
  ecdsaKeysSpec,
  operationDescription,
  onSuccess,
  onError,
) {
  var pThis = this;

  var kspSettings = keyContext.kspSettings;
  if (!kspSettings || !kspSettings.address /* || !kspSettings.port*/) {
    setTimeout(function () {
      var error = pThis.MakeError(EU_ERROR_BAD_PARAMETER, null);
      onError(error);
    }, 1);
    return;
  }

  var uaAlgorithmName = null;
  switch (uaKeysType) {
    case EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOST:
      uaAlgorithmName = "DSTU4145"; // DSTU4145-GOST34311
      break;
    case EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_DSTU:
      uaAlgorithmName = "DSTU4145-DSTU7564";
      break;
  }

  var uaDSKeyLength = 0;
  switch (uaDSKeysSpec) {
    case EU_KEYS_LENGTH_DS_UA_191:
      uaDSKeyLength = 191;
      break;

    case EU_KEYS_LENGTH_DS_UA_257:
      uaDSKeyLength = 257;
      break;

    case EU_KEYS_LENGTH_DS_UA_307:
      uaDSKeyLength = 307;
      break;
  }

  var uaKEPKeyLength = 0;
  switch (uaKEPKeysSpec) {
    case EU_KEYS_LENGTH_KEP_UA_257:
      uaKEPKeyLength = 257;
      break;

    case EU_KEYS_LENGTH_KEP_UA_431:
      uaKEPKeyLength = 431;
      break;

    case EU_KEYS_LENGTH_KEP_UA_571:
      uaKEPKeyLength = 571;
      break;
  }

  var intAlgorithmName = null;
  var intKeyLength = 0;

  switch (intKeysType) {
    case EU_KEYS_TYPE_RSA_WITH_SHA:
      intAlgorithmName = "RSA";
      switch (rsaKeysSpec) {
        case EU_KEYS_LENGTH_DS_RSA_1024:
          intKeyLength = 1024;
          break;

        case EU_KEYS_LENGTH_DS_RSA_2048:
          intKeyLength = 2048;
          break;

        case EU_KEYS_LENGTH_DS_RSA_3072:
          intKeyLength = 3072;
          break;

        case EU_KEYS_LENGTH_DS_RSA_4096:
          intKeyLength = 4096;
          break;
      }
      break;
    case EU_KEYS_TYPE_ECDSA_WITH_SHA:
      intAlgorithmName = "ECDSA";
      switch (ecdsaKeysSpec) {
        case EU_KEYS_LENGTH_DS_ECDSA_192:
          intKeyLength = 192;
          break;

        case EU_KEYS_LENGTH_DS_ECDSA_256:
          intKeyLength = 256;
          break;

        case EU_KEYS_LENGTH_DS_ECDSA_384:
          intKeyLength = 384;
          break;

        case EU_KEYS_LENGTH_DS_ECDSA_521:
          intKeyLength = 521;
          break;
      }
      break;
  }

  var systemId = pThis._GetSystemId(kspSettings);
  var originatorDescription = SS_SERVER_ORIGINATOR_DESCRIPTION.replace(
    "%s",
    systemId,
  );
  if (operationDescription == null) {
    operationDescription = SS_SERVER_GEN_KEY_DESCRIPTION.replace(
      "%s",
      systemId,
    );
  }
  var operationId = null;
  var pollingInterval = pThis._GetPollingInterval(kspSettings);

  try {
    operationId = pThis.m_euSign.SServerClientGeneratePrivateKeyAsync(
      kspSettings.address,
      kspSettings.port,
      keyContext.userId,
      originatorDescription,
      operationDescription,
      uaAlgorithmName,
      uaDSKeyLength,
      useDSKeyAsKEP,
      uaKEPKeyLength,
      intAlgorithmName,
      intKeyLength,
    );
  } catch (e) {
    onError(e);
    return;
  }

  var expireDate = pThis._MakeExpireDate(EndUserKSP.EU_KSP_COMMAND_EXPIRE_TIME);
  if (kspSettings.confirmationURL) {
    try {
      var confirmationURL = pThis._MakeConfirmationURL(
        kspSettings,
        operationType,
        keyContext.userId,
        operationId,
      );
      pThis._SendConfirmationOperationEvent(
        kspSettings,
        confirmationURL,
        expireDate,
      );
    } catch (e) {
      onError(e);
      return;
    }
  }

  var _getResult = function (expireDate) {
    if (new Date() > expireDate) {
      onError(pThis.MakeError(EU_ERROR_TRANSMIT_REQUEST, null));
      return;
    }

    if (!pThis.m_activeOperation) {
      onError(pThis.MakeError(EU_ERROR_CANCELED_BY_GUI, null));
      return;
    }

    try {
      var key = pThis.m_euSign.SServerClientCheckGeneratePrivateKeyStatus(
        kspSettings.address,
        kspSettings.port,
        keyContext.userId,
        operationId,
        true,
      );

      if (key == null) {
        setTimeout(function () {
          _getResult(expireDate);
        }, pollingInterval);
        return;
      }

      onSuccess(key);
    } catch (e) {
      onError(e);
    }
  };

  setTimeout(function () {
    _getResult(expireDate);
  }, pollingInterval);
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._SServerSignHashes = function (
  keyContext,
  signAlgo,
  hashes,
  operationType,
  originatorDescription,
  operationDescription,
  onSuccess,
  onError,
) {
  var pThis = this;

  var kspSettings = keyContext.kspSettings;
  if (!kspSettings || !kspSettings.address /* || !kspSettings.port*/) {
    setTimeout(function () {
      var error = pThis.MakeError(EU_ERROR_BAD_PARAMETER, null);
      onError(error);
    }, 1);
    return;
  }

  var signAlgoName = "";
  switch (signAlgo) {
    case EU_CTX_SIGN_DSTU4145_WITH_GOST34311:
      signAlgoName = "DSTU4145"; // DSTU4145-GOST34311
      break;
    case EU_CTX_SIGN_DSTU4145_WITH_DSTU7564:
      signAlgoName = "DSTU4145-DSTU7564";
      break;
    case EU_CTX_SIGN_RSA_WITH_SHA:
      signAlgoName = "RSA"; // RSA-SHA2
      break;
    case EU_CTX_SIGN_ECDSA_WITH_SHA:
      signAlgoName = "ECDSA"; // ECDSA-SHA2
      break;
  }

  var systemId = pThis._GetSystemId(kspSettings);
  var originatorDescription = originatorDescription
    ? originatorDescription
    : SS_SERVER_ORIGINATOR_DESCRIPTION.replace("%s", systemId);
  var hashesDescriptions = [];
  var hashesValues = [];
  var operationId = null;
  var pollingInterval = pThis._GetPollingInterval(kspSettings);

  for (var i = 0; i < hashes.length; i++) {
    var item = hashes[i];
    hashesDescriptions.push(item.name);
    hashesValues.push(item.val);
  }

  if (kspSettings.ksp == EndUserKSP.EU_KSP_PB) {
    try {
      operationId = pThis.m_euSign.SServerClientSignHashesAsync(
        kspSettings.address,
        kspSettings.port,
        keyContext.userId,
        originatorDescription,
        operationDescription,
        hashesDescriptions,
        hashesValues,
        signAlgoName,
      );
    } catch (e) {
      onError(e);
      return;
    }

    var expireDate = pThis._MakeExpireDate(
      EndUserKSP.EU_KSP_COMMAND_EXPIRE_TIME,
    );
    if (kspSettings.confirmationURL) {
      try {
        var confirmationURL = pThis._MakeConfirmationURL(
          kspSettings,
          operationType,
          keyContext.userId,
          operationId,
        );
        pThis._SendConfirmationOperationEvent(
          kspSettings,
          confirmationURL,
          expireDate,
        );
      } catch (e) {
        onError(e);
        return;
      }
    }

    var _getResult = function (expireDate) {
      if (new Date() > expireDate) {
        onError(pThis.MakeError(EU_ERROR_TRANSMIT_REQUEST, null));
        return;
      }

      if (!pThis.m_activeOperation) {
        onError(pThis.MakeError(EU_ERROR_CANCELED_BY_GUI, null));
        return;
      }

      try {
        var signatures = [];
        var results = pThis.m_euSign.SServerClientCheckSignHashesStatus(
          kspSettings.address,
          kspSettings.port,
          keyContext.userId,
          operationId,
        );
        if (results.length > 0) {
          hashesValues.forEach(function (hash) {
            var result = null;
            for (var i = 0; i < results.length; i++) {
              if (hash == results[i].GetHash()) {
                result = results[i];
                break;
              }
            }

            if (result == null)
              throw pThis.MakeError(EU_ERROR_TRANSMIT_REQUEST);

            if (result.GetError() != EU_ERROR_NONE) {
              var kspStatus = new EndUserKSPStatus();
              kspStatus.code = 0;
              kspStatus.message =
                result.GetStatus() + "(" + result.GetStatusCode() + ")";
              throw pThis.MakeError(result.GetError(), kspStatus);
            }

            signatures.push(result.GetSignature());
          });
        }

        if (signatures.length == 0) {
          setTimeout(function () {
            _getResult(expireDate);
          }, pollingInterval);
          return;
        }

        onSuccess(signatures);
      } catch (e) {
        onError(e);
      }
    };

    setTimeout(function () {
      _getResult(expireDate);
    }, pollingInterval);
  } else {
    var signatures = [];

    var _sendKSPRequest = function (index) {
      if (index >= hashesValues.length) {
        onSuccess(signatures);
        return;
      }

      try {
        operationId = pThis.m_euSign.SServerClientSignHashAsync(
          kspSettings.address,
          kspSettings.port,
          keyContext.userId,
          originatorDescription,
          operationDescription,
          hashesValues[index],
          signAlgoName,
        );
      } catch (e) {
        onError(e);
        return;
      }

      var expireDate = pThis._MakeExpireDate(
        EndUserKSP.EU_KSP_COMMAND_EXPIRE_TIME,
      );
      if (kspSettings.confirmationURL) {
        try {
          var confirmationURL = pThis._MakeConfirmationURL(
            kspSettings,
            operationType,
            keyContext.userId,
            operationId,
          );
          pThis._SendConfirmationOperationEvent(
            kspSettings,
            confirmationURL,
            expireDate,
          );
        } catch (e) {
          onError(e);
          return;
        }
      }

      var _getResult = function (expireDate) {
        if (new Date() > expireDate) {
          onError(pThis.MakeError(EU_ERROR_TRANSMIT_REQUEST, null));
          return;
        }

        if (!pThis.m_activeOperation) {
          onError(pThis.MakeError(EU_ERROR_CANCELED_BY_GUI, null));
          return;
        }

        try {
          var sign = pThis.m_euSign.SServerClientCheckSignHashStatus(
            kspSettings.address,
            kspSettings.port,
            keyContext.userId,
            operationId,
            true,
          );

          if (sign == null) {
            setTimeout(function () {
              _getResult(expireDate);
            }, pollingInterval);
            return;
          }

          signatures.push(sign);
          _sendKSPRequest(index + 1);
        } catch (e) {
          onError(e);
        }
      };

      setTimeout(function () {
        _getResult(expireDate);
      }, pollingInterval);
    };

    _sendKSPRequest(0);
  }
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._CtxReadPrivateKeyWithServer = function (
  kspSettings,
  userId,
  getCerts,
  keyId,
  caption,
  authData,
  certs,
  onSuccess,
  onError,
) {
  var pThis = this;

  var signAlgos = kspSettings.signAlgos || [
    EU_CTX_SIGN_DSTU4145_WITH_GOST34311,
    /*EU_CTX_SIGN_DSTU4145_WITH_DSTU7564,*/
    EU_CTX_SIGN_RSA_WITH_SHA,
    EU_CTX_SIGN_ECDSA_WITH_SHA,
  ];
  var certIssuerCN = null;

  switch (kspSettings.ksp) {
    case EndUserKSP.EU_KSP_IIT:
      userId =
        typeof kspSettings.clientIdType === "undefined" ||
        kspSettings.clientIdType == 0
          ? userId.toUpperCase()
          : userId;
      break;

    case EndUserKSP.EU_KSP_PB:
      if (!userId) userId = pThis._MakeUserId();
      if (!kspSettings.clientIdPrefix) kspSettings.clientIdPrefix = "";
      userId = kspSettings.clientIdPrefix + userId;
      break;

    case EndUserKSP.EU_KSP_DIIA:
      // Remove unsupported algos
      if (signAlgos.indexOf(EU_CTX_SIGN_RSA_WITH_SHA) != -1) {
        signAlgos.splice(signAlgos.indexOf(EU_CTX_SIGN_RSA_WITH_SHA), 1);
      }
      break;

    default:
      setTimeout(function () {
        var error = pThis.MakeError(EU_ERROR_BAD_PARAMETER, null);
        onError(error);
      }, 1);
      return;
  }

  if (typeof keyId != "undefined" && keyId != EU_CTX_SIGN_UNKNOWN) {
    if (signAlgos.indexOf(keyId) == -1) {
      setTimeout(function () {
        var error = pThis.MakeError(EU_ERROR_BAD_PARAMETER, null);
        onError(error);
      }, 1);
      return;
    }

    signAlgos.splice(signAlgos.indexOf(keyId), 1);
    signAlgos.unshift(keyId);
  }

  var keyContext = new EndUserKSPKey(
    kspSettings,
    userId,
    keyId,
    signAlgos,
    pThis._GetKSPSignContainers(kspSettings),
    certIssuerCN,
    [],
    null,
  );
  if (!getCerts) {
    if (certs && certs.length > 0) {
      keyContext = pThis._MakeKSPKeyContext(kspSettings, userId, keyId, certs);
    }

    setTimeout(function () {
      onSuccess(keyContext);
    }, 1);
    return;
  }

  if (authData && typeof authData.val != "string") {
    authData.val = pThis.m_euSign.Base64Encode(item.val);
  }

  var systemId = pThis._GetSystemId(kspSettings);
  var originatorDescription = caption
    ? caption
    : SS_SERVER_ORIGINATOR_DESCRIPTION.replace("%s", systemId);
  var operationDescription = authData
    ? authData.name
    : SS_SERVER_READ_KEY_DESCRIPTION.replace("%s", systemId);
  var hashes = authData
    ? [authData]
    : [
        {
          name: "Зчитування ос. ключа",
          val: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
        },
      ];
  var operationType = EndUserKSP.EU_KSP_OPERATION_TYPE_READ_PK;
  var signAlgo = signAlgos[0];

  pThis._CtxSignHashesWithServer(
    keyContext,
    EndUserKSP.EU_KSP_SIGN_CONTAINER_CADES,
    EndUserKSP.EU_KSP_SIGN_FORMAT_CADES,
    EU_SIGN_TYPE_CADES_BES,
    signAlgo,
    hashes,
    operationType,
    originatorDescription,
    operationDescription,
    function (signatures) {
      try {
        var signedData = pThis.m_euSign.Base64Decode(signatures[0]);
        var signerInfo = pThis.m_euSign.CtxGetSignerInfo(
          pThis.m_context,
          0,
          signedData,
        );
        var keyContext = pThis._MakeKSPKeyContext(kspSettings, userId, keyId, [
          signerInfo.GetData(),
        ]);

        onSuccess(keyContext);
      } catch (e) {
        pThis.ResetPrivateKey();

        onError(e);
        return;
      }
    },
    function (e) {
      pThis.ResetPrivateKey();

      onError(e);
    },
  );
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._CtxSignHashesWithServer = function (
  keyContext,
  signContainerType,
  signContainerSubType,
  signLevel,
  signAlgo,
  hashes,
  operationType,
  originatorDescription,
  operationDescription,
  onSuccess,
  onError,
) {
  var pThis = this;

  if (keyContext == null) {
    setTimeout(function () {
      var error = pThis.MakeError(EU_ERROR_BAD_CERT, null);
      onError(error);
    }, 1);
    return;
  }

  var kspSettings = keyContext.kspSettings;
  if (!kspSettings) {
    setTimeout(function () {
      var error = pThis.MakeError(EU_ERROR_BAD_PARAMETER, null);
      onError(error);
    }, 1);
    return;
  }

  if (keyContext.signAlgos.indexOf(signAlgo) == -1) {
    setTimeout(function () {
      var error = pThis.MakeError(EU_ERROR_PKI_FORMATS_FAILED, null);
      onError(error);
    }, 1);
    return;
  }

  var isSignContainerSupported = keyContext.signContainers.some(
    function (signContainer) {
      return (
        signContainer.type == signContainerType &&
        signContainer.subType == signContainerSubType
      );
    },
  );

  if (!isSignContainerSupported) {
    setTimeout(function () {
      var error = pThis.MakeError(EU_ERROR_NOT_SUPPORTED, null);
      onError(error);
    }, 1);
    return;
  }

  var systemId = pThis._GetSystemId(kspSettings);
  if (operationDescription == null) {
    operationDescription = SS_SERVER_SIGN_HASH_DESCRIPTION.replace(
      "%s",
      systemId,
    );
  }

  var expireDate = pThis._MakeExpireDate(EndUserKSP.EU_KSP_COMMAND_EXPIRE_TIME);
  pThis.m_activeOperation = true;

  switch (kspSettings.ksp) {
    case EndUserKSP.EU_KSP_IIT:
    case EndUserKSP.EU_KSP_PB:
      pThis._SServerSignHashes(
        keyContext,
        signAlgo,
        hashes,
        operationType,
        originatorDescription,
        operationDescription,
        onSuccess,
        function (error) {
          pThis.m_activeOperation = false;

          onError(error);
        },
      );
      return;

    case EndUserKSP.EU_KSP_DIIA:
      var signType =
        signContainerType == EndUserKSP.EU_KSP_SIGN_CONTAINER_PADES &&
        signLevel > EU_SIGN_TYPE_CADES_T
          ? EU_SIGN_TYPE_CADES_T
          : signLevel;
      var systemIdEx =
        kspSettings.systemId && typeof kspSettings.systemId !== "string"
          ? kspSettings.systemId.id
          : null;
      var params = {
        ksp: kspSettings.ksp,
        signContainer: signContainerType,
        signFormat: signContainerSubType,
        signAlgo: signAlgo,
        signType: signType,
        hashes: hashes,
        systemIdEx: systemIdEx,
        systemId: "https://ca.diia.gov.ua/",
        // systemId: systemId,
      };

      pThis._SendKSPRequest(
        kspSettings,
        EndUserKSP.EU_KSP_COMMAND_INITIALIZE_SIGN_HASHES,
        params,
        expireDate,
        null,
        function (data) {
          pThis.m_activeOperation = false;

          if (!data || !data.signatures) {
            var error = pThis.MakeError(EU_ERROR_TRANSMIT_REQUEST, null);
            onError(error);
            return;
          }

          onSuccess(data.signatures);
        },
        function (error) {
          pThis.m_activeOperation = false;

          onError(error);
        },
      );
      return;

    default:
      setTimeout(function () {
        var error = pThis.MakeError(EU_ERROR_NOT_SUPPORTED, null);
        onError(error);
      }, 1);
      return;
  }
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._GetSignAlgoByCertificateAndKSPSettings = function (
  cert,
  kspSettings,
) {
  switch (cert.GetInfoEx().GetPublicKeyType()) {
    case EU_CERT_KEY_TYPE_DSTU4145:
      if (kspSettings.signAlgos) {
        if (
          kspSettings.signAlgos.indexOf(EU_CTX_SIGN_DSTU4145_WITH_DSTU7564) >= 0
        ) {
          return EU_CTX_SIGN_DSTU4145_WITH_DSTU7564;
        } else {
          return EU_CTX_SIGN_DSTU4145_WITH_GOST34311;
        }
      } else {
        return EU_CTX_SIGN_DSTU4145_WITH_GOST34311;
      }

    case EU_CERT_KEY_TYPE_RSA:
      return EU_CTX_SIGN_RSA_WITH_SHA;

    case EU_CERT_KEY_TYPE_ECDSA:
      return EU_CTX_SIGN_ECDSA_WITH_SHA;

    default:
      return EU_CTX_SIGN_UNKNOWN;
  }
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._GetHashAlgo = function (signAlgo) {
  switch (signAlgo) {
    case EU_CTX_SIGN_DSTU4145_WITH_GOST34311:
      return EU_CTX_HASH_ALGO_GOST34311;

    case EU_CTX_SIGN_DSTU4145_WITH_DSTU7564:
      return EU_CTX_HASH_ALGO_DSTU7564_256;

    case EU_CTX_SIGN_RSA_WITH_SHA:
    case EU_CTX_SIGN_ECDSA_WITH_SHA:
      return EU_CTX_HASH_ALGO_SHA256;

    default:
      this.m_euSign.RaiseError(EU_ERROR_BAD_PARAMETER);
      break;
  }
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._GetCertKeyTypeBySignAlgo = function (signAlgo) {
  switch (signAlgo) {
    case EU_CTX_SIGN_DSTU4145_WITH_GOST34311:
    case EU_CTX_SIGN_DSTU4145_WITH_DSTU7564:
      return EU_CERT_KEY_TYPE_DSTU4145;

    case EU_CTX_SIGN_RSA_WITH_SHA:
      return EU_CERT_KEY_TYPE_RSA;

    case EU_CTX_SIGN_ECDSA_WITH_SHA:
      return EU_CERT_KEY_TYPE_ECDSA;

    default:
      return EU_CERT_KEY_TYPE_UNKNOWN;
  }
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._IsKeyUsageMatch = function (keyUsage, keyUsages) {
  return keyUsages.some(function (_keyUsage) {
    return (_keyUsage & keyUsage) == _keyUsage;
  });
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._GetOwnCertificate = function (keyType, keyUsages) {
  var pThis = this;
  var certs = pThis.m_keyContext.certs || [];
  var cert = null;

  for (var i = 0; i < certs.length; i++) {
    var infoEx = certs[i].infoEx;
    if (
      (keyType != EU_CERT_KEY_TYPE_UNKNOWN
        ? keyType == infoEx.publicKeyType
        : true) &&
      (keyUsages != null && keyUsages.length != 0
        ? pThis._IsKeyUsageMatch(infoEx.keyUsageType, keyUsages)
        : true)
    ) {
      cert = certs[i];
      break;
    }
  }

  if (!cert) {
    pThis.m_euSign.RaiseError(EU_ERROR_CERT_NOT_FOUND);
    return;
  }

  return cert;
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._SignHashOrData = function (
  signContainerType,
  signContainerSubType,
  signLevel,
  signAlgo,
  data,
  hash,
  external,
  appendCert,
  previousSign,
  asBase64String,
  onSuccess,
  onError,
) {
  try {
    var pThis = this;
    var datas = DataToNamedDataArray(data);
    var hashes = DataToNamedDataArray(hash);
    var previousSigns = DataToNamedDataArray(previousSign);

    if (signAlgo == EU_CTX_SIGN_UNKNOWN) {
      if (
        pThis.m_keyContext == null ||
        pThis.m_keyContext.signAlgos == null ||
        pThis.m_keyContext.signAlgos.length == 0
      ) {
        pThis.m_euSign.RaiseError(EU_ERROR_PKI_FORMATS_FAILED);
        return;
      }
      signAlgo = pThis.m_keyContext.signAlgos[0];
    }

    if (data != null || (previousSign != null && !external)) {
      var hashAlgo = pThis._GetHashAlgo(signAlgo);
      var datasToHash = data != null ? datas : previousSigns;
      var datasHashes = [];

      for (var i = 0; i < datasToHash.length; i++) {
        var dataToHash =
          data != null
            ? datasToHash[i].val
            : pThis.m_euSign.GetDataFromSignedData(datasToHash[i].val);
        var dataHash = pThis.m_euSign.CtxHashData(
          pThis.m_context,
          hashAlgo,
          null,
          dataToHash,
          true,
        );
        datasHashes.push(dataHash);
      }

      hashes = DataToResult(datasToHash, datasHashes);
    }

    hashes = hashes.map(function (item) {
      var val =
        typeof item.val != "string"
          ? pThis.m_euSign.Base64Encode(item.val)
          : item.val;
      return { name: item.name, val: val };
    });

    pThis._CtxSignHashesWithServer(
      pThis.m_keyContext,
      signContainerType,
      signContainerSubType,
      signLevel,
      signAlgo,
      hashes,
      EndUserKSP.EU_KSP_OPERATION_TYPE_SIGN_HASH,
      null,
      null,
      function (signs) {
        pThis._AppendValidationDataToSign(
          signContainerType,
          signContainerSubType,
          signLevel,
          signAlgo,
          external ? [] : datas,
          signs,
          previousSigns,
          appendCert,
          asBase64String,
          function (signs) {
            var result = DataToResult(
              hash != null ? hash : data != null ? data : previousSign,
              signs,
            );
            onSuccess(result);
          },
          onError,
        );
      },
      onError,
    );
  } catch (e) {
    setTimeout(function () {
      onError(e);
    }, 1);
    return;
  }
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._AppendValidationDataToSign = function (
  signContainerType,
  signContainerSubType,
  signLevel,
  signAlgo,
  datas,
  signs,
  previousSigns,
  appendCert,
  asBase64String,
  onSuccess,
  onError,
) {
  var pThis = this;
  var euSign = pThis.m_euSign;

  if (
    signContainerType == EndUserKSP.EU_KSP_SIGN_CONTAINER_PADES ||
    signContainerType == EndUserKSP.EU_KSP_SIGN_CONTAINER_XADES ||
    signContainerSubType == EndUserKSP.EU_KSP_SIGN_CONTAINER_XADES
  ) {
    setTimeout(function () {
      onSuccess(signs);
    }, 1);
    return;
  }

  try {
    var signedDatas = [];

    for (var i = 0; i < signs.length; i++) {
      var signedData = euSign.Base64Decode(signs[i]);
      var signerInfo = euSign.CtxGetSignerInfo(pThis.m_context, 0, signedData);
      var signerCert = signerInfo.GetData();
      var previousSign = null;

      if (previousSigns.length == 0 || previousSigns[i].val == null) {
        previousSign = euSign.CtxCreateEmptySign(
          pThis.m_context,
          signAlgo,
          datas.length == 0 ? null : datas[i].val,
          signerCert,
        );
      } else {
        previousSign = previousSigns[i].val;
      }

      var signer = euSign.GetSigner(0, signedData);
      signer = euSign.AppendValidationDataToSigner(signer, signerCert);
      signedData = euSign.AppendSigner(
        signer,
        appendCert ? signerCert : null,
        previousSign,
        asBase64String,
      );

      signedDatas.push(signedData);
    }

    setTimeout(function () {
      onSuccess(signedDatas);
    }, 1);
  } catch (e) {
    setTimeout(function () {
      onError(e);
    }, 1);
  }
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype._ASiCAppendSign = function (
  signAlgo,
  asicType,
  signType,
  signLevel,
  referencesNames,
  asicData,
  asBase64String,
  onSuccess,
  onError,
) {
  try {
    var pThis = this;
    var previousASiCData = DataToNamedDataArray(asicData);

    if (asicType == EU_ASIC_TYPE_UNKNOWN) {
      asicType = pThis.m_euSign.ASiCGetASiCType(previousASiCData[0].val);
    }

    if (signType == EU_ASIC_SIGN_TYPE_UNKNOWN) {
      signType = pThis.m_euSign.ASiCGetSignType(previousASiCData[0].val);
    }

    if (pThis.m_keyContext.signAlgos.indexOf(signAlgo) == -1) {
      pThis.m_euSign.RaiseError(EU_ERROR_PKI_FORMATS_FAILED);
      return;
    }

    var signerCert = pThis._GetOwnCertificate(
      pThis._GetCertKeyTypeBySignAlgo(signAlgo),
      [EU_KEY_USAGE_DIGITAL_SIGNATURE, EU_KEY_USAGE_NON_REPUDATION],
    );

    var asicSigner = pThis.m_euSign.ASiCCreateSignerBeginEx(
      signerCert.data,
      signAlgo,
      asicType,
      signType,
      referencesNames,
      previousASiCData[0].val,
    );
    var itemToSign = {
      name: previousASiCData[0].name,
      val: asicSigner.GetAttrsHash(),
    };

    var signContainer = new EndUserKSPSignContainer(
      EndUserKSP.EU_KSP_SIGN_CONTAINER_UNKNOWN,
      EndUserKSP.EU_KSP_SIGN_FORMAT_UNKNOWN,
    );
    switch (asicType) {
      case EU_ASIC_TYPE_S:
        signContainer.type = EndUserKSP.EU_KSP_SIGN_CONTAINER_ASIC_S;
        break;

      case EU_ASIC_TYPE_E:
        signContainer.type = EndUserKSP.EU_KSP_SIGN_CONTAINER_ASIC_E;
        break;
    }

    switch (signType) {
      case EU_ASIC_SIGN_TYPE_CADES:
        signContainer.subType = EndUserKSP.EU_KSP_SIGN_FORMAT_CADES;
        break;

      case EU_ASIC_SIGN_TYPE_XADES:
        signContainer.subType = EndUserKSP.EU_KSP_SIGN_FORMAT_XADES;
        break;
    }

    pThis._SignHashOrData(
      signContainer.type,
      signContainer.subType,
      signType == EU_ASIC_SIGN_TYPE_CADES
        ? EU_SIGN_TYPE_CADES_BES
        : EU_SIGN_TYPE_UNKNOWN,
      signAlgo,
      null,
      itemToSign,
      true,
      true,
      null,
      false,
      function (signature) {
        try {
          asicData = pThis.m_euSign.ASiCCreateSignerEnd(
            asicType,
            signType,
            signLevel,
            asicSigner.GetSignatureReference(),
            signature.val,
            asicSigner.GetASiCData(),
            asBase64String,
          );
        } catch (e) {
          onError(e);
          return;
        }

        var result = {
          name: previousASiCData[0].name,
          val: asicData,
        };
        onSuccess(result);
      },
      onError,
    );
  } catch (e) {
    setTimeout(function () {
      onError(e);
    }, 1);

    return;
  }
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.SetRuntimeParameter = function (name, value) {
  if (name == EU_SIGN_TYPE_PARAMETER) this.m_cadesLevel = value;
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.GetKeySupportedSignAlgos = function () {
  return this.m_keyContext != null ? this.m_keyContext.signAlgos : [];
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.GetKeyCertIssuerCN = function () {
  return this.m_keyContext != null ? this.m_keyContext.certIssuerCN : null;
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.ResetPrivateKey = function () {
  this.m_keyContext = null;
  this.m_activeOperation = false;
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.ResetOperation = function () {
  this.m_activeOperation = false;
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.IsPrivateKeyReaded = function () {
  return this.m_keyContext != null;
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.ReadPrivateKey = function (
  ksp,
  userId,
  getCerts,
  keyId,
  caption,
  authData,
  certs,
  onSuccess,
  onError,
) {
  var pThis = this;
  var kspSettings = pThis._GetKSPSettings(ksp);

  if (kspSettings == null) {
    setTimeout(function () {
      var error = pThis.MakeError(EU_ERROR_BAD_PARAMETER, null);
      onError(error);
    }, 1);
    return;
  }

  pThis._CtxReadPrivateKeyWithServer(
    kspSettings,
    userId,
    getCerts,
    keyId,
    caption,
    authData,
    certs,
    function (keyContext) {
      pThis.m_keyContext = keyContext;
      onSuccess(keyContext.ownerInfo);
    },
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.GetOwnCertificates = function (onSuccess, onError) {
  var pThis = this;

  if (!pThis.IsPrivateKeyReaded()) {
    setTimeout(function () {
      var error = pThis.MakeError(EU_ERROR_BAD_CERT, null);
      onError(error);
    }, 1);
    return;
  }

  setTimeout(function () {
    onSuccess(pThis.m_keyContext.certs);
  }, 1);
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.ChangeOwnCertificatesStatus = function (
  requestType,
  revocationReason,
  onSuccess,
  onError,
) {
  var pThis = this;

  if (!pThis.IsPrivateKeyReaded()) {
    setTimeout(function () {
      var error = pThis.MakeError(EU_ERROR_BAD_CERT, null);
      onError(error);
    }, 1);
    return;
  }

  setTimeout(function () {
    var error = pThis.MakeError(EU_ERROR_NOT_SUPPORTED, null);
    onError(error);
  }, 1);
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.MakeNewCertificate = function (
  pkContext,
  uaKeysType,
  uaDSKeysSpec,
  useDSKeyAsKEP,
  uaKEPKeysSpec,
  internationalKeysType,
  rsaKeysSpec,
  ecdsaKeysSpec,
  newUserId,
  newKSP,
  onSuccess,
  onError,
) {
  var pThis = this;
  var kspSettings = pThis._GetKSPSettings(newKSP);

  if (kspSettings == null) {
    setTimeout(function () {
      var error = pThis.MakeError(EU_ERROR_BAD_PARAMETER, null);
      onError(error);
    }, 1);
    return;
  }

  if (
    internationalKeysType != EU_KEYS_TYPE_NONE &&
    internationalKeysType != EU_KEYS_TYPE_RSA_WITH_SHA &&
    internationalKeysType != EU_KEYS_TYPE_ECDSA_WITH_SHA
  ) {
    setTimeout(function () {
      var error = pThis.MakeError(EU_ERROR_BAD_PARAMETER, null);
      onError(error);
    }, 1);
    return;
  }

  var keyContext = new EndUserKSPKey(
    kspSettings,
    newUserId,
    null,
    [],
    [],
    null,
    [],
    null,
  );
  pThis.m_activeOperation = true;

  pThis._SServerGeneratePrivateKey(
    keyContext,
    uaKeysType,
    uaDSKeysSpec,
    useDSKeyAsKEP,
    uaKEPKeysSpec,
    internationalKeysType,
    rsaKeysSpec,
    ecdsaKeysSpec,
    null,
    function (key) {
      pThis.m_activeOperation = false;

      var rsaRequest = null,
        ecdsaRequest = null;
      switch (internationalKeysType) {
        case EU_KEYS_TYPE_RSA_WITH_SHA:
          rsaRequest = key.GetInternationalRequest();
          break;
        case EU_KEYS_TYPE_ECDSA_WITH_SHA:
          ecdsaRequest = key.GetInternationalRequest();
          break;
      }

      try {
        pThis.m_euSign.CtxMakeNewOwnCertificateWithCR(
          pkContext,
          key.GetUARequest(),
          key.GetUAKEPRequest(),
          rsaRequest,
          ecdsaRequest,
        );
      } catch (e) {
        onError(e);
        return;
      }

      pThis._CtxReadPrivateKeyWithServer(
        kspSettings,
        newUserId,
        true,
        null,
        null,
        null,
        null,
        function (keyContext) {
          onSuccess(keyContext.certs);
        },
        onError,
      );
    },
    function (error) {
      pThis.m_activeOperation = false;

      onError(error);
    },
  );
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.GetClientRegistrationToken = function (
  pkContext,
  ksp,
  parameters,
  onSuccess,
  onError,
) {
  var pThis = this;
  var kspSettings = pThis._GetKSPSettings(ksp);
  var command = EndUserKSP.EU_KSP_COMMAND_INITIALIZE_USER_REGISTRATION;

  if (!pkContext && !parameters) {
    setTimeout(function () {
      var error = pThis.MakeError(EU_ERROR_BAD_CERT, null);
      onError(error);
    }, 1);
    return;
  }

  if (!kspSettings || !kspSettings.registrationURL) {
    setTimeout(function () {
      var error = pThis.MakeError(EU_ERROR_BAD_PARAMETER, null);
      onError(error);
    }, 1);
    return;
  }

  var params = {
    ksp: kspSettings.ksp,
  };

  if (parameters && parameters["transactionId"] && parameters["signature"]) {
    params["transactionId"] = parameters["transactionId"];
    params["signature"] = parameters["signature"];
    command = EndUserKSP.EU_KSP_COMMAND_GET_USER_REGISTRATION_RESULT;
  }

  var expireDate = pThis._MakeExpireDate(EndUserKSP.EU_KSP_COMMAND_EXPIRE_TIME);
  pThis.m_activeOperation = true;

  var _onSign = function (data) {
    var signAlgo = pThis._GetSignAlgoByCertificateAndKSPSettings(
      pThis.m_euSign.CtxEnumOwnCertificates(pkContext, 0),
      kspSettings,
    );
    var external = true;
    var appendCert = true;
    var asBase64String = true;

    return pThis.m_euSign.CtxSignData(
      pkContext,
      signAlgo,
      data,
      external,
      appendCert,
      asBase64String,
    );
  };

  pThis._SendKSPRequest(
    kspSettings,
    command,
    params,
    expireDate,
    !parameters ? _onSign : null,
    function (data) {
      pThis.m_activeOperation = false;

      if (
        parameters &&
        command == EndUserKSP.EU_KSP_COMMAND_INITIALIZE_USER_REGISTRATION
      ) {
        if (!data) {
          var error = pThis.MakeError(EU_ERROR_TRANSMIT_REQUEST, null);
          onError(error);
          return;
        }

        onSuccess(data);

        return;
      }

      if (!data || !data.token) {
        var error = pThis.MakeError(EU_ERROR_TRANSMIT_REQUEST, null);
        onError(error);
        return;
      }

      var qrCode = null;

      try {
        qrCode = pThis.m_euSign.QRCodeEncode(
          StringToArray(data.token),
          SS_SERVER_QR_CODE_SCALE,
        );
        qrCode = pThis.m_euSign.Base64Encode(qrCode);
      } catch (error) {
        onError(error);
        return;
      }

      var token = JSON.parse(data.token);

      onSuccess({
        version: token.version,
        type: token.type,
        serverId: token.serverId,
        serverName: token.serverName,
        clientType: token.clientType,
        clientName: token.clientName,
        rawSign: token.rawSign,
        expiration: pThis._StrToDate(token.expiration),
        token: data.token,
        qrCode: qrCode,
      });
    },
    function (error) {
      pThis.m_activeOperation = false;

      onError(error);
    },
  );
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.SignHash = function (
  signAlgo,
  hash,
  appendCert,
  asBase64String,
  onSuccess,
  onError,
) {
  var pThis = this;

  pThis._SignHashOrData(
    EndUserKSP.EU_KSP_SIGN_CONTAINER_CADES,
    EndUserKSP.EU_KSP_SIGN_FORMAT_CADES,
    pThis.m_cadesLevel,
    signAlgo,
    null,
    hash,
    true,
    appendCert,
    null,
    asBase64String,
    onSuccess,
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.SignDataEx = function (
  signAlgo,
  data,
  external,
  appendCert,
  asBase64String,
  onSuccess,
  onError,
) {
  var pThis = this;

  pThis._SignHashOrData(
    EndUserKSP.EU_KSP_SIGN_CONTAINER_CADES,
    EndUserKSP.EU_KSP_SIGN_FORMAT_CADES,
    pThis.m_cadesLevel,
    signAlgo,
    data,
    null,
    external,
    appendCert,
    null,
    asBase64String,
    onSuccess,
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.AppendSign = function (
  signAlgo,
  data,
  previousSign,
  appendCert,
  asBase64String,
  onSuccess,
  onError,
) {
  var pThis = this;

  pThis._SignHashOrData(
    EndUserKSP.EU_KSP_SIGN_CONTAINER_CADES,
    EndUserKSP.EU_KSP_SIGN_FORMAT_CADES,
    pThis.m_cadesLevel,
    signAlgo,
    data,
    null,
    data != null,
    appendCert,
    previousSign,
    asBase64String,
    onSuccess,
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.AppendSignHash = function (
  signAlgo,
  hash,
  previousSign,
  appendCert,
  asBase64String,
  onSuccess,
  onError,
) {
  var pThis = this;

  pThis._SignHashOrData(
    EndUserKSP.EU_KSP_SIGN_CONTAINER_CADES,
    EndUserKSP.EU_KSP_SIGN_FORMAT_CADES,
    pThis.m_cadesLevel,
    signAlgo,
    null,
    hash,
    true,
    appendCert,
    previousSign,
    asBase64String,
    onSuccess,
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.GetSignValue = function (
  signAlgo,
  hash,
  asBase64String,
  asASN1,
  onSuccess,
  onError,
) {
  var pThis = this;

  setTimeout(function () {
    onError(pThis.m_euSign.MakeError(EU_ERROR_NOT_SUPPORTED));
  }, 1);
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.EnvelopData = function (
  recipientsCerts,
  data,
  signData,
  appendCert,
  asBase64String,
  useDynamicKey,
  onSuccess,
  onError,
) {
  var pThis = this;

  try {
    if (signData || !useDynamicKey) {
      pThis.m_euSign.RaiseError(EU_ERROR_NOT_SUPPORTED);
      return;
    }

    var result = pThis.m_euSign.EnvelopDataToRecipientsWithDynamicKey(
      recipientsCerts,
      false,
      appendCert,
      data,
      asBase64String,
    );
    setTimeout(function () {
      onSuccess(result);
    }, 1);
  } catch (e) {
    setTimeout(function () {
      onError(e);
    }, 1);

    return;
  }
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.DevelopData = function (
  envelopedData,
  senderCert,
  onSuccess,
  onError,
) {
  var pThis = this;

  try {
    pThis.m_euSign.RaiseError(EU_ERROR_NOT_SUPPORTED);
  } catch (e) {
    setTimeout(function () {
      onError(e);
    }, 1);

    return;
  }
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.PDFSignData = function (
  signAlgo,
  pdfData,
  signLevel,
  asBase64String,
  onSuccess,
  onError,
) {
  var pThis = this;

  try {
    var pThis = this;
    var pdfDatas = DataToNamedDataArray(pdfData);
    var pdfSigners = [];
    var itemsToSigns = [];

    for (var i = 0; i < pdfDatas.length; i++) {
      var pdfSigner = pThis.m_euSign.PDFCreateSignerBegin(
        signAlgo,
        pdfDatas[i].val,
      );

      pdfSigners.push(pdfSigner);
      itemsToSigns.push({
        name: pdfDatas[i].name,
        val: pdfSigner.GetAttrsHash(),
      });
    }

    pThis._SignHashOrData(
      EndUserKSP.EU_KSP_SIGN_CONTAINER_PADES,
      EndUserKSP.EU_KSP_SIGN_FORMAT_PADES,
      signLevel,
      signAlgo,
      null,
      itemsToSigns,
      true,
      true,
      null,
      false,
      function (signatures) {
        var signs = [];
        try {
          for (var i = 0; i < pdfDatas.length; i++) {
            var signedPDF = pThis.m_euSign.PDFCreateSignerEnd(
              pdfSigners[i].GetPDFData(),
              signLevel,
              pdfSigners[i].GetSignatureReference(),
              signatures[i].val,
              asBase64String,
            );
            signs.push(signedPDF);
          }
        } catch (e) {
          onError(e);
          return;
        }

        var result = DataToResult(pdfData, signs);
        onSuccess(result);
      },
      onError,
    );
  } catch (e) {
    setTimeout(function () {
      onError(e);
    }, 1);

    return;
  }
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.ASiCSignData = function (
  signAlgo,
  asicType,
  signType,
  signLevel,
  references,
  asBase64String,
  onSuccess,
  onError,
) {
  var pThis = this;

  try {
    references = DataToNamedDataArray(references);

    var asicReferences = [];
    var asicReferencesNames = [];
    for (var i = 0; i < references.length; i++) {
      var reference = new EndUserReference(
        references[i].name,
        references[i].val,
      );
      asicReferences.push(reference);
      asicReferencesNames.push(references[i].name);
    }

    var emptyASiCData = pThis.m_euSign.ASiCCreateEmptySign(
      asicType,
      signType,
      asicReferences,
    );

    var asicData = {
      name:
        asicReferences[0].name +
        (asicType == EU_ASIC_TYPE_S ? ".asics" : ".asice"),
      val: emptyASiCData,
    };

    pThis._ASiCAppendSign(
      signAlgo,
      asicType,
      signType,
      signLevel,
      asicReferencesNames,
      asicData,
      asBase64String,
      onSuccess,
      onError,
    );
  } catch (e) {
    setTimeout(function () {
      onError(e);
    }, 1);

    return;
  }
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.ASiCAppendSign = function (
  signAlgo,
  signLevel,
  referencesNames,
  asicData,
  asBase64String,
  onSuccess,
  onError,
) {
  var pThis = this;

  pThis._ASiCAppendSign(
    signAlgo,
    EU_ASIC_TYPE_UNKNOWN,
    EU_ASIC_SIGN_TYPE_UNKNOWN,
    signLevel,
    referencesNames,
    asicData,
    asBase64String,
    onSuccess,
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUserKSP.prototype.XAdESSignData = function (
  signAlgo,
  xadesType,
  signLevel,
  references,
  asBase64String,
  onSuccess,
  onError,
) {
  var pThis = this;

  try {
    references = DataToNamedDataArray(references);

    var xadesReferences = [];
    for (var i = 0; i < references.length; i++) {
      var reference = new EndUserReference(
        references[i].name,
        references[i].val,
      );
      xadesReferences.push(reference);
    }

    if (pThis.m_keyContext.signAlgos.indexOf(signAlgo) == -1) {
      pThis.m_euSign.RaiseError(EU_ERROR_PKI_FORMATS_FAILED);
      return;
    }

    var signerCert = pThis._GetOwnCertificate(
      pThis._GetCertKeyTypeBySignAlgo(signAlgo),
      [EU_KEY_USAGE_DIGITAL_SIGNATURE, EU_KEY_USAGE_NON_REPUDATION],
    );

    var xadesSigner = pThis.m_euSign.XAdESCreateSignerBegin(
      signerCert.data,
      signAlgo,
      xadesType,
      xadesReferences,
    );
    var itemToSign = {
      name:
        references[0].name +
        (references[0].name.endsWith(".xml") ? "" : ".xml"),
      val: xadesSigner.GetAttrsHash(),
    };

    pThis._SignHashOrData(
      EndUserKSP.EU_KSP_SIGN_CONTAINER_XADES,
      EndUserKSP.EU_KSP_SIGN_FORMAT_XADES,
      EU_SIGN_TYPE_UNKNOWN,
      signAlgo,
      null,
      itemToSign,
      true,
      true,
      null,
      false,
      function (signature) {
        var xadesData = null;

        try {
          xadesData = pThis.m_euSign.XAdESCreateSignerEnd(
            signLevel,
            xadesSigner.GetSignatureReference(),
            signature.val,
            xadesSigner.GetXAdESData(),
            asBase64String,
          );
        } catch (e) {
          onError(e);
          return;
        }

        var result = {
          name: itemToSign.name,
          val: xadesData,
        };
        onSuccess(result);
      },
      onError,
    );
  } catch (e) {
    setTimeout(function () {
      onError(e);
    }, 1);

    return;
  }
};

//===============================================================================
//===============================================================================

var EU_CMP_COMPATIBILITY_NONE = 0x00000000;
var EU_CMP_COMPATIBILITY_DOWNLOAD_EU_CERTS = 0x00000001;
var EU_CMP_COMPATIBILITY_SEARCH_EU_CERTS = 0x00000002;

var EU_CADES_TYPE_UNKNOWN = 0;
var EU_CADES_TYPE_DETACHED = 1;
var EU_CADES_TYPE_ENVELOPED = 3;

var EU_SIGN_CONTAINER_TYPE_UNKNOWN = 0;
var EU_SIGN_CONTAINER_TYPE_CADES = 1;
var EU_SIGN_CONTAINER_TYPE_XADES = 2;
var EU_SIGN_CONTAINER_TYPE_PADES = 3;
var EU_SIGN_CONTAINER_TYPE_ASIC = 4;

var EndUserEventType = {
  None: 0,
  All: 1,
  ConfirmKSPOperation: 2,
};

//===============================================================================

var s_loaded = false;
var s_endUser = null;
var s_origin = "";
var s_pathname = "";

//===============================================================================

function Debug(msg, info) {
  if (!EU_DEBUG) return;

  try {
    console.log("Info:");
    console.log(info);
    console.log("Trace:");
    console.trace(msg);
  } catch (e) {}
}

//===============================================================================

function EUSignCPModuleInitialized(loaded) {
  s_loaded = loaded;
  s_endUser = new EndUser();

  Debug("EUSignCPModuleInitialized");
}

//===============================================================================

self.onmessage = function (msg) {
  if (!s_loaded) {
    setTimeout(function () {
      onmessage(msg);
    }, 50);
    return;
  }

  s_endUser.OnMessage(msg.data);
};

//===============================================================================

var TaxReportPKey = function () {
  this.signPKCtx = null;
  this.signCert = null;
  this.envelopPKCtx = null;
  this.envelopCert = null;
};

//===============================================================================

function DataToNamedDataArray(data) {
  data = data != null ? data : [];
  data = !Array.isArray(data) ? [data] : data;
  var namedData = [];

  for (var i = 0; i < data.length; i++) {
    var named =
      data[i] !== null &&
      typeof data[i].name !== "undefined" &&
      typeof data[i].val !== "undefined";
    namedData.push({
      name: named ? data[i].name : "Ім'я відсутнє (" + (i + 1) + ")",
      val: named ? data[i].val : data[i],
    });
  }

  return namedData;
}

function DataToResult(data, dataResult) {
  var results = [];
  var single = !Array.isArray(data);
  var arrData = single ? [data] : data;

  for (var i = 0; i < arrData.length; i++) {
    var named =
      arrData[i] !== null &&
      typeof arrData[i].name !== "undefined" &&
      typeof arrData[i].val !== "undefined";
    var result = named
      ? {
          name: arrData[i].name,
          val: dataResult[i],
        }
      : dataResult[i];
    results.push(result);
  }

  return single ? results[0] : results;
}

//===============================================================================

function GetOptionalParam(param, defaultParam) {
  return typeof param === "undefined" ? defaultParam : param;
}

//===============================================================================

var EndUser = function () {
  this.m_euSign = EUSignCP();
  this.m_settings = null;
  this.m_initialized = false;
  this.m_context = null;
  this.m_pkContext = null;
  this.m_euKSP = null;
  this.m_eventListeners = [];
};

//-------------------------------------------------------------------------------

EndUser.prototype.OnMessage = function (msg) {
  var pThis = this;

  var resp = {
    id: msg.id,
    cmd: msg.cmd,
    result: null,
    error: null,
  };

  Debug("EndUser::OnMessage", msg);

  var _onSuccess = function (result) {
    Debug("EndUser::OnMessage(_onSuccess)", result);

    resp.result = result;
    postMessage(resp);
  };

  var _onError = function (e) {
    Debug("EndUser::OnMessage(_onError)", e);

    resp.error = pThis.MakeError(e);
    postMessage(resp);
  };

  try {
    s_origin = msg.origin;
    s_pathname = msg.pathname;

    var params = msg.params.concat([_onSuccess, _onError]);
    pThis[msg.cmd].apply(pThis, params);
  } catch (e) {
    _onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.OnEvent = function (event) {
  var listener =
    this.m_eventListeners[event.type] ||
    this.m_eventListeners[EndUserEventType.All];
  if (listener) {
    var resp = {
      id: -2,
      cmd: null,
      result: event,
      error: null,
    };

    postMessage(resp);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.MakeError = function (e) {
  Debug("EndUser::MakeError", e);

  if (!e.GetMessage) {
    e = this.m_euSign.MakeError(EU_ERROR_UNKNOWN);
  }

  return {
    code: e.GetErrorCode(),
    message: e.GetMessage(),
  };
};

//-------------------------------------------------------------------------------

EndUser.prototype.MakeURL = function (url) {
  if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
    return url;
  }

  if (url.indexOf("/") == 0 && s_origin) {
    return s_origin + url;
  }

  if (s_origin && s_pathname) {
    return (
      s_origin + s_pathname.substr(0, s_pathname.lastIndexOf("/")) + "/" + url
    );
  }

  return url;
};

//-------------------------------------------------------------------------------

EndUser.prototype.DowloadData = function (url, dataType) {
  try {
    var xmlHttp = XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");

    url = this.MakeURL(url);

    xmlHttp.open("GET", url, false);
    if (dataType == "binary") xmlHttp.responseType = "arraybuffer";
    xmlHttp.send();
    if (xmlHttp.status != 200) {
      throw (
        "Download data error. URL - " + url + ", status - " + xmlHttp.status
      );
    }

    switch (dataType) {
      case "binary":
        return new Uint8Array(xmlHttp.response);

      case "json":
        return JSON.parse(xmlHttp.responseText.replace(/\\'/g, "'"));

      default:
        return xmlHttp.responseText;
    }
  } catch (e) {
    console.log("EndUser.DowloadData error: " + e);
    this.m_euSign.RaiseError(EU_ERROR_DOWNLOAD_FILE);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetCASettings = function (CACommonName) {
  if (!CACommonName) return null;

  var CAs = this.m_settings.CAs;
  for (var i = 0; i < CAs.length; i++) {
    var issuerCNs = CAs[i].issuerCNs;
    for (var j = 0; j < issuerCNs.length; j++) {
      if (issuerCNs[j] == CACommonName) return CAs[i];
    }
  }

  return null;
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetDefaultTSPSettings = function (settings) {
  var tsp = null;

  if (settings.TSPServer) {
    tsp = settings.TSPServer;
  } else {
    var CA = null;

    var CAs = settings.CAs;
    for (var i = 0; i < CAs.length; i++) {
      if (!CAs[i].tspAddress || !CAs[i].tspAddressPort) continue;

      if (!CA || CAs[i].tspAddressPort == "80") CA = CAs[i];

      if (CA.tspAddressPort == "80") break;
    }

    if (CA) {
      tsp = {
        address: CA.tspAddress,
        port: CA.tspAddressPort,
      };
    }
  }

  return tsp;
};

//-------------------------------------------------------------------------------

EndUser.prototype.IsCMPCompatible = function (CA, compatibility) {
  if (!CA.cmpAddress) return false;

  if (
    typeof CA.cmpCompatibility !== "undefined" &&
    (CA.cmpCompatibility & compatibility) != compatibility
  ) {
    return false;
  }

  return true;
};

//-------------------------------------------------------------------------------

EndUser.prototype.IsCMPsAvailable = function (settings) {
  var pThis = this;

  var CAs = settings.CAs;
  for (var i = 0; i < CAs.length; i++) {
    if (pThis.IsCMPCompatible(CAs[i], EU_CMP_COMPATIBILITY_DOWNLOAD_EU_CERTS)) {
      return true;
    }
  }

  return false;
};

//-------------------------------------------------------------------------------

EndUser.prototype.SetCMPSettings = function (CACommonName) {
  var pThis = this;
  var euSign = pThis.m_euSign;
  var CA = pThis.GetCASettings(CACommonName);

  if (CACommonName && CA == null && !pThis.m_settings.allowForeignCAs) {
    euSign.RaiseError(EU_ERROR_READ_SETTINGS);
    return;
  }

  var useCMP = !!(CA && CA.cmpAddress);
  var cmp = euSign.CreateCMPSettings();
  cmp.SetUseCMP(useCMP);
  if (useCMP) {
    cmp.SetAddress(CA.cmpAddress);
    cmp.SetPort("80");
  }
  euSign.SetCMPSettings(cmp);

  return useCMP;
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxReadPrivateKeyBinaryInternal = function (
  context,
  privateKey,
  password,
  certs,
  caCN,
  autoSearch,
) {
  var pThis = this;
  var pkContext = null;
  var euSign = pThis.m_euSign;
  if (certs) {
    if (Array.isArray(certs)) {
      certs.forEach(function (cert) {
        euSign.SaveCertificate(cert);
      });
    } else {
      euSign.SaveCertificates(certs);
    }
  }

  if (!context) {
    context = pThis.m_context;
  } else {
    context = EndUserInitFromTransferableObject(context, EndUserContext);
  }

  pThis.SetCMPSettings(caCN);

  try {
    pkContext = euSign.CtxReadPrivateKeyBinary(context, privateKey, password);
    var info = pkContext.GetOwnerInfo();
    if (caCN) {
      var ca = pThis.GetCASettings(info.GetIssuerCN());
      if (!ca || ca.issuerCNs.indexOf(caCN) == -1) {
        throw euSign.MakeError(EU_ERROR_CERT_NOT_FOUND);
      }
    } else {
      pThis.SetCMPSettings(info.GetIssuerCN());
    }
  } catch (e) {
    if (pkContext) {
      try {
        euSign.CtxFreePrivateKey(pkContext);
      } catch (e) {}
    }

    if (e.GetErrorCode() != EU_ERROR_CERT_NOT_FOUND || caCN || !autoSearch) {
      throw e;
    }

    var result = pThis.SearchPrivateKeyCertificatesWithCMP(
      privateKey,
      password,
    );

    return pThis.CtxReadPrivateKeyBinaryInternal(
      context,
      privateKey,
      password,
      result.certs,
      null,
      false,
    );
  }

  return pkContext;
};

//-------------------------------------------------------------------------------

EndUser.prototype.ReadPrivateKeyBinaryInternal = function (
  privateKey,
  password,
  certs,
  CACommonName,
) {
  var pThis = this;

  pThis.ResetPrivateKeyInternal();

  pThis.m_pkContext = pThis.CtxReadPrivateKeyBinaryInternal(
    pThis.m_context,
    privateKey,
    password,
    certs,
    CACommonName,
    true,
  );
};

//-------------------------------------------------------------------------------

EndUser.prototype.ResetPrivateKeyInternal = function () {
  this.m_euSign.CtxFreePrivateKey(this.m_pkContext);
  this.m_pkContext = null;

  this.m_euKSP.ResetPrivateKey();
};

//-------------------------------------------------------------------------------

EndUser.prototype.SearchPrivateKeyCertificatesWithCMP = function (
  privateKey,
  password,
  caCN,
) {
  var pThis = this;
  var euSign = pThis.m_euSign;
  var CAs = pThis.m_settings.CAs;
  var certs = null;
  var isCAsAccessChecked = false;

  if (!pThis.IsCMPsAvailable(pThis.m_settings)) {
    throw euSign.MakeError(EU_ERROR_CERT_NOT_FOUND);
  }

  var keyInfo = euSign.GetKeyInfoBinary(privateKey, password);

  for (var i = 0; i < CAs.length; i++) {
    var cmpCompatibility = caCN
      ? EU_CMP_COMPATIBILITY_DOWNLOAD_EU_CERTS
      : EU_CMP_COMPATIBILITY_SEARCH_EU_CERTS;
    if (!pThis.IsCMPCompatible(CAs[i], cmpCompatibility)) continue;

    if (caCN && CAs[i].issuerCNs.indexOf(caCN) == -1) continue;

    try {
      certs = euSign.GetCertificatesByKeyInfo(keyInfo, [
        CAs[i].cmpAddress + ":80",
      ]);
    } catch (e) {
      var errorCode = e.GetErrorCode();

      if (
        errorCode == EU_ERROR_CERT_NOT_FOUND ||
        errorCode == EU_ERROR_TRANSMIT_REQUEST
      ) {
        isCAsAccessChecked =
          isCAsAccessChecked || errorCode == EU_ERROR_CERT_NOT_FOUND;
      }

      continue;
    }

    return {
      certs: certs,
      CACommonName: CAs[i].issuerCNs[0],
    };
  }

  throw euSign.MakeError(
    isCAsAccessChecked ? EU_ERROR_CERT_NOT_FOUND : EU_ERROR_TRANSMIT_REQUEST,
  );
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetSignAlgoByCertificate = function (cert) {
  switch (cert.GetInfoEx().GetPublicKeyType()) {
    case EU_CERT_KEY_TYPE_DSTU4145:
      return cert.GetInfoEx().GetCertHashType() == EU_CERT_HASH_TYPE_GOST34311
        ? EU_CTX_SIGN_DSTU4145_WITH_GOST34311
        : EU_CTX_SIGN_DSTU4145_WITH_DSTU7564;

    case EU_CERT_KEY_TYPE_RSA:
      return EU_CTX_SIGN_RSA_WITH_SHA;

    case EU_CERT_KEY_TYPE_ECDSA:
      return EU_CTX_SIGN_ECDSA_WITH_SHA;

    default:
      return EU_CTX_SIGN_UNKNOWN;
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetHashAlgoBySignAlgo = function (signAlgo) {
  var pThis = this;
  var euSign = pThis.m_euSign;

  switch (signAlgo) {
    case EU_CTX_SIGN_DSTU4145_WITH_GOST34311:
      return EU_CTX_HASH_ALGO_GOST34311;

    case EU_CTX_SIGN_RSA_WITH_SHA:
    case EU_CTX_SIGN_ECDSA_WITH_SHA:
      return EU_CTX_HASH_ALGO_SHA256;

    case EU_CTX_SIGN_DSTU4145_WITH_DSTU7564:
      return EU_CTX_HASH_ALGO_DSTU7564_256;

    default:
      euSign.RaiseError(EU_ERROR_BAD_PARAMETER);
      break;
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxSignHashInternal = function (
  pkContext,
  signAlgo,
  hash,
  previousSign,
  appendCert,
  asBase64String,
  onSuccess,
  onError,
) {
  var pThis = this;
  var euSign = pThis.m_euSign;

  try {
    if (pkContext == null) {
      euSign.RaiseError(EU_ERROR_BAD_CERT);
      return;
    }

    pkContext = EndUserInitFromTransferableObject(
      pkContext,
      EndUserPrivateKeyContext,
    );

    var appendSign = previousSign != null;
    var hashes = DataToNamedDataArray(hash);
    var previousSigns = DataToNamedDataArray(previousSign);
    var signs = [];

    if (appendSign && hashes.length != previousSigns.length) {
      euSign.RaiseError(EU_ERROR_BAD_PARAMETER);
      return;
    }

    for (var i = 0; i < hashes.length; i++) {
      var sign = appendSign
        ? euSign.CtxAppendSignHashValue(
            pkContext,
            signAlgo,
            hashes[i].val,
            previousSigns[i].val,
            appendCert,
            asBase64String,
          )
        : euSign.CtxSignHashValue(
            pkContext,
            signAlgo,
            hashes[i].val,
            appendCert,
            asBase64String,
          );
      signs.push(sign);
    }

    var result = DataToResult(hash, signs);
    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxSignDataInternal = function (
  pkContext,
  signAlgo,
  data,
  previousSign,
  external,
  appendCert,
  asBase64String,
  onSuccess,
  onError,
) {
  var pThis = this;
  var euSign = pThis.m_euSign;

  try {
    if (pkContext == null) {
      euSign.RaiseError(EU_ERROR_BAD_CERT);
      return;
    }

    pkContext = EndUserInitFromTransferableObject(
      pkContext,
      EndUserPrivateKeyContext,
    );

    if (signAlgo == EU_CTX_SIGN_UNKNOWN) {
      signAlgo = pThis.GetSignAlgoByCertificate(
        euSign.CtxEnumOwnCertificates(pkContext, 0),
      );
    }

    var appendSign = previousSign != null;
    var datas = DataToNamedDataArray(data);
    var previousSigns = DataToNamedDataArray(previousSign);
    var signs = [];

    if (appendSign && external && datas.length != previousSigns.length) {
      euSign.RaiseError(EU_ERROR_BAD_PARAMETER);
      return;
    }

    var length = appendSign && !external ? previousSigns.length : datas.length;
    for (var i = 0; i < length; i++) {
      var sign = null;

      if (external) {
        var hashAlgo = pThis.GetHashAlgoBySignAlgo(signAlgo);
        var hash = euSign.CtxHashData(
          pThis.m_context,
          hashAlgo,
          null,
          datas[i].val,
          true,
        );

        if (appendSign) {
          sign = euSign.CtxAppendSignHashValue(
            pkContext,
            signAlgo,
            hash,
            previousSigns[i].val,
            appendCert,
            asBase64String,
          );
        } else {
          sign = euSign.CtxSignHashValue(
            pkContext,
            signAlgo,
            hash,
            appendCert,
            asBase64String,
          );
        }
      } else {
        if (appendSign) {
          sign = euSign.CtxAppendSign(
            pkContext,
            signAlgo,
            null,
            previousSigns[i].val,
            appendCert,
            asBase64String,
          );
        } else {
          sign = euSign.CtxSignData(
            pkContext,
            signAlgo,
            datas[i].val,
            external,
            appendCert,
            asBase64String,
          );
        }
      }

      signs.push(sign);
    }

    var result = DataToResult(
      appendSign && !external ? previousSign : data,
      signs,
    );
    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxGetSignValueInternal = function (
  pkContext,
  signAlgo,
  hash,
  asBase64String,
  asASN1,
  onSuccess,
  onError,
) {
  var pThis = this;
  var euSign = pThis.m_euSign;

  try {
    if (pkContext == null) {
      euSign.RaiseError(EU_ERROR_BAD_CERT);
      return;
    }

    if (signAlgo == EU_CTX_SIGN_ECDSA_WITH_SHA) {
      euSign.CtxSetParameter(
        pThis.m_context,
        EU_ENCODE_ECDSA_SIGN_VALUE_CONTEXT_PARAMETER,
        asASN1,
      );
    }

    pkContext = EndUserInitFromTransferableObject(
      pkContext,
      EndUserPrivateKeyContext,
    );

    var hashes = DataToNamedDataArray(hash);
    var signs = [];

    for (var i = 0; i < hashes.length; i++) {
      var sign = euSign.CtxGetSignValue(
        pkContext,
        signAlgo,
        hashes[i].val,
        asBase64String,
      );
      signs.push(sign);
    }

    var result = DataToResult(hash, signs);
    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.LoadTaxReportPKey = function (pkCtxs, keyUsages, isStamp) {
  var pThis = this;
  var euSign = pThis.m_euSign;

  if (!Array.isArray(pkCtxs)) pkCtxs = [pkCtxs];

  if (pkCtxs.length > 2) throw euSign.MakeError(EU_ERROR_BAD_PARAMETER);

  for (var i = 0; i < pkCtxs.length; i++) {
    pkCtxs[i] = EndUserInitFromTransferableObject(
      pkCtxs[i],
      EndUserPrivateKeyContext,
    );
  }

  var pKey = new TaxReportPKey();

  for (var i = 0; i < keyUsages.length; i++) {
    var keyUsage = keyUsages[i];
    var pkCtx = null;
    var cert = null;

    for (var j = 0; j < pkCtxs.length; j++) {
      try {
        pkCtx = pkCtxs[j];
        cert = euSign.CtxGetOwnCertificate(
          pkCtx,
          EU_CERT_KEY_TYPE_DSTU4145,
          keyUsage,
        );
      } catch (e) {
        pkCtx = null;
        cert = null;
      }

      if (cert == null) continue;

      if (
        isStamp &&
        keyUsage & EU_KEY_USAGE_DIGITAL_SIGNATURE &&
        !(
          cert
            .GetInfoEx()
            .GetExtKeyUsages()
            .indexOf(UA_OID_EXT_KEY_USAGE_STAMP) > -1
        )
      ) {
        throw euSign.MakeError(EU_ERROR_BAD_PARAMETER);
      }

      break;
    }

    if (cert == null) throw euSign.MakeError(EU_ERROR_BAD_PARAMETER);

    if (keyUsage & EU_KEY_USAGE_DIGITAL_SIGNATURE) {
      pKey.signPKCtx = pkCtx;
      pKey.signCert = cert;
    } else if (keyUsage & EU_KEY_USAGE_KEY_AGREEMENT) {
      pKey.envelopPKCtx = pkCtx;
      pKey.envelopCert = cert;
    } else {
      throw euSign.MakeError(EU_ERROR_BAD_PARAMETER);
    }
  }

  return pKey;
};

//-------------------------------------------------------------------------------

EndUser.prototype.ProtectTaxReport = function (
  accountantPKey,
  directorPKey,
  stampPKey,
  senderEMail,
  recipientCertificate,
  report,
  returnIntermediateSign,
) {
  var pThis = this;
  var euSign = pThis.m_euSign;

  var result = {
    name: report.name,
    data: null,
    error: null,
  };
  try {
    var _sign = function (pKey, data) {
      data = euSign.CtxSignData(
        pKey.signPKCtx,
        pThis.GetSignAlgoByCertificate(pKey.signCert),
        data,
        false,
        true,
      );
      return euSign.AppendCryptoHeader(
        EU_HEADER_CA_TYPE,
        EU_HEADER_PART_TYPE_SIGNED,
        data,
      );
    };

    var _isMultiCert = function (cert) {
      var keyUsage =
        EU_KEY_USAGE_DIGITAL_SIGNATURE | EU_KEY_USAGE_KEY_AGREEMENT;

      return keyUsage == (cert.GetInfoEx().GetKeyUsageType() & keyUsage);
    };

    var reportData = report.data;
    var ownCert;

    if (accountantPKey != null) reportData = _sign(accountantPKey, reportData);

    if (directorPKey != null) reportData = _sign(directorPKey, reportData);

    if (stampPKey != null) reportData = _sign(stampPKey, reportData);

    if (returnIntermediateSign) result.signedData = reportData;

    if (directorPKey != null || stampPKey != null) {
      var pKey = stampPKey != null ? stampPKey : directorPKey;

      reportData = euSign.CtxEnvelopData(
        pKey.envelopPKCtx,
        [recipientCertificate],
        EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL,
        false,
        false,
        reportData,
      );

      reportData = euSign.AppendCryptoHeader(
        EU_HEADER_CA_TYPE,
        EU_HEADER_PART_TYPE_ENCRYPTED,
        reportData,
      );

      ownCert = pKey.envelopCert;

      if (!_isMultiCert(ownCert)) {
        var certHeader = euSign.AppendCryptoHeader(
          EU_HEADER_CA_TYPE,
          EU_HEADER_PART_TYPE_CERTCRYPT,
          ownCert.GetData(),
        );

        var tmp = new Uint8Array(certHeader.byteLength + reportData.byteLength);
        tmp.set(new Uint8Array(certHeader), 0);
        tmp.set(new Uint8Array(reportData), certHeader.byteLength);

        reportData = tmp;
      }

      reportData = _sign(pKey, reportData);
    } else {
      ownCert = accountantPKey.signCert;
    }

    reportData = euSign.AppendTransportHeader(
      EU_HEADER_CA_TYPE,
      report.name,
      senderEMail,
      ownCert.GetData(),
      reportData,
    );

    result.data = reportData;
    result.error = pThis.MakeError(euSign.MakeError(EU_ERROR_NONE));
  } catch (e) {
    result.error = pThis.MakeError(e);
  }

  return result;
};

//-------------------------------------------------------------------------------

EndUser.prototype.UnprotectTaxReceipt = function (
  directorOrStampPrivateKeyContext,
  receipt,
) {
  var euSign = this.m_euSign;

  var result = {
    data: null,
    receiptNumber: 0,
    initiators: [],
    error: null,
  };
  try {
    var receiptData = receipt.data;
    var headerInfo = null;

    try {
      headerInfo = euSign.ParseTransportHeader(receiptData);
      result.receiptNumber = headerInfo.GetReceiptNumber();
      receiptData = headerInfo.GetCryptoData();
    } catch (e) {
      if (e.GetErrorCode() != EU_ERROR_PKI_FORMATS_FAILED) {
        throw e;
      }
    }

    while (true) {
      try {
        headerInfo = euSign.ParseCryptoHeader(receiptData);
      } catch (e) {
        if (e.GetErrorCode() != EU_ERROR_BAD_PARAMETER) {
          throw e;
        }

        break;
      }

      var cryptoData = headerInfo.GetCryptoData();

      switch (headerInfo.GetHeaderType()) {
        case EU_HEADER_PART_TYPE_SIGNED:
          var signInfo = euSign.CtxVerifyDataInternal(
            this.m_context,
            0,
            cryptoData,
          );
          receiptData = signInfo.GetData();
          signInfo.data = null;
          signInfo = signInfo.GetTransferableObject();
          signInfo.signLevel = euSign.GetSignType(0, cryptoData);
          result.initiators.push(signInfo);
          break;

        case EU_HEADER_PART_TYPE_ENCRYPTED:
          var senderInfo = euSign.CtxDevelopData(
            directorOrStampPrivateKeyContext,
            cryptoData,
            null,
          );
          receiptData = senderInfo.GetData();
          senderInfo.data = null;
          result.initiators.push(senderInfo.GetTransferableObject());
          break;

        case EU_HEADER_PART_TYPE_STAMPED:
        case EU_HEADER_PART_TYPE_CERTCRYPT:
          receiptData = receiptData.slice(
            headerInfo.GetHeaderSize() + cryptoData.length,
            receiptData.length,
          );
          break;

        default:
          euSign.RaiseError(EU_ERROR_PKI_FORMATS_FAILED);
      }
    }

    result.data = receiptData;
    result.error = this.MakeError(euSign.MakeError(EU_ERROR_NONE));
  } catch (e) {
    result.error = this.MakeError(e);
  }

  return result;
};

//===============================================================================

EndUser.prototype.GetLibraryInfo = function (downloadsURL, onSuccess, onError) {
  try {
    var info = {
      version: this.m_euSign.GetVersion(),
      supported: true,
      loaded: true,
    };

    onSuccess(info);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.IsInitialized = function (onSuccess, onError) {
  onSuccess(this.m_initialized);
};

//-------------------------------------------------------------------------------

EndUser.prototype.Initialize = function (settings, onSuccess, onError) {
  Debug("EndUser::Initialize", arguments);
  Debug("EndUser::Initialize version", this.m_euSign.GetVersion());

  var pThis = this;
  var euSign = pThis.m_euSign;
  var KSPs, i;

  try {
    if (typeof settings.CAs === "string") {
      settings.CAs = pThis.DowloadData(settings.CAs, "json");
    }

    if (typeof settings.CACertificates === "string") {
      settings.CACertificates = pThis.DowloadData(
        settings.CACertificates,
        "binary",
      );
    }

    if (typeof settings.signInfoTmpl === "string") {
      settings.signInfoTmpl = pThis.DowloadData(settings.signInfoTmpl, "");
    }

    pThis.m_settings = settings;

    euSign.SetErrorMessageLanguage(settings.language);
    euSign.SetCharset(settings.encoding);
    euSign.SetJavaStringCompliant(true);

    euSign.Initialize();
    pThis.m_context = euSign.CtxCreate();

    euSign.SetXMLHTTPProxyService(pThis.MakeURL(settings.httpProxyServiceURL));

    euSign.SetRuntimeParameter(EU_RESOLVE_OIDS_PARAMETER, false);
    euSign.CtxSetParameter(
      pThis.m_context,
      EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
      false,
    );
    euSign.SetRuntimeParameter(
      EU_CHECK_CERT_CHAIN_ON_SIGN_TIME_PARAMETER,
      true,
    );

    euSign.InitializeMandatorySettings();

    var fs = euSign.CreateFileStoreSettings();
    fs.SetPath("");
    fs.SetSaveLoadedCerts(true);
    euSign.SetFileStoreSettings(fs);

    if (settings.CACertificates != null)
      euSign.SaveCertificates(settings.CACertificates);

    var CAs = settings.CAs;
    var offline = true;
    var tspSettings = pThis.GetDefaultTSPSettings(settings);
    var useOCSP = false;

    for (var i = 0; i < CAs.length; i++) {
      if (CAs[i].ocspAccessPointAddress && CAs[i].ocspAccessPointPort) {
        useOCSP = true;
        break;
      }
    }

    var useCMP = pThis.IsCMPsAvailable(pThis.m_settings);

    offline = !tspSettings && !useOCSP && !useCMP;

    var mode = euSign.CreateModeSettings();
    mode.SetOfflineMode(offline);
    euSign.SetModeSettings(mode);

    var tsp = euSign.CreateTSPSettings();
    tsp.SetGetStamps(!!tspSettings);
    if (tspSettings) {
      tsp.SetAddress(tspSettings.address);
      tsp.SetPort(tspSettings.port);
    }
    euSign.SetTSPSettings(tsp);

    var ocsp = euSign.CreateOCSPSettings();
    ocsp.SetUseOCSP(useOCSP);
    if (useOCSP) {
      ocsp.SetBeforeStore(true);
      ocsp.SetAddress("czo.gov.ua");
      ocsp.SetPort("80");
    }
    euSign.SetOCSPSettings(ocsp);

    if (useOCSP) {
      var ocspMode = euSign.CreateOCSPAccessInfoModeSettings();
      ocspMode.SetEnabled(true);
      euSign.SetOCSPAccessInfoModeSettings(ocspMode);

      var ocspAccessInfo = euSign.CreateOCSPAccessInfoSettings();
      for (i = 0; i < CAs.length; i++) {
        ocspAccessInfo.SetAddress(CAs[i].ocspAccessPointAddress);
        ocspAccessInfo.SetPort(CAs[i].ocspAccessPointPort);

        for (var j = 0; j < CAs[i].issuerCNs.length; j++) {
          ocspAccessInfo.SetIssuerCN(CAs[i].issuerCNs[j]);
          euSign.SetOCSPAccessInfoSettings(ocspAccessInfo);
        }
      }
    }

    var useTSL = !!settings.TSLAddress;
    if (useTSL) {
      var tsl = euSign.CreateTSLSettings();
      tsl.SetUseTSL(useTSL);
      tsl.SetAutoDownloadTSL(useTSL ? true : false);
      tsl.SetTSLAddress(useTSL ? settings.TSLAddress : "");
      euSign.SetTSLSettings(tsl);
    }

    var _addDNSName = function (uri, dnsNames) {
      if (uri == "") return;

      uri = uri.indexOf("://") > -1 ? uri.split("/")[2] : uri.split("/")[0];

      if (dnsNames.indexOf(uri) >= 0) return;

      dnsNames.push(uri);
    };

    euSign.SetXMLHTTPDirectAccess(settings.directAccess);
    if (settings.directAccess) {
      var directAccessURLs = Array();
      _addDNSName("czo.gov.ua", directAccessURLs);
      for (i = 0; i < CAs.length; i++) {
        if (!CAs[i].directAccess) continue;

        _addDNSName(CAs[i].address, directAccessURLs);
        _addDNSName(CAs[i].tspAddress, directAccessURLs);
        _addDNSName(CAs[i].cmpAddress, directAccessURLs);
        _addDNSName(CAs[i].ocspAccessPointAddress, directAccessURLs);
      }

      KSPs = settings.KSPs || null;
      if (KSPs) {
        for (i = 0; i < KSPs.length; i++) {
          if (!KSPs[i].directAccess) continue;

          _addDNSName(KSPs[i].address, directAccessURLs);
        }
      }

      directAccessURLs.forEach(function (address) {
        euSign.AddXMLHTTPDirectAccessAddress(address);
      });
    }

    var mssServiceURL = pThis.MakeURL(settings.mssServiceURL || "");
    KSPs = settings.KSPs || null;
    pThis.m_euKSP = new EndUserKSP(
      mssServiceURL,
      KSPs,
      pThis.m_euSign,
      pThis.m_context,
      function (event) {
        pThis.OnEvent(event);
      },
    );

    if (typeof settings.ocspResponseExpireTime == "number") {
      pThis.m_euSign.SetOCSPResponseExpireTime(settings.ocspResponseExpireTime);
    }

    pThis.m_initialized = true;

    onSuccess();
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.AddEventListener = function (eventType, onSuccess, onError) {
  var pThis = this;
  var supportedEvents = [
    EndUserEventType.None,
    EndUserEventType.All,
    EndUserEventType.ConfirmKSPOperation,
  ];

  try {
    if (supportedEvents.indexOf(eventType) < 0)
      throw pThis.m_euSign.MakeError(EU_ERROR_BAD_PARAMETER);

    switch (eventType) {
      case EndUserEventType.None:
        pThis.m_eventListeners = [];
        break;
      case EndUserEventType.All:
        pThis.m_eventListeners = [];
        pThis.m_eventListeners[eventType] = function (event) {
          pThis.OnEvent(event);
        };
        break;

      default:
        pThis.m_eventListeners[eventType] = function (event) {
          pThis.OnEvent(event);
        };
        break;
    }

    onSuccess();
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.SetLanguage = function (language, onSuccess, onError) {
  try {
    this.m_euSign.SetErrorMessageLanguage(language);

    this.m_settings.language = language;
    onSuccess();
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.SetRuntimeParameter = function (
  name,
  value,
  onSuccess,
  onError,
) {
  try {
    this.m_euSign.SetRuntimeParameter(name, value);
    this.m_euKSP.SetRuntimeParameter(name, value);

    onSuccess();
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetStorageParameter = function (
  name,
  protected,
  onSuccess,
  onError,
) {
  try {
    this.m_euSign.RaiseError(EU_ERROR_NOT_SUPPORTED);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.SetStorageParameter = function (
  name,
  value,
  protected,
  onSuccess,
  onError,
) {
  try {
    this.m_euSign.RaiseError(EU_ERROR_NOT_SUPPORTED);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetCAs = function (onSuccess, onError) {
  try {
    if (this.m_settings == null)
      throw this.m_euSign.MakeError(EU_ERROR_NOT_INITIALIZED);

    onSuccess(this.m_settings.CAs);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetProxySettings = function (onSuccess, onError) {
  try {
    var settings = this.m_euSign.GetProxySettings();

    onSuccess(settings.GetTransferableObject());
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.SetProxySettings = function (settings, onSuccess, onError) {
  try {
    var proxy = this.m_euSign.CreateProxySettings();

    proxy.SetUseProxy(settings.useProxy);
    proxy.SetAddress(settings.address);
    proxy.SetPort(settings.port);
    proxy.SetAnonymous(settings.anonymous);
    proxy.SetUser(settings.user);
    proxy.SetPassword(settings.password);
    proxy.SetSavePassword(settings.savePassword);

    this.m_euSign.SetProxySettings(proxy);

    onSuccess();
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetHostInfo = function (onSuccess, onError) {
  try {
    this.m_euSign.RaiseError(EU_ERROR_NOT_SUPPORTED);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetKeyMedias = function (onSuccess, onError) {
  try {
    this.m_euSign.RaiseError(EU_ERROR_NOT_SUPPORTED);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetJKSPrivateKeys = function (jks, onSuccess, onError) {
  var euSign = this.m_euSign;

  var keys = [];

  try {
    var keyIndex = 0;
    while (true) {
      var alias = euSign.EnumJKSPrivateKeys(jks, keyIndex);
      var key = euSign.GetJKSPrivateKey(jks, alias);
      var certs = [];
      var stamp = false;
      for (var i = 0; i < key.GetCertificatesCount(); i++) {
        var cert = key.GetCertificate(i);
        var infoEx = euSign.ParseCertificateEx(cert);
        if (infoEx.GetSubjType() != EU_SUBJECT_TYPE_END_USER) continue;

        if (
          infoEx.GetPublicKeyType() == EU_CERT_KEY_TYPE_DSTU4145 &&
          (infoEx.GetKeyUsageType() & EU_KEY_USAGE_DIGITAL_SIGNATURE) ==
            EU_KEY_USAGE_DIGITAL_SIGNATURE
        ) {
          stamp =
            infoEx.GetExtKeyUsages().indexOf(UA_OID_EXT_KEY_USAGE_STAMP) > -1;
        }

        var euCert = new EndUserCertificate(infoEx, cert);
        certs.push(euCert.GetTransferableObject());
      }

      var jksKey = {
        alias: alias,
        privateKey: key.GetPrivateKey(),
        certificates: certs,
        digitalStamp: stamp,
      };
      keys.push(jksKey);

      keyIndex++;
    }
  } catch (e) {
    if (!e.GetErrorCode) {
      onError(e);
      return;
    }

    if (e.GetErrorCode() != EU_WARNING_END_OF_ENUM) {
      onError(e);
      return;
    }
  }

  onSuccess(keys);
};

//-------------------------------------------------------------------------------

EndUser.prototype.IsPrivateKeyReaded = function (onSuccess, onError) {
  try {
    var isPrivateKeyReaded =
      this.m_pkContext != null || this.m_euKSP.IsPrivateKeyReaded();

    onSuccess(isPrivateKeyReaded);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.ResetPrivateKey = function (onSuccess, onError) {
  try {
    this.ResetPrivateKeyInternal();
    onSuccess();
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.ResetOperationKSP = function (onSuccess, onError) {
  try {
    this.m_euKSP.ResetOperation();
    onSuccess();
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.ReadPrivateKey = function (
  keyMedia,
  certs,
  CACommonName,
  onSuccess,
  onError,
) {
  try {
    this.m_euSign.RaiseError(EU_ERROR_NOT_SUPPORTED);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.ReadPrivateKeyBinary = function (
  privateKey,
  password,
  certs,
  CACommonName,
  onSuccess,
  onError,
) {
  var pThis = this;

  try {
    pThis.ReadPrivateKeyBinaryInternal(
      privateKey,
      password,
      certs,
      CACommonName,
    );
    var info = pThis.m_pkContext.GetOwnerInfo();

    onSuccess(info.GetTransferableObject());
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.ReadPrivateKeySIM = function (
  msisdn,
  operator,
  getCerts,
  keyId,
  onSuccess,
  onError,
) {
  this.ReadPrivateKeyKSP(
    msisdn,
    operator,
    getCerts,
    keyId,
    null,
    null,
    null,
    onSuccess,
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUser.prototype.ReadPrivateKeyKSP = function (
  userId,
  ksp,
  getCerts,
  keyId,
  caption,
  authData,
  certs,
  onSuccess,
  onError,
) {
  var pThis = this;

  pThis.ResetPrivateKeyInternal();

  pThis.m_euKSP.ReadPrivateKey(
    ksp,
    userId,
    getCerts,
    keyId,
    caption,
    authData,
    certs,
    function (info) {
      try {
        var CACommonName = pThis.m_euKSP.GetKeyCertIssuerCN();

        pThis.SetCMPSettings(CACommonName);

        onSuccess(info);
      } catch (e) {
        onError(e);
      }
    },
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetOwnCertificates = function (onSuccess, onError) {
  if (this.m_euKSP.IsPrivateKeyReaded()) {
    this.m_euKSP.GetOwnCertificates(onSuccess, onError);
  } else {
    this.CtxGetOwnCertificates(this.m_pkContext, onSuccess, onError);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetOwnEUserParams = function (onSuccess, onError) {
  if (this.m_euKSP.IsPrivateKeyReaded()) {
    onError(this.m_euSign.MakeError(EU_ERROR_NOT_SUPPORTED));
  } else {
    try {
      if (this.m_pkContext == null) {
        this.m_euSign.RaiseError(EU_ERROR_BAD_CERT);
        return;
      }

      var euParams = this.m_euSign.CtxGetOwnEUserParams(this.m_pkContext);
      onSuccess(euParams);
    } catch (e) {
      onError(e);
    }
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.ChangeOwnCertificatesStatus = function (
  requestType,
  revocationReason,
  onSuccess,
  onError,
) {
  if (this.m_euKSP.IsPrivateKeyReaded()) {
    this.m_euKSP.ChangeOwnCertificatesStatus(
      requestType,
      revocationReason,
      onSuccess,
      onError,
    );
  } else {
    try {
      if (this.m_pkContext == null) {
        this.m_euSign.RaiseError(EU_ERROR_BAD_CERT);
        return;
      }

      this.m_euSign.CtxChangeOwnCertificatesStatus(
        this.m_pkContext,
        requestType,
        revocationReason,
      );

      onSuccess();
    } catch (e) {
      onError(e);
    }
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.MakeNewCertificate = function (
  oldKeyMedia,
  oldPrivateKey,
  oldPrivateKeyPassword,
  uaKeysType,
  uaDSKeysSpec,
  useDSKeyAsKEP,
  uaKEPKeysSpec,
  uaParamsPath,
  internationalKeysType,
  rsaKeysSpec,
  rsaParamsPath,
  newKeyMedia,
  newPrivateKeyPassword,
  caCN,
  euParams,
  onReadedKey,
  newUserId,
  newKSP,
  ecdsaKeysSpec,
  ecdsaParamsPath,
  onSuccess,
  onError,
) {
  try {
    var pThis = this;
    var euSign = pThis.m_euSign;

    if (
      oldKeyMedia != null ||
      uaParamsPath != null ||
      rsaParamsPath != null ||
      ecdsaParamsPath != null ||
      newKeyMedia != null
    ) {
      euSign.RaiseError(EU_ERROR_NOT_SUPPORTED);
      return;
    }

    if (onReadedKey && pThis.m_pkContext == null) {
      euSign.RaiseError(EU_ERROR_BAD_CERT);
      return;
    }

    if (!onReadedKey) {
      pThis.ReadPrivateKeyBinaryInternal(
        oldPrivateKey,
        oldPrivateKeyPassword,
        null,
        caCN,
      );

      if (euParams) euSign.CtxGetOwnEUserParams(pThis.m_pkContext);
    }

    if (euParams) {
      euSign.CtxModifyOwnEUserParams(
        pThis.m_pkContext,
        euParams.phone,
        euParams.EMail,
      );
    }

    var result = {
      key: null,
      certs: null,
      cmpRequest: null,
    };

    if (newUserId != null || newKSP != null) {
      if (
        uaKeysType != EU_KEYS_TYPE_NONE &&
        (uaDSKeysSpec == EU_KEYS_LENGTH_DS_UA_CERT ||
          uaDSKeysSpec == EU_KEYS_LENGTH_DS_UA_FILE)
      ) {
        uaDSKeysSpec = EU_KEYS_LENGTH_DS_UA_257;
      }

      if (
        uaKeysType != EU_KEYS_TYPE_NONE &&
        !useDSKeyAsKEP &&
        (uaKEPKeysSpec == EU_KEYS_LENGTH_KEP_UA_CERT ||
          uaKEPKeysSpec == EU_KEYS_LENGTH_KEP_UA_FILE)
      ) {
        uaKEPKeysSpec = EU_KEYS_LENGTH_KEP_UA_431;
      }

      if (
        internationalKeysType & EU_KEYS_TYPE_RSA_WITH_SHA &&
        (rsaKeysSpec == EU_KEYS_LENGTH_DS_RSA_FILE ||
          rsaKeysSpec == EU_KEYS_LENGTH_DS_RSA_CERT)
      ) {
        rsaKeysSpec = EU_KEYS_LENGTH_DS_RSA_2048;
      }

      if (
        internationalKeysType & EU_KEYS_TYPE_ECDSA_WITH_SHA &&
        (ecdsaKeysSpec == EU_KEYS_LENGTH_DS_RSA_FILE ||
          ecdsaKeysSpec == EU_KEYS_LENGTH_DS_RSA_CERT)
      ) {
        ecdsaKeysSpec = EU_KEYS_LENGTH_DS_ECDSA_256;
      }

      pThis.m_euKSP.MakeNewCertificate(
        pThis.m_pkContext,
        uaKeysType,
        uaDSKeysSpec,
        useDSKeyAsKEP,
        uaKEPKeysSpec,
        internationalKeysType,
        rsaKeysSpec,
        ecdsaKeysSpec,
        newUserId,
        newKSP,
        function (certs) {
          pThis.ResetPrivateKeyInternal();

          result.certs = certs;
          onSuccess(result);
        },
        function (e) {
          pThis.ResetPrivateKeyInternal();

          onError(e);
        },
      );
    } else {
      pThis.ResetPrivateKeyInternal();

      var makeCertResult = euSign.MakeNewCertificateEx(
        oldPrivateKey,
        oldPrivateKeyPassword,
        uaKeysType,
        uaDSKeysSpec,
        useDSKeyAsKEP,
        uaKEPKeysSpec,
        internationalKeysType,
        rsaKeysSpec,
        ecdsaKeysSpec,
        newPrivateKeyPassword,
      );

      result.key = makeCertResult.GetPrivateKey();
      result.cmpRequest = makeCertResult.GetCMPRequest();

      var context = null;
      var pkContext = null;
      try {
        var cert = null;
        var index = 0;

        context = euSign.CtxCreate();
        euSign.CtxSetParameter(
          context,
          EU_CHECK_PRIVATE_KEY_CONTEXT_PARAMETER,
          false,
        );
        pkContext = this.CtxReadPrivateKeyBinaryInternal(
          context,
          result.key,
          newPrivateKeyPassword,
          null,
          caCN,
          true,
        );

        result.certs = [];
        while (
          (cert = euSign.CtxEnumOwnCertificates(pkContext, index)) != null
        ) {
          result.certs.push(cert.GetTransferableObject());
          index++;
        }

        euSign.CtxFree(context);
        euSign.CtxFreePrivateKey(pkContext);
      } catch (e) {
        if (context != null) euSign.CtxFree(context);
        if (pkContext != null) euSign.CtxFreePrivateKey(pkContext);
        throw e;
      }

      onSuccess(result);
    }
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.MakeDeviceCertificate = function (
  deviceName,
  uaRequest,
  uaKEPRequest,
  internationalRequest,
  ecdsaRequest,
  onSuccess,
  onError,
) {
  var euSign = this.m_euSign;

  if (this.m_euKSP.IsPrivateKeyReaded()) {
    euSign.RaiseError(EU_ERROR_NOT_SUPPORTED);
  } else {
    try {
      if (this.m_pkContext == null) {
        euSign.RaiseError(EU_ERROR_BAD_CERT);
        return;
      }

      var info = this.m_pkContext.GetOwnerInfo();
      var ca = this.GetCASettings(info.GetIssuerCN());
      if (!ca || !ca.cmpAddress || ca.cmpAddress == "") {
        euSign.RaiseError(EU_ERROR_BAD_PARAMETER);
        return;
      }

      var certsBinary = euSign.CtxMakeDeviceCertificate(
        this.m_pkContext,
        deviceName,
        uaRequest,
        uaKEPRequest,
        internationalRequest,
        ecdsaRequest,
        ca.cmpAddress,
        "80",
      );
      var certs = [];
      for (var i = 0; i < certsBinary.length; i++) {
        var cert = certsBinary[i];
        var infoEx = euSign.ParseCertificateEx(cert);
        var euCert = new EndUserCertificate(infoEx, cert);
        certs.push(euCert.GetTransferableObject());
      }

      onSuccess(certs);
    } catch (e) {
      onError(e);
    }
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.SetKeyMediaUserPassword = function (
  soPassword,
  keyMedia,
  onSuccess,
  onError,
) {
  try {
    this.m_euSign.RaiseError(EU_ERROR_NOT_SUPPORTED);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.ChangePrivateKeyPassword = function (
  keyMedia,
  newPassword,
  onSuccess,
  onError,
) {
  try {
    this.m_euSign.RaiseError(EU_ERROR_NOT_SUPPORTED);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.ChangePrivateKeyPasswordBinary = function (
  privateKey,
  password,
  newPassword,
  onSuccess,
  onError,
) {
  try {
    var euSign = this.m_euSign;

    var newPrivateKey = euSign.ChangeSoftwarePrivateKeyPassword(
      privateKey,
      password,
      newPassword,
    );

    onSuccess(newPrivateKey);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GeneratePrivateKey = function (
  keyMedia,
  setKeyMediaPassword,
  uaKeysType,
  uaDSKeysSpec,
  useDSKeyAsKEP,
  uaKEPKeysSpec,
  uaParamsPath,
  internationalKeysType,
  internationalKeysSpec,
  internationalParamsPath,
  endUserInfo,
  extKeyUsages,
  onSuccess,
  onError,
) {
  try {
    this.m_euSign.RaiseError(EU_ERROR_NOT_SUPPORTED);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GeneratePrivateKeyBinary = function (
  password,
  uaKeysType,
  uaDSKeysSpec,
  useDSKeyAsKEP,
  uaKEPKeysSpec,
  uaParamsPath,
  internationalKeysType,
  internationalKeysSpec,
  internationalParamsPath,
  endUserInfo,
  extKeyUsages,
  onSuccess,
  onError,
) {
  try {
    var euSign = this.m_euSign;
    if (endUserInfo) {
      endUserInfo = EndUserInitFromTransferableObject(endUserInfo, EndUserInfo);
    }

    var result = euSign.GeneratePrivateKey(
      password,
      uaKeysType,
      uaDSKeysSpec,
      useDSKeyAsKEP,
      uaKEPKeysSpec,
      internationalKeysType,
      internationalKeysSpec,
      endUserInfo,
      extKeyUsages,
    );

    var _mapRequest = function (type, data, fileName) {
      var request = euSign.GetCRInfo(data).GetTransferableObject();
      request.type = type;
      request.data = data;
      request.fileName = fileName;
      return request;
    };

    var key = result.GetPrivateKey();
    var requests = [];
    var request;
    if (result.GetUARequest()) {
      request = _mapRequest(
        EU_KEYS_REQUEST_TYPE_UA_DS,
        result.GetUARequest(),
        result.GetUARequestName(),
      );
      requests.push(request);
    }

    if (result.GetUAKEPRequest()) {
      request = _mapRequest(
        EU_KEYS_REQUEST_TYPE_UA_KEP,
        result.GetUAKEPRequest(),
        result.GetUAKEPRequestName(),
      );
      requests.push(request);
    }

    if (result.GetInternationalRequest()) {
      request = _mapRequest(
        EU_KEYS_REQUEST_TYPE_INT_RSA,
        result.GetInternationalRequest(),
        result.GetInternationalRequestName(),
      );
      requests.push(request);
    }

    onSuccess({
      key: key,
      requests: requests,
    });
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetKeyInfo = function (keyMedia, onSuccess, onError) {
  try {
    this.m_euSign.RaiseError(EU_ERROR_NOT_SUPPORTED);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetKeyInfoBinary = function (
  privateKey,
  password,
  onSuccess,
  onError,
) {
  var euSign = this.m_euSign;

  try {
    var keyInfo = euSign.GetKeyInfoBinary(privateKey, password);
    onSuccess(keyInfo);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetClientRegistrationTokenKSP = function (
  ksp,
  parameters,
  onSuccess,
  onError,
) {
  var pThis = this;

  pThis.m_euKSP.GetClientRegistrationToken(
    pThis.m_pkContext,
    ksp,
    parameters,
    onSuccess,
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUser.prototype.HashData = function (
  hashAlgo,
  data,
  asBase64String,
  onSuccess,
  onError,
) {
  var euSign = this.m_euSign;
  var hashContext = null;

  try {
    var datas = DataToNamedDataArray(data);
    var hashes = [];

    for (var i = 0; i < datas.length; i++) {
      var hash = euSign.CtxHashData(
        this.m_context,
        hashAlgo,
        null,
        datas[i].val,
        asBase64String,
      );
      hashes.push(hash);
    }

    var result = DataToResult(data, hashes);
    onSuccess(result);
  } catch (e) {
    if (hashContext) euSign.CtxFreeHash(hashContext);

    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetSigner = function (
  sign,
  signIndex,
  resolveOIDs,
  onSuccess,
  onError,
) {
  var euSign = this.m_euSign;
  var context = null;

  try {
    var signerInfo = null;
    var result = null;

    signIndex = GetOptionalParam(signIndex, -1);
    resolveOIDs = GetOptionalParam(resolveOIDs, false);

    context = euSign.CtxCreate();
    euSign.CtxSetParameter(
      context,
      EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
      resolveOIDs,
    );

    if (signIndex == -1) {
      result = [];
      var signCount = euSign.CtxGetSignsCount(context, sign);
      for (var i = 0; i < signCount; i++) {
        signerInfo = euSign.CtxGetSignerInfo(context, i, sign);
        result.push(signerInfo.GetTransferableObject());
      }
    } else {
      signerInfo = euSign.CtxGetSignerInfo(context, signIndex, sign);
      result = signerInfo.GetTransferableObject();
    }

    euSign.CtxFree(context);

    onSuccess(result);
  } catch (e) {
    if (context) euSign.CtxFree(context);

    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.SignData = function (
  data,
  asBase64String,
  onSuccess,
  onError,
) {
  this.SignDataEx(
    EU_CTX_SIGN_UNKNOWN,
    data,
    true,
    true,
    asBase64String,
    onSuccess,
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUser.prototype.SignDataInternal = function (
  appendCert,
  data,
  asBase64String,
  onSuccess,
  onError,
) {
  this.SignDataEx(
    EU_CTX_SIGN_UNKNOWN,
    data,
    false,
    appendCert,
    asBase64String,
    onSuccess,
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUser.prototype.SignHash = function (
  signAlgo,
  hash,
  appendCert,
  asBase64String,
  onSuccess,
  onError,
) {
  if (this.m_euKSP.IsPrivateKeyReaded()) {
    this.m_euKSP.SignHash(
      signAlgo,
      hash,
      appendCert,
      asBase64String,
      onSuccess,
      onError,
    );
  } else {
    this.CtxSignHashInternal(
      this.m_pkContext,
      signAlgo,
      hash,
      null,
      appendCert,
      asBase64String,
      onSuccess,
      onError,
    );
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.SignDataEx = function (
  signAlgo,
  data,
  external,
  appendCert,
  asBase64String,
  onSuccess,
  onError,
) {
  Debug("EndUser::SignDataEx", arguments);

  if (this.m_euKSP.IsPrivateKeyReaded()) {
    this.m_euKSP.SignDataEx(
      signAlgo,
      data,
      external,
      appendCert,
      asBase64String,
      onSuccess,
      onError,
    );
  } else {
    this.CtxSignDataInternal(
      this.m_pkContext,
      signAlgo,
      data,
      null,
      external,
      appendCert,
      asBase64String,
      onSuccess,
      onError,
    );
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.AppendSign = function (
  signAlgo,
  data,
  previousSign,
  appendCert,
  asBase64String,
  onSuccess,
  onError,
) {
  if (this.m_euKSP.IsPrivateKeyReaded()) {
    this.m_euKSP.AppendSign(
      signAlgo,
      data,
      previousSign,
      appendCert,
      asBase64String,
      onSuccess,
      onError,
    );
  } else {
    this.CtxSignDataInternal(
      this.m_pkContext,
      signAlgo,
      data,
      previousSign,
      data != null,
      appendCert,
      asBase64String,
      onSuccess,
      onError,
    );
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.AppendSignHash = function (
  signAlgo,
  hash,
  previousSign,
  appendCert,
  asBase64String,
  onSuccess,
  onError,
) {
  if (this.m_euKSP.IsPrivateKeyReaded()) {
    this.m_euKSP.AppendSignHash(
      signAlgo,
      hash,
      previousSign,
      appendCert,
      asBase64String,
      onSuccess,
      onError,
    );
  } else {
    this.CtxSignHashInternal(
      this.m_pkContext,
      signAlgo,
      hash,
      previousSign,
      appendCert,
      asBase64String,
      onSuccess,
      onError,
    );
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetSignValue = function (
  signAlgo,
  hash,
  asBase64String,
  asASN1,
  onSuccess,
  onError,
) {
  if (this.m_euKSP.IsPrivateKeyReaded()) {
    this.m_euKSP.GetSignValue(
      signAlgo,
      hash,
      asBase64String,
      asASN1,
      onSuccess,
      onError,
    );
  } else {
    this.CtxGetSignValueInternal(
      this.m_pkContext,
      signAlgo,
      hash,
      asBase64String,
      asASN1,
      onSuccess,
      onError,
    );
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.VerifyHash = function (
  hash,
  sign,
  signIndex,
  onSuccess,
  onError,
) {
  try {
    var onTime = null;
    var offline = false;
    var noCRL = false;
    var signInfo = null;
    var result = null;

    signIndex = GetOptionalParam(signIndex, -1);

    if (signIndex == -1) {
      result = [];
      var signCount = this.m_euSign.CtxGetSignsCount(this.m_context, sign);
      for (var i = 0; i < signCount; i++) {
        signInfo = this.m_euSign.VerifyHashOnTimeEx(
          hash,
          i,
          sign,
          onTime,
          offline,
          noCRL,
        );
        signInfo = signInfo.GetTransferableObject();
        signInfo.signLevel = this.m_euSign.GetSignType(i, sign);
        result.push(signInfo);
      }
    } else {
      signInfo = this.m_euSign.VerifyHashOnTimeEx(
        hash,
        signIndex,
        sign,
        onTime,
        offline,
        noCRL,
      );
      signInfo = signInfo.GetTransferableObject();
      signInfo.signLevel = this.m_euSign.GetSignType(signIndex, sign);
      result = signInfo;
    }

    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.VerifyData = function (
  data,
  sign,
  signIndex,
  onSuccess,
  onError,
) {
  Debug("EndUser::VerifyData", arguments);

  try {
    var onTime = null;
    var offline = false;
    var noCRL = false;
    var signInfo = null;
    var result = null;

    signIndex = GetOptionalParam(signIndex, -1);

    if (signIndex == -1) {
      result = [];
      var signCount = this.m_euSign.CtxGetSignsCount(this.m_context, sign);
      for (var i = 0; i < signCount; i++) {
        signInfo = this.m_euSign.VerifyDataOnTimeEx(
          data,
          i,
          sign,
          onTime,
          offline,
          noCRL,
        );
        signInfo = signInfo.GetTransferableObject();
        signInfo.signLevel = this.m_euSign.GetSignType(i, sign);
        result.push(signInfo);
      }
    } else {
      signInfo = this.m_euSign.VerifyDataOnTimeEx(
        data,
        signIndex,
        sign,
        onTime,
        offline,
        noCRL,
      );
      signInfo = signInfo.GetTransferableObject();
      signInfo.signLevel = this.m_euSign.GetSignType(signIndex, sign);
      result = signInfo;
    }

    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.VerifyDataInternal = function (
  sign,
  signIndex,
  onSuccess,
  onError,
) {
  try {
    var onTime = null;
    var offline = false;
    var noCRL = false;
    var signInfo = null;
    var result = null;

    signIndex = GetOptionalParam(signIndex, -1);

    if (signIndex == -1) {
      result = [];
      var signCount = this.m_euSign.CtxGetSignsCount(this.m_context, sign);
      for (var i = 0; i < signCount; i++) {
        signInfo = this.m_euSign.VerifyDataInternalOnTimeEx(
          i,
          sign,
          onTime,
          offline,
          noCRL,
        );
        signInfo = signInfo.GetTransferableObject();
        signInfo.signLevel = this.m_euSign.GetSignType(i, sign);
        result.push(signInfo);
      }
    } else {
      signInfo = this.m_euSign.VerifyDataInternalOnTimeEx(
        signIndex,
        sign,
        onTime,
        offline,
        noCRL,
      );
      signInfo = signInfo.GetTransferableObject();
      signInfo.signLevel = this.m_euSign.GetSignType(signIndex, sign);
      result = signInfo;
    }

    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.EnvelopData = function (
  recipientsCerts,
  data,
  signData,
  appendCert,
  asBase64String,
  useDynamicKey,
  onSuccess,
  onError,
) {
  if (this.m_euKSP.IsPrivateKeyReaded()) {
    this.m_euKSP.EnvelopData(
      recipientsCerts,
      data,
      signData,
      appendCert,
      asBase64String,
      useDynamicKey,
      onSuccess,
      onError,
    );
  } else {
    try {
      if (this.m_pkContext == null && (!useDynamicKey || signData)) {
        this.m_euSign.RaiseError(EU_ERROR_BAD_CERT);
        return;
      }

      var recipientAppendType = EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL;
      var envelopedData = useDynamicKey
        ? signData
          ? this.m_euSign.CtxEnvelopDataWithDynamicKey(
              this.m_pkContext,
              recipientsCerts,
              recipientAppendType,
              signData,
              appendCert,
              data,
              asBase64String,
            )
          : this.m_euSign.EnvelopDataToRecipientsWithDynamicKey(
              recipientsCerts,
              signData,
              appendCert,
              data,
              asBase64String,
            )
        : this.m_euSign.CtxEnvelopData(
            this.m_pkContext,
            recipientsCerts,
            recipientAppendType,
            signData,
            appendCert,
            data,
            asBase64String,
          );

      onSuccess(envelopedData);
    } catch (e) {
      onError(e);
    }
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.DevelopData = function (
  envelopedData,
  senderCert,
  onSuccess,
  onError,
) {
  if (this.m_euKSP.IsPrivateKeyReaded()) {
    this.m_euKSP.DevelopData(envelopedData, senderCert, onSuccess, onError);
  } else {
    try {
      if (this.m_pkContext == null) {
        this.m_euSign.RaiseError(EU_ERROR_BAD_CERT);
        return;
      }

      var senderInfo = this.m_euSign.CtxDevelopData(
        this.m_pkContext,
        envelopedData,
        senderCert,
      );

      onSuccess(senderInfo.GetTransferableObject());
    } catch (e) {
      onError(e);
    }
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.CreateAuthData = function (
  serverCert,
  nonce,
  asBase64String,
  onSuccess,
  onError,
) {
  try {
    this.m_euSign.RaiseError(EU_ERROR_NOT_SUPPORTED);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.ProtectDataByPassword = function (
  data,
  password,
  asBase64String,
  onSuccess,
  onError,
) {
  try {
    if (typeof data == "string") data = this.m_euSign.StringToArray(data);

    var result = this.m_euSign.ProtectDataByPassword(
      data,
      password,
      asBase64String,
    );

    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.UnprotectDataByPassword = function (
  data,
  password,
  asString,
  onSuccess,
  onError,
) {
  try {
    var result = this.m_euSign.UnprotectDataByPassword(data, password, false);
    if (asString) result = this.m_euSign.ArrayToString(result);

    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetTSPByAccessInfo = function (
  hashAlgo,
  hash,
  accessInfo,
  accessInfoPort,
  asBase64String,
  onSuccess,
  onError,
) {
  try {
    var result = this.m_euSign.GetTSPByAccessInfo(
      hashAlgo,
      hash,
      accessInfo,
      accessInfoPort,
      asBase64String,
    );
    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.CheckTSP = function (
  tsp,
  hashAlgo,
  hash,
  onSuccess,
  onError,
) {
  try {
    var result = this.m_euSign.CheckTSP(tsp, hashAlgo, hash);
    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.ClientDynamicKeySessionCreate = function (
  serverCert,
  onSuccess,
  onError,
) {
  try {
    var session = this.m_euSign.ClientDynamicKeySessionCreate(3600, serverCert);
    onSuccess(session.GetTransferableObject());
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.SessionClose = function (session, onSuccess, onError) {
  try {
    session = EndUserInitFromTransferableObject(session, EndUserSession);
    this.m_euSign.SessionClose(session);
    onSuccess();
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.SessionEncrypt = function (
  session,
  data,
  asBase64String,
  onSuccess,
  onError,
) {
  try {
    session = EndUserInitFromTransferableObject(session, EndUserSession);

    var encryptedData = this.m_euSign.SessionEncrypt(
      session,
      data,
      asBase64String,
    );
    onSuccess(encryptedData);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.SessionDecrypt = function (
  session,
  encryptedData,
  onSuccess,
  onError,
) {
  try {
    session = EndUserInitFromTransferableObject(session, EndUserSession);

    var data = this.m_euSign.SessionDecrypt(session, encryptedData);
    onSuccess(data);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxCreate = function (onSuccess, onError) {
  try {
    var context = this.m_euSign.CtxCreate();
    this.m_euSign.CtxSetParameter(
      context,
      EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
      false,
    );
    onSuccess(context.GetTransferableObject());
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxFree = function (context, onSuccess, onError) {
  try {
    context = EndUserInitFromTransferableObject(context, EndUserContext);
    this.m_euSign.CtxFree(context);
    onSuccess();
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxSetParameter = function (
  context,
  name,
  value,
  onSuccess,
  onError,
) {
  try {
    if (!context) {
      context = this.m_context;
    } else {
      context = EndUserInitFromTransferableObject(context, EndUserContext);
    }

    this.m_euSign.CtxSetParameter(context, name, value);

    onSuccess();
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxReadPrivateKey = function (
  context,
  keyMedia,
  certs,
  CACommonName,
  onSuccess,
  onError,
) {
  try {
    this.m_euSign.RaiseError(EU_ERROR_NOT_SUPPORTED);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxReadPrivateKeyBinary = function (
  context,
  privateKey,
  password,
  certs,
  CACommonName,
  onSuccess,
  onError,
) {
  try {
    var pkContext = this.CtxReadPrivateKeyBinaryInternal(
      context,
      privateKey,
      password,
      certs,
      CACommonName,
      true,
    );

    onSuccess(pkContext.GetTransferableObject());
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxFreePrivateKey = function (
  privateKeyContext,
  onSuccess,
  onError,
) {
  try {
    privateKeyContext = EndUserInitFromTransferableObject(
      privateKeyContext,
      EndUserPrivateKeyContext,
    );

    this.m_euSign.CtxFreePrivateKey(privateKeyContext);

    onSuccess();
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxGetOwnCertificates = function (
  privateKeyContext,
  onSuccess,
  onError,
) {
  try {
    var euSign = this.m_euSign;
    var index = 0;
    var cert = null;
    var certs = [];

    if (privateKeyContext == null) {
      euSign.RaiseError(EU_ERROR_BAD_CERT);
      return;
    }

    privateKeyContext = EndUserInitFromTransferableObject(
      privateKeyContext,
      EndUserPrivateKeyContext,
    );

    while (
      (cert = euSign.CtxEnumOwnCertificates(privateKeyContext, index)) != null
    ) {
      certs.push(cert.GetTransferableObject());
      index++;
    }

    onSuccess(certs);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxSignHash = function (
  privateKeyContext,
  signAlgo,
  hash,
  appendCert,
  asBase64String,
  onSuccess,
  onError,
) {
  this.CtxSignHashInternal(
    privateKeyContext,
    signAlgo,
    hash,
    null,
    appendCert,
    asBase64String,
    onSuccess,
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxSignData = function (
  privateKeyContext,
  signAlgo,
  data,
  external,
  appendCert,
  asBase64String,
  onSuccess,
  onError,
) {
  this.CtxSignDataInternal(
    privateKeyContext,
    signAlgo,
    data,
    null,
    external,
    appendCert,
    asBase64String,
    onSuccess,
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxAppendSignHash = function (
  privateKeyContext,
  signAlgo,
  hash,
  previousSign,
  appendCert,
  asBase64String,
  onSuccess,
  onError,
) {
  this.CtxSignHashInternal(
    privateKeyContext,
    signAlgo,
    hash,
    previousSign,
    appendCert,
    asBase64String,
    onSuccess,
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxAppendSign = function (
  privateKeyContext,
  signAlgo,
  data,
  previousSign,
  appendCert,
  asBase64String,
  onSuccess,
  onError,
) {
  this.CtxSignDataInternal(
    privateKeyContext,
    signAlgo,
    data,
    previousSign,
    data != null,
    appendCert,
    asBase64String,
    onSuccess,
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxGetSignValue = function (
  pkContext,
  signAlgo,
  hash,
  asBase64String,
  asASN1,
  onSuccess,
  onError,
) {
  this.CtxGetSignValueInternal(
    pkContext,
    signAlgo,
    hash,
    asBase64String,
    asASN1,
    onSuccess,
    onError,
  );
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxEnvelopData = function (
  privateKeyContext,
  recipientsCerts,
  data,
  signData,
  appendCert,
  asBase64String,
  useDynamicKey,
  onSuccess,
  onError,
) {
  try {
    if (privateKeyContext == null && (!useDynamicKey || signData)) {
      this.m_euSign.RaiseError(EU_ERROR_BAD_CERT);
      return;
    }

    if (privateKeyContext != null) {
      privateKeyContext = EndUserInitFromTransferableObject(
        privateKeyContext,
        EndUserPrivateKeyContext,
      );
    }

    var recipientAppendType = EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL;
    var envelopedData = useDynamicKey
      ? signData
        ? this.m_euSign.CtxEnvelopDataWithDynamicKey(
            privateKeyContext,
            recipientsCerts,
            recipientAppendType,
            signData,
            appendCert,
            data,
            asBase64String,
          )
        : this.m_euSign.EnvelopDataToRecipientsWithDynamicKey(
            recipientsCerts,
            signData,
            appendCert,
            data,
            asBase64String,
          )
      : this.m_euSign.CtxEnvelopData(
          privateKeyContext,
          recipientsCerts,
          recipientAppendType,
          signData,
          appendCert,
          data,
          asBase64String,
        );

    onSuccess(envelopedData);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.CtxDevelopData = function (
  privateKeyContext,
  envelopedData,
  senderCert,
  onSuccess,
  onError,
) {
  try {
    if (privateKeyContext == null) {
      this.m_euSign.RaiseError(EU_ERROR_BAD_CERT);
      return;
    }

    privateKeyContext = EndUserInitFromTransferableObject(
      privateKeyContext,
      EndUserPrivateKeyContext,
    );

    var senderInfo = this.m_euSign.CtxDevelopData(
      privateKeyContext,
      envelopedData,
      senderCert,
    );

    onSuccess(senderInfo.GetTransferableObject());
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.ProtectTaxReports = function (
  accountantPrivateKeyContext,
  directorPrivateKeyContext,
  stampPrivateKeyContext,
  senderEMail,
  recipientCertificate,
  reports,
  returnIntermediateSign,
  onSuccess,
  onError,
) {
  var pThis = this;
  try {
    var accountantPKey = null;
    var directorPKey = null;
    var stampPKey = null;
    var keyUsages;

    if (accountantPrivateKeyContext) {
      keyUsages = [EU_KEY_USAGE_DIGITAL_SIGNATURE];

      accountantPKey = pThis.LoadTaxReportPKey(
        accountantPrivateKeyContext,
        keyUsages,
        false,
      );
      if (accountantPKey == null) {
        throw pThis.m_euSign.MakeError(EU_ERROR_BAD_PARAMETER);
      }
    }

    if (directorPrivateKeyContext) {
      keyUsages = [EU_KEY_USAGE_DIGITAL_SIGNATURE];
      if (!stampPrivateKeyContext) keyUsages.push(EU_KEY_USAGE_KEY_AGREEMENT);

      directorPKey = pThis.LoadTaxReportPKey(
        directorPrivateKeyContext,
        keyUsages,
        false,
      );
      if (directorPKey == null) {
        throw pThis.m_euSign.MakeError(EU_ERROR_BAD_PARAMETER);
      }
    }

    if (stampPrivateKeyContext) {
      keyUsages = [EU_KEY_USAGE_DIGITAL_SIGNATURE, EU_KEY_USAGE_KEY_AGREEMENT];

      stampPKey = pThis.LoadTaxReportPKey(
        stampPrivateKeyContext,
        keyUsages,
        true,
      );
      if (stampPKey == null) {
        throw pThis.m_euSign.MakeError(EU_ERROR_BAD_PARAMETER);
      }
    }

    var results = [];

    for (var i = 0; i < reports.length; i++) {
      var result = pThis.ProtectTaxReport(
        accountantPKey,
        directorPKey,
        stampPKey,
        senderEMail,
        recipientCertificate,
        reports[i],
        returnIntermediateSign,
      );
      results.push(result);
    }

    onSuccess(results);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.UnprotectTaxReceipts = function (
  directorOrStampPrivateKeyContext,
  receipts,
  onSuccess,
  onError,
) {
  try {
    directorOrStampPrivateKeyContext = EndUserInitFromTransferableObject(
      directorOrStampPrivateKeyContext,
      EndUserPrivateKeyContext,
    );

    var results = [];

    for (var i = 0; i < receipts.length; i++) {
      var result = this.UnprotectTaxReceipt(
        directorOrStampPrivateKeyContext,
        receipts[i],
      );
      results.push(result);
    }

    onSuccess(results);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.ASiCGetSigner = function (
  asicData,
  signIndex,
  resolveOIDs,
  onSuccess,
  onError,
) {
  Debug("EndUser::ASiCGetSigner", arguments);

  var euSign = this.m_euSign;
  var context = null;

  try {
    var signerInfo = null;
    var result = null;

    signIndex = GetOptionalParam(signIndex, -1);
    resolveOIDs = GetOptionalParam(resolveOIDs, false);

    context = euSign.CtxCreate();
    euSign.CtxSetParameter(
      context,
      EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
      resolveOIDs,
    );

    if (signIndex == -1) {
      result = [];
      var signCount = euSign.ASiCGetSignsCount(asicData);
      for (var i = 0; i < signCount; i++) {
        signerInfo = euSign.CtxASiCGetSignerInfo(context, i, asicData);
        result.push(signerInfo.GetTransferableObject());
      }
    } else {
      signerInfo = euSign.CtxASiCGetSignerInfo(context, signIndex, asicData);
      result = signerInfo.GetTransferableObject();
    }

    euSign.CtxFree(context);

    onSuccess(result);
  } catch (e) {
    if (context) euSign.CtxFree(context);

    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.ASiCSignData = function (
  signAlgo,
  asicType,
  signType,
  signLevel,
  references,
  asBase64String,
  onSuccess,
  onError,
) {
  Debug("EndUser::ASiCSignData", arguments);

  if (this.m_euKSP.IsPrivateKeyReaded()) {
    this.m_euKSP.ASiCSignData(
      signAlgo,
      asicType,
      signType,
      signLevel,
      references,
      asBase64String,
      onSuccess,
      onError,
    );
    return;
  }

  var pThis = this;
  var euSign = pThis.m_euSign;
  var pkContext = pThis.m_pkContext;

  try {
    if (pkContext == null) {
      euSign.RaiseError(EU_ERROR_BAD_CERT);
      return;
    }

    pkContext = EndUserInitFromTransferableObject(
      pkContext,
      EndUserPrivateKeyContext,
    );

    references = DataToNamedDataArray(references);
    var asicReferences = [];
    for (var i = 0; i < references.length; i++) {
      var reference = new EndUserReference(
        references[i].name,
        references[i].val,
      );
      asicReferences.push(reference);
    }

    var asicData = euSign.CtxASiCSignData(
      pkContext,
      signAlgo,
      asicType,
      signType,
      signLevel,
      asicReferences,
      asBase64String,
    );
    var result = {
      name:
        references[0].name + (asicType == EU_ASIC_TYPE_S ? ".asics" : ".asice"),
      val: asicData,
    };
    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.ASiCAppendSign = function (
  signAlgo,
  signLevel,
  referencesNames,
  asicData,
  asBase64String,
  onSuccess,
  onError,
) {
  Debug("EndUser::ASiCAppendSign", arguments);

  if (this.m_euKSP.IsPrivateKeyReaded()) {
    this.m_euKSP.ASiCAppendSign(
      signAlgo,
      signLevel,
      referencesNames,
      asicData,
      asBase64String,
      onSuccess,
      onError,
    );
    return;
  }

  var pThis = this;
  var euSign = pThis.m_euSign;
  var pkContext = pThis.m_pkContext;

  try {
    if (pkContext == null) {
      euSign.RaiseError(EU_ERROR_BAD_CERT);
      return;
    }

    pkContext = EndUserInitFromTransferableObject(
      pkContext,
      EndUserPrivateKeyContext,
    );

    var previousASiCData = DataToNamedDataArray(asicData);

    asicData = euSign.CtxASiCAppendSign(
      pkContext,
      signAlgo,
      signLevel,
      referencesNames,
      previousASiCData[0].val,
      asBase64String,
    );
    var result = {
      name: previousASiCData[0].name,
      val: asicData,
    };
    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.ASiCVerifyData = function (
  asicData,
  signIndex,
  onSuccess,
  onError,
) {
  Debug("EndUser::ASiCVerifyData", arguments);
  try {
    var pThis = this;
    var euSign = pThis.m_euSign;
    var signInfo = null;
    var result = null;

    signIndex = GetOptionalParam(signIndex, -1);

    if (signIndex == -1) {
      result = [];
      var signCount = euSign.ASiCGetSignsCount(asicData);
      for (var i = 0; i < signCount; i++) {
        signInfo = euSign.ASiCVerifyData(i, asicData);
        signInfo = signInfo.GetTransferableObject();
        signInfo.signLevel = euSign.ASiCGetSignLevel(i, asicData);
        result.push(signInfo);
      }
    } else {
      signInfo = euSign.ASiCVerifyData(signIndex, asicData);
      signInfo = signInfo.GetTransferableObject();
      signInfo.signLevel = euSign.ASiCGetSignLevel(signIndex, asicData);
      result = signInfo;
    }

    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.PDFGetSigner = function (
  signedPDFData,
  signIndex,
  resolveOIDs,
  onSuccess,
  onError,
) {
  var euSign = this.m_euSign;
  var context = null;

  try {
    var signerInfo = null;
    var result = null;

    signIndex = GetOptionalParam(signIndex, -1);
    resolveOIDs = GetOptionalParam(resolveOIDs, false);

    context = euSign.CtxCreate();
    euSign.CtxSetParameter(
      context,
      EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
      resolveOIDs,
    );

    if (signIndex == -1) {
      result = [];
      var signCount = euSign.PDFGetSignsCount(signedPDFData);
      for (var i = 0; i < signCount; i++) {
        signerInfo = euSign.CtxPDFGetSignerInfo(context, i, signedPDFData);
        result.push(signerInfo.GetTransferableObject());
      }
    } else {
      signerInfo = euSign.CtxPDFGetSignerInfo(
        context,
        signIndex,
        signedPDFData,
      );
      result = signerInfo.GetTransferableObject();
    }

    euSign.CtxFree(context);

    onSuccess(result);
  } catch (e) {
    if (context) euSign.CtxFree(context);

    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.PDFSignData = function (
  signAlgo,
  pdfData,
  signType,
  asBase64String,
  onSuccess,
  onError,
) {
  if (this.m_euKSP.IsPrivateKeyReaded()) {
    this.m_euKSP.PDFSignData(
      signAlgo,
      pdfData,
      signType,
      asBase64String,
      onSuccess,
      onError,
    );
    return;
  }

  var pThis = this;
  var euSign = pThis.m_euSign;
  var pkContext = pThis.m_pkContext;

  try {
    if (pkContext == null) {
      euSign.RaiseError(EU_ERROR_BAD_CERT);
      return;
    }

    pkContext = EndUserInitFromTransferableObject(
      pkContext,
      EndUserPrivateKeyContext,
    );

    var pdfDatas = DataToNamedDataArray(pdfData);
    var signs = [];

    var length = pdfDatas.length;
    for (var i = 0; i < length; i++) {
      var sign = euSign.CtxPDFSignData(
        pkContext,
        signAlgo,
        pdfDatas[i].val,
        signType,
        asBase64String,
      );

      signs.push(sign);
    }

    var result = DataToResult(pdfData, signs);
    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.PDFVerifyData = function (
  signedPDFData,
  signIndex,
  onSuccess,
  onError,
) {
  try {
    var pThis = this;
    var euSign = pThis.m_euSign;
    var signInfo = null;
    var result = null;

    signIndex = GetOptionalParam(signIndex, -1);

    if (signIndex == -1) {
      result = [];
      var signCount = euSign.PDFGetSignsCount(signedPDFData);
      for (var i = 0; i < signCount; i++) {
        signInfo = euSign.PDFVerifyData(i, signedPDFData);
        signInfo = signInfo.GetTransferableObject();
        signInfo.signLevel = euSign.PDFGetSignType(i, signedPDFData);
        result.push(signInfo);
      }
    } else {
      signInfo = euSign.PDFVerifyData(signIndex, signedPDFData);
      signInfo = signInfo.GetTransferableObject();
      signInfo.signLevel = euSign.PDFGetSignType(signIndex, signedPDFData);
      result = signInfo;
    }

    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.XAdESGetSigner = function (
  xadesData,
  signIndex,
  resolveOIDs,
  onSuccess,
  onError,
) {
  var euSign = this.m_euSign;
  var context = null;

  try {
    var signerInfo = null;
    var result = null;

    signIndex = GetOptionalParam(signIndex, -1);
    resolveOIDs = GetOptionalParam(resolveOIDs, false);

    context = euSign.CtxCreate();
    euSign.CtxSetParameter(
      context,
      EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
      resolveOIDs,
    );

    if (signIndex == -1) {
      result = [];
      var signCount = euSign.XAdESGetSignsCount(xadesData);
      for (var i = 0; i < signCount; i++) {
        signerInfo = euSign.CtxXAdESGetSignerInfo(context, i, xadesData);
        result.push(signerInfo.GetTransferableObject());
      }
    } else {
      signerInfo = euSign.CtxXAdESGetSignerInfo(context, signIndex, xadesData);
      result = signerInfo.GetTransferableObject();
    }

    euSign.CtxFree(context);

    onSuccess(result);
  } catch (e) {
    if (context) euSign.CtxFree(context);

    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.XAdESSignData = function (
  signAlgo,
  xadesType,
  signLevel,
  references,
  asBase64String,
  onSuccess,
  onError,
) {
  if (this.m_euKSP.IsPrivateKeyReaded()) {
    this.m_euKSP.XAdESSignData(
      signAlgo,
      xadesType,
      signLevel,
      references,
      asBase64String,
      onSuccess,
      onError,
    );
    return;
  }

  var pThis = this;
  var euSign = pThis.m_euSign;
  var pkContext = pThis.m_pkContext;

  try {
    if (pkContext == null) {
      euSign.RaiseError(EU_ERROR_BAD_CERT);
      return;
    }

    pkContext = EndUserInitFromTransferableObject(
      pkContext,
      EndUserPrivateKeyContext,
    );

    references = DataToNamedDataArray(references);
    var xadesReferences = [];
    for (var i = 0; i < references.length; i++) {
      var reference = new EndUserReference(
        references[i].name,
        references[i].val,
      );
      xadesReferences.push(reference);
    }

    var xadesData = euSign.CtxXAdESSignData(
      pkContext,
      signAlgo,
      xadesType,
      signLevel,
      xadesReferences,
      asBase64String,
    );
    var result = {
      name:
        references[0].name +
        (references[0].name.endsWith(".xml") ? "" : ".xml"),
      val: xadesData,
    };
    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.XAdESVerifyData = function (
  references,
  xadesData,
  signIndex,
  onSuccess,
  onError,
) {
  try {
    var pThis = this;
    var euSign = pThis.m_euSign;
    var signInfo = null;
    var result = null;
    var i;

    signIndex = GetOptionalParam(signIndex, -1);

    references = DataToNamedDataArray(references);
    var xadesReferences = null;
    if (references != null) {
      xadesReferences = [];
      for (i = 0; i < references.length; i++) {
        var reference = new EndUserReference(
          references[i].name,
          references[i].val,
        );
        xadesReferences.push(reference);
      }
    }

    if (signIndex == -1) {
      result = [];
      var signCount = euSign.XAdESGetSignsCount(xadesData);
      for (i = 0; i < signCount; i++) {
        signInfo = euSign.XAdESVerifyData(xadesReferences, i, xadesData);
        signInfo = signInfo.GetTransferableObject();
        signInfo.signLevel = euSign.XAdESGetSignLevel(i, xadesData);
        result.push(signInfo);
      }
    } else {
      signInfo = euSign.XAdESVerifyData(xadesReferences, signIndex, xadesData);
      signInfo = signInfo.GetTransferableObject();
      signInfo.signLevel = euSign.XAdESGetSignLevel(signIndex, xadesData);
      result = signInfo;
    }

    onSuccess(result);
  } catch (e) {
    onError(e);
  }
};

//-------------------------------------------------------------------------------

EndUser.prototype.GetSignContainerInfo = function (
  signature,
  onSuccess,
  onError,
) {
  try {
    var pThis = this;
    var euSign = pThis.m_euSign;

    var makeSignContainerInfo = function (type, subType, asicSignType) {
      return {
        type: type || 0,
        subType: subType || 0,
        asicSignType: asicSignType || 0,
      };
    };

    var getCAdESInfo = function (signature) {
      try {
        var isInternal = euSign.IsDataInSignedDataAvailable(signature);
        return makeSignContainerInfo(
          EU_SIGN_CONTAINER_TYPE_CADES,
          isInternal ? EU_CADES_TYPE_ENVELOPED : EU_CADES_TYPE_DETACHED,
          0,
        );
      } catch (e) {
        return null;
      }
    };

    var getXAdESInfo = function (signature) {
      try {
        var type = euSign.XAdESGetType(signature);
        return makeSignContainerInfo(EU_SIGN_CONTAINER_TYPE_XADES, type, 0);
      } catch (e) {
        return null;
      }
    };

    var getPAdESInfo = function (signature) {
      try {
        var signsCount = euSign.PDFGetSignsCount(signature);
        return makeSignContainerInfo(EU_SIGN_CONTAINER_TYPE_PADES, 0, 0);
      } catch (e) {
        return null;
      }
    };

    var getASiCInfo = function (signature) {
      try {
        var asicType = euSign.ASiCGetASiCType(signature);
        var signType = euSign.ASiCGetSignType(signature);
        return makeSignContainerInfo(
          EU_SIGN_CONTAINER_TYPE_ASIC,
          asicType,
          signType,
        );
      } catch (e) {
        return null;
      }
    };

    var XADES_BYTES = [0x3c, 0x3f, 0x78, 0x6d, 0x6c];
    var PADES_BYTES = [0x25, 0x50, 0x44, 0x46];
    var ASIC_BYTES = [0x50, 0x4b];

    var isArrayStartsWith = function (arr, firstBytes) {
      if (arr.length < firstBytes.length) return false;

      for (var i = 0; i < firstBytes.length; i++) {
        if (arr[i] != firstBytes[i]) return false;
      }

      return true;
    };

    if (isArrayStartsWith(signature, XADES_BYTES)) {
      chain = [getXAdESInfo, getCAdESInfo, getPAdESInfo, getASiCInfo];
    } else if (isArrayStartsWith(signature, PADES_BYTES)) {
      chain = [getPAdESInfo, getCAdESInfo, getXAdESInfo, getASiCInfo];
    } else if (isArrayStartsWith(signature, ASIC_BYTES)) {
      chain = [getASiCInfo, getCAdESInfo, getXAdESInfo, getPAdESInfo];
    } else {
      chain = [getCAdESInfo, getXAdESInfo, getPAdESInfo, getASiCInfo];
    }

    var info = null;
    for (var i = 0; i < chain.length; i++) {
      info = chain[i](signature);
      if (info != null) break;
    }

    if (info == null) {
      info = makeSignContainerInfo(EU_SIGN_CONTAINER_TYPE_UNKNOWN, 0, 0);
    }

    onSuccess(info);
  } catch (e) {
    onError(e);
  }
};

//===============================================================================
