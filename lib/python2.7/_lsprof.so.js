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
var _recargstring;
var _recargchar;
var _random_value;
var _random_stream;
var _profiler_subentry_fields;
var _profiler_subentry_desc;
var _profiler_methods;
var _profiler_init_kwlist;
var _profiler_entry_fields;
var _profiler_entry_desc;
var _profiler_enable_kwlist;
var _profiler_doc;
var _powersOf10;
var _place;
var _optreset;
var _optopt;
var _optind;
var _opterr;
var _optarg;
var _nonopt_start;
var _nonopt_end;
var _noarg;
var _mparams;
var _moduleMethods;
var _initialized_b;
var _illoptstring;
var _illoptchar;
var _getstats_doc;
var _getopt_internal_posixly_correct;
var _enable_doc;
var _empty_tuple;
var _disable_doc;
var _clear_doc;
var _ambig;
var __str949;
var __str9;
var __str8;
var __str7;
var __str6;
var __str547;
var __str5;
var __str42;
var __str41;
var __str40;
var __str4;
var __str39;
var __str38;
var __str37;
var __str36;
var __str35;
var __str345;
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
var __str2452;
var __str244;
var __str24;
var __str23;
var __str221;
var __str22;
var __str211;
var __str21;
var __str20;
var __str2;
var __str1951;
var __str19;
var __str18;
var __str17;
var __str1648;
var __str16;
var __str1550;
var __str15;
var __str1446;
var __str143;
var __str14;
var __str13;
var __str125;
var __str120;
var __str12;
var __str116;
var __str110;
var __str11;
var __str10;
var __str1;
var __str;
var __gm_;
var __ZTVSt9bad_alloc;
var __ZTVSt20bad_array_new_length;
var __ZTSSt9bad_alloc;
var __ZTSSt20bad_array_new_length;
var __ZTISt9bad_alloc;
var __ZTISt20bad_array_new_length;
var __ZSt7nothrow;
var __ZL13__new_handler;
var _StatsSubEntryType;
var _StatsEntryType;
var _PyProfiler_Type;
var __ZNSt9bad_allocC1Ev;
var __ZNSt9bad_allocD1Ev;
var __ZNSt20bad_array_new_lengthC1Ev;
var __ZNSt20bad_array_new_lengthD1Ev;
var __ZNSt20bad_array_new_lengthD2Ev;
var _err;
var _errx;
var _warn1;
var _warnx;
var _verr;
var _verrx;
var _vwarn;
var _vwarnx;
_recargstring=allocate([111,112,116,105,111,110,32,114,101,113,117,105,114,101,115,32,97,110,32,97,114,103,117,109,101,110,116,32,45,45,32,37,115,0,0,0], "i8", ALLOC_NORMAL);
_recargchar=allocate([111,112,116,105,111,110,32,114,101,113,117,105,114,101,115,32,97,110,32,97,114,103,117,109,101,110,116,32,45,45,32,37,99,0,0,0], "i8", ALLOC_NORMAL);
_random_value=allocate([1,0,0,0], "i8", ALLOC_NORMAL);
_random_stream=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_profiler_subentry_fields=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_profiler_subentry_desc=allocate([0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0], "i8", ALLOC_NORMAL);
_profiler_methods=allocate([0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_profiler_init_kwlist=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_profiler_entry_fields=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_profiler_entry_desc=allocate([0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0], "i8", ALLOC_NORMAL);
_profiler_enable_kwlist=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_profiler_doc=allocate([80,114,111,102,105,108,101,114,40,99,117,115,116,111,109,95,116,105,109,101,114,61,78,111,110,101,44,32,116,105,109,101,95,117,110,105,116,61,78,111,110,101,44,32,115,117,98,99,97,108,108,115,61,84,114,117,101,44,32,98,117,105,108,116,105,110,115,61,84,114,117,101,41,10,10,32,32,32,32,66,117,105,108,100,115,32,97,32,112,114,111,102,105,108,101,114,32,111,98,106,101,99,116,32,117,115,105,110,103,32,116,104,101,32,115,112,101,99,105,102,105,101,100,32,116,105,109,101,114,32,102,117,110,99,116,105,111,110,46,10,32,32,32,32,84,104,101,32,100,101,102,97,117,108,116,32,116,105,109,101,114,32,105,115,32,97,32,102,97,115,116,32,98,117,105,108,116,45,105,110,32,111,110,101,32,98,97,115,101,100,32,111,110,32,114,101,97,108,32,116,105,109,101,46,10,32,32,32,32,70,111,114,32,99,117,115,116,111,109,32,116,105,109,101,114,32,102,117,110,99,116,105,111,110,115,32,114,101,116,117,114,110,105,110,103,32,105,110,116,101,103,101,114,115,44,32,116,105,109,101,95,117,110,105,116,32,99,97,110,10,32,32,32,32,98,101,32,97,32,102,108,111,97,116,32,115,112,101,99,105,102,121,105,110,103,32,97,32,115,99,97,108,101,32,40,105,46,101,46,32,104,111,119,32,108,111,110,103,32,101,97,99,104,32,105,110,116,101,103,101,114,32,117,110,105,116,10,32,32,32,32,105,115,44,32,105,110,32,115,101,99,111,110,100,115,41,46,10,0,0], "i8", ALLOC_NORMAL);
_powersOf10=allocate([0,0,0,0,0,0,36,64,0,0,0,0,0,0,89,64,0,0,0,0,0,136,195,64,0,0,0,0,132,215,151,65,0,128,224,55,121,195,65,67,23,110,5,181,181,184,147,70,245,249,63,233,3,79,56,77,50,29,48,249,72,119,130,90,60,191,115,127,221,79,21,117], "i8", ALLOC_NORMAL);
_place=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_optreset=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_optopt=allocate([63,0,0,0], "i8", ALLOC_NORMAL);
_optind=allocate([1,0,0,0], "i8", ALLOC_NORMAL);
_opterr=allocate([1,0,0,0], "i8", ALLOC_NORMAL);
_optarg=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_nonopt_start=allocate([255,255,255,255], "i8", ALLOC_NORMAL);
_nonopt_end=allocate([255,255,255,255], "i8", ALLOC_NORMAL);
_noarg=allocate([111,112,116,105,111,110,32,100,111,101,115,110,39,116,32,116,97,107,101,32,97,110,32,97,114,103,117,109,101,110,116,32,45,45,32,37,46,42,115,0], "i8", ALLOC_NORMAL);
_mparams=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_moduleMethods=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_initialized_b=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_illoptstring=allocate([117,110,107,110,111,119,110,32,111,112,116,105,111,110,32,45,45,32,37,115,0,0,0,0], "i8", ALLOC_NORMAL);
_illoptchar=allocate([117,110,107,110,111,119,110,32,111,112,116,105,111,110,32,45,45,32,37,99,0,0,0,0], "i8", ALLOC_NORMAL);
_getstats_doc=allocate([103,101,116,115,116,97,116,115,40,41,32,45,62,32,108,105,115,116,32,111,102,32,112,114,111,102,105,108,101,114,95,101,110,116,114,121,32,111,98,106,101,99,116,115,10,10,82,101,116,117,114,110,32,97,108,108,32,105,110,102,111,114,109,97,116,105,111,110,32,99,111,108,108,101,99,116,101,100,32,98,121,32,116,104,101,32,112,114,111,102,105,108,101,114,46,10,69,97,99,104,32,112,114,111,102,105,108,101,114,95,101,110,116,114,121,32,105,115,32,97,32,116,117,112,108,101,45,108,105,107,101,32,111,98,106,101,99,116,32,119,105,116,104,32,116,104,101,10,102,111,108,108,111,119,105,110,103,32,97,116,116,114,105,98,117,116,101,115,58,10,10,32,32,32,32,99,111,100,101,32,32,32,32,32,32,32,32,32,32,99,111,100,101,32,111,98,106,101,99,116,10,32,32,32,32,99,97,108,108,99,111,117,110,116,32,32,32,32,32,104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,119,97,115,32,99,97,108,108,101,100,10,32,32,32,32,114,101,99,99,97,108,108,99,111,117,110,116,32,32,104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,99,97,108,108,101,100,32,114,101,99,117,114,115,105,118,101,108,121,10,32,32,32,32,116,111,116,97,108,116,105,109,101,32,32,32,32,32,116,111,116,97,108,32,116,105,109,101,32,105,110,32,116,104,105,115,32,101,110,116,114,121,10,32,32,32,32,105,110,108,105,110,101,116,105,109,101,32,32,32,32,105,110,108,105,110,101,32,116,105,109,101,32,105,110,32,116,104,105,115,32,101,110,116,114,121,32,40,110,111,116,32,105,110,32,115,117,98,99,97,108,108,115,41,10,32,32,32,32,99,97,108,108,115,32,32,32,32,32,32,32,32,32,100,101,116,97,105,108,115,32,111,102,32,116,104,101,32,99,97,108,108,115,10,10,84,104,101,32,99,97,108,108,115,32,97,116,116,114,105,98,117,116,101,32,105,115,32,101,105,116,104,101,114,32,78,111,110,101,32,111,114,32,97,32,108,105,115,116,32,111,102,10,112,114,111,102,105,108,101,114,95,115,117,98,101,110,116,114,121,32,111,98,106,101,99,116,115,58,10,10,32,32,32,32,99,111,100,101,32,32,32,32,32,32,32,32,32,32,99,97,108,108,101,100,32,99,111,100,101,32,111,98,106,101,99,116,10,32,32,32,32,99,97,108,108,99,111,117,110,116,32,32,32,32,32,104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,105,115,32,99,97,108,108,101,100,10,32,32,32,32,114,101,99,99,97,108,108,99,111,117,110,116,32,32,104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,105,115,32,99,97,108,108,101,100,32,114,101,99,117,114,115,105,118,101,108,121,10,32,32,32,32,116,111,116,97,108,116,105,109,101,32,32,32,32,32,116,111,116,97,108,32,116,105,109,101,32,115,112,101,110,116,32,105,110,32,116,104,105,115,32,99,97,108,108,10,32,32,32,32,105,110,108,105,110,101,116,105,109,101,32,32,32,32,105,110,108,105,110,101,32,116,105,109,101,32,40,110,111,116,32,105,110,32,102,117,114,116,104,101,114,32,115,117,98,99,97,108,108,115,41,10,0,0,0,0], "i8", ALLOC_NORMAL);
_getopt_internal_posixly_correct=allocate([255,255,255,255], "i8", ALLOC_NORMAL);
_enable_doc=allocate([101,110,97,98,108,101,40,115,117,98,99,97,108,108,115,61,84,114,117,101,44,32,98,117,105,108,116,105,110,115,61,84,114,117,101,41,10,10,83,116,97,114,116,32,99,111,108,108,101,99,116,105,110,103,32,112,114,111,102,105,108,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,46,10,73,102,32,39,115,117,98,99,97,108,108,115,39,32,105,115,32,84,114,117,101,44,32,97,108,115,111,32,114,101,99,111,114,100,115,32,102,111,114,32,101,97,99,104,32,102,117,110,99,116,105,111,110,10,115,116,97,116,105,115,116,105,99,115,32,115,101,112,97,114,97,116,101,100,32,97,99,99,111,114,100,105,110,103,32,116,111,32,105,116,115,32,99,117,114,114,101,110,116,32,99,97,108,108,101,114,46,10,73,102,32,39,98,117,105,108,116,105,110,115,39,32,105,115,32,84,114,117,101,44,32,114,101,99,111,114,100,115,32,116,104,101,32,116,105,109,101,32,115,112,101,110,116,32,105,110,10,98,117,105,108,116,45,105,110,32,102,117,110,99,116,105,111,110,115,32,115,101,112,97,114,97,116,101,108,121,32,102,114,111,109,32,116,104,101,105,114,32,99,97,108,108,101,114,46,10,0,0,0,0], "i8", ALLOC_NORMAL);
_empty_tuple=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_disable_doc=allocate([100,105,115,97,98,108,101,40,41,10,10,83,116,111,112,32,99,111,108,108,101,99,116,105,110,103,32,112,114,111,102,105,108,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,46,10,0,0], "i8", ALLOC_NORMAL);
_clear_doc=allocate([99,108,101,97,114,40,41,10,10,67,108,101,97,114,32,97,108,108,32,112,114,111,102,105,108,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,32,99,111,108,108,101,99,116,101,100,32,115,111,32,102,97,114,46,10,0], "i8", ALLOC_NORMAL);
_ambig=allocate([97,109,98,105,103,117,111,117,115,32,111,112,116,105,111,110,32,45,45,32,37,46,42,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str949=allocate([37,115,58,32,0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,105,115,32,99,97,108,108,101,100,0,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([99,97,108,108,99,111,117,110,116,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([99,97,108,108,101,100,32,99,111,100,101,32,111,98,106,101,99,116,32,111,114,32,98,117,105,108,116,45,105,110,32,102,117,110,99,116,105,111,110,32,110,97,109,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([99,111,100,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str547=allocate([80,79,83,73,88,76,89,95,67,79,82,82,69,67,84,0], "i8", ALLOC_NORMAL);
__str5=allocate([95,108,115,112,114,111,102,46,112,114,111,102,105,108,101,114,95,115,117,98,101,110,116,114,121,0,0,0], "i8", ALLOC_NORMAL);
__str42=allocate([109,97,120,32,115,121,115,116,101,109,32,98,121,116,101,115,32,61,32,37,49,48,108,117,10,0,0,0], "i8", ALLOC_NORMAL);
__str41=allocate([40,40,79,108,108,100,100,41,41,0,0,0], "i8", ALLOC_NORMAL);
__str40=allocate([40,40,79,108,108,100,100,79,41,41,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([112,114,111,102,105,108,101,114,95,115,117,98,101,110,116,114,121,0,0,0], "i8", ALLOC_NORMAL);
__str39=allocate([60,98,117,105,108,116,45,105,110,32,109,101,116,104,111,100,32,37,115,62,0,0,0,0], "i8", ALLOC_NORMAL);
__str38=allocate([60,37,115,62,0,0,0,0], "i8", ALLOC_NORMAL);
__str37=allocate([60,37,115,46,37,115,62,0], "i8", ALLOC_NORMAL);
__str36=allocate([95,95,98,117,105,108,116,105,110,95,95,0], "i8", ALLOC_NORMAL);
__str35=allocate([124,105,105,58,101,110,97,98,108,101,0,0], "i8", ALLOC_NORMAL);
__str345=allocate([115,116,100,58,58,98,97,100,95,97,108,108,111,99,0,0], "i8", ALLOC_NORMAL);
__str34=allocate([109,101,109,111,114,121,32,119,97,115,32,101,120,104,97,117,115,116,101,100,32,119,104,105,108,101,32,112,114,111,102,105,108,105,110,103,0,0,0,0], "i8", ALLOC_NORMAL);
__str33=allocate([99,108,101,97,114,0,0,0], "i8", ALLOC_NORMAL);
__str32=allocate([100,105,115,97,98,108,101,0], "i8", ALLOC_NORMAL);
__str31=allocate([101,110,97,98,108,101,0,0], "i8", ALLOC_NORMAL);
__str30=allocate([103,101,116,115,116,97,116,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([112,114,111,102,105,108,101,114,95,101,110,116,114,121,0,0], "i8", ALLOC_NORMAL);
__str29=allocate([124,79,100,105,105,58,80,114,111,102,105,108,101,114,0,0], "i8", ALLOC_NORMAL);
__str28=allocate([98,117,105,108,116,105,110,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str27=allocate([115,117,98,99,97,108,108,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str26=allocate([116,105,109,101,117,110,105,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str25=allocate([116,105,109,101,114,0,0,0], "i8", ALLOC_NORMAL);
__str2452=allocate([37,115,58,32,0,0,0,0], "i8", ALLOC_NORMAL);
__str244=allocate([105,110,32,117,115,101,32,98,121,116,101,115,32,32,32,32,32,61,32,37,49,48,108,117,10,0,0,0], "i8", ALLOC_NORMAL);
__str24=allocate([95,108,115,112,114,111,102,46,80,114,111,102,105,108,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str23=allocate([100,101,116,97,105,108,115,32,111,102,32,116,104,101,32,99,97,108,108,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str221=allocate([37,115,10,0], "i8", ALLOC_NORMAL);
__str22=allocate([99,97,108,108,115,0,0,0], "i8", ALLOC_NORMAL);
__str211=allocate([37,115,10,0], "i8", ALLOC_NORMAL);
__str21=allocate([105,110,108,105,110,101,32,116,105,109,101,32,105,110,32,116,104,105,115,32,101,110,116,114,121,32,40,110,111,116,32,105,110,32,115,117,98,99,97,108,108,115,41,0], "i8", ALLOC_NORMAL);
__str20=allocate([116,111,116,97,108,32,116,105,109,101,32,105,110,32,116,104,105,115,32,101,110,116,114,121,0,0,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([80,114,111,102,105,108,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str1951=allocate([37,115,58,32,0,0,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,99,97,108,108,101,100,32,114,101,99,117,114,115,105,118,101,108,121,0,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,119,97,115,32,99,97,108,108,101,100,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([99,111,100,101,32,111,98,106,101,99,116,32,111,114,32,98,117,105,108,116,45,105,110,32,102,117,110,99,116,105,111,110,32,110,97,109,101,0,0,0], "i8", ALLOC_NORMAL);
__str1648=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([95,108,115,112,114,111,102,46,112,114,111,102,105,108,101,114,95,101,110,116,114,121,0,0], "i8", ALLOC_NORMAL);
__str1550=allocate([37,115,58,32,0,0,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([105,110,108,105,110,101,32,116,105,109,101,32,40,110,111,116,32,105,110,32,102,117,114,116,104,101,114,32,115,117,98,99,97,108,108,115,41,0,0,0], "i8", ALLOC_NORMAL);
__str1446=allocate([98,97,100,95,97,114,114,97,121,95,110,101,119,95,108,101,110,103,116,104,0,0,0,0], "i8", ALLOC_NORMAL);
__str143=allocate([115,121,115,116,101,109,32,98,121,116,101,115,32,32,32,32,32,61,32,37,49,48,108,117,10,0,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([105,110,108,105,110,101,116,105,109,101,0,0], "i8", ALLOC_NORMAL);
__str13=allocate([116,111,116,97,108,32,116,105,109,101,32,115,112,101,110,116,32,105,110,32,116,104,105,115,32,99,97,108,108,0,0,0], "i8", ALLOC_NORMAL);
__str125=allocate([10,0,0,0], "i8", ALLOC_NORMAL);
__str120=allocate([58,32,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([116,111,116,97,108,116,105,109,101,0,0,0], "i8", ALLOC_NORMAL);
__str116=allocate([10,0,0,0], "i8", ALLOC_NORMAL);
__str110=allocate([58,32,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,105,115,32,99,97,108,108,101,100,32,114,101,99,117,114,115,105,118,101,108,121,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([114,101,99,99,97,108,108,99,111,117,110,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([70,97,115,116,32,112,114,111,102,105,108,101,114,0,0,0], "i8", ALLOC_NORMAL);
__str=allocate([95,108,115,112,114,111,102,0], "i8", ALLOC_NORMAL);
__gm_=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__ZTVSt9bad_alloc=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__ZTVSt20bad_array_new_length=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__ZTSSt9bad_alloc=allocate([83,116,57,98,97,100,95,97,108,108,111,99,0,0,0,0], "i8", ALLOC_NORMAL);
__ZTSSt20bad_array_new_length=allocate([83,116,50,48,98,97,100,95,97,114,114,97,121,95,110,101,119,95,108,101,110,103,116,104,0,0,0,0], "i8", ALLOC_NORMAL);
__ZTISt9bad_alloc=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__ZTISt20bad_array_new_length=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__ZSt7nothrow=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__ZL13__new_handler=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_StatsSubEntryType=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_StatsEntryType=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_PyProfiler_Type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,5,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_profiler_subentry_fields)>>2)]=((__str6)|0);
HEAP32[(((_profiler_subentry_fields)+(4))>>2)]=((__str7)|0);
HEAP32[(((_profiler_subentry_fields)+(8))>>2)]=((__str8)|0);
HEAP32[(((_profiler_subentry_fields)+(12))>>2)]=((__str9)|0);
HEAP32[(((_profiler_subentry_fields)+(16))>>2)]=((__str10)|0);
HEAP32[(((_profiler_subentry_fields)+(20))>>2)]=((__str11)|0);
HEAP32[(((_profiler_subentry_fields)+(24))>>2)]=((__str12)|0);
HEAP32[(((_profiler_subentry_fields)+(28))>>2)]=((__str13)|0);
HEAP32[(((_profiler_subentry_fields)+(32))>>2)]=((__str14)|0);
HEAP32[(((_profiler_subentry_fields)+(36))>>2)]=((__str15)|0);
HEAP32[((_profiler_subentry_desc)>>2)]=((__str5)|0);
HEAP32[(((_profiler_subentry_desc)+(8))>>2)]=((_profiler_subentry_fields)|0);
HEAP32[((_profiler_methods)>>2)]=((__str30)|0);
HEAP32[(((_profiler_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 2));
HEAP32[(((_profiler_methods)+(12))>>2)]=((_getstats_doc)|0);
HEAP32[(((_profiler_methods)+(16))>>2)]=((__str31)|0);
HEAP32[(((_profiler_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 8));
HEAP32[(((_profiler_methods)+(28))>>2)]=((_enable_doc)|0);
HEAP32[(((_profiler_methods)+(32))>>2)]=((__str32)|0);
HEAP32[(((_profiler_methods)+(36))>>2)]=((FUNCTION_TABLE_OFFSET + 56));
HEAP32[(((_profiler_methods)+(44))>>2)]=((_disable_doc)|0);
HEAP32[(((_profiler_methods)+(48))>>2)]=((__str33)|0);
HEAP32[(((_profiler_methods)+(52))>>2)]=((FUNCTION_TABLE_OFFSET + 52));
HEAP32[(((_profiler_methods)+(60))>>2)]=((_clear_doc)|0);
HEAP32[((_profiler_init_kwlist)>>2)]=((__str25)|0);
HEAP32[(((_profiler_init_kwlist)+(4))>>2)]=((__str26)|0);
HEAP32[(((_profiler_init_kwlist)+(8))>>2)]=((__str27)|0);
HEAP32[(((_profiler_init_kwlist)+(12))>>2)]=((__str28)|0);
HEAP32[((_profiler_entry_fields)>>2)]=((__str6)|0);
HEAP32[(((_profiler_entry_fields)+(4))>>2)]=((__str17)|0);
HEAP32[(((_profiler_entry_fields)+(8))>>2)]=((__str8)|0);
HEAP32[(((_profiler_entry_fields)+(12))>>2)]=((__str18)|0);
HEAP32[(((_profiler_entry_fields)+(16))>>2)]=((__str10)|0);
HEAP32[(((_profiler_entry_fields)+(20))>>2)]=((__str19)|0);
HEAP32[(((_profiler_entry_fields)+(24))>>2)]=((__str12)|0);
HEAP32[(((_profiler_entry_fields)+(28))>>2)]=((__str20)|0);
HEAP32[(((_profiler_entry_fields)+(32))>>2)]=((__str14)|0);
HEAP32[(((_profiler_entry_fields)+(36))>>2)]=((__str21)|0);
HEAP32[(((_profiler_entry_fields)+(40))>>2)]=((__str22)|0);
HEAP32[(((_profiler_entry_fields)+(44))>>2)]=((__str23)|0);
HEAP32[((_profiler_entry_desc)>>2)]=((__str16)|0);
HEAP32[(((_profiler_entry_desc)+(8))>>2)]=((_profiler_entry_fields)|0);
HEAP32[((_profiler_enable_kwlist)>>2)]=((__str27)|0);
HEAP32[(((_profiler_enable_kwlist)+(4))>>2)]=((__str28)|0);
HEAP32[((_place)>>2)]=((__str1648)|0);
HEAP32[(((__ZTVSt9bad_alloc)+(4))>>2)]=__ZTISt9bad_alloc;
HEAP32[(((__ZTVSt9bad_alloc)+(8))>>2)]=((FUNCTION_TABLE_OFFSET + 26));
HEAP32[(((__ZTVSt9bad_alloc)+(12))>>2)]=((FUNCTION_TABLE_OFFSET + 14));
HEAP32[(((__ZTVSt9bad_alloc)+(16))>>2)]=((FUNCTION_TABLE_OFFSET + 22));
HEAP32[(((__ZTVSt20bad_array_new_length)+(4))>>2)]=__ZTISt20bad_array_new_length;
HEAP32[(((__ZTVSt20bad_array_new_length)+(8))>>2)]=((FUNCTION_TABLE_OFFSET + 26));
HEAP32[(((__ZTVSt20bad_array_new_length)+(12))>>2)]=((FUNCTION_TABLE_OFFSET + 6));
HEAP32[(((__ZTVSt20bad_array_new_length)+(16))>>2)]=((FUNCTION_TABLE_OFFSET + 48));
HEAP32[((__ZTISt9bad_alloc)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTISt9bad_alloc)+(4))>>2)]=((__ZTSSt9bad_alloc)|0);
HEAP32[(((__ZTISt9bad_alloc)+(8))>>2)]=__ZTISt9exception;
HEAP32[((__ZTISt20bad_array_new_length)>>2)]=(((__ZTVN10__cxxabiv120__si_class_type_infoE+8)|0));
HEAP32[(((__ZTISt20bad_array_new_length)+(4))>>2)]=((__ZTSSt20bad_array_new_length)|0);
HEAP32[(((__ZTISt20bad_array_new_length)+(8))>>2)]=__ZTISt9bad_alloc;
HEAP32[(((_PyProfiler_Type)+(12))>>2)]=((__str24)|0);
HEAP32[(((_PyProfiler_Type)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 38));
HEAP32[(((_PyProfiler_Type)+(88))>>2)]=((_profiler_doc)|0);
HEAP32[(((_PyProfiler_Type)+(116))>>2)]=((_profiler_methods)|0);
HEAP32[(((_PyProfiler_Type)+(148))>>2)]=((FUNCTION_TABLE_OFFSET + 50));
HEAP32[(((_PyProfiler_Type)+(152))>>2)]=(FUNCTION_TABLE_OFFSET + 34);
HEAP32[(((_PyProfiler_Type)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 10);
HEAP32[(((_PyProfiler_Type)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 32);
__ZNSt9bad_allocC1Ev = (FUNCTION_TABLE_OFFSET + 12);
__ZNSt9bad_allocD1Ev = (FUNCTION_TABLE_OFFSET + 26);
__ZNSt20bad_array_new_lengthC1Ev = (FUNCTION_TABLE_OFFSET + 40);
__ZNSt20bad_array_new_lengthD1Ev = ((FUNCTION_TABLE_OFFSET + 26));
__ZNSt20bad_array_new_lengthD2Ev = ((FUNCTION_TABLE_OFFSET + 26));
_err = (FUNCTION_TABLE_OFFSET + 42);
_errx = (FUNCTION_TABLE_OFFSET + 16);
_warn1 = (FUNCTION_TABLE_OFFSET + 44);
_warnx = (FUNCTION_TABLE_OFFSET + 54);
_verr = (FUNCTION_TABLE_OFFSET + 24);
_verrx = (FUNCTION_TABLE_OFFSET + 20);
_vwarn = (FUNCTION_TABLE_OFFSET + 28);
_vwarnx = (FUNCTION_TABLE_OFFSET + 46);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_profiler_getstats,0,_statsForSubEntry,0,__ZNSt20bad_array_new_lengthD0Ev,0,_profiler_enable,0,_PyType_GenericNew
,0,__ZNSt9bad_allocC2Ev,0,__ZNSt9bad_allocD0Ev,0,__errx,0,_statsForEntry,0,__verrx
,0,__ZNKSt9bad_alloc4whatEv,0,__verr,0,__ZNSt9bad_allocD2Ev,0,__vwarn,0,_freeEntry
,0,_PyObject_Free,0,_PyType_GenericAlloc,0,_freeSubEntry,0,_profiler_dealloc,0,__ZNSt20bad_array_new_lengthC2Ev
,0,__err,0,_warn,0,__vwarnx,0,__ZNKSt20bad_array_new_length4whatEv,0,_profiler_init,0,_profiler_clear,0,__warnx,0,_profiler_disable,0,_profiler_callback,0]);
// EMSCRIPTEN_START_FUNCS
function _setSubcalls(r1,r2){var r3;if((r2|0)==0){r3=r1+20|0;HEAP32[r3>>2]=HEAP32[r3>>2]&-3;return}if((r2|0)<=0){return}r2=r1+20|0;HEAP32[r2>>2]=HEAP32[r2>>2]|2;return}function _setBuiltins(r1,r2){var r3;if((r2|0)==0){r3=r1+20|0;HEAP32[r3>>2]=HEAP32[r3>>2]&-5;return}if((r2|0)<=0){return}r2=r1+20|0;HEAP32[r2>>2]=HEAP32[r2>>2]|4;return}function _init_lsprof(){var r1,r2;r1=_Py_InitModule4_64(__str|0,_moduleMethods|0,__str1|0,0,1013);if((r1|0)==0){return}r2=_PyModule_GetDict(r1);if((_PyType_Ready(_PyProfiler_Type)|0)<0){return}_PyDict_SetItemString(r2,__str2|0,_PyProfiler_Type);if(!HEAP8[_initialized_b]){_PyStructSequence_InitType(_StatsEntryType,_profiler_entry_desc);_PyStructSequence_InitType(_StatsSubEntryType,_profiler_subentry_desc)}HEAP32[_StatsEntryType>>2]=HEAP32[_StatsEntryType>>2]+1|0;HEAP32[_StatsSubEntryType>>2]=HEAP32[_StatsSubEntryType>>2]+1|0;_PyModule_AddObject(r1,__str3|0,_StatsEntryType);_PyModule_AddObject(r1,__str4|0,_StatsSubEntryType);r1=_PyTuple_New(0);HEAP32[_empty_tuple>>2]=r1;HEAP8[_initialized_b]=1;return}function _profiler_dealloc(r1){var r2,r3,r4,r5;if((HEAP32[r1+20>>2]&1|0)!=0){_PyEval_SetProfile(0,0)}_flush_unmatched(r1);_clearEntries(r1);r2=r1+24|0;r3=HEAP32[r2>>2];do{if((r3|0)!=0){r4=r3|0;r5=HEAP32[r4>>2]-1|0;HEAP32[r4>>2]=r5;if((r5|0)!=0){break}r5=HEAP32[r2>>2];FUNCTION_TABLE[HEAP32[HEAP32[r5+4>>2]+24>>2]](r5)}}while(0);FUNCTION_TABLE[HEAP32[HEAP32[r1+4>>2]+160>>2]](r1);return}function _profiler_init(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11;r4=STACKTOP;STACKTOP=STACKTOP+20|0;r5=r4,r6=r5>>2;r7=r4+4,r8=r7>>2;r9=r4+12;r10=r4+16;HEAP32[r6]=0;HEAPF64[tempDoublePtr>>3]=0,HEAP32[r8]=HEAP32[tempDoublePtr>>2],HEAP32[r8+1]=HEAP32[tempDoublePtr+4>>2];HEAP32[r9>>2]=1;HEAP32[r10>>2]=1;if((_PyArg_ParseTupleAndKeywords(r2,r3,__str29|0,_profiler_init_kwlist|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r5,HEAP32[tempInt+4>>2]=r7,HEAP32[tempInt+8>>2]=r9,HEAP32[tempInt+12>>2]=r10,tempInt))|0)==0){r11=-1;STACKTOP=r4;return r11}_setSubcalls(r1,HEAP32[r9>>2]);_setBuiltins(r1,HEAP32[r10>>2]);r10=r1+24|0;r9=HEAP32[r10>>2];HEAP32[r10>>2]=HEAP32[r6];r10=HEAP32[r6];if((r10|0)!=0){r6=r10|0;HEAP32[r6>>2]=HEAP32[r6>>2]+1|0}do{if((r9|0)!=0){r6=r9|0;r10=HEAP32[r6>>2]-1|0;HEAP32[r6>>2]=r10;if((r10|0)!=0){break}FUNCTION_TABLE[HEAP32[HEAP32[r9+4>>2]+24>>2]](r9)}}while(0);r9=(HEAP32[tempDoublePtr>>2]=HEAP32[r8],HEAP32[tempDoublePtr+4>>2]=HEAP32[r8+1],HEAPF64[tempDoublePtr>>3]);r8=r1+28|0;HEAPF64[tempDoublePtr>>3]=r9,HEAP32[r8>>2]=HEAP32[tempDoublePtr>>2],HEAP32[r8+4>>2]=HEAP32[tempDoublePtr+4>>2];r11=0;STACKTOP=r4;return r11}function _profiler_getstats(r1,r2){var r3,r4,r5,r6;r2=STACKTOP;STACKTOP=STACKTOP+16|0;r3=r2;if((_pending_exception(r1)|0)!=0){r4=0;STACKTOP=r2;return r4}do{if((HEAP32[r1+24>>2]|0)==0){r5=r3+8|0;HEAPF64[tempDoublePtr>>3]=1e-6,HEAP32[r5>>2]=HEAP32[tempDoublePtr>>2],HEAP32[r5+4>>2]=HEAP32[tempDoublePtr+4>>2]}else{r5=r1+28|0;r6=(HEAP32[tempDoublePtr>>2]=HEAP32[r5>>2],HEAP32[tempDoublePtr+4>>2]=HEAP32[r5+4>>2],HEAPF64[tempDoublePtr>>3]);r5=(r3+8|0)>>2;if(r6>0){HEAPF64[tempDoublePtr>>3]=r6,HEAP32[r5]=HEAP32[tempDoublePtr>>2],HEAP32[r5+1]=HEAP32[tempDoublePtr+4>>2];break}else{HEAPF64[tempDoublePtr>>3]=2.3283064365386963e-10,HEAP32[r5]=HEAP32[tempDoublePtr>>2],HEAP32[r5+1]=HEAP32[tempDoublePtr+4>>2];break}}}while(0);r5=_PyList_New(0);r6=(r3|0)>>2;HEAP32[r6]=r5;if((r5|0)==0){r4=0;STACKTOP=r2;return r4}r5=(_RotatingTree_Enum(HEAP32[r1+8>>2],FUNCTION_TABLE_OFFSET+18,r3)|0)==0;r3=HEAP32[r6];if(r5){r4=r3;STACKTOP=r2;return r4}r5=r3|0;r3=HEAP32[r5>>2]-1|0;HEAP32[r5>>2]=r3;if((r3|0)!=0){r4=0;STACKTOP=r2;return r4}r3=HEAP32[r6];FUNCTION_TABLE[HEAP32[HEAP32[r3+4>>2]+24>>2]](r3);r4=0;STACKTOP=r2;return r4}function _profiler_enable(r1,r2,r3){var r4,r5,r6,r7;r4=STACKTOP;STACKTOP=STACKTOP+8|0;r5=r4;r6=r4+4;HEAP32[r5>>2]=-1;HEAP32[r6>>2]=-1;if((_PyArg_ParseTupleAndKeywords(r2,r3,__str35|0,_profiler_enable_kwlist|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r5,HEAP32[tempInt+4>>2]=r6,tempInt))|0)==0){r7=0;STACKTOP=r4;return r7}_setSubcalls(r1,HEAP32[r5>>2]);_setBuiltins(r1,HEAP32[r6>>2]);_PyEval_SetProfile(FUNCTION_TABLE_OFFSET+58,r1);r6=r1+20|0;HEAP32[r6>>2]=HEAP32[r6>>2]|1;HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;r7=__Py_NoneStruct;STACKTOP=r4;return r7}function _profiler_disable(r1,r2){var r3;r2=r1+20|0;HEAP32[r2>>2]=HEAP32[r2>>2]&-2;_PyEval_SetProfile(0,0);_flush_unmatched(r1);if((_pending_exception(r1)|0)!=0){r3=0;return r3}HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;r3=__Py_NoneStruct;return r3}function _profiler_clear(r1,r2){_clearEntries(r1);HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;return __Py_NoneStruct}function _clearEntries(r1){var r2,r3,r4;r2=r1+8|0;_RotatingTree_Enum(HEAP32[r2>>2],FUNCTION_TABLE_OFFSET+30,0);HEAP32[r2>>2]=0;r2=r1+12|0;r3=HEAP32[r2>>2];if((r3|0)!=0){_free(r3);HEAP32[r2>>2]=0}r2=(r1+16|0)>>2;r1=HEAP32[r2];if((r1|0)==0){HEAP32[r2]=0;return}else{r4=r1}while(1){HEAP32[r2]=HEAP32[r4+16>>2];_free(r4);r1=HEAP32[r2];if((r1|0)==0){break}else{r4=r1}}HEAP32[r2]=0;return}function _freeEntry(r1,r2){var r3,r4,r5;_RotatingTree_Enum(HEAP32[r1+44>>2],FUNCTION_TABLE_OFFSET+36,0);r2=r1+12|0;r3=HEAP32[r2>>2]|0;r4=HEAP32[r3>>2]-1|0;HEAP32[r3>>2]=r4;if((r4|0)!=0){r5=r1;_free(r5);return 0}r4=HEAP32[r2>>2];FUNCTION_TABLE[HEAP32[HEAP32[r4+4>>2]+24>>2]](r4);r5=r1;_free(r5);return 0}function _freeSubEntry(r1,r2){_free(r1);return 0}function _flush_unmatched(r1){var r2,r3,r4;r2=(r1+12|0)>>2;r3=HEAP32[r2];if((r3|0)==0){return}else{r4=r3}while(1){r3=HEAP32[r4+20>>2];if((r3|0)==0){HEAP32[r2]=HEAP32[r4+16>>2]}else{_Stop(r1,r4,r3)}_free(r4);r3=HEAP32[r2];if((r3|0)==0){break}else{r4=r3}}return}function _pending_exception(r1){var r2,r3;r2=r1+20|0;r1=HEAP32[r2>>2];if((r1&256|0)==0){r3=0;return r3}HEAP32[r2>>2]=r1-256|0;_PyErr_SetString(HEAP32[_PyExc_MemoryError>>2],__str34|0);r3=-1;return r3}function _Stop(r1,r2,r3){var r4,r5,r6,r7,r8,r9;if((HEAP32[r1+24>>2]|0)==0){r4=_hpTimer();r5=tempRet0;r6=r4}else{r4=_CallExternalTimer(r1);r5=tempRet0;r6=r4}r4=r2|0;r7=_i64Subtract(r6,r5,HEAP32[r4>>2],HEAP32[r4+4>>2]);r4=tempRet0;r5=r2+8|0;r6=_i64Subtract(r7,r4,HEAP32[r5>>2],HEAP32[r5+4>>2]);r5=tempRet0;r8=(r2+16|0)>>2;r2=HEAP32[r8];if((r2|0)!=0){r9=(r2+8|0)>>2;HEAP32[r9]=_i64Add(HEAP32[r9],HEAP32[r9+1],r7,r4);HEAP32[r9+1]=tempRet0}HEAP32[r1+12>>2]=HEAP32[r8];r9=r3+40|0;r2=HEAP32[r9>>2]-1|0;HEAP32[r9>>2]=r2;if((r2|0)==0){r2=(r3+16|0)>>2;HEAP32[r2]=_i64Add(HEAP32[r2],HEAP32[r2+1],r7,r4);HEAP32[r2+1]=tempRet0}else{r2=r3+36|0;HEAP32[r2>>2]=HEAP32[r2>>2]+1|0}r2=(r3+24|0)>>2;HEAP32[r2]=_i64Add(HEAP32[r2],HEAP32[r2+1],r6,r5);HEAP32[r2+1]=tempRet0;r2=r3+32|0;HEAP32[r2>>2]=HEAP32[r2>>2]+1|0;if((HEAP32[r1+20>>2]&2|0)==0){return}r1=HEAP32[r8];if((r1|0)==0){return}r8=_getSubEntry(HEAP32[r1+20>>2],r3);if((r8|0)==0){return}r3=r8+36|0;r1=HEAP32[r3>>2]-1|0;HEAP32[r3>>2]=r1;if((r1|0)==0){r1=(r8+12|0)>>2;HEAP32[r1]=_i64Add(HEAP32[r1],HEAP32[r1+1],r7,r4);HEAP32[r1+1]=tempRet0}else{r1=r8+32|0;HEAP32[r1>>2]=HEAP32[r1>>2]+1|0}r1=(r8+20|0)>>2;HEAP32[r1]=_i64Add(HEAP32[r1],HEAP32[r1+1],r6,r5);HEAP32[r1+1]=tempRet0;r1=r8+28|0;HEAP32[r1>>2]=HEAP32[r1>>2]+1|0;return}function _CallExternalTimer(r1){var r2,r3,r4,r5,r6,r7,r8;r2=(r1+24|0)>>2;r3=_PyObject_Call(HEAP32[r2],HEAP32[_empty_tuple>>2],0);if((r3|0)==0){_PyErr_WriteUnraisable(HEAP32[r2]);r4=0;r5=0;return tempRet0=r4,r5}r6=r1+28|0;if((HEAP32[tempDoublePtr>>2]=HEAP32[r6>>2],HEAP32[tempDoublePtr+4>>2]=HEAP32[r6+4>>2],HEAPF64[tempDoublePtr>>3])>0){r6=_PyLong_AsLongLong(r3);r7=tempRet0;r8=r6}else{r6=_PyFloat_AsDouble(r3)*4294967296;r7=Math.min(Math.floor(r6/4294967296),4294967295)>>>0;r8=r6>>>0}r6=r3|0;r1=HEAP32[r6>>2]-1|0;HEAP32[r6>>2]=r1;if((r1|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r3+4>>2]+24>>2]](r3)}if((_PyErr_Occurred()|0)==0){r4=r7;r5=r8;return tempRet0=r4,r5}_PyErr_WriteUnraisable(HEAP32[r2]);r4=0;r5=0;return tempRet0=r4,r5}function _hpTimer(){var r1,r2,r3,r4;r1=STACKTOP;STACKTOP=STACKTOP+8|0;r2=r1;_gettimeofday(r2,0);r3=HEAP32[r2>>2];r4=___muldi3(r3,(r3|0)<0?-1:0,1e6,0);r3=HEAP32[r2+4>>2];r2=_i64Add(r4,tempRet0,r3,(r3|0)<0?-1:0);r3=tempRet0;STACKTOP=r1;return tempRet0=r3,r2}function _getSubEntry(r1,r2){return _RotatingTree_Get(r1+44|0,r2)}function _profiler_callback(r1,r2,r3,r4){if((r3|0)==3){_ptrace_leave_call(r1,HEAP32[r2+16>>2]);return 0}else if((r3|0)==6|(r3|0)==5){if((HEAP32[r1+20>>2]&4|0)==0){return 0}if((HEAP32[r4+4>>2]|0)!=(_PyCFunction_Type|0)){return 0}_ptrace_leave_call(r1,HEAP32[r4+8>>2]);return 0}else if((r3|0)==4){if((HEAP32[r1+20>>2]&4|0)==0){return 0}if((HEAP32[r4+4>>2]|0)!=(_PyCFunction_Type|0)){return 0}_ptrace_enter_call(r1,HEAP32[r4+8>>2],r4);return 0}else if((r3|0)==0){r3=HEAP32[r2+16>>2];_ptrace_enter_call(r1,r3,r3);return 0}else{return 0}}function _ptrace_enter_call(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13;r4=0;r5=STACKTOP;STACKTOP=STACKTOP+12|0;r6=r5;r7=r5+4;r8=r5+8;r9=r1;_PyErr_Fetch(r6,r7,r8);r10=_getEntry(r9,r2);do{if((r10|0)==0){r11=_newProfilerEntry(r9,r2,r3);if((r11|0)==0){break}else{r12=r11;r4=151;break}}else{r12=r10;r4=151}}while(0);L181:do{if(r4==151){r10=r1+16|0;r3=HEAP32[r10>>2];do{if((r3|0)==0){r2=_malloc(24);if((r2|0)!=0){r13=r2;break}r2=r1+20|0;HEAP32[r2>>2]=HEAP32[r2>>2]|256;break L181}else{HEAP32[r10>>2]=HEAP32[r3+16>>2];r13=r3}}while(0);_initContext(r9,r13,r12)}}while(0);_PyErr_Restore(HEAP32[r6>>2],HEAP32[r7>>2],HEAP32[r8>>2]);STACKTOP=r5;return}function _ptrace_leave_call(r1,r2){var r3,r4,r5,r6;r3=r1;r4=r1+12|0;r5=HEAP32[r4>>2];if((r5|0)==0){return}r6=_getEntry(r3,r2);if((r6|0)==0){HEAP32[r4>>2]=HEAP32[r5+16>>2]}else{_Stop(r3,r5,r6)}r6=r1+16|0;HEAP32[r5+16>>2]=HEAP32[r6>>2];HEAP32[r6>>2]=r5;return}function _getEntry(r1,r2){return _RotatingTree_Get(r1+8|0,r2)}function _newProfilerEntry(r1,r2,r3){var r4,r5,r6;r4=_malloc(48);if((r4|0)==0){r5=r1+20|0;HEAP32[r5>>2]=HEAP32[r5>>2]|256;r6=0;return r6}r5=_normalizeUserObj(r3);if((r5|0)==0){_PyErr_Clear();_free(r4);r3=r1+20|0;HEAP32[r3>>2]=HEAP32[r3>>2]|256;r6=0;return r6}else{HEAP32[r4>>2]=r2;HEAP32[r4+12>>2]=r5;_memset(r4+16|0,0,32);_RotatingTree_Add(r1+8|0,r4);r6=r4;return r6}}function _initContext(r1,r2,r3){var r4,r5,r6,r7,r8;HEAP32[r2+20>>2]=r3;r4=r2+8|0;HEAP32[r4>>2]=0;HEAP32[r4+4>>2]=0;r4=r1+12|0;r5=r2+16|0;HEAP32[r5>>2]=HEAP32[r4>>2];HEAP32[r4>>2]=r2;r4=r3+40|0;HEAP32[r4>>2]=HEAP32[r4>>2]+1|0;do{if((HEAP32[r1+20>>2]&2|0)!=0){r4=HEAP32[r5>>2];if((r4|0)==0){break}r6=HEAP32[r4+20>>2];r4=_getSubEntry(r6,r3);if((r4|0)==0){r7=_newSubEntry(r1,r6,r3);if((r7|0)==0){break}else{r8=r7}}else{r8=r4}r4=r8+36|0;HEAP32[r4>>2]=HEAP32[r4>>2]+1|0}}while(0);if((HEAP32[r1+24>>2]|0)==0){r8=_hpTimer();r3=tempRet0;r5=r8;r8=r2|0;r4=r8|0;HEAP32[r4>>2]=r5;r7=r8+4|0;HEAP32[r7>>2]=r3;return}else{r6=_CallExternalTimer(r1);r3=tempRet0;r5=r6;r8=r2|0;r4=r8|0;HEAP32[r4>>2]=r5;r7=r8+4|0;HEAP32[r7>>2]=r3;return}}function _newSubEntry(r1,r2,r3){var r4,r5;r4=_malloc(40);if((r4|0)==0){r5=r1+20|0;HEAP32[r5>>2]=HEAP32[r5>>2]|256;r5=0;return r5}else{HEAP32[r4>>2]=r3;r3=(r4+12|0)>>2;HEAP32[r3]=0;HEAP32[r3+1]=0;HEAP32[r3+2]=0;HEAP32[r3+3]=0;HEAP32[r3+4]=0;HEAP32[r3+5]=0;HEAP32[r3+6]=0;_RotatingTree_Add(r2+44|0,r4);r5=r4;return r5}}function _randombits(r1){var r2,r3;r2=1<<r1;if(HEAP32[_random_stream>>2]>>>0<r2>>>0){r3=Math.imul(HEAP32[_random_value>>2],1082527);HEAP32[_random_value>>2]=r3;HEAP32[_random_stream>>2]=r3}r3=HEAP32[_random_stream>>2];HEAP32[_random_stream>>2]=r3>>>(r1>>>0);return r3&r2-1}function _RotatingTree_Add(r1,r2){var r3,r4,r5,r6,r7,r8;r3=HEAP32[r1>>2];L233:do{if((r3|0)==0){r4=r1}else{r5=HEAP32[r2>>2];r6=r3;while(1){r7=r5>>>0<HEAP32[r6>>2]>>>0?r6+4|0:r6+8|0;r8=HEAP32[r7>>2];if((r8|0)==0){r4=r7;break L233}else{r6=r8}}}}while(0);HEAP32[r2+4>>2]=0;HEAP32[r2+8>>2]=0;HEAP32[r4>>2]=r2;return}function _normalizeUserObj(r1){var r2,r3,r4,r5,r6,r7,r8,r9;r2=STACKTOP;if((HEAP32[r1+4>>2]|0)!=(_PyCFunction_Type|0)){r3=r1|0;HEAP32[r3>>2]=HEAP32[r3>>2]+1|0;r4=r1;STACKTOP=r2;return r4}r3=HEAP32[r1+12>>2];if((r3|0)==0){r5=HEAP32[r1+16>>2];do{if((r5|0)==0){r6=__str36|0}else{r7=HEAP32[r5+4>>2];if((HEAP32[r7+84>>2]&134217728|0)!=0){r6=r5+20|0;break}if((r7|0)!=(_PyModule_Type|0)){if((_PyType_IsSubtype(r7,_PyModule_Type)|0)==0){r6=__str36|0;break}}r7=_PyModule_GetName(r5);if((r7|0)!=0){r6=r7;break}_PyErr_Clear();r6=__str36|0}}while(0);r5=(_strcmp(r6,__str36|0)|0)==0;r7=HEAP32[HEAP32[r1+8>>2]>>2];if(r5){r4=_PyString_FromFormat(__str38|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r7,tempInt));STACKTOP=r2;return r4}else{r4=_PyString_FromFormat(__str37|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r6,HEAP32[tempInt+4>>2]=r7,tempInt));STACKTOP=r2;return r4}}else{r7=r1+8|0;r1=_PyString_FromString(HEAP32[HEAP32[r7>>2]>>2]);do{if((r1|0)!=0){r6=__PyType_Lookup(HEAP32[r3+4>>2],r1);r5=(r6|0)==0;if(!r5){r8=r6|0;HEAP32[r8>>2]=HEAP32[r8>>2]+1|0}r8=r1|0;r9=HEAP32[r8>>2]-1|0;HEAP32[r8>>2]=r9;if((r9|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r1+4>>2]+24>>2]](r1)}if(r5){break}r5=_PyObject_Repr(r6);r9=r6|0;r8=HEAP32[r9>>2]-1|0;HEAP32[r9>>2]=r8;if((r8|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r6+4>>2]+24>>2]](r6)}if((r5|0)==0){break}else{r4=r5}STACKTOP=r2;return r4}}while(0);_PyErr_Clear();r4=_PyString_FromFormat(__str39|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=HEAP32[HEAP32[r7>>2]>>2],tempInt));STACKTOP=r2;return r4}}function _statsForEntry(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11;r3=STACKTOP;r4=r1+32|0;if((HEAP32[r4>>2]|0)==0){r5=0;STACKTOP=r3;return r5}r6=r1+44|0;do{if((HEAP32[r6>>2]|0)==0){HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;HEAP32[r2+4>>2]=__Py_NoneStruct}else{r7=_PyList_New(0);r8=(r2+4|0)>>2;HEAP32[r8]=r7;if((r7|0)==0){r5=-1;STACKTOP=r3;return r5}if((_RotatingTree_Enum(HEAP32[r6>>2],FUNCTION_TABLE_OFFSET+4,r2)|0)==0){break}r7=HEAP32[r8]|0;r9=HEAP32[r7>>2]-1|0;HEAP32[r7>>2]=r9;if((r9|0)!=0){r5=-1;STACKTOP=r3;return r5}r9=HEAP32[r8];FUNCTION_TABLE[HEAP32[HEAP32[r9+4>>2]+24>>2]](r9);r5=-1;STACKTOP=r3;return r5}}while(0);r6=HEAP32[r1+12>>2];r9=HEAP32[r4>>2];r4=HEAP32[r1+36>>2];r8=r2+8|0;r7=(HEAP32[tempDoublePtr>>2]=HEAP32[r8>>2],HEAP32[tempDoublePtr+4>>2]=HEAP32[r8+4>>2],HEAPF64[tempDoublePtr>>3]);r8=r1+16|0;r10=r7*((HEAP32[r8>>2]>>>0)+(HEAP32[r8+4>>2]|0)*4294967296);r8=r1+24|0;r1=r7*((HEAP32[r8>>2]>>>0)+(HEAP32[r8+4>>2]|0)*4294967296);r8=(r2+4|0)>>2;r7=HEAP32[r8];r11=_PyObject_CallFunction(_StatsEntryType,__str40|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+32|0,HEAP32[tempInt>>2]=r6,HEAP32[tempInt+4>>2]=r9,HEAP32[tempInt+8>>2]=r4,HEAPF64[tempDoublePtr>>3]=r10,HEAP32[tempInt+12>>2]=HEAP32[tempDoublePtr>>2],HEAP32[tempInt+16>>2]=HEAP32[tempDoublePtr+4>>2],HEAPF64[tempDoublePtr>>3]=r1,HEAP32[tempInt+20>>2]=HEAP32[tempDoublePtr>>2],HEAP32[tempInt+24>>2]=HEAP32[tempDoublePtr+4>>2],HEAP32[tempInt+28>>2]=r7,tempInt));r7=HEAP32[r8]|0;r1=HEAP32[r7>>2]-1|0;HEAP32[r7>>2]=r1;if((r1|0)==0){r1=HEAP32[r8];FUNCTION_TABLE[HEAP32[HEAP32[r1+4>>2]+24>>2]](r1)}if((r11|0)==0){r5=-1;STACKTOP=r3;return r5}r1=_PyList_Append(HEAP32[r2>>2],r11);r2=r11|0;r8=HEAP32[r2>>2]-1|0;HEAP32[r2>>2]=r8;if((r8|0)!=0){r5=r1;STACKTOP=r3;return r5}FUNCTION_TABLE[HEAP32[HEAP32[r11+4>>2]+24>>2]](r11);r5=r1;STACKTOP=r3;return r5}function _statsForSubEntry(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10;r3=STACKTOP;r4=HEAP32[HEAP32[r1>>2]+12>>2];r5=HEAP32[r1+28>>2];r6=HEAP32[r1+32>>2];r7=r2+8|0;r8=(HEAP32[tempDoublePtr>>2]=HEAP32[r7>>2],HEAP32[tempDoublePtr+4>>2]=HEAP32[r7+4>>2],HEAPF64[tempDoublePtr>>3]);r7=r1+12|0;r9=r8*((HEAP32[r7>>2]>>>0)+(HEAP32[r7+4>>2]|0)*4294967296);r7=r1+20|0;r1=r8*((HEAP32[r7>>2]>>>0)+(HEAP32[r7+4>>2]|0)*4294967296);r7=_PyObject_CallFunction(_StatsSubEntryType,__str41|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+28|0,HEAP32[tempInt>>2]=r4,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r6,HEAPF64[tempDoublePtr>>3]=r9,HEAP32[tempInt+12>>2]=HEAP32[tempDoublePtr>>2],HEAP32[tempInt+16>>2]=HEAP32[tempDoublePtr+4>>2],HEAPF64[tempDoublePtr>>3]=r1,HEAP32[tempInt+20>>2]=HEAP32[tempDoublePtr>>2],HEAP32[tempInt+24>>2]=HEAP32[tempDoublePtr+4>>2],tempInt));if((r7|0)==0){r10=-1;STACKTOP=r3;return r10}r1=_PyList_Append(HEAP32[r2+4>>2],r7);r2=r7|0;r9=HEAP32[r2>>2]-1|0;HEAP32[r2>>2]=r9;if((r9|0)!=0){r10=r1;STACKTOP=r3;return r10}FUNCTION_TABLE[HEAP32[HEAP32[r7+4>>2]+24>>2]](r7);r10=r1;STACKTOP=r3;return r10}function _RotatingTree_Get(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;r3=0;r4=(_randombits(3)|0)==4;r5=HEAP32[r1>>2];r6=(r5|0)==0;if(!r4){if(r6){r7=0;return r7}else{r8=r5}while(1){r4=HEAP32[r8>>2];if((r4|0)==(r2|0)){r7=r8;r3=277;break}r9=HEAP32[(r4>>>0>r2>>>0?r8+4|0:r8+8|0)>>2];if((r9|0)==0){r7=0;r3=275;break}else{r8=r9}}if(r3==275){return r7}else if(r3==277){return r7}}if(r6){r7=0;return r7}r6=r5|0;if((HEAP32[r6>>2]|0)==(r2|0)){r7=r5;return r7}else{r10=r1;r11=r5;r12=r6}L327:while(1){r6=r11;r5=r12;while(1){r1=(_randombits(1)|0)==0;if(HEAP32[r5>>2]>>>0>r2>>>0){r8=r6+4|0;r9=HEAP32[r8>>2];if((r9|0)==0){r7=0;r3=273;break L327}if(!r1){r13=r9;r14=r8;break}r4=r9+8|0;HEAP32[r8>>2]=HEAP32[r4>>2];HEAP32[r4>>2]=r6;r15=r9}else{r9=r6+8|0;r4=HEAP32[r9>>2];if((r4|0)==0){r7=0;r3=272;break L327}if(!r1){r13=r4;r14=r9;break}r1=r4+4|0;HEAP32[r9>>2]=HEAP32[r1>>2];HEAP32[r1>>2]=r6;r15=r4}HEAP32[r10>>2]=r15;r4=r15|0;if((HEAP32[r4>>2]|0)==(r2|0)){r7=r15;r3=274;break L327}else{r6=r15;r5=r4}}r5=r13|0;if((HEAP32[r5>>2]|0)==(r2|0)){r7=r13;r3=279;break}else{r10=r14;r11=r13;r12=r5}}if(r3==272){return r7}else if(r3==273){return r7}else if(r3==274){return r7}else if(r3==279){return r7}}function _RotatingTree_Enum(r1,r2,r3){var r4,r5,r6,r7;r4=0;r5=r1;while(1){if((r5|0)==0){r6=0;r4=288;break}r1=_RotatingTree_Enum(HEAP32[r5+4>>2],r2,r3);if((r1|0)!=0){r6=r1;r4=286;break}r1=HEAP32[r5+8>>2];r7=FUNCTION_TABLE[r2](r5,r3);if((r7|0)==0){r5=r1}else{r6=r7;r4=287;break}}if(r4==286){return r6}else if(r4==288){return r6}else if(r4==287){return r6}}function _malloc(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18;do{if(r1>>>0<245){if(r1>>>0<11){r2=16}else{r2=r1+11&-8}r3=r2>>>3;r4=HEAP32[__gm_>>2];r5=r4>>>(r3>>>0);if((r5&3|0)!=0){r6=(r5&1^1)+r3|0;r7=r6<<1;r8=(r7<<2)+__gm_+40|0;r9=(r7+2<<2)+__gm_+40|0;r7=HEAP32[r9>>2];r10=r7+8|0;r11=HEAP32[r10>>2];do{if((r8|0)==(r11|0)){HEAP32[__gm_>>2]=r4&(1<<r6^-1)}else{if(r11>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}r12=r11+12|0;if((HEAP32[r12>>2]|0)==(r7|0)){HEAP32[r12>>2]=r8;HEAP32[r9>>2]=r11;break}else{_abort()}}}while(0);r11=r6<<3;HEAP32[r7+4>>2]=r11|3;r9=r7+(r11|4)|0;HEAP32[r9>>2]=HEAP32[r9>>2]|1;r13=r10;return r13}if(r2>>>0<=HEAP32[__gm_+8>>2]>>>0){r14=r2;break}if((r5|0)==0){if((HEAP32[__gm_+4>>2]|0)==0){r14=r2;break}r9=_tmalloc_small(r2);if((r9|0)==0){r14=r2;break}else{r13=r9}return r13}r9=2<<r3;r11=r5<<r3&(r9|-r9);r9=(r11&-r11)-1|0;r11=r9>>>12&16;r8=r9>>>(r11>>>0);r9=r8>>>5&8;r12=r8>>>(r9>>>0);r8=r12>>>2&4;r15=r12>>>(r8>>>0);r12=r15>>>1&2;r16=r15>>>(r12>>>0);r15=r16>>>1&1;r17=(r9|r11|r8|r12|r15)+(r16>>>(r15>>>0))|0;r15=r17<<1;r16=(r15<<2)+__gm_+40|0;r12=(r15+2<<2)+__gm_+40|0;r15=HEAP32[r12>>2];r8=r15+8|0;r11=HEAP32[r8>>2];do{if((r16|0)==(r11|0)){HEAP32[__gm_>>2]=r4&(1<<r17^-1)}else{if(r11>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}r9=r11+12|0;if((HEAP32[r9>>2]|0)==(r15|0)){HEAP32[r9>>2]=r16;HEAP32[r12>>2]=r11;break}else{_abort()}}}while(0);r11=r17<<3;r12=r11-r2|0;HEAP32[r15+4>>2]=r2|3;r16=r15;r4=r16+r2|0;HEAP32[r16+(r2|4)>>2]=r12|1;HEAP32[r16+r11>>2]=r12;r11=HEAP32[__gm_+8>>2];if((r11|0)!=0){r16=HEAP32[__gm_+20>>2];r3=r11>>>3;r11=r3<<1;r5=(r11<<2)+__gm_+40|0;r10=HEAP32[__gm_>>2];r7=1<<r3;do{if((r10&r7|0)==0){HEAP32[__gm_>>2]=r10|r7;r18=r5}else{r3=HEAP32[__gm_+(r11+2<<2)+40>>2];if(r3>>>0>=HEAP32[__gm_+16>>2]>>>0){r18=r3;break}_abort()}}while(0);HEAP32[__gm_+(r11+2<<2)+40>>2]=r16;HEAP32[r18+12>>2]=r16;HEAP32[r16+8>>2]=r18;HEAP32[r16+12>>2]=r5}HEAP32[__gm_+8>>2]=r12;HEAP32[__gm_+20>>2]=r4;r13=r8;return r13}else{if(r1>>>0>4294967231){r14=-1;break}r7=r1+11&-8;if((HEAP32[__gm_+4>>2]|0)==0){r14=r7;break}r10=_tmalloc_large(r7);if((r10|0)==0){r14=r7;break}else{r13=r10}return r13}}while(0);r1=HEAP32[__gm_+8>>2];if(r14>>>0>r1>>>0){r18=HEAP32[__gm_+12>>2];if(r14>>>0<r18>>>0){r2=r18-r14|0;HEAP32[__gm_+12>>2]=r2;r18=HEAP32[__gm_+24>>2];r10=r18;HEAP32[__gm_+24>>2]=r10+r14|0;HEAP32[r14+(r10+4)>>2]=r2|1;HEAP32[r18+4>>2]=r14|3;r13=r18+8|0;return r13}else{r13=_sys_alloc(r14);return r13}}else{r18=r1-r14|0;r2=HEAP32[__gm_+20>>2];if(r18>>>0>15){r10=r2;HEAP32[__gm_+20>>2]=r10+r14|0;HEAP32[__gm_+8>>2]=r18;HEAP32[r14+(r10+4)>>2]=r18|1;HEAP32[r10+r1>>2]=r18;HEAP32[r2+4>>2]=r14|3}else{HEAP32[__gm_+8>>2]=0;HEAP32[__gm_+20>>2]=0;HEAP32[r2+4>>2]=r1|3;r14=r1+(r2+4)|0;HEAP32[r14>>2]=HEAP32[r14>>2]|1}r13=r2+8|0;return r13}}function _tmalloc_small(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21;r2=HEAP32[__gm_+4>>2];r3=(r2&-r2)-1|0;r2=r3>>>12&16;r4=r3>>>(r2>>>0);r3=r4>>>5&8;r5=r4>>>(r3>>>0);r4=r5>>>2&4;r6=r5>>>(r4>>>0);r5=r6>>>1&2;r7=r6>>>(r5>>>0);r6=r7>>>1&1;r8=HEAP32[__gm_+((r3|r2|r4|r5|r6)+(r7>>>(r6>>>0))<<2)+304>>2];r6=r8;r7=r8,r5=r7>>2;r4=(HEAP32[r8+4>>2]&-8)-r1|0;while(1){r8=HEAP32[r6+16>>2];if((r8|0)==0){r2=HEAP32[r6+20>>2];if((r2|0)==0){break}else{r9=r2}}else{r9=r8}r8=(HEAP32[r9+4>>2]&-8)-r1|0;r2=r8>>>0<r4>>>0;r6=r9;r7=r2?r9:r7,r5=r7>>2;r4=r2?r8:r4}r9=r7;r6=HEAP32[__gm_+16>>2];if(r9>>>0<r6>>>0){_abort()}r8=r9+r1|0;r2=r8;if(r9>>>0>=r8>>>0){_abort()}r8=HEAP32[r5+6];r3=HEAP32[r5+3];L430:do{if((r3|0)==(r7|0)){r10=r7+20|0;r11=HEAP32[r10>>2];do{if((r11|0)==0){r12=r7+16|0;r13=HEAP32[r12>>2];if((r13|0)==0){r14=0,r15=r14>>2;break L430}else{r16=r13;r17=r12;break}}else{r16=r11;r17=r10}}while(0);while(1){r10=r16+20|0;if((HEAP32[r10>>2]|0)==0){r11=r16+16|0;if((HEAP32[r11>>2]|0)==0){break}else{r18=r11}}else{r18=r10}r16=HEAP32[r18>>2];r17=r18}if(r17>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r17>>2]=0;r14=r16,r15=r14>>2;break}}else{r10=HEAP32[r5+2];if(r10>>>0<r6>>>0){_abort()}r11=r10+12|0;if((HEAP32[r11>>2]|0)!=(r7|0)){_abort()}r12=r3+8|0;if((HEAP32[r12>>2]|0)==(r7|0)){HEAP32[r11>>2]=r3;HEAP32[r12>>2]=r10;r14=r3,r15=r14>>2;break}else{_abort()}}}while(0);L454:do{if((r8|0)!=0){r3=r7+28|0;r6=(HEAP32[r3>>2]<<2)+__gm_+304|0;do{if((r7|0)==(HEAP32[r6>>2]|0)){HEAP32[r6>>2]=r14;if((r14|0)!=0){break}HEAP32[__gm_+4>>2]=HEAP32[__gm_+4>>2]&(1<<HEAP32[r3>>2]^-1);break L454}else{if(r8>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}r16=r8+16|0;if((HEAP32[r16>>2]|0)==(r7|0)){HEAP32[r16>>2]=r14}else{HEAP32[r8+20>>2]=r14}if((r14|0)==0){break L454}}}while(0);if(r14>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}HEAP32[r15+6]=r8;r3=HEAP32[r5+4];do{if((r3|0)!=0){if(r3>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r15+4]=r3;HEAP32[r3+24>>2]=r14;break}}}while(0);r3=HEAP32[r5+5];if((r3|0)==0){break}if(r3>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r15+5]=r3;HEAP32[r3+24>>2]=r14;break}}}while(0);if(r4>>>0<16){r14=r4+r1|0;HEAP32[r5+1]=r14|3;r15=r14+(r9+4)|0;HEAP32[r15>>2]=HEAP32[r15>>2]|1;r19=r7+8|0;r20=r19;return r20}HEAP32[r5+1]=r1|3;HEAP32[r1+(r9+4)>>2]=r4|1;HEAP32[r9+r4+r1>>2]=r4;r1=HEAP32[__gm_+8>>2];if((r1|0)!=0){r9=HEAP32[__gm_+20>>2];r5=r1>>>3;r1=r5<<1;r15=(r1<<2)+__gm_+40|0;r14=HEAP32[__gm_>>2];r8=1<<r5;do{if((r14&r8|0)==0){HEAP32[__gm_>>2]=r14|r8;r21=r15}else{r5=HEAP32[__gm_+(r1+2<<2)+40>>2];if(r5>>>0>=HEAP32[__gm_+16>>2]>>>0){r21=r5;break}_abort()}}while(0);HEAP32[__gm_+(r1+2<<2)+40>>2]=r9;HEAP32[r21+12>>2]=r9;HEAP32[r9+8>>2]=r21;HEAP32[r9+12>>2]=r15}HEAP32[__gm_+8>>2]=r4;HEAP32[__gm_+20>>2]=r2;r19=r7+8|0;r20=r19;return r20}function _tmalloc_large(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35;r2=r1>>2;r3=0;r4=-r1|0;r5=r1>>>8;do{if((r5|0)==0){r6=0}else{if(r1>>>0>16777215){r6=31;break}r7=(r5+1048320|0)>>>16&8;r8=r5<<r7;r9=(r8+520192|0)>>>16&4;r10=r8<<r9;r8=(r10+245760|0)>>>16&2;r11=14-(r9|r7|r8)+(r10<<r8>>>15)|0;r6=r1>>>((r11+7|0)>>>0)&1|r11<<1}}while(0);r5=HEAP32[__gm_+(r6<<2)+304>>2];L500:do{if((r5|0)==0){r12=0;r13=r4;r14=0}else{if((r6|0)==31){r15=0}else{r15=25-(r6>>>1)|0}r11=0;r8=r4;r10=r5,r7=r10>>2;r9=r1<<r15;r16=0;while(1){r17=HEAP32[r7+1]&-8;r18=r17-r1|0;if(r18>>>0<r8>>>0){if((r17|0)==(r1|0)){r12=r10;r13=r18;r14=r10;break L500}else{r19=r10;r20=r18}}else{r19=r11;r20=r8}r18=HEAP32[r7+5];r17=HEAP32[((r9>>>31<<2)+16>>2)+r7];r21=(r18|0)==0|(r18|0)==(r17|0)?r16:r18;if((r17|0)==0){r12=r19;r13=r20;r14=r21;break L500}else{r11=r19;r8=r20;r10=r17,r7=r10>>2;r9=r9<<1;r16=r21}}}}while(0);do{if((r14|0)==0&(r12|0)==0){r20=2<<r6;r19=HEAP32[__gm_+4>>2]&(r20|-r20);if((r19|0)==0){r22=r14;break}r20=(r19&-r19)-1|0;r19=r20>>>12&16;r15=r20>>>(r19>>>0);r20=r15>>>5&8;r5=r15>>>(r20>>>0);r15=r5>>>2&4;r4=r5>>>(r15>>>0);r5=r4>>>1&2;r16=r4>>>(r5>>>0);r4=r16>>>1&1;r22=HEAP32[__gm_+((r20|r19|r15|r5|r4)+(r16>>>(r4>>>0))<<2)+304>>2]}else{r22=r14}}while(0);L515:do{if((r22|0)==0){r23=r13;r24=r12,r25=r24>>2}else{r14=r22,r6=r14>>2;r4=r13;r16=r12;while(1){r5=(HEAP32[r6+1]&-8)-r1|0;r15=r5>>>0<r4>>>0;r19=r15?r5:r4;r5=r15?r14:r16;r15=HEAP32[r6+4];if((r15|0)!=0){r14=r15,r6=r14>>2;r4=r19;r16=r5;continue}r15=HEAP32[r6+5];if((r15|0)==0){r23=r19;r24=r5,r25=r24>>2;break L515}else{r14=r15,r6=r14>>2;r4=r19;r16=r5}}}}while(0);if((r24|0)==0){r26=0;return r26}if(r23>>>0>=(HEAP32[__gm_+8>>2]-r1|0)>>>0){r26=0;return r26}r12=r24,r13=r12>>2;r22=HEAP32[__gm_+16>>2];if(r12>>>0<r22>>>0){_abort()}r16=r12+r1|0;r4=r16;if(r12>>>0>=r16>>>0){_abort()}r14=HEAP32[r25+6];r6=HEAP32[r25+3];L532:do{if((r6|0)==(r24|0)){r5=r24+20|0;r19=HEAP32[r5>>2];do{if((r19|0)==0){r15=r24+16|0;r20=HEAP32[r15>>2];if((r20|0)==0){r27=0,r28=r27>>2;break L532}else{r29=r20;r30=r15;break}}else{r29=r19;r30=r5}}while(0);while(1){r5=r29+20|0;if((HEAP32[r5>>2]|0)==0){r19=r29+16|0;if((HEAP32[r19>>2]|0)==0){break}else{r31=r19}}else{r31=r5}r29=HEAP32[r31>>2];r30=r31}if(r30>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r30>>2]=0;r27=r29,r28=r27>>2;break}}else{r5=HEAP32[r25+2];if(r5>>>0<r22>>>0){_abort()}r19=r5+12|0;if((HEAP32[r19>>2]|0)!=(r24|0)){_abort()}r15=r6+8|0;if((HEAP32[r15>>2]|0)==(r24|0)){HEAP32[r19>>2]=r6;HEAP32[r15>>2]=r5;r27=r6,r28=r27>>2;break}else{_abort()}}}while(0);L556:do{if((r14|0)!=0){r6=r24+28|0;r22=(HEAP32[r6>>2]<<2)+__gm_+304|0;do{if((r24|0)==(HEAP32[r22>>2]|0)){HEAP32[r22>>2]=r27;if((r27|0)!=0){break}HEAP32[__gm_+4>>2]=HEAP32[__gm_+4>>2]&(1<<HEAP32[r6>>2]^-1);break L556}else{if(r14>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}r29=r14+16|0;if((HEAP32[r29>>2]|0)==(r24|0)){HEAP32[r29>>2]=r27}else{HEAP32[r14+20>>2]=r27}if((r27|0)==0){break L556}}}while(0);if(r27>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}HEAP32[r28+6]=r14;r6=HEAP32[r25+4];do{if((r6|0)!=0){if(r6>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r28+4]=r6;HEAP32[r6+24>>2]=r27;break}}}while(0);r6=HEAP32[r25+5];if((r6|0)==0){break}if(r6>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r28+5]=r6;HEAP32[r6+24>>2]=r27;break}}}while(0);do{if(r23>>>0<16){r27=r23+r1|0;HEAP32[r25+1]=r27|3;r28=r27+(r12+4)|0;HEAP32[r28>>2]=HEAP32[r28>>2]|1}else{HEAP32[r25+1]=r1|3;HEAP32[r2+(r13+1)]=r23|1;HEAP32[(r23>>2)+r13+r2]=r23;r28=r23>>>3;if(r23>>>0<256){r27=r28<<1;r14=(r27<<2)+__gm_+40|0;r6=HEAP32[__gm_>>2];r22=1<<r28;do{if((r6&r22|0)==0){HEAP32[__gm_>>2]=r6|r22;r32=r14}else{r28=HEAP32[__gm_+(r27+2<<2)+40>>2];if(r28>>>0>=HEAP32[__gm_+16>>2]>>>0){r32=r28;break}_abort()}}while(0);HEAP32[__gm_+(r27+2<<2)+40>>2]=r4;HEAP32[r32+12>>2]=r4;HEAP32[r2+(r13+2)]=r32;HEAP32[r2+(r13+3)]=r14;break}r22=r16;r6=r23>>>8;do{if((r6|0)==0){r33=0}else{if(r23>>>0>16777215){r33=31;break}r28=(r6+1048320|0)>>>16&8;r29=r6<<r28;r30=(r29+520192|0)>>>16&4;r31=r29<<r30;r29=(r31+245760|0)>>>16&2;r5=14-(r30|r28|r29)+(r31<<r29>>>15)|0;r33=r23>>>((r5+7|0)>>>0)&1|r5<<1}}while(0);r6=(r33<<2)+__gm_+304|0;HEAP32[r2+(r13+7)]=r33;HEAP32[r2+(r13+5)]=0;HEAP32[r2+(r13+4)]=0;r14=HEAP32[__gm_+4>>2];r27=1<<r33;if((r14&r27|0)==0){HEAP32[__gm_+4>>2]=r14|r27;HEAP32[r6>>2]=r22;HEAP32[r2+(r13+6)]=r6;HEAP32[r2+(r13+3)]=r22;HEAP32[r2+(r13+2)]=r22;break}if((r33|0)==31){r34=0}else{r34=25-(r33>>>1)|0}r27=r23<<r34;r14=HEAP32[r6>>2];while(1){if((HEAP32[r14+4>>2]&-8|0)==(r23|0)){break}r35=(r27>>>31<<2)+r14+16|0;r6=HEAP32[r35>>2];if((r6|0)==0){r3=470;break}else{r27=r27<<1;r14=r6}}if(r3==470){if(r35>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r35>>2]=r22;HEAP32[r2+(r13+6)]=r14;HEAP32[r2+(r13+3)]=r22;HEAP32[r2+(r13+2)]=r22;break}}r27=r14+8|0;r6=HEAP32[r27>>2];r5=HEAP32[__gm_+16>>2];if(r14>>>0<r5>>>0){_abort()}if(r6>>>0<r5>>>0){_abort()}else{HEAP32[r6+12>>2]=r22;HEAP32[r27>>2]=r22;HEAP32[r2+(r13+2)]=r6;HEAP32[r2+(r13+3)]=r14;HEAP32[r2+(r13+6)]=0;break}}}while(0);r26=r24+8|0;return r26}function _sys_alloc(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26;r2=0;if((HEAP32[_mparams>>2]|0)==0){_init_mparams()}r3=r1+48|0;r4=HEAP32[_mparams+8>>2];r5=r4+(r1+47)&-r4;if(r5>>>0<=r1>>>0){r6=0;return r6}r4=HEAP32[__gm_+440>>2];do{if((r4|0)!=0){r7=HEAP32[__gm_+432>>2];r8=r7+r5|0;if(r8>>>0<=r7>>>0|r8>>>0>r4>>>0){r6=0}else{break}return r6}}while(0);L633:do{if((HEAP32[__gm_+444>>2]&4|0)==0){r4=HEAP32[__gm_+24>>2];do{if((r4|0)==0){r2=498}else{r8=_segment_holding(r4);if((r8|0)==0){r2=498;break}r7=HEAP32[_mparams+8>>2];r9=r1+47-HEAP32[__gm_+12>>2]+r7&-r7;if(r9>>>0>=2147483647){r10=0;break}r7=_sbrk(r9);r11=(r7|0)==(HEAP32[r8>>2]+HEAP32[r8+4>>2]|0);r12=r11?r7:-1;r13=r11?r9:0;r14=r7;r15=r9;r2=507;break}}while(0);do{if(r2==498){r4=_sbrk(0);if((r4|0)==-1){r10=0;break}r9=r4;r7=HEAP32[_mparams+4>>2];r11=r7-1|0;if((r11&r9|0)==0){r16=r5}else{r16=r5-r9+(r11+r9&-r7)|0}r7=HEAP32[__gm_+432>>2];r9=r7+r16|0;if(!(r16>>>0>r1>>>0&r16>>>0<2147483647)){r10=0;break}r11=HEAP32[__gm_+440>>2];if((r11|0)!=0){if(r9>>>0<=r7>>>0|r9>>>0>r11>>>0){r10=0;break}}r11=_sbrk(r16);r9=(r11|0)==(r4|0);r12=r9?r4:-1;r13=r9?r16:0;r14=r11;r15=r16;r2=507;break}}while(0);L649:do{if(r2==507){r11=-r15|0;if((r12|0)!=-1){r17=r13;r18=r12;r2=518;break L633}do{if((r14|0)!=-1&r15>>>0<2147483647&r15>>>0<r3>>>0){r9=HEAP32[_mparams+8>>2];r4=r1+47-r15+r9&-r9;if(r4>>>0>=2147483647){r19=r15;break}if((_sbrk(r4)|0)==-1){_sbrk(r11);r10=r13;break L649}else{r19=r4+r15|0;break}}else{r19=r15}}while(0);if((r14|0)==-1){r10=r13}else{r17=r19;r18=r14;r2=518;break L633}}}while(0);HEAP32[__gm_+444>>2]=HEAP32[__gm_+444>>2]|4;r20=r10;r2=515;break}else{r20=0;r2=515}}while(0);do{if(r2==515){if(r5>>>0>=2147483647){break}r10=_sbrk(r5);r14=_sbrk(0);if(!((r14|0)!=-1&(r10|0)!=-1&r10>>>0<r14>>>0)){break}r19=r14-r10|0;r14=r19>>>0>(r1+40|0)>>>0;r13=r14?r10:-1;if((r13|0)==-1){break}else{r17=r14?r19:r20;r18=r13;r2=518;break}}}while(0);do{if(r2==518){r20=HEAP32[__gm_+432>>2]+r17|0;HEAP32[__gm_+432>>2]=r20;if(r20>>>0>HEAP32[__gm_+436>>2]>>>0){HEAP32[__gm_+436>>2]=r20}L669:do{if((HEAP32[__gm_+24>>2]|0)==0){r20=HEAP32[__gm_+16>>2];if((r20|0)==0|r18>>>0<r20>>>0){HEAP32[__gm_+16>>2]=r18}HEAP32[__gm_+448>>2]=r18;HEAP32[__gm_+452>>2]=r17;HEAP32[__gm_+460>>2]=0;HEAP32[__gm_+36>>2]=HEAP32[_mparams>>2];HEAP32[__gm_+32>>2]=-1;_init_bins();_init_top(r18,r17-40|0)}else{r20=__gm_+448|0,r5=r20>>2;while(1){r21=HEAP32[r5];r22=r20+4|0;r23=HEAP32[r22>>2];r24=r21+r23|0;if((r18|0)==(r24|0)){r2=526;break}r13=HEAP32[r5+2];if((r13|0)==0){break}else{r20=r13,r5=r20>>2}}do{if(r2==526){if((HEAP32[r5+3]&8|0)!=0){break}r20=HEAP32[__gm_+24>>2];if(!(r20>>>0>=r21>>>0&r20>>>0<r24>>>0)){break}HEAP32[r22>>2]=r23+r17|0;_init_top(HEAP32[__gm_+24>>2],HEAP32[__gm_+12>>2]+r17|0);break L669}}while(0);if(r18>>>0<HEAP32[__gm_+16>>2]>>>0){HEAP32[__gm_+16>>2]=r18}r5=r18+r17|0;r20=__gm_+448|0;while(1){r25=r20|0;r26=HEAP32[r25>>2];if((r26|0)==(r5|0)){r2=534;break}r13=HEAP32[r20+8>>2];if((r13|0)==0){break}else{r20=r13}}do{if(r2==534){if((HEAP32[r20+12>>2]&8|0)!=0){break}HEAP32[r25>>2]=r18;r5=r20+4|0;HEAP32[r5>>2]=HEAP32[r5>>2]+r17|0;r6=_prepend_alloc(r18,r26,r1);return r6}}while(0);_add_segment(r18,r17)}}while(0);r20=HEAP32[__gm_+12>>2];if(r20>>>0<=r1>>>0){break}r5=r20-r1|0;HEAP32[__gm_+12>>2]=r5;r20=HEAP32[__gm_+24>>2];r13=r20;HEAP32[__gm_+24>>2]=r13+r1|0;HEAP32[r1+(r13+4)>>2]=r5|1;HEAP32[r20+4>>2]=r1|3;r6=r20+8|0;return r6}}while(0);HEAP32[___errno_location()>>2]=12;r6=0;return r6}function _free(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,r41,r42,r43,r44;r2=r1>>2;r3=0;if((r1|0)==0){return}r4=r1-8|0;r5=r4;r6=HEAP32[__gm_+16>>2];if(r4>>>0<r6>>>0){_abort()}r7=HEAP32[r1-4>>2];r8=r7&3;if((r8|0)==1){_abort()}r9=r7&-8,r10=r9>>2;r11=r1+(r9-8)|0;r12=r11;L708:do{if((r7&1|0)==0){r13=HEAP32[r4>>2];if((r8|0)==0){return}r14=-8-r13|0,r15=r14>>2;r16=r1+r14|0;r17=r16;r18=r13+r9|0;if(r16>>>0<r6>>>0){_abort()}if((r17|0)==(HEAP32[__gm_+20>>2]|0)){r19=(r1+(r9-4)|0)>>2;if((HEAP32[r19]&3|0)!=3){r20=r17,r21=r20>>2;r22=r18;break}HEAP32[__gm_+8>>2]=r18;HEAP32[r19]=HEAP32[r19]&-2;HEAP32[r15+(r2+1)]=r18|1;HEAP32[r11>>2]=r18;return}r19=r13>>>3;if(r13>>>0<256){r13=HEAP32[r15+(r2+2)];r23=HEAP32[r15+(r2+3)];r24=(r19<<3)+__gm_+40|0;do{if((r13|0)!=(r24|0)){if(r13>>>0<r6>>>0){_abort()}if((HEAP32[r13+12>>2]|0)==(r17|0)){break}_abort()}}while(0);if((r23|0)==(r13|0)){HEAP32[__gm_>>2]=HEAP32[__gm_>>2]&(1<<r19^-1);r20=r17,r21=r20>>2;r22=r18;break}do{if((r23|0)!=(r24|0)){if(r23>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}if((HEAP32[r23+8>>2]|0)==(r17|0)){break}_abort()}}while(0);HEAP32[r13+12>>2]=r23;HEAP32[r23+8>>2]=r13;r20=r17,r21=r20>>2;r22=r18;break}r24=r16;r19=HEAP32[r15+(r2+6)];r25=HEAP32[r15+(r2+3)];L741:do{if((r25|0)==(r24|0)){r26=r14+(r1+20)|0;r27=HEAP32[r26>>2];do{if((r27|0)==0){r28=r14+(r1+16)|0;r29=HEAP32[r28>>2];if((r29|0)==0){r30=0,r31=r30>>2;break L741}else{r32=r29;r33=r28;break}}else{r32=r27;r33=r26}}while(0);while(1){r26=r32+20|0;if((HEAP32[r26>>2]|0)==0){r27=r32+16|0;if((HEAP32[r27>>2]|0)==0){break}else{r34=r27}}else{r34=r26}r32=HEAP32[r34>>2];r33=r34}if(r33>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r33>>2]=0;r30=r32,r31=r30>>2;break}}else{r26=HEAP32[r15+(r2+2)];if(r26>>>0<r6>>>0){_abort()}r27=r26+12|0;if((HEAP32[r27>>2]|0)!=(r24|0)){_abort()}r28=r25+8|0;if((HEAP32[r28>>2]|0)==(r24|0)){HEAP32[r27>>2]=r25;HEAP32[r28>>2]=r26;r30=r25,r31=r30>>2;break}else{_abort()}}}while(0);if((r19|0)==0){r20=r17,r21=r20>>2;r22=r18;break}r25=r14+(r1+28)|0;r16=(HEAP32[r25>>2]<<2)+__gm_+304|0;do{if((r24|0)==(HEAP32[r16>>2]|0)){HEAP32[r16>>2]=r30;if((r30|0)!=0){break}HEAP32[__gm_+4>>2]=HEAP32[__gm_+4>>2]&(1<<HEAP32[r25>>2]^-1);r20=r17,r21=r20>>2;r22=r18;break L708}else{if(r19>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}r13=r19+16|0;if((HEAP32[r13>>2]|0)==(r24|0)){HEAP32[r13>>2]=r30}else{HEAP32[r19+20>>2]=r30}if((r30|0)==0){r20=r17,r21=r20>>2;r22=r18;break L708}}}while(0);if(r30>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}HEAP32[r31+6]=r19;r24=HEAP32[r15+(r2+4)];do{if((r24|0)!=0){if(r24>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r31+4]=r24;HEAP32[r24+24>>2]=r30;break}}}while(0);r24=HEAP32[r15+(r2+5)];if((r24|0)==0){r20=r17,r21=r20>>2;r22=r18;break}if(r24>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r31+5]=r24;HEAP32[r24+24>>2]=r30;r20=r17,r21=r20>>2;r22=r18;break}}else{r20=r5,r21=r20>>2;r22=r9}}while(0);r5=r20,r30=r5>>2;if(r5>>>0>=r11>>>0){_abort()}r5=r1+(r9-4)|0;r31=HEAP32[r5>>2];if((r31&1|0)==0){_abort()}do{if((r31&2|0)==0){if((r12|0)==(HEAP32[__gm_+24>>2]|0)){r6=HEAP32[__gm_+12>>2]+r22|0;HEAP32[__gm_+12>>2]=r6;HEAP32[__gm_+24>>2]=r20;HEAP32[r21+1]=r6|1;if((r20|0)==(HEAP32[__gm_+20>>2]|0)){HEAP32[__gm_+20>>2]=0;HEAP32[__gm_+8>>2]=0}if(r6>>>0<=HEAP32[__gm_+28>>2]>>>0){return}_sys_trim(0);return}if((r12|0)==(HEAP32[__gm_+20>>2]|0)){r6=HEAP32[__gm_+8>>2]+r22|0;HEAP32[__gm_+8>>2]=r6;HEAP32[__gm_+20>>2]=r20;HEAP32[r21+1]=r6|1;HEAP32[(r6>>2)+r30]=r6;return}r6=(r31&-8)+r22|0;r32=r31>>>3;L815:do{if(r31>>>0<256){r33=HEAP32[r2+r10];r34=HEAP32[((r9|4)>>2)+r2];r8=(r32<<3)+__gm_+40|0;do{if((r33|0)!=(r8|0)){if(r33>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}if((HEAP32[r33+12>>2]|0)==(r12|0)){break}_abort()}}while(0);if((r34|0)==(r33|0)){HEAP32[__gm_>>2]=HEAP32[__gm_>>2]&(1<<r32^-1);break}do{if((r34|0)!=(r8|0)){if(r34>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}if((HEAP32[r34+8>>2]|0)==(r12|0)){break}_abort()}}while(0);HEAP32[r33+12>>2]=r34;HEAP32[r34+8>>2]=r33}else{r8=r11;r4=HEAP32[r10+(r2+4)];r7=HEAP32[((r9|4)>>2)+r2];L817:do{if((r7|0)==(r8|0)){r24=r9+(r1+12)|0;r19=HEAP32[r24>>2];do{if((r19|0)==0){r25=r9+(r1+8)|0;r16=HEAP32[r25>>2];if((r16|0)==0){r35=0,r36=r35>>2;break L817}else{r37=r16;r38=r25;break}}else{r37=r19;r38=r24}}while(0);while(1){r24=r37+20|0;if((HEAP32[r24>>2]|0)==0){r19=r37+16|0;if((HEAP32[r19>>2]|0)==0){break}else{r39=r19}}else{r39=r24}r37=HEAP32[r39>>2];r38=r39}if(r38>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r38>>2]=0;r35=r37,r36=r35>>2;break}}else{r24=HEAP32[r2+r10];if(r24>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}r19=r24+12|0;if((HEAP32[r19>>2]|0)!=(r8|0)){_abort()}r25=r7+8|0;if((HEAP32[r25>>2]|0)==(r8|0)){HEAP32[r19>>2]=r7;HEAP32[r25>>2]=r24;r35=r7,r36=r35>>2;break}else{_abort()}}}while(0);if((r4|0)==0){break}r7=r9+(r1+20)|0;r33=(HEAP32[r7>>2]<<2)+__gm_+304|0;do{if((r8|0)==(HEAP32[r33>>2]|0)){HEAP32[r33>>2]=r35;if((r35|0)!=0){break}HEAP32[__gm_+4>>2]=HEAP32[__gm_+4>>2]&(1<<HEAP32[r7>>2]^-1);break L815}else{if(r4>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}r34=r4+16|0;if((HEAP32[r34>>2]|0)==(r8|0)){HEAP32[r34>>2]=r35}else{HEAP32[r4+20>>2]=r35}if((r35|0)==0){break L815}}}while(0);if(r35>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}HEAP32[r36+6]=r4;r8=HEAP32[r10+(r2+2)];do{if((r8|0)!=0){if(r8>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r36+4]=r8;HEAP32[r8+24>>2]=r35;break}}}while(0);r8=HEAP32[r10+(r2+3)];if((r8|0)==0){break}if(r8>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r36+5]=r8;HEAP32[r8+24>>2]=r35;break}}}while(0);HEAP32[r21+1]=r6|1;HEAP32[(r6>>2)+r30]=r6;if((r20|0)!=(HEAP32[__gm_+20>>2]|0)){r40=r6;break}HEAP32[__gm_+8>>2]=r6;return}else{HEAP32[r5>>2]=r31&-2;HEAP32[r21+1]=r22|1;HEAP32[(r22>>2)+r30]=r22;r40=r22}}while(0);r22=r40>>>3;if(r40>>>0<256){r30=r22<<1;r31=(r30<<2)+__gm_+40|0;r5=HEAP32[__gm_>>2];r35=1<<r22;do{if((r5&r35|0)==0){HEAP32[__gm_>>2]=r5|r35;r41=r31}else{r22=HEAP32[__gm_+(r30+2<<2)+40>>2];if(r22>>>0>=HEAP32[__gm_+16>>2]>>>0){r41=r22;break}_abort()}}while(0);HEAP32[__gm_+(r30+2<<2)+40>>2]=r20;HEAP32[r41+12>>2]=r20;HEAP32[r21+2]=r41;HEAP32[r21+3]=r31;return}r31=r20;r41=r40>>>8;do{if((r41|0)==0){r42=0}else{if(r40>>>0>16777215){r42=31;break}r30=(r41+1048320|0)>>>16&8;r35=r41<<r30;r5=(r35+520192|0)>>>16&4;r22=r35<<r5;r35=(r22+245760|0)>>>16&2;r36=14-(r5|r30|r35)+(r22<<r35>>>15)|0;r42=r40>>>((r36+7|0)>>>0)&1|r36<<1}}while(0);r41=(r42<<2)+__gm_+304|0;HEAP32[r21+7]=r42;HEAP32[r21+5]=0;HEAP32[r21+4]=0;r36=HEAP32[__gm_+4>>2];r35=1<<r42;do{if((r36&r35|0)==0){HEAP32[__gm_+4>>2]=r36|r35;HEAP32[r41>>2]=r31;HEAP32[r21+6]=r41;HEAP32[r21+3]=r20;HEAP32[r21+2]=r20}else{if((r42|0)==31){r43=0}else{r43=25-(r42>>>1)|0}r22=r40<<r43;r30=HEAP32[r41>>2];while(1){if((HEAP32[r30+4>>2]&-8|0)==(r40|0)){break}r44=(r22>>>31<<2)+r30+16|0;r5=HEAP32[r44>>2];if((r5|0)==0){r3=676;break}else{r22=r22<<1;r30=r5}}if(r3==676){if(r44>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r44>>2]=r31;HEAP32[r21+6]=r30;HEAP32[r21+3]=r20;HEAP32[r21+2]=r20;break}}r22=r30+8|0;r6=HEAP32[r22>>2];r5=HEAP32[__gm_+16>>2];if(r30>>>0<r5>>>0){_abort()}if(r6>>>0<r5>>>0){_abort()}else{HEAP32[r6+12>>2]=r31;HEAP32[r22>>2]=r31;HEAP32[r21+2]=r6;HEAP32[r21+3]=r30;HEAP32[r21+6]=0;break}}}while(0);r21=HEAP32[__gm_+32>>2]-1|0;HEAP32[__gm_+32>>2]=r21;if((r21|0)!=0){return}_release_unused_segments();return}function _release_unused_segments(){var r1,r2;r1=__gm_+456|0;while(1){r2=HEAP32[r1>>2];if((r2|0)==0){break}else{r1=r2+8|0}}HEAP32[__gm_+32>>2]=-1;return}function _sys_trim(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10;if((HEAP32[_mparams>>2]|0)==0){_init_mparams()}if(r1>>>0>=4294967232){r2=0;r3=r2&1;return r3}r4=HEAP32[__gm_+24>>2];if((r4|0)==0){r2=0;r3=r2&1;return r3}r5=HEAP32[__gm_+12>>2];do{if(r5>>>0>(r1+40|0)>>>0){r6=HEAP32[_mparams+8>>2];r7=Math.imul(Math.floor(((-40-r1-1+r5+r6|0)>>>0)/(r6>>>0))-1|0,r6);r8=_segment_holding(r4),r9=r8>>2;if((HEAP32[r9+3]&8|0)!=0){break}r10=_sbrk(0);if((r10|0)!=(HEAP32[r9]+HEAP32[r9+1]|0)){break}r9=_sbrk(-(r7>>>0>2147483646?-2147483648-r6|0:r7)|0);r7=_sbrk(0);if(!((r9|0)!=-1&r7>>>0<r10>>>0)){break}r9=r10-r7|0;if((r10|0)==(r7|0)){break}r6=r8+4|0;HEAP32[r6>>2]=HEAP32[r6>>2]-r9|0;HEAP32[__gm_+432>>2]=HEAP32[__gm_+432>>2]-r9|0;_init_top(HEAP32[__gm_+24>>2],HEAP32[__gm_+12>>2]-r9|0);r2=(r10|0)!=(r7|0);r3=r2&1;return r3}}while(0);if(HEAP32[__gm_+12>>2]>>>0<=HEAP32[__gm_+28>>2]>>>0){r2=0;r3=r2&1;return r3}HEAP32[__gm_+28>>2]=-1;r2=0;r3=r2&1;return r3}function _calloc(r1,r2){var r3,r4;do{if((r1|0)==0){r3=0}else{r4=Math.imul(r2,r1);if((r2|r1)>>>0<=65535){r3=r4;break}r3=(Math.floor((r4>>>0)/(r1>>>0))|0)==(r2|0)?r4:-1}}while(0);r2=_malloc(r3);if((r2|0)==0){return r2}if((HEAP32[r2-4>>2]&3|0)==0){return r2}_memset(r2,0,r3);return r2}function _realloc(r1,r2){var r3,r4,r5,r6;if((r1|0)==0){r3=_malloc(r2);return r3}if(r2>>>0>4294967231){HEAP32[___errno_location()>>2]=12;r3=0;return r3}if(r2>>>0<11){r4=16}else{r4=r2+11&-8}r5=_try_realloc_chunk(r1-8|0,r4);if((r5|0)!=0){r3=r5+8|0;return r3}r5=_malloc(r2);if((r5|0)==0){r3=0;return r3}r4=HEAP32[r1-4>>2];r6=(r4&-8)-((r4&3|0)==0?8:4)|0;_memcpy(r5,r1,r6>>>0<r2>>>0?r6:r2);_free(r1);r3=r5;return r3}function _realloc_in_place(r1,r2){var r3;if((r1|0)==0){return 0}if(r2>>>0>4294967231){HEAP32[___errno_location()>>2]=12;return 0}if(r2>>>0<11){r3=16}else{r3=r2+11&-8}r2=r1-8|0;return(_try_realloc_chunk(r2,r3)|0)==(r2|0)?r1:0}function _memalign(r1,r2){var r3;if(r1>>>0<9){r3=_malloc(r2);return r3}else{r3=_internal_memalign(r1,r2);return r3}}function _internal_memalign(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14;r3=r1>>>0<16?16:r1;L1004:do{if((r3-1&r3|0)==0){r4=r3}else{r1=16;while(1){if(r1>>>0<r3>>>0){r1=r1<<1}else{r4=r1;break L1004}}}}while(0);if((-64-r4|0)>>>0<=r2>>>0){HEAP32[___errno_location()>>2]=12;r5=0;return r5}if(r2>>>0<11){r6=16}else{r6=r2+11&-8}r2=_malloc(r6+(r4+12)|0);if((r2|0)==0){r5=0;return r5}r3=r2-8|0;r1=r3;r7=r4-1|0;do{if((r2&r7|0)==0){r8=r1}else{r9=r2+r7&-r4;r10=r9-8|0;r11=r3;if((r10-r11|0)>>>0>15){r12=r10}else{r12=r9+(r4-8)|0}r9=r12;r10=r12-r11|0;r11=(r2-4|0)>>2;r13=HEAP32[r11];r14=(r13&-8)-r10|0;if((r13&3|0)==0){HEAP32[r12>>2]=HEAP32[r3>>2]+r10|0;HEAP32[r12+4>>2]=r14;r8=r9;break}else{r13=r12+4|0;HEAP32[r13>>2]=r14|HEAP32[r13>>2]&1|2;r13=r14+(r12+4)|0;HEAP32[r13>>2]=HEAP32[r13>>2]|1;HEAP32[r11]=r10|HEAP32[r11]&1|2;r11=r2+(r10-4)|0;HEAP32[r11>>2]=HEAP32[r11>>2]|1;_dispose_chunk(r1,r10);r8=r9;break}}}while(0);r1=r8+4|0;r2=HEAP32[r1>>2];do{if((r2&3|0)!=0){r12=r2&-8;if(r12>>>0<=(r6+16|0)>>>0){break}r3=r12-r6|0;r4=r8;HEAP32[r1>>2]=r6|r2&1|2;HEAP32[r4+(r6|4)>>2]=r3|3;r7=r4+(r12|4)|0;HEAP32[r7>>2]=HEAP32[r7>>2]|1;_dispose_chunk(r4+r6|0,r3)}}while(0);r5=r8+8|0;return r5}function _posix_memalign(r1,r2,r3){var r4,r5,r6;do{if((r2|0)==8){r4=_malloc(r3)}else{r5=r2>>>2;if((r2&3|0)!=0|(r5|0)==0){r6=22;return r6}if((r5+1073741823&r5|0)!=0){r6=22;return r6}if((-64-r2|0)>>>0<r3>>>0){r6=12;return r6}else{r4=_internal_memalign(r2>>>0<16?16:r2,r3);break}}}while(0);if((r4|0)==0){r6=12;return r6}HEAP32[r1>>2]=r4;r6=0;return r6}function _valloc(r1){if((HEAP32[_mparams>>2]|0)==0){_init_mparams()}return _memalign(HEAP32[_mparams+4>>2],r1)}function _try_realloc_chunk(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29;r3=(r1+4|0)>>2;r4=HEAP32[r3];r5=r4&-8,r6=r5>>2;r7=r1,r8=r7>>2;r9=r7+r5|0;r10=r9;r11=HEAP32[__gm_+16>>2];if(r7>>>0<r11>>>0){_abort()}r12=r4&3;if(!((r12|0)!=1&r7>>>0<r9>>>0)){_abort()}r13=(r7+(r5|4)|0)>>2;r14=HEAP32[r13];if((r14&1|0)==0){_abort()}if((r12|0)==0){r15=_mmap_resize(r1,r2);return r15}if(r5>>>0>=r2>>>0){r12=r5-r2|0;if(r12>>>0<=15){r15=r1;return r15}HEAP32[r3]=r4&1|r2|2;HEAP32[(r2+4>>2)+r8]=r12|3;HEAP32[r13]=HEAP32[r13]|1;_dispose_chunk(r7+r2|0,r12);r15=r1;return r15}if((r10|0)==(HEAP32[__gm_+24>>2]|0)){r12=HEAP32[__gm_+12>>2]+r5|0;if(r12>>>0<=r2>>>0){r15=0;return r15}r13=r12-r2|0;HEAP32[r3]=r4&1|r2|2;HEAP32[(r2+4>>2)+r8]=r13|1;HEAP32[__gm_+24>>2]=r7+r2|0;HEAP32[__gm_+12>>2]=r13;r15=r1;return r15}if((r10|0)==(HEAP32[__gm_+20>>2]|0)){r13=HEAP32[__gm_+8>>2]+r5|0;if(r13>>>0<r2>>>0){r15=0;return r15}r12=r13-r2|0;if(r12>>>0>15){HEAP32[r3]=r4&1|r2|2;HEAP32[(r2+4>>2)+r8]=r12|1;HEAP32[(r13>>2)+r8]=r12;r16=r13+(r7+4)|0;HEAP32[r16>>2]=HEAP32[r16>>2]&-2;r17=r7+r2|0;r18=r12}else{HEAP32[r3]=r4&1|r13|2;r4=r13+(r7+4)|0;HEAP32[r4>>2]=HEAP32[r4>>2]|1;r17=0;r18=0}HEAP32[__gm_+8>>2]=r18;HEAP32[__gm_+20>>2]=r17;r15=r1;return r15}if((r14&2|0)!=0){r15=0;return r15}r17=(r14&-8)+r5|0;if(r17>>>0<r2>>>0){r15=0;return r15}r18=r17-r2|0;r4=r14>>>3;L1099:do{if(r14>>>0<256){r13=HEAP32[r6+(r8+2)];r12=HEAP32[r6+(r8+3)];r16=(r4<<3)+__gm_+40|0;do{if((r13|0)!=(r16|0)){if(r13>>>0<r11>>>0){_abort()}if((HEAP32[r13+12>>2]|0)==(r10|0)){break}_abort()}}while(0);if((r12|0)==(r13|0)){HEAP32[__gm_>>2]=HEAP32[__gm_>>2]&(1<<r4^-1);break}do{if((r12|0)!=(r16|0)){if(r12>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}if((HEAP32[r12+8>>2]|0)==(r10|0)){break}_abort()}}while(0);HEAP32[r13+12>>2]=r12;HEAP32[r12+8>>2]=r13}else{r16=r9;r19=HEAP32[r6+(r8+6)];r20=HEAP32[r6+(r8+3)];L1119:do{if((r20|0)==(r16|0)){r21=r5+(r7+20)|0;r22=HEAP32[r21>>2];do{if((r22|0)==0){r23=r5+(r7+16)|0;r24=HEAP32[r23>>2];if((r24|0)==0){r25=0,r26=r25>>2;break L1119}else{r27=r24;r28=r23;break}}else{r27=r22;r28=r21}}while(0);while(1){r21=r27+20|0;if((HEAP32[r21>>2]|0)==0){r22=r27+16|0;if((HEAP32[r22>>2]|0)==0){break}else{r29=r22}}else{r29=r21}r27=HEAP32[r29>>2];r28=r29}if(r28>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r28>>2]=0;r25=r27,r26=r25>>2;break}}else{r21=HEAP32[r6+(r8+2)];if(r21>>>0<r11>>>0){_abort()}r22=r21+12|0;if((HEAP32[r22>>2]|0)!=(r16|0)){_abort()}r23=r20+8|0;if((HEAP32[r23>>2]|0)==(r16|0)){HEAP32[r22>>2]=r20;HEAP32[r23>>2]=r21;r25=r20,r26=r25>>2;break}else{_abort()}}}while(0);if((r19|0)==0){break}r20=r5+(r7+28)|0;r13=(HEAP32[r20>>2]<<2)+__gm_+304|0;do{if((r16|0)==(HEAP32[r13>>2]|0)){HEAP32[r13>>2]=r25;if((r25|0)!=0){break}HEAP32[__gm_+4>>2]=HEAP32[__gm_+4>>2]&(1<<HEAP32[r20>>2]^-1);break L1099}else{if(r19>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}r12=r19+16|0;if((HEAP32[r12>>2]|0)==(r16|0)){HEAP32[r12>>2]=r25}else{HEAP32[r19+20>>2]=r25}if((r25|0)==0){break L1099}}}while(0);if(r25>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}HEAP32[r26+6]=r19;r16=HEAP32[r6+(r8+4)];do{if((r16|0)!=0){if(r16>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r26+4]=r16;HEAP32[r16+24>>2]=r25;break}}}while(0);r16=HEAP32[r6+(r8+5)];if((r16|0)==0){break}if(r16>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r26+5]=r16;HEAP32[r16+24>>2]=r25;break}}}while(0);if(r18>>>0<16){HEAP32[r3]=r17|HEAP32[r3]&1|2;r25=r7+(r17|4)|0;HEAP32[r25>>2]=HEAP32[r25>>2]|1;r15=r1;return r15}else{HEAP32[r3]=HEAP32[r3]&1|r2|2;HEAP32[(r2+4>>2)+r8]=r18|3;r8=r7+(r17|4)|0;HEAP32[r8>>2]=HEAP32[r8>>2]|1;_dispose_chunk(r7+r2|0,r18);r15=r1;return r15}}function _malloc_footprint(){return HEAP32[__gm_+432>>2]}function _malloc_max_footprint(){return HEAP32[__gm_+436>>2]}function _malloc_footprint_limit(){var r1;r1=HEAP32[__gm_+440>>2];return(r1|0)==0?-1:r1}function _malloc_set_footprint_limit(r1){var r2,r3;if((r1|0)==-1){r2=0}else{r3=HEAP32[_mparams+8>>2];r2=r1-1+r3&-r3}HEAP32[__gm_+440>>2]=r2;return r2}function _malloc_usable_size(r1){var r2,r3;if((r1|0)==0){r2=0;return r2}r3=HEAP32[r1-4>>2];r1=r3&3;if((r1|0)==1){r2=0;return r2}r2=(r3&-8)-((r1|0)==0?8:4)|0;return r2}function _pvalloc(r1){var r2;if((HEAP32[_mparams>>2]|0)==0){_init_mparams()}r2=HEAP32[_mparams+4>>2];return _memalign(r2,r1-1+r2&-r2)}function _independent_calloc(r1,r2,r3){var r4,r5;r4=STACKTOP;STACKTOP=STACKTOP+4|0;r5=r4;HEAP32[r5>>2]=r2;r2=_ialloc(r1,r5,3,r3);STACKTOP=r4;return r2}function _ialloc(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20;if((HEAP32[_mparams>>2]|0)==0){_init_mparams()}r5=(r1|0)==0;do{if((r4|0)==0){if(r5){r6=_malloc(0);return r6}else{r7=r1<<2;if(r7>>>0<11){r8=0;r9=16;break}r8=0;r9=r7+11&-8;break}}else{if(r5){r6=r4}else{r8=r4;r9=0;break}return r6}}while(0);L1209:do{if((r3&1|0)==0){if((r1|0)==0){r10=0;r11=0;break}else{r12=0;r13=0}while(1){r4=HEAP32[r2+(r13<<2)>>2];if(r4>>>0<11){r14=16}else{r14=r4+11&-8}r4=r14+r12|0;r5=r13+1|0;if((r5|0)==(r1|0)){r10=0;r11=r4;break L1209}else{r12=r4;r13=r5}}}else{r5=HEAP32[r2>>2];if(r5>>>0<11){r15=16}else{r15=r5+11&-8}r10=r15;r11=Math.imul(r15,r1)}}while(0);r15=_malloc(r9-4+r11|0);if((r15|0)==0){r6=0;return r6}r13=r15-8|0;r12=HEAP32[r15-4>>2]&-8;if((r3&2|0)!=0){_memset(r15,0,-4-r9+r12|0)}if((r8|0)==0){HEAP32[r15+(r11-4)>>2]=r12-r11|3;r16=r15+r11|0;r17=r11}else{r16=r8;r17=r12}HEAP32[r16>>2]=r15;r15=r1-1|0;L1230:do{if((r15|0)==0){r18=r13;r19=r17}else{r1=(r10|0)==0;r12=r13;r8=r17;r11=0;while(1){do{if(r1){r9=HEAP32[r2+(r11<<2)>>2];if(r9>>>0<11){r20=16;break}r20=r9+11&-8}else{r20=r10}}while(0);r9=r8-r20|0;HEAP32[r12+4>>2]=r20|3;r3=r12+r20|0;r14=r11+1|0;HEAP32[r16+(r14<<2)>>2]=r20+(r12+8)|0;if((r14|0)==(r15|0)){r18=r3;r19=r9;break L1230}else{r12=r3;r8=r9;r11=r14}}}}while(0);HEAP32[r18+4>>2]=r19|3;r6=r16;return r6}function _independent_comalloc(r1,r2,r3){return _ialloc(r1,r2,0,r3)}function _bulk_free(r1,r2){_internal_bulk_free(r1,r2);return 0}function _malloc_trim(r1){if((HEAP32[_mparams>>2]|0)==0){_init_mparams()}return _sys_trim(r1)}function _mallinfo(r1){_internal_mallinfo(r1);return}function _internal_mallinfo(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33;r2=r1>>2;if((HEAP32[_mparams>>2]|0)==0){_init_mparams()}if((HEAP32[__gm_+24>>2]|0)==0){r3=0;r4=0;r5=0;r6=0;r7=0;r8=0;r9=0}else{r10=HEAP32[__gm_+12>>2]+40|0;r11=HEAP32[__gm_+24>>2];r12=1;r13=r10;r14=r10;r10=__gm_+448|0;while(1){r15=(r10|0)>>2;r16=HEAP32[r15];r17=r16+8|0;if((r17&7|0)==0){r18=0}else{r18=-r17&7}r17=r16+r18|0;r16=HEAP32[r15];L1258:do{if(r17>>>0<r16>>>0){r19=r12;r20=r13;r21=r14}else{r22=HEAP32[r10+4>>2];r23=r12;r24=r13;r25=r14;r26=r17;r27=r16;while(1){if(r26>>>0>=(r27+r22|0)>>>0|(r26|0)==(r11|0)){r19=r23;r20=r24;r21=r25;break L1258}r28=r26+4|0;r29=HEAP32[r28>>2];if((r29|0)==7){r19=r23;r20=r24;r21=r25;break L1258}r30=r29&-8;r31=r30+r25|0;if((r29&3|0)==1){r32=r30+r24|0;r33=r23+1|0}else{r32=r24;r33=r23}r30=r26+(HEAP32[r28>>2]&-8)|0;r28=HEAP32[r15];if(r30>>>0<r28>>>0){r19=r33;r20=r32;r21=r31;break L1258}else{r23=r33;r24=r32;r25=r31;r26=r30;r27=r28}}}}while(0);r15=HEAP32[r10+8>>2];if((r15|0)==0){break}else{r12=r19;r13=r20;r14=r21;r10=r15}}r10=HEAP32[__gm_+432>>2];r3=HEAP32[__gm_+12>>2];r4=r21;r5=r19;r6=r10-r21|0;r7=HEAP32[__gm_+436>>2];r8=r20;r9=r10-r20|0}HEAP32[r2]=r4;HEAP32[r2+1]=r5;r5=r1+8|0;HEAP32[r5>>2]=0;HEAP32[r5+4>>2]=0;HEAP32[r2+4]=r6;HEAP32[r2+5]=r7;HEAP32[r2+6]=0;HEAP32[r2+7]=r9;HEAP32[r2+8]=r8;HEAP32[r2+9]=r3;return}function _malloc_stats(){_internal_malloc_stats();return}function _internal_malloc_stats(){var r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21;r1=STACKTOP;if((HEAP32[_mparams>>2]|0)==0){_init_mparams()}L1275:do{if((HEAP32[__gm_+24>>2]|0)==0){r2=0;r3=0;r4=0}else{r5=HEAP32[__gm_+436>>2];r6=HEAP32[__gm_+432>>2];r7=HEAP32[__gm_+24>>2];r8=r6-40-HEAP32[__gm_+12>>2]|0;r9=__gm_+448|0;while(1){r10=(r9|0)>>2;r11=HEAP32[r10];r12=r11+8|0;if((r12&7|0)==0){r13=0}else{r13=-r12&7}r12=r11+r13|0;r11=HEAP32[r10];L1282:do{if(r12>>>0<r11>>>0){r14=r8}else{r15=HEAP32[r9+4>>2];r16=r8;r17=r12;r18=r11;while(1){if(r17>>>0>=(r18+r15|0)>>>0|(r17|0)==(r7|0)){r14=r16;break L1282}r19=r17+4|0;r20=HEAP32[r19>>2];if((r20|0)==7){r14=r16;break L1282}if((r20&3|0)==1){r21=r16-(r20&-8)|0}else{r21=r16}r20=r17+(HEAP32[r19>>2]&-8)|0;r19=HEAP32[r10];if(r20>>>0<r19>>>0){r14=r21;break L1282}else{r16=r21;r17=r20;r18=r19}}}}while(0);r10=HEAP32[r9+8>>2];if((r10|0)==0){r2=r14;r3=r6;r4=r5;break L1275}else{r8=r14;r9=r10}}}}while(0);_fprintf(HEAP32[_stderr>>2],__str42|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r4,tempInt));_fprintf(HEAP32[_stderr>>2],__str143|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r3,tempInt));_fprintf(HEAP32[_stderr>>2],__str244|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r2,tempInt));STACKTOP=r1;return}function _mallopt(r1,r2){return _change_mparam(r1,r2)}function _change_mparam(r1,r2){var r3;if((HEAP32[_mparams>>2]|0)==0){_init_mparams()}do{if((r1|0)==-2){if(HEAP32[_mparams+4>>2]>>>0>r2>>>0){r3=0;break}if((r2-1&r2|0)!=0){r3=0;break}HEAP32[_mparams+8>>2]=r2;r3=1}else if((r1|0)==-1){HEAP32[_mparams+16>>2]=r2;r3=1}else if((r1|0)==-3){HEAP32[_mparams+12>>2]=r2;r3=1}else{r3=0}}while(0);return r3}function _init_mparams(){var r1;if((HEAP32[_mparams>>2]|0)!=0){return}r1=_sysconf(8);if((r1-1&r1|0)!=0){_abort()}HEAP32[_mparams+8>>2]=r1;HEAP32[_mparams+4>>2]=r1;HEAP32[_mparams+12>>2]=-1;HEAP32[_mparams+16>>2]=2097152;HEAP32[_mparams+20>>2]=0;HEAP32[__gm_+444>>2]=0;r1=_time(0)&-16^1431655768;HEAP32[_mparams>>2]=r1;return}function _internal_bulk_free(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14;r3=0;r4=(r2<<2)+r1|0;L1314:do{if((r2|0)!=0){r5=r1;L1315:while(1){r6=HEAP32[r5>>2];L1317:do{if((r6|0)!=0){r7=r6-8|0;r8=r7;r9=(r6-4|0)>>2;r10=HEAP32[r9]&-8;HEAP32[r5>>2]=0;if(r7>>>0<HEAP32[__gm_+16>>2]>>>0){r3=1029;break L1315}r7=HEAP32[r9];if((r7&3|0)==1){r3=1030;break L1315}r11=r5+4|0;r12=r7-8&-8;do{if((r11|0)!=(r4|0)){if((HEAP32[r11>>2]|0)!=(r12+(r6+8)|0)){break}r13=(HEAP32[r6+(r12|4)>>2]&-8)+r10|0;HEAP32[r9]=r7&1|r13|2;r14=r6+(r13-4)|0;HEAP32[r14>>2]=HEAP32[r14>>2]|1;HEAP32[r11>>2]=r6;break L1317}}while(0);_dispose_chunk(r8,r10)}}while(0);r6=r5+4|0;if((r6|0)==(r4|0)){break L1314}else{r5=r6}}if(r3==1029){_abort()}else if(r3==1030){_abort()}}}while(0);if(HEAP32[__gm_+12>>2]>>>0<=HEAP32[__gm_+28>>2]>>>0){return}_sys_trim(0);return}function _mmap_resize(r1,r2){var r3,r4;r3=HEAP32[r1+4>>2]&-8;if(r2>>>0<256){r4=0;return r4}do{if(r3>>>0>=(r2+4|0)>>>0){if((r3-r2|0)>>>0>HEAP32[_mparams+8>>2]<<1>>>0){break}else{r4=r1}return r4}}while(0);r4=0;return r4}function _segment_holding(r1){var r2,r3,r4,r5,r6;r2=0;r3=__gm_+448|0,r4=r3>>2;while(1){r5=HEAP32[r4];if(r5>>>0<=r1>>>0){if((r5+HEAP32[r4+1]|0)>>>0>r1>>>0){r6=r3;r2=1044;break}}r5=HEAP32[r4+2];if((r5|0)==0){r6=0;r2=1045;break}else{r3=r5,r4=r3>>2}}if(r2==1045){return r6}else if(r2==1044){return r6}}function _dispose_chunk(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,r41,r42;r3=r2>>2;r4=0;r5=r1,r6=r5>>2;r7=r5+r2|0;r8=r7;r9=HEAP32[r1+4>>2];L1353:do{if((r9&1|0)==0){r10=HEAP32[r1>>2];if((r9&3|0)==0){return}r11=r5+ -r10|0;r12=r11;r13=r10+r2|0;r14=HEAP32[__gm_+16>>2];if(r11>>>0<r14>>>0){_abort()}if((r12|0)==(HEAP32[__gm_+20>>2]|0)){r15=(r2+(r5+4)|0)>>2;if((HEAP32[r15]&3|0)!=3){r16=r12,r17=r16>>2;r18=r13;break}HEAP32[__gm_+8>>2]=r13;HEAP32[r15]=HEAP32[r15]&-2;HEAP32[(4-r10>>2)+r6]=r13|1;HEAP32[r7>>2]=r13;return}r15=r10>>>3;if(r10>>>0<256){r19=HEAP32[(8-r10>>2)+r6];r20=HEAP32[(12-r10>>2)+r6];r21=(r15<<3)+__gm_+40|0;do{if((r19|0)!=(r21|0)){if(r19>>>0<r14>>>0){_abort()}if((HEAP32[r19+12>>2]|0)==(r12|0)){break}_abort()}}while(0);if((r20|0)==(r19|0)){HEAP32[__gm_>>2]=HEAP32[__gm_>>2]&(1<<r15^-1);r16=r12,r17=r16>>2;r18=r13;break}do{if((r20|0)!=(r21|0)){if(r20>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}if((HEAP32[r20+8>>2]|0)==(r12|0)){break}_abort()}}while(0);HEAP32[r19+12>>2]=r20;HEAP32[r20+8>>2]=r19;r16=r12,r17=r16>>2;r18=r13;break}r21=r11;r15=HEAP32[(24-r10>>2)+r6];r22=HEAP32[(12-r10>>2)+r6];L1386:do{if((r22|0)==(r21|0)){r23=16-r10|0;r24=r23+(r5+4)|0;r25=HEAP32[r24>>2];do{if((r25|0)==0){r26=r5+r23|0;r27=HEAP32[r26>>2];if((r27|0)==0){r28=0,r29=r28>>2;break L1386}else{r30=r27;r31=r26;break}}else{r30=r25;r31=r24}}while(0);while(1){r24=r30+20|0;if((HEAP32[r24>>2]|0)==0){r25=r30+16|0;if((HEAP32[r25>>2]|0)==0){break}else{r32=r25}}else{r32=r24}r30=HEAP32[r32>>2];r31=r32}if(r31>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r31>>2]=0;r28=r30,r29=r28>>2;break}}else{r24=HEAP32[(8-r10>>2)+r6];if(r24>>>0<r14>>>0){_abort()}r25=r24+12|0;if((HEAP32[r25>>2]|0)!=(r21|0)){_abort()}r23=r22+8|0;if((HEAP32[r23>>2]|0)==(r21|0)){HEAP32[r25>>2]=r22;HEAP32[r23>>2]=r24;r28=r22,r29=r28>>2;break}else{_abort()}}}while(0);if((r15|0)==0){r16=r12,r17=r16>>2;r18=r13;break}r22=r5+(28-r10)|0;r14=(HEAP32[r22>>2]<<2)+__gm_+304|0;do{if((r21|0)==(HEAP32[r14>>2]|0)){HEAP32[r14>>2]=r28;if((r28|0)!=0){break}HEAP32[__gm_+4>>2]=HEAP32[__gm_+4>>2]&(1<<HEAP32[r22>>2]^-1);r16=r12,r17=r16>>2;r18=r13;break L1353}else{if(r15>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}r11=r15+16|0;if((HEAP32[r11>>2]|0)==(r21|0)){HEAP32[r11>>2]=r28}else{HEAP32[r15+20>>2]=r28}if((r28|0)==0){r16=r12,r17=r16>>2;r18=r13;break L1353}}}while(0);if(r28>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}HEAP32[r29+6]=r15;r21=16-r10|0;r22=HEAP32[(r21>>2)+r6];do{if((r22|0)!=0){if(r22>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r29+4]=r22;HEAP32[r22+24>>2]=r28;break}}}while(0);r22=HEAP32[(r21+4>>2)+r6];if((r22|0)==0){r16=r12,r17=r16>>2;r18=r13;break}if(r22>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r29+5]=r22;HEAP32[r22+24>>2]=r28;r16=r12,r17=r16>>2;r18=r13;break}}else{r16=r1,r17=r16>>2;r18=r2}}while(0);r1=HEAP32[__gm_+16>>2];if(r7>>>0<r1>>>0){_abort()}r28=r2+(r5+4)|0;r29=HEAP32[r28>>2];do{if((r29&2|0)==0){if((r8|0)==(HEAP32[__gm_+24>>2]|0)){r30=HEAP32[__gm_+12>>2]+r18|0;HEAP32[__gm_+12>>2]=r30;HEAP32[__gm_+24>>2]=r16;HEAP32[r17+1]=r30|1;if((r16|0)!=(HEAP32[__gm_+20>>2]|0)){return}HEAP32[__gm_+20>>2]=0;HEAP32[__gm_+8>>2]=0;return}if((r8|0)==(HEAP32[__gm_+20>>2]|0)){r30=HEAP32[__gm_+8>>2]+r18|0;HEAP32[__gm_+8>>2]=r30;HEAP32[__gm_+20>>2]=r16;HEAP32[r17+1]=r30|1;HEAP32[(r30>>2)+r17]=r30;return}r30=(r29&-8)+r18|0;r31=r29>>>3;L1453:do{if(r29>>>0<256){r32=HEAP32[r3+(r6+2)];r9=HEAP32[r3+(r6+3)];r22=(r31<<3)+__gm_+40|0;do{if((r32|0)!=(r22|0)){if(r32>>>0<r1>>>0){_abort()}if((HEAP32[r32+12>>2]|0)==(r8|0)){break}_abort()}}while(0);if((r9|0)==(r32|0)){HEAP32[__gm_>>2]=HEAP32[__gm_>>2]&(1<<r31^-1);break}do{if((r9|0)!=(r22|0)){if(r9>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}if((HEAP32[r9+8>>2]|0)==(r8|0)){break}_abort()}}while(0);HEAP32[r32+12>>2]=r9;HEAP32[r9+8>>2]=r32}else{r22=r7;r10=HEAP32[r3+(r6+6)];r15=HEAP32[r3+(r6+3)];L1455:do{if((r15|0)==(r22|0)){r14=r2+(r5+20)|0;r11=HEAP32[r14>>2];do{if((r11|0)==0){r19=r2+(r5+16)|0;r20=HEAP32[r19>>2];if((r20|0)==0){r33=0,r34=r33>>2;break L1455}else{r35=r20;r36=r19;break}}else{r35=r11;r36=r14}}while(0);while(1){r14=r35+20|0;if((HEAP32[r14>>2]|0)==0){r11=r35+16|0;if((HEAP32[r11>>2]|0)==0){break}else{r37=r11}}else{r37=r14}r35=HEAP32[r37>>2];r36=r37}if(r36>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r36>>2]=0;r33=r35,r34=r33>>2;break}}else{r14=HEAP32[r3+(r6+2)];if(r14>>>0<r1>>>0){_abort()}r11=r14+12|0;if((HEAP32[r11>>2]|0)!=(r22|0)){_abort()}r19=r15+8|0;if((HEAP32[r19>>2]|0)==(r22|0)){HEAP32[r11>>2]=r15;HEAP32[r19>>2]=r14;r33=r15,r34=r33>>2;break}else{_abort()}}}while(0);if((r10|0)==0){break}r15=r2+(r5+28)|0;r32=(HEAP32[r15>>2]<<2)+__gm_+304|0;do{if((r22|0)==(HEAP32[r32>>2]|0)){HEAP32[r32>>2]=r33;if((r33|0)!=0){break}HEAP32[__gm_+4>>2]=HEAP32[__gm_+4>>2]&(1<<HEAP32[r15>>2]^-1);break L1453}else{if(r10>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}r9=r10+16|0;if((HEAP32[r9>>2]|0)==(r22|0)){HEAP32[r9>>2]=r33}else{HEAP32[r10+20>>2]=r33}if((r33|0)==0){break L1453}}}while(0);if(r33>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}HEAP32[r34+6]=r10;r22=HEAP32[r3+(r6+4)];do{if((r22|0)!=0){if(r22>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r34+4]=r22;HEAP32[r22+24>>2]=r33;break}}}while(0);r22=HEAP32[r3+(r6+5)];if((r22|0)==0){break}if(r22>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r34+5]=r22;HEAP32[r22+24>>2]=r33;break}}}while(0);HEAP32[r17+1]=r30|1;HEAP32[(r30>>2)+r17]=r30;if((r16|0)!=(HEAP32[__gm_+20>>2]|0)){r38=r30;break}HEAP32[__gm_+8>>2]=r30;return}else{HEAP32[r28>>2]=r29&-2;HEAP32[r17+1]=r18|1;HEAP32[(r18>>2)+r17]=r18;r38=r18}}while(0);r18=r38>>>3;if(r38>>>0<256){r29=r18<<1;r28=(r29<<2)+__gm_+40|0;r33=HEAP32[__gm_>>2];r34=1<<r18;do{if((r33&r34|0)==0){HEAP32[__gm_>>2]=r33|r34;r39=r28}else{r18=HEAP32[__gm_+(r29+2<<2)+40>>2];if(r18>>>0>=HEAP32[__gm_+16>>2]>>>0){r39=r18;break}_abort()}}while(0);HEAP32[__gm_+(r29+2<<2)+40>>2]=r16;HEAP32[r39+12>>2]=r16;HEAP32[r17+2]=r39;HEAP32[r17+3]=r28;return}r28=r16;r39=r38>>>8;do{if((r39|0)==0){r40=0}else{if(r38>>>0>16777215){r40=31;break}r29=(r39+1048320|0)>>>16&8;r34=r39<<r29;r33=(r34+520192|0)>>>16&4;r18=r34<<r33;r34=(r18+245760|0)>>>16&2;r6=14-(r33|r29|r34)+(r18<<r34>>>15)|0;r40=r38>>>((r6+7|0)>>>0)&1|r6<<1}}while(0);r39=(r40<<2)+__gm_+304|0;HEAP32[r17+7]=r40;HEAP32[r17+5]=0;HEAP32[r17+4]=0;r6=HEAP32[__gm_+4>>2];r34=1<<r40;if((r6&r34|0)==0){HEAP32[__gm_+4>>2]=r6|r34;HEAP32[r39>>2]=r28;HEAP32[r17+6]=r39;HEAP32[r17+3]=r16;HEAP32[r17+2]=r16;return}if((r40|0)==31){r41=0}else{r41=25-(r40>>>1)|0}r40=r38<<r41;r41=HEAP32[r39>>2];while(1){if((HEAP32[r41+4>>2]&-8|0)==(r38|0)){break}r42=(r40>>>31<<2)+r41+16|0;r39=HEAP32[r42>>2];if((r39|0)==0){r4=1171;break}else{r40=r40<<1;r41=r39}}if(r4==1171){if(r42>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}HEAP32[r42>>2]=r28;HEAP32[r17+6]=r41;HEAP32[r17+3]=r16;HEAP32[r17+2]=r16;return}r16=r41+8|0;r42=HEAP32[r16>>2];r4=HEAP32[__gm_+16>>2];if(r41>>>0<r4>>>0){_abort()}if(r42>>>0<r4>>>0){_abort()}HEAP32[r42+12>>2]=r28;HEAP32[r16>>2]=r28;HEAP32[r17+2]=r42;HEAP32[r17+3]=r41;HEAP32[r17+6]=0;return}function _init_top(r1,r2){var r3,r4,r5;r3=r1;r4=r1+8|0;if((r4&7|0)==0){r5=0}else{r5=-r4&7}r4=r2-r5|0;HEAP32[__gm_+24>>2]=r3+r5|0;HEAP32[__gm_+12>>2]=r4;HEAP32[r5+(r3+4)>>2]=r4|1;HEAP32[r2+(r3+4)>>2]=40;HEAP32[__gm_+28>>2]=HEAP32[_mparams+16>>2];return}function _init_bins(){var r1,r2,r3;r1=0;while(1){r2=r1<<1;r3=(r2<<2)+__gm_+40|0;HEAP32[__gm_+(r2+3<<2)+40>>2]=r3;HEAP32[__gm_+(r2+2<<2)+40>>2]=r3;r3=r1+1|0;if((r3|0)==32){break}else{r1=r3}}return}function _mmap_alloc(){}function _prepend_alloc(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39,r40;r4=r2>>2;r5=r1>>2;r6=0;r7=r1+8|0;if((r7&7|0)==0){r8=0}else{r8=-r7&7}r7=r2+8|0;if((r7&7|0)==0){r9=0,r10=r9>>2}else{r9=-r7&7,r10=r9>>2}r7=r2+r9|0;r11=r7;r12=r8+r3|0,r13=r12>>2;r14=r1+r12|0;r12=r14;r15=r7-(r1+r8)-r3|0;HEAP32[(r8+4>>2)+r5]=r3|3;if((r11|0)==(HEAP32[__gm_+24>>2]|0)){r3=HEAP32[__gm_+12>>2]+r15|0;HEAP32[__gm_+12>>2]=r3;HEAP32[__gm_+24>>2]=r12;HEAP32[r13+(r5+1)]=r3|1;r16=r8|8;r17=r1+r16|0;return r17}if((r11|0)==(HEAP32[__gm_+20>>2]|0)){r3=HEAP32[__gm_+8>>2]+r15|0;HEAP32[__gm_+8>>2]=r3;HEAP32[__gm_+20>>2]=r12;HEAP32[r13+(r5+1)]=r3|1;HEAP32[(r3>>2)+r5+r13]=r3;r16=r8|8;r17=r1+r16|0;return r17}r3=HEAP32[r10+(r4+1)];if((r3&3|0)==1){r18=r3&-8;r19=r3>>>3;L1591:do{if(r3>>>0<256){r20=HEAP32[((r9|8)>>2)+r4];r21=HEAP32[r10+(r4+3)];r22=(r19<<3)+__gm_+40|0;do{if((r20|0)!=(r22|0)){if(r20>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}if((HEAP32[r20+12>>2]|0)==(r11|0)){break}_abort()}}while(0);if((r21|0)==(r20|0)){HEAP32[__gm_>>2]=HEAP32[__gm_>>2]&(1<<r19^-1);break}do{if((r21|0)!=(r22|0)){if(r21>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}if((HEAP32[r21+8>>2]|0)==(r11|0)){break}_abort()}}while(0);HEAP32[r20+12>>2]=r21;HEAP32[r21+8>>2]=r20}else{r22=r7;r23=HEAP32[((r9|24)>>2)+r4];r24=HEAP32[r10+(r4+3)];L1593:do{if((r24|0)==(r22|0)){r25=r9|16;r26=r25+(r2+4)|0;r27=HEAP32[r26>>2];do{if((r27|0)==0){r28=r2+r25|0;r29=HEAP32[r28>>2];if((r29|0)==0){r30=0,r31=r30>>2;break L1593}else{r32=r29;r33=r28;break}}else{r32=r27;r33=r26}}while(0);while(1){r26=r32+20|0;if((HEAP32[r26>>2]|0)==0){r27=r32+16|0;if((HEAP32[r27>>2]|0)==0){break}else{r34=r27}}else{r34=r26}r32=HEAP32[r34>>2];r33=r34}if(r33>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r33>>2]=0;r30=r32,r31=r30>>2;break}}else{r26=HEAP32[((r9|8)>>2)+r4];if(r26>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}r27=r26+12|0;if((HEAP32[r27>>2]|0)!=(r22|0)){_abort()}r25=r24+8|0;if((HEAP32[r25>>2]|0)==(r22|0)){HEAP32[r27>>2]=r24;HEAP32[r25>>2]=r26;r30=r24,r31=r30>>2;break}else{_abort()}}}while(0);if((r23|0)==0){break}r24=r9+(r2+28)|0;r20=(HEAP32[r24>>2]<<2)+__gm_+304|0;do{if((r22|0)==(HEAP32[r20>>2]|0)){HEAP32[r20>>2]=r30;if((r30|0)!=0){break}HEAP32[__gm_+4>>2]=HEAP32[__gm_+4>>2]&(1<<HEAP32[r24>>2]^-1);break L1591}else{if(r23>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}r21=r23+16|0;if((HEAP32[r21>>2]|0)==(r22|0)){HEAP32[r21>>2]=r30}else{HEAP32[r23+20>>2]=r30}if((r30|0)==0){break L1591}}}while(0);if(r30>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}HEAP32[r31+6]=r23;r22=r9|16;r24=HEAP32[(r22>>2)+r4];do{if((r24|0)!=0){if(r24>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r31+4]=r24;HEAP32[r24+24>>2]=r30;break}}}while(0);r24=HEAP32[(r22+4>>2)+r4];if((r24|0)==0){break}if(r24>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}else{HEAP32[r31+5]=r24;HEAP32[r24+24>>2]=r30;break}}}while(0);r35=r2+(r18|r9)|0;r36=r18+r15|0}else{r35=r11;r36=r15}r15=r35+4|0;HEAP32[r15>>2]=HEAP32[r15>>2]&-2;HEAP32[r13+(r5+1)]=r36|1;HEAP32[(r36>>2)+r5+r13]=r36;r15=r36>>>3;if(r36>>>0<256){r35=r15<<1;r11=(r35<<2)+__gm_+40|0;r18=HEAP32[__gm_>>2];r9=1<<r15;do{if((r18&r9|0)==0){HEAP32[__gm_>>2]=r18|r9;r37=r11}else{r15=HEAP32[__gm_+(r35+2<<2)+40>>2];if(r15>>>0>=HEAP32[__gm_+16>>2]>>>0){r37=r15;break}_abort()}}while(0);HEAP32[__gm_+(r35+2<<2)+40>>2]=r12;HEAP32[r37+12>>2]=r12;HEAP32[r13+(r5+2)]=r37;HEAP32[r13+(r5+3)]=r11;r16=r8|8;r17=r1+r16|0;return r17}r11=r14;r14=r36>>>8;do{if((r14|0)==0){r38=0}else{if(r36>>>0>16777215){r38=31;break}r37=(r14+1048320|0)>>>16&8;r12=r14<<r37;r35=(r12+520192|0)>>>16&4;r9=r12<<r35;r12=(r9+245760|0)>>>16&2;r18=14-(r35|r37|r12)+(r9<<r12>>>15)|0;r38=r36>>>((r18+7|0)>>>0)&1|r18<<1}}while(0);r14=(r38<<2)+__gm_+304|0;HEAP32[r13+(r5+7)]=r38;HEAP32[r13+(r5+5)]=0;HEAP32[r13+(r5+4)]=0;r18=HEAP32[__gm_+4>>2];r12=1<<r38;if((r18&r12|0)==0){HEAP32[__gm_+4>>2]=r18|r12;HEAP32[r14>>2]=r11;HEAP32[r13+(r5+6)]=r14;HEAP32[r13+(r5+3)]=r11;HEAP32[r13+(r5+2)]=r11;r16=r8|8;r17=r1+r16|0;return r17}if((r38|0)==31){r39=0}else{r39=25-(r38>>>1)|0}r38=r36<<r39;r39=HEAP32[r14>>2];while(1){if((HEAP32[r39+4>>2]&-8|0)==(r36|0)){break}r40=(r38>>>31<<2)+r39+16|0;r14=HEAP32[r40>>2];if((r14|0)==0){r6=1285;break}else{r38=r38<<1;r39=r14}}if(r6==1285){if(r40>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}HEAP32[r40>>2]=r11;HEAP32[r13+(r5+6)]=r39;HEAP32[r13+(r5+3)]=r11;HEAP32[r13+(r5+2)]=r11;r16=r8|8;r17=r1+r16|0;return r17}r40=r39+8|0;r6=HEAP32[r40>>2];r38=HEAP32[__gm_+16>>2];if(r39>>>0<r38>>>0){_abort()}if(r6>>>0<r38>>>0){_abort()}HEAP32[r6+12>>2]=r11;HEAP32[r40>>2]=r11;HEAP32[r13+(r5+2)]=r6;HEAP32[r13+(r5+3)]=r39;HEAP32[r13+(r5+6)]=0;r16=r8|8;r17=r1+r16|0;return r17}function _add_segment(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;r3=0;r4=HEAP32[__gm_+24>>2],r5=r4>>2;r6=r4;r7=_segment_holding(r6);r8=HEAP32[r7>>2];r9=HEAP32[r7+4>>2];r7=r8+r9|0;r10=r8+(r9-39)|0;if((r10&7|0)==0){r11=0}else{r11=-r10&7}r10=r8+(r9-47)+r11|0;r11=r10>>>0<(r4+16|0)>>>0?r6:r10;r10=r11+8|0,r9=r10>>2;_init_top(r1,r2-40|0);HEAP32[r11+4>>2]=27;HEAP32[r9]=HEAP32[__gm_+448>>2];HEAP32[r9+1]=HEAP32[__gm_+452>>2];HEAP32[r9+2]=HEAP32[__gm_+456>>2];HEAP32[r9+3]=HEAP32[__gm_+460>>2];HEAP32[__gm_+448>>2]=r1;HEAP32[__gm_+452>>2]=r2;HEAP32[__gm_+460>>2]=0;HEAP32[__gm_+456>>2]=r10;r10=r11+28|0;HEAP32[r10>>2]=7;L1704:do{if((r11+32|0)>>>0<r7>>>0){r2=r10;while(1){r1=r2+4|0;HEAP32[r1>>2]=7;if((r2+8|0)>>>0<r7>>>0){r2=r1}else{break L1704}}}}while(0);if((r11|0)==(r6|0)){return}r7=r11-r4|0;r11=r7+(r6+4)|0;HEAP32[r11>>2]=HEAP32[r11>>2]&-2;HEAP32[r5+1]=r7|1;HEAP32[r6+r7>>2]=r7;r6=r7>>>3;if(r7>>>0<256){r11=r6<<1;r10=(r11<<2)+__gm_+40|0;r2=HEAP32[__gm_>>2];r1=1<<r6;do{if((r2&r1|0)==0){HEAP32[__gm_>>2]=r2|r1;r12=r10}else{r6=HEAP32[__gm_+(r11+2<<2)+40>>2];if(r6>>>0>=HEAP32[__gm_+16>>2]>>>0){r12=r6;break}_abort()}}while(0);HEAP32[__gm_+(r11+2<<2)+40>>2]=r4;HEAP32[r12+12>>2]=r4;HEAP32[r5+2]=r12;HEAP32[r5+3]=r10;return}r10=r4;r12=r7>>>8;do{if((r12|0)==0){r13=0}else{if(r7>>>0>16777215){r13=31;break}r11=(r12+1048320|0)>>>16&8;r1=r12<<r11;r2=(r1+520192|0)>>>16&4;r6=r1<<r2;r1=(r6+245760|0)>>>16&2;r9=14-(r2|r11|r1)+(r6<<r1>>>15)|0;r13=r7>>>((r9+7|0)>>>0)&1|r9<<1}}while(0);r12=(r13<<2)+__gm_+304|0;HEAP32[r5+7]=r13;HEAP32[r5+5]=0;HEAP32[r5+4]=0;r9=HEAP32[__gm_+4>>2];r1=1<<r13;if((r9&r1|0)==0){HEAP32[__gm_+4>>2]=r9|r1;HEAP32[r12>>2]=r10;HEAP32[r5+6]=r12;HEAP32[r5+3]=r4;HEAP32[r5+2]=r4;return}if((r13|0)==31){r14=0}else{r14=25-(r13>>>1)|0}r13=r7<<r14;r14=HEAP32[r12>>2];while(1){if((HEAP32[r14+4>>2]&-8|0)==(r7|0)){break}r15=(r13>>>31<<2)+r14+16|0;r12=HEAP32[r15>>2];if((r12|0)==0){r3=1329;break}else{r13=r13<<1;r14=r12}}if(r3==1329){if(r15>>>0<HEAP32[__gm_+16>>2]>>>0){_abort()}HEAP32[r15>>2]=r10;HEAP32[r5+6]=r14;HEAP32[r5+3]=r4;HEAP32[r5+2]=r4;return}r4=r14+8|0;r15=HEAP32[r4>>2];r3=HEAP32[__gm_+16>>2];if(r14>>>0<r3>>>0){_abort()}if(r15>>>0<r3>>>0){_abort()}HEAP32[r15+12>>2]=r10;HEAP32[r4>>2]=r10;HEAP32[r5+2]=r15;HEAP32[r5+3]=r14;HEAP32[r5+6]=0;return}function __ZNKSt9bad_alloc4whatEv(r1){return __str345|0}function __ZNKSt20bad_array_new_length4whatEv(r1){return __str1446|0}function __ZSt15get_new_handlerv(){return tempValue=HEAP32[__ZL13__new_handler>>2],HEAP32[__ZL13__new_handler>>2]=tempValue,tempValue}function __ZSt15set_new_handlerPFvvE(r1){return tempValue=HEAP32[__ZL13__new_handler>>2],HEAP32[__ZL13__new_handler>>2]=r1,tempValue}function __ZNSt9bad_allocC2Ev(r1){HEAP32[r1>>2]=__ZTVSt9bad_alloc+8|0;return}function __ZdlPv(r1){if((r1|0)==0){return}_free(r1);return}function __ZdlPvRKSt9nothrow_t(r1,r2){__ZdlPv(r1);return}function __ZdaPv(r1){__ZdlPv(r1);return}function __ZdaPvRKSt9nothrow_t(r1,r2){__ZdaPv(r1);return}function __ZNSt9bad_allocD0Ev(r1){__ZNSt9bad_allocD2Ev(r1);__ZdlPv(r1);return}function __ZNSt9bad_allocD2Ev(r1){return}function __ZNSt20bad_array_new_lengthC2Ev(r1){__ZNSt9bad_allocC2Ev(r1|0);HEAP32[r1>>2]=__ZTVSt20bad_array_new_length+8|0;return}function __ZNSt20bad_array_new_lengthD0Ev(r1){__ZNSt9bad_allocD2Ev(r1|0);__ZdlPv(r1);return}function _getopt(r1,r2,r3){return _getopt_internal(r1,r2,r3,0,0,0)}function _getopt_internal(r1,r2,r3,r4,r5,r6){var r7,r8,r9,r10,r11,r12,r13,r14,r15;r7=r2>>2;r8=0;r9=STACKTOP;if((r3|0)==0){r10=-1;STACKTOP=r9;return r10}if((HEAP32[_optind>>2]|0)==0){HEAP32[_optreset>>2]=1;HEAP32[_optind>>2]=1}if((HEAP32[_getopt_internal_posixly_correct>>2]|0)==-1|(HEAP32[_optreset>>2]|0)!=0){r11=(_getenv(__str547|0)|0)!=0&1;HEAP32[_getopt_internal_posixly_correct>>2]=r11}r11=HEAP8[r3];if(r11<<24>>24==45){r12=r6|2}else{r12=(HEAP32[_getopt_internal_posixly_correct>>2]|0)!=0|r11<<24>>24==43?r6&-2:r6}r6=HEAP8[r3];if(r6<<24>>24==43|r6<<24>>24==45){r13=r3+1|0}else{r13=r3}HEAP32[_optarg>>2]=0;do{if((HEAP32[_optreset>>2]|0)==0){r8=1375}else{HEAP32[_nonopt_end>>2]=-1;HEAP32[_nonopt_start>>2]=-1;r8=1374;break}}while(0);while(1){if(r8==1375){r8=0;if((HEAP8[HEAP32[_place>>2]]|0)!=0){break}}else if(r8==1374){r8=0;if((HEAP32[_optreset>>2]|0)==0){r8=1375;continue}}HEAP32[_optreset>>2]=0;r3=HEAP32[_optind>>2];if((r3|0)>=(r1|0)){r8=1377;break}r6=HEAP32[(r3<<2>>2)+r7];HEAP32[_place>>2]=r6;if((HEAP8[r6]|0)==45){if((HEAP8[r6+1|0]|0)!=0){r8=1393;break}if((_strchr(r13,45)|0)!=0){r8=1393;break}}HEAP32[_place>>2]=__str1648|0;if((r12&2|0)!=0){r8=1386;break}if((r12&1|0)==0){r10=-1;r8=1449;break}r6=HEAP32[_nonopt_start>>2];do{if((r6|0)==-1){HEAP32[_nonopt_start>>2]=HEAP32[_optind>>2]}else{r3=HEAP32[_nonopt_end>>2];if((r3|0)==-1){break}_permute_args(r6,r3,HEAP32[_optind>>2],r2);HEAP32[_nonopt_start>>2]=HEAP32[_optind>>2]-HEAP32[_nonopt_end>>2]+HEAP32[_nonopt_start>>2]|0;HEAP32[_nonopt_end>>2]=-1}}while(0);HEAP32[_optind>>2]=HEAP32[_optind>>2]+1|0;r8=1374;continue}do{if(r8==1449){STACKTOP=r9;return r10}else if(r8==1386){r6=HEAP32[_optind>>2];HEAP32[_optind>>2]=r6+1|0;HEAP32[_optarg>>2]=HEAP32[(r6<<2>>2)+r7];r10=1;STACKTOP=r9;return r10}else if(r8==1377){HEAP32[_place>>2]=__str1648|0;r6=HEAP32[_nonopt_end>>2];r3=HEAP32[_nonopt_start>>2];do{if((r6|0)==-1){if((r3|0)==-1){break}HEAP32[_optind>>2]=r3}else{_permute_args(r3,r6,HEAP32[_optind>>2],r2);HEAP32[_optind>>2]=HEAP32[_nonopt_start>>2]-HEAP32[_nonopt_end>>2]+HEAP32[_optind>>2]|0}}while(0);HEAP32[_nonopt_end>>2]=-1;HEAP32[_nonopt_start>>2]=-1;r10=-1;STACKTOP=r9;return r10}else if(r8==1393){if((HEAP32[_nonopt_start>>2]|0)!=-1&(HEAP32[_nonopt_end>>2]|0)==-1){HEAP32[_nonopt_end>>2]=HEAP32[_optind>>2]}r6=HEAP32[_place>>2];r3=r6+1|0;if((HEAP8[r3]|0)==0){break}HEAP32[_place>>2]=r3;if((HEAP8[r3]|0)!=45){break}if((HEAP8[r6+2|0]|0)!=0){break}HEAP32[_optind>>2]=HEAP32[_optind>>2]+1|0;HEAP32[_place>>2]=__str1648|0;r6=HEAP32[_nonopt_end>>2];if((r6|0)!=-1){_permute_args(HEAP32[_nonopt_start>>2],r6,HEAP32[_optind>>2],r2);HEAP32[_optind>>2]=HEAP32[_nonopt_start>>2]-HEAP32[_nonopt_end>>2]+HEAP32[_optind>>2]|0}HEAP32[_nonopt_end>>2]=-1;HEAP32[_nonopt_start>>2]=-1;r10=-1;STACKTOP=r9;return r10}}while(0);r6=(r4|0)!=0;do{if(r6){r3=HEAP32[_place>>2];if((r3|0)==(HEAP32[(HEAP32[_optind>>2]<<2>>2)+r7]|0)){break}if((HEAP8[r3]|0)!=45){if((r12&4|0)==0){break}}r3=HEAP32[_place>>2];r11=HEAP8[r3];if(r11<<24>>24==58){r14=0}else if(r11<<24>>24==45){HEAP32[_place>>2]=r3+1|0;r14=0}else{r14=(_strchr(r13,r11<<24>>24)|0)!=0&1}r11=_parse_long_options(r2,r13,r4,r5,r14);if((r11|0)==-1){break}HEAP32[_place>>2]=__str1648|0;r10=r11;STACKTOP=r9;return r10}}while(0);r14=HEAP32[_place>>2];r12=r14+1|0;HEAP32[_place>>2]=r12;r11=HEAP8[r14];r14=r11<<24>>24;do{if(r11<<24>>24==45){if((HEAP8[r12]|0)==0){r8=1412;break}else{r8=1414;break}}else if(r11<<24>>24!=58){r8=1412}}while(0);do{if(r8==1412){r12=_strchr(r13,r14);if((r12|0)==0){if(r11<<24>>24==45){r8=1414;break}else{break}}do{if(r6&r11<<24>>24==87){if((HEAP8[r12+1|0]|0)!=59){break}do{if((HEAP8[HEAP32[_place>>2]]|0)==0){r3=HEAP32[_optind>>2]+1|0;HEAP32[_optind>>2]=r3;if((r3|0)<(r1|0)){HEAP32[_place>>2]=HEAP32[(r3<<2>>2)+r7];break}HEAP32[_place>>2]=__str1648|0;do{if((HEAP32[_opterr>>2]|0)!=0){if((HEAP8[r13]|0)==58){break}__warnx(_recargchar|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r14,tempInt))}}while(0);HEAP32[_optopt>>2]=r14;r10=(HEAP8[r13]|0)==58?58:63;STACKTOP=r9;return r10}}while(0);r3=_parse_long_options(r2,r13,r4,r5,0);HEAP32[_place>>2]=__str1648|0;r10=r3;STACKTOP=r9;return r10}}while(0);if((HEAP8[r12+1|0]|0)!=58){if((HEAP8[HEAP32[_place>>2]]|0)!=0){r10=r14;STACKTOP=r9;return r10}HEAP32[_optind>>2]=HEAP32[_optind>>2]+1|0;r10=r14;STACKTOP=r9;return r10}HEAP32[_optarg>>2]=0;r3=HEAP32[_place>>2];do{if((HEAP8[r3]|0)==0){if((HEAP8[r12+2|0]|0)==58){break}r15=HEAP32[_optind>>2]+1|0;HEAP32[_optind>>2]=r15;if((r15|0)<(r1|0)){HEAP32[_optarg>>2]=HEAP32[(r15<<2>>2)+r7];break}HEAP32[_place>>2]=__str1648|0;do{if((HEAP32[_opterr>>2]|0)!=0){if((HEAP8[r13]|0)==58){break}__warnx(_recargchar|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r14,tempInt))}}while(0);HEAP32[_optopt>>2]=r14;r10=(HEAP8[r13]|0)==58?58:63;STACKTOP=r9;return r10}else{HEAP32[_optarg>>2]=r3}}while(0);HEAP32[_place>>2]=__str1648|0;HEAP32[_optind>>2]=HEAP32[_optind>>2]+1|0;r10=r14;STACKTOP=r9;return r10}}while(0);do{if(r8==1414){if((HEAP8[HEAP32[_place>>2]]|0)==0){r10=-1}else{break}STACKTOP=r9;return r10}}while(0);if((HEAP8[HEAP32[_place>>2]]|0)==0){HEAP32[_optind>>2]=HEAP32[_optind>>2]+1|0}do{if((HEAP32[_opterr>>2]|0)!=0){if((HEAP8[r13]|0)==58){break}__warnx(_illoptchar|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r14,tempInt))}}while(0);HEAP32[_optopt>>2]=r14;r10=63;STACKTOP=r9;return r10}function _getopt_long(r1,r2,r3,r4,r5){return _getopt_internal(r1,r2,r3,r4,r5,1)}function _getopt_long_only(r1,r2,r3,r4,r5){return _getopt_internal(r1,r2,r3,r4,r5,5)}function _permute_args(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;r5=r2-r1|0;r6=r3-r2|0;r7=_gcd(r5,r6);r8=(r3-r1|0)/(r7|0)&-1;if((r7|0)<=0){return}r1=(r8|0)>0;r3=-r5|0;r5=0;while(1){r9=r5+r2|0;L1902:do{if(r1){r10=(r9<<2)+r4|0;r11=0;r12=r9;while(1){r13=((r12|0)<(r2|0)?r6:r3)+r12|0;r14=(r13<<2)+r4|0;r15=HEAP32[r14>>2];HEAP32[r14>>2]=HEAP32[r10>>2];HEAP32[r10>>2]=r15;r15=r11+1|0;if((r15|0)==(r8|0)){break L1902}else{r11=r15;r12=r13}}}}while(0);r9=r5+1|0;if((r9|0)==(r7|0)){break}else{r5=r9}}return}function __Znwj(r1){var r2,r3,r4;r2=0;r3=(r1|0)==0?1:r1;while(1){r4=_malloc(r3);if((r4|0)!=0){r2=1479;break}r1=__ZSt15get_new_handlerv();if((r1|0)==0){break}FUNCTION_TABLE[r1]()}if(r2==1479){return r4}r4=___cxa_allocate_exception(4);__ZNSt9bad_allocC2Ev(r4);___cxa_throw(r4,__ZTISt9bad_alloc,FUNCTION_TABLE_OFFSET+26)}function __ZnwjRKSt9nothrow_t(r1,r2){return __Znwj(r1)}function __Znaj(r1){return __Znwj(r1)}function __ZnajRKSt9nothrow_t(r1,r2){return __Znaj(r1)}function __ZSt17__throw_bad_allocv(){var r1;r1=___cxa_allocate_exception(4);__ZNSt9bad_allocC2Ev(r1);___cxa_throw(r1,__ZTISt9bad_alloc,FUNCTION_TABLE_OFFSET+26)}function _gcd(r1,r2){var r3,r4,r5,r6;r3=(r1|0)%(r2|0);if((r3|0)==0){r4=r2;return r4}else{r5=r2;r6=r3}while(1){r3=(r5|0)%(r6|0);if((r3|0)==0){r4=r6;break}else{r5=r6;r6=r3}}return r4}function _parse_long_options(r1,r2,r3,r4,r5){var r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23;r6=r3>>2;r7=0;r8=STACKTOP;r9=HEAP32[_place>>2];HEAP32[_optind>>2]=HEAP32[_optind>>2]+1|0;r10=_strchr(r9,61);if((r10|0)==0){r11=_strlen(r9);r12=0}else{r11=r10-r9|0;r12=r10+1|0}r10=HEAP32[r6];do{if((r10|0)!=0){r13=(r5|0)!=0&(r11|0)==1;r14=0;r15=-1;r16=r10;L1937:while(1){do{if((_strncmp(r9,r16,r11)|0)==0){if((_strlen(r16)|0)==(r11|0)){r17=r14;break L1937}if(r13){r18=r15;break}if((r15|0)==-1){r18=r14}else{r7=1510;break L1937}}else{r18=r15}}while(0);r19=r14+1|0;r20=HEAP32[(r19<<4>>2)+r6];if((r20|0)==0){r17=r18;break}else{r14=r19;r15=r18;r16=r20}}if(r7==1510){do{if((HEAP32[_opterr>>2]|0)!=0){if((HEAP8[r2]|0)==58){break}__warnx(_ambig|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r11,HEAP32[tempInt+4>>2]=r9,tempInt))}}while(0);HEAP32[_optopt>>2]=0;r21=63;STACKTOP=r8;return r21}if((r17|0)==-1){break}r16=(r17<<4)+r3+4|0;r15=HEAP32[r16>>2];r14=(r12|0)==0;if(!((r15|0)!=0|r14)){do{if((HEAP32[_opterr>>2]|0)!=0){if((HEAP8[r2]|0)==58){break}__warnx(_noarg|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r11,HEAP32[tempInt+4>>2]=r9,tempInt))}}while(0);if((HEAP32[((r17<<4)+8>>2)+r6]|0)==0){r22=HEAP32[((r17<<4)+12>>2)+r6]}else{r22=0}HEAP32[_optopt>>2]=r22;r21=(HEAP8[r2]|0)==58?58:63;STACKTOP=r8;return r21}do{if((r15-1|0)>>>0<2){if(!r14){HEAP32[_optarg>>2]=r12;break}if((r15|0)!=1){break}r13=HEAP32[_optind>>2];HEAP32[_optind>>2]=r13+1|0;HEAP32[_optarg>>2]=HEAP32[r1+(r13<<2)>>2]}}while(0);if(!((HEAP32[r16>>2]|0)==1&(HEAP32[_optarg>>2]|0)==0)){if((r4|0)!=0){HEAP32[r4>>2]=r17}r15=HEAP32[((r17<<4)+8>>2)+r6];r14=HEAP32[((r17<<4)+12>>2)+r6];if((r15|0)==0){r21=r14;STACKTOP=r8;return r21}HEAP32[r15>>2]=r14;r21=0;STACKTOP=r8;return r21}do{if((HEAP32[_opterr>>2]|0)!=0){if((HEAP8[r2]|0)==58){break}__warnx(_recargstring|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r9,tempInt))}}while(0);if((HEAP32[((r17<<4)+8>>2)+r6]|0)==0){r23=HEAP32[((r17<<4)+12>>2)+r6]}else{r23=0}HEAP32[_optopt>>2]=r23;HEAP32[_optind>>2]=HEAP32[_optind>>2]-1|0;r21=(HEAP8[r2]|0)==58?58:63;STACKTOP=r8;return r21}}while(0);if((r5|0)!=0){HEAP32[_optind>>2]=HEAP32[_optind>>2]-1|0;r21=-1;STACKTOP=r8;return r21}do{if((HEAP32[_opterr>>2]|0)!=0){if((HEAP8[r2]|0)==58){break}__warnx(_illoptstring|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r9,tempInt))}}while(0);HEAP32[_optopt>>2]=0;r21=63;STACKTOP=r8;return r21}function __warn(r1,r2){var r3,r4;r3=STACKTOP;STACKTOP=STACKTOP+4|0;r4=r3;HEAP32[r4>>2]=r2;__vwarn(r1,HEAP32[r4>>2]);STACKTOP=r3;return}function __warnx(r1,r2){var r3,r4;r3=STACKTOP;STACKTOP=STACKTOP+4|0;r4=r3;HEAP32[r4>>2]=r2;__vwarnx(r1,HEAP32[r4>>2]);STACKTOP=r3;return}function __vwarn(r1,r2){var r3,r4,r5;r3=STACKTOP;r4=HEAP32[___errno_location()>>2];r5=HEAP32[___progname>>2];_fprintf(HEAP32[_stderr>>2],__str1951|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r5,tempInt));if((r1|0)!=0){_fprintf(HEAP32[_stderr>>2],r1,r2);_fwrite(__str120|0,2,1,HEAP32[_stderr>>2])}r2=HEAP32[_stderr>>2];r1=_strerror(r4);_fprintf(r2,__str221|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r1,tempInt));STACKTOP=r3;return}function __vwarnx(r1,r2){var r3,r4;r3=STACKTOP;r4=HEAP32[___progname>>2];_fprintf(HEAP32[_stderr>>2],__str2452|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r4,tempInt));if((r1|0)!=0){_fprintf(HEAP32[_stderr>>2],r1,r2)}_fputc(10,HEAP32[_stderr>>2]);STACKTOP=r3;return}function _strtod(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39;r3=0;r4=r1;while(1){if((_isspace(HEAP8[r4]|0)|0)==0){break}else{r4=r4+1|0}}r5=HEAP8[r4];if(r5<<24>>24==43){r6=r4+1|0;r7=0}else if(r5<<24>>24==45){r6=r4+1|0;r7=1}else{r6=r4;r7=0}r4=-1;r5=0;r8=r6;while(1){r6=HEAP8[r8];if(((r6<<24>>24)-48|0)>>>0<10){r9=r4}else{if(r6<<24>>24!=46|(r4|0)>-1){break}else{r9=r5}}r4=r9;r5=r5+1|0;r8=r8+1|0}r9=r8+ -r5|0;r6=(r4|0)<0;r10=((r6^1)<<31>>31)+r5|0;r11=(r10|0)>18;r12=(r11?-18:-r10|0)+(r6?r5:r4)|0;r4=r11?18:r10;do{if((r4|0)==0){r13=r1;r14=0}else{do{if((r4|0)>9){r10=r9;r11=r4;r5=0;while(1){r6=HEAP8[r10];r15=r10+1|0;if(r6<<24>>24==46){r16=HEAP8[r15];r17=r10+2|0}else{r16=r6;r17=r15}r18=(r16<<24>>24)+((r5*10&-1)-48)|0;r15=r11-1|0;if((r15|0)>9){r10=r17;r11=r15;r5=r18}else{break}}r19=(r18|0)*1e9;r20=9;r21=r17;r3=1574;break}else{if((r4|0)>0){r19=0;r20=r4;r21=r9;r3=1574;break}else{r22=0;r23=0;break}}}while(0);if(r3==1574){r5=r21;r11=r20;r10=0;while(1){r15=HEAP8[r5];r6=r5+1|0;if(r15<<24>>24==46){r24=HEAP8[r6];r25=r5+2|0}else{r24=r15;r25=r6}r26=(r24<<24>>24)+((r10*10&-1)-48)|0;r6=r11-1|0;if((r6|0)>0){r5=r25;r11=r6;r10=r26}else{break}}r22=r26|0;r23=r19}r10=r23+r22;r11=HEAP8[r8];L2042:do{if(r11<<24>>24==69|r11<<24>>24==101){r5=r8+1|0;r6=HEAP8[r5];if(r6<<24>>24==45){r27=r8+2|0;r28=1}else if(r6<<24>>24==43){r27=r8+2|0;r28=0}else{r27=r5;r28=0}if(((HEAP8[r27]|0)-48|0)>>>0<10){r29=r27;r30=0}else{r31=0;r32=r27;r33=r28;break}while(1){r5=(r30*10&-1)-48+(HEAP8[r29]|0)|0;r6=r29+1|0;if(((HEAP8[r6]|0)-48|0)>>>0<10){r29=r6;r30=r5}else{r31=r5;r32=r6;r33=r28;break L2042}}}else{r31=0;r32=r8;r33=0}}while(0);r11=r12+((r33|0)==0?r31:-r31|0)|0;r6=(r11|0)<0?-r11|0:r11;do{if((r6|0)>511){HEAP32[___errno_location()>>2]=34;r34=1;r35=_powersOf10|0;r36=511;r3=1591;break}else{if((r6|0)==0){r37=1;break}else{r34=1;r35=_powersOf10|0;r36=r6;r3=1591;break}}}while(0);L2054:do{if(r3==1591){while(1){r3=0;if((r36&1|0)==0){r38=r34}else{r38=r34*(HEAP32[tempDoublePtr>>2]=HEAP32[r35>>2],HEAP32[tempDoublePtr+4>>2]=HEAP32[r35+4>>2],HEAPF64[tempDoublePtr>>3])}r6=r36>>1;if((r6|0)==0){r37=r38;break L2054}else{r34=r38;r35=r35+8|0;r36=r6;r3=1591}}}}while(0);if((r11|0)>-1){r13=r32;r14=r10*r37;break}else{r13=r32;r14=r10/r37;break}}}while(0);if((r2|0)!=0){HEAP32[r2>>2]=r13}if((r7|0)==0){r39=r14;return r39}r39=-r14;return r39}function _strtold(r1,r2){return _strtod(r1,r2)}function _strtof(r1,r2){return _strtod(r1,r2)}function _strtod_l(r1,r2,r3){return _strtod(r1,r2)}function _strtold_l(r1,r2,r3){return _strtold(r1,r2)}function _atof(r1){return _strtod(r1,0)}function __err(r1,r2,r3){var r4,r5;r4=STACKTOP;STACKTOP=STACKTOP+4|0;r5=r4;HEAP32[r5>>2]=r3;__verr(r1,r2,HEAP32[r5>>2])}function __errx(r1,r2,r3){var r4,r5;r4=STACKTOP;STACKTOP=STACKTOP+4|0;r5=r4;HEAP32[r5>>2]=r3;__verrx(r1,r2,HEAP32[r5>>2])}function __verr(r1,r2,r3){var r4,r5;r4=HEAP32[___errno_location()>>2];r5=HEAP32[___progname>>2];_fprintf(HEAP32[_stderr>>2],__str949|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r5,tempInt));if((r2|0)!=0){_fprintf(HEAP32[_stderr>>2],r2,r3);_fwrite(__str110|0,2,1,HEAP32[_stderr>>2])}r3=HEAP32[_stderr>>2];r2=_strerror(r4);_fprintf(r3,__str211|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r2,tempInt));_exit(r1)}function __verrx(r1,r2,r3){var r4;r4=HEAP32[___progname>>2];_fprintf(HEAP32[_stderr>>2],__str1550|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r4,tempInt));if((r2|0)!=0){_fprintf(HEAP32[_stderr>>2],r2,r3)}_fputc(10,HEAP32[_stderr>>2]);_exit(r1)}function _i64Add(r1,r2,r3,r4){var r5,r6;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0;r5=r1+r3>>>0;r6=r2+r4+(r5>>>0<r1>>>0|0)>>>0;return tempRet0=r6,r5|0}function _i64Subtract(r1,r2,r3,r4){var r5,r6;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0;r5=r1-r3>>>0;r6=r2-r4>>>0;r6=r2-r4-(r3>>>0>r1>>>0|0)>>>0;return tempRet0=r6,r5|0}function _bitshift64Shl(r1,r2,r3){var r4;r1=r1|0;r2=r2|0;r3=r3|0;r4=0;if((r3|0)<32){r4=(1<<r3)-1|0;tempRet0=r2<<r3|(r1&r4<<32-r3)>>>32-r3;return r1<<r3}tempRet0=r1<<r3-32;return 0}function _bitshift64Lshr(r1,r2,r3){var r4;r1=r1|0;r2=r2|0;r3=r3|0;r4=0;if((r3|0)<32){r4=(1<<r3)-1|0;tempRet0=r2>>>r3;return r1>>>r3|(r2&r4)<<32-r3}tempRet0=0;return r2>>>r3-32|0}function _bitshift64Ashr(r1,r2,r3){var r4;r1=r1|0;r2=r2|0;r3=r3|0;r4=0;if((r3|0)<32){r4=(1<<r3)-1|0;tempRet0=r2>>r3;return r1>>>r3|(r2&r4)<<32-r3}tempRet0=(r2|0)<0?-1:0;return r2>>r3-32|0}function _llvm_ctlz_i32(r1){var r2;r1=r1|0;r2=0;r2=HEAP8[ctlz_i8+(r1>>>24)|0];if((r2|0)<8)return r2|0;r2=HEAP8[ctlz_i8+(r1>>16&255)|0];if((r2|0)<8)return r2+8|0;r2=HEAP8[ctlz_i8+(r1>>8&255)|0];if((r2|0)<8)return r2+16|0;return HEAP8[ctlz_i8+(r1&255)|0]+24|0}var ctlz_i8=allocate([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"i8",ALLOC_STACK);function _llvm_cttz_i32(r1){var r2;r1=r1|0;r2=0;r2=HEAP8[cttz_i8+(r1&255)|0];if((r2|0)<8)return r2|0;r2=HEAP8[cttz_i8+(r1>>8&255)|0];if((r2|0)<8)return r2+8|0;r2=HEAP8[cttz_i8+(r1>>16&255)|0];if((r2|0)<8)return r2+16|0;return HEAP8[cttz_i8+(r1>>>24)|0]+24|0}var cttz_i8=allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0],"i8",ALLOC_STACK);function ___muldsi3(r1,r2){var r3,r4,r5,r6,r7,r8,r9;r1=r1|0;r2=r2|0;r3=0,r4=0,r5=0,r6=0,r7=0,r8=0,r9=0;r3=r1&65535;r4=r2&65535;r5=Math.imul(r4,r3);r6=r1>>>16;r7=(r5>>>16)+Math.imul(r4,r6)|0;r8=r2>>>16;r9=Math.imul(r8,r3);return(tempRet0=(r7>>>16)+Math.imul(r8,r6)+(((r7&65535)+r9|0)>>>16)|0,0|(r7+r9<<16|r5&65535))|0}function ___divdi3(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0,r7=0,r8=0,r9=0,r10=0,r11=0,r12=0,r13=0,r14=0,r15=0;r5=r2>>31|((r2|0)<0?-1:0)<<1;r6=((r2|0)<0?-1:0)>>31|((r2|0)<0?-1:0)<<1;r7=r4>>31|((r4|0)<0?-1:0)<<1;r8=((r4|0)<0?-1:0)>>31|((r4|0)<0?-1:0)<<1;r9=_i64Subtract(r5^r1,r6^r2,r5,r6)|0;r10=tempRet0;r11=_i64Subtract(r7^r3,r8^r4,r7,r8)|0;r12=r7^r5;r13=r8^r6;r14=___udivmoddi4(r9,r10,r11,tempRet0,0)|0;r15=_i64Subtract(r14^r12,tempRet0^r13,r12,r13)|0;return(tempRet0=tempRet0,r15)|0}function ___remdi3(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0,r7=0,r8=0,r9=0,r10=0,r11=0,r12=0,r13=0,r14=0,r15=0;r15=STACKTOP;STACKTOP=STACKTOP+8|0;r5=r15|0;r6=r2>>31|((r2|0)<0?-1:0)<<1;r7=((r2|0)<0?-1:0)>>31|((r2|0)<0?-1:0)<<1;r8=r4>>31|((r4|0)<0?-1:0)<<1;r9=((r4|0)<0?-1:0)>>31|((r4|0)<0?-1:0)<<1;r10=_i64Subtract(r6^r1,r7^r2,r6,r7)|0;r11=tempRet0;r12=_i64Subtract(r8^r3,r9^r4,r8,r9)|0;___udivmoddi4(r10,r11,r12,tempRet0,r5);r13=_i64Subtract(HEAP32[r5>>2]^r6,HEAP32[r5+4>>2]^r7,r6,r7)|0;r14=tempRet0;STACKTOP=r15;return(tempRet0=r14,r13)|0}function ___muldi3(r1,r2,r3,r4){var r5,r6,r7,r8,r9;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0,r7=0,r8=0,r9=0;r5=r1;r6=r3;r7=___muldsi3(r5,r6)|0;r8=tempRet0;r9=Math.imul(r2,r6);return(tempRet0=Math.imul(r4,r5)+r9+r8|r8&0,0|r7&-1)|0}function ___udivdi3(r1,r2,r3,r4){var r5;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0;r5=___udivmoddi4(r1,r2,r3,r4,0)|0;return(tempRet0=tempRet0,r5)|0}function ___uremdi3(r1,r2,r3,r4){var r5,r6;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=0,r6=0;r6=STACKTOP;STACKTOP=STACKTOP+8|0;r5=r6|0;___udivmoddi4(r1,r2,r3,r4,r5);STACKTOP=r6;return(tempRet0=HEAP32[r5+4>>2]|0,HEAP32[r5>>2]|0)|0}function ___udivmoddi4(r1,r2,r3,r4,r5){var r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,r41,r42,r43,r44,r45,r46,r47,r48,r49,r50,r51,r52,r53,r54,r55,r56,r57,r58,r59,r60,r61,r62,r63,r64,r65,r66,r67,r68,r69;r1=r1|0;r2=r2|0;r3=r3|0;r4=r4|0;r5=r5|0;r6=0,r7=0,r8=0,r9=0,r10=0,r11=0,r12=0,r13=0,r14=0,r15=0,r16=0,r17=0,r18=0,r19=0,r20=0,r21=0,r22=0,r23=0,r24=0,r25=0,r26=0,r27=0,r28=0,r29=0,r30=0,r31=0,r32=0,r33=0,r34=0,r35=0,r36=0,r37=0,r38=0,r39=0,r40=0,r41=0,r42=0,r43=0,r44=0,r45=0,r46=0,r47=0,r48=0,r49=0,r50=0,r51=0,r52=0,r53=0,r54=0,r55=0,r56=0,r57=0,r58=0,r59=0,r60=0,r61=0,r62=0,r63=0,r64=0,r65=0,r66=0,r67=0,r68=0,r69=0;r6=r1;r7=r2;r8=r7;r9=r3;r10=r4;r11=r10;if((r8|0)==0){r12=(r5|0)!=0;if((r11|0)==0){if(r12){HEAP32[r5>>2]=(r6>>>0)%(r9>>>0);HEAP32[r5+4>>2]=0}r69=0;r68=(r6>>>0)/(r9>>>0)>>>0;return(tempRet0=r69,r68)|0}else{if(!r12){r69=0;r68=0;return(tempRet0=r69,r68)|0}HEAP32[r5>>2]=r1&-1;HEAP32[r5+4>>2]=r2&0;r69=0;r68=0;return(tempRet0=r69,r68)|0}}r13=(r11|0)==0;do{if((r9|0)==0){if(r13){if((r5|0)!=0){HEAP32[r5>>2]=(r8>>>0)%(r9>>>0);HEAP32[r5+4>>2]=0}r69=0;r68=(r8>>>0)/(r9>>>0)>>>0;return(tempRet0=r69,r68)|0}if((r6|0)==0){if((r5|0)!=0){HEAP32[r5>>2]=0;HEAP32[r5+4>>2]=(r8>>>0)%(r11>>>0)}r69=0;r68=(r8>>>0)/(r11>>>0)>>>0;return(tempRet0=r69,r68)|0}r14=r11-1|0;if((r14&r11|0)==0){if((r5|0)!=0){HEAP32[r5>>2]=0|r1&-1;HEAP32[r5+4>>2]=r14&r8|r2&0}r69=0;r68=r8>>>((_llvm_cttz_i32(r11|0)|0)>>>0);return(tempRet0=r69,r68)|0}r15=_llvm_ctlz_i32(r11|0)|0;r16=r15-_llvm_ctlz_i32(r8|0)|0;if(r16>>>0<=30){r17=r16+1|0;r18=31-r16|0;r37=r17;r36=r8<<r18|r6>>>(r17>>>0);r35=r8>>>(r17>>>0);r34=0;r33=r6<<r18;break}if((r5|0)==0){r69=0;r68=0;return(tempRet0=r69,r68)|0}HEAP32[r5>>2]=0|r1&-1;HEAP32[r5+4>>2]=r7|r2&0;r69=0;r68=0;return(tempRet0=r69,r68)|0}else{if(!r13){r28=_llvm_ctlz_i32(r11|0)|0;r29=r28-_llvm_ctlz_i32(r8|0)|0;if(r29>>>0<=31){r30=r29+1|0;r31=31-r29|0;r32=r29-31>>31;r37=r30;r36=r6>>>(r30>>>0)&r32|r8<<r31;r35=r8>>>(r30>>>0)&r32;r34=0;r33=r6<<r31;break}if((r5|0)==0){r69=0;r68=0;return(tempRet0=r69,r68)|0}HEAP32[r5>>2]=0|r1&-1;HEAP32[r5+4>>2]=r7|r2&0;r69=0;r68=0;return(tempRet0=r69,r68)|0}r19=r9-1|0;if((r19&r9|0)!=0){r21=_llvm_ctlz_i32(r9|0)+33|0;r22=r21-_llvm_ctlz_i32(r8|0)|0;r23=64-r22|0;r24=32-r22|0;r25=r24>>31;r26=r22-32|0;r27=r26>>31;r37=r22;r36=r24-1>>31&r8>>>(r26>>>0)|(r8<<r24|r6>>>(r22>>>0))&r27;r35=r27&r8>>>(r22>>>0);r34=r6<<r23&r25;r33=(r8<<r23|r6>>>(r26>>>0))&r25|r6<<r24&r22-33>>31;break}if((r5|0)!=0){HEAP32[r5>>2]=r19&r6;HEAP32[r5+4>>2]=0}if((r9|0)==1){r69=r7|r2&0;r68=0|r1&-1;return(tempRet0=r69,r68)|0}else{r20=_llvm_cttz_i32(r9|0)|0;r69=0|r8>>>(r20>>>0);r68=r8<<32-r20|r6>>>(r20>>>0)|0;return(tempRet0=r69,r68)|0}}}while(0);if((r37|0)==0){r64=r33;r63=r34;r62=r35;r61=r36;r60=0;r59=0}else{r38=0|r3&-1;r39=r10|r4&0;r40=_i64Add(r38,r39,-1,-1)|0;r41=tempRet0;r47=r33;r46=r34;r45=r35;r44=r36;r43=r37;r42=0;while(1){r48=r46>>>31|r47<<1;r49=r42|r46<<1;r50=0|(r44<<1|r47>>>31);r51=r44>>>31|r45<<1|0;_i64Subtract(r40,r41,r50,r51);r52=tempRet0;r53=r52>>31|((r52|0)<0?-1:0)<<1;r54=r53&1;r55=_i64Subtract(r50,r51,r53&r38,(((r52|0)<0?-1:0)>>31|((r52|0)<0?-1:0)<<1)&r39)|0;r56=r55;r57=tempRet0;r58=r43-1|0;if((r58|0)==0){break}else{r47=r48;r46=r49;r45=r57;r44=r56;r43=r58;r42=r54}}r64=r48;r63=r49;r62=r57;r61=r56;r60=0;r59=r54}r65=r63;r66=0;r67=r64|r66;if((r5|0)!=0){HEAP32[r5>>2]=0|r61;HEAP32[r5+4>>2]=r62|0}r69=(0|r65)>>>31|r67<<1|(r66<<1|r65>>>31)&0|r60;r68=(r65<<1|0>>>31)&-2|r59;return(tempRet0=r69,r68)|0}
// EMSCRIPTEN_END_FUNCS
Module["_init_lsprof"] = _init_lsprof;
Module["_calloc"] = _calloc;
Module["_realloc"] = _realloc;
// TODO: strip out parts of this we do not need
//======= begin closure i64 code =======
// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Defines a Long class for representing a 64-bit two's-complement
 * integer value, which faithfully simulates the behavior of a Java "long". This
 * implementation is derived from LongLib in GWT.
 *
 */
