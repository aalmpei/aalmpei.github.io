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
var _reduce_doc;
var _partial_type;
var _partial_methods;
var _partial_memberlist;
var _partial_getsetlist;
var _partial_doc;
var _module_methods;
var _module_doc;
var _init_functools_typelist;
var __str9;
var __str8;
var __str7;
var __str6;
var __str5;
var __str4;
var __str3;
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
var ___func___partial_call;
var ___func___init_functools;
_reduce_doc=allocate([114,101,100,117,99,101,40,102,117,110,99,116,105,111,110,44,32,115,101,113,117,101,110,99,101,91,44,32,105,110,105,116,105,97,108,93,41,32,45,62,32,118,97,108,117,101,10,10,65,112,112,108,121,32,97,32,102,117,110,99,116,105,111,110,32,111,102,32,116,119,111,32,97,114,103,117,109,101,110,116,115,32,99,117,109,117,108,97,116,105,118,101,108,121,32,116,111,32,116,104,101,32,105,116,101,109,115,32,111,102,32,97,32,115,101,113,117,101,110,99,101,44,10,102,114,111,109,32,108,101,102,116,32,116,111,32,114,105,103,104,116,44,32,115,111,32,97,115,32,116,111,32,114,101,100,117,99,101,32,116,104,101,32,115,101,113,117,101,110,99,101,32,116,111,32,97,32,115,105,110,103,108,101,32,118,97,108,117,101,46,10,70,111,114,32,101,120,97,109,112,108,101,44,32,114,101,100,117,99,101,40,108,97,109,98,100,97,32,120,44,32,121,58,32,120,43,121,44,32,91,49,44,32,50,44,32,51,44,32,52,44,32,53,93,41,32,99,97,108,99,117,108,97,116,101,115,10,40,40,40,40,49,43,50,41,43,51,41,43,52,41,43,53,41,46,32,32,73,102,32,105,110,105,116,105,97,108,32,105,115,32,112,114,101,115,101,110,116,44,32,105,116,32,105,115,32,112,108,97,99,101,100,32,98,101,102,111,114,101,32,116,104,101,32,105,116,101,109,115,10,111,102,32,116,104,101,32,115,101,113,117,101,110,99,101,32,105,110,32,116,104,101,32,99,97,108,99,117,108,97,116,105,111,110,44,32,97,110,100,32,115,101,114,118,101,115,32,97,115,32,97,32,100,101,102,97,117,108,116,32,119,104,101,110,32,116,104,101,10,115,101,113,117,101,110,99,101,32,105,115,32,101,109,112,116,121,46,0,0,0], "i8", ALLOC_NORMAL);
_partial_type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,69,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_partial_methods=allocate([0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_partial_memberlist=allocate([0,0,0,0,6,0,0,0,8,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,12,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,16,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_partial_getsetlist=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_partial_doc=allocate([112,97,114,116,105,97,108,40,102,117,110,99,44,32,42,97,114,103,115,44,32,42,42,107,101,121,119,111,114,100,115,41,32,45,32,110,101,119,32,102,117,110,99,116,105,111,110,32,119,105,116,104,32,112,97,114,116,105,97,108,32,97,112,112,108,105,99,97,116,105,111,110,10,32,32,32,32,111,102,32,116,104,101,32,103,105,118,101,110,32,97,114,103,117,109,101,110,116,115,32,97,110,100,32,107,101,121,119,111,114,100,115,46,10,0,0], "i8", ALLOC_NORMAL);
_module_methods=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_module_doc=allocate([84,111,111,108,115,32,116,104,97,116,32,111,112,101,114,97,116,101,32,111,110,32,102,117,110,99,116,105,111,110,115,46,0,0,0,0], "i8", ALLOC_NORMAL);
_init_functools_typelist=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([116,121,112,101,32,39,112,97,114,116,105,97,108,39,32,116,97,107,101,115,32,97,116,32,108,101,97,115,116,32,111,110,101,32,97,114,103,117,109,101,110,116,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([102,117,110,99,116,111,111,108,115,46,112,97,114,116,105,97,108,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([114,101,100,117,99,101,40,41,32,111,102,32,101,109,112,116,121,32,115,101,113,117,101,110,99,101,32,119,105,116,104,32,110,111,32,105,110,105,116,105,97,108,32,118,97,108,117,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([114,101,100,117,99,101,40,41,32,97,114,103,32,50,32,109,117,115,116,32,115,117,112,112,111,114,116,32,105,116,101,114,97,116,105,111,110,0,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([114,101,100,117,99,101,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([110,97,109,101,32,33,61,32,78,85,76,76,0,0,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([46,46,47,77,111,100,117,108,101,115,47,95,102,117,110,99,116,111,111,108,115,109,111,100,117,108,101,46,99,0,0,0], "i8", ALLOC_NORMAL);
__str24=allocate([112,116,111,45,62,107,119,32,61,61,32,80,121,95,78,111,110,101,32,124,124,32,80,121,68,105,99,116,95,67,104,101,99,107,40,112,116,111,45,62,107,119,41,0], "i8", ALLOC_NORMAL);
__str23=allocate([80,121,84,117,112,108,101,95,67,104,101,99,107,40,112,116,111,45,62,97,114,103,115,41,0,0,0,0], "i8", ALLOC_NORMAL);
__str22=allocate([80,121,67,97,108,108,97,98,108,101,95,67,104,101,99,107,40,112,116,111,45,62,102,110,41,0,0,0], "i8", ALLOC_NORMAL);
__str21=allocate([95,95,115,101,116,115,116,97,116,101,95,95,0,0,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([95,95,114,101,100,117,99,101,95,95,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([95,102,117,110,99,116,111,111,108,115,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([100,105,99,116,105,111,110,97,114,121,32,111,102,32,107,101,121,119,111,114,100,32,97,114,103,117,109,101,110,116,115,32,116,111,32,102,117,116,117,114,101,32,112,97,114,116,105,97,108,32,99,97,108,108,115,0], "i8", ALLOC_NORMAL);
__str18=allocate([107,101,121,119,111,114,100,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([116,117,112,108,101,32,111,102,32,97,114,103,117,109,101,110,116,115,32,116,111,32,102,117,116,117,114,101,32,112,97,114,116,105,97,108,32,99,97,108,108,115,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([97,114,103,115,0,0,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([102,117,110,99,116,105,111,110,32,111,98,106,101,99,116,32,116,111,32,117,115,101,32,105,110,32,102,117,116,117,114,101,32,112,97,114,116,105,97,108,32,99,97,108,108,115,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([102,117,110,99,0,0,0,0], "i8", ALLOC_NORMAL);
__str13=allocate([115,101,116,116,105,110,103,32,112,97,114,116,105,97,108,32,111,98,106,101,99,116,39,115,32,100,105,99,116,105,111,110,97,114,121,32,116,111,32,97,32,110,111,110,45,100,105,99,116,0,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([97,32,112,97,114,116,105,97,108,32,111,98,106,101,99,116,39,115,32,100,105,99,116,105,111,110,97,114,121,32,109,97,121,32,110,111,116,32,98,101,32,100,101,108,101,116,101,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([95,95,100,105,99,116,95,95,0,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([116,104,101,32,102,105,114,115,116,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,99,97,108,108,97,98,108,101,0], "i8", ALLOC_NORMAL);
__str1=allocate([40,79,79,79,79,41,58,95,95,115,101,116,115,116,97,116,101,95,95,0], "i8", ALLOC_NORMAL);
__str=allocate([79,40,79,41,40,79,79,79,79,41,0,0], "i8", ALLOC_NORMAL);
___func___partial_call=allocate([112,97,114,116,105,97,108,95,99,97,108,108,0,0,0,0], "i8", ALLOC_NORMAL);
___func___init_functools=allocate([105,110,105,116,95,102,117,110,99,116,111,111,108,115,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[(((_partial_type)+(12))>>2)]=((__str8)|0);
HEAP32[(((_partial_type)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 16));
HEAP32[(((_partial_type)+(64))>>2)]=((FUNCTION_TABLE_OFFSET + 10));
HEAP32[(((_partial_type)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 6);
HEAP32[(((_partial_type)+(76))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_partial_type)+(88))>>2)]=((_partial_doc)|0);
HEAP32[(((_partial_type)+(92))>>2)]=((FUNCTION_TABLE_OFFSET + 4));
HEAP32[(((_partial_type)+(116))>>2)]=((_partial_methods)|0);
HEAP32[(((_partial_type)+(120))>>2)]=((_partial_memberlist)|0);
HEAP32[(((_partial_type)+(124))>>2)]=((_partial_getsetlist)|0);
HEAP32[(((_partial_type)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((_partial_type)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[((_partial_methods)>>2)]=((__str20)|0);
HEAP32[(((_partial_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 22));
HEAP32[(((_partial_methods)+(16))>>2)]=((__str21)|0);
HEAP32[(((_partial_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 8));
HEAP32[((_partial_memberlist)>>2)]=((__str14)|0);
HEAP32[(((_partial_memberlist)+(16))>>2)]=((__str15)|0);
HEAP32[(((_partial_memberlist)+(20))>>2)]=((__str16)|0);
HEAP32[(((_partial_memberlist)+(36))>>2)]=((__str17)|0);
HEAP32[(((_partial_memberlist)+(40))>>2)]=((__str18)|0);
HEAP32[(((_partial_memberlist)+(56))>>2)]=((__str19)|0);
HEAP32[((_partial_getsetlist)>>2)]=((__str11)|0);
HEAP32[(((_partial_getsetlist)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 2));
HEAP32[(((_partial_getsetlist)+(8))>>2)]=((FUNCTION_TABLE_OFFSET + 24));
HEAP32[((_module_methods)>>2)]=((__str5)|0);
HEAP32[(((_module_methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 18);
HEAP32[(((_module_methods)+(12))>>2)]=((_reduce_doc)|0);
HEAP32[((_init_functools_typelist)>>2)]=_partial_type;
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_partial_get_dict,0,_partial_traverse,0,_PyObject_GenericGetAttr,0,_partial_setstate,0,_partial_call
,0,_partial_new,0,_PyObject_GenericSetAttr,0,_partial_dealloc,0,_functools_reduce,0,_PyObject_GC_Del,0,_partial_reduce,0,_partial_set_dict,0]);
// EMSCRIPTEN_START_FUNCS
function _partial_reduce(r1,r2){var r3,r4,r5,r6,r7;r2=r1>>2;r1=STACKTOP;r3=HEAP32[r2+2];r4=HEAP32[r2+3];r5=HEAP32[r2+4];r6=HEAP32[r2+5];r7=(r6|0)==0?__Py_NoneStruct:r6;r6=_Py_BuildValue(__str|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+24|0,HEAP32[tempInt>>2]=HEAP32[r2+1],HEAP32[tempInt+4>>2]=r3,HEAP32[tempInt+8>>2]=r3,HEAP32[tempInt+12>>2]=r4,HEAP32[tempInt+16>>2]=r5,HEAP32[tempInt+20>>2]=r7,tempInt));STACKTOP=r1;return r6}function _partial_setstate(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13;r3=STACKTOP;STACKTOP=STACKTOP+16|0;r4=r3;r5=r3+4;r6=r3+8;r7=r3+12;if((_PyArg_ParseTuple(r2,__str1|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r4,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r6,HEAP32[tempInt+12>>2]=r7,tempInt))|0)==0){r8=0;STACKTOP=r3;return r8}r2=(r1+8|0)>>2;r9=HEAP32[r2];do{if((r9|0)!=0){r10=r9|0;r11=HEAP32[r10>>2]-1|0;HEAP32[r10>>2]=r11;if((r11|0)!=0){break}r11=HEAP32[r2];FUNCTION_TABLE[HEAP32[HEAP32[r11+4>>2]+24>>2]](r11)}}while(0);r9=(r1+12|0)>>2;r11=HEAP32[r9];do{if((r11|0)!=0){r10=r11|0;r12=HEAP32[r10>>2]-1|0;HEAP32[r10>>2]=r12;if((r12|0)!=0){break}r12=HEAP32[r9];FUNCTION_TABLE[HEAP32[HEAP32[r12+4>>2]+24>>2]](r12)}}while(0);r11=(r1+16|0)>>2;r12=HEAP32[r11];do{if((r12|0)!=0){r10=r12|0;r13=HEAP32[r10>>2]-1|0;HEAP32[r10>>2]=r13;if((r13|0)!=0){break}r13=HEAP32[r11];FUNCTION_TABLE[HEAP32[HEAP32[r13+4>>2]+24>>2]](r13)}}while(0);r12=(r1+20|0)>>2;r1=HEAP32[r12];do{if((r1|0)!=0){r13=r1|0;r10=HEAP32[r13>>2]-1|0;HEAP32[r13>>2]=r10;if((r10|0)!=0){break}r10=HEAP32[r12];FUNCTION_TABLE[HEAP32[HEAP32[r10+4>>2]+24>>2]](r10)}}while(0);HEAP32[r2]=HEAP32[r4>>2];HEAP32[r9]=HEAP32[r5>>2];HEAP32[r11]=HEAP32[r6>>2];r11=HEAP32[r7>>2];if((r11|0)==(__Py_NoneStruct|0)){HEAP32[r12]=0}else{HEAP32[r12]=r11;r11=HEAP32[r7>>2]|0;HEAP32[r11>>2]=HEAP32[r11>>2]+1|0}r11=HEAP32[r4>>2]|0;HEAP32[r11>>2]=HEAP32[r11>>2]+1|0;r11=HEAP32[r5>>2]|0;HEAP32[r11>>2]=HEAP32[r11>>2]+1|0;r11=HEAP32[r6>>2]|0;HEAP32[r11>>2]=HEAP32[r11>>2]+1|0;HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;r8=__Py_NoneStruct;STACKTOP=r3;return r8}function _functools_reduce(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12;r1=0;r3=STACKTOP;STACKTOP=STACKTOP+12|0;r4=r3;r5=r3+4;r6=r3+8,r7=r6>>2;HEAP32[r7]=0;if((_PyArg_UnpackTuple(r2,__str5|0,2,3,(tempInt=STACKTOP,STACKTOP=STACKTOP+12|0,HEAP32[tempInt>>2]=r5,HEAP32[tempInt+4>>2]=r4,HEAP32[tempInt+8>>2]=r6,tempInt))|0)==0){r8=0;STACKTOP=r3;return r8}r6=HEAP32[r7];if((r6|0)!=0){r2=r6|0;HEAP32[r2>>2]=HEAP32[r2>>2]+1|0}r2=_PyObject_GetIter(HEAP32[r4>>2]);if((r2|0)==0){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str6|0);r4=HEAP32[r7];if((r4|0)==0){r8=0;STACKTOP=r3;return r8}r6=r4|0;r4=HEAP32[r6>>2]-1|0;HEAP32[r6>>2]=r4;if((r4|0)!=0){r8=0;STACKTOP=r3;return r8}r4=HEAP32[r7];FUNCTION_TABLE[HEAP32[HEAP32[r4+4>>2]+24>>2]](r4);r8=0;STACKTOP=r3;return r8}r4=_PyTuple_New(2);L43:do{if((r4|0)!=0){r6=r4;while(1){r9=r6|0;r10=HEAP32[r9>>2];if((r10|0)>1){r11=r10-1|0;HEAP32[r9>>2]=r11;if((r11|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r6+4>>2]+24>>2]](r6)}r11=_PyTuple_New(2);if((r11|0)==0){break L43}else{r12=r11}}else{r12=r6}r11=_PyIter_Next(r2);if((r11|0)==0){r1=35;break}r9=HEAP32[r7];if((r9|0)==0){HEAP32[r7]=r11;r6=r12;continue}else{_PyTuple_SetItem(r12,0,r9);_PyTuple_SetItem(r12,1,r11);r11=_PyEval_CallObjectWithKeywords(HEAP32[r5>>2],r12,0);HEAP32[r7]=r11;if((r11|0)==0){break}else{r6=r12;continue}}}do{if(r1==35){if((_PyErr_Occurred()|0)!=0){break}r6=r12|0;r11=HEAP32[r6>>2]-1|0;HEAP32[r6>>2]=r11;if((r11|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r12+4>>2]+24>>2]](r12)}if((HEAP32[r7]|0)==0){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str7|0)}r11=r2|0;r6=HEAP32[r11>>2]-1|0;HEAP32[r11>>2]=r6;if((r6|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r2+4>>2]+24>>2]](r2)}r8=HEAP32[r7];STACKTOP=r3;return r8}}while(0);if((r12|0)==0){break}r6=r12|0;r11=HEAP32[r6>>2]-1|0;HEAP32[r6>>2]=r11;if((r11|0)!=0){break}FUNCTION_TABLE[HEAP32[HEAP32[r12+4>>2]+24>>2]](r12)}}while(0);r12=HEAP32[r7];do{if((r12|0)!=0){r1=r12|0;r5=HEAP32[r1>>2]-1|0;HEAP32[r1>>2]=r5;if((r5|0)!=0){break}r5=HEAP32[r7];FUNCTION_TABLE[HEAP32[HEAP32[r5+4>>2]+24>>2]](r5)}}while(0);r7=r2|0;r12=HEAP32[r7>>2]-1|0;HEAP32[r7>>2]=r12;if((r12|0)!=0){r8=0;STACKTOP=r3;return r8}FUNCTION_TABLE[HEAP32[HEAP32[r2+4>>2]+24>>2]](r2);r8=0;STACKTOP=r3;return r8}function _partial_dealloc(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12;r2=r1;_PyObject_GC_UnTrack(r2);if((HEAP32[r1+24>>2]|0)!=0){_PyObject_ClearWeakRefs(r1)}r3=r1+8|0;r4=HEAP32[r3>>2];do{if((r4|0)!=0){r5=r4|0;r6=HEAP32[r5>>2]-1|0;HEAP32[r5>>2]=r6;if((r6|0)!=0){break}r6=HEAP32[r3>>2];FUNCTION_TABLE[HEAP32[HEAP32[r6+4>>2]+24>>2]](r6)}}while(0);r3=r1+12|0;r4=HEAP32[r3>>2];do{if((r4|0)!=0){r6=r4|0;r5=HEAP32[r6>>2]-1|0;HEAP32[r6>>2]=r5;if((r5|0)!=0){break}r5=HEAP32[r3>>2];FUNCTION_TABLE[HEAP32[HEAP32[r5+4>>2]+24>>2]](r5)}}while(0);r3=r1+16|0;r4=HEAP32[r3>>2];do{if((r4|0)!=0){r5=r4|0;r6=HEAP32[r5>>2]-1|0;HEAP32[r5>>2]=r6;if((r6|0)!=0){break}r6=HEAP32[r3>>2];FUNCTION_TABLE[HEAP32[HEAP32[r6+4>>2]+24>>2]](r6)}}while(0);r3=r1+20|0;r4=HEAP32[r3>>2];if((r4|0)==0){r7=r1+4|0,r8=r7>>2;r9=HEAP32[r8];r10=r9+160|0,r11=r10>>2;r12=HEAP32[r11];FUNCTION_TABLE[r12](r2);return}r6=r4|0;r4=HEAP32[r6>>2]-1|0;HEAP32[r6>>2]=r4;if((r4|0)!=0){r7=r1+4|0,r8=r7>>2;r9=HEAP32[r8];r10=r9+160|0,r11=r10>>2;r12=HEAP32[r11];FUNCTION_TABLE[r12](r2);return}r4=HEAP32[r3>>2];FUNCTION_TABLE[HEAP32[HEAP32[r4+4>>2]+24>>2]](r4);r7=r1+4|0,r8=r7>>2;r9=HEAP32[r8];r10=r9+160|0,r11=r10>>2;r12=HEAP32[r11];FUNCTION_TABLE[r12](r2);return}function _partial_traverse(r1,r2,r3){var r4,r5,r6;r4=HEAP32[r1+8>>2];do{if((r4|0)!=0){r5=FUNCTION_TABLE[r2](r4,r3);if((r5|0)==0){break}else{r6=r5}return r6}}while(0);r4=HEAP32[r1+12>>2];do{if((r4|0)!=0){r5=FUNCTION_TABLE[r2](r4,r3);if((r5|0)==0){break}else{r6=r5}return r6}}while(0);r4=HEAP32[r1+16>>2];do{if((r4|0)!=0){r5=FUNCTION_TABLE[r2](r4,r3);if((r5|0)==0){break}else{r6=r5}return r6}}while(0);r4=HEAP32[r1+20>>2];do{if((r4|0)!=0){r1=FUNCTION_TABLE[r2](r4,r3);if((r1|0)==0){break}else{r6=r1}return r6}}while(0);r6=0;return r6}function _partial_new(r1,r2,r3){var r4,r5,r6,r7;if((HEAP32[r2+8>>2]|0)<1){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str9|0);r4=0;return r4}r5=HEAP32[r2+12>>2];if((_PyCallable_Check(r5)|0)==0){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str10|0);r4=0;return r4}r6=FUNCTION_TABLE[HEAP32[r1+152>>2]](r1,0),r1=r6>>2;if((r6|0)==0){r4=0;return r4}HEAP32[r1+2]=r5;r7=r5|0;HEAP32[r7>>2]=HEAP32[r7>>2]+1|0;r7=_PyTuple_GetSlice(r2,1,2147483647);HEAP32[r1+3]=r7;if((r7|0)==0){HEAP32[r1+4]=0;r7=r6|0;r2=HEAP32[r7>>2]-1|0;HEAP32[r7>>2]=r2;if((r2|0)!=0){r4=0;return r4}FUNCTION_TABLE[HEAP32[HEAP32[r1+1]+24>>2]](r6);r4=0;return r4}do{if((r3|0)==0){HEAP32[r1+4]=__Py_NoneStruct;HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0}else{r2=_PyDict_Copy(r3);HEAP32[r1+4]=r2;if((r2|0)!=0){break}r2=r6|0;r7=HEAP32[r2>>2]-1|0;HEAP32[r2>>2]=r7;if((r7|0)!=0){r4=0;return r4}FUNCTION_TABLE[HEAP32[HEAP32[r1+1]+24>>2]](r6);r4=0;return r4}}while(0);HEAP32[r1+6]=0;HEAP32[r1+5]=0;r4=r6;return r4}function _partial_get_dict(r1){var r2,r3;r2=(r1+20|0)>>2;do{if((HEAP32[r2]|0)==0){r1=_PyDict_New();HEAP32[r2]=r1;if((r1|0)==0){r3=0}else{break}return r3}}while(0);r1=HEAP32[r2]|0;HEAP32[r1>>2]=HEAP32[r1>>2]+1|0;r3=HEAP32[r2];return r3}function _partial_set_dict(r1,r2){var r3,r4,r5;if((r2|0)==0){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str12|0);r3=-1;return r3}if((HEAP32[HEAP32[r2+4>>2]+84>>2]&536870912|0)==0){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str13|0);r3=-1;return r3}r4=r1+20|0;r1=HEAP32[r4>>2];r5=r2|0;HEAP32[r5>>2]=HEAP32[r5>>2]+1|0;HEAP32[r4>>2]=r2;if((r1|0)==0){r3=0;return r3}r2=r1|0;r4=HEAP32[r2>>2]-1|0;HEAP32[r2>>2]=r4;if((r4|0)!=0){r3=0;return r3}FUNCTION_TABLE[HEAP32[HEAP32[r1+4>>2]+24>>2]](r1);r3=0;return r3}function _init_functools(){var r1,r2;r1=_Py_InitModule4_64(__str2|0,_module_methods|0,_module_doc|0,0,1013);if((r1|0)==0){return}if((_PyType_Ready(_partial_type)|0)<0){return}r2=_strchr(HEAP32[_partial_type+12>>2],46);if((r2|0)==0){___assert_func(__str3|0,398,___func___init_functools|0,__str4|0)}HEAP32[_partial_type>>2]=HEAP32[_partial_type>>2]+1|0;_PyModule_AddObject(r1,r2+1|0,_partial_type);return}function _partial_call(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10;r4=r1+8|0;if((_PyCallable_Check(HEAP32[r4>>2])|0)==0){___assert_func(__str3|0,171,___func___partial_call|0,__str22|0)}r5=r1+12|0;if((HEAP32[HEAP32[HEAP32[r5>>2]+4>>2]+84>>2]&67108864|0)==0){___assert_func(__str3|0,172,___func___partial_call|0,__str23|0)}r6=r1+16|0;r1=HEAP32[r6>>2];do{if((r1|0)!=(__Py_NoneStruct|0)){if((HEAP32[HEAP32[r1+4>>2]+84>>2]&536870912|0)!=0){break}___assert_func(__str3|0,173,___func___partial_call|0,__str24|0)}}while(0);r1=HEAP32[r5>>2];do{if((HEAP32[r1+8>>2]|0)==0){r5=r2|0;HEAP32[r5>>2]=HEAP32[r5>>2]+1|0;r7=r2,r8=r7>>2}else{if((HEAP32[r2+8>>2]|0)==0){r5=r1|0;HEAP32[r5>>2]=HEAP32[r5>>2]+1|0;r7=r1,r8=r7>>2;break}r5=_PySequence_Concat(r1,r2);if((r5|0)==0){r9=0}else{r7=r5,r8=r7>>2;break}return r9}}while(0);r2=HEAP32[r6>>2];do{if((r2|0)==(__Py_NoneStruct|0)){if((r3|0)==0){r10=0;break}r6=r3|0;HEAP32[r6>>2]=HEAP32[r6>>2]+1|0;r10=r3}else{r6=_PyDict_Copy(r2);if((r6|0)==0){r1=r7|0;r5=HEAP32[r1>>2]-1|0;HEAP32[r1>>2]=r5;if((r5|0)!=0){r9=0;return r9}FUNCTION_TABLE[HEAP32[HEAP32[r8+1]+24>>2]](r7);r9=0;return r9}if((r3|0)==0){r10=r6;break}if((_PyDict_Merge(r6,r3,1)|0)==0){r10=r6;break}r5=r7|0;r1=HEAP32[r5>>2]-1|0;HEAP32[r5>>2]=r1;if((r1|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r8+1]+24>>2]](r7)}r1=r6|0;r5=HEAP32[r1>>2]-1|0;HEAP32[r1>>2]=r5;if((r5|0)!=0){r9=0;return r9}FUNCTION_TABLE[HEAP32[HEAP32[r6+4>>2]+24>>2]](r6);r9=0;return r9}}while(0);r3=_PyObject_Call(HEAP32[r4>>2],r7,r10);r4=r7|0;r2=HEAP32[r4>>2]-1|0;HEAP32[r4>>2]=r2;if((r2|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r8+1]+24>>2]](r7)}if((r10|0)==0){r9=r3;return r9}r7=r10|0;r8=HEAP32[r7>>2]-1|0;HEAP32[r7>>2]=r8;if((r8|0)!=0){r9=r3;return r9}FUNCTION_TABLE[HEAP32[HEAP32[r10+4>>2]+24>>2]](r10);r9=r3;return r9}
// EMSCRIPTEN_END_FUNCS
Module["_init_functools"] = _init_functools;
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
