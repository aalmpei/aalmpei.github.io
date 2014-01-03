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
var _struct_group_type_fields;
var _struct_group_type_desc;
var _struct_group__doc__;
var _initialized_b;
var _grp_methods;
var _grp__doc__;
var __str9;
var __str8;
var __str7;
var __str6;
var __str5;
var __str4;
var __str3;
var __str2;
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
var _StructGrpType;
_struct_group_type_fields=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_struct_group_type_desc=allocate([0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0], "i8", ALLOC_NORMAL);
_struct_group__doc__=allocate([103,114,112,46,115,116,114,117,99,116,95,103,114,111,117,112,58,32,82,101,115,117,108,116,115,32,102,114,111,109,32,103,101,116,103,114,42,40,41,32,114,111,117,116,105,110,101,115,46,10,10,84,104,105,115,32,111,98,106,101,99,116,32,109,97,121,32,98,101,32,97,99,99,101,115,115,101,100,32,101,105,116,104,101,114,32,97,115,32,97,32,116,117,112,108,101,32,111,102,10,32,32,40,103,114,95,110,97,109,101,44,103,114,95,112,97,115,115,119,100,44,103,114,95,103,105,100,44,103,114,95,109,101,109,41,10,111,114,32,118,105,97,32,116,104,101,32,111,98,106,101,99,116,32,97,116,116,114,105,98,117,116,101,115,32,97,115,32,110,97,109,101,100,32,105,110,32,116,104,101,32,97,98,111,118,101,32,116,117,112,108,101,46,10,0,0], "i8", ALLOC_NORMAL);
_initialized_b=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_grp_methods=allocate([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_grp__doc__=allocate([65,99,99,101,115,115,32,116,111,32,116,104,101,32,85,110,105,120,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,46,10,10,71,114,111,117,112,32,101,110,116,114,105,101,115,32,97,114,101,32,114,101,112,111,114,116,101,100,32,97,115,32,52,45,116,117,112,108,101,115,32,99,111,110,116,97,105,110,105,110,103,32,116,104,101,32,102,111,108,108,111,119,105,110,103,32,102,105,101,108,100,115,10,102,114,111,109,32,116,104,101,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,44,32,105,110,32,111,114,100,101,114,58,10,10,32,32,110,97,109,101,32,32,32,45,32,110,97,109,101,32,111,102,32,116,104,101,32,103,114,111,117,112,10,32,32,112,97,115,115,119,100,32,45,32,103,114,111,117,112,32,112,97,115,115,119,111,114,100,32,40,101,110,99,114,121,112,116,101,100,41,59,32,111,102,116,101,110,32,101,109,112,116,121,10,32,32,103,105,100,32,32,32,32,45,32,110,117,109,101,114,105,99,32,73,68,32,111,102,32,116,104,101,32,103,114,111,117,112,10,32,32,109,101,109,32,32,32,32,45,32,108,105,115,116,32,111,102,32,109,101,109,98,101,114,115,10,10,84,104,101,32,103,105,100,32,105,115,32,97,110,32,105,110,116,101,103,101,114,44,32,110,97,109,101,32,97,110,100,32,112,97,115,115,119,111,114,100,32,97,114,101,32,115,116,114,105,110,103,115,46,32,32,40,78,111,116,101,32,116,104,97,116,32,109,111,115,116,10,117,115,101,114,115,32,97,114,101,32,110,111,116,32,101,120,112,108,105,99,105,116,108,121,32,108,105,115,116,101,100,32,97,115,32,109,101,109,98,101,114,115,32,111,102,32,116,104,101,32,103,114,111,117,112,115,32,116,104,101,121,32,97,114,101,32,105,110,10,97,99,99,111,114,100,105,110,103,32,116,111,32,116,104,101,32,112,97,115,115,119,111,114,100,32,100,97,116,97,98,97,115,101,46,32,32,67,104,101,99,107,32,98,111,116,104,32,100,97,116,97,98,97,115,101,115,32,116,111,32,103,101,116,10,99,111,109,112,108,101,116,101,32,109,101,109,98,101,114,115,104,105,112,32,105,110,102,111,114,109,97,116,105,111,110,46,41,0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([103,114,95,109,101,109,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([103,114,111,117,112,32,105,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([103,114,95,103,105,100,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([112,97,115,115,119,111,114,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([103,114,95,112,97,115,115,119,100,0,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([103,114,111,117,112,32,110,97,109,101,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([103,114,95,110,97,109,101,0], "i8", ALLOC_NORMAL);
__str2=allocate([103,114,112,46,115,116,114,117,99,116,95,103,114,111,117,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([103,101,116,103,114,103,105,100,40,41,58,32,103,105,100,32,110,111,116,32,102,111,117,110,100,58,32,37,100,0,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([103,101,116,103,114,110,97,109,40,41,58,32,110,97,109,101,32,110,111,116,32,102,111,117,110,100,58,32,37,115,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([103,101,116,103,114,97,108,108,40,41,32,45,62,32,108,105,115,116,32,111,102,32,116,117,112,108,101,115,10,82,101,116,117,114,110,32,97,32,108,105,115,116,32,111,102,32,97,108,108,32,97,118,97,105,108,97,98,108,101,32,103,114,111,117,112,32,101,110,116,114,105,101,115,44,32,105,110,32,97,114,98,105,116,114,97,114,121,32,111,114,100,101,114,46,10,65,110,32,101,110,116,114,121,32,119,104,111,115,101,32,110,97,109,101,32,115,116,97,114,116,115,32,119,105,116,104,32,39,43,39,32,111,114,32,39,45,39,32,114,101,112,114,101,115,101,110,116,115,32,97,110,32,105,110,115,116,114,117,99,116,105,111,110,10,116,111,32,117,115,101,32,89,80,47,78,73,83,32,97,110,100,32,109,97,121,32,110,111,116,32,98,101,32,97,99,99,101,115,115,105,98,108,101,32,118,105,97,32,103,101,116,103,114,110,97,109,32,111,114,32,103,101,116,103,114,103,105,100,46,0,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([103,101,116,103,114,97,108,108,0,0,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([103,101,116,103,114,110,97,109,40,110,97,109,101,41,32,45,62,32,116,117,112,108,101,10,82,101,116,117,114,110,32,116,104,101,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,32,101,110,116,114,121,32,102,111,114,32,116,104,101,32,103,105,118,101,110,32,103,114,111,117,112,32,110,97,109,101,46,32,32,73,102,10,110,97,109,101,32,105,115,32,110,111,116,32,118,97,108,105,100,44,32,114,97,105,115,101,32,75,101,121,69,114,114,111,114,46,0,0,0,0], "i8", ALLOC_NORMAL);
__str13=allocate([103,101,116,103,114,110,97,109,0,0,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([103,101,116,103,114,103,105,100,40,105,100,41,32,45,62,32,116,117,112,108,101,10,82,101,116,117,114,110,32,116,104,101,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,32,101,110,116,114,121,32,102,111,114,32,116,104,101,32,103,105,118,101,110,32,110,117,109,101,114,105,99,32,103,114,111,117,112,32,73,68,46,32,32,73,102,10,105,100,32,105,115,32,110,111,116,32,118,97,108,105,100,44,32,114,97,105,115,101,32,75,101,121,69,114,114,111,114,46,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([103,101,116,103,114,103,105,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([103,114,111,117,112,32,109,101,109,101,98,101,114,115,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([115,116,114,117,99,116,95,103,114,111,117,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str=allocate([103,114,112,0], "i8", ALLOC_NORMAL);
_StructGrpType=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_struct_group_type_fields)>>2)]=((__str3)|0);
HEAP32[(((_struct_group_type_fields)+(4))>>2)]=((__str4)|0);
HEAP32[(((_struct_group_type_fields)+(8))>>2)]=((__str5)|0);
HEAP32[(((_struct_group_type_fields)+(12))>>2)]=((__str6)|0);
HEAP32[(((_struct_group_type_fields)+(16))>>2)]=((__str7)|0);
HEAP32[(((_struct_group_type_fields)+(20))>>2)]=((__str8)|0);
HEAP32[(((_struct_group_type_fields)+(24))>>2)]=((__str9)|0);
HEAP32[(((_struct_group_type_fields)+(28))>>2)]=((__str10)|0);
HEAP32[((_struct_group_type_desc)>>2)]=((__str2)|0);
HEAP32[(((_struct_group_type_desc)+(4))>>2)]=((_struct_group__doc__)|0);
HEAP32[(((_struct_group_type_desc)+(8))>>2)]=((_struct_group_type_fields)|0);
HEAP32[((_grp_methods)>>2)]=((__str11)|0);
HEAP32[(((_grp_methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_grp_methods)+(12))>>2)]=((__str12)|0);
HEAP32[(((_grp_methods)+(16))>>2)]=((__str13)|0);
HEAP32[(((_grp_methods)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 6);
HEAP32[(((_grp_methods)+(28))>>2)]=((__str14)|0);
HEAP32[(((_grp_methods)+(32))>>2)]=((__str15)|0);
HEAP32[(((_grp_methods)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((_grp_methods)+(44))>>2)]=((__str16)|0);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_grp_getgrgid,0,_grp_getgrall,0,_grp_getgrnam,0]);
// EMSCRIPTEN_START_FUNCS
function _initgrp(){var r1,r2;r1=_Py_InitModule4_64(__str|0,_grp_methods|0,_grp__doc__|0,0,1013);if((r1|0)==0){return}r2=_PyModule_GetDict(r1);if(!HEAP8[_initialized_b]){_PyStructSequence_InitType(_StructGrpType,_struct_group_type_desc)}_PyDict_SetItemString(r2,__str1|0,_StructGrpType);HEAP8[_initialized_b]=1;return}function _grp_getgrgid(r1,r2){var r3,r4,r5,r6;r1=STACKTOP;r3=_PyNumber_Int(r2);if((r3|0)==0){r4=0;STACKTOP=r1;return r4}r2=HEAP32[r3+8>>2];r5=r3|0;r6=HEAP32[r5>>2]-1|0;HEAP32[r5>>2]=r6;if((r6|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r3+4>>2]+24>>2]](r3)}r3=_getgrgid(r2);if((r3|0)==0){_PyErr_Format(HEAP32[_PyExc_KeyError>>2],__str18|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r2,tempInt));r4=0;STACKTOP=r1;return r4}else{r4=_mkgrent(r3);STACKTOP=r1;return r4}}function _grp_getgrnam(r1,r2){var r3,r4,r5,r6;r1=STACKTOP;r3=_PyObject_Str(r2);if((r3|0)==0){r4=0;STACKTOP=r1;return r4}r2=r3+20|0;r5=_getgrnam(r2);if((r5|0)==0){_PyErr_Format(HEAP32[_PyExc_KeyError>>2],__str17|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r2,tempInt));r2=r3|0;r6=HEAP32[r2>>2]-1|0;HEAP32[r2>>2]=r6;if((r6|0)!=0){r4=0;STACKTOP=r1;return r4}FUNCTION_TABLE[HEAP32[HEAP32[r3+4>>2]+24>>2]](r3);r4=0;STACKTOP=r1;return r4}else{r6=r3|0;r2=HEAP32[r6>>2]-1|0;HEAP32[r6>>2]=r2;if((r2|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r3+4>>2]+24>>2]](r3)}r4=_mkgrent(r5);STACKTOP=r1;return r4}}function _grp_getgrall(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10;r2=0;r1=_PyList_New(0);if((r1|0)==0){r3=0;return r3}_setgrent();r4=_getgrent();L39:do{if((r4|0)!=0){r5=r4;while(1){r6=_mkgrent(r5);if((r6|0)==0){break}r7=(_PyList_Append(r1,r6)|0)==0;r8=r6|0;r9=HEAP32[r8>>2]-1|0;HEAP32[r8>>2]=r9;r10=(r9|0)==0;if(!r7){r2=34;break}if(r10){FUNCTION_TABLE[HEAP32[HEAP32[r6+4>>2]+24>>2]](r6)}r7=_getgrent();if((r7|0)==0){break L39}else{r5=r7}}do{if(r2==34){if(!r10){break}FUNCTION_TABLE[HEAP32[HEAP32[r6+4>>2]+24>>2]](r6)}}while(0);r5=r1|0;r7=HEAP32[r5>>2]-1|0;HEAP32[r5>>2]=r7;if((r7|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r1+4>>2]+24>>2]](r1)}_endgrent();r3=0;return r3}}while(0);_endgrent();r3=r1;return r3}function _mkgrent(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;r2=0;r3=_PyStructSequence_New(_StructGrpType),r4=r3>>2;if((r3|0)==0){r5=0;return r5}r6=_PyList_New(0);if((r6|0)==0){r7=r3|0;r8=HEAP32[r7>>2]-1|0;HEAP32[r7>>2]=r8;if((r8|0)!=0){r5=0;return r5}FUNCTION_TABLE[HEAP32[HEAP32[r4+1]+24>>2]](r3);r5=0;return r5}r8=HEAP32[r1+12>>2];r7=HEAP32[r8>>2];L68:do{if((r7|0)!=0){r9=r8;r10=r7;while(1){r11=_PyString_FromString(r10);if((r11|0)==0){break}r12=(_PyList_Append(r6,r11)|0)==0;r13=r11|0;r14=HEAP32[r13>>2]-1|0;HEAP32[r13>>2]=r14;r15=(r14|0)==0;if(!r12){r2=54;break}if(r15){FUNCTION_TABLE[HEAP32[HEAP32[r11+4>>2]+24>>2]](r11)}r12=r9+4|0;r14=HEAP32[r12>>2];if((r14|0)==0){break L68}else{r9=r12;r10=r14}}do{if(r2==54){if(!r15){break}FUNCTION_TABLE[HEAP32[HEAP32[r11+4>>2]+24>>2]](r11)}}while(0);r10=r6|0;r9=HEAP32[r10>>2]-1|0;HEAP32[r10>>2]=r9;if((r9|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r6+4>>2]+24>>2]](r6)}r9=r3|0;r10=HEAP32[r9>>2]-1|0;HEAP32[r9>>2]=r10;if((r10|0)!=0){r5=0;return r5}FUNCTION_TABLE[HEAP32[HEAP32[r4+1]+24>>2]](r3);r5=0;return r5}}while(0);r11=(r3+12|0)>>2;HEAP32[r11]=_PyString_FromString(HEAP32[r1>>2]);r15=HEAP32[r1+4>>2];if((r15|0)==0){HEAP32[r11+1]=__Py_NoneStruct;HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0}else{HEAP32[r11+1]=_PyString_FromString(r15)}HEAP32[r11+2]=_PyInt_FromLong(HEAP32[r1+8>>2]);HEAP32[r11+3]=r6;if((_PyErr_Occurred()|0)==0){r5=r3;return r5}r6=r3|0;r11=HEAP32[r6>>2]-1|0;HEAP32[r6>>2]=r11;if((r11|0)!=0){r5=0;return r5}FUNCTION_TABLE[HEAP32[HEAP32[r4+1]+24>>2]](r3);r5=0;return r5}
// EMSCRIPTEN_END_FUNCS
Module["_initgrp"] = _initgrp;
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
