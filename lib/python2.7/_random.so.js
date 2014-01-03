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
var _random_methods;
var _random_doc;
var _module_doc;
var _genrand_int32_mag01;
var __str9;
var __str8;
var __str7;
var __str6;
var __str5;
var __str4;
var __str3;
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
var ___func___random_seed;
var _Random_Type;
_random_methods=allocate([0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_random_doc=allocate([82,97,110,100,111,109,40,41,32,45,62,32,99,114,101,97,116,101,32,97,32,114,97,110,100,111,109,32,110,117,109,98,101,114,32,103,101,110,101,114,97,116,111,114,32,119,105,116,104,32,105,116,115,32,111,119,110,32,105,110,116,101,114,110,97,108,32,115,116,97,116,101,46,0,0,0], "i8", ALLOC_NORMAL);
_module_doc=allocate([77,111,100,117,108,101,32,105,109,112,108,101,109,101,110,116,115,32,116,104,101,32,77,101,114,115,101,110,110,101,32,84,119,105,115,116,101,114,32,114,97,110,100,111,109,32,110,117,109,98,101,114,32,103,101,110,101,114,97,116,111,114,46,0], "i8", ALLOC_NORMAL);
_genrand_int32_mag01=allocate([0,0,0,0,223,176,8,153], "i8", ALLOC_NORMAL);
__str9=allocate([115,101,101,100,40,91,110,93,41,32,45,62,32,78,111,110,101,46,32,32,68,101,102,97,117,108,116,115,32,116,111,32,99,117,114,114,101,110,116,32,116,105,109,101,46,0,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([114,97,110,100,111,109,40,41,32,45,62,32,120,32,105,110,32,116,104,101,32,105,110,116,101,114,118,97,108,32,91,48,44,32,49,41,46,0,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([114,97,110,100,111,109,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([107,101,121,117,115,101,100,32,60,32,107,101,121,109,97,120,0,0,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([46,46,47,77,111,100,117,108,101,115,47,95,114,97,110,100,111,109,109,111,100,117,108,101,46,99,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([115,101,101,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([82,97,110,100,111,109,40,41,0,0,0,0], "i8", ALLOC_NORMAL);
__str22=allocate([115,116,97,116,101,32,118,101,99,116,111,114,32,105,115,32,116,104,101,32,119,114,111,110,103,32,115,105,122,101,0,0], "i8", ALLOC_NORMAL);
__str21=allocate([115,116,97,116,101,32,118,101,99,116,111,114,32,109,117,115,116,32,98,101,32,97,32,116,117,112,108,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([106,117,109,112,97,104,101,97,100,32,114,101,113,117,105,114,101,115,32,97,110,32,105,110,116,101,103,101,114,44,32,110,111,116,32,39,37,115,39,0], "i8", ALLOC_NORMAL);
__str2=allocate([95,114,97,110,100,111,109,46,82,97,110,100,111,109,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([110,117,109,98,101,114,32,111,102,32,98,105,116,115,32,109,117,115,116,32,98,101,32,103,114,101,97,116,101,114,32,116,104,97,110,32,122,101,114,111,0,0,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([105,58,103,101,116,114,97,110,100,98,105,116,115,0,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([103,101,116,114,97,110,100,98,105,116,115,40,107,41,32,45,62,32,120,46,32,32,71,101,110,101,114,97,116,101,115,32,97,32,108,111,110,103,32,105,110,116,32,119,105,116,104,32,107,32,114,97,110,100,111,109,32,98,105,116,115,46,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([103,101,116,114,97,110,100,98,105,116,115,0], "i8", ALLOC_NORMAL);
__str15=allocate([106,117,109,112,97,104,101,97,100,40,105,110,116,41,32,45,62,32,78,111,110,101,46,32,32,67,114,101,97,116,101,32,110,101,119,32,115,116,97,116,101,32,102,114,111,109,32,101,120,105,115,116,105,110,103,32,115,116,97,116,101,32,97,110,100,32,105,110,116,101,103,101,114,46,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([106,117,109,112,97,104,101,97,100,0,0,0], "i8", ALLOC_NORMAL);
__str13=allocate([115,101,116,115,116,97,116,101,40,115,116,97,116,101,41,32,45,62,32,78,111,110,101,46,32,32,82,101,115,116,111,114,101,115,32,103,101,110,101,114,97,116,111,114,32,115,116,97,116,101,46,0], "i8", ALLOC_NORMAL);
__str12=allocate([115,101,116,115,116,97,116,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([103,101,116,115,116,97,116,101,40,41,32,45,62,32,116,117,112,108,101,32,99,111,110,116,97,105,110,105,110,103,32,116,104,101,32,99,117,114,114,101,110,116,32,115,116,97,116,101,46,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([103,101,116,115,116,97,116,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([82,97,110,100,111,109,0,0], "i8", ALLOC_NORMAL);
__str=allocate([95,114,97,110,100,111,109,0], "i8", ALLOC_NORMAL);
___func___random_seed=allocate([114,97,110,100,111,109,95,115,101,101,100,0], "i8", ALLOC_NORMAL);
_Random_Type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,204,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,5,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_random_methods)>>2)]=((__str7)|0);
HEAP32[(((_random_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 6));
HEAP32[(((_random_methods)+(12))>>2)]=((__str8)|0);
HEAP32[(((_random_methods)+(16))>>2)]=((__str4)|0);
HEAP32[(((_random_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 14));
HEAP32[(((_random_methods)+(28))>>2)]=((__str9)|0);
HEAP32[(((_random_methods)+(32))>>2)]=((__str10)|0);
HEAP32[(((_random_methods)+(36))>>2)]=((FUNCTION_TABLE_OFFSET + 8));
HEAP32[(((_random_methods)+(44))>>2)]=((__str11)|0);
HEAP32[(((_random_methods)+(48))>>2)]=((__str12)|0);
HEAP32[(((_random_methods)+(52))>>2)]=((FUNCTION_TABLE_OFFSET + 2));
HEAP32[(((_random_methods)+(60))>>2)]=((__str13)|0);
HEAP32[(((_random_methods)+(64))>>2)]=((__str14)|0);
HEAP32[(((_random_methods)+(68))>>2)]=((FUNCTION_TABLE_OFFSET + 12));
HEAP32[(((_random_methods)+(76))>>2)]=((__str15)|0);
HEAP32[(((_random_methods)+(80))>>2)]=((__str16)|0);
HEAP32[(((_random_methods)+(84))>>2)]=((FUNCTION_TABLE_OFFSET + 18));
HEAP32[(((_random_methods)+(92))>>2)]=((__str17)|0);
HEAP32[(((_Random_Type)+(12))>>2)]=((__str2)|0);
HEAP32[(((_Random_Type)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((_Random_Type)+(88))>>2)]=((_random_doc)|0);
HEAP32[(((_Random_Type)+(116))>>2)]=((_random_methods)|0);
HEAP32[(((_Random_Type)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((_Random_Type)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 10);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_random_setstate,0,_PyObject_GenericGetAttr,0,_random_random,0,_random_getstate,0,_PyObject_Free,0,_random_jumpahead,0,_random_seed,0,_random_new,0,_random_getrandbits,0]);
// EMSCRIPTEN_START_FUNCS
function _init_genrand(r1,r2){var r3;HEAP32[r1+8>>2]=r2;r2=1;while(1){r3=HEAP32[r1+(r2-1<<2)+8>>2];HEAP32[r1+(r2<<2)+8>>2]=Math.imul(r3>>>30^r3,1812433253)+r2|0;r3=r2+1|0;if((r3|0)==624){break}else{r2=r3}}HEAP32[r1+2504>>2]=624;return}function _genrand_int32(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23;r2=r1>>2;r3=r1+8|0;r4=(r1+2504|0)>>2;if((HEAP32[r4]|0)>623){r5=0}else{r6=HEAP32[r4];r7=r6+1|0;HEAP32[r4]=r7;r8=(r6<<2)+r1+8|0;r9=HEAP32[r8>>2];r10=r9>>>11;r11=r10^r9;r12=r11<<7;r13=r12&-1658038656;r14=r13^r11;r15=r14<<15;r16=r15&-272236544;r17=r16^r14;r18=r17>>>18;r19=r18^r17;return r19}while(1){r20=(r5<<2)+r1+8|0;r21=r5+1|0;r22=HEAP32[((r21<<2)+8>>2)+r2];HEAP32[r20>>2]=HEAP32[_genrand_int32_mag01+((r22&1)<<2)>>2]^HEAP32[((r5+397<<2)+8>>2)+r2]^(r22&2147483646|HEAP32[r20>>2]&-2147483648)>>>1;if((r21|0)==227){r23=227;break}else{r5=r21}}while(1){r5=(r23<<2)+r1+8|0;r21=r23+1|0;r20=HEAP32[((r21<<2)+8>>2)+r2];HEAP32[r5>>2]=HEAP32[_genrand_int32_mag01+((r20&1)<<2)>>2]^HEAP32[((r23-227<<2)+8>>2)+r2]^(r20&2147483646|HEAP32[r5>>2]&-2147483648)>>>1;if((r21|0)==623){break}else{r23=r21}}r23=r1+2500|0;r21=HEAP32[r3>>2];HEAP32[r23>>2]=HEAP32[_genrand_int32_mag01+((r21&1)<<2)>>2]^HEAP32[r2+398]^(r21&2147483646|HEAP32[r23>>2]&-2147483648)>>>1;HEAP32[r4]=0;r6=HEAP32[r4];r7=r6+1|0;HEAP32[r4]=r7;r8=(r6<<2)+r1+8|0;r9=HEAP32[r8>>2];r10=r9>>>11;r11=r10^r9;r12=r11<<7;r13=r12&-1658038656;r14=r13^r11;r15=r14<<15;r16=r15&-272236544;r17=r16^r14;r18=r17>>>18;r19=r18^r17;return r19}function _init_random(){var r1;if((_PyType_Ready(_Random_Type)|0)<0){return}r1=_Py_InitModule4_64(__str|0,0,_module_doc|0,0,1013);if((r1|0)==0){return}HEAP32[_Random_Type>>2]=HEAP32[_Random_Type>>2]+1|0;_PyModule_AddObject(r1,__str1|0,_Random_Type);return}function _random_new(r1,r2,r3){var r4,r5;do{if((r1|0)==(_Random_Type|0)){if((__PyArg_NoKeywords(__str3|0,r3)|0)==0){r4=0}else{break}return r4}}while(0);r3=FUNCTION_TABLE[HEAP32[r1+152>>2]](r1,0);if((r3|0)==0){r4=0;return r4}r1=_random_seed(r3,r2);if((r1|0)==0){r2=r3|0;r5=HEAP32[r2>>2]-1|0;HEAP32[r2>>2]=r5;if((r5|0)!=0){r4=0;return r4}FUNCTION_TABLE[HEAP32[HEAP32[r3+4>>2]+24>>2]](r3);r4=0;return r4}else{r5=r1|0;r2=HEAP32[r5>>2]-1|0;HEAP32[r5>>2]=r2;if((r2|0)!=0){r4=r3;return r4}FUNCTION_TABLE[HEAP32[HEAP32[r1+4>>2]+24>>2]](r1);r4=r3;return r4}}function _init_by_array(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14;r4=(r1+8|0)>>2;_init_genrand(r1,19650218);r5=r3>>>0<624?624:r3;L41:do{if((r5|0)==0){r6=1}else{r7=r1+2500|0;r8=0;r9=r5;r10=1;while(1){r11=(r10<<2)+r1+8|0;r12=HEAP32[r1+(r10-1<<2)+8>>2];HEAP32[r11>>2]=(HEAP32[r11>>2]^Math.imul(r12>>>30^r12,1664525))+(HEAP32[r2+(r8<<2)>>2]+r8)|0;r12=r10+1|0;r11=r8+1|0;if(r12>>>0>623){HEAP32[r4]=HEAP32[r7>>2];r13=1}else{r13=r12}r12=r9-1|0;if((r12|0)==0){r6=r13;break L41}else{r8=r11>>>0<r3>>>0?r11:0;r9=r12;r10=r13}}}}while(0);r13=r1+2500|0;r3=623;r2=r6;while(1){r6=(r2<<2)+r1+8|0;r5=HEAP32[r1+(r2-1<<2)+8>>2];HEAP32[r6>>2]=(HEAP32[r6>>2]^Math.imul(r5>>>30^r5,1566083941))-r2|0;r5=r2+1|0;if(r5>>>0>623){HEAP32[r4]=HEAP32[r13>>2];r14=1}else{r14=r5}r5=r3-1|0;if((r5|0)==0){break}else{r3=r5;r2=r14}}HEAP32[r4]=-2147483648;HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;return}function _random_random(r1){return _PyFloat_FromDouble(((_genrand_int32(r1)>>>5>>>0)*67108864+(_genrand_int32(r1)>>>6>>>0))*1.1102230246251565e-16)}function _random_getstate(r1){var r2,r3,r4,r5,r6,r7,r8;r2=0;r3=_PyTuple_New(625);if((r3|0)==0){r4=0;return r4}r5=r3+12|0;r6=0;while(1){r7=_PyLong_FromUnsignedLong(HEAP32[r1+(r6<<2)+8>>2]);if((r7|0)==0){break}HEAP32[r5+(r6<<2)>>2]=r7;r8=r6+1|0;if((r8|0)<624){r6=r8}else{r2=48;break}}do{if(r2==48){r6=_PyLong_FromLong(HEAP32[r1+2504>>2]);if((r6|0)==0){break}HEAP32[r3+(r8<<2)+12>>2]=r6;r4=r3;return r4}}while(0);r8=r3|0;r1=HEAP32[r8>>2]-1|0;HEAP32[r8>>2]=r1;if((r1|0)!=0){r4=0;return r4}FUNCTION_TABLE[HEAP32[HEAP32[r3+4>>2]+24>>2]](r3);r4=0;return r4}function _random_setstate(r1,r2){var r3,r4,r5,r6,r7,r8;r3=0;if((HEAP32[HEAP32[r2+4>>2]+84>>2]&67108864|0)==0){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str21|0);r4=0;return r4}if((_PyTuple_Size(r2)|0)!=625){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str22|0);r4=0;return r4}r5=r2+12|0;r2=r5;r6=0;r7=HEAP32[r5>>2];while(1){r5=_PyLong_AsUnsignedLong(r7);if((r5|0)==-1){if((_PyErr_Occurred()|0)!=0){r4=0;r3=71;break}}HEAP32[r1+(r6<<2)+8>>2]=r5;r5=r6+1|0;r8=HEAP32[r2+(r5<<2)>>2];if((r5|0)<624){r6=r5;r7=r8}else{break}}if(r3==71){return r4}r3=_PyLong_AsLong(r8);do{if((r3|0)==-1){if((_PyErr_Occurred()|0)==0){break}else{r4=0}return r4}}while(0);HEAP32[r1+2504>>2]=r3;HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;r4=__Py_NoneStruct;return r4}function _random_jumpahead(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11;r3=0;r4=STACKTOP;r5=HEAP32[r2+4>>2];if((HEAP32[r5+84>>2]&25165824|0)==0){_PyErr_Format(HEAP32[_PyExc_TypeError>>2],__str20|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=HEAP32[r5+12>>2],tempInt));r6=0;STACKTOP=r4;return r6}else{r7=623}while(1){r5=_PyInt_FromLong(r7);if((r5|0)==0){r6=0;r3=91;break}r8=_PyNumber_Remainder(r2,r5);r9=r5|0;r10=HEAP32[r9>>2]-1|0;HEAP32[r9>>2]=r10;if((r10|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r5+4>>2]+24>>2]](r5)}if((r8|0)==0){r6=0;r3=89;break}r5=_PyInt_AsLong(r8);r10=r8|0;r9=HEAP32[r10>>2]-1|0;HEAP32[r10>>2]=r9;if((r9|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r8+4>>2]+24>>2]](r8)}if((r5|0)==-1){if((_PyErr_Occurred()|0)!=0){r6=0;r3=90;break}}r8=(r7<<2)+r1+8|0;r9=HEAP32[r8>>2];r10=(r5<<2)+r1+8|0;HEAP32[r8>>2]=HEAP32[r10>>2];HEAP32[r10>>2]=r9;r9=r7-1|0;if((r9|0)>1){r7=r9}else{r11=0;r3=85;break}}if(r3==85){while(1){r3=0;r7=r11+1|0;r2=(r11<<2)+r1+8|0;HEAP32[r2>>2]=HEAP32[r2>>2]+r7|0;if((r7|0)==624){break}else{r11=r7;r3=85}}HEAP32[r1+2504>>2]=624;HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;r6=__Py_NoneStruct;STACKTOP=r4;return r6}else if(r3==89){STACKTOP=r4;return r6}else if(r3==90){STACKTOP=r4;return r6}else if(r3==91){STACKTOP=r4;return r6}}function _random_getrandbits(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10;r3=STACKTOP;STACKTOP=STACKTOP+4|0;r4=r3,r5=r4>>2;if((_PyArg_ParseTuple(r2,__str18|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r4,tempInt))|0)==0){r6=0;STACKTOP=r3;return r6}r4=HEAP32[r5];if((r4|0)<1){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str19|0);r6=0;STACKTOP=r3;return r6}r2=(((r4-1|0)/32&-1)<<2)+4|0;r4=_PyMem_Malloc(r2);if((r4|0)==0){_PyErr_NoMemory();r6=0;STACKTOP=r3;return r6}L131:do{if((r2|0)>0){r7=0;while(1){r8=_genrand_int32(r1);r9=HEAP32[r5];if((r9|0)<32){r10=r8>>>((32-r9|0)>>>0)}else{r10=r8}HEAP8[r4+r7|0]=r10&255;HEAP8[r4+(r7|1)|0]=r10>>>8&255;HEAP8[r4+(r7|2)|0]=r10>>>16&255;HEAP8[r4+(r7|3)|0]=r10>>>24&255;r8=r7+4|0;HEAP32[r5]=HEAP32[r5]-32|0;if((r8|0)<(r2|0)){r7=r8}else{break L131}}}}while(0);r5=__PyLong_FromByteArray(r4,r2,1,0);_PyMem_Free(r4);r6=r5;STACKTOP=r3;return r6}function _random_seed(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39;r3=0;r4=STACKTOP;STACKTOP=STACKTOP+8|0;r5=r4;r6=r4+4;HEAP32[r5>>2]=0;if((_PyArg_UnpackTuple(r2,__str4|0,0,1,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r5,tempInt))|0)==0){r7=0;STACKTOP=r4;return r7}r2=HEAP32[r5>>2];if((r2|0)==0|(r2|0)==(__Py_NoneStruct|0)){_time(r6);_init_genrand(r1,HEAP32[r6>>2]);HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;r7=__Py_NoneStruct;STACKTOP=r4;return r7}do{if((HEAP32[HEAP32[r2+4>>2]+84>>2]&25165824|0)==0){r6=_PyObject_Hash(r2);if((r6|0)==-1){r8=0;r9=0;break}r10=_PyLong_FromUnsignedLong(r6);r3=115;break}else{r10=_PyNumber_Absolute(r2);r3=115;break}}while(0);do{if(r3==115){if((r10|0)==0){r8=0;r9=0;break}r2=_PyMem_Malloc(32);r6=r2;if((r2|0)==0){r11=r6;r12=r10;r13=0}else{r2=_PyLong_FromUnsignedLong(-1);do{if((r2|0)==0){r14=0;r15=r10;r16=r6}else{r5=_PyInt_FromLong(32);do{if((r5|0)==0){r17=r6;r18=r10;r19=0;r20=0;r3=139}else{r21=r10;r22=r6;r23=0;r24=8;while(1){r25=_PyObject_IsTrue(r21);if((r25|0)==0){r3=135;break}else if((r25|0)==-1){r26=0;r27=r21;r28=r22;break}r25=_PyNumber_And(r21,r2);if((r25|0)==0){r26=0;r27=r21;r28=r22;break}r29=_PyLong_AsUnsignedLong(r25);r30=r25|0;r31=HEAP32[r30>>2]-1|0;HEAP32[r30>>2]=r31;if((r31|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r25+4>>2]+24>>2]](r25)}if((r29|0)==-1){if((_PyErr_Occurred()|0)!=0){r26=0;r27=r21;r28=r22;break}}r32=_PyNumber_Rshift(r21,r5);if((r32|0)==0){r26=0;r27=r21;r28=r22;break}r25=r21|0;r31=HEAP32[r25>>2]-1|0;HEAP32[r25>>2]=r31;if((r31|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r21+4>>2]+24>>2]](r21)}if(r23>>>0<r24>>>0){r33=r22;r34=r24}else{if((r24&2147483647|0)!=(r24|0)){r3=130;break}r31=_PyMem_Realloc(r22,r24<<3);r25=r31;if((r31|0)==0){r26=0;r27=r32;r28=r25;break}else{r33=r25;r34=r24<<1}}if(r23>>>0>=r34>>>0){r3=133;break}HEAP32[r33+(r23<<2)>>2]=r29;r21=r32;r22=r33;r23=r23+1|0;r24=r34}if(r3==130){_PyErr_NoMemory();r26=0;r27=r32;r28=r22}else if(r3==135){if((r23|0)==0){HEAP32[r22+(r23<<2)>>2]=0;r35=r23+1|0}else{r35=r23}_init_by_array(r1,r22,r35);r26=__Py_NoneStruct;r27=r21;r28=r22}else if(r3==133){___assert_func(__str5|0,296,___func___random_seed|0,__str6|0)}if((r2|0)==0){r36=r28;r37=r27;r38=r5;r39=r26;break}else{r17=r28;r18=r27;r19=r5;r20=r26;r3=139;break}}}while(0);do{if(r3==139){r5=r2|0;r24=HEAP32[r5>>2]-1|0;HEAP32[r5>>2]=r24;if((r24|0)!=0){r36=r17;r37=r18;r38=r19;r39=r20;break}FUNCTION_TABLE[HEAP32[HEAP32[r2+4>>2]+24>>2]](r2);r36=r17;r37=r18;r38=r19;r39=r20}}while(0);if((r38|0)==0){r14=r39;r15=r37;r16=r36;break}r24=r38|0;r5=HEAP32[r24>>2]-1|0;HEAP32[r24>>2]=r5;if((r5|0)!=0){r14=r39;r15=r37;r16=r36;break}FUNCTION_TABLE[HEAP32[HEAP32[r38+4>>2]+24>>2]](r38);r14=r39;r15=r37;r16=r36}}while(0);if((r15|0)==0){r8=r16;r9=r14;break}else{r11=r16;r12=r15;r13=r14}}r2=r12|0;r6=HEAP32[r2>>2]-1|0;HEAP32[r2>>2]=r6;if((r6|0)!=0){r8=r11;r9=r13;break}FUNCTION_TABLE[HEAP32[HEAP32[r12+4>>2]+24>>2]](r12);r8=r11;r9=r13}}while(0);_PyMem_Free(r8);r7=r9;STACKTOP=r4;return r7}
// EMSCRIPTEN_END_FUNCS
Module["_init_random"] = _init_random;
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