var i64Math = (function() { // Emscripten wrapper
  var goog = { math: {} };
  /**
   * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
   * values as *signed* integers.  See the from* functions below for more
   * convenient ways of constructing Longs.
   *
   * The internal representation of a long is the two given signed, 32-bit values.
   * We use 32-bit pieces because these are the size of integers on which
   * Javascript performs bit-operations.  For operations like addition and
   * multiplication, we split each number into 16-bit pieces, which can easily be
   * multiplied within Javascript's floating-point representation without overflow
   * or change in sign.
   *
   * In the algorithms below, we frequently reduce the negative case to the
   * positive case by negating the input(s) and then post-processing the result.
   * Note that we must ALWAYS check specially whether those values are MIN_VALUE
   * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
   * a positive number, it overflows back into a negative).  Not handling this
   * case would often result in infinite recursion.
   *
   * @param {number} low  The low (signed) 32 bits of the long.
   * @param {number} high  The high (signed) 32 bits of the long.
   * @constructor
   */
  goog.math.Long = function(low, high) {
    /**
     * @type {number}
     * @private
     */
    this.low_ = low | 0;  // force into 32 signed bits.
    /**
     * @type {number}
     * @private
     */
    this.high_ = high | 0;  // force into 32 signed bits.
  };
  // NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the
  // from* methods on which they depend.
  /**
   * A cache of the Long representations of small integer values.
   * @type {!Object}
   * @private
   */
  goog.math.Long.IntCache_ = {};
  /**
   * Returns a Long representing the given (32-bit) integer value.
   * @param {number} value The 32-bit integer in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromInt = function(value) {
    if (-128 <= value && value < 128) {
      var cachedObj = goog.math.Long.IntCache_[value];
      if (cachedObj) {
        return cachedObj;
      }
    }
    var obj = new goog.math.Long(value | 0, value < 0 ? -1 : 0);
    if (-128 <= value && value < 128) {
      goog.math.Long.IntCache_[value] = obj;
    }
    return obj;
  };
  /**
   * Returns a Long representing the given value, provided that it is a finite
   * number.  Otherwise, zero is returned.
   * @param {number} value The number in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromNumber = function(value) {
    if (isNaN(value) || !isFinite(value)) {
      return goog.math.Long.ZERO;
    } else if (value <= -goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MIN_VALUE;
    } else if (value + 1 >= goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MAX_VALUE;
    } else if (value < 0) {
      return goog.math.Long.fromNumber(-value).negate();
    } else {
      return new goog.math.Long(
          (value % goog.math.Long.TWO_PWR_32_DBL_) | 0,
          (value / goog.math.Long.TWO_PWR_32_DBL_) | 0);
    }
  };
  /**
   * Returns a Long representing the 64-bit integer that comes by concatenating
   * the given high and low bits.  Each is assumed to use 32 bits.
   * @param {number} lowBits The low 32-bits.
   * @param {number} highBits The high 32-bits.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromBits = function(lowBits, highBits) {
    return new goog.math.Long(lowBits, highBits);
  };
  /**
   * Returns a Long representation of the given string, written using the given
   * radix.
   * @param {string} str The textual representation of the Long.
   * @param {number=} opt_radix The radix in which the text is written.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromString = function(str, opt_radix) {
    if (str.length == 0) {
      throw Error('number format error: empty string');
    }
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (str.charAt(0) == '-') {
      return goog.math.Long.fromString(str.substring(1), radix).negate();
    } else if (str.indexOf('-') >= 0) {
      throw Error('number format error: interior "-" character: ' + str);
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 8));
    var result = goog.math.Long.ZERO;
    for (var i = 0; i < str.length; i += 8) {
      var size = Math.min(8, str.length - i);
      var value = parseInt(str.substring(i, i + size), radix);
      if (size < 8) {
        var power = goog.math.Long.fromNumber(Math.pow(radix, size));
        result = result.multiply(power).add(goog.math.Long.fromNumber(value));
      } else {
        result = result.multiply(radixToPower);
        result = result.add(goog.math.Long.fromNumber(value));
      }
    }
    return result;
  };
  // NOTE: the compiler should inline these constant values below and then remove
  // these variables, so there should be no runtime penalty for these.
  /**
   * Number used repeated below in calculations.  This must appear before the
   * first call to any from* function below.
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_16_DBL_ = 1 << 16;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_24_DBL_ = 1 << 24;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_32_DBL_ =
      goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_31_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ / 2;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_48_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_64_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_63_DBL_ =
      goog.math.Long.TWO_PWR_64_DBL_ / 2;
  /** @type {!goog.math.Long} */
  goog.math.Long.ZERO = goog.math.Long.fromInt(0);
  /** @type {!goog.math.Long} */
  goog.math.Long.ONE = goog.math.Long.fromInt(1);
  /** @type {!goog.math.Long} */
  goog.math.Long.NEG_ONE = goog.math.Long.fromInt(-1);
  /** @type {!goog.math.Long} */
  goog.math.Long.MAX_VALUE =
      goog.math.Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);
  /** @type {!goog.math.Long} */
  goog.math.Long.MIN_VALUE = goog.math.Long.fromBits(0, 0x80000000 | 0);
  /**
   * @type {!goog.math.Long}
   * @private
   */
  goog.math.Long.TWO_PWR_24_ = goog.math.Long.fromInt(1 << 24);
  /** @return {number} The value, assuming it is a 32-bit integer. */
  goog.math.Long.prototype.toInt = function() {
    return this.low_;
  };
  /** @return {number} The closest floating-point representation to this value. */
  goog.math.Long.prototype.toNumber = function() {
    return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ +
           this.getLowBitsUnsigned();
  };
  /**
   * @param {number=} opt_radix The radix in which the text should be written.
   * @return {string} The textual representation of this value.
   */
  goog.math.Long.prototype.toString = function(opt_radix) {
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (this.isZero()) {
      return '0';
    }
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        // We need to change the Long value before it can be negated, so we remove
        // the bottom-most digit in this base and then recurse to do the rest.
        var radixLong = goog.math.Long.fromNumber(radix);
        var div = this.div(radixLong);
        var rem = div.multiply(radixLong).subtract(this);
        return div.toString(radix) + rem.toInt().toString(radix);
      } else {
        return '-' + this.negate().toString(radix);
      }
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 6));
    var rem = this;
    var result = '';
    while (true) {
      var remDiv = rem.div(radixToPower);
      var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
      var digits = intval.toString(radix);
      rem = remDiv;
      if (rem.isZero()) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = '' + digits + result;
      }
    }
  };
  /** @return {number} The high 32-bits as a signed value. */
  goog.math.Long.prototype.getHighBits = function() {
    return this.high_;
  };
  /** @return {number} The low 32-bits as a signed value. */
  goog.math.Long.prototype.getLowBits = function() {
    return this.low_;
  };
  /** @return {number} The low 32-bits as an unsigned value. */
  goog.math.Long.prototype.getLowBitsUnsigned = function() {
    return (this.low_ >= 0) ?
        this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
  };
  /**
   * @return {number} Returns the number of bits needed to represent the absolute
   *     value of this Long.
   */
  goog.math.Long.prototype.getNumBitsAbs = function() {
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        return 64;
      } else {
        return this.negate().getNumBitsAbs();
      }
    } else {
      var val = this.high_ != 0 ? this.high_ : this.low_;
      for (var bit = 31; bit > 0; bit--) {
        if ((val & (1 << bit)) != 0) {
          break;
        }
      }
      return this.high_ != 0 ? bit + 33 : bit + 1;
    }
  };
  /** @return {boolean} Whether this value is zero. */
  goog.math.Long.prototype.isZero = function() {
    return this.high_ == 0 && this.low_ == 0;
  };
  /** @return {boolean} Whether this value is negative. */
  goog.math.Long.prototype.isNegative = function() {
    return this.high_ < 0;
  };
  /** @return {boolean} Whether this value is odd. */
  goog.math.Long.prototype.isOdd = function() {
    return (this.low_ & 1) == 1;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long equals the other.
   */
  goog.math.Long.prototype.equals = function(other) {
    return (this.high_ == other.high_) && (this.low_ == other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long does not equal the other.
   */
  goog.math.Long.prototype.notEquals = function(other) {
    return (this.high_ != other.high_) || (this.low_ != other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than the other.
   */
  goog.math.Long.prototype.lessThan = function(other) {
    return this.compare(other) < 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than or equal to the other.
   */
  goog.math.Long.prototype.lessThanOrEqual = function(other) {
    return this.compare(other) <= 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than the other.
   */
  goog.math.Long.prototype.greaterThan = function(other) {
    return this.compare(other) > 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than or equal to the other.
   */
  goog.math.Long.prototype.greaterThanOrEqual = function(other) {
    return this.compare(other) >= 0;
  };
  /**
   * Compares this Long with the given one.
   * @param {goog.math.Long} other Long to compare against.
   * @return {number} 0 if they are the same, 1 if the this is greater, and -1
   *     if the given one is greater.
   */
  goog.math.Long.prototype.compare = function(other) {
    if (this.equals(other)) {
      return 0;
    }
    var thisNeg = this.isNegative();
    var otherNeg = other.isNegative();
    if (thisNeg && !otherNeg) {
      return -1;
    }
    if (!thisNeg && otherNeg) {
      return 1;
    }
    // at this point, the signs are the same, so subtraction will not overflow
    if (this.subtract(other).isNegative()) {
      return -1;
    } else {
      return 1;
    }
  };
  /** @return {!goog.math.Long} The negation of this value. */
  goog.math.Long.prototype.negate = function() {
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.MIN_VALUE;
    } else {
      return this.not().add(goog.math.Long.ONE);
    }
  };
  /**
   * Returns the sum of this and the given Long.
   * @param {goog.math.Long} other Long to add to this one.
   * @return {!goog.math.Long} The sum of this and the given Long.
   */
  goog.math.Long.prototype.add = function(other) {
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns the difference of this and the given Long.
   * @param {goog.math.Long} other Long to subtract from this.
   * @return {!goog.math.Long} The difference of this and the given Long.
   */
  goog.math.Long.prototype.subtract = function(other) {
    return this.add(other.negate());
  };
  /**
   * Returns the product of this and the given long.
   * @param {goog.math.Long} other Long to multiply with this.
   * @return {!goog.math.Long} The product of this and the other.
   */
  goog.math.Long.prototype.multiply = function(other) {
    if (this.isZero()) {
      return goog.math.Long.ZERO;
    } else if (other.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return other.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return this.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().multiply(other.negate());
      } else {
        return this.negate().multiply(other).negate();
      }
    } else if (other.isNegative()) {
      return this.multiply(other.negate()).negate();
    }
    // If both longs are small, use float multiplication
    if (this.lessThan(goog.math.Long.TWO_PWR_24_) &&
        other.lessThan(goog.math.Long.TWO_PWR_24_)) {
      return goog.math.Long.fromNumber(this.toNumber() * other.toNumber());
    }
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns this Long divided by the given one.
   * @param {goog.math.Long} other Long by which to divide.
   * @return {!goog.math.Long} This Long divided by the given one.
   */
  goog.math.Long.prototype.div = function(other) {
    if (other.isZero()) {
      throw Error('division by zero');
    } else if (this.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      if (other.equals(goog.math.Long.ONE) ||
          other.equals(goog.math.Long.NEG_ONE)) {
        return goog.math.Long.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
      } else if (other.equals(goog.math.Long.MIN_VALUE)) {
        return goog.math.Long.ONE;
      } else {
        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
        var halfThis = this.shiftRight(1);
        var approx = halfThis.div(other).shiftLeft(1);
        if (approx.equals(goog.math.Long.ZERO)) {
          return other.isNegative() ? goog.math.Long.ONE : goog.math.Long.NEG_ONE;
        } else {
          var rem = this.subtract(other.multiply(approx));
          var result = approx.add(rem.div(other));
          return result;
        }
      }
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().div(other.negate());
      } else {
        return this.negate().div(other).negate();
      }
    } else if (other.isNegative()) {
      return this.div(other.negate()).negate();
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    var res = goog.math.Long.ZERO;
    var rem = this;
    while (rem.greaterThanOrEqual(other)) {
      // Approximate the result of division. This may be a little greater or
      // smaller than the actual value.
      var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
      // We will tweak the approximate result by changing it in the 48-th digit or
      // the smallest non-fractional digit, whichever is larger.
      var log2 = Math.ceil(Math.log(approx) / Math.LN2);
      var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);
      // Decrease the approximation until it is smaller than the remainder.  Note
      // that if it is too large, the product overflows and is negative.
      var approxRes = goog.math.Long.fromNumber(approx);
      var approxRem = approxRes.multiply(other);
      while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
        approx -= delta;
        approxRes = goog.math.Long.fromNumber(approx);
        approxRem = approxRes.multiply(other);
      }
      // We know the answer can't be zero... and actually, zero would cause
      // infinite recursion since we would make no progress.
      if (approxRes.isZero()) {
        approxRes = goog.math.Long.ONE;
      }
      res = res.add(approxRes);
      rem = rem.subtract(approxRem);
    }
    return res;
  };
  /**
   * Returns this Long modulo the given one.
   * @param {goog.math.Long} other Long by which to mod.
   * @return {!goog.math.Long} This Long modulo the given one.
   */
  goog.math.Long.prototype.modulo = function(other) {
    return this.subtract(this.div(other).multiply(other));
  };
  /** @return {!goog.math.Long} The bitwise-NOT of this value. */
  goog.math.Long.prototype.not = function() {
    return goog.math.Long.fromBits(~this.low_, ~this.high_);
  };
  /**
   * Returns the bitwise-AND of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to AND.
   * @return {!goog.math.Long} The bitwise-AND of this and the other.
   */
  goog.math.Long.prototype.and = function(other) {
    return goog.math.Long.fromBits(this.low_ & other.low_,
                                   this.high_ & other.high_);
  };
  /**
   * Returns the bitwise-OR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to OR.
   * @return {!goog.math.Long} The bitwise-OR of this and the other.
   */
  goog.math.Long.prototype.or = function(other) {
    return goog.math.Long.fromBits(this.low_ | other.low_,
                                   this.high_ | other.high_);
  };
  /**
   * Returns the bitwise-XOR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to XOR.
   * @return {!goog.math.Long} The bitwise-XOR of this and the other.
   */
  goog.math.Long.prototype.xor = function(other) {
    return goog.math.Long.fromBits(this.low_ ^ other.low_,
                                   this.high_ ^ other.high_);
  };
  /**
   * Returns this Long with bits shifted to the left by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the left by the given amount.
   */
  goog.math.Long.prototype.shiftLeft = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var low = this.low_;
      if (numBits < 32) {
        var high = this.high_;
        return goog.math.Long.fromBits(
            low << numBits,
            (high << numBits) | (low >>> (32 - numBits)));
      } else {
        return goog.math.Long.fromBits(0, low << (numBits - 32));
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount.
   */
  goog.math.Long.prototype.shiftRight = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >> numBits);
      } else {
        return goog.math.Long.fromBits(
            high >> (numBits - 32),
            high >= 0 ? 0 : -1);
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount, with
   * the new top bits matching the current sign bit.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount, with
   *     zeros placed into the new leading bits.
   */
  goog.math.Long.prototype.shiftRightUnsigned = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >>> numBits);
      } else if (numBits == 32) {
        return goog.math.Long.fromBits(high, 0);
      } else {
        return goog.math.Long.fromBits(high >>> (numBits - 32), 0);
      }
    }
  };
  //======= begin jsbn =======
  var navigator = { appName: 'Modern Browser' }; // polyfill a little
  // Copyright (c) 2005  Tom Wu
  // All Rights Reserved.
  // http://www-cs-students.stanford.edu/~tjw/jsbn/
  /*
   * Copyright (c) 2003-2005  Tom Wu
   * All Rights Reserved.
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND, 
   * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY 
   * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  
   *
   * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
   * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
   * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
   * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
   * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * In addition, the following condition applies:
   *
   * All redistributions must retain an intact copy of this copyright notice
   * and disclaimer.
   */
  // Basic JavaScript BN library - subset useful for RSA encryption.
  // Bits per digit
  var dbits;
  // JavaScript engine analysis
  var canary = 0xdeadbeefcafe;
  var j_lm = ((canary&0xffffff)==0xefcafe);
  // (public) Constructor
  function BigInteger(a,b,c) {
    if(a != null)
      if("number" == typeof a) this.fromNumber(a,b,c);
      else if(b == null && "string" != typeof a) this.fromString(a,256);
      else this.fromString(a,b);
  }
  // return new, unset BigInteger
  function nbi() { return new BigInteger(null); }
  // am: Compute w_j += (x*this_i), propagate carries,
  // c is initial carry, returns final carry.
  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
  // We need to select the fastest one that works in this environment.
  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
  function am1(i,x,w,j,c,n) {
    while(--n >= 0) {
      var v = x*this[i++]+w[j]+c;
      c = Math.floor(v/0x4000000);
      w[j++] = v&0x3ffffff;
    }
    return c;
  }
  // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
  function am2(i,x,w,j,c,n) {
    var xl = x&0x7fff, xh = x>>15;
    while(--n >= 0) {
      var l = this[i]&0x7fff;
      var h = this[i++]>>15;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
      c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
      w[j++] = l&0x3fffffff;
    }
    return c;
  }
  // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.
  function am3(i,x,w,j,c,n) {
    var xl = x&0x3fff, xh = x>>14;
    while(--n >= 0) {
      var l = this[i]&0x3fff;
      var h = this[i++]>>14;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x3fff)<<14)+w[j]+c;
      c = (l>>28)+(m>>14)+xh*h;
      w[j++] = l&0xfffffff;
    }
    return c;
  }
  if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = am2;
    dbits = 30;
  }
  else if(j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = am1;
    dbits = 26;
  }
  else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
  }
  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = ((1<<dbits)-1);
  BigInteger.prototype.DV = (1<<dbits);
  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2,BI_FP);
  BigInteger.prototype.F1 = BI_FP-dbits;
  BigInteger.prototype.F2 = 2*dbits-BI_FP;
  // Digit conversions
  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  var BI_RC = new Array();
  var rr,vv;
  rr = "0".charCodeAt(0);
  for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
  rr = "a".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  rr = "A".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  function int2char(n) { return BI_RM.charAt(n); }
  function intAt(s,i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c==null)?-1:c;
  }
  // (protected) copy this to r
  function bnpCopyTo(r) {
    for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
  }
  // (protected) set from integer value x, -DV <= x < DV
  function bnpFromInt(x) {
    this.t = 1;
    this.s = (x<0)?-1:0;
    if(x > 0) this[0] = x;
    else if(x < -1) this[0] = x+DV;
    else this.t = 0;
  }
  // return bigint initialized to value
  function nbv(i) { var r = nbi(); r.fromInt(i); return r; }
  // (protected) set from string and radix
  function bnpFromString(s,b) {
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 256) k = 8; // byte array
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else { this.fromRadix(s,b); return; }
    this.t = 0;
    this.s = 0;
    var i = s.length, mi = false, sh = 0;
    while(--i >= 0) {
      var x = (k==8)?s[i]&0xff:intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-") mi = true;
        continue;
      }
      mi = false;
      if(sh == 0)
        this[this.t++] = x;
      else if(sh+k > this.DB) {
        this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
        this[this.t++] = (x>>(this.DB-sh));
      }
      else
        this[this.t-1] |= x<<sh;
      sh += k;
      if(sh >= this.DB) sh -= this.DB;
    }
    if(k == 8 && (s[0]&0x80) != 0) {
      this.s = -1;
      if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
    }
    this.clamp();
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) clamp off excess high words
  function bnpClamp() {
    var c = this.s&this.DM;
    while(this.t > 0 && this[this.t-1] == c) --this.t;
  }
  // (public) return string representation in given radix
  function bnToString(b) {
    if(this.s < 0) return "-"+this.negate().toString(b);
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1<<k)-1, d, m = false, r = "", i = this.t;
    var p = this.DB-(i*this.DB)%k;
    if(i-- > 0) {
      if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
      while(i >= 0) {
        if(p < k) {
          d = (this[i]&((1<<p)-1))<<(k-p);
          d |= this[--i]>>(p+=this.DB-k);
        }
        else {
          d = (this[i]>>(p-=k))&km;
          if(p <= 0) { p += this.DB; --i; }
        }
        if(d > 0) m = true;
        if(m) r += int2char(d);
      }
    }
    return m?r:"0";
  }
  // (public) -this
  function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }
  // (public) |this|
  function bnAbs() { return (this.s<0)?this.negate():this; }
  // (public) return + if this > a, - if this < a, 0 if equal
  function bnCompareTo(a) {
    var r = this.s-a.s;
    if(r != 0) return r;
    var i = this.t;
    r = i-a.t;
    if(r != 0) return (this.s<0)?-r:r;
    while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
    return 0;
  }
  // returns bit length of the integer x
  function nbits(x) {
    var r = 1, t;
    if((t=x>>>16) != 0) { x = t; r += 16; }
    if((t=x>>8) != 0) { x = t; r += 8; }
    if((t=x>>4) != 0) { x = t; r += 4; }
    if((t=x>>2) != 0) { x = t; r += 2; }
    if((t=x>>1) != 0) { x = t; r += 1; }
    return r;
  }
  // (public) return the number of bits in "this"
  function bnBitLength() {
    if(this.t <= 0) return 0;
    return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
  }
  // (protected) r = this << n*DB
  function bnpDLShiftTo(n,r) {
    var i;
    for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
    for(i = n-1; i >= 0; --i) r[i] = 0;
    r.t = this.t+n;
    r.s = this.s;
  }
  // (protected) r = this >> n*DB
  function bnpDRShiftTo(n,r) {
    for(var i = n; i < this.t; ++i) r[i-n] = this[i];
    r.t = Math.max(this.t-n,0);
    r.s = this.s;
  }
  // (protected) r = this << n
  function bnpLShiftTo(n,r) {
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<cbs)-1;
    var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
    for(i = this.t-1; i >= 0; --i) {
      r[i+ds+1] = (this[i]>>cbs)|c;
      c = (this[i]&bm)<<bs;
    }
    for(i = ds-1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t+ds+1;
    r.s = this.s;
    r.clamp();
  }
  // (protected) r = this >> n
  function bnpRShiftTo(n,r) {
    r.s = this.s;
    var ds = Math.floor(n/this.DB);
    if(ds >= this.t) { r.t = 0; return; }
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<bs)-1;
    r[0] = this[ds]>>bs;
    for(var i = ds+1; i < this.t; ++i) {
      r[i-ds-1] |= (this[i]&bm)<<cbs;
      r[i-ds] = this[i]>>bs;
    }
    if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
    r.t = this.t-ds;
    r.clamp();
  }
  // (protected) r = this - a
  function bnpSubTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]-a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c -= a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c -= a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c -= a.s;
    }
    r.s = (c<0)?-1:0;
    if(c < -1) r[i++] = this.DV+c;
    else if(c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
  }
  // (protected) r = this * a, r != this,a (HAC 14.12)
  // "this" should be the larger one if appropriate.
  function bnpMultiplyTo(a,r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i+y.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
    r.s = 0;
    r.clamp();
    if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
  }
  // (protected) r = this^2, r != this (HAC 14.16)
  function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2*x.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < x.t-1; ++i) {
      var c = x.am(i,x[i],r,2*i,0,1);
      if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
        r[i+x.t] -= x.DV;
        r[i+x.t+1] = 1;
      }
    }
    if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
    r.s = 0;
    r.clamp();
  }
  // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
  // r != q, this != m.  q or r may be null.
  function bnpDivRemTo(m,q,r) {
    var pm = m.abs();
    if(pm.t <= 0) return;
    var pt = this.abs();
    if(pt.t < pm.t) {
      if(q != null) q.fromInt(0);
      if(r != null) this.copyTo(r);
      return;
    }
    if(r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
    if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
    else { pm.copyTo(y); pt.copyTo(r); }
    var ys = y.t;
    var y0 = y[ys-1];
    if(y0 == 0) return;
    var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
    var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
    var i = r.t, j = i-ys, t = (q==null)?nbi():q;
    y.dlShiftTo(j,t);
    if(r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t,r);
    }
    BigInteger.ONE.dlShiftTo(ys,t);
    t.subTo(y,y);	// "negative" y so we can replace sub with am later
    while(y.t < ys) y[y.t++] = 0;
    while(--j >= 0) {
      // Estimate quotient digit
      var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
      if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
        y.dlShiftTo(j,t);
        r.subTo(t,r);
        while(r[i] < --qd) r.subTo(t,r);
      }
    }
    if(q != null) {
      r.drShiftTo(ys,q);
      if(ts != ms) BigInteger.ZERO.subTo(q,q);
    }
    r.t = ys;
    r.clamp();
    if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
    if(ts < 0) BigInteger.ZERO.subTo(r,r);
  }
  // (public) this mod a
  function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a,null,r);
    if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
    return r;
  }
  // Modular reduction using "classic" algorithm
  function Classic(m) { this.m = m; }
  function cConvert(x) {
    if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
  }
  function cRevert(x) { return x; }
  function cReduce(x) { x.divRemTo(this.m,null,x); }
  function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  Classic.prototype.convert = cConvert;
  Classic.prototype.revert = cRevert;
  Classic.prototype.reduce = cReduce;
  Classic.prototype.mulTo = cMulTo;
  Classic.prototype.sqrTo = cSqrTo;
  // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
  // justification:
  //         xy == 1 (mod m)
  //         xy =  1+km
  //   xy(2-xy) = (1+km)(1-km)
  // x[y(2-xy)] = 1-k^2m^2
  // x[y(2-xy)] == 1 (mod m^2)
  // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
  // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
  // JS multiply "overflows" differently from C/C++, so care is needed here.
  function bnpInvDigit() {
    if(this.t < 1) return 0;
    var x = this[0];
    if((x&1) == 0) return 0;
    var y = x&3;		// y == 1/x mod 2^2
    y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
    y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
    y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y>0)?this.DV-y:-y;
  }
  // Montgomery reduction
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp&0x7fff;
    this.mph = this.mp>>15;
    this.um = (1<<(m.DB-15))-1;
    this.mt2 = 2*m.t;
  }
  // xR mod m
  function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t,r);
    r.divRemTo(this.m,null,r);
    if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
    return r;
  }
  // x/R mod m
  function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
  // x = x/R mod m (HAC 14.32)
  function montReduce(x) {
    while(x.t <= this.mt2)	// pad x so am has enough room later
      x[x.t++] = 0;
    for(var i = 0; i < this.m.t; ++i) {
      // faster way of calculating u0 = x[i]*mp mod DV
      var j = x[i]&0x7fff;
      var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
      // use am to combine the multiply-shift-add into one call
      j = i+this.m.t;
      x[j] += this.m.am(0,u0,x,i,0,this.m.t);
      // propagate carry
      while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
    }
    x.clamp();
    x.drShiftTo(this.m.t,x);
    if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
  }
  // r = "x^2/R mod m"; x != r
  function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  // r = "xy/R mod m"; x,y != r
  function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  Montgomery.prototype.convert = montConvert;
  Montgomery.prototype.revert = montRevert;
  Montgomery.prototype.reduce = montReduce;
  Montgomery.prototype.mulTo = montMulTo;
  Montgomery.prototype.sqrTo = montSqrTo;
  // (protected) true iff this is even
  function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }
  // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
  function bnpExp(e,z) {
    if(e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
    g.copyTo(r);
    while(--i >= 0) {
      z.sqrTo(r,r2);
      if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
      else { var t = r; r = r2; r2 = t; }
    }
    return z.revert(r);
  }
  // (public) this^e % m, 0 <= e < 2^32
  function bnModPowInt(e,m) {
    var z;
    if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
    return this.exp(e,z);
  }
  // protected
  BigInteger.prototype.copyTo = bnpCopyTo;
  BigInteger.prototype.fromInt = bnpFromInt;
  BigInteger.prototype.fromString = bnpFromString;
  BigInteger.prototype.clamp = bnpClamp;
  BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
  BigInteger.prototype.drShiftTo = bnpDRShiftTo;
  BigInteger.prototype.lShiftTo = bnpLShiftTo;
  BigInteger.prototype.rShiftTo = bnpRShiftTo;
  BigInteger.prototype.subTo = bnpSubTo;
  BigInteger.prototype.multiplyTo = bnpMultiplyTo;
  BigInteger.prototype.squareTo = bnpSquareTo;
  BigInteger.prototype.divRemTo = bnpDivRemTo;
  BigInteger.prototype.invDigit = bnpInvDigit;
  BigInteger.prototype.isEven = bnpIsEven;
  BigInteger.prototype.exp = bnpExp;
  // public
  BigInteger.prototype.toString = bnToString;
  BigInteger.prototype.negate = bnNegate;
  BigInteger.prototype.abs = bnAbs;
  BigInteger.prototype.compareTo = bnCompareTo;
  BigInteger.prototype.bitLength = bnBitLength;
  BigInteger.prototype.mod = bnMod;
  BigInteger.prototype.modPowInt = bnModPowInt;
  // "constants"
  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1);
  // jsbn2 stuff
  // (protected) convert from radix string
  function bnpFromRadix(s,b) {
    this.fromInt(0);
    if(b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
    for(var i = 0; i < s.length; ++i) {
      var x = intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
        continue;
      }
      w = b*w+x;
      if(++j >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w,0);
        j = 0;
        w = 0;
      }
    }
    if(j > 0) {
      this.dMultiply(Math.pow(b,j));
      this.dAddOffset(w,0);
    }
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) return x s.t. r^x < DV
  function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }
  // (public) 0 if this == 0, 1 if this > 0
  function bnSigNum() {
    if(this.s < 0) return -1;
    else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
  }
  // (protected) this *= n, this >= 0, 1 < n < DV
  function bnpDMultiply(n) {
    this[this.t] = this.am(0,n-1,this,0,0,this.t);
    ++this.t;
    this.clamp();
  }
  // (protected) this += n << w words, this >= 0
  function bnpDAddOffset(n,w) {
    if(n == 0) return;
    while(this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while(this[w] >= this.DV) {
      this[w] -= this.DV;
      if(++w >= this.t) this[this.t++] = 0;
      ++this[w];
    }
  }
  // (protected) convert to radix string
  function bnpToRadix(b) {
    if(b == null) b = 10;
    if(this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b,cs);
    var d = nbv(a), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d,y,z);
    while(y.signum() > 0) {
      r = (a+z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d,y,z);
    }
    return z.intValue().toString(b) + r;
  }
  // (public) return value as integer
  function bnIntValue() {
    if(this.s < 0) {
      if(this.t == 1) return this[0]-this.DV;
      else if(this.t == 0) return -1;
    }
    else if(this.t == 1) return this[0];
    else if(this.t == 0) return 0;
    // assumes 16 < DB < 32
    return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
  }
  // (protected) r = this + a
  function bnpAddTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]+a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c += a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c += a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += a.s;
    }
    r.s = (c<0)?-1:0;
    if(c > 0) r[i++] = c;
    else if(c < -1) r[i++] = this.DV+c;
    r.t = i;
    r.clamp();
  }
  BigInteger.prototype.fromRadix = bnpFromRadix;
  BigInteger.prototype.chunkSize = bnpChunkSize;
  BigInteger.prototype.signum = bnSigNum;
  BigInteger.prototype.dMultiply = bnpDMultiply;
  BigInteger.prototype.dAddOffset = bnpDAddOffset;
  BigInteger.prototype.toRadix = bnpToRadix;
  BigInteger.prototype.intValue = bnIntValue;
  BigInteger.prototype.addTo = bnpAddTo;
  //======= end jsbn =======
  // Emscripten wrapper
  var Wrapper = {
    abs: function(l, h) {
      var x = new goog.math.Long(l, h);
      var ret;
      if (x.isNegative()) {
        ret = x.negate();
      } else {
        ret = x;
      }
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
    },
    ensureTemps: function() {
      if (Wrapper.ensuredTemps) return;
      Wrapper.ensuredTemps = true;
      Wrapper.two32 = new BigInteger();
      Wrapper.two32.fromString('4294967296', 10);
      Wrapper.two64 = new BigInteger();
      Wrapper.two64.fromString('18446744073709551616', 10);
      Wrapper.temp1 = new BigInteger();
      Wrapper.temp2 = new BigInteger();
    },
    lh2bignum: function(l, h) {
      var a = new BigInteger();
      a.fromString(h.toString(), 10);
      var b = new BigInteger();
      a.multiplyTo(Wrapper.two32, b);
      var c = new BigInteger();
      c.fromString(l.toString(), 10);
      var d = new BigInteger();
      c.addTo(b, d);
      return d;
    },
    stringify: function(l, h, unsigned) {
      var ret = new goog.math.Long(l, h).toString();
      if (unsigned && ret[0] == '-') {
        // unsign slowly using jsbn bignums
        Wrapper.ensureTemps();
        var bignum = new BigInteger();
        bignum.fromString(ret, 10);
        ret = new BigInteger();
        Wrapper.two64.addTo(bignum, ret);
        ret = ret.toString(10);
      }
      return ret;
    },
    fromString: function(str, base, min, max, unsigned) {
      Wrapper.ensureTemps();
      var bignum = new BigInteger();
      bignum.fromString(str, base);
      var bigmin = new BigInteger();
      bigmin.fromString(min, 10);
      var bigmax = new BigInteger();
      bigmax.fromString(max, 10);
      if (unsigned && bignum.compareTo(BigInteger.ZERO) < 0) {
        var temp = new BigInteger();
        bignum.addTo(Wrapper.two64, temp);
        bignum = temp;
      }
      var error = false;
      if (bignum.compareTo(bigmin) < 0) {
        bignum = bigmin;
        error = true;
      } else if (bignum.compareTo(bigmax) > 0) {
        bignum = bigmax;
        error = true;
      }
      var ret = goog.math.Long.fromString(bignum.toString()); // min-max checks should have clamped this to a range goog.math.Long can handle well
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
      if (error) throw 'range error';
    }
  };
  return Wrapper;
})();
//======= end closure i64 code =======
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
