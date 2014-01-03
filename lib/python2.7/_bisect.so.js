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
var _insort_right_keywords;
var _insort_right_doc;
var _insort_left_keywords;
var _insort_left_doc;
var _insort_doc;
var _bisect_right_keywords;
var _bisect_right_doc;
var _bisect_methods;
var _bisect_left_keywords;
var _bisect_left_doc;
var _bisect_doc;
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
_module_doc=allocate([66,105,115,101,99,116,105,111,110,32,97,108,103,111,114,105,116,104,109,115,46,10,10,84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,115,117,112,112,111,114,116,32,102,111,114,32,109,97,105,110,116,97,105,110,105,110,103,32,97,32,108,105,115,116,32,105,110,32,115,111,114,116,101,100,32,111,114,100,101,114,32,119,105,116,104,111,117,116,10,104,97,118,105,110,103,32,116,111,32,115,111,114,116,32,116,104,101,32,108,105,115,116,32,97,102,116,101,114,32,101,97,99,104,32,105,110,115,101,114,116,105,111,110,46,32,70,111,114,32,108,111,110,103,32,108,105,115,116,115,32,111,102,32,105,116,101,109,115,32,119,105,116,104,10,101,120,112,101,110,115,105,118,101,32,99,111,109,112,97,114,105,115,111,110,32,111,112,101,114,97,116,105,111,110,115,44,32,116,104,105,115,32,99,97,110,32,98,101,32,97,110,32,105,109,112,114,111,118,101,109,101,110,116,32,111,118,101,114,32,116,104,101,32,109,111,114,101,10,99,111,109,109,111,110,32,97,112,112,114,111,97,99,104,46,10,0,0,0], "i8", ALLOC_NORMAL);
_insort_right_keywords=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_insort_right_doc=allocate([105,110,115,111,114,116,95,114,105,103,104,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,10,10,73,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,110,100,32,107,101,101,112,32,105,116,32,115,111,114,116,101,100,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,73,102,32,120,32,105,115,32,97,108,114,101,97,100,121,32,105,110,32,97,44,32,105,110,115,101,114,116,32,105,116,32,116,111,32,116,104,101,32,114,105,103,104,116,32,111,102,32,116,104,101,32,114,105,103,104,116,109,111,115,116,32,120,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0], "i8", ALLOC_NORMAL);
_insort_left_keywords=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_insort_left_doc=allocate([105,110,115,111,114,116,95,108,101,102,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,10,10,73,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,110,100,32,107,101,101,112,32,105,116,32,115,111,114,116,101,100,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,73,102,32,120,32,105,115,32,97,108,114,101,97,100,121,32,105,110,32,97,44,32,105,110,115,101,114,116,32,105,116,32,116,111,32,116,104,101,32,108,101,102,116,32,111,102,32,116,104,101,32,108,101,102,116,109,111,115,116,32,120,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0,0,0,0], "i8", ALLOC_NORMAL);
_insort_doc=allocate([65,108,105,97,115,32,102,111,114,32,105,110,115,111,114,116,95,114,105,103,104,116,40,41,46,10,0,0], "i8", ALLOC_NORMAL);
_bisect_right_keywords=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_bisect_right_doc=allocate([98,105,115,101,99,116,95,114,105,103,104,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,32,45,62,32,105,110,100,101,120,10,10,82,101,116,117,114,110,32,116,104,101,32,105,110,100,101,120,32,119,104,101,114,101,32,116,111,32,105,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,84,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,105,32,105,115,32,115,117,99,104,32,116,104,97,116,32,97,108,108,32,101,32,105,110,32,97,91,58,105,93,32,104,97,118,101,32,101,32,60,61,32,120,44,32,97,110,100,32,97,108,108,32,101,32,105,110,10,97,91,105,58,93,32,104,97,118,101,32,101,32,62,32,120,46,32,32,83,111,32,105,102,32,120,32,97,108,114,101,97,100,121,32,97,112,112,101,97,114,115,32,105,110,32,116,104,101,32,108,105,115,116,44,32,105,32,112,111,105,110,116,115,32,106,117,115,116,10,98,101,121,111,110,100,32,116,104,101,32,114,105,103,104,116,109,111,115,116,32,120,32,97,108,114,101,97,100,121,32,116,104,101,114,101,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0,0], "i8", ALLOC_NORMAL);
_bisect_methods=allocate([0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_bisect_left_keywords=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_bisect_left_doc=allocate([98,105,115,101,99,116,95,108,101,102,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,32,45,62,32,105,110,100,101,120,10,10,82,101,116,117,114,110,32,116,104,101,32,105,110,100,101,120,32,119,104,101,114,101,32,116,111,32,105,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,84,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,105,32,105,115,32,115,117,99,104,32,116,104,97,116,32,97,108,108,32,101,32,105,110,32,97,91,58,105,93,32,104,97,118,101,32,101,32,60,32,120,44,32,97,110,100,32,97,108,108,32,101,32,105,110,10,97,91,105,58,93,32,104,97,118,101,32,101,32,62,61,32,120,46,32,32,83,111,32,105,102,32,120,32,97,108,114,101,97,100,121,32,97,112,112,101,97,114,115,32,105,110,32,116,104,101,32,108,105,115,116,44,32,105,32,112,111,105,110,116,115,32,106,117,115,116,10,98,101,102,111,114,101,32,116,104,101,32,108,101,102,116,109,111,115,116,32,120,32,97,108,114,101,97,100,121,32,116,104,101,114,101,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0,0,0], "i8", ALLOC_NORMAL);
_bisect_doc=allocate([65,108,105,97,115,32,102,111,114,32,98,105,115,101,99,116,95,114,105,103,104,116,40,41,46,10,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([108,111,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([120,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([97,0,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([105,110,115,111,114,116,95,108,101,102,116,0], "i8", ALLOC_NORMAL);
__str5=allocate([98,105,115,101,99,116,95,108,101,102,116,0], "i8", ALLOC_NORMAL);
__str4=allocate([105,110,115,111,114,116,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([105,110,115,111,114,116,95,114,105,103,104,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([98,105,115,101,99,116,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([79,79,124,110,110,58,98,105,115,101,99,116,95,114,105,103,104,116,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([110,79,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([79,79,124,110,110,58,105,110,115,111,114,116,95,114,105,103,104,116,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([79,79,124,110,110,58,98,105,115,101,99,116,95,108,101,102,116,0,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([108,111,32,109,117,115,116,32,98,101,32,110,111,110,45,110,101,103,97,116,105,118,101,0], "i8", ALLOC_NORMAL);
__str13=allocate([105,79,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([105,110,115,101,114,116,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([79,79,124,110,110,58,105,110,115,111,114,116,95,108,101,102,116,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([104,105,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([98,105,115,101,99,116,95,114,105,103,104,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str=allocate([95,98,105,115,101,99,116,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_insort_right_keywords)>>2)]=((__str7)|0);
HEAP32[(((_insort_right_keywords)+(4))>>2)]=((__str8)|0);
HEAP32[(((_insort_right_keywords)+(8))>>2)]=((__str9)|0);
HEAP32[(((_insort_right_keywords)+(12))>>2)]=((__str10)|0);
HEAP32[((_insort_left_keywords)>>2)]=((__str7)|0);
HEAP32[(((_insort_left_keywords)+(4))>>2)]=((__str8)|0);
HEAP32[(((_insort_left_keywords)+(8))>>2)]=((__str9)|0);
HEAP32[(((_insort_left_keywords)+(12))>>2)]=((__str10)|0);
HEAP32[((_bisect_right_keywords)>>2)]=((__str7)|0);
HEAP32[(((_bisect_right_keywords)+(4))>>2)]=((__str8)|0);
HEAP32[(((_bisect_right_keywords)+(8))>>2)]=((__str9)|0);
HEAP32[(((_bisect_right_keywords)+(12))>>2)]=((__str10)|0);
HEAP32[((_bisect_methods)>>2)]=((__str1)|0);
HEAP32[(((_bisect_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 6));
HEAP32[(((_bisect_methods)+(12))>>2)]=((_bisect_right_doc)|0);
HEAP32[(((_bisect_methods)+(16))>>2)]=((__str2)|0);
HEAP32[(((_bisect_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 6));
HEAP32[(((_bisect_methods)+(28))>>2)]=((_bisect_doc)|0);
HEAP32[(((_bisect_methods)+(32))>>2)]=((__str3)|0);
HEAP32[(((_bisect_methods)+(36))>>2)]=((FUNCTION_TABLE_OFFSET + 2));
HEAP32[(((_bisect_methods)+(44))>>2)]=((_insort_right_doc)|0);
HEAP32[(((_bisect_methods)+(48))>>2)]=((__str4)|0);
HEAP32[(((_bisect_methods)+(52))>>2)]=((FUNCTION_TABLE_OFFSET + 2));
HEAP32[(((_bisect_methods)+(60))>>2)]=((_insort_doc)|0);
HEAP32[(((_bisect_methods)+(64))>>2)]=((__str5)|0);
HEAP32[(((_bisect_methods)+(68))>>2)]=((FUNCTION_TABLE_OFFSET + 8));
HEAP32[(((_bisect_methods)+(76))>>2)]=((_bisect_left_doc)|0);
HEAP32[(((_bisect_methods)+(80))>>2)]=((__str6)|0);
HEAP32[(((_bisect_methods)+(84))>>2)]=((FUNCTION_TABLE_OFFSET + 4));
HEAP32[(((_bisect_methods)+(92))>>2)]=((_insort_left_doc)|0);
HEAP32[((_bisect_left_keywords)>>2)]=((__str7)|0);
HEAP32[(((_bisect_left_keywords)+(4))>>2)]=((__str8)|0);
HEAP32[(((_bisect_left_keywords)+(8))>>2)]=((__str9)|0);
HEAP32[(((_bisect_left_keywords)+(12))>>2)]=((__str10)|0);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_insort_right,0,_insort_left,0,_bisect_right,0,_bisect_left,0]);
// EMSCRIPTEN_START_FUNCS
function _init_bisect(){_Py_InitModule4_64(__str|0,_bisect_methods|0,_module_doc|0,0,1013);return}function _bisect_right(r1,r2,r3){var r4,r5,r6,r7,r8;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r4=r1;r5=r1+4;r6=r1+8;r7=r1+12;HEAP32[r6>>2]=0;HEAP32[r7>>2]=-1;if((_PyArg_ParseTupleAndKeywords(r2,r3,__str18|0,_bisect_right_keywords|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r4,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r6,HEAP32[tempInt+12>>2]=r7,tempInt))|0)==0){r8=0;STACKTOP=r1;return r8}r3=_internal_bisect_right(HEAP32[r4>>2],HEAP32[r5>>2],HEAP32[r6>>2],HEAP32[r7>>2]);if((r3|0)<0){r8=0;STACKTOP=r1;return r8}r8=_PyInt_FromSsize_t(r3);STACKTOP=r1;return r8}function _insort_right(r1,r2,r3){var r4,r5,r6,r7,r8;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r4=r1;r5=r1+4;r6=r1+8;r7=r1+12;HEAP32[r6>>2]=0;HEAP32[r7>>2]=-1;if((_PyArg_ParseTupleAndKeywords(r2,r3,__str16|0,_insort_right_keywords|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r4,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r6,HEAP32[tempInt+12>>2]=r7,tempInt))|0)==0){r8=0;STACKTOP=r1;return r8}r3=_internal_bisect_right(HEAP32[r4>>2],HEAP32[r5>>2],HEAP32[r6>>2],HEAP32[r7>>2]);if((r3|0)<0){r8=0;STACKTOP=r1;return r8}r7=HEAP32[r4>>2];r4=HEAP32[r5>>2];do{if((HEAP32[r7+4>>2]|0)==(_PyList_Type|0)){if((_PyList_Insert(r7,r3,r4)|0)<0){r8=0}else{break}STACKTOP=r1;return r8}else{r5=_PyObject_CallMethod(r7,__str12|0,__str17|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r3,HEAP32[tempInt+4>>2]=r4,tempInt));if((r5|0)==0){r8=0;STACKTOP=r1;return r8}r6=r5|0;r2=HEAP32[r6>>2]-1|0;HEAP32[r6>>2]=r2;if((r2|0)!=0){break}FUNCTION_TABLE[HEAP32[HEAP32[r5+4>>2]+24>>2]](r5)}}while(0);HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;r8=__Py_NoneStruct;STACKTOP=r1;return r8}function _bisect_left(r1,r2,r3){var r4,r5,r6,r7,r8;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r4=r1;r5=r1+4;r6=r1+8;r7=r1+12;HEAP32[r6>>2]=0;HEAP32[r7>>2]=-1;if((_PyArg_ParseTupleAndKeywords(r2,r3,__str15|0,_bisect_left_keywords|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r4,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r6,HEAP32[tempInt+12>>2]=r7,tempInt))|0)==0){r8=0;STACKTOP=r1;return r8}r3=_internal_bisect_left(HEAP32[r4>>2],HEAP32[r5>>2],HEAP32[r6>>2],HEAP32[r7>>2]);if((r3|0)<0){r8=0;STACKTOP=r1;return r8}r8=_PyInt_FromSsize_t(r3);STACKTOP=r1;return r8}function _insort_left(r1,r2,r3){var r4,r5,r6,r7,r8;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r4=r1;r5=r1+4;r6=r1+8;r7=r1+12;HEAP32[r6>>2]=0;HEAP32[r7>>2]=-1;if((_PyArg_ParseTupleAndKeywords(r2,r3,__str11|0,_insort_left_keywords|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r4,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r6,HEAP32[tempInt+12>>2]=r7,tempInt))|0)==0){r8=0;STACKTOP=r1;return r8}r3=_internal_bisect_left(HEAP32[r4>>2],HEAP32[r5>>2],HEAP32[r6>>2],HEAP32[r7>>2]);if((r3|0)<0){r8=0;STACKTOP=r1;return r8}r7=HEAP32[r4>>2];r4=HEAP32[r5>>2];do{if((HEAP32[r7+4>>2]|0)==(_PyList_Type|0)){if((_PyList_Insert(r7,r3,r4)|0)<0){r8=0}else{break}STACKTOP=r1;return r8}else{r5=_PyObject_CallMethod(r7,__str12|0,__str13|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r3,HEAP32[tempInt+4>>2]=r4,tempInt));if((r5|0)==0){r8=0;STACKTOP=r1;return r8}r6=r5|0;r2=HEAP32[r6>>2]-1|0;HEAP32[r6>>2]=r2;if((r2|0)!=0){break}FUNCTION_TABLE[HEAP32[HEAP32[r5+4>>2]+24>>2]](r5)}}while(0);HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;r8=__Py_NoneStruct;STACKTOP=r1;return r8}function _internal_bisect_left(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11;r5=0;if((r3|0)<0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str14|0);r6=-1;return r6}do{if((r4|0)==-1){r7=_PySequence_Size(r1);if((r7|0)<0){r6=-1}else{r8=r7;break}return r6}else{r8=r4}}while(0);if((r8|0)>(r3|0)){r9=r8;r10=r3}else{r6=r3;return r6}while(1){r3=(r10+r9|0)/2&-1;r8=_PySequence_GetItem(r1,r3);if((r8|0)==0){r6=-1;r5=59;break}r4=_PyObject_RichCompareBool(r8,r2,0);r7=r8|0;r11=HEAP32[r7>>2]-1|0;HEAP32[r7>>2]=r11;if((r11|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r8+4>>2]+24>>2]](r8)}if((r4|0)<0){r6=-1;r5=60;break}r8=(r4|0)==0;r4=r8?r3:r9;r11=r8?r10:r3+1|0;if((r11|0)<(r4|0)){r9=r4;r10=r11}else{r6=r11;r5=58;break}}if(r5==58){return r6}else if(r5==59){return r6}else if(r5==60){return r6}}function _internal_bisect_right(r1,r2,r3,r4){var r5,r6,r7,r8,r9,r10,r11;r5=0;if((r3|0)<0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str14|0);r6=-1;return r6}do{if((r4|0)==-1){r7=_PySequence_Size(r1);if((r7|0)<0){r6=-1}else{r8=r7;break}return r6}else{r8=r4}}while(0);if((r8|0)>(r3|0)){r9=r8;r10=r3}else{r6=r3;return r6}while(1){r3=(r10+r9|0)/2&-1;r8=_PySequence_GetItem(r1,r3);if((r8|0)==0){r6=-1;r5=77;break}r4=_PyObject_RichCompareBool(r2,r8,0);r7=r8|0;r11=HEAP32[r7>>2]-1|0;HEAP32[r7>>2]=r11;if((r11|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r8+4>>2]+24>>2]](r8)}if((r4|0)<0){r6=-1;r5=76;break}r8=(r4|0)==0;r4=r8?r9:r3;r11=r8?r3+1|0:r10;if((r11|0)<(r4|0)){r9=r4;r10=r11}else{r6=r11;r5=74;break}}if(r5==74){return r6}else if(r5==76){return r6}else if(r5==77){return r6}}
// EMSCRIPTEN_END_FUNCS
Module["_init_bisect"] = _init_bisect;
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
