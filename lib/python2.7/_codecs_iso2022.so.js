// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, globalScope) {
  var Module = {};
  var args = [];
  Module.arguments = [];
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
var _ksx1001_init_initialized_b;
var _ksx1001_decmap;
var _jisxcommon_encmap;
var _jisx0213_pair_encmap;
var _jisx0213_pair_decmap;
var _jisx0213_init_initialized_b;
var _jisx0213_emp_encmap;
var _jisx0213_bmp_encmap;
var _jisx0213_2_emp_decmap;
var _jisx0213_2_bmp_decmap;
var _jisx0213_1_emp_decmap;
var _jisx0213_1_bmp_decmap;
var _jisx0212_init_initialized_b;
var _jisx0212_decmap;
var _jisx0208_init_initialized_b;
var _jisx0208_decmap;
var _iso2022_kr_designations;
var _iso2022_kr_config;
var _iso2022_jp_ext_designations;
var _iso2022_jp_ext_config;
var _iso2022_jp_designations;
var _iso2022_jp_config;
var _iso2022_jp_3_designations;
var _iso2022_jp_3_config;
var _iso2022_jp_2_designations;
var _iso2022_jp_2_config;
var _iso2022_jp_2004_designations;
var _iso2022_jp_2004_config;
var _iso2022_jp_1_designations;
var _iso2022_jp_1_config;
var _getmultibytecodec_cofunc;
var _gbcommon_encmap;
var _gb2312_init_initialized_b;
var _gb2312_decmap;
var _cp949_encmap;
var __str9;
var __str8;
var __str7;
var __str6;
var __str5;
var __str4;
var __str36;
var __str35;
var __str34;
var __str33;
var __str32;
var __str31;
var __str30;
var __str3;
var __str29;
var __str28;
var __str27;
var __str26;
var __str25;
var __str24;
var __str23;
var __str22;
var __str21;
var __str20;
var __str2;
var __str19;
var __str18;
var __str17;
var __str16;
var __str15;
var __str14;
var __str13;
var __str12;
var __str11;
var __str10;
var __str1;
var __str;
var __mapping_list;
var __codec_list;
var ___methods;
var ___func___ksx1001_encoder;
var ___func___jisx0212_encoder;
var ___func___jisx0208_encoder;
var ___func___iso2022_encode;
var ___func___iso2022_decode;
var ___func___gb2312_encoder;
_ksx1001_init_initialized_b=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_ksx1001_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisxcommon_encmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_pair_encmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_pair_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_init_initialized_b=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_emp_encmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_bmp_encmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_2_emp_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_2_bmp_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_1_emp_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0213_1_bmp_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0212_init_initialized_b=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0212_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0208_init_initialized_b=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_jisx0208_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_kr_designations=allocate([195,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_kr_config=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_ext_designations=allocate([194,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,196,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,74,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,73,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,192,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_ext_config=allocate([5,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_designations=allocate([194,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,74,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,192,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_config=allocate([5,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_3_designations=allocate([207,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,194,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,207,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,208,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_3_config=allocate([5,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_2_designations=allocate([194,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,196,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,195,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,193,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,74,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,192,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,65,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,70,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_2_config=allocate([7,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_2004_designations=allocate([209,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,194,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,209,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,208,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_2004_config=allocate([5,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_1_designations=allocate([194,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,196,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,74,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,192,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_iso2022_jp_1_config=allocate([5,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_getmultibytecodec_cofunc=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_gbcommon_encmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_gb2312_init_initialized_b=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_gb2312_decmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_cp949_encmap=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([105,115,111,50,48,50,50,95,106,112,95,50,0,0,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([105,115,111,50,48,50,50,95,106,112,95,49,0,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([105,115,111,50,48,50,50,95,106,112,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([105,115,111,50,48,50,50,95,107,114,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([110,111,32,115,117,99,104,32,99,111,100,101,99,32,105,115,32,115,117,112,112,111,114,116,101,100,46,0], "i8", ALLOC_NORMAL);
__str4=allocate([101,110,99,111,100,105,110,103,32,110,97,109,101,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,46,0], "i8", ALLOC_NORMAL);
__str36=allocate([95,95,99,114,101,97,116,101,95,99,111,100,101,99,0,0], "i8", ALLOC_NORMAL);
__str35=allocate([95,109,117,108,116,105,98,121,116,101,99,111,100,101,99,0], "i8", ALLOC_NORMAL);
__str34=allocate([100,115,103,45,62,119,105,100,116,104,32,61,61,32,49,32,124,124,32,100,115,103,45,62,119,105,100,116,104,32,61,61,32,50,0,0], "i8", ALLOC_NORMAL);
__str33=allocate([100,115,103,45,62,109,97,114,107,32,33,61,32,39,92,48,39,0,0,0], "i8", ALLOC_NORMAL);
__str32=allocate([95,95,109,97,112,95,107,115,120,49,48,48,49,0,0,0], "i8", ALLOC_NORMAL);
__str31=allocate([95,95,109,97,112,95,99,112,57,52,57,0], "i8", ALLOC_NORMAL);
__str30=allocate([95,99,111,100,101,99,115,95,107,114,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([103,101,116,99,111,100,101,99,0,0,0,0], "i8", ALLOC_NORMAL);
__str29=allocate([95,95,109,97,112,95,103,98,50,51,49,50,0,0,0,0], "i8", ALLOC_NORMAL);
__str28=allocate([95,95,109,97,112,95,103,98,99,111,109,109,111,110,0,0], "i8", ALLOC_NORMAL);
__str27=allocate([95,99,111,100,101,99,115,95,99,110,0,0], "i8", ALLOC_NORMAL);
__str26=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,112,97,105,114,0], "i8", ALLOC_NORMAL);
__str25=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,50,95,101,109,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str24=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,49,95,101,109,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str23=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,101,109,112,0,0], "i8", ALLOC_NORMAL);
__str22=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,50,95,98,109,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str21=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,49,95,98,109,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,98,109,112,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([95,95,109,97,112,95,106,105,115,120,48,50,48,56,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([109,97,112,32,100,97,116,97,32,109,117,115,116,32,98,101,32,97,32,67,97,112,115,117,108,101,46,0], "i8", ALLOC_NORMAL);
__str17=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,50,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([95,95,109,97,112,95,106,105,115,120,99,111,109,109,111,110,0,0,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([95,99,111,100,101,99,115,95,106,112,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([42,108,101,110,103,116,104,32,61,61,32,49,0,0,0,0], "i8", ALLOC_NORMAL);
__str13=allocate([46,46,47,77,111,100,117,108,101,115,47,99,106,107,99,111,100,101,99,115,47,95,99,111,100,101,99,115,95,105,115,111,50,48,50,50,46,99,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([105,115,111,50,48,50,50,95,106,112,95,101,120,116,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([105,115,111,50,48,50,50,95,106,112,95,51,0,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([105,115,111,50,48,50,50,95,106,112,95,50,48,48,52,0], "i8", ALLOC_NORMAL);
__str1=allocate([109,117,108,116,105,98,121,116,101,99,111,100,101,99,46,95,95,109,97,112,95,42,0,0], "i8", ALLOC_NORMAL);
__str=allocate([95,99,111,100,101,99,115,95,105,115,111,50,48,50,50,0], "i8", ALLOC_NORMAL);
__mapping_list=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__codec_list=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
___methods=allocate([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
___func___ksx1001_encoder=allocate([107,115,120,49,48,48,49,95,101,110,99,111,100,101,114,0], "i8", ALLOC_NORMAL);
___func___jisx0212_encoder=allocate([106,105,115,120,48,50,49,50,95,101,110,99,111,100,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
___func___jisx0208_encoder=allocate([106,105,115,120,48,50,48,56,95,101,110,99,111,100,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
___func___iso2022_encode=allocate([105,115,111,50,48,50,50,95,101,110,99,111,100,101,0,0], "i8", ALLOC_NORMAL);
___func___iso2022_decode=allocate([105,115,111,50,48,50,50,95,100,101,99,111,100,101,0,0], "i8", ALLOC_NORMAL);
___func___gb2312_encoder=allocate([103,98,50,51,49,50,95,101,110,99,111,100,101,114,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[(((_iso2022_kr_designations)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 38);
HEAP32[(((_iso2022_kr_designations)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 66);
HEAP32[(((_iso2022_kr_designations)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 50);
HEAP32[(((_iso2022_kr_config)+(4))>>2)]=((_iso2022_kr_designations)|0);
HEAP32[(((_iso2022_jp_ext_designations)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_ext_designations)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_ext_designations)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_ext_designations)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 68);
HEAP32[(((_iso2022_jp_ext_designations)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 40);
HEAP32[(((_iso2022_jp_ext_designations)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_iso2022_jp_ext_designations)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((_iso2022_jp_ext_designations)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 72);
HEAP32[(((_iso2022_jp_ext_designations)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 6);
HEAP32[(((_iso2022_jp_ext_designations)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 48);
HEAP32[(((_iso2022_jp_ext_designations)+(68))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_ext_designations)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_ext_designations)+(76))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_ext_config)+(4))>>2)]=((_iso2022_jp_ext_designations)|0);
HEAP32[(((_iso2022_jp_designations)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_designations)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_designations)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_designations)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((_iso2022_jp_designations)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 72);
HEAP32[(((_iso2022_jp_designations)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_designations)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_designations)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_config)+(4))>>2)]=((_iso2022_jp_designations)|0);
HEAP32[(((_iso2022_jp_3_designations)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_iso2022_jp_3_designations)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
HEAP32[(((_iso2022_jp_3_designations)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 30);
HEAP32[(((_iso2022_jp_3_designations)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_3_designations)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_3_designations)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_3_designations)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_iso2022_jp_3_designations)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
HEAP32[(((_iso2022_jp_3_designations)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 52);
HEAP32[(((_iso2022_jp_3_designations)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_iso2022_jp_3_designations)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 18);
HEAP32[(((_iso2022_jp_3_designations)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((_iso2022_jp_3_config)+(4))>>2)]=((_iso2022_jp_3_designations)|0);
HEAP32[(((_iso2022_jp_2_designations)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_2_designations)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_2_designations)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_2_designations)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 68);
HEAP32[(((_iso2022_jp_2_designations)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 40);
HEAP32[(((_iso2022_jp_2_designations)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_iso2022_jp_2_designations)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 38);
HEAP32[(((_iso2022_jp_2_designations)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 66);
HEAP32[(((_iso2022_jp_2_designations)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 50);
HEAP32[(((_iso2022_jp_2_designations)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 46);
HEAP32[(((_iso2022_jp_2_designations)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 64);
HEAP32[(((_iso2022_jp_2_designations)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 32);
HEAP32[(((_iso2022_jp_2_designations)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((_iso2022_jp_2_designations)+(76))>>2)]=(FUNCTION_TABLE_OFFSET + 72);
HEAP32[(((_iso2022_jp_2_designations)+(84))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_2_designations)+(88))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_2_designations)+(92))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_2_designations)+(104))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((_iso2022_jp_2_designations)+(108))>>2)]=(FUNCTION_TABLE_OFFSET + 36);
HEAP32[(((_iso2022_jp_2_designations)+(120))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((_iso2022_jp_2_designations)+(124))>>2)]=(FUNCTION_TABLE_OFFSET + 36);
HEAP32[(((_iso2022_jp_2_config)+(4))>>2)]=((_iso2022_jp_2_designations)|0);
HEAP32[(((_iso2022_jp_2004_designations)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_iso2022_jp_2004_designations)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 60);
HEAP32[(((_iso2022_jp_2004_designations)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 10);
HEAP32[(((_iso2022_jp_2004_designations)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_2004_designations)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_2004_designations)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_2004_designations)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_iso2022_jp_2004_designations)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 60);
HEAP32[(((_iso2022_jp_2004_designations)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 34);
HEAP32[(((_iso2022_jp_2004_designations)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_iso2022_jp_2004_designations)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 22);
HEAP32[(((_iso2022_jp_2004_designations)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((_iso2022_jp_2004_config)+(4))>>2)]=((_iso2022_jp_2004_designations)|0);
HEAP32[(((_iso2022_jp_1_designations)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_1_designations)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_1_designations)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_1_designations)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 68);
HEAP32[(((_iso2022_jp_1_designations)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 40);
HEAP32[(((_iso2022_jp_1_designations)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_iso2022_jp_1_designations)+(40))>>2)]=(FUNCTION_TABLE_OFFSET + 42);
HEAP32[(((_iso2022_jp_1_designations)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 72);
HEAP32[(((_iso2022_jp_1_designations)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_iso2022_jp_1_designations)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_iso2022_jp_1_designations)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_iso2022_jp_1_config)+(4))>>2)]=((_iso2022_jp_1_designations)|0);
HEAP32[((__mapping_list)>>2)]=((__str2)|0);
HEAP32[((__codec_list)>>2)]=((__str6)|0);
HEAP32[(((__codec_list)+(4))>>2)]=_iso2022_kr_config;
HEAP32[(((__codec_list)+(8))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__codec_list)+(12))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__codec_list)+(16))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__codec_list)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__codec_list)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__codec_list)+(28))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__codec_list)+(32))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__codec_list)+(36))>>2)]=((__str7)|0);
HEAP32[(((__codec_list)+(40))>>2)]=_iso2022_jp_config;
HEAP32[(((__codec_list)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__codec_list)+(48))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__codec_list)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__codec_list)+(56))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__codec_list)+(60))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__codec_list)+(64))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__codec_list)+(68))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__codec_list)+(72))>>2)]=((__str8)|0);
HEAP32[(((__codec_list)+(76))>>2)]=_iso2022_jp_1_config;
HEAP32[(((__codec_list)+(80))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__codec_list)+(84))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__codec_list)+(88))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__codec_list)+(92))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__codec_list)+(96))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__codec_list)+(100))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__codec_list)+(104))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__codec_list)+(108))>>2)]=((__str9)|0);
HEAP32[(((__codec_list)+(112))>>2)]=_iso2022_jp_2_config;
HEAP32[(((__codec_list)+(116))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__codec_list)+(120))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__codec_list)+(124))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__codec_list)+(128))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__codec_list)+(132))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__codec_list)+(136))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__codec_list)+(140))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__codec_list)+(144))>>2)]=((__str10)|0);
HEAP32[(((__codec_list)+(148))>>2)]=_iso2022_jp_2004_config;
HEAP32[(((__codec_list)+(152))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__codec_list)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__codec_list)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__codec_list)+(164))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__codec_list)+(168))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__codec_list)+(172))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__codec_list)+(176))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__codec_list)+(180))>>2)]=((__str11)|0);
HEAP32[(((__codec_list)+(184))>>2)]=_iso2022_jp_3_config;
HEAP32[(((__codec_list)+(188))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__codec_list)+(192))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__codec_list)+(196))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__codec_list)+(200))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__codec_list)+(204))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__codec_list)+(208))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__codec_list)+(212))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__codec_list)+(216))>>2)]=((__str12)|0);
HEAP32[(((__codec_list)+(220))>>2)]=_iso2022_jp_ext_config;
HEAP32[(((__codec_list)+(224))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((__codec_list)+(228))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((__codec_list)+(232))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((__codec_list)+(236))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((__codec_list)+(240))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((__codec_list)+(244))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((__codec_list)+(248))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((__codec_list)+(252))>>2)]=((__str2)|0);
HEAP32[((___methods)>>2)]=((__str3)|0);
HEAP32[(((___methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 62);
HEAP32[(((___methods)+(12))>>2)]=((__str2)|0);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_jisx0212_encoder,0,_iso2022_decode_reset,0,_jisx0201_k_decoder,0,_jisx0213_2000_1_decoder,0,_jisx0213_2004_1_encoder_paironly
,0,_jisx0213_2004_2_encoder,0,_jisx0213_init,0,_iso2022_encode,0,_jisx0213_2000_2_decoder,0,_iso2022_encode_reset
,0,_jisx0213_2004_2_decoder,0,_jisx0213_2000_2_encoder,0,_dummy_decoder,0,_jisx0208_init,0,_jisx0213_2000_1_encoder_paironly
,0,_gb2312_encoder,0,_jisx0213_2004_1_encoder,0,_dummy_encoder,0,_ksx1001_init,0,_jisx0212_decoder
,0,_jisx0201_r_decoder,0,_jisx0208_encoder,0,_gb2312_init,0,_jisx0201_k_encoder,0,_ksx1001_encoder
,0,_jisx0213_2000_1_encoder,0,_iso2022_codec_init,0,_iso2022_decode_init,0,_jisx0208_decoder,0,_jisx0213_2004_1_decoder
,0,_getcodec,0,_gb2312_decoder,0,_ksx1001_decoder,0,_jisx0212_init,0,_iso2022_decode,0,_jisx0201_r_encoder,0,_iso2022_encode_init,0]);
// EMSCRIPTEN_START_FUNCS
function _iso2022_encode_init(r1,r2){HEAP8[r1+4|0]=0;HEAP8[r1]=66;HEAP8[r1+1|0]=66;return 0}function _iso2022_encode_reset(r1,r2,r3,r4){var r5,r6;r2=r3>>2;r3=r1+4|0;do{if((HEAP8[r3]&1)<<24>>24==0){r5=r4}else{if((r4|0)<1){r6=-1;return r6}else{HEAP8[HEAP32[r2]]=15;HEAP32[r2]=HEAP32[r2]+1|0;HEAP8[r3]=HEAP8[r3]&-2;r5=r4-1|0;break}}}while(0);r4=r1;if((HEAP8[r4]|0)==66){r6=0;return r6}if((r5|0)<3){r6=-1;return r6}HEAP8[HEAP32[r2]]=27;HEAP8[HEAP32[r2]+1|0]=40;HEAP8[HEAP32[r2]+2|0]=66;HEAP32[r2]=HEAP32[r2]+3|0;HEAP8[r4]=66;r6=0;return r6}function _init_codecs_iso2022(){_Py_InitModule4_64(__str|0,___methods|0,0,0,1013);return}function _getcodec(r1,r2){var r3,r4,r5,r6,r7;r1=STACKTOP;if((HEAP32[HEAP32[r2+4>>2]+84>>2]&134217728|0)==0){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str4|0);r3=0;STACKTOP=r1;return r3}r4=_getmultibytecodec();if((r4|0)==0){r3=0;STACKTOP=r1;return r3}r5=r2+20|0;r2=__codec_list|0;while(1){r6=r2|0;r7=HEAP32[r6>>2];if((HEAP8[r7]|0)==0){break}if((_strcmp(r7,r5)|0)==0){break}else{r2=r2+36|0}}if((HEAP8[HEAP32[r6>>2]]|0)==0){_PyErr_SetString(HEAP32[_PyExc_LookupError>>2],__str5|0);r3=0;STACKTOP=r1;return r3}r6=_PyCapsule_New(r2,__str1|0,0);if((r6|0)==0){r3=0;STACKTOP=r1;return r3}r2=_PyObject_CallFunctionObjArgs(r4,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r6,HEAP32[tempInt+4>>2]=0,tempInt));r4=r6|0;r5=HEAP32[r4>>2]-1|0;HEAP32[r4>>2]=r5;if((r5|0)!=0){r3=r2;STACKTOP=r1;return r3}FUNCTION_TABLE[HEAP32[HEAP32[r6+4>>2]+24>>2]](r6);r3=r2;STACKTOP=r1;return r3}function _getmultibytecodec(){var r1,r2,r3,r4;do{if((HEAP32[_getmultibytecodec_cofunc>>2]|0)==0){r1=_PyImport_ImportModuleNoBlock(__str35|0);if((r1|0)==0){r2=0;return r2}r3=_PyObject_GetAttrString(r1,__str36|0);HEAP32[_getmultibytecodec_cofunc>>2]=r3;r3=r1|0;r4=HEAP32[r3>>2]-1|0;HEAP32[r3>>2]=r4;if((r4|0)!=0){break}FUNCTION_TABLE[HEAP32[HEAP32[r1+4>>2]+24>>2]](r1)}}while(0);r2=HEAP32[_getmultibytecodec_cofunc>>2];return r2}function _iso2022_codec_init(r1){var r2,r3,r4,r5;r2=0;r3=HEAP32[r1+4>>2];if((HEAP8[r3|0]|0)==0){r4=0;return r4}else{r5=r3}while(1){r3=HEAP32[r5+4>>2];if((r3|0)!=0){if((FUNCTION_TABLE[r3]()|0)!=0){r4=-1;r2=45;break}}r3=r5+16|0;if((HEAP8[r3|0]|0)==0){r4=0;r2=46;break}else{r5=r3}}if(r2==45){return r4}else if(r2==46){return r4}}function _iso2022_encode(r1,r2,r3,r4,r5,r6,r7){var r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38;r8=r5>>2;r5=r3>>2;r3=0;r9=STACKTOP;STACKTOP=STACKTOP+16|0;r10=r9,r11=r10>>2;r12=r9+4,r13=r12>>2;r14=r9+8;if((r4|0)<=0){r15=0;STACKTOP=r9;return r15}r16=r1;r17=r1+4|0;r18=r2+4|0;r2=(r7&1|0)==0;r7=r14|0;r19=r14+4|0;r14=r1+4|0;r20=r1;r21=r1+1|0;r22=r1+4|0;r1=r4;r4=r6;L63:while(1){r6=HEAP16[HEAP32[r5]>>1];r23=r6&65535;HEAP32[r11]=r23;if((r6&65535)<128){if((HEAP8[r16]|0)==66){r24=r4}else{if((r4|0)<3){r15=-1;r3=111;break}HEAP8[HEAP32[r8]]=27;HEAP8[HEAP32[r8]+1|0]=40;HEAP8[HEAP32[r8]+2|0]=66;HEAP8[r16]=66;HEAP32[r8]=HEAP32[r8]+3|0;r24=r4-3|0}if((HEAP8[r17]&1)<<24>>24==0){r25=r24}else{if((r24|0)<1){r15=-1;r3=108;break}HEAP8[HEAP32[r8]]=15;HEAP8[r17]=HEAP8[r17]&-2;HEAP32[r8]=HEAP32[r8]+1|0;r25=r24-1|0}if((r25|0)<1){r15=-1;r3=110;break}HEAP8[HEAP32[r8]]=HEAP32[r11]&255;HEAP32[r5]=HEAP32[r5]+2|0;HEAP32[r8]=HEAP32[r8]+1|0;r26=r25-1|0;r27=r1-1|0}else{do{if((r23&64512|0)==55296){if((r1|0)<2){r15=-2;r3=107;break L63}r6=HEAPU16[HEAP32[r5]+2>>1];if((r6&64512|0)!=56320){break}HEAP32[r11]=(r23<<10)-56613888+r6|0}}while(0);r23=HEAP32[r11]>>>0>65535?2:1;r6=HEAP32[r18>>2]|0;if((HEAP8[r6]|0)==0){r15=1;r3=109;break}r28=(r1|0)<2;r29=r6;while(1){HEAP32[r13]=1;r6=(r29+12|0)>>2;r30=FUNCTION_TABLE[HEAP32[r6]](r10,r12);if(r30<<16>>16==-2){if(r28){if(r2){r15=-2;r3=113;break L63}HEAP32[r13]=-1;r31=FUNCTION_TABLE[HEAP32[r6]](r10,r12)}else{HEAP32[r13]=2;HEAP32[r7>>2]=HEAPU16[HEAP32[r5]>>1];HEAP32[r19>>2]=HEAPU16[HEAP32[r5]+2>>1];r31=FUNCTION_TABLE[HEAP32[r6]](r7,r12)}if(r31<<16>>16!=-1){r3=72;break}}else if(r30<<16>>16!=-1){r32=r23;r33=r30;break}r30=r29+16|0;if((HEAP8[r30]|0)==0){r15=1;r3=114;break L63}else{r29=r30}}if(r3==72){r3=0;r32=HEAP32[r13];r33=r31}r23=HEAP8[r29];if(r23<<24>>24==0){r15=1;r3=115;break}r28=r29+2|0;r30=HEAP8[r28];if((r30-1&255)>=2){r3=76;break}r6=HEAPU8[r29+1|0];do{if((r6|0)==0){if((HEAP8[r14]&1)<<24>>24==0){r34=r4}else{if((r4|0)<1){r15=-1;r3=117;break L63}HEAP8[HEAP32[r8]]=15;HEAP8[r14]=HEAP8[r14]&-2;HEAP32[r8]=HEAP32[r8]+1|0;r34=r4-1|0}r35=HEAP8[r29];if((HEAP8[r20]|0)==r35<<24>>24){r36=r34;break}if((HEAP8[r28]|0)==1){if((r34|0)<3){r15=-1;r3=118;break L63}HEAP8[HEAP32[r8]]=27;HEAP8[HEAP32[r8]+1|0]=40;HEAP8[HEAP32[r8]+2|0]=HEAP8[r29]&127;HEAP8[r20]=HEAP8[r29];HEAP32[r8]=HEAP32[r8]+3|0;r36=r34-3|0;break}if(r35<<24>>24==-62){if((r34|0)<3){r15=-1;r3=119;break L63}HEAP8[HEAP32[r8]]=27;HEAP8[HEAP32[r8]+1|0]=36;HEAP8[HEAP32[r8]+2|0]=HEAP8[r29]&127;HEAP8[r20]=HEAP8[r29];HEAP32[r8]=HEAP32[r8]+3|0;r36=r34-3|0;break}else{if((r34|0)<4){r15=-1;r3=120;break L63}HEAP8[HEAP32[r8]]=27;HEAP8[HEAP32[r8]+1|0]=36;HEAP8[HEAP32[r8]+2|0]=40;HEAP8[HEAP32[r8]+3|0]=HEAP8[r29]&127;HEAP8[r20]=HEAP8[r29];HEAP32[r8]=HEAP32[r8]+4|0;r36=r34-4|0;break}}else if((r6|0)==1){do{if((HEAP8[r21]|0)==r23<<24>>24){r37=r4}else{if(r30<<24>>24==1){if((r4|0)<3){r15=-1;r3=121;break L63}HEAP8[HEAP32[r8]]=27;HEAP8[HEAP32[r8]+1|0]=41;HEAP8[HEAP32[r8]+2|0]=HEAP8[r29]&127;HEAP8[r21]=HEAP8[r29];HEAP32[r8]=HEAP32[r8]+3|0;r37=r4-3|0;break}else{if((r4|0)<4){r15=-1;r3=122;break L63}HEAP8[HEAP32[r8]]=27;HEAP8[HEAP32[r8]+1|0]=36;HEAP8[HEAP32[r8]+2|0]=41;HEAP8[HEAP32[r8]+3|0]=HEAP8[r29]&127;HEAP8[r21]=HEAP8[r29];HEAP32[r8]=HEAP32[r8]+4|0;r37=r4-4|0;break}}}while(0);if((HEAP8[r22]&1)<<24>>24!=0){r36=r37;break}if((r37|0)<1){r15=-1;r3=123;break L63}HEAP8[HEAP32[r8]]=14;HEAP8[r22]=HEAP8[r22]|1;HEAP32[r8]=HEAP32[r8]+1|0;r36=r37-1|0}else{r15=-3;r3=116;break L63}}while(0);if((HEAP8[r28]|0)==1){if((r36|0)<1){r15=-1;r3=124;break}HEAP8[HEAP32[r8]]=r33&255;HEAP32[r8]=HEAP32[r8]+1|0;r38=r36-1|0}else{if((r36|0)<2){r15=-1;r3=125;break}HEAP8[HEAP32[r8]]=(r33&65535)>>>8&255;HEAP8[HEAP32[r8]+1|0]=r33&255;HEAP32[r8]=HEAP32[r8]+2|0;r38=r36-2|0}HEAP32[r5]=(r32<<1)+HEAP32[r5]|0;r26=r38;r27=r1-r32|0}if((r27|0)>0){r1=r27;r4=r26}else{r15=0;r3=106;break}}if(r3==76){___assert_func(__str13|0,219,___func___iso2022_encode|0,__str34|0)}else if(r3==106){STACKTOP=r9;return r15}else if(r3==107){STACKTOP=r9;return r15}else if(r3==108){STACKTOP=r9;return r15}else if(r3==109){STACKTOP=r9;return r15}else if(r3==110){STACKTOP=r9;return r15}else if(r3==111){STACKTOP=r9;return r15}else if(r3==113){STACKTOP=r9;return r15}else if(r3==114){STACKTOP=r9;return r15}else if(r3==115){STACKTOP=r9;return r15}else if(r3==116){STACKTOP=r9;return r15}else if(r3==117){STACKTOP=r9;return r15}else if(r3==118){STACKTOP=r9;return r15}else if(r3==119){STACKTOP=r9;return r15}else if(r3==120){STACKTOP=r9;return r15}else if(r3==121){STACKTOP=r9;return r15}else if(r3==122){STACKTOP=r9;return r15}else if(r3==123){STACKTOP=r9;return r15}else if(r3==124){STACKTOP=r9;return r15}else if(r3==125){STACKTOP=r9;return r15}}function _jisx0201_r_decoder(r1){var r2,r3,r4;r2=HEAP8[r1];r1=r2&255;do{if((r2&255)<92){r3=r1}else{if(r2<<24>>24==92){r3=165;break}if((r2&255)<126){r3=r1;break}if(r2<<24>>24==127){r3=127;break}else if(r2<<24>>24==126){r3=8254;break}else{r4=65535;return r4}}}while(0);r4=r3;return r4}function _jisx0201_r_encoder(r1,r2){var r3,r4,r5,r6;r2=0;r3=HEAP32[r1>>2];do{if(r3>>>0>127){r4=r3;r2=139}else{if((r3|0)==126|(r3|0)==92){r4=HEAP32[r1>>2];r2=139;break}else{r5=r3&65535;break}}}while(0);do{if(r2==139){if((r4|0)==165){r5=92;break}else if((r4|0)==8254){r5=126;break}else{r6=-1;return r6}}}while(0);r6=r5;return r6}function _jisx0201_k_decoder(r1){var r2;r2=HEAPU8[r1]^128;return(r2-161|0)>>>0<63?r2+65216|0:65535}function _jisx0201_k_encoder(r1,r2){var r3;r2=HEAP32[r1>>2];if((r2-65377|0)>>>0>=63){r3=-1;return r3}r3=r2+192&65535;return r3}function _iso2022_decode_init(r1,r2){r2=r1;HEAP8[r1+4|0]=0;HEAP8[r1]=66;HEAP8[r2+1|0]=66;HEAP8[r2+2|0]=66;return 0}function _iso2022_decode_reset(r1,r2){HEAP8[r1]=66;r2=r1+4|0;HEAP8[r2]=HEAP8[r2]&-2;return 0}function _jisx0208_decoder(r1){var r2,r3,r4,r5,r6;do{if((HEAP8[r1]|0)==33){if((HEAP8[r1+1|0]|0)==64){r2=65340}else{break}return r2}}while(0);r3=HEAPU8[r1];r4=HEAP32[_jisx0208_decmap>>2];r5=HEAP32[r4+(r3<<3)>>2];if((r5|0)==0){r2=65535;return r2}r6=HEAP8[r1+1|0];r1=HEAP8[(r3<<3)+r4+4|0];if((r6&255)<(r1&255)){r2=65535;return r2}if((r6&255)>HEAPU8[(r3<<3)+r4+5|0]){r2=65535;return r2}else{r2=HEAP16[r5+((r6&255)-(r1&255)<<1)>>1];return r2<<16>>16==-2?65535:r2&65535}}function _jisx0212_decoder(r1){var r2,r3,r4,r5;r2=HEAPU8[r1];r3=HEAP32[_jisx0212_decmap>>2];r4=HEAP32[r3+(r2<<3)>>2];if((r4|0)==0){return 65535}r5=HEAP8[r1+1|0];r1=HEAP8[(r2<<3)+r3+4|0];if((r5&255)<(r1&255)){return 65535}if((r5&255)>HEAPU8[(r2<<3)+r3+5|0]){return 65535}else{r3=HEAP16[r4+((r5&255)-(r1&255)<<1)>>1];return r3<<16>>16==-2?65535:r3&65535}}function _jisx0208_init(){var r1;do{if(!HEAP8[_jisx0208_init_initialized_b]){if((_importmap(__str15|0,__str16|0,_jisxcommon_encmap,0)|0)!=0){r1=-1;return r1}if((_importmap(__str15|0,__str19|0,0,_jisx0208_decmap)|0)==0){break}else{r1=-1}return r1}}while(0);HEAP8[_jisx0208_init_initialized_b]=1;r1=0;return r1}function _jisx0212_init(){var r1;do{if(!HEAP8[_jisx0212_init_initialized_b]){if((_importmap(__str15|0,__str16|0,_jisxcommon_encmap,0)|0)!=0){r1=-1;return r1}if((_importmap(__str15|0,__str17|0,0,_jisx0212_decmap)|0)==0){break}else{r1=-1}return r1}}while(0);HEAP8[_jisx0212_init_initialized_b]=1;r1=0;return r1}function _importmap(r1,r2,r3,r4){var r5,r6,r7;r5=_PyImport_ImportModule(r1);if((r5|0)==0){r6=-1;return r6}r1=_PyObject_GetAttrString(r5,r2);do{if((r1|0)!=0){if((_PyCapsule_IsValid(r1,__str1|0)|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str18|0);break}r2=_PyCapsule_GetPointer(r1,__str1|0);if((r3|0)!=0){HEAP32[r3>>2]=HEAP32[r2+4>>2]}if((r4|0)!=0){HEAP32[r4>>2]=HEAP32[r2+8>>2]}r2=r1|0;r7=HEAP32[r2>>2]-1|0;HEAP32[r2>>2]=r7;if((r7|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r1+4>>2]+24>>2]](r1)}r7=r5|0;r2=HEAP32[r7>>2]-1|0;HEAP32[r7>>2]=r2;if((r2|0)!=0){r6=0;return r6}FUNCTION_TABLE[HEAP32[HEAP32[r5+4>>2]+24>>2]](r5);r6=0;return r6}}while(0);r1=r5|0;r4=HEAP32[r1>>2]-1|0;HEAP32[r1>>2]=r4;if((r4|0)!=0){r6=-1;return r6}FUNCTION_TABLE[HEAP32[HEAP32[r5+4>>2]+24>>2]](r5);r6=-1;return r6}function _jisx0213_init(){var r1,r2;r1=0;do{if(HEAP8[_jisx0213_init_initialized_b]){r1=217}else{if((_jisx0208_init()|0)!=0){r2=-1;break}if((_importmap(__str15|0,__str20|0,_jisx0213_bmp_encmap,0)|0)!=0){r2=-1;break}if((_importmap(__str15|0,__str21|0,0,_jisx0213_1_bmp_decmap)|0)!=0){r2=-1;break}if((_importmap(__str15|0,__str22|0,0,_jisx0213_2_bmp_decmap)|0)!=0){r2=-1;break}if((_importmap(__str15|0,__str23|0,_jisx0213_emp_encmap,0)|0)!=0){r2=-1;break}if((_importmap(__str15|0,__str24|0,0,_jisx0213_1_emp_decmap)|0)!=0){r2=-1;break}if((_importmap(__str15|0,__str25|0,0,_jisx0213_2_emp_decmap)|0)!=0){r2=-1;break}if((_importmap(__str15|0,__str26|0,_jisx0213_pair_encmap,_jisx0213_pair_decmap)|0)==0){r1=217;break}else{r2=-1;break}}}while(0);if(r1==217){HEAP8[_jisx0213_init_initialized_b]=1;r2=0}return r2}function _iso2022_decode(r1,r2,r3,r4,r5,r6){var r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35;r7=r5>>2;r8=r3>>2;r9=0;r10=STACKTOP;STACKTOP=STACKTOP+8|0;r11=r10,r12=r11>>2;r13=r10+4,r14=r13>>2;HEAP32[r12]=r4;HEAP32[r14]=r6;if((r4|0)<=0){r15=0;STACKTOP=r10;return r15}r6=r1+4|0;r16=r1;r17=r1+1|0;r18=r2;r19=r2;r20=r2;r21=r2+4|0;r22=r4;r4=0;L271:while(1){r23=r22;L273:while(1){r24=HEAP32[r8];r25=HEAP8[r24];r26=HEAP8[r6];r27=r26&255;L275:do{if((r27&2|0)==0){r28=r25&255;do{if((r28|0)==27){if((r23|0)<2){r15=-2;r9=271;break L271}r29=HEAP8[r24+1|0];if(r29<<24>>24==40|r29<<24>>24==41|r29<<24>>24==36|r29<<24>>24==46|r29<<24>>24==38){r30=_iso2022processesc(r2,r1,r3,r11);if((r30|0)==0){r9=222;break L275}else{r15=r30;r9=272;break L271}}if((HEAP32[r18>>2]&2|0)!=0&r29<<24>>24==78){if((r23|0)<3){r15=-2;r9=281;break L271}r29=_iso2022processg2(r1,r3,r11,r5,r13);if((r29|0)==0){r9=222;break L275}else{r15=r29;r9=267;break L271}}else{if((HEAP32[r14]|0)<1){r15=-1;r9=270;break L271}HEAP16[HEAP32[r7]>>1]=27;HEAP8[r6]=HEAP8[r6]|2;HEAP32[r8]=HEAP32[r8]+1|0;HEAP32[r12]=HEAP32[r12]-1|0;HEAP32[r7]=HEAP32[r7]+2|0;HEAP32[r14]=HEAP32[r14]-1|0;r9=222;break L275}}else if((r28|0)==15){if((HEAP32[r19>>2]&1|0)!=0){break}HEAP8[r6]=r26&-2;HEAP32[r8]=HEAP32[r8]+1|0;r29=HEAP32[r12]-1|0;HEAP32[r12]=r29;r31=r29;break L275}else if((r28|0)==10){HEAP8[r6]=r26&-2;if((HEAP32[r14]|0)<1){r15=-1;r9=279;break L271}HEAP16[HEAP32[r7]>>1]=10;HEAP32[r8]=HEAP32[r8]+1|0;HEAP32[r12]=HEAP32[r12]-1|0;HEAP32[r7]=HEAP32[r7]+2|0;HEAP32[r14]=HEAP32[r14]-1|0;r9=222;break L275}else if((r28|0)==14){if((HEAP32[r20>>2]&1|0)!=0){break}HEAP8[r6]=r26|1;HEAP32[r8]=HEAP32[r8]+1|0;r29=HEAP32[r12]-1|0;HEAP32[r12]=r29;r31=r29;break L275}else{if((r25&255)<32){break}if(r25<<24>>24<0){r15=1;r9=277;break L271}r32=HEAP8[(r27&1|0)==0?r16:r17];if(r32<<24>>24!=66){break L273}}}while(0);if((HEAP32[r14]|0)<1){r15=-1;r9=273;break L271}HEAP16[HEAP32[r7]>>1]=r25&255;HEAP32[r8]=HEAP32[r8]+1|0;HEAP32[r12]=HEAP32[r12]-1|0;HEAP32[r7]=HEAP32[r7]+2|0;HEAP32[r14]=HEAP32[r14]-1|0;r9=222;break}else{if((HEAP32[r14]|0)<1){r15=-1;r9=268;break L271}HEAP16[HEAP32[r7]>>1]=r25&255;HEAP32[r8]=HEAP32[r8]+1|0;HEAP32[r12]=HEAP32[r12]-1|0;HEAP32[r7]=HEAP32[r7]+2|0;HEAP32[r14]=HEAP32[r14]-1|0;if(!((r25-65&255)<26|r25<<24>>24==64)){r9=222;break}HEAP8[r6]=HEAP8[r6]&-3;r9=222;break}}while(0);if(r9==222){r9=0;r31=HEAP32[r12]}if((r31|0)>0){r23=r31}else{r15=0;r9=283;break L271}}do{if((r4|0)==0){r9=250}else{if((HEAP8[r4|0]|0)==r32<<24>>24){r33=r4;break}else{r9=250;break}}}while(0);if(r9==250){r9=0;r23=HEAP32[r21>>2];while(1){r34=HEAP8[r23|0];if(r34<<24>>24==r32<<24>>24){break}else{r23=r23+16|0}}if(r34<<24>>24==0){r9=253;break}else{r33=r23}}r35=r33+2|0;if((HEAP32[r12]|0)<(HEAPU8[r35]|0)){r15=-2;r9=280;break}r25=FUNCTION_TABLE[HEAP32[r33+8>>2]](HEAP32[r8]);if((r25|0)==65535){r9=256;break}do{if(r25>>>0<65536){if((HEAP32[r14]|0)<1){r15=-1;r9=282;break L271}HEAP16[HEAP32[r7]>>1]=r25&65535;HEAP32[r7]=HEAP32[r7]+2|0;HEAP32[r14]=HEAP32[r14]-1|0}else{r27=(HEAP32[r14]|0)<2;if(r25>>>0<196608){if(r27){r15=-1;r9=274;break L271}r26=r25-65536|0;HEAP16[HEAP32[r7]>>1]=(r26>>>10)+55296&65535;HEAP16[HEAP32[r7]+2>>1]=(r26&1023|56320)&65535;HEAP32[r7]=HEAP32[r7]+4|0;HEAP32[r14]=HEAP32[r14]-2|0;break}else{if(r27){r15=-1;r9=275;break L271}HEAP16[HEAP32[r7]>>1]=r25>>>16&65535;HEAP16[HEAP32[r7]+2>>1]=r25&65535;HEAP32[r7]=HEAP32[r7]+4|0;HEAP32[r14]=HEAP32[r14]-2|0;break}}}while(0);HEAP32[r8]=HEAP32[r8]+HEAPU8[r35]|0;r25=HEAP32[r12]-HEAPU8[r35]|0;HEAP32[r12]=r25;if((r25|0)>0){r22=r25;r4=r33}else{r15=0;r9=276;break}}if(r9==267){STACKTOP=r10;return r15}else if(r9==268){STACKTOP=r10;return r15}else if(r9==253){___assert_func(__str13|0,511,___func___iso2022_decode|0,__str33|0)}else if(r9==256){r15=HEAPU8[r35];STACKTOP=r10;return r15}else if(r9==270){STACKTOP=r10;return r15}else if(r9==271){STACKTOP=r10;return r15}else if(r9==272){STACKTOP=r10;return r15}else if(r9==273){STACKTOP=r10;return r15}else if(r9==274){STACKTOP=r10;return r15}else if(r9==275){STACKTOP=r10;return r15}else if(r9==276){STACKTOP=r10;return r15}else if(r9==277){STACKTOP=r10;return r15}else if(r9==279){STACKTOP=r10;return r15}else if(r9==280){STACKTOP=r10;return r15}else if(r9==281){STACKTOP=r10;return r15}else if(r9==282){STACKTOP=r10;return r15}else if(r9==283){STACKTOP=r10;return r15}}function _jisx0208_encoder(r1,r2){var r3,r4,r5,r6,r7;if((HEAP32[r2>>2]|0)!=1){___assert_func(__str13|0,632,___func___jisx0208_encoder|0,__str14|0)}r2=HEAP32[r1>>2];do{if(r2>>>0<65536){if((r2|0)==65340){r3=8512;return r3}r1=r2>>>8;r4=HEAP32[_jisxcommon_encmap>>2];r5=HEAP32[r4+(r1<<3)>>2];if((r5|0)==0){break}r6=r2&255;r7=HEAPU8[(r1<<3)+r4+4|0];if(r6>>>0<r7>>>0){break}if(r6>>>0>HEAPU8[(r1<<3)+r4+5|0]>>>0){break}r4=HEAP16[r5+(r6-r7<<1)>>1];if(r4<<16>>16<0){break}else{r3=r4}return r3}}while(0);r3=-1;return r3}function _jisx0212_encoder(r1,r2){var r3,r4,r5;if((HEAP32[r2>>2]|0)!=1){___assert_func(__str13|0,671,___func___jisx0212_encoder|0,__str14|0)}r2=HEAP32[r1>>2];if(r2>>>0>=65536){return-1}r1=r2>>>8;r3=HEAP32[_jisxcommon_encmap>>2];r4=HEAP32[r3+(r1<<3)>>2];if((r4|0)==0){return-1}r5=r2&255;r2=HEAPU8[(r1<<3)+r3+4|0];if(r5>>>0<r2>>>0){return-1}if(r5>>>0>HEAPU8[(r1<<3)+r3+5|0]>>>0){return-1}else{r3=HEAP16[r4+(r5-r2<<1)>>1];return r3<<16>>16>-2?-1:r3&32767}}function _jisx0213_2000_1_decoder(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10;r2=0;r3=HEAP8[r1];do{if(r3<<24>>24==46){if((HEAP8[r1+1|0]|0)==33){r4=65535;return r4}else{r5=HEAP8[r1];break}}else{r5=r3}}while(0);do{if(r5<<24>>24==47){if((HEAP8[r1+1|0]|0)==126){r4=65535}else{break}return r4}}while(0);do{if((HEAP8[r1]|0)==79){if((HEAP8[r1+1|0]|0)==84){r4=65535;return r4}r5=HEAP8[r1];if(r5<<24>>24!=79){r6=r5;break}if((HEAP8[r1+1|0]|0)==126){r4=65535}else{r2=318;break}return r4}else{r2=318}}while(0);if(r2==318){r6=HEAP8[r1]}do{if(r6<<24>>24==116){if((HEAP8[r1+1|0]|0)==39){r4=65535}else{break}return r4}}while(0);r6=HEAP8[r1];L401:do{if(r6<<24>>24==126){if((HEAP8[r1+1|0]|0)==122){r4=65535;return r4}do{if((HEAP8[r1]|0)==126){if((HEAP8[r1+1|0]|0)==123){r4=65535;return r4}r5=HEAP8[r1];if(r5<<24>>24!=126){r7=r5;break L401}if((HEAP8[r1+1|0]|0)==124){r4=65535;return r4}if((HEAP8[r1]|0)!=126){break}if((HEAP8[r1+1|0]|0)==125){r4=65535;return r4}r5=HEAP8[r1];if(r5<<24>>24!=126){r7=r5;break L401}if((HEAP8[r1+1|0]|0)==126){r4=65535}else{break}return r4}}while(0);r7=HEAP8[r1]}else{r7=r6}}while(0);do{if(r7<<24>>24==33){if((HEAP8[r1+1|0]|0)==64){r4=65340}else{break}return r4}}while(0);r7=HEAPU8[r1];r6=HEAP32[_jisx0208_decmap>>2];r5=HEAP32[r6+(r7<<3)>>2];do{if((r5|0)==0){r2=338}else{r3=HEAP8[r1+1|0];r8=HEAP8[(r7<<3)+r6+4|0];if((r3&255)<(r8&255)){r2=338;break}if((r3&255)>HEAPU8[(r7<<3)+r6+5|0]){r2=338;break}r9=HEAP16[r5+((r3&255)-(r8&255)<<1)>>1];if(r9<<16>>16==-2){r2=338;break}else{r10=r9&65535;break}}}while(0);L431:do{if(r2==338){r5=HEAPU8[r1];r6=HEAP32[_jisx0213_1_bmp_decmap>>2];r7=HEAP32[r6+(r5<<3)>>2];do{if((r7|0)!=0){r9=HEAP8[r1+1|0];r8=HEAP8[(r5<<3)+r6+4|0];if((r9&255)<(r8&255)){break}if((r9&255)>HEAPU8[(r5<<3)+r6+5|0]){break}r3=HEAP16[r7+((r9&255)-(r8&255)<<1)>>1];if(r3<<16>>16!=-2){r10=r3&65535;break L431}}}while(0);r7=HEAPU8[r1];r6=HEAP32[_jisx0213_1_emp_decmap>>2];r5=HEAP32[r6+(r7<<3)>>2];do{if((r5|0)!=0){r3=HEAP8[r1+1|0];r8=HEAP8[(r7<<3)+r6+4|0];if((r3&255)<(r8&255)){break}if((r3&255)>HEAPU8[(r7<<3)+r6+5|0]){break}r9=HEAP16[r5+((r3&255)-(r8&255)<<1)>>1];if(r9<<16>>16==-2){break}r10=r9&65535|131072;break L431}}while(0);r5=HEAPU8[r1];r6=HEAP32[_jisx0213_pair_decmap>>2];r7=HEAP32[r6+(r5<<3)>>2];if((r7|0)==0){r4=65535;return r4}r9=HEAP8[r1+1|0];r8=HEAP8[(r5<<3)+r6+4|0];if((r9&255)<(r8&255)){r4=65535;return r4}if((r9&255)>HEAPU8[(r5<<3)+r6+5|0]){r4=65535;return r4}r6=HEAP32[r7+((r9&255)-(r8&255)<<2)>>2];if((r6|0)==65534){r4=65535}else{r10=r6;break}return r4}}while(0);r4=r10;return r4}function _jisx0213_2000_2_decoder(r1){var r2,r3,r4,r5,r6,r7,r8;r2=HEAPU8[r1];r3=HEAP32[_jisx0213_2_bmp_decmap>>2];r4=HEAP32[r3+(r2<<3)>>2];do{if((r4|0)!=0){r5=HEAP8[r1+1|0];r6=HEAP8[(r2<<3)+r3+4|0];if((r5&255)<(r6&255)){break}if((r5&255)>HEAPU8[(r2<<3)+r3+5|0]){break}r7=HEAP16[r4+((r5&255)-(r6&255)<<1)>>1];if(r7<<16>>16==-2){break}else{r8=r7&65535}return r8}}while(0);r4=HEAPU8[r1];r3=HEAP32[_jisx0213_2_emp_decmap>>2];r2=HEAP32[r3+(r4<<3)>>2];if((r2|0)==0){r8=65535;return r8}r7=HEAP8[r1+1|0];r1=HEAP8[(r4<<3)+r3+4|0];if((r7&255)<(r1&255)){r8=65535;return r8}if((r7&255)>HEAPU8[(r4<<3)+r3+5|0]){r8=65535;return r8}r3=HEAP16[r2+((r7&255)-(r1&255)<<1)>>1];if(r3<<16>>16==-2){r8=65535;return r8}r8=r3&65535|131072;return r8}function _find_pairencmap(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10;r4=(r1&65535)<<16|r2&65535;r2=23;r1=0;r5=46;while(1){r6=HEAP32[r3+(r2<<3)>>2];if(r4>>>0<r6>>>0){if((r5|0)==(r2|0)){r7=r2;break}else{r8=r2;r9=r1}}else{if(r4>>>0<=r6>>>0|(r1|0)==(r2|0)){r7=r2;break}else{r8=r5;r9=r2}}r6=r8+r9>>1;if((r9|0)==(r8|0)){r7=r6;break}else{r2=r6;r1=r9;r5=r8}}if((r4|0)!=(HEAP32[r3+(r7<<3)>>2]|0)){r10=-3;return r10}r10=HEAP16[r3+(r7<<3)+4>>1];return r10}function _jisx0213_2004_1_decoder(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10;r2=0;do{if((HEAP8[r1]|0)==33){if((HEAP8[r1+1|0]|0)==64){r3=65340}else{break}return r3}}while(0);r4=HEAPU8[r1];r5=HEAP32[_jisx0208_decmap>>2];r6=HEAP32[r5+(r4<<3)>>2];do{if((r6|0)==0){r2=401}else{r7=HEAP8[r1+1|0];r8=HEAP8[(r4<<3)+r5+4|0];if((r7&255)<(r8&255)){r2=401;break}if((r7&255)>HEAPU8[(r4<<3)+r5+5|0]){r2=401;break}r9=HEAP16[r6+((r7&255)-(r8&255)<<1)>>1];if(r9<<16>>16==-2){r2=401;break}else{r10=r9&65535;break}}}while(0);L497:do{if(r2==401){r6=HEAPU8[r1];r5=HEAP32[_jisx0213_1_bmp_decmap>>2];r4=HEAP32[r5+(r6<<3)>>2];do{if((r4|0)!=0){r9=HEAP8[r1+1|0];r8=HEAP8[(r6<<3)+r5+4|0];if((r9&255)<(r8&255)){break}if((r9&255)>HEAPU8[(r6<<3)+r5+5|0]){break}r7=HEAP16[r4+((r9&255)-(r8&255)<<1)>>1];if(r7<<16>>16!=-2){r10=r7&65535;break L497}}}while(0);r4=HEAPU8[r1];r5=HEAP32[_jisx0213_1_emp_decmap>>2];r6=HEAP32[r5+(r4<<3)>>2];do{if((r6|0)!=0){r7=HEAP8[r1+1|0];r8=HEAP8[(r4<<3)+r5+4|0];if((r7&255)<(r8&255)){break}if((r7&255)>HEAPU8[(r4<<3)+r5+5|0]){break}r9=HEAP16[r6+((r7&255)-(r8&255)<<1)>>1];if(r9<<16>>16==-2){break}r10=r9&65535|131072;break L497}}while(0);r6=HEAPU8[r1];r5=HEAP32[_jisx0213_pair_decmap>>2];r4=HEAP32[r5+(r6<<3)>>2];if((r4|0)==0){r3=65535;return r3}r9=HEAP8[r1+1|0];r8=HEAP8[(r6<<3)+r5+4|0];if((r9&255)<(r8&255)){r3=65535;return r3}if((r9&255)>HEAPU8[(r6<<3)+r5+5|0]){r3=65535;return r3}r5=HEAP32[r4+((r9&255)-(r8&255)<<2)>>2];if((r5|0)==65534){r3=65535}else{r10=r5;break}return r3}}while(0);r3=r10;return r3}function _jisx0213_2004_2_decoder(r1){var r2,r3,r4,r5,r6,r7,r8;r2=HEAPU8[r1];r3=HEAP32[_jisx0213_2_bmp_decmap>>2];r4=HEAP32[r3+(r2<<3)>>2];do{if((r4|0)!=0){r5=HEAP8[r1+1|0];r6=HEAP8[(r2<<3)+r3+4|0];if((r5&255)<(r6&255)){break}if((r5&255)>HEAPU8[(r2<<3)+r3+5|0]){break}r7=HEAP16[r4+((r5&255)-(r6&255)<<1)>>1];if(r7<<16>>16==-2){break}else{r8=r7&65535}return r8}}while(0);r4=HEAPU8[r1];r3=HEAP32[_jisx0213_2_emp_decmap>>2];r2=HEAP32[r3+(r4<<3)>>2];if((r2|0)==0){r8=65535;return r8}r7=HEAP8[r1+1|0];r1=HEAP8[(r4<<3)+r3+4|0];if((r7&255)<(r1&255)){r8=65535;return r8}if((r7&255)>HEAPU8[(r4<<3)+r3+5|0]){r8=65535;return r8}r3=HEAP16[r2+((r7&255)-(r1&255)<<1)>>1];if(r3<<16>>16==-2){r8=65535;return r8}r8=r3&65535|131072;return r8}function _ksx1001_decoder(r1){var r2,r3,r4,r5;r2=HEAPU8[r1];r3=HEAP32[_ksx1001_decmap>>2];r4=HEAP32[r3+(r2<<3)>>2];if((r4|0)==0){return 65535}r5=HEAP8[r1+1|0];r1=HEAP8[(r2<<3)+r3+4|0];if((r5&255)<(r1&255)){return 65535}if((r5&255)>HEAPU8[(r2<<3)+r3+5|0]){return 65535}else{r3=HEAP16[r4+((r5&255)-(r1&255)<<1)>>1];return r3<<16>>16==-2?65535:r3&65535}}function _jisx0213_2000_1_encoder_paironly(r1,r2){var r3,r4;r3=HEAP32[r2>>2];r4=_jisx0213_encoder(r1,r2,2e3);if((r3|0)==1){r1=r4<<16>>16==-2?-2:-1;return r1}else if((r3|0)==2){r1=(HEAP32[r2>>2]|0)==2?r4:-1;return r1}else{r1=-1;return r1}}function _jisx0213_2000_1_encoder(r1,r2){var r3,r4;r3=_jisx0213_encoder(r1,r2,2e3);if((r3&65535)>65533){r4=r3;return r4}r4=r3<<16>>16>-1?r3:-1;return r4}function _jisx0213_2000_2_encoder(r1,r2){var r3;r3=_jisx0213_encoder(r1,r2,2e3);if((r3&65535)>65533){return r3}else{return r3<<16>>16>-1?-1:r3&32767}}function _jisx0213_encoder(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14;r4=r1>>2;r1=0;r5=HEAP32[r2>>2];do{if((r5|0)==1){r6=HEAP32[r4];if(r6>>>0>65535){do{if((r6&-65536|0)==131072){if((r3|0)==2e3&(r6|0)==134047){r7=-1;return r7}r8=r6>>>8&255;r9=HEAP32[_jisx0213_emp_encmap>>2];r10=HEAP32[r9+(r8<<3)>>2];if((r10|0)==0){break}r11=r6&255;r12=HEAPU8[(r8<<3)+r9+4|0];if(r11>>>0<r12>>>0){break}if(r11>>>0>HEAPU8[(r8<<3)+r9+5|0]>>>0){break}r9=HEAP16[r10+(r11-r12<<1)>>1];if(r9<<16>>16==-1){break}else{r7=r9}return r7}}while(0);r7=-1;return r7}do{if((r3|0)==2e3){if((r6|0)==39708|(r6|0)==20465|(r6|0)==21085|(r6|0)==21534|(r6|0)==22099|(r6|0)==23032|(r6|0)==23643|(r6|0)==24183|(r6|0)==30246|(r6|0)==32363){r7=-1}else if((r6|0)==39709){r13=-709;break}else{r1=472;break}return r7}else{r1=472}}while(0);L588:do{if(r1==472){r6=HEAP32[r4];r9=r6>>>8;r12=HEAP32[_jisx0213_bmp_encmap>>2];r11=HEAP32[r12+(r9<<3)>>2];do{if((r11|0)!=0){r10=r6&255;r8=HEAPU8[(r9<<3)+r12+4|0];if(r10>>>0<r8>>>0){break}if(r10>>>0>HEAPU8[(r9<<3)+r12+5|0]>>>0){break}r14=HEAP16[r11+(r10-r8<<1)>>1];if(r14<<16>>16==-2){r7=-2}else if(r14<<16>>16==-1){break}else{r13=r14;break L588}return r7}}while(0);r11=HEAP32[r4];r12=r11>>>8;r9=HEAP32[_jisxcommon_encmap>>2];r6=HEAP32[r9+(r12<<3)>>2];if((r6|0)==0){r7=-1;return r7}r14=r11&255;r11=HEAPU8[(r12<<3)+r9+4|0];if(r14>>>0<r11>>>0){r7=-1;return r7}if(r14>>>0>HEAPU8[(r12<<3)+r9+5|0]>>>0){r7=-1;return r7}r9=HEAP16[r6+(r14-r11<<1)>>1];if(r9<<16>>16<0){r7=-1}else{r13=r9;break}return r7}}while(0);r7=r13;return r7}else if((r5|0)==2){r9=_find_pairencmap(HEAP32[r4]&65535,HEAP32[r4+1]&65535,HEAP32[_jisx0213_pair_encmap>>2]);if(r9<<16>>16!=-3){r7=r9;return r7}HEAP32[r2>>2]=1;if(_find_pairencmap(HEAP32[r4]&65535,0,HEAP32[_jisx0213_pair_encmap>>2])<<16>>16==-3){r7=-1}else{break}return r7}else if((r5|0)!=-1){r7=-1;return r7}}while(0);HEAP32[r2>>2]=1;r2=_find_pairencmap(HEAP32[r4]&65535,0,HEAP32[_jisx0213_pair_encmap>>2]);r7=r2<<16>>16==-3?-1:r2;return r7}function _jisx0213_2004_1_encoder_paironly(r1,r2){var r3,r4;r3=HEAP32[r2>>2];r4=_jisx0213_encoder(r1,r2,0);if((r3|0)==2){r1=(HEAP32[r2>>2]|0)==2?r4:-1;return r1}else if((r3|0)==1){r1=r4<<16>>16==-2?-2:-1;return r1}else{r1=-1;return r1}}function _jisx0213_2004_1_encoder(r1,r2){var r3,r4;r3=_jisx0213_encoder(r1,r2,0);if((r3&65535)>65533){r4=r3;return r4}r4=r3<<16>>16>-1?r3:-1;return r4}function _jisx0213_2004_2_encoder(r1,r2){var r3;r3=_jisx0213_encoder(r1,r2,0);if((r3&65535)>65533){return r3}else{return r3<<16>>16>-1?-1:r3&32767}}function _ksx1001_init(){var r1;do{if(!HEAP8[_ksx1001_init_initialized_b]){if((_importmap(__str30|0,__str31|0,_cp949_encmap,0)|0)!=0){r1=-1;return r1}if((_importmap(__str30|0,__str32|0,0,_ksx1001_decmap)|0)==0){break}else{r1=-1}return r1}}while(0);HEAP8[_ksx1001_init_initialized_b]=1;r1=0;return r1}function _dummy_decoder(r1){return 65535}function _dummy_encoder(r1,r2){return-1}function _gb2312_decoder(r1){var r2,r3,r4,r5;r2=HEAPU8[r1];r3=HEAP32[_gb2312_decmap>>2];r4=HEAP32[r3+(r2<<3)>>2];if((r4|0)==0){return 65535}r5=HEAP8[r1+1|0];r1=HEAP8[(r2<<3)+r3+4|0];if((r5&255)<(r1&255)){return 65535}if((r5&255)>HEAPU8[(r2<<3)+r3+5|0]){return 65535}else{r3=HEAP16[r4+((r5&255)-(r1&255)<<1)>>1];return r3<<16>>16==-2?65535:r3&65535}}function _iso2022processesc(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19;r5=r3>>2;r3=0;r6=HEAP32[r4>>2];r7=r1;r8=1;while(1){if((r8|0)>=(r6|0)){r9=-2;r3=562;break}r10=HEAP32[r5];r11=HEAP8[r10+r8|0];if((r11-65&255)<26|r11<<24>>24==64){r3=539;break}do{if((HEAP32[r7>>2]&4|0)==0){r12=r8}else{r13=r8+1|0;if(!((r13|0)<(r6|0)&r11<<24>>24==38)){r12=r8;break}r12=(HEAP8[r10+r13|0]|0)==64?r8+2|0:r8}}while(0);r10=r12+1|0;if((r10|0)<16){r8=r10}else{r9=1;r3=558;break}}if(r3==539){r12=r8+1|0;if((r8|0)>15){r9=1;return r9}L667:do{if((r8|0)==2){r6=HEAP32[r5];r7=HEAP8[r6+1|0];r10=HEAP8[r6+2|0];do{if(r7<<24>>24==40){r14=0}else if(r7<<24>>24==41){r14=1}else if(r7<<24>>24==36){r15=r10|-128;r16=0;r3=553;break L667}else{if((HEAP32[r1>>2]&2|0)!=0&r7<<24>>24==46){r14=2;break}else{r9=3}return r9}}while(0);if(r10<<24>>24==66){r17=66;r18=r14;break}else{r15=r10;r16=r14;r3=553;break}}else if((r8|0)==5){if((HEAP32[r1>>2]&4|0)==0){r9=6;return r9}r7=HEAP32[r5];if((HEAP8[r7+3|0]|0)!=27){r9=6;return r9}if((HEAP8[r7+4|0]|0)!=36){r9=6;return r9}if((HEAP8[r7+5|0]|0)==66){r15=-62;r16=0;r3=553;break}else{r9=6}return r9}else if((r8|0)==3){r7=HEAP32[r5];if((HEAP8[r7+1|0]|0)!=36){r9=4;return r9}r6=HEAP8[r7+3|0]|-128;r11=HEAP8[r7+2|0];if(r11<<24>>24==41){r15=r6;r16=1;r3=553;break}else if(r11<<24>>24==40){r15=r6;r16=0;r3=553;break}else{r9=4;return r9}}else{r9=r12;return r9}}while(0);do{if(r3==553){r8=HEAP32[r1+4>>2];while(1){r14=HEAP8[r8|0];r19=r14<<24>>24==0;if(r19|r14<<24>>24==r15<<24>>24){break}else{r8=r8+16|0}}if(r19){r9=r12}else{r17=r15;r18=r16;break}return r9}}while(0);HEAP8[r2+r18|0]=r17;HEAP32[r4>>2]=HEAP32[r4>>2]-r12|0;HEAP32[r5]=HEAP32[r5]+r12|0;r9=0;return r9}else if(r3==562){return r9}else if(r3==558){return r9}}function _iso2022processg2(r1,r2,r3,r4,r5){var r6,r7,r8;r6=r4>>2;r4=r2>>2;r2=HEAP8[r1+2|0];L705:do{if(r2<<24>>24==70){r1=HEAPU8[HEAP32[r4]+2|0]^128;if(r1>>>0<160){HEAP16[HEAP32[r6]>>1]=r1&65535;break}do{if(r1>>>0<192){if((1<<r1-160&680475593|0)==0){break}HEAP16[HEAP32[r6]>>1]=r1&65535;break L705}}while(0);r1=HEAP8[HEAP32[r4]+2|0];r7=r1&255^128;do{if(!(r7>>>0<180|r1<<24>>24==127)){if(r7>>>0<=211){if((1<<r7-180&-1073742473|0)==0){break}}HEAP16[HEAP32[r6]>>1]=(HEAPU8[HEAP32[r4]+2|0]^128)+720&65535;break L705}}while(0);r7=HEAP8[HEAP32[r4]+2|0];if(r7<<24>>24==33){HEAP16[HEAP32[r6]>>1]=8216;break}else if(r7<<24>>24==34){HEAP16[HEAP32[r6]>>1]=8217;break}else if(r7<<24>>24==47){HEAP16[HEAP32[r6]>>1]=8213;break}else{r8=3;return r8}}else if(r2<<24>>24==65){r7=HEAP8[HEAP32[r4]+2|0];if(r7<<24>>24>-1){HEAP16[HEAP32[r6]>>1]=(r7&255)+128&65535;break}else{r8=3;return r8}}else if(r2<<24>>24==66){r7=HEAP8[HEAP32[r4]+2|0];if(r7<<24>>24<0){r8=3;return r8}else{HEAP16[HEAP32[r6]>>1]=r7&255;break}}else{r8=-3;return r8}}while(0);HEAP32[r4]=HEAP32[r4]+3|0;HEAP32[r3>>2]=HEAP32[r3>>2]-3|0;HEAP32[r6]=HEAP32[r6]+2|0;HEAP32[r5>>2]=HEAP32[r5>>2]-1|0;r8=0;return r8}function _gb2312_init(){var r1;do{if(!HEAP8[_gb2312_init_initialized_b]){if((_importmap(__str27|0,__str28|0,_gbcommon_encmap,0)|0)!=0){r1=-1;return r1}if((_importmap(__str27|0,__str29|0,0,_gb2312_decmap)|0)==0){break}else{r1=-1}return r1}}while(0);HEAP8[_gb2312_init_initialized_b]=1;r1=0;return r1}function _ksx1001_encoder(r1,r2){var r3,r4,r5,r6,r7;if((HEAP32[r2>>2]|0)!=1){___assert_func(__str13|0,594,___func___ksx1001_encoder|0,__str14|0)}r2=HEAP32[r1>>2];do{if(r2>>>0<65536){r1=r2>>>8;r3=HEAP32[_cp949_encmap>>2];r4=HEAP32[r3+(r1<<3)>>2];if((r4|0)==0){break}r5=r2&255;r6=HEAPU8[(r1<<3)+r3+4|0];if(r5>>>0<r6>>>0){break}if(r5>>>0>HEAPU8[(r1<<3)+r3+5|0]>>>0){break}r3=HEAP16[r4+(r5-r6<<1)>>1];if(r3<<16>>16<0){break}else{r7=r3}return r7}}while(0);r7=-1;return r7}function _gb2312_encoder(r1,r2){var r3,r4,r5,r6,r7;if((HEAP32[r2>>2]|0)!=1){___assert_func(__str13|0,978,___func___gb2312_encoder|0,__str14|0)}r2=HEAP32[r1>>2];do{if(r2>>>0<65536){r1=r2>>>8;r3=HEAP32[_gbcommon_encmap>>2];r4=HEAP32[r3+(r1<<3)>>2];if((r4|0)==0){break}r5=r2&255;r6=HEAPU8[(r1<<3)+r3+4|0];if(r5>>>0<r6>>>0){break}if(r5>>>0>HEAPU8[(r1<<3)+r3+5|0]>>>0){break}r3=HEAP16[r4+(r5-r6<<1)>>1];if(r3<<16>>16<0){break}else{r7=r3}return r7}}while(0);r7=-1;return r7}
// EMSCRIPTEN_END_FUNCS
Module["_init_codecs_iso2022"] = _init_codecs_iso2022;
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
