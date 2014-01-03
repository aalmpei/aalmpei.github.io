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
var _module_doc;
var _math_trunc_doc;
var _math_tanh_doc;
var _math_tan_doc;
var _math_sqrt_doc;
var _math_sinh_doc;
var _math_sin_doc;
var _math_radians_doc;
var _math_pow_doc;
var _math_modf_doc;
var _math_methods;
var _math_log_doc;
var _math_log1p_doc;
var _math_log10_doc;
var _math_lgamma_doc;
var _math_ldexp_doc;
var _math_isnan_doc;
var _math_isinf_doc;
var _math_hypot_doc;
var _math_gamma_doc;
var _math_fsum_doc;
var _math_frexp_doc;
var _math_fmod_doc;
var _math_floor_doc;
var _math_factorial_doc;
var _math_fabs_doc;
var _math_expm1_doc;
var _math_exp_doc;
var _math_erfc_doc;
var _math_erf_doc;
var _math_degrees_doc;
var _math_cosh_doc;
var _math_cos_doc;
var _math_copysign_doc;
var _math_ceil_doc;
var _math_atanh_doc;
var _math_atan_doc;
var _math_atan2_doc;
var _math_asinh_doc;
var _math_asin_doc;
var _math_acosh_doc;
var _math_acos_doc;
var _lanczos_num_coeffs;
var _lanczos_den_coeffs;
var _gamma_integral;
var __str9;
var __str8;
var __str7;
var __str63;
var __str62;
var __str61;
var __str60;
var __str6;
var __str59;
var __str58;
var __str57;
var __str56;
var __str55;
var __str54;
var __str53;
var __str52;
var __str51;
var __str50;
var __str5;
var __str49;
var __str48;
var __str47;
var __str46;
var __str45;
var __str44;
var __str43;
var __str42;
var __str41;
var __str40;
var __str4;
var __str39;
var __str38;
var __str37;
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
var ___func___sinpi;
var ___func___math_fsum;
var ___func___lanczos_sum;
var ___func___is_error;
_module_doc=allocate([84,104,105,115,32,109,111,100,117,108,101,32,105,115,32,97,108,119,97,121,115,32,97,118,97,105,108,97,98,108,101,46,32,32,73,116,32,112,114,111,118,105,100,101,115,32,97,99,99,101,115,115,32,116,111,32,116,104,101,10,109,97,116,104,101,109,97,116,105,99,97,108,32,102,117,110,99,116,105,111,110,115,32,100,101,102,105,110,101,100,32,98,121,32,116,104,101,32,67,32,115,116,97,110,100,97,114,100,46,0,0,0], "i8", ALLOC_NORMAL);
_math_trunc_doc=allocate([116,114,117,110,99,40,120,58,82,101,97,108,41,32,45,62,32,73,110,116,101,103,114,97,108,10,10,84,114,117,110,99,97,116,101,115,32,120,32,116,111,32,116,104,101,32,110,101,97,114,101,115,116,32,73,110,116,101,103,114,97,108,32,116,111,119,97,114,100,32,48,46,32,85,115,101,115,32,116,104,101,32,95,95,116,114,117,110,99,95,95,32,109,97,103,105,99,32,109,101,116,104,111,100,46,0,0,0], "i8", ALLOC_NORMAL);
_math_tanh_doc=allocate([116,97,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,116,97,110,103,101,110,116,32,111,102,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_tan_doc=allocate([116,97,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,116,97,110,103,101,110,116,32,111,102,32,120,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,46,0,0], "i8", ALLOC_NORMAL);
_math_sqrt_doc=allocate([115,113,114,116,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,115,113,117,97,114,101,32,114,111,111,116,32,111,102,32,120,46,0,0,0], "i8", ALLOC_NORMAL);
_math_sinh_doc=allocate([115,105,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,115,105,110,101,32,111,102,32,120,46,0,0,0], "i8", ALLOC_NORMAL);
_math_sin_doc=allocate([115,105,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,115,105,110,101,32,111,102,32,120,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,46,0], "i8", ALLOC_NORMAL);
_math_radians_doc=allocate([114,97,100,105,97,110,115,40,120,41,10,10,67,111,110,118,101,114,116,32,97,110,103,108,101,32,120,32,102,114,111,109,32,100,101,103,114,101,101,115,32,116,111,32,114,97,100,105,97,110,115,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_pow_doc=allocate([112,111,119,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,120,42,42,121,32,40,120,32,116,111,32,116,104,101,32,112,111,119,101,114,32,111,102,32,121,41,46,0,0,0], "i8", ALLOC_NORMAL);
_math_modf_doc=allocate([109,111,100,102,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,102,114,97,99,116,105,111,110,97,108,32,97,110,100,32,105,110,116,101,103,101,114,32,112,97,114,116,115,32,111,102,32,120,46,32,32,66,111,116,104,32,114,101,115,117,108,116,115,32,99,97,114,114,121,32,116,104,101,32,115,105,103,110,10,111,102,32,120,32,97,110,100,32,97,114,101,32,102,108,111,97,116,115,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_methods=allocate([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_math_log_doc=allocate([108,111,103,40,120,91,44,32,98,97,115,101,93,41,10,10,82,101,116,117,114,110,32,116,104,101,32,108,111,103,97,114,105,116,104,109,32,111,102,32,120,32,116,111,32,116,104,101,32,103,105,118,101,110,32,98,97,115,101,46,10,73,102,32,116,104,101,32,98,97,115,101,32,110,111,116,32,115,112,101,99,105,102,105,101,100,44,32,114,101,116,117,114,110,115,32,116,104,101,32,110,97,116,117,114,97,108,32,108,111,103,97,114,105,116,104,109,32,40,98,97,115,101,32,101,41,32,111,102,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_log1p_doc=allocate([108,111,103,49,112,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,110,97,116,117,114,97,108,32,108,111,103,97,114,105,116,104,109,32,111,102,32,49,43,120,32,40,98,97,115,101,32,101,41,46,10,84,104,101,32,114,101,115,117,108,116,32,105,115,32,99,111,109,112,117,116,101,100,32,105,110,32,97,32,119,97,121,32,119,104,105,99,104,32,105,115,32,97,99,99,117,114,97,116,101,32,102,111,114,32,120,32,110,101,97,114,32,122,101,114,111,46,0,0], "i8", ALLOC_NORMAL);
_math_log10_doc=allocate([108,111,103,49,48,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,98,97,115,101,32,49,48,32,108,111,103,97,114,105,116,104,109,32,111,102,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_lgamma_doc=allocate([108,103,97,109,109,97,40,120,41,10,10,78,97,116,117,114,97,108,32,108,111,103,97,114,105,116,104,109,32,111,102,32,97,98,115,111,108,117,116,101,32,118,97,108,117,101,32,111,102,32,71,97,109,109,97,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0,0], "i8", ALLOC_NORMAL);
_math_ldexp_doc=allocate([108,100,101,120,112,40,120,44,32,105,41,10,10,82,101,116,117,114,110,32,120,32,42,32,40,50,42,42,105,41,46,0], "i8", ALLOC_NORMAL);
_math_isnan_doc=allocate([105,115,110,97,110,40,120,41,32,45,62,32,98,111,111,108,10,10,67,104,101,99,107,32,105,102,32,102,108,111,97,116,32,120,32,105,115,32,110,111,116,32,97,32,110,117,109,98,101,114,32,40,78,97,78,41,46,0,0,0], "i8", ALLOC_NORMAL);
_math_isinf_doc=allocate([105,115,105,110,102,40,120,41,32,45,62,32,98,111,111,108,10,10,67,104,101,99,107,32,105,102,32,102,108,111,97,116,32,120,32,105,115,32,105,110,102,105,110,105,116,101,32,40,112,111,115,105,116,105,118,101,32,111,114,32,110,101,103,97,116,105,118,101,41,46,0,0], "i8", ALLOC_NORMAL);
_math_hypot_doc=allocate([104,121,112,111,116,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,116,104,101,32,69,117,99,108,105,100,101,97,110,32,100,105,115,116,97,110,99,101,44,32,115,113,114,116,40,120,42,120,32,43,32,121,42,121,41,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_gamma_doc=allocate([103,97,109,109,97,40,120,41,10,10,71,97,109,109,97,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0,0], "i8", ALLOC_NORMAL);
_math_fsum_doc=allocate([102,115,117,109,40,105,116,101,114,97,98,108,101,41,10,10,82,101,116,117,114,110,32,97,110,32,97,99,99,117,114,97,116,101,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,115,117,109,32,111,102,32,118,97,108,117,101,115,32,105,110,32,116,104,101,32,105,116,101,114,97,98,108,101,46,10,65,115,115,117,109,101,115,32,73,69,69,69,45,55,53,52,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,97,114,105,116,104,109,101,116,105,99,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_frexp_doc=allocate([102,114,101,120,112,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,109,97,110,116,105,115,115,97,32,97,110,100,32,101,120,112,111,110,101,110,116,32,111,102,32,120,44,32,97,115,32,112,97,105,114,32,40,109,44,32,101,41,46,10,109,32,105,115,32,97,32,102,108,111,97,116,32,97,110,100,32,101,32,105,115,32,97,110,32,105,110,116,44,32,115,117,99,104,32,116,104,97,116,32,120,32,61,32,109,32,42,32,50,46,42,42,101,46,10,73,102,32,120,32,105,115,32,48,44,32,109,32,97,110,100,32,101,32,97,114,101,32,98,111,116,104,32,48,46,32,32,69,108,115,101,32,48,46,53,32,60,61,32,97,98,115,40,109,41,32,60,32,49,46,48,46,0,0,0], "i8", ALLOC_NORMAL);
_math_fmod_doc=allocate([102,109,111,100,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,102,109,111,100,40,120,44,32,121,41,44,32,97,99,99,111,114,100,105,110,103,32,116,111,32,112,108,97,116,102,111,114,109,32,67,46,32,32,120,32,37,32,121,32,109,97,121,32,100,105,102,102,101,114,46,0,0], "i8", ALLOC_NORMAL);
_math_floor_doc=allocate([102,108,111,111,114,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,102,108,111,111,114,32,111,102,32,120,32,97,115,32,97,32,102,108,111,97,116,46,10,84,104,105,115,32,105,115,32,116,104,101,32,108,97,114,103,101,115,116,32,105,110,116,101,103,114,97,108,32,118,97,108,117,101,32,60,61,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_factorial_doc=allocate([102,97,99,116,111,114,105,97,108,40,120,41,32,45,62,32,73,110,116,101,103,114,97,108,10,10,70,105,110,100,32,120,33,46,32,82,97,105,115,101,32,97,32,86,97,108,117,101,69,114,114,111,114,32,105,102,32,120,32,105,115,32,110,101,103,97,116,105,118,101,32,111,114,32,110,111,110,45,105,110,116,101,103,114,97,108,46,0], "i8", ALLOC_NORMAL);
_math_fabs_doc=allocate([102,97,98,115,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,98,115,111,108,117,116,101,32,118,97,108,117,101,32,111,102,32,116,104,101,32,102,108,111,97,116,32,120,46,0,0], "i8", ALLOC_NORMAL);
_math_expm1_doc=allocate([101,120,112,109,49,40,120,41,10,10,82,101,116,117,114,110,32,101,120,112,40,120,41,45,49,46,10,84,104,105,115,32,102,117,110,99,116,105,111,110,32,97,118,111,105,100,115,32,116,104,101,32,108,111,115,115,32,111,102,32,112,114,101,99,105,115,105,111,110,32,105,110,118,111,108,118,101,100,32,105,110,32,116,104,101,32,100,105,114,101,99,116,32,101,118,97,108,117,97,116,105,111,110,32,111,102,32,101,120,112,40,120,41,45,49,32,102,111,114,32,115,109,97,108,108,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_exp_doc=allocate([101,120,112,40,120,41,10,10,82,101,116,117,114,110,32,101,32,114,97,105,115,101,100,32,116,111,32,116,104,101,32,112,111,119,101,114,32,111,102,32,120,46,0,0], "i8", ALLOC_NORMAL);
_math_erfc_doc=allocate([101,114,102,99,40,120,41,10,10,67,111,109,112,108,101,109,101,110,116,97,114,121,32,101,114,114,111,114,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0], "i8", ALLOC_NORMAL);
_math_erf_doc=allocate([101,114,102,40,120,41,10,10,69,114,114,111,114,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_degrees_doc=allocate([100,101,103,114,101,101,115,40,120,41,10,10,67,111,110,118,101,114,116,32,97,110,103,108,101,32,120,32,102,114,111,109,32,114,97,100,105,97,110,115,32,116,111,32,100,101,103,114,101,101,115,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_cosh_doc=allocate([99,111,115,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,99,111,115,105,110,101,32,111,102,32,120,46,0], "i8", ALLOC_NORMAL);
_math_cos_doc=allocate([99,111,115,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,99,111,115,105,110,101,32,111,102,32,120,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,46,0,0,0], "i8", ALLOC_NORMAL);
_math_copysign_doc=allocate([99,111,112,121,115,105,103,110,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,120,32,119,105,116,104,32,116,104,101,32,115,105,103,110,32,111,102,32,121,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_ceil_doc=allocate([99,101,105,108,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,99,101,105,108,105,110,103,32,111,102,32,120,32,97,115,32,97,32,102,108,111,97,116,46,10,84,104,105,115,32,105,115,32,116,104,101,32,115,109,97,108,108,101,115,116,32,105,110,116,101,103,114,97,108,32,118,97,108,117,101,32,62,61,32,120,46,0,0], "i8", ALLOC_NORMAL);
_math_atanh_doc=allocate([97,116,97,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,97,114,99,32,116,97,110,103,101,110,116,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0], "i8", ALLOC_NORMAL);
_math_atan_doc=allocate([97,116,97,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,116,97,110,103,101,110,116,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0], "i8", ALLOC_NORMAL);
_math_atan2_doc=allocate([97,116,97,110,50,40,121,44,32,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,116,97,110,103,101,110,116,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,121,47,120,46,10,85,110,108,105,107,101,32,97,116,97,110,40,121,47,120,41,44,32,116,104,101,32,115,105,103,110,115,32,111,102,32,98,111,116,104,32,120,32,97,110,100,32,121,32,97,114,101,32,99,111,110,115,105,100,101,114,101,100,46,0,0,0], "i8", ALLOC_NORMAL);
_math_asinh_doc=allocate([97,115,105,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,97,114,99,32,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_asin_doc=allocate([97,115,105,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0,0,0,0], "i8", ALLOC_NORMAL);
_math_acosh_doc=allocate([97,99,111,115,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,97,114,99,32,99,111,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0,0], "i8", ALLOC_NORMAL);
_math_acos_doc=allocate([97,99,111,115,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,99,111,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0,0], "i8", ALLOC_NORMAL);
_lanczos_num_coeffs=allocate([158,164,193,67,81,234,21,66,87,76,245,117,112,252,35,66,26,182,138,129,50,161,32,66,26,38,232,34,181,176,16,66,232,161,165,179,193,127,246,65,63,243,211,245,24,116,213,65,42,95,185,123,12,171,173,65,152,204,93,249,118,248,125,65,76,244,128,80,233,241,69,65,235,135,135,31,66,182,6,65,4,216,88,8,172,135,191,64,82,59,188,123,96,90,106,64,5,39,246,31,147,13,4,64], "i8", ALLOC_NORMAL);
_lanczos_den_coeffs=allocate([0,0,0,0,0,0,0,0,0,0,0,0,168,8,131,65,0,0,0,128,105,189,156,65,0,0,0,176,166,253,161,65,0,0,0,112,113,24,153,65,0,0,0,144,182,238,133,65,0,0,0,224,113,113,105,65,0,0,0,0,123,31,68,65,0,0,0,0,188,208,21,65,0,0,0,0,128,231,223,64,0,0,0,0,0,20,158,64,0,0,0,0,0,128,80,64,0,0,0,0,0,0,240,63], "i8", ALLOC_NORMAL);
_gamma_integral=allocate([0,0,0,0,0,0,240,63,0,0,0,0,0,0,240,63,0,0,0,0,0,0,0,64,0,0,0,0,0,0,24,64,0,0,0,0,0,0,56,64,0,0,0,0,0,0,94,64,0,0,0,0,0,128,134,64,0,0,0,0,0,176,179,64,0,0,0,0,0,176,227,64,0,0,0,0,0,38,22,65,0,0,0,0,128,175,75,65,0,0,0,0,168,8,131,65,0,0,0,0,252,140,188,65,0,0,0,192,140,50,247,65,0,0,0,40,59,76,52,66,0,0,128,117,119,7,115,66,0,0,128,117,119,7,179,66,0,0,216,236,238,55,244,66,0,0,115,202,236,190,54,67,0,144,104,48,185,2,123,67,0,90,65,190,179,225,192,67,32,198,181,233,59,40,6,68,108,240,89,97,82,119,78,68], "i8", ALLOC_NORMAL);
__str9=allocate([97,116,97,110,104,0,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([97,116,97,110,50,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([97,116,97,110,0,0,0,0], "i8", ALLOC_NORMAL);
__str63=allocate([102,97,99,116,111,114,105,97,108,40,41,32,110,111,116,32,100,101,102,105,110,101,100,32,102,111,114,32,110,101,103,97,116,105,118,101,32,118,97,108,117,101,115,0], "i8", ALLOC_NORMAL);
__str62=allocate([102,97,99,116,111,114,105,97,108,40,41,32,111,110,108,121,32,97,99,99,101,112,116,115,32,105,110,116,101,103,114,97,108,32,118,97,108,117,101,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str61=allocate([40,100,105,41,0,0,0,0], "i8", ALLOC_NORMAL);
__str60=allocate([109,97,116,104,46,102,115,117,109,32,112,97,114,116,105,97,108,115,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([97,115,105,110,104,0,0,0], "i8", ALLOC_NORMAL);
__str59=allocate([102,97,98,115,40,121,41,32,60,32,102,97,98,115,40,120,41,0,0,0], "i8", ALLOC_NORMAL);
__str58=allocate([45,105,110,102,32,43,32,105,110,102,32,105,110,32,102,115,117,109,0,0], "i8", ALLOC_NORMAL);
__str57=allocate([105,110,116,101,114,109,101,100,105,97,116,101,32,111,118,101,114,102,108,111,119,32,105,110,32,102,115,117,109,0,0,0], "i8", ALLOC_NORMAL);
__str56=allocate([40,109,32,61,61,32,78,85,77,95,80,65,82,84,73,65,76,83,32,38,38,32,112,32,61,61,32,112,115,41,32,124,124,32,40,109,32,62,32,78,85,77,95,80,65,82,84,73,65,76,83,32,38,38,32,112,32,33,61,32,78,85,76,76,41,0,0,0], "i8", ALLOC_NORMAL);
__str55=allocate([48,32,60,61,32,110,32,38,38,32,110,32,60,61,32,109,0,0,0,0], "i8", ALLOC_NORMAL);
__str54=allocate([69,120,112,101,99,116,101,100,32,97,110,32,105,110,116,32,111,114,32,108,111,110,103,32,97,115,32,115,101,99,111,110,100,32,97,114,103,117,109,101,110,116,32,116,111,32,108,100,101,120,112,46,0,0,0,0], "i8", ALLOC_NORMAL);
__str53=allocate([100,79,58,108,100,101,120,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str52=allocate([120,32,62,32,48,46,48,0], "i8", ALLOC_NORMAL);
__str51=allocate([48,0,0,0], "i8", ALLOC_NORMAL);
__str50=allocate([48,32,60,61,32,110,32,38,38,32,110,32,60,61,32,52,0,0,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([97,115,105,110,0,0,0,0], "i8", ALLOC_NORMAL);
__str49=allocate([80,121,95,73,83,95,70,73,78,73,84,69,40,120,41,0], "i8", ALLOC_NORMAL);
__str48=allocate([40,100,100,41,0,0,0,0], "i8", ALLOC_NORMAL);
__str47=allocate([109,97,116,104,32,114,97,110,103,101,32,101,114,114,111,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str46=allocate([109,97,116,104,32,100,111,109,97,105,110,32,101,114,114,111,114,0,0,0], "i8", ALLOC_NORMAL);
__str45=allocate([101,114,114,110,111,0,0,0], "i8", ALLOC_NORMAL);
__str44=allocate([46,46,47,77,111,100,117,108,101,115,47,109,97,116,104,109,111,100,117,108,101,46,99,0], "i8", ALLOC_NORMAL);
__str43=allocate([95,95,116,114,117,110,99,95,95,0,0,0], "i8", ALLOC_NORMAL);
__str42=allocate([116,114,117,110,99,0,0,0], "i8", ALLOC_NORMAL);
__str41=allocate([116,97,110,104,0,0,0,0], "i8", ALLOC_NORMAL);
__str40=allocate([116,97,110,0], "i8", ALLOC_NORMAL);
__str4=allocate([97,99,111,115,104,0,0,0], "i8", ALLOC_NORMAL);
__str39=allocate([115,113,114,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str38=allocate([115,105,110,104,0,0,0,0], "i8", ALLOC_NORMAL);
__str37=allocate([115,105,110,0], "i8", ALLOC_NORMAL);
__str36=allocate([114,97,100,105,97,110,115,0], "i8", ALLOC_NORMAL);
__str35=allocate([112,111,119,0], "i8", ALLOC_NORMAL);
__str34=allocate([109,111,100,102,0,0,0,0], "i8", ALLOC_NORMAL);
__str33=allocate([108,111,103,49,48,0,0,0], "i8", ALLOC_NORMAL);
__str32=allocate([108,111,103,49,112,0,0,0], "i8", ALLOC_NORMAL);
__str31=allocate([108,111,103,0], "i8", ALLOC_NORMAL);
__str30=allocate([108,103,97,109,109,97,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([97,99,111,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str29=allocate([108,100,101,120,112,0,0,0], "i8", ALLOC_NORMAL);
__str28=allocate([105,115,110,97,110,0,0,0], "i8", ALLOC_NORMAL);
__str27=allocate([105,115,105,110,102,0,0,0], "i8", ALLOC_NORMAL);
__str26=allocate([104,121,112,111,116,0,0,0], "i8", ALLOC_NORMAL);
__str25=allocate([103,97,109,109,97,0,0,0], "i8", ALLOC_NORMAL);
__str24=allocate([102,115,117,109,0,0,0,0], "i8", ALLOC_NORMAL);
__str23=allocate([102,114,101,120,112,0,0,0], "i8", ALLOC_NORMAL);
__str22=allocate([102,109,111,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str21=allocate([102,108,111,111,114,0,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([102,97,99,116,111,114,105,97,108,0,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([101,0,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([102,97,98,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([101,120,112,109,49,0,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([101,120,112,0], "i8", ALLOC_NORMAL);
__str16=allocate([101,114,102,99,0,0,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([101,114,102,0], "i8", ALLOC_NORMAL);
__str14=allocate([100,101,103,114,101,101,115,0], "i8", ALLOC_NORMAL);
__str13=allocate([99,111,115,104,0,0,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([99,111,115,0], "i8", ALLOC_NORMAL);
__str11=allocate([99,111,112,121,115,105,103,110,0,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([99,101,105,108,0,0,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([112,105,0,0], "i8", ALLOC_NORMAL);
__str=allocate([109,97,116,104,0,0,0,0], "i8", ALLOC_NORMAL);
___func___sinpi=allocate([115,105,110,112,105,0,0,0], "i8", ALLOC_NORMAL);
___func___math_fsum=allocate([109,97,116,104,95,102,115,117,109,0,0,0], "i8", ALLOC_NORMAL);
___func___lanczos_sum=allocate([108,97,110,99,122,111,115,95,115,117,109,0], "i8", ALLOC_NORMAL);
___func___is_error=allocate([105,115,95,101,114,114,111,114,0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_math_methods)>>2)]=((__str3)|0);
HEAP32[(((_math_methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 100);
HEAP32[(((_math_methods)+(12))>>2)]=((_math_acos_doc)|0);
HEAP32[(((_math_methods)+(16))>>2)]=((__str4)|0);
HEAP32[(((_math_methods)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 124);
HEAP32[(((_math_methods)+(28))>>2)]=((_math_acosh_doc)|0);
HEAP32[(((_math_methods)+(32))>>2)]=((__str5)|0);
HEAP32[(((_math_methods)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 74);
HEAP32[(((_math_methods)+(44))>>2)]=((_math_asin_doc)|0);
HEAP32[(((_math_methods)+(48))>>2)]=((__str6)|0);
HEAP32[(((_math_methods)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_math_methods)+(60))>>2)]=((_math_asinh_doc)|0);
HEAP32[(((_math_methods)+(64))>>2)]=((__str7)|0);
HEAP32[(((_math_methods)+(68))>>2)]=(FUNCTION_TABLE_OFFSET + 18);
HEAP32[(((_math_methods)+(76))>>2)]=((_math_atan_doc)|0);
HEAP32[(((_math_methods)+(80))>>2)]=((__str8)|0);
HEAP32[(((_math_methods)+(84))>>2)]=(FUNCTION_TABLE_OFFSET + 32);
HEAP32[(((_math_methods)+(92))>>2)]=((_math_atan2_doc)|0);
HEAP32[(((_math_methods)+(96))>>2)]=((__str9)|0);
HEAP32[(((_math_methods)+(100))>>2)]=(FUNCTION_TABLE_OFFSET + 54);
HEAP32[(((_math_methods)+(108))>>2)]=((_math_atanh_doc)|0);
HEAP32[(((_math_methods)+(112))>>2)]=((__str10)|0);
HEAP32[(((_math_methods)+(116))>>2)]=(FUNCTION_TABLE_OFFSET + 96);
HEAP32[(((_math_methods)+(124))>>2)]=((_math_ceil_doc)|0);
HEAP32[(((_math_methods)+(128))>>2)]=((__str11)|0);
HEAP32[(((_math_methods)+(132))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((_math_methods)+(140))>>2)]=((_math_copysign_doc)|0);
HEAP32[(((_math_methods)+(144))>>2)]=((__str12)|0);
HEAP32[(((_math_methods)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 38);
HEAP32[(((_math_methods)+(156))>>2)]=((_math_cos_doc)|0);
HEAP32[(((_math_methods)+(160))>>2)]=((__str13)|0);
HEAP32[(((_math_methods)+(164))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((_math_methods)+(172))>>2)]=((_math_cosh_doc)|0);
HEAP32[(((_math_methods)+(176))>>2)]=((__str14)|0);
HEAP32[(((_math_methods)+(180))>>2)]=(FUNCTION_TABLE_OFFSET + 108);
HEAP32[(((_math_methods)+(188))>>2)]=((_math_degrees_doc)|0);
HEAP32[(((_math_methods)+(192))>>2)]=((__str15)|0);
HEAP32[(((_math_methods)+(196))>>2)]=(FUNCTION_TABLE_OFFSET + 50);
HEAP32[(((_math_methods)+(204))>>2)]=((_math_erf_doc)|0);
HEAP32[(((_math_methods)+(208))>>2)]=((__str16)|0);
HEAP32[(((_math_methods)+(212))>>2)]=(FUNCTION_TABLE_OFFSET + 88);
HEAP32[(((_math_methods)+(220))>>2)]=((_math_erfc_doc)|0);
HEAP32[(((_math_methods)+(224))>>2)]=((__str17)|0);
HEAP32[(((_math_methods)+(228))>>2)]=(FUNCTION_TABLE_OFFSET + 22);
HEAP32[(((_math_methods)+(236))>>2)]=((_math_exp_doc)|0);
HEAP32[(((_math_methods)+(240))>>2)]=((__str18)|0);
HEAP32[(((_math_methods)+(244))>>2)]=(FUNCTION_TABLE_OFFSET + 90);
HEAP32[(((_math_methods)+(252))>>2)]=((_math_expm1_doc)|0);
HEAP32[(((_math_methods)+(256))>>2)]=((__str19)|0);
HEAP32[(((_math_methods)+(260))>>2)]=(FUNCTION_TABLE_OFFSET + 120);
HEAP32[(((_math_methods)+(268))>>2)]=((_math_fabs_doc)|0);
HEAP32[(((_math_methods)+(272))>>2)]=((__str20)|0);
HEAP32[(((_math_methods)+(276))>>2)]=(FUNCTION_TABLE_OFFSET + 48);
HEAP32[(((_math_methods)+(284))>>2)]=((_math_factorial_doc)|0);
HEAP32[(((_math_methods)+(288))>>2)]=((__str21)|0);
HEAP32[(((_math_methods)+(292))>>2)]=(FUNCTION_TABLE_OFFSET + 70);
HEAP32[(((_math_methods)+(300))>>2)]=((_math_floor_doc)|0);
HEAP32[(((_math_methods)+(304))>>2)]=((__str22)|0);
HEAP32[(((_math_methods)+(308))>>2)]=(FUNCTION_TABLE_OFFSET + 102);
HEAP32[(((_math_methods)+(316))>>2)]=((_math_fmod_doc)|0);
HEAP32[(((_math_methods)+(320))>>2)]=((__str23)|0);
HEAP32[(((_math_methods)+(324))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((_math_methods)+(332))>>2)]=((_math_frexp_doc)|0);
HEAP32[(((_math_methods)+(336))>>2)]=((__str24)|0);
HEAP32[(((_math_methods)+(340))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((_math_methods)+(348))>>2)]=((_math_fsum_doc)|0);
HEAP32[(((_math_methods)+(352))>>2)]=((__str25)|0);
HEAP32[(((_math_methods)+(356))>>2)]=(FUNCTION_TABLE_OFFSET + 86);
HEAP32[(((_math_methods)+(364))>>2)]=((_math_gamma_doc)|0);
HEAP32[(((_math_methods)+(368))>>2)]=((__str26)|0);
HEAP32[(((_math_methods)+(372))>>2)]=(FUNCTION_TABLE_OFFSET + 92);
HEAP32[(((_math_methods)+(380))>>2)]=((_math_hypot_doc)|0);
HEAP32[(((_math_methods)+(384))>>2)]=((__str27)|0);
HEAP32[(((_math_methods)+(388))>>2)]=(FUNCTION_TABLE_OFFSET + 62);
HEAP32[(((_math_methods)+(396))>>2)]=((_math_isinf_doc)|0);
HEAP32[(((_math_methods)+(400))>>2)]=((__str28)|0);
HEAP32[(((_math_methods)+(404))>>2)]=(FUNCTION_TABLE_OFFSET + 72);
HEAP32[(((_math_methods)+(412))>>2)]=((_math_isnan_doc)|0);
HEAP32[(((_math_methods)+(416))>>2)]=((__str29)|0);
HEAP32[(((_math_methods)+(420))>>2)]=(FUNCTION_TABLE_OFFSET + 10);
HEAP32[(((_math_methods)+(428))>>2)]=((_math_ldexp_doc)|0);
HEAP32[(((_math_methods)+(432))>>2)]=((__str30)|0);
HEAP32[(((_math_methods)+(436))>>2)]=(FUNCTION_TABLE_OFFSET + 6);
HEAP32[(((_math_methods)+(444))>>2)]=((_math_lgamma_doc)|0);
HEAP32[(((_math_methods)+(448))>>2)]=((__str31)|0);
HEAP32[(((_math_methods)+(452))>>2)]=(FUNCTION_TABLE_OFFSET + 80);
HEAP32[(((_math_methods)+(460))>>2)]=((_math_log_doc)|0);
HEAP32[(((_math_methods)+(464))>>2)]=((__str32)|0);
HEAP32[(((_math_methods)+(468))>>2)]=(FUNCTION_TABLE_OFFSET + 98);
HEAP32[(((_math_methods)+(476))>>2)]=((_math_log1p_doc)|0);
HEAP32[(((_math_methods)+(480))>>2)]=((__str33)|0);
HEAP32[(((_math_methods)+(484))>>2)]=(FUNCTION_TABLE_OFFSET + 30);
HEAP32[(((_math_methods)+(492))>>2)]=((_math_log10_doc)|0);
HEAP32[(((_math_methods)+(496))>>2)]=((__str34)|0);
HEAP32[(((_math_methods)+(500))>>2)]=(FUNCTION_TABLE_OFFSET + 58);
HEAP32[(((_math_methods)+(508))>>2)]=((_math_modf_doc)|0);
HEAP32[(((_math_methods)+(512))>>2)]=((__str35)|0);
HEAP32[(((_math_methods)+(516))>>2)]=(FUNCTION_TABLE_OFFSET + 132);
HEAP32[(((_math_methods)+(524))>>2)]=((_math_pow_doc)|0);
HEAP32[(((_math_methods)+(528))>>2)]=((__str36)|0);
HEAP32[(((_math_methods)+(532))>>2)]=(FUNCTION_TABLE_OFFSET + 56);
HEAP32[(((_math_methods)+(540))>>2)]=((_math_radians_doc)|0);
HEAP32[(((_math_methods)+(544))>>2)]=((__str37)|0);
HEAP32[(((_math_methods)+(548))>>2)]=(FUNCTION_TABLE_OFFSET + 36);
HEAP32[(((_math_methods)+(556))>>2)]=((_math_sin_doc)|0);
HEAP32[(((_math_methods)+(560))>>2)]=((__str38)|0);
HEAP32[(((_math_methods)+(564))>>2)]=(FUNCTION_TABLE_OFFSET + 128);
HEAP32[(((_math_methods)+(572))>>2)]=((_math_sinh_doc)|0);
HEAP32[(((_math_methods)+(576))>>2)]=((__str39)|0);
HEAP32[(((_math_methods)+(580))>>2)]=(FUNCTION_TABLE_OFFSET + 94);
HEAP32[(((_math_methods)+(588))>>2)]=((_math_sqrt_doc)|0);
HEAP32[(((_math_methods)+(592))>>2)]=((__str40)|0);
HEAP32[(((_math_methods)+(596))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((_math_methods)+(604))>>2)]=((_math_tan_doc)|0);
HEAP32[(((_math_methods)+(608))>>2)]=((__str41)|0);
HEAP32[(((_math_methods)+(612))>>2)]=(FUNCTION_TABLE_OFFSET + 40);
HEAP32[(((_math_methods)+(620))>>2)]=((_math_tanh_doc)|0);
HEAP32[(((_math_methods)+(624))>>2)]=((__str42)|0);
HEAP32[(((_math_methods)+(628))>>2)]=(FUNCTION_TABLE_OFFSET + 82);
HEAP32[(((_math_methods)+(636))>>2)]=((_math_trunc_doc)|0);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,Math.abs,0,_math_copysign,0,_math_lgamma,0,Math.exp,0,_math_ldexp
,0,_math_tan,0,_cosh,0,_math_fsum,0,_math_atan,0,Math.sin
,0,_math_exp,0,_math_frexp,0,_math_cosh,0,_math_asinh,0,_math_log10
,0,_math_atan2,0,_m_erf,0,_math_sin,0,_math_cos,0,_math_tanh
,0,Math.acos,0,Math.atan,0,_m_log,0,_math_factorial,0,_math_erf
,0,_m_erfc,0,_math_atanh,0,_math_radians,0,_math_modf,0,_m_lgamma
,0,_math_isinf,0,_acosh,0,_sinh,0,Math.asin,0,_math_floor
,0,_math_isnan,0,_math_asin,0,Math.cos,0,_atanh,0,_math_log
,0,_math_trunc,0,_tanh,0,_math_gamma,0,_math_erfc,0,_math_expm1
,0,_math_hypot,0,_math_sqrt,0,_math_ceil,0,_math_log1p,0,_math_acos
,0,_math_fmod,0,_asinh,0,Math.tan,0,_math_degrees,0,_copysign
,0,_m_tgamma,0,_expm1,0,_m_atan2,0,_log1p,0,_math_fabs
,0,_m_log10,0,_math_acosh,0,Math.ceil,0,_math_sinh,0,Math.sqrt,0,_math_pow,0,Math.floor,0]);
// EMSCRIPTEN_START_FUNCS
function _initmath(){var r1,r2;r1=_Py_InitModule4_64(__str|0,_math_methods|0,_module_doc|0,0,1013);if((r1|0)==0){return}r2=_PyFloat_FromDouble(3.141592653589793);_PyModule_AddObject(r1,__str1|0,r2);r2=_PyFloat_FromDouble(2.718281828459045);_PyModule_AddObject(r1,__str2|0,r2);return}function _math_acos(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+42,0)}function _math_acosh(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+64,0)}function _math_asin(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+68,0)}function _math_asinh(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+104,0)}function _math_atan(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+44,0)}function _math_atan2(r1,r2){return _math_2(r2,FUNCTION_TABLE_OFFSET+116,__str8|0)}function _math_atanh(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+78,0)}function _math_ceil(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+126,0)}function _math_copysign(r1,r2){return _math_2(r2,FUNCTION_TABLE_OFFSET+110,__str11|0)}function _math_cos(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+76,0)}function _math_cosh(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+14,1)}function _math_degrees(r1,r2){var r3;r1=_PyFloat_AsDouble(r2);do{if(r1==-1){if((_PyErr_Occurred()|0)==0){break}else{r3=0}return r3}}while(0);r3=_PyFloat_FromDouble(r1*57.29577951308232);return r3}function _math_erf(r1,r2){return _math_1a(r2,FUNCTION_TABLE_OFFSET+34)}function _math_erfc(r1,r2){return _math_1a(r2,FUNCTION_TABLE_OFFSET+52)}function _math_exp(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+8,1)}function _math_expm1(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+114,1)}function _math_fabs(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+2,0)}function _math_factorial(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11;r1=0;r3=HEAP32[r2+4>>2];do{if((r3|0)==(_PyFloat_Type|0)){r1=30}else{if((_PyType_IsSubtype(r3,_PyFloat_Type)|0)!=0){r1=30;break}r4=_PyInt_AsLong(r2);break}}while(0);L31:do{if(r1==30){r3=r2+8|0;r5=(HEAP32[tempDoublePtr>>2]=HEAP32[r3>>2],HEAP32[tempDoublePtr+4>>2]=HEAP32[r3+4>>2],HEAPF64[tempDoublePtr>>3]);do{if(___fpclassifyf(r5)>>>0>1){if(r5!=Math.floor(r5)){break}r3=_PyLong_FromDouble(r5);if((r3|0)==0){r6=0;return r6}r7=_PyLong_AsLong(r3);r8=r3|0;r9=HEAP32[r8>>2]-1|0;HEAP32[r8>>2]=r9;if((r9|0)!=0){r4=r7;break L31}FUNCTION_TABLE[HEAP32[HEAP32[r3+4>>2]+24>>2]](r3);r4=r7;break L31}}while(0);_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str62|0);r6=0;return r6}}while(0);do{if((r4|0)==-1){if((_PyErr_Occurred()|0)==0){break}else{r6=0}return r6}else{if((r4|0)<0){break}r2=_PyInt_FromLong(1);if((r2|0)==0){r6=0;return r6}if((r4|0)<1){r6=r2;return r6}else{r10=r2;r11=1}while(1){r2=_PyInt_FromLong(r11);if((r2|0)==0){break}r5=_PyNumber_Multiply(r10,r2);r7=r2|0;r3=HEAP32[r7>>2]-1|0;HEAP32[r7>>2]=r3;if((r3|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r2+4>>2]+24>>2]](r2)}if((r5|0)==0){break}r2=r10|0;r3=HEAP32[r2>>2]-1|0;HEAP32[r2>>2]=r3;if((r3|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r10+4>>2]+24>>2]](r10)}r3=r11+1|0;if((r3|0)>(r4|0)){r6=r5;r1=59;break}else{r10=r5;r11=r3}}if(r1==59){return r6}r3=r10|0;r5=HEAP32[r3>>2]-1|0;HEAP32[r3>>2]=r5;if((r5|0)!=0){r6=0;return r6}FUNCTION_TABLE[HEAP32[HEAP32[r10+4>>2]+24>>2]](r10);r6=0;return r6}}while(0);_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str63|0);r6=0;return r6}function _math_floor(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+134,0)}function _math_fmod(r1,r2){var r3,r4,r5;r1=STACKTOP;STACKTOP=STACKTOP+8|0;r3=r1;r4=r1+4;if((_PyArg_UnpackTuple(r2,__str22|0,2,2,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r3,HEAP32[tempInt+4>>2]=r4,tempInt))|0)==0){r5=0;STACKTOP=r1;return r5}r2=_PyFloat_AsDouble(HEAP32[r3>>2]);r3=_PyFloat_AsDouble(HEAP32[r4>>2]);do{if(r2==-1|r3==-1){if((_PyErr_Occurred()|0)==0){break}else{r5=0}STACKTOP=r1;return r5}}while(0);do{if((___fpclassifyf(r3)|0)==1){if(___fpclassifyf(r2)>>>0<=1){break}r5=_PyFloat_FromDouble(r2);STACKTOP=r1;return r5}}while(0);HEAP32[___errno_location()>>2]=0;r4=_fmod(r2,r3);L86:do{if((___fpclassifyf(r4)|0)==0){do{if((___fpclassifyf(r2)|0)!=0){if((___fpclassifyf(r3)|0)==0){break}HEAP32[___errno_location()>>2]=33;break L86}}while(0);HEAP32[___errno_location()>>2]=0}}while(0);do{if((HEAP32[___errno_location()>>2]|0)!=0){if((_is_error(r4)|0)==0){break}else{r5=0}STACKTOP=r1;return r5}}while(0);r5=_PyFloat_FromDouble(r4);STACKTOP=r1;return r5}function _math_frexp(r1,r2){var r3,r4,r5,r6,r7;r1=0;r3=STACKTOP;STACKTOP=STACKTOP+4|0;r4=r3;r5=_PyFloat_AsDouble(r2);do{if(r5==-1){if((_PyErr_Occurred()|0)==0){break}else{r6=0}STACKTOP=r3;return r6}}while(0);do{if((___fpclassifyf(r5)|0)==0){r1=87}else{if(!((___fpclassifyf(r5)|0)!=1&r5!=0)){r1=87;break}r7=_frexp(r5,r4);break}}while(0);if(r1==87){HEAP32[r4>>2]=0;r7=r5}r5=HEAP32[r4>>2];r6=_Py_BuildValue(__str61|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+12|0,HEAPF64[tempDoublePtr>>3]=r7,HEAP32[tempInt>>2]=HEAP32[tempDoublePtr>>2],HEAP32[tempInt+4>>2]=HEAP32[tempDoublePtr+4>>2],HEAP32[tempInt+8>>2]=r5,tempInt));STACKTOP=r3;return r6}function _math_gamma(r1,r2){return _math_1a(r2,FUNCTION_TABLE_OFFSET+112)}function _math_hypot(r1,r2){var r3,r4,r5;r1=STACKTOP;STACKTOP=STACKTOP+8|0;r3=r1;r4=r1+4;if((_PyArg_UnpackTuple(r2,__str26|0,2,2,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r3,HEAP32[tempInt+4>>2]=r4,tempInt))|0)==0){r5=0;STACKTOP=r1;return r5}r2=_PyFloat_AsDouble(HEAP32[r3>>2]);r3=_PyFloat_AsDouble(HEAP32[r4>>2]);do{if(r2==-1|r3==-1){if((_PyErr_Occurred()|0)==0){break}else{r5=0}STACKTOP=r1;return r5}}while(0);if((___fpclassifyf(r2)|0)==1){r5=_PyFloat_FromDouble(Math.abs(r2));STACKTOP=r1;return r5}if((___fpclassifyf(r3)|0)==1){r5=_PyFloat_FromDouble(Math.abs(r3));STACKTOP=r1;return r5}HEAP32[___errno_location()>>2]=0;r4=_hypot(r2,r3);L127:do{if((___fpclassifyf(r4)|0)==0){do{if((___fpclassifyf(r2)|0)!=0){if((___fpclassifyf(r3)|0)==0){break}HEAP32[___errno_location()>>2]=33;break L127}}while(0);HEAP32[___errno_location()>>2]=0}else{if((___fpclassifyf(r4)|0)!=1){break}do{if(___fpclassifyf(r2)>>>0>1){if(___fpclassifyf(r3)>>>0<=1){break}HEAP32[___errno_location()>>2]=34;break L127}}while(0);HEAP32[___errno_location()>>2]=0}}while(0);do{if((HEAP32[___errno_location()>>2]|0)!=0){if((_is_error(r4)|0)==0){break}else{r5=0}STACKTOP=r1;return r5}}while(0);r5=_PyFloat_FromDouble(r4);STACKTOP=r1;return r5}function _math_isinf(r1,r2){var r3;r1=_PyFloat_AsDouble(r2);do{if(r1==-1){if((_PyErr_Occurred()|0)==0){break}else{r3=0}return r3}}while(0);r3=_PyBool_FromLong((___fpclassifyf(r1)|0)==1&1);return r3}function _math_isnan(r1,r2){var r3;r1=_PyFloat_AsDouble(r2);do{if(r1==-1){if((_PyErr_Occurred()|0)==0){break}else{r3=0}return r3}}while(0);r3=_PyBool_FromLong((___fpclassifyf(r1)|0)==0&1);return r3}function _math_ldexp(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10;r1=0;r3=STACKTOP;STACKTOP=STACKTOP+16|0;r4=r3,r5=r4>>2;r6=r3+8;r7=r3+12;if((_PyArg_ParseTuple(r2,__str53|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r4,HEAP32[tempInt+4>>2]=r6,tempInt))|0)==0){r8=0;STACKTOP=r3;return r8}r4=HEAP32[r6>>2];if((HEAP32[HEAP32[r4+4>>2]+84>>2]&25165824|0)==0){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str54|0);r8=0;STACKTOP=r3;return r8}r6=_PyLong_AsLongAndOverflow(r4,r7);do{if((r6|0)==-1){if((_PyErr_Occurred()|0)==0){break}else{r8=0}STACKTOP=r3;return r8}}while(0);r4=HEAP32[r7>>2];if((r4|0)==0){r9=r6}else{r9=(r4>>>31)+2147483647|0}r4=(HEAP32[tempDoublePtr>>2]=HEAP32[r5],HEAP32[tempDoublePtr+4>>2]=HEAP32[r5+1],HEAPF64[tempDoublePtr>>3]);do{if(r4==0){r1=142}else{if(___fpclassifyf(r4)>>>0<=1){r1=142;break}HEAP32[___errno_location()>>2]=0;r6=_ldexp((HEAP32[tempDoublePtr>>2]=HEAP32[r5],HEAP32[tempDoublePtr+4>>2]=HEAP32[r5+1],HEAPF64[tempDoublePtr>>3]),r9);if((___fpclassifyf(r6)|0)!=1){r10=r6;break}HEAP32[___errno_location()>>2]=34;r10=r6;break}}while(0);if(r1==142){r1=(HEAP32[tempDoublePtr>>2]=HEAP32[r5],HEAP32[tempDoublePtr+4>>2]=HEAP32[r5+1],HEAPF64[tempDoublePtr>>3]);HEAP32[___errno_location()>>2]=0;r10=r1}do{if((HEAP32[___errno_location()>>2]|0)!=0){if((_is_error(r10)|0)==0){break}else{r8=0}STACKTOP=r3;return r8}}while(0);r8=_PyFloat_FromDouble(r10);STACKTOP=r3;return r8}function _math_lgamma(r1,r2){return _math_1a(r2,FUNCTION_TABLE_OFFSET+60)}function _math_fsum(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31;r1=0;r3=STACKTOP;STACKTOP=STACKTOP+264|0;r4=r3,r5=r4>>2;r6=r3+260,r7=r6>>2;HEAP32[r5]=32;r8=r3+4|0;HEAP32[r7]=r8;r9=_PyObject_GetIter(r2);if((r9|0)==0){r10=0;STACKTOP=r3;return r10}else{r11=0;r12=0}L188:while(1){r13=0;while(1){r2=HEAP32[r5];if((r13|0)>(r2|0)){r1=208;break L188}do{if((r2|0)==32){if((HEAP32[r7]|0)==(r8|0)){break}else{r1=161;break}}else{r1=161}}while(0);if(r1==161){r1=0;if((HEAP32[r5]|0)<=32){r1=211;break L188}if((HEAP32[r7]|0)==0){r1=210;break L188}}r2=_PyIter_Next(r9);if((r2|0)==0){r1=165;break L188}r14=_PyFloat_AsDouble(r2);r15=r2|0;r16=HEAP32[r15>>2]-1|0;HEAP32[r15>>2]=r16;if((r16|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r2+4>>2]+24>>2]](r2)}if((_PyErr_Occurred()|0)!=0){r17=0;break L188}L204:do{if((r13|0)>0){r2=HEAP32[r7];r16=r14;r15=0;r18=0;while(1){r19=(r15<<3)+r2|0;r20=(HEAP32[tempDoublePtr>>2]=HEAP32[r19>>2],HEAP32[tempDoublePtr+4>>2]=HEAP32[r19+4>>2],HEAPF64[tempDoublePtr>>3]);r19=Math.abs(r16)<Math.abs(r20);r21=r19?r20:r16;r22=r19?r16:r20;r23=r21+r22;r24=r23-r21;r25=r22-r24;if(r25!=0){r22=r25;r21=r18+1|0;r20=(r18<<3)+r2|0;HEAPF64[tempDoublePtr>>3]=r22,HEAP32[r20>>2]=HEAP32[tempDoublePtr>>2],HEAP32[r20+4>>2]=HEAP32[tempDoublePtr+4>>2];r26=r21}else{r26=r18}r21=r23;r20=r15+1|0;if((r20|0)==(r13|0)){r27=r21;r28=r26;break L204}else{r16=r21;r15=r20;r18=r26}}}else{r27=r14;r28=0}}while(0);if(r27!=0){if(___fpclassifyf(r27)>>>0<=1){break}if((r28|0)>=(HEAP32[r5]|0)){if((__fsum_realloc(r6,r28,r8,r4)|0)!=0){r17=0;break L188}}r18=r28+1|0;r15=(r28<<3)+HEAP32[r7]|0;HEAPF64[tempDoublePtr>>3]=r27,HEAP32[r15>>2]=HEAP32[tempDoublePtr>>2],HEAP32[r15+4>>2]=HEAP32[tempDoublePtr+4>>2];r29=r18}else{r29=r28}if((r29|0)>-1){r13=r29}else{r1=209;break L188}}if(___fpclassifyf(r14)>>>0>1){r1=177;break}if((___fpclassifyf(r14)|0)==1){r30=r11+r14}else{r30=r11}r11=r30;r12=r12+r14}do{if(r1==165){if((_PyErr_Occurred()|0)!=0){r17=0;break}if(r12!=0){if((___fpclassifyf(r11)|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str58|0);r17=0;break}else{r17=_PyFloat_FromDouble(r12);break}}r23=0;L233:do{if((r13|0)>0){r14=r13-1|0;r30=HEAP32[r7];r29=(r14<<3)+r30|0;r23=(HEAP32[tempDoublePtr>>2]=HEAP32[r29>>2],HEAP32[tempDoublePtr+4>>2]=HEAP32[r29+4>>2],HEAPF64[tempDoublePtr>>3]);r29=r14;while(1){if((r29|0)<=0){break L233}r14=r23;r31=r29-1|0;r28=(r31<<3)+r30|0;r27=(HEAP32[tempDoublePtr>>2]=HEAP32[r28>>2],HEAP32[tempDoublePtr+4>>2]=HEAP32[r28+4>>2],HEAPF64[tempDoublePtr>>3]);if(Math.abs(r27)>=Math.abs(r14)){r1=193;break}r23=r14+r27;r24=r23-r14;r25=r27-r24;if(r25!=0){break}else{r29=r31}}if(r1==193){___assert_func(__str44|0,1049,___func___math_fsum|0,__str59|0)}if((r31|0)<=0){break}do{if(r25<0){r30=(r29-2<<3)+HEAP32[r7]|0;if((HEAP32[tempDoublePtr>>2]=HEAP32[r30>>2],HEAP32[tempDoublePtr+4>>2]=HEAP32[r30+4>>2],HEAPF64[tempDoublePtr>>3])<0){break}else{r1=198;break}}else{r1=198}}while(0);if(r1==198){if(r25<=0){break}r30=(r29-2<<3)+HEAP32[r7]|0;if((HEAP32[tempDoublePtr>>2]=HEAP32[r30>>2],HEAP32[tempDoublePtr+4>>2]=HEAP32[r30+4>>2],HEAPF64[tempDoublePtr>>3])<=0){break}}r30=r25*2;r27=r23+r30;r24=r27-r23;if(r30!=r24){break}r23=r27}}while(0);r17=_PyFloat_FromDouble(r23)}else if(r1==177){_PyErr_SetString(HEAP32[_PyExc_OverflowError>>2],__str57|0);r17=0}else if(r1==208){___assert_func(__str44|0,978,___func___math_fsum|0,__str55|0)}else if(r1==209){___assert_func(__str44|0,978,___func___math_fsum|0,__str55|0)}else if(r1==210){___assert_func(__str44|0,980,___func___math_fsum|0,__str56|0)}else if(r1==211){___assert_func(__str44|0,980,___func___math_fsum|0,__str56|0)}}while(0);r1=r9|0;r23=HEAP32[r1>>2]-1|0;HEAP32[r1>>2]=r23;if((r23|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r9+4>>2]+24>>2]](r9)}r9=HEAP32[r7];if((r9|0)==(r8|0)){r10=r17;STACKTOP=r3;return r10}_PyMem_Free(r9);r10=r17;STACKTOP=r3;return r10}function _math_log(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10;r1=STACKTOP;STACKTOP=STACKTOP+8|0;r3=r1;r4=r1+4;HEAP32[r4>>2]=0;do{if((_PyArg_UnpackTuple(r2,__str31|0,1,2,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r3,HEAP32[tempInt+4>>2]=r4,tempInt))|0)==0){r5=0}else{r6=_loghelper(HEAP32[r3>>2],FUNCTION_TABLE_OFFSET+46);if((r6|0)==0){r5=0;break}r7=HEAP32[r4>>2];if((r7|0)==0){r5=r6;break}r8=_loghelper(r7,FUNCTION_TABLE_OFFSET+46);if((r8|0)==0){r7=r6|0;r9=HEAP32[r7>>2]-1|0;HEAP32[r7>>2]=r9;if((r9|0)!=0){r5=0;break}FUNCTION_TABLE[HEAP32[HEAP32[r6+4>>2]+24>>2]](r6);r5=0;break}r9=_PyNumber_Divide(r6,r8);r7=r6|0;r10=HEAP32[r7>>2]-1|0;HEAP32[r7>>2]=r10;if((r10|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r6+4>>2]+24>>2]](r6)}r6=r8|0;r10=HEAP32[r6>>2]-1|0;HEAP32[r6>>2]=r10;if((r10|0)!=0){r5=r9;break}FUNCTION_TABLE[HEAP32[HEAP32[r8+4>>2]+24>>2]](r8);r5=r9}}while(0);STACKTOP=r1;return r5}function _math_log1p(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+118,1)}function _math_log10(r1,r2){return _loghelper(r2,FUNCTION_TABLE_OFFSET+122)}function _math_modf(r1,r2){var r3,r4,r5;r1=STACKTOP;STACKTOP=STACKTOP+8|0;r3=r1;r4=_PyFloat_AsDouble(r2);do{if(r4==-1){if((_PyErr_Occurred()|0)==0){break}else{r5=0}STACKTOP=r1;return r5}}while(0);do{if(___fpclassifyf(r4)>>>0<=1){if((___fpclassifyf(r4)|0)==1){r2=_copysign(0,r4);r5=_Py_BuildValue(__str48|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAPF64[tempDoublePtr>>3]=r2,HEAP32[tempInt>>2]=HEAP32[tempDoublePtr>>2],HEAP32[tempInt+4>>2]=HEAP32[tempDoublePtr+4>>2],HEAPF64[tempDoublePtr>>3]=r4,HEAP32[tempInt+8>>2]=HEAP32[tempDoublePtr>>2],HEAP32[tempInt+12>>2]=HEAP32[tempDoublePtr+4>>2],tempInt));STACKTOP=r1;return r5}if((___fpclassifyf(r4)|0)!=0){break}r5=_Py_BuildValue(__str48|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAPF64[tempDoublePtr>>3]=r4,HEAP32[tempInt>>2]=HEAP32[tempDoublePtr>>2],HEAP32[tempInt+4>>2]=HEAP32[tempDoublePtr+4>>2],HEAPF64[tempDoublePtr>>3]=r4,HEAP32[tempInt+8>>2]=HEAP32[tempDoublePtr>>2],HEAP32[tempInt+12>>2]=HEAP32[tempDoublePtr+4>>2],tempInt));STACKTOP=r1;return r5}}while(0);HEAP32[___errno_location()>>2]=0;r2=_modf(r4,r3);r4=(HEAP32[tempDoublePtr>>2]=HEAP32[r3>>2],HEAP32[tempDoublePtr+4>>2]=HEAP32[r3+4>>2],HEAPF64[tempDoublePtr>>3]);r5=_Py_BuildValue(__str48|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAPF64[tempDoublePtr>>3]=r2,HEAP32[tempInt>>2]=HEAP32[tempDoublePtr>>2],HEAP32[tempInt+4>>2]=HEAP32[tempDoublePtr+4>>2],HEAPF64[tempDoublePtr>>3]=r4,HEAP32[tempInt+8>>2]=HEAP32[tempDoublePtr>>2],HEAP32[tempInt+12>>2]=HEAP32[tempDoublePtr+4>>2],tempInt));STACKTOP=r1;return r5}function _math_pow(r1,r2){var r3,r4,r5,r6,r7,r8,r9;r1=0;r3=STACKTOP;STACKTOP=STACKTOP+8|0;r4=r3;r5=r3+4;if((_PyArg_UnpackTuple(r2,__str35|0,2,2,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r4,HEAP32[tempInt+4>>2]=r5,tempInt))|0)==0){r6=0;STACKTOP=r3;return r6}r2=_PyFloat_AsDouble(HEAP32[r4>>2]);r4=_PyFloat_AsDouble(HEAP32[r5>>2]);do{if(r2==-1|r4==-1){if((_PyErr_Occurred()|0)==0){break}else{r6=0}STACKTOP=r3;return r6}}while(0);do{if(___fpclassifyf(r2)>>>0>1){if(___fpclassifyf(r4)>>>0<=1){r1=246;break}HEAP32[___errno_location()>>2]=0;r5=Math.pow(r2,r4);if(___fpclassifyf(r5)>>>0>1){r7=r5;break}if((___fpclassifyf(r5)|0)==0){HEAP32[___errno_location()>>2]=33;r7=r5;break}if((___fpclassifyf(r5)|0)!=1){r7=r5;break}r8=___errno_location();if(r2==0){HEAP32[r8>>2]=33;r7=r5;break}else{HEAP32[r8>>2]=34;r7=r5;break}}else{r1=246}}while(0);do{if(r1==246){HEAP32[___errno_location()>>2]=0;if((___fpclassifyf(r2)|0)==0){r7=r4==0?1:r2;break}if((___fpclassifyf(r4)|0)==0){r7=r2==1?1:r4;break}r5=(___fpclassifyf(r2)|0)==1;r8=___fpclassifyf(r4);if(!r5){if((r8|0)!=1){r7=0;break}r5=Math.abs(r2);if(r5==1){r7=1;break}if(r4>0&r5>1){r7=r4;break}if(!(r4<0&r5<1)){r7=0;break}r5=-r4;if(r2!=0){r7=r5;break}HEAP32[___errno_location()>>2]=33;r7=r5;break}if(r8>>>0>1){r9=_fmod(Math.abs(r4),2)==1}else{r9=0}if(r4>0){if(r9){r7=r2;break}r7=Math.abs(r2);break}else{r8=r4==0;if(r8|r9^1){r7=r8?1:0;break}r7=_copysign(0,r2);break}}}while(0);do{if((HEAP32[___errno_location()>>2]|0)!=0){if((_is_error(r7)|0)==0){break}else{r6=0}STACKTOP=r3;return r6}}while(0);r6=_PyFloat_FromDouble(r7);STACKTOP=r3;return r6}function _math_radians(r1,r2){var r3;r1=_PyFloat_AsDouble(r2);do{if(r1==-1){if((_PyErr_Occurred()|0)==0){break}else{r3=0}return r3}}while(0);r3=_PyFloat_FromDouble(r1*.017453292519943295);return r3}function _math_sin(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+20,0)}function _math_sinh(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+66,1)}function _math_sqrt(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+130,0)}function _math_tan(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+106,0)}function _math_tanh(r1,r2){return _math_1(r2,FUNCTION_TABLE_OFFSET+84,0)}function _math_trunc(r1,r2){var r3;r1=STACKTOP;r3=_PyObject_CallMethod(r2,__str43|0,0,(tempInt=STACKTOP,STACKTOP=STACKTOP+1|0,STACKTOP=STACKTOP+3>>2<<2,HEAP32[tempInt>>2]=0,tempInt));STACKTOP=r1;return r3}function _math_1(r1,r2,r3){var r4,r5,r6;r4=_PyFloat_AsDouble(r1);do{if(r4==-1){if((_PyErr_Occurred()|0)==0){break}else{r5=0}return r5}}while(0);HEAP32[___errno_location()>>2]=0;r1=FUNCTION_TABLE[r2](r4);do{if((___fpclassifyf(r1)|0)==0){r2=(___fpclassifyf(r4)|0)==0;r6=___errno_location();if(r2){HEAP32[r6>>2]=0;break}else{HEAP32[r6>>2]=33;break}}else{if((___fpclassifyf(r1)|0)!=1){break}if(___fpclassifyf(r4)>>>0>1){HEAP32[___errno_location()>>2]=(r3|0)!=0?34:33;break}else{HEAP32[___errno_location()>>2]=0;break}}}while(0);do{if((HEAP32[___errno_location()>>2]|0)!=0){if((_is_error(r1)|0)==0){break}else{r5=0}return r5}}while(0);r5=_PyFloat_FromDouble(r1);return r5}function _loghelper(r1,r2){var r3,r4,r5,r6,r7;r3=STACKTOP;STACKTOP=STACKTOP+4|0;r4=r3;do{if((HEAP32[HEAP32[r1+4>>2]+84>>2]&16777216|0)==0){r5=_math_1(r1,r2,0)}else{r6=__PyLong_Frexp(r1,r4);if(r6==-1){if((_PyErr_Occurred()|0)!=0){r5=0;break}}if(r6<=0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str46|0);r5=0;break}if((HEAP32[r4>>2]|0)==1&r6==.5){r5=_PyFloat_FromDouble(0);break}else{r7=FUNCTION_TABLE[r2](r6);r5=_PyFloat_FromDouble(r7+FUNCTION_TABLE[r2](2)*(HEAP32[r4>>2]|0));break}}}while(0);STACKTOP=r3;return r5}function _m_log10(r1){var r2;if(___fpclassifyf(r1)>>>0<=1){if((___fpclassifyf(r1)|0)==0|r1>0){r2=r1;return r2}HEAP32[___errno_location()>>2]=33;r2=NaN;return r2}if(r1>0){r2=_log10(r1);return r2}else{HEAP32[___errno_location()>>2]=33;r2=r1==0?-Infinity:NaN;return r2}}function _m_log(r1){var r2;if(___fpclassifyf(r1)>>>0<=1){if((___fpclassifyf(r1)|0)==0|r1>0){r2=r1;return r2}HEAP32[___errno_location()>>2]=33;r2=NaN;return r2}if(r1>0){r2=Math.log(r1);return r2}else{HEAP32[___errno_location()>>2]=33;r2=r1==0?-Infinity:NaN;return r2}}function _math_1a(r1,r2){var r3,r4;r3=_PyFloat_AsDouble(r1);do{if(r3==-1){if((_PyErr_Occurred()|0)==0){break}else{r4=0}return r4}}while(0);HEAP32[___errno_location()>>2]=0;r1=FUNCTION_TABLE[r2](r3);do{if((HEAP32[___errno_location()>>2]|0)!=0){if((_is_error(r1)|0)==0){break}else{r4=0}return r4}}while(0);r4=_PyFloat_FromDouble(r1);return r4}function _m_lgamma(r1){var r2,r3,r4;if(___fpclassifyf(r1)>>>0<=1){r2=(___fpclassifyf(r1)|0)==0?r1:Infinity;return r2}if(Math.floor(r1)==r1&r1<=2){if(r1>0){r2=0;return r2}HEAP32[___errno_location()>>2]=33;r2=Infinity;return r2}r3=Math.abs(r1);if(r3<1e-20){r2=-Math.log(r3);return r2}if(r1>0){r4=Math.log(_lanczos_sum(r1))-6.02468004077673+(r1-.5)*(Math.log(r1+6.02468004077673-.5)-1)}else{r1=1.1447298858494002-Math.log(Math.abs(_sinpi(r3)))-Math.log(r3);r4=r1-(Math.log(_lanczos_sum(r3))-6.02468004077673+(r3-.5)*(Math.log(r3+6.02468004077673-.5)-1))}if((___fpclassifyf(r4)|0)!=1){r2=r4;return r2}HEAP32[___errno_location()>>2]=34;r2=r4;return r2}function _is_error(r1){var r2;if((HEAP32[___errno_location()>>2]|0)==0){___assert_func(__str44|0,620,___func___is_error|0,__str45|0)}if((HEAP32[___errno_location()>>2]|0)==33){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str46|0);r2=1;return r2}if((HEAP32[___errno_location()>>2]|0)!=34){_PyErr_SetFromErrno(HEAP32[_PyExc_ValueError>>2]);r2=1;return r2}if(Math.abs(r1)<1){r2=0;return r2}_PyErr_SetString(HEAP32[_PyExc_OverflowError>>2],__str47|0);r2=1;return r2}function _lanczos_sum(r1){var r2,r3,r4;if(r1<=0){___assert_func(__str44|0,206,___func___lanczos_sum|0,__str52|0)}if(r1<5){r2=(((((((((((1*r1+66)*r1+1925)*r1+32670)*r1+357423)*r1+2637558)*r1+13339535)*r1+45995730)*r1+105258076)*r1+150917976)*r1+120543840)*r1+39916800)*r1;r3=(((((((((((2.5066282746310002*r1+210.82427775157936)*r1+8071.672002365816)*r1+186056.26539522348)*r1+2876370.6289353725)*r1+31426415.585400194)*r1+248874557.86205417)*r1+1439720407.3117216)*r1+6039542586.352028)*r1+17921034426.03721)*r1+35711959237.35567)*r1+42919803642.6491)*r1+23531376880.41076;r4=r3/r2;return r4}else{r2=(((((((((((0/r1+39916800)/r1+120543840)/r1+150917976)/r1+105258076)/r1+45995730)/r1+13339535)/r1+2637558)/r1+357423)/r1+32670)/r1+1925)/r1+66)/r1+1;r3=(((((((((((23531376880.41076/r1+42919803642.6491)/r1+35711959237.35567)/r1+17921034426.03721)/r1+6039542586.352028)/r1+1439720407.3117216)/r1+248874557.86205417)/r1+31426415.585400194)/r1+2876370.6289353725)/r1+186056.26539522348)/r1+8071.672002365816)/r1+210.82427775157936)/r1+2.5066282746310002;r4=r3/r2;return r4}}function _sinpi(r1){var r2,r3,r4;if(___fpclassifyf(r1)>>>0<=1){___assert_func(__str44|0,79,___func___sinpi|0,__str49|0)}r2=_fmod(Math.abs(r1),2);r3=_round(r2*2)&-1;if(r3>>>0>=5){___assert_func(__str44|0,82,___func___sinpi|0,__str50|0)}if((r3|0)==0){r4=Math.sin(r2*3.141592653589793)}else if((r3|0)==3){r4=-Math.cos((r2-1.5)*3.141592653589793)}else if((r3|0)==2){r4=Math.sin((1-r2)*3.141592653589793)}else if((r3|0)==1){r4=Math.cos((r2-.5)*3.141592653589793)}else if((r3|0)==4){r4=Math.sin((r2-2)*3.141592653589793)}else{___assert_func(__str44|0,102,___func___sinpi|0,__str51|0)}return r4*_copysign(1,r1)}function _m_tgamma(r1){var r2,r3,r4,r5,r6,r7,r8;if(___fpclassifyf(r1)>>>0<=1){if((___fpclassifyf(r1)|0)==0|r1>0){r2=r1;return r2}HEAP32[___errno_location()>>2]=33;r2=NaN;return r2}if(r1==0){HEAP32[___errno_location()>>2]=33;r2=1/r1;return r2}do{if(Math.floor(r1)==r1){if(r1<0){HEAP32[___errno_location()>>2]=33;r2=NaN;return r2}if(r1>23){break}r3=((r1&-1)-1<<3)+_gamma_integral|0;r2=(HEAP32[tempDoublePtr>>2]=HEAP32[r3>>2],HEAP32[tempDoublePtr+4>>2]=HEAP32[r3+4>>2],HEAPF64[tempDoublePtr>>3]);return r2}}while(0);r3=Math.abs(r1);if(r3<1e-20){r4=1/r1;if((___fpclassifyf(r4)|0)!=1){r2=r4;return r2}HEAP32[___errno_location()>>2]=34;r2=r4;return r2}if(r3>200){if(r1<0){_sinpi(r1);r2=0;return r2}else{HEAP32[___errno_location()>>2]=34;r2=Infinity;return r2}}r4=r3+5.52468004077673;if(r3>5.52468004077673){r5=r4-r3-5.52468004077673}else{r5=r4-5.52468004077673-r3}r6=r5*6.02468004077673/r4;do{if(r1<0){r5=-3.141592653589793/_sinpi(r3)/r3*Math.exp(r4)/_lanczos_sum(r3);r7=r5-r6*r5;if(r3<140){r8=r7/Math.pow(r4,r3-.5);break}else{r5=Math.pow(r4,r3*.5-.25);r8=r7/r5/r5;break}}else{r5=_lanczos_sum(r3)/Math.exp(r4);r7=r5+r6*r5;if(r3<140){r8=r7*Math.pow(r4,r3-.5);break}else{r5=Math.pow(r4,r3*.5-.25);r8=r5*r7*r5;break}}}while(0);if((___fpclassifyf(r8)|0)!=1){r2=r8;return r2}HEAP32[___errno_location()>>2]=34;r2=r8;return r2}function __fsum_realloc(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10;r5=HEAP32[r4>>2];r6=r5<<1;do{if((r6|0)>(r2|0)&r6>>>0<268435455){r7=HEAP32[r1>>2];if((r7|0)==(r3|0)){r8=_PyMem_Malloc(r5<<4);if((r8|0)==0){break}_memcpy(r8,r3,r2<<3);r9=r8}else{r8=_PyMem_Realloc(r7,r5<<4);if((r8|0)==0){break}else{r9=r8}}HEAP32[r1>>2]=r9;HEAP32[r4>>2]=r6;r10=0;return r10}}while(0);_PyErr_SetString(HEAP32[_PyExc_MemoryError>>2],__str60|0);r10=1;return r10}function _m_erfc(r1){var r2,r3,r4;do{if((___fpclassifyf(r1)|0)==0){r2=r1}else{r3=Math.abs(r1);if(r3<1.5){r2=1-_m_erf_series(r1);break}r4=_m_erfc_contfrac(r3);if(r1>0){r2=r4;break}r2=2-r4}}while(0);return r2}function _m_erf_series(r1){var r2,r3,r4,r5,r6,r7;r2=r1*r1;r3=25.5;r4=0;r5=0;while(1){r6=r2*r5/r3+2;r7=r4+1|0;if((r7|0)==25){break}else{r3=r3-1;r4=r7;r5=r6}}r5=HEAP32[___errno_location()>>2];r4=r6*r1*Math.exp(-r2)/1.772453850905516;HEAP32[___errno_location()>>2]=r5;return r4}function _m_erfc_contfrac(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;if(r1>=30){r2=0;return r2}r3=r1*r1;r4=0;r5=r3+.5;r6=1;r7=1;r8=.5;r9=0;r10=0;while(1){r11=r8+r10;r12=r8+2;r13=r3+r12;r14=r7*r13-r4*r11;r15=r5*r13-r6*r11;r13=r9+1|0;if((r13|0)==50){break}else{r4=r7;r6=r5;r5=r15;r7=r14;r8=r12;r9=r13;r10=r11}}r10=HEAP32[___errno_location()>>2];r9=r14/r15*r1*Math.exp(-r3)/1.772453850905516;HEAP32[___errno_location()>>2]=r10;r2=r9;return r2}function _m_erf(r1){var r2,r3,r4;do{if((___fpclassifyf(r1)|0)==0){r2=r1}else{r3=Math.abs(r1);if(r3<1.5){r2=_m_erf_series(r1);break}r4=_m_erfc_contfrac(r3);if(r1>0){r2=1-r4;break}else{r2=r4-1;break}}}while(0);return r2}function _math_2(r1,r2,r3){var r4,r5,r6,r7;r4=STACKTOP;STACKTOP=STACKTOP+8|0;r5=r4;r6=r4+4;if((_PyArg_UnpackTuple(r1,r3,2,2,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r5,HEAP32[tempInt+4>>2]=r6,tempInt))|0)==0){r7=0;STACKTOP=r4;return r7}r3=_PyFloat_AsDouble(HEAP32[r5>>2]);r5=_PyFloat_AsDouble(HEAP32[r6>>2]);do{if(r3==-1|r5==-1){if((_PyErr_Occurred()|0)==0){break}else{r7=0}STACKTOP=r4;return r7}}while(0);HEAP32[___errno_location()>>2]=0;r6=FUNCTION_TABLE[r2](r3,r5);L594:do{if((___fpclassifyf(r6)|0)==0){do{if((___fpclassifyf(r3)|0)!=0){if((___fpclassifyf(r5)|0)==0){break}HEAP32[___errno_location()>>2]=33;break L594}}while(0);HEAP32[___errno_location()>>2]=0}else{if((___fpclassifyf(r6)|0)!=1){break}do{if(___fpclassifyf(r3)>>>0>1){if(___fpclassifyf(r5)>>>0<=1){break}HEAP32[___errno_location()>>2]=34;break L594}}while(0);HEAP32[___errno_location()>>2]=0}}while(0);do{if((HEAP32[___errno_location()>>2]|0)!=0){if((_is_error(r6)|0)==0){break}else{r7=0}STACKTOP=r4;return r7}}while(0);r7=_PyFloat_FromDouble(r6);STACKTOP=r4;return r7}function _m_atan2(r1,r2){var r3,r4,r5;do{if((___fpclassifyf(r2)|0)==0){r3=NaN}else{if((___fpclassifyf(r1)|0)==0){r3=NaN;break}r4=(___fpclassifyf(r1)|0)==1;r5=(___fpclassifyf(r2)|0)==1;if(r4){if(!r5){r3=_copysign(1.5707963267948966,r1);break}if(_copysign(1,r2)==1){r3=_copysign(.7853981633974483,r1);break}else{r3=_copysign(2.356194490192345,r1);break}}else{if(!(r5|r1==0)){r3=Math.atan2(r1,r2);break}if(_copysign(1,r2)==1){r3=_copysign(0,r1);break}else{r3=_copysign(3.141592653589793,r1);break}}}}while(0);return r3}function __Py_acosh(r1){var r2,r3;do{if((___fpclassifyf(r1)|0)==0){r2=r1+r1}else{if(r1<1){HEAP32[___errno_location()>>2]=33;r2=NaN;break}if(r1>=268435456){if((___fpclassifyf(r1)|0)==1){r2=r1+r1;break}else{r2=Math.log(r1)+.6931471805599453;break}}if(r1==1){r2=0;break}if(r1>2){r2=Math.log(r1*2-1/(Math.sqrt(r1*r1-1)+r1));break}else{r3=r1-1;r2=_log1p(r3+Math.sqrt(r3*2+r3*r3));break}}}while(0);return r2}function __Py_asinh(r1){var r2,r3,r4,r5;r2=Math.abs(r1);do{if((___fpclassifyf(r1)|0)!=0){if((___fpclassifyf(r1)|0)==1){break}if(r2<3.725290298461914e-9){r3=r1;return r3}do{if(r2>268435456){r4=Math.log(r2)+.6931471805599453}else{if(r2>2){r4=Math.log(r2*2+1/(r2+Math.sqrt(r1*r1+1)));break}else{r5=r1*r1;r4=_log1p(r2+r5/(Math.sqrt(r5+1)+1));break}}}while(0);r3=_copysign(r4,r1);return r3}}while(0);r3=r1+r1;return r3}function __Py_atanh(r1){var r2,r3,r4,r5;if((___fpclassifyf(r1)|0)==0){r2=r1+r1;return r2}r3=Math.abs(r1);if(r3>=1){HEAP32[___errno_location()>>2]=33;r2=NaN;return r2}if(r3<3.725290298461914e-9){r2=r1;return r2}r4=r3+r3;if(r3<.5){r5=_log1p(r4+r3*r4/(1-r3))}else{r5=_log1p(r4/(1-r3))}r2=_copysign(r5*.5,r1);return r2}function __Py_expm1(r1){var r2,r3,r4;r2=Math.abs(r1)<.7;r3=Math.exp(r1);do{if(r2){if(r3==1){r4=r1;break}r4=(r3-1)*r1/Math.log(r3)}else{r4=r3-1}}while(0);return r4}function __Py_log1p(r1){var r2,r3,r4;if(Math.abs(r1)<1.1102230246251565e-16){r2=r1;return r2}r3=r1+1;r4=Math.log(r3);if(!(r1>=-.5&r1<=1)){r2=r4;return r2}r2=r4-(r3-1-r1)/r3;return r2}
// EMSCRIPTEN_END_FUNCS
Module["_initmath"] = _initmath;
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
