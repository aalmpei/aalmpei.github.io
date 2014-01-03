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
var _dlobject_methods;
var _dl_methods;
var __str9;
var __str8;
var __str7;
var __str6;
var __str5;
var __str4;
var __str3;
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
var _Dltype;
var _Dlerror;
_dlobject_methods=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_dl_methods=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([122,58,111,112,101,110,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([111,112,101,110,0,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([82,84,76,68,95,76,79,67,65,76,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([82,84,76,68,95,71,76,79,66,65,76,0], "i8", ALLOC_NORMAL);
__str5=allocate([82,84,76,68,95,78,79,87,0,0,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([82,84,76,68,95,76,65,90,89,0,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([101,114,114,111,114,0,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([97,114,103,117,109,101,110,116,115,32,109,117,115,116,32,98,101,32,105,110,116,44,32,115,116,114,105,110,103,32,111,114,32,78,111,110,101,0,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([100,108,46,101,114,114,111,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([116,111,111,32,109,97,110,121,32,97,114,103,117,109,101,110,116,115,32,40,109,97,120,32,49,48,41,0], "i8", ALLOC_NORMAL);
__str18=allocate([102,117,110,99,116,105,111,110,32,110,97,109,101,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([97,116,32,108,101,97,115,116,32,97,32,110,97,109,101,32,105,115,32,110,101,101,100,101,100,0,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([101,120,112,101,99,116,101,100,32,115,116,114,105,110,103,44,32,102,111,117,110,100,32,37,46,50,48,48,115,0,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([99,108,111,115,101,0,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([115,121,109,0], "i8", ALLOC_NORMAL);
__str13=allocate([99,97,108,108,0,0,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([100,108,46,100,108,0,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([100,108,111,112,101,110,40,41,32,101,114,114,111,114,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([122,105,58,111,112,101,110,0], "i8", ALLOC_NORMAL);
__str1=allocate([100,108,0,0], "i8", ALLOC_NORMAL);
__str=allocate([116,104,101,32,100,108,32,109,111,100,117,108,101,32,104,97,115,32,98,101,101,110,32,114,101,109,111,118,101,100,32,105,110,32,80,121,116,104,111,110,32,51,46,48,59,32,117,115,101,32,116,104,101,32,99,116,121,112,101,115,32,109,111,100,117,108,101,32,105,110,115,116,101,97,100,0], "i8", ALLOC_NORMAL);
_Dltype=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_Dlerror=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_dlobject_methods)>>2)]=((__str13)|0);
HEAP32[(((_dlobject_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 8));
HEAP32[(((_dlobject_methods)+(16))>>2)]=((__str14)|0);
HEAP32[(((_dlobject_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 10));
HEAP32[(((_dlobject_methods)+(32))>>2)]=((__str15)|0);
HEAP32[(((_dlobject_methods)+(36))>>2)]=((FUNCTION_TABLE_OFFSET + 12));
HEAP32[((_dl_methods)>>2)]=((__str8)|0);
HEAP32[(((_dl_methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_Dltype)+(12))>>2)]=((__str12)|0);
HEAP32[(((_Dltype)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 6));
HEAP32[(((_Dltype)+(32))>>2)]=((FUNCTION_TABLE_OFFSET + 4));
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_dl_open,0,_dl_getattr,0,_dl_dealloc,0,_dl_call,0,_dl_sym,0,_dl_close,0]);
// EMSCRIPTEN_START_FUNCS
function _initdl(){var r1,r2;do{if((HEAP32[_Py_Py3kWarningFlag>>2]|0)!=0){if((_PyErr_WarnEx(HEAP32[_PyExc_DeprecationWarning>>2],__str|0,2)|0)>=0){break}return}}while(0);HEAP32[_Dltype+4>>2]=_PyType_Type;r1=_Py_InitModule4_64(__str1|0,_dl_methods|0,0,0,1013);if((r1|0)==0){return}r2=_PyModule_GetDict(r1);r1=_PyErr_NewException(__str2|0,0,0);HEAP32[_Dlerror>>2]=r1;_PyDict_SetItemString(r2,__str3|0,r1);r1=_PyInt_FromLong(1);_PyDict_SetItemString(r2,__str4|0,r1);_insint(r2,__str5|0,2);_insint(r2,__str6|0,4);_insint(r2,__str7|0,8);return}function _insint(r1,r2,r3){var r4;r4=_PyInt_FromLong(r3);if((r4|0)==0){_PyErr_Clear();return}if((_PyDict_SetItemString(r1,r2,r4)|0)!=0){_PyErr_Clear()}r2=r4|0;r1=HEAP32[r2>>2]-1|0;HEAP32[r2>>2]=r1;if((r1|0)!=0){return}FUNCTION_TABLE[HEAP32[HEAP32[r4+4>>2]+24>>2]](r4);return}function _dl_open(r1,r2){var r3,r4,r5;r1=STACKTOP;STACKTOP=STACKTOP+8|0;r3=r1;r4=r1+4;do{if((_PyArg_ParseTuple(r2,__str9|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r3,tempInt))|0)==0){_PyErr_Clear();if((_PyArg_ParseTuple(r2,__str10|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r3,HEAP32[tempInt+4>>2]=r4,tempInt))|0)==0){r5=0}else{break}STACKTOP=r1;return r5}else{HEAP32[r4>>2]=1}}while(0);r2=_dlopen(HEAP32[r3>>2],HEAP32[r4>>2]);if((r2|0)==0){r4=_dlerror();_PyErr_SetString(HEAP32[_Dlerror>>2],(r4|0)==0?__str11|0:r4);r5=0;STACKTOP=r1;return r5}else{r5=_newdlobject(r2);STACKTOP=r1;return r5}}function _newdlobject(r1){var r2,r3;r2=__PyObject_New(_Dltype);if((r2|0)==0){r3=0;return r3}HEAP32[r2+8>>2]=r1;r3=r2;return r3}function _dl_dealloc(r1){var r2;r2=HEAP32[r1+8>>2];if((r2|0)!=0){_dlclose(r2)}_PyObject_Free(r1);return}function _dl_getattr(r1,r2){return _Py_FindMethod(_dlobject_methods|0,r1,r2)}function _dl_call(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13;r3=0;r4=STACKTOP;STACKTOP=STACKTOP+40|0;r5=r4,r6=r5>>2;r7=_PyTuple_Size(r2);if((r7|0)<1){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str17|0);r8=0;STACKTOP=r4;return r8}r9=_PyTuple_GetItem(r2,0);if((HEAP32[HEAP32[r9+4>>2]+84>>2]&134217728|0)==0){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str18|0);r8=0;STACKTOP=r4;return r8}r10=_dlsym(HEAP32[r1+8>>2],_PyString_AsString(r9));r9=r10;if((r10|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],_dlerror());r8=0;STACKTOP=r4;return r8}if((r7-1|0)>10){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str19|0);r8=0;STACKTOP=r4;return r8}do{if((r7|0)>1){r10=1;L60:while(1){r1=_PyTuple_GetItem(r2,r10);r11=HEAP32[HEAP32[r1+4>>2]+84>>2];do{if((r11&8388608|0)==0){if((r11&134217728|0)!=0){HEAP32[(r10-1<<2>>2)+r6]=_PyString_AsString(r1);break}if((r1|0)!=(__Py_NoneStruct|0)){break L60}HEAP32[(r10-1<<2>>2)+r6]=0}else{HEAP32[(r10-1<<2>>2)+r6]=_PyInt_AsLong(r1)}}while(0);r12=r10+1|0;if((r12|0)<(r7|0)){r10=r12}else{r3=47;break}}if(r3==47){if((r12|0)<11){r13=r12;r3=56;break}else{break}}_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str20|0);r8=0;STACKTOP=r4;return r8}else{r13=1;r3=56}}while(0);if(r3==56){_memset((r13-1<<2)+r5|0,0,44-(r13<<2)|0)}r8=_PyInt_FromLong(FUNCTION_TABLE[r9](HEAP32[r6],HEAP32[r6+1],HEAP32[r6+2],HEAP32[r6+3],HEAP32[r6+4],HEAP32[r6+5],HEAP32[r6+6],HEAP32[r6+7],HEAP32[r6+8],HEAP32[r6+9]));STACKTOP=r4;return r8}function _dl_sym(r1,r2){var r3,r4,r5;r3=STACKTOP;r4=HEAP32[r2+4>>2];if((HEAP32[r4+84>>2]&134217728|0)==0){_PyErr_Format(HEAP32[_PyExc_TypeError>>2],__str16|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=HEAP32[r4+12>>2],tempInt));r5=0;STACKTOP=r3;return r5}r4=_dlsym(HEAP32[r1+8>>2],r2+20|0);if((r4|0)==0){HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;r5=__Py_NoneStruct;STACKTOP=r3;return r5}else{r5=_PyInt_FromLong(r4);STACKTOP=r3;return r5}}function _dl_close(r1){var r2;r2=r1+8|0;r1=HEAP32[r2>>2];if((r1|0)!=0){_dlclose(r1);HEAP32[r2>>2]=0}HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;return __Py_NoneStruct}
// EMSCRIPTEN_END_FUNCS
Module["_initdl"] = _initdl;
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
